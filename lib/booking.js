import { supabase, SUPABASE_CONFIGURED } from "./supabaseClient";

const NGN = new Intl.NumberFormat("en-NG");

const sb = SUPABASE_CONFIGURED ? supabase : null;

const DEMO_COURTS = [
  {
    id: "demo-1",
    name: "Indoor Arena",
    slug: "indoor-arena",
    hero_image: "",
    card_image: "",
    hourly_rate: 35000,
    daily_rate: 140000,
    weekly_rate: 850000,
    is_active: true,
  },
  {
    id: "demo-2",
    name: "Lounge",
    slug: "lounge",
    hero_image: "",
    card_image: "",
    hourly_rate: 12000,
    daily_rate: 90000,
    weekly_rate: 520000,
    is_active: true,
  },
  {
    id: "demo-3",
    name: "Gym",
    slug: "gym",
    hero_image: "",
    card_image: "",
    hourly_rate: 10000,
    daily_rate: 75000,
    weekly_rate: 450000,
    is_active: true,
  },
  {
    id: "demo-4",
    name: "Airport",
    slug: "airport-view",
    hero_image: "",
    card_image: "",
    hourly_rate: 15000,
    daily_rate: 120000,
    weekly_rate: 700000,
    is_active: true,
  },
  {
    id: "demo-5",
    name: "Barbershop",
    slug: "barbershop",
    hero_image: "",
    card_image: "",
    hourly_rate: 12000,
    daily_rate: 82000,
    weekly_rate: 480000,
    is_active: true,
  },
  {
    id: "demo-6",
    name: "Upskill Center",
    slug: "upskill",
    hero_image: "",
    card_image: "",
    hourly_rate: 14000,
    daily_rate: 98000,
    weekly_rate: 560000,
    is_active: true,
  },
];

const COURT_IMAGES = [
  { key: "indoor", src: "/assets/img/indoor Arena.jpg" },
  { key: "airport", src: "/assets/img/Airport.jpg" },
  { key: "barbershop", src: "/assets/img/barbershop.jpg" },
  { key: "gym", src: "/assets/img/gym.jpg" },
  { key: "lounge", src: "/assets/img/lounge.jpg" },
  { key: "upskill", src: "/assets/img/upskill.jpg" },
];

const USAGE_ITEMS = [
  {
    icon: `
      <svg class="strip__icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4h10v3a5 5 0 0 1-10 0z"></path>
        <path d="M7 5H5a3 3 0 0 0 3 3"></path>
        <path d="M17 5h2a3 3 0 0 1-3 3"></path>
        <path d="M12 12v3"></path>
        <path d="M9 19h6"></path>
        <path d="M10 15h4"></path>
      </svg>
    `,
    title: "Tournaments",
    copy: "League games, finals, and showcases.",
  },
  {
    icon: `
      <svg class="strip__icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 8l9-4 9 4"></path>
        <rect x="4" y="8" width="16" height="12" rx="1"></rect>
        <path d="M9 20v-5h6v5"></path>
        <path d="M7 12h2M11 12h2M15 12h2"></path>
      </svg>
    `,
    title: "School events",
    copy: "Sports days, inter-house, assemblies.",
  },
  {
    icon: `
      <svg class="strip__icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9" cy="12" r="4"></circle>
        <circle cx="15" cy="12" r="4"></circle>
        <path d="M12 6l2-2 2 2-2 2z"></path>
      </svg>
    `,
    title: "Weddings",
    copy: "Reception layouts, vendor staging.",
  },
  {
    icon: `
      <svg class="strip__icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3c-1 1-1 2-1 3 0 1 1 2 2 2s2-1 2-2c0-1-1-2-1-3"></path>
        <rect x="9" y="9" width="6" height="11" rx="1"></rect>
        <path d="M9 13h6"></path>
      </svg>
    `,
    title: "Funerals",
    copy: "Overflow seating, organized gathering.",
  },
  {
    icon: `
      <svg class="strip__icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
        <path d="M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2"></path>
      </svg>
    `,
    title: "Corporate events",
    copy: "Team bonding, product showcases.",
  },
];

const $ = (id) => document.getElementById(id);
const qs = (sel, root = document) => root.querySelector(sel);
const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function show(el, on = true) {
  if (!el) return;
  el.style.display = on ? "block" : "none";
}

function setText(el, text) {
  if (!el) return;
  el.textContent = text;
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function todayISO() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function toPlanLabel(planValue) {
  const val = String(planValue || "").toLowerCase();
  if (val === "daily") return "Daily";
  if (val === "weekly") return "Weekly";
  return "Hourly";
}

function formatNaira(amount) {
  return `\u20A6${NGN.format(amount)}`;
}

const initialState = () => ({
  courts: [],
  selectedCourtId: null,
  plan: "Hourly",
  startDate: todayISO(),
  endDate: todayISO(),
  startTime: "10:00",
  hours: 2,
  promo: null,
  pricing: { base: 0, discount: 0, total: 0 },
  blockedDates: new Set(),
  bookedDates: new Set(),
  receipt: { html: "", filename: "" },
});

let state = initialState();
let bookingCleanup = null;

export function initBookingPage() {
  if (typeof document === "undefined") return () => {};
  if (bookingCleanup) bookingCleanup();

  state = initialState();

  const cleanups = [];
  const on = (el, evt, handler, options) => {
    if (!el) return;
    el.addEventListener(evt, handler, options);
    cleanups.push(() => el.removeEventListener(evt, handler, options));
  };
  const onDoc = (evt, handler, options) => {
    document.addEventListener(evt, handler, options);
    cleanups.push(() => document.removeEventListener(evt, handler, options));
  };

  wireGlobalButtons(on, onDoc);
  wireBookingForm(on);
  wirePromo(on);
  wireReceiptModal(on);
  on($("confirmBooking"), "click", submitBooking);

  renderUsageStrip();

  const stopReveal = setupScrollReveal();
  if (stopReveal) cleanups.push(stopReveal);

  const init = async () => {
    setText($("year"), String(new Date().getFullYear()));

    await loadCourts();
    await refreshAvailability();

    updatePlanFieldsUI();
    syncInputsFromState();
    recalcPrice();
  };

  void init();

  bookingCleanup = () => {
    cleanups.forEach((fn) => fn());
    bookingCleanup = null;
  };

  return bookingCleanup;
}

function wireGlobalButtons(on, onDoc) {
  on($("scrollBook"), "click", scrollToBooking);
  on($("bannerBookBtn"), "click", scrollToBooking);
  on($("navToggle"), "click", toggleMobileMenu);
  qsa("#mobileMenu a").forEach((link) => {
    on(link, "click", closeMobileMenu);
  });

  on($("bookNowBtn"), "click", openBookingModal);

  on($("closeModal"), "click", closeBookingModal);
  on($("cancelModal"), "click", closeBookingModal);
  on($("modalBackdrop"), "click", (e) => {
    if (e.target === $("modalBackdrop")) closeBookingModal();
  });
  onDoc("keydown", (e) => {
    if (e.key === "Escape") closeBookingModal();
  });
}

function toggleMobileMenu() {
  const menu = $("mobileMenu");
  const toggle = $("navToggle");
  if (!menu || !toggle) return;
  const isOpen = menu.classList.toggle("is-open");
  menu.setAttribute("aria-hidden", isOpen ? "false" : "true");
  toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function closeMobileMenu() {
  const menu = $("mobileMenu");
  const toggle = $("navToggle");
  if (!menu || !toggle) return;
  menu.classList.remove("is-open");
  menu.setAttribute("aria-hidden", "true");
  toggle.setAttribute("aria-expanded", "false");
}

function wireReceiptModal(on) {
  on($("closeReceipt"), "click", closeReceiptModal);
  on($("cancelReceipt"), "click", closeReceiptModal);
  on($("receiptBackdrop"), "click", (e) => {
    if (e.target === $("receiptBackdrop")) closeReceiptModal();
  });
  on($("downloadReceipt"), "click", downloadReceipt);
}

function renderUsageStrip() {
  const wrap = $("usageStrip");
  if (!wrap) return;
  wrap.innerHTML = USAGE_ITEMS.map((item) => {
    return `
      <div class="strip__item">
        <div class="strip__meta">
          <div class="strip__head">
            <span class="strip__icon">${item.icon}</span>
            <b>${escapeHtml(item.title)}</b>
          </div>
          <p>${escapeHtml(item.copy)}</p>
        </div>
      </div>
    `;
  }).join("");
}

function setupScrollReveal() {
  const targets = qsa(
    ".section, .strip, .promoBanner, .footer, .booking, .court-view, .card"
  );
  if (!targets.length) return null;

  targets.forEach((el, idx) => {
    el.classList.add("reveal");
    el.style.setProperty("--reveal-delay", `${Math.min(idx * 60, 420)}ms`);
  });

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("reveal--in"));
    return null;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--in");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
  );

  targets.forEach((el) => io.observe(el));

  return () => io.disconnect();
}

function wireBookingForm(on) {
  qsa(".tab").forEach((tab) => {
    on(tab, "click", () => {
      state.plan = toPlanLabel(tab.dataset.plan);
      qsa(".tab").forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");
      updatePlanFieldsUI();
      recalcPrice();
    });
  });

  on($("courtSelect"), "change", async (e) => {
    setSelectedCourt(e.target.value);
    await refreshAvailability();
    recalcPrice();
  });

  on($("durationInput"), "change", (e) => {
    state.hours = clamp(Number(e.target.value || 1), 1, 12);
    recalcPrice();
  });

  on($("dateInput"), "change", async (e) => {
    state.startDate = e.target.value || todayISO();
    if (state.plan === "Hourly") state.endDate = state.startDate;
    await refreshAvailability();
    recalcPrice();
  });

  on($("endDateInput"), "change", async (e) => {
    state.endDate = e.target.value || state.startDate;
    await refreshAvailability();
    recalcPrice();
  });

  on($("timeInput"), "change", (e) => {
    state.startTime = e.target.value || "10:00";
  });

  on($("quoteBtn"), "click", async () => {
    await refreshAvailability();
    recalcPrice();
  });
}

function wirePromo(on) {
  on($("applyPromo"), "click", applyPromo);
  on($("promoInput"), "keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      applyPromo();
    }
  });
}

function scrollToBooking() {
  const booking = qs(".booking");
  if (!booking) return;
  booking.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function loadCourts() {
  if (!sb) {
    state.courts = DEMO_COURTS.slice();
  } else {
    const { data, error } = await sb
      .from("courts")
      .select(
        "id,name,slug,hero_image,card_image,hourly_rate,daily_rate,weekly_rate,is_active"
      )
      .eq("is_active", true)
      .order("name", { ascending: true });

    if (error) {
      console.error(error);
      state.courts = DEMO_COURTS.slice();
    } else {
      state.courts = data || [];
      if (!state.courts.length) {
        state.courts = DEMO_COURTS.slice();
      }
    }
  }

  renderCourtCategories();
  renderTrendingCourts();

  if (!state.selectedCourtId && state.courts.length) {
    setSelectedCourt(state.courts[0].id);
  }
}

function renderCourtCategories() {
  const wrap = $("categoryCards");
  if (!wrap) return;

  wrap.innerHTML = state.courts
    .map((c) => {
      const img = resolveCourtImage(c);
      return `
        <button class="court-view" type="button" data-court="${c.id}">
          <div class="court-view__img">
            ${img ? `<img src="${escapeAttr(img)}" alt="${escapeHtml(c.name)}" />` : ""}
          </div>
          <div class="court-view__label">${escapeHtml(c.name)}</div>
        </button>
      `;
    })
    .join("");

  qsa("[data-court]", wrap).forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-court");
      setSelectedCourt(id);
      scrollToBooking();
    });
  });
}

function renderTrendingCourts() {
  const wrap = $("trendingCards");
  if (!wrap) return;

  wrap.innerHTML = state.courts
    .slice(0, 4)
    .map((c) => {
      const img = c.hero_image || c.card_image || "";
      const price = formatNaira(c.daily_rate || 0);
      return `
        <article class="card trend">
          <div class="card__img">
            ${img ? `<img src="${escapeAttr(img)}" alt="${escapeHtml(c.name)}" />` : ""}
          </div>
          <div class="card__body">
            <div class="card__title">
              <b>${escapeHtml(c.name)}</b>
              <span class="arrow">-></span>
            </div>
            <div class="card__desc">Popular this week.</div>
            <div class="buyrow">
              <span class="pricepill">${price}/day</span>
              <button class="btn btn--light" type="button" data-court="${c.id}">
                Book
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  qsa("[data-court]", wrap).forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-court");
      setSelectedCourt(id);
      scrollToBooking();
    });
  });
}

function setSelectedCourt(courtId) {
  state.selectedCourtId = courtId;

  const court = state.courts.find((c) => String(c.id) === String(courtId));
  if (!court) return;

  if ($("courtSelect")) {
    if (!$("courtSelect").dataset.bound) {
      $("courtSelect").innerHTML = state.courts
        .map((c) => `<option value="${c.id}">${escapeHtml(c.name)}</option>`)
        .join("");
      $("courtSelect").dataset.bound = "1";
    }
    $("courtSelect").value = String(courtId);
  }

  if ($("rateHint")) {
    $("rateHint").textContent = `Hourly ${formatNaira(
      court.hourly_rate
    )} | Daily ${formatNaira(court.daily_rate)} | Weekly ${formatNaira(
      court.weekly_rate
    )}`;
  }

  refreshAvailability();
  recalcPrice();
}

function resolveCourtImage(court) {
  const haystack = `${court?.name || ""} ${court?.slug || ""}`.toLowerCase();
  const match = COURT_IMAGES.find((img) => haystack.includes(img.key));
  if (match) return match.src;
  return court?.card_image || court?.hero_image || "";
}

function openBookingModal() {
  const modal = $("modal");
  if (!modal) return;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  renderBookingSummary();
  showMessage("modalError", "", false);
  showMessage("modalOk", "", false);
}

function closeBookingModal() {
  const modal = $("modal");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function openReceiptModal() {
  const modal = $("receiptModal");
  if (!modal) return;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeReceiptModal() {
  const modal = $("receiptModal");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function renderReceipt(payload, ref) {
  const receiptEl = $("receiptContent");
  if (!receiptEl) return;

  const court = state.courts.find(
    (c) => String(c.id) === String(payload.court_id)
  );
  const name = court ? court.name : "Selected court";
  const dates =
    payload.plan === "Hourly"
      ? `${payload.start_date} ${payload.start_time}`
      : `${payload.start_date} to ${payload.end_date}`;
  const receiptId = ref || "pending";
  const issuedAt = new Date().toLocaleString("en-NG");

  const rows = [
    ["Court", name],
    ["Plan", payload.plan],
    ["Dates", dates],
    ["Subtotal", formatNaira(payload.base_amount)],
    ["Discount", formatNaira(payload.discount_amount)],
    ["Total", formatNaira(payload.total_amount)],
    ["Status", payload.status],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<div class="receipt__row"><span>${label}</span><b>${value}</b></div>`
    )
    .join("");

  receiptEl.innerHTML = `
    <div class="receipt__title">Dolphins Courts</div>
    <div class="receipt__muted">Receipt ID: ${receiptId}</div>
    <div class="receipt__muted">Issued: ${issuedAt}</div>
    ${rowsHtml}
  `;

  const receiptHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Receipt ${receiptId}</title>
    <style>
      body { font-family: Arial, sans-serif; margin: 24px; color: #0f172a; }
      h1 { margin: 0 0 6px; font-size: 22px; }
      .muted { color: #4b5563; font-size: 12px; margin-bottom: 12px; }
      .row { display: flex; justify-content: space-between; margin: 6px 0; }
      .total { font-weight: 700; margin-top: 10px; }
      .box { border: 1px dashed #cbd5f5; border-radius: 12px; padding: 12px; }
    </style>
  </head>
  <body>
    <h1>Dolphins Courts</h1>
    <div class="muted">Receipt ID: ${receiptId}</div>
    <div class="muted">Issued: ${issuedAt}</div>
    <div class="box">
      ${rows
        .map(
          ([label, value]) =>
            `<div class="row"><span>${label}</span><strong>${value}</strong></div>`
        )
        .join("")}
    </div>
  </body>
</html>`;

  state.receipt = {
    html: receiptHtml,
    filename: `receipt-${receiptId}.html`,
  };
}

function downloadReceipt() {
  if (!state.receipt.html) return;
  const blob = new Blob([state.receipt.html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = state.receipt.filename || "receipt.html";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function renderBookingSummary() {
  const el = $("bookingSummary");
  if (!el) return;

  const court = state.courts.find(
    (c) => String(c.id) === String(state.selectedCourtId)
  );
  const label = court ? court.name : "Selected court";
  const dateLine =
    state.plan === "Hourly"
      ? `${state.startDate} at ${state.startTime}`
      : `${state.startDate} to ${state.endDate}`;

  el.textContent = `${label} | ${state.plan} | ${dateLine} | Total ${formatNaira(
    state.pricing.total || 0
  )}`;
}

function updatePlanFieldsUI() {
  const isHourly = state.plan === "Hourly";
  show($("durationField"), isHourly);
  show($("endDateField"), !isHourly);

  if (isHourly) {
    state.endDate = state.startDate;
  } else if (state.endDate < state.startDate) {
    state.endDate = state.startDate;
  }

  syncInputsFromState();
}

function syncInputsFromState() {
  if ($("dateInput")) $("dateInput").value = state.startDate;
  if ($("endDateInput")) $("endDateInput").value = state.endDate;
  if ($("timeInput")) $("timeInput").value = state.startTime;
  if ($("durationInput")) $("durationInput").value = String(state.hours);
}

async function refreshAvailability() {
  if (!state.selectedCourtId) return;

  const start = firstDayOfMonth(new Date(state.startDate));
  const end = lastDayOfMonth(new Date(state.startDate));

  state.bookedDates = new Set();
  state.blockedDates = new Set();

  if (sb) {
    const { data: bookings, error: bErr } = await sb
      .from("bookings")
      .select("start_date,end_date,status")
      .eq("court_id", state.selectedCourtId)
      .in("status", ["pending", "confirmed"])
      .gte("start_date", start.toISOString().slice(0, 10))
      .lte("end_date", end.toISOString().slice(0, 10));

    if (bErr) console.error(bErr);
    (bookings || []).forEach((bk) => {
      expandDateRangeIntoSet(bk.start_date, bk.end_date, state.bookedDates);
    });

    const { data: blocks, error: blErr } = await sb
      .from("availability_blocks")
      .select("start_date,end_date")
      .eq("court_id", state.selectedCourtId)
      .gte("start_date", start.toISOString().slice(0, 10))
      .lte("end_date", end.toISOString().slice(0, 10));

    if (blErr) console.error(blErr);
    (blocks || []).forEach((bl) => {
      expandDateRangeIntoSet(bl.start_date, bl.end_date, state.blockedDates);
    });
  }

  updateAvailabilityStatus();
}

function isRangeUnavailable(startISO, endISO) {
  const tmp = new Set();
  expandDateRangeIntoSet(startISO, endISO, tmp);
  for (const d of tmp) {
    if (state.bookedDates.has(d) || state.blockedDates.has(d)) return true;
  }
  return false;
}

function expandDateRangeIntoSet(startISO, endISO, set) {
  const start = new Date(startISO);
  const end = new Date(endISO);
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    set.add(d.toISOString().slice(0, 10));
  }
}

function firstDayOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}
function lastDayOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0);
}

function updateAvailabilityStatus() {
  const status = $("availabilityStatus");
  if (!status) return;

  if (!sb) {
    status.classList.remove("is-bad");
    status.classList.add("is-good");
    status.textContent = "Connect Supabase to see live availability.";
    setBookNowEnabled(true);
    return;
  }

  if (isRangeUnavailable(state.startDate, state.endDate)) {
    status.classList.add("is-bad");
    status.classList.remove("is-good");
    status.textContent = "Selected dates are unavailable.";
    setBookNowEnabled(false);
  } else {
    status.classList.remove("is-bad");
    status.classList.add("is-good");
    status.textContent = "Dates available. Continue to reserve.";
    setBookNowEnabled(true);
  }
}

function setBookNowEnabled(on) {
  const btn = $("bookNowBtn");
  if (!btn) return;
  btn.disabled = !on;
}

function recalcPrice() {
  const court = state.courts.find(
    (c) => String(c.id) === String(state.selectedCourtId)
  );
  if (!court) return;

  let base = 0;

  if (state.plan === "Hourly") {
    const hours = clamp(
      Number($("durationInput")?.value || state.hours),
      1,
      12
    );
    state.hours = hours;
    base = (court.hourly_rate || 0) * hours;
  }

  if (state.plan === "Daily") {
    const days = daysBetweenInclusive(state.startDate, state.endDate);
    base = (court.daily_rate || 0) * days;
  }

  if (state.plan === "Weekly") {
    const days = daysBetweenInclusive(state.startDate, state.endDate);
    const weeks = Math.max(1, Math.ceil(days / 7));
    base = (court.weekly_rate || 0) * weeks;
  }

  const discount = computeDiscount(base, state.promo);
  const total = Math.max(0, base - discount);
  state.pricing = { base, discount, total };

  setText($("subtotalText"), formatNaira(base));
  setText($("discountText"), formatNaira(discount));
  setText($("totalText"), formatNaira(total));

  renderBookingSummary();
  updateAvailabilityStatus();
}

function daysBetweenInclusive(startISO, endISO) {
  const a = new Date(startISO);
  const b = new Date(endISO);
  const ms = b - a;
  const days = Math.floor(ms / (1000 * 60 * 60 * 24)) + 1;
  return Math.max(1, days);
}

function computeDiscount(baseAmount, promo) {
  if (!promo) return 0;
  if (promo.type === "percent") {
    return Math.round((promo.value / 100) * baseAmount);
  }
  if (promo.type === "fixed") {
    return Math.round(promo.value);
  }
  return 0;
}

async function applyPromo() {
  showPromoHelp("", "");

  const code = ($("promoInput")?.value || "").trim().toUpperCase();
  if (!code) {
    state.promo = null;
    recalcPrice();
    return;
  }

  if (!sb) {
    showPromoHelp("Connect Supabase to enable promo codes.", "bad");
    return;
  }

  const { data, error } = await sb
    .from("promo_codes")
    .select(
      "id,code,type,value,is_active,starts_at,ends_at,max_redemptions,redeemed_count,min_amount"
    )
    .eq("code", code)
    .maybeSingle();

  if (error) {
    console.error(error);
    showPromoHelp("Promo lookup failed. Try again.", "bad");
    return;
  }

  if (!data || !data.is_active) {
    showPromoHelp("Invalid promo code.", "bad");
    state.promo = null;
    recalcPrice();
    return;
  }

  const now = new Date();
  if (data.starts_at && now < new Date(data.starts_at)) {
    showPromoHelp("Promo is not active yet.", "bad");
    state.promo = null;
    recalcPrice();
    return;
  }
  if (data.ends_at && now > new Date(data.ends_at)) {
    showPromoHelp("Promo has expired.", "bad");
    state.promo = null;
    recalcPrice();
    return;
  }
  if (
    data.max_redemptions != null &&
    data.redeemed_count >= data.max_redemptions
  ) {
    showPromoHelp("Promo limit reached.", "bad");
    state.promo = null;
    recalcPrice();
    return;
  }

  state.promo = {
    id: data.id,
    code: data.code,
    type: data.type,
    value: data.value,
  };
  recalcPrice();
  showPromoHelp(`Promo applied: ${data.code}`, "good");
}

function showPromoHelp(msg, tone) {
  const help = $("promoHelp");
  if (!help) return;
  help.textContent = msg;
  help.classList.remove("is-bad", "is-good");
  if (tone === "bad") help.classList.add("is-bad");
  if (tone === "good") help.classList.add("is-good");
}

async function submitBooking() {
  showMessage("modalError", "", false);
  showMessage("modalOk", "", false);

  if (!state.selectedCourtId) {
    showMessage("modalError", "Select a court first.", true);
    return;
  }

  if (sb && isRangeUnavailable(state.startDate, state.endDate)) {
    showMessage(
      "modalError",
      "Selected dates are unavailable. Please choose another date.",
      true
    );
    return;
  }

  const name = ($("custName")?.value || "").trim();
  const phone = ($("custPhone")?.value || "").trim();
  const email = ($("custEmail")?.value || "").trim();
  const eventType = ($("eventType")?.value || "").trim();
  const notes = ($("notes")?.value || "").trim();

  if (!name || !phone || !email) {
    showMessage("modalError", "Please fill in name, phone, and email.", true);
    return;
  }

  recalcPrice();

  const payload = {
    court_id: state.selectedCourtId,
    plan: state.plan,
    start_date: state.startDate,
    end_date: state.endDate,
    start_time: state.startTime,
    hours: state.plan === "Hourly" ? state.hours : null,
    base_amount: state.pricing.base,
    discount_amount: state.pricing.discount,
    total_amount: state.pricing.total,
    promo_code_id: state.promo?.id || null,
    customer_name: name,
    customer_phone: phone,
    customer_email: email,
    event_type: eventType,
    notes,
    status: "pending",
  };

  if (!sb) {
    showMessage(
      "modalOk",
      "Demo mode: booking captured locally. Connect Supabase to save it.",
      true
    );
    renderReceipt(payload, "demo");
    openReceiptModal();
    return;
  }

  const { data, error } = await sb
    .from("bookings")
    .insert(payload)
    .select("id,created_at")
    .single();

  if (error) {
    console.error(error);
    showMessage("modalError", "Booking failed. Please try again.", true);
    return;
  }

  showMessage(
    "modalOk",
    `Booking created. Ref: ${data.id}. We will contact you to confirm.`,
    true
  );

  renderReceipt(payload, data.id);
  openReceiptModal();

  await refreshAvailability();
}

function showMessage(id, msg, on) {
  const el = $(id);
  if (!el) return;
  el.textContent = msg;
  el.style.display = on ? "block" : "none";
}

function escapeHtml(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function escapeAttr(str) {
  return String(str || "").replaceAll('"', "%22");
}

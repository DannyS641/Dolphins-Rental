/* =========================================================
   Dolphins Courts — Booking + Availability + Promo (Supabase)
   Tech: HTML/CSS/JS + Supabase (no framework)
   ========================================================= */

/** ------------- CONFIG (REPLACE THESE) ------------- **/
const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

/** Optional: currency formatting **/
const NGN = new Intl.NumberFormat("en-NG");

/** Supabase client **/
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/** ------------- DOM HELPERS ------------- **/
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

/** ------------- STATE ------------- **/
const state = {
  courts: [],
  selectedCourtId: null,
  plan: "Hourly", // Hourly | Daily | Weekly
  startDate: todayISO(),
  endDate: todayISO(),
  startTime: "10:00",
  hours: 1,
  days: 1,
  weeks: 1,
  qty: 1,
  promo: null, // {id, code, type, value}
  pricing: { base: 0, discount: 0, total: 0 },
  blockedDates: new Set(), // YYYY-MM-DD
  bookedDates: new Set(), // YYYY-MM-DD
};

/** ------------- INIT ------------- **/
document.addEventListener("DOMContentLoaded", async () => {
  wireGlobalButtons();
  wireBookingForm();
  wirePromo();

  // load courts, then set default selected
  await loadCourts();

  // build calendar UI if present
  if ($("availabilityCalendar")) {
    renderCalendar(new Date());
    await refreshAvailability();
  }
});

/** ------------- UI WIRING ------------- **/
function wireGlobalButtons() {
  // section rent now buttons (if they exist)
  ["bookBtnTop", "bookBtnHero", "bookBtnPackages"].forEach((id) => {
    const el = $(id);
    if (el) el.addEventListener("click", () => openBookingModal());
  });

  // modal close
  $("closeModal")?.addEventListener("click", closeBookingModal);
  $("cancelBtn")?.addEventListener("click", closeBookingModal);

  $("modalBackdrop")?.addEventListener("click", (e) => {
    if (e.target === $("modalBackdrop")) closeBookingModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeBookingModal();
  });
}

function wireBookingForm() {
  // plan selection (if you have plan tabs or select)
  $("plan")?.addEventListener("change", (e) => {
    state.plan = e.target.value;
    updatePlanFieldsUI();
    recalcPrice();
  });

  $("qty")?.addEventListener("input", (e) => {
    state.qty = clamp(Number(e.target.value || 1), 1, 30);
    recalcPrice();
  });

  $("date")?.addEventListener("change", async (e) => {
    state.startDate = e.target.value || todayISO();
    // default: same day
    state.endDate = state.startDate;
    if ($("endDate")) $("endDate").value = state.endDate;
    await refreshAvailability();
    recalcPrice();
  });

  $("endDate")?.addEventListener("change", async (e) => {
    state.endDate = e.target.value || state.startDate;
    await refreshAvailability();
    recalcPrice();
  });

  $("time")?.addEventListener("change", (e) => {
    state.startTime = e.target.value || "10:00";
  });

  $("hours")?.addEventListener("input", (e) => {
    state.hours = clamp(Number(e.target.value || 1), 1, 12);
    recalcPrice();
  });

  $("days")?.addEventListener("input", (e) => {
    state.days = clamp(Number(e.target.value || 1), 1, 14);
    recalcPrice();
  });

  $("weeks")?.addEventListener("input", (e) => {
    state.weeks = clamp(Number(e.target.value || 1), 1, 12);
    recalcPrice();
  });

  // submit booking
  $("submitBtn")?.addEventListener("click", submitBooking);
}

function wirePromo() {
  $("applyPromoBtn")?.addEventListener("click", applyPromo);
  $("promoCode")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      applyPromo();
    }
  });
}

/** ------------- COURTS ------------- **/
async function loadCourts() {
  const { data, error } = await sb
    .from("courts")
    .select(
      "id,name,slug,hero_image,card_image,hourly_rate,daily_rate,weekly_rate,is_active"
    )
    .eq("is_active", true)
    .order("name", { ascending: true });

  if (error) {
    console.error(error);
    return;
  }

  state.courts = data || [];

  // Render categories and trending if containers exist
  renderCourtCategories();
  renderTrendingCourts();

  // choose default court
  if (!state.selectedCourtId && state.courts.length) {
    setSelectedCourt(state.courts[0].id);
  }
}

function renderCourtCategories() {
  const wrap = $("courtCategories");
  if (!wrap) return;

  // Your requested views: Airport View, Lounge, Barbershop, Gym, Upskill Center, Indoor Arena
  // We render what exists in DB. Ensure DB rows match those names.
  wrap.innerHTML = state.courts
    .map((c) => {
      const img = c.card_image || c.hero_image || "";
      return `
        <button class="court-cat" type="button" data-court="${c.id}">
          <div class="court-cat__img" style="background-image:url('${escapeAttr(
            img
          )}')"></div>
          <div class="court-cat__label">${escapeHtml(c.name)}</div>
          <div class="court-cat__arrow">↗</div>
        </button>
      `;
    })
    .join("");

  qsa("[data-court]", wrap).forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-court");
      setSelectedCourt(id);
      openBookingModal(); // optional: open booking
    });
  });
}

function renderTrendingCourts() {
  const wrap = $("trendCourts");
  if (!wrap) return;

  wrap.innerHTML = state.courts
    .slice(0, 4)
    .map((c) => {
      const img = c.hero_image || c.card_image || "";
      const price = c.daily_rate ?? 0;
      return `
        <article class="trend-card">
          <div class="trend-card__img" style="background-image:url('${escapeAttr(
            img
          )}')"></div>
          <div class="trend-card__body">
            <div class="trend-card__title">${escapeHtml(c.name)}</div>
            <div class="trend-card__meta">
              <span>₦${NGN.format(price)}/day</span>
              <button class="pill primary trend-book" type="button" data-court="${
                c.id
              }">
                Book Now
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  qsa(".trend-book", wrap).forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-court");
      setSelectedCourt(id);
      openBookingModal();
    });
  });
}

function setSelectedCourt(courtId) {
  state.selectedCourtId = courtId;

  const court = state.courts.find((c) => String(c.id) === String(courtId));
  if (!court) return;

  // Update modal UI if present
  if ($("selectedCourtName")) setText($("selectedCourtName"), court.name);

  // If you have a court select dropdown in modal:
  if ($("courtSelect")) {
    // populate once
    if (!$("courtSelect").dataset.bound) {
      $("courtSelect").innerHTML = state.courts
        .map((c) => `<option value="${c.id}">${escapeHtml(c.name)}</option>`)
        .join("");
      $("courtSelect").dataset.bound = "1";
      $("courtSelect").addEventListener("change", async (e) => {
        setSelectedCourt(e.target.value);
        await refreshAvailability();
        recalcPrice();
      });
    }
    $("courtSelect").value = String(courtId);
  }

  // Update price hint
  if ($("rateHint")) {
    $("rateHint").textContent = `Hourly ₦${NGN.format(
      court.hourly_rate
    )} • Daily ₦${NGN.format(court.daily_rate)} • Weekly ₦${NGN.format(
      court.weekly_rate
    )}`;
  }

  refreshAvailability();
  recalcPrice();
}

/** ------------- MODAL ------------- **/
function openBookingModal() {
  const bd = $("modalBackdrop");
  if (!bd) return;

  // default values
  if ($("plan")) $("plan").value = state.plan;
  if ($("qty")) $("qty").value = String(state.qty);
  if ($("date")) $("date").value = state.startDate;
  if ($("endDate")) $("endDate").value = state.endDate;
  if ($("time")) $("time").value = state.startTime;

  updatePlanFieldsUI();
  recalcPrice();

  show($("formError"), false);
  show($("formSuccess"), false);

  bd.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeBookingModal() {
  const bd = $("modalBackdrop");
  if (!bd) return;
  bd.style.display = "none";
  document.body.style.overflow = "";
}

function updatePlanFieldsUI() {
  // Optional UI blocks: hours/days/weeks inputs
  show($("hoursWrap"), state.plan === "Hourly");
  show($("daysWrap"), state.plan === "Daily");
  show($("weeksWrap"), state.plan === "Weekly");

  // End date usage: for daily/weekly you may want end date visible
  show($("endDateWrap"), state.plan !== "Hourly");
}

/** ------------- AVAILABILITY (CALENDAR) ------------- **/
async function refreshAvailability() {
  if (!state.selectedCourtId) return;

  // Decide date range: show current month by default
  const start = firstDayOfMonth(new Date(state.startDate));
  const end = lastDayOfMonth(new Date(state.startDate));

  // Clear sets
  state.bookedDates = new Set();
  state.blockedDates = new Set();

  // 1) booked dates
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

  // 2) blocks (admin can create)
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

  // Update calendar UI
  if ($("availabilityCalendar")) {
    paintCalendar();
  }

  // If currently selected dates are blocked/booked, show warning
  if (isRangeUnavailable(state.startDate, state.endDate)) {
    showError("Selected dates are unavailable. Please choose another date.");
  } else {
    clearError();
  }
}

function renderCalendar(baseDate) {
  const el = $("availabilityCalendar");
  if (!el) return;

  const d = new Date(baseDate);
  const monthLabel = d.toLocaleString("en", { month: "long", year: "numeric" });

  el.innerHTML = `
    <div class="cal-head">
      <button type="button" class="cal-nav" id="calPrev">‹</button>
      <div class="cal-title" id="calTitle">${monthLabel}</div>
      <button type="button" class="cal-nav" id="calNext">›</button>
    </div>
    <div class="cal-grid" id="calGrid"></div>
    <div class="cal-legend">
      <span class="cal-pill cal-pill--free">Available</span>
      <span class="cal-pill cal-pill--busy">Booked</span>
      <span class="cal-pill cal-pill--block">Blocked</span>
      <span class="cal-pill cal-pill--sel">Selected</span>
    </div>
  `;

  $("calPrev").addEventListener("click", async () => {
    const nd = addMonths(new Date(state.startDate), -1);
    state.startDate = nd.toISOString().slice(0, 10);
    if ($("date")) $("date").value = state.startDate;
    renderCalendar(nd);
    await refreshAvailability();
  });

  $("calNext").addEventListener("click", async () => {
    const nd = addMonths(new Date(state.startDate), +1);
    state.startDate = nd.toISOString().slice(0, 10);
    if ($("date")) $("date").value = state.startDate;
    renderCalendar(nd);
    await refreshAvailability();
  });

  paintCalendar();
}

function paintCalendar() {
  const grid = $("calGrid");
  const title = $("calTitle");
  if (!grid) return;

  const d = new Date(state.startDate);
  const monthStart = firstDayOfMonth(d);
  const monthEnd = lastDayOfMonth(d);

  if (title) {
    title.textContent = d.toLocaleString("en", {
      month: "long",
      year: "numeric",
    });
  }

  // pad with weekday offset
  const startWeekday = monthStart.getDay(); // 0-6
  const daysInMonth = monthEnd.getDate();

  const cells = [];
  for (let i = 0; i < startWeekday; i++)
    cells.push(`<div class="cal-cell cal-cell--empty"></div>`);

  for (let day = 1; day <= daysInMonth; day++) {
    const iso = new Date(d.getFullYear(), d.getMonth(), day)
      .toISOString()
      .slice(0, 10);

    const isBooked = state.bookedDates.has(iso);
    const isBlocked = state.blockedDates.has(iso);
    const isSelected = isWithinSelected(iso);

    const cls = [
      "cal-cell",
      isBooked ? "cal-cell--busy" : "",
      isBlocked ? "cal-cell--block" : "",
      isSelected ? "cal-cell--sel" : "",
    ]
      .filter(Boolean)
      .join(" ");

    const disabled = isBooked || isBlocked ? "disabled" : "";

    cells.push(`
      <button class="${cls}" type="button" data-iso="${iso}" ${disabled}>
        ${day}
      </button>
    `);
  }

  grid.innerHTML = cells.join("");

  qsa("[data-iso]", grid).forEach((btn) => {
    btn.addEventListener("click", async () => {
      const iso = btn.getAttribute("data-iso");

      // Single-date select: hourly uses just startDate
      if (state.plan === "Hourly") {
        state.startDate = iso;
        state.endDate = iso;
      } else {
        // Range select: if same day clicked twice, set range end = start
        if (!state.startDate || state.startDate === state.endDate) {
          state.startDate = iso;
          state.endDate = iso;
        } else {
          // set end date, ensure order
          if (iso < state.startDate) {
            state.endDate = state.startDate;
            state.startDate = iso;
          } else {
            state.endDate = iso;
          }
        }
      }

      if ($("date")) $("date").value = state.startDate;
      if ($("endDate")) $("endDate").value = state.endDate;

      // validate availability
      if (isRangeUnavailable(state.startDate, state.endDate)) {
        showError(
          "Selected dates are unavailable. Please choose another date."
        );
      } else {
        clearError();
      }

      paintCalendar();
      recalcPrice();
    });
  });
}

function isWithinSelected(iso) {
  const a = state.startDate;
  const b = state.endDate || state.startDate;
  return iso >= a && iso <= b;
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
function addMonths(d, n) {
  return new Date(d.getFullYear(), d.getMonth() + n, 1);
}

/** ------------- PRICING ------------- **/
function recalcPrice() {
  const court = state.courts.find(
    (c) => String(c.id) === String(state.selectedCourtId)
  );
  if (!court) return;

  let base = 0;

  if (state.plan === "Hourly") {
    // default: 1–12 hours
    const hours = clamp(Number($("hours")?.value || state.hours), 1, 12);
    state.hours = hours;
    base = court.hourly_rate * hours;
  }

  if (state.plan === "Daily") {
    // days derived from date range OR manual input
    const days = daysBetweenInclusive(state.startDate, state.endDate);
    state.days = days;
    base = court.daily_rate * days;
  }

  if (state.plan === "Weekly") {
    const days = daysBetweenInclusive(state.startDate, state.endDate);
    const weeks = Math.max(1, Math.ceil(days / 7));
    state.weeks = weeks;
    base = court.weekly_rate * weeks;
  }

  // quantity multiplier (extra courts/lanes later). For now treat as court “slots”
  base = base * clamp(Number($("qty")?.value || 1), 1, 30);

  // promo
  const discount = computeDiscount(base, state.promo);
  const total = Math.max(0, base - discount);

  state.pricing = { base, discount, total };

  // Update UI if present
  if ($("priceBase")) $("priceBase").textContent = `₦${NGN.format(base)}`;
  if ($("priceDiscount"))
    $("priceDiscount").textContent = `- ₦${NGN.format(discount)}`;
  if ($("priceTotal")) $("priceTotal").textContent = `₦${NGN.format(total)}`;

  if ($("promoApplied")) {
    $("promoApplied").textContent = state.promo
      ? `Promo applied: ${state.promo.code}`
      : "";
  }
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

/** ------------- PROMO ------------- **/
async function applyPromo() {
  clearError();

  const code = ($("promoCode")?.value || "").trim().toUpperCase();
  if (!code) {
    state.promo = null;
    recalcPrice();
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
    showError("Promo lookup failed. Try again.");
    return;
  }

  if (!data || !data.is_active) {
    showError("Invalid promo code.");
    state.promo = null;
    recalcPrice();
    return;
  }

  const now = new Date();
  if (data.starts_at && now < new Date(data.starts_at)) {
    showError("Promo is not active yet.");
    state.promo = null;
    recalcPrice();
    return;
  }
  if (data.ends_at && now > new Date(data.ends_at)) {
    showError("Promo has expired.");
    state.promo = null;
    recalcPrice();
    return;
  }
  if (
    data.max_redemptions != null &&
    data.redeemed_count >= data.max_redemptions
  ) {
    showError("Promo limit reached.");
    state.promo = null;
    recalcPrice();
    return;
  }

  // min amount check uses base
  const court = state.courts.find(
    (c) => String(c.id) === String(state.selectedCourtId)
  );
  if (!court) return;

  // compute base without promo to check min_amount
  state.promo = null;
  recalcPrice();
  const base = state.pricing.base;

  if (data.min_amount != null && base < data.min_amount) {
    showError(
      `Minimum booking amount for this promo is ₦${NGN.format(
        data.min_amount
      )}.`
    );
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
}

async function incrementPromoUsage(promoId) {
  if (!promoId) return;

  // NOTE: this is not perfectly race-safe in pure client JS.
  // For production, use a Supabase RPC (transaction) or Edge Function.
  const { error } = await sb
    .from("promo_codes")
    .update({ redeemed_count: sb.rpc ? undefined : undefined }) // placeholder
    .eq("id", promoId);

  // We will do the correct approach via SQL RPC below.
  // Leaving this as a no-op to avoid incorrect increments.
  if (error) console.error(error);
}

/** ------------- BOOKING SUBMIT ------------- **/
async function submitBooking() {
  clearError();
  show($("formSuccess"), false);

  if (!state.selectedCourtId) return showError("Select a court first.");

  // Validate dates vs availability sets (calendar)
  if (isRangeUnavailable(state.startDate, state.endDate)) {
    return showError(
      "Selected dates are unavailable. Please choose another date."
    );
  }

  const name = ($("name")?.value || "").trim();
  const phone = ($("phone")?.value || "").trim();
  const email = ($("email")?.value || "").trim();
  const mode = ($("mode")?.value || "Pickup").trim();

  if (!name || !phone || !email)
    return showError("Please fill in name, phone, and email.");

  // Ensure we have latest pricing
  recalcPrice();

  const payload = {
    court_id: state.selectedCourtId,
    plan: state.plan,
    start_date: state.startDate,
    end_date: state.endDate,
    start_time: state.startTime,
    qty: state.qty,
    base_amount: state.pricing.base,
    discount_amount: state.pricing.discount,
    total_amount: state.pricing.total,
    promo_code_id: state.promo?.id || null,
    customer_name: name,
    customer_phone: phone,
    customer_email: email,
    mode,
    status: "pending",
    notes: ($("notes")?.value || "").trim(),
  };

  // Insert booking
  const { data, error } = await sb
    .from("bookings")
    .insert(payload)
    .select("id,created_at")
    .single();

  if (error) {
    console.error(error);
    return showError("Booking failed. Please try again.");
  }

  // If promo used, we increment with an RPC recommended in SQL section
  // For now, we just show success.
  show($("formSuccess"), true);
  if ($("formSuccess"))
    $("formSuccess").textContent =
      "Booking created. We will contact you to confirm.";

  // Refresh availability so the calendar updates instantly
  await refreshAvailability();

  alert(
    `Booking created (pending)\n\n` +
      `Ref: ${data.id}\n` +
      `Plan: ${payload.plan}\n` +
      `Dates: ${payload.start_date} → ${payload.end_date}\n` +
      `Total: ₦${NGN.format(payload.total_amount)}\n\n` +
      `Next: connect payment + confirmation workflow.`
  );

  closeBookingModal();
}

/** ------------- ERRORS ------------- **/
function showError(msg) {
  const err = $("formError");
  if (!err) return;
  err.textContent = msg;
  err.style.display = "block";
}

function clearError() {
  const err = $("formError");
  if (!err) return;
  err.textContent = "";
  err.style.display = "none";
}

/** ------------- ESCAPE HELPERS ------------- **/
function escapeHtml(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function escapeAttr(str) {
  // for inline style url('...')
  return String(str || "").replaceAll("'", "%27");
}

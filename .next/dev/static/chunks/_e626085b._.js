(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/supabaseClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SUPABASE_CONFIGURED",
    ()=>SUPABASE_CONFIGURED,
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const SUPABASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SUPABASE_URL || "https://nxolazivbugqiglgxvmf.supabase.co";
const SUPABASE_ANON_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54b2xheml2YnVncWlnbGd4dm1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxMDU2MjQsImV4cCI6MjA4NDY4MTYyNH0.ap6D8cjxDDl4w3WWLP-WvfILc2JwZxFa8rD_JUdrqS8";
const SUPABASE_CONFIGURED = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY) && !SUPABASE_URL.includes("YOUR_SUPABASE_URL") && !SUPABASE_ANON_KEY.includes("YOUR_SUPABASE_ANON_KEY");
const supabase = SUPABASE_CONFIGURED ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/booking.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initBookingPage",
    ()=>initBookingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.js [app-client] (ecmascript)");
;
const NGN = new Intl.NumberFormat("en-NG");
const sb = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPABASE_CONFIGURED"] ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"] : null;
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
        is_active: true
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
        is_active: true
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
        is_active: true
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
        is_active: true
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
        is_active: true
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
        is_active: true
    }
];
const COURT_IMAGES = [
    {
        key: "indoor",
        src: "/assets/img/indoor Arena.jpg"
    },
    {
        key: "airport",
        src: "/assets/img/Airport.jpg"
    },
    {
        key: "barbershop",
        src: "/assets/img/barbershop.jpg"
    },
    {
        key: "gym",
        src: "/assets/img/gym.jpg"
    },
    {
        key: "lounge",
        src: "/assets/img/lounge.jpg"
    },
    {
        key: "upskill",
        src: "/assets/img/upskill.jpg"
    }
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
        copy: "League games, finals, and showcases."
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
        copy: "Sports days, inter-house, assemblies."
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
        copy: "Reception layouts, vendor staging."
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
        copy: "Overflow seating, organized gathering."
    },
    {
        icon: `
      <svg class="strip__icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
        <path d="M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2"></path>
      </svg>
    `,
        title: "Corporate events",
        copy: "Team bonding, product showcases."
    }
];
const $ = (id)=>document.getElementById(id);
const qs = (sel, root = document)=>root.querySelector(sel);
const qsa = (sel, root = document)=>Array.from(root.querySelectorAll(sel));
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
const initialState = ()=>({
        courts: [],
        selectedCourtId: null,
        plan: "Hourly",
        startDate: todayISO(),
        endDate: todayISO(),
        startTime: "10:00",
        hours: 2,
        promo: null,
        pricing: {
            base: 0,
            discount: 0,
            total: 0
        },
        blockedDates: new Set(),
        bookedDates: new Set(),
        receipt: {
            html: "",
            filename: ""
        }
    });
let state = initialState();
let bookingCleanup = null;
function initBookingPage() {
    if (typeof document === "undefined") return ()=>{};
    if (bookingCleanup) bookingCleanup();
    state = initialState();
    const cleanups = [];
    const on = (el, evt, handler, options)=>{
        if (!el) return;
        el.addEventListener(evt, handler, options);
        cleanups.push(()=>el.removeEventListener(evt, handler, options));
    };
    const onDoc = (evt, handler, options)=>{
        document.addEventListener(evt, handler, options);
        cleanups.push(()=>document.removeEventListener(evt, handler, options));
    };
    wireGlobalButtons(on, onDoc);
    wireBookingForm(on);
    wirePromo(on);
    wireReceiptModal(on);
    on($("confirmBooking"), "click", submitBooking);
    renderUsageStrip();
    const stopReveal = setupScrollReveal();
    if (stopReveal) cleanups.push(stopReveal);
    const init = async ()=>{
        setText($("year"), String(new Date().getFullYear()));
        await loadCourts();
        await refreshAvailability();
        updatePlanFieldsUI();
        syncInputsFromState();
        recalcPrice();
    };
    void init();
    bookingCleanup = ()=>{
        cleanups.forEach((fn)=>fn());
        bookingCleanup = null;
    };
    return bookingCleanup;
}
function wireGlobalButtons(on, onDoc) {
    on($("scrollBook"), "click", scrollToBooking);
    on($("bannerBookBtn"), "click", scrollToBooking);
    on($("navToggle"), "click", toggleMobileMenu);
    qsa("#mobileMenu a").forEach((link)=>{
        on(link, "click", closeMobileMenu);
    });
    on($("bookNowBtn"), "click", openBookingModal);
    on($("closeModal"), "click", closeBookingModal);
    on($("cancelModal"), "click", closeBookingModal);
    on($("modalBackdrop"), "click", (e)=>{
        if (e.target === $("modalBackdrop")) closeBookingModal();
    });
    onDoc("keydown", (e)=>{
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
    on($("receiptBackdrop"), "click", (e)=>{
        if (e.target === $("receiptBackdrop")) closeReceiptModal();
    });
    on($("downloadReceipt"), "click", downloadReceipt);
}
function renderUsageStrip() {
    const wrap = $("usageStrip");
    if (!wrap) return;
    wrap.innerHTML = USAGE_ITEMS.map((item)=>{
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
    const targets = qsa(".section, .strip, .promoBanner, .footer, .booking, .court-view, .card");
    if (!targets.length) return null;
    targets.forEach((el, idx)=>{
        el.classList.add("reveal");
        el.style.setProperty("--reveal-delay", `${Math.min(idx * 60, 420)}ms`);
    });
    if (!("IntersectionObserver" in window)) {
        targets.forEach((el)=>el.classList.add("reveal--in"));
        return null;
    }
    const io = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal--in");
                io.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15
    });
    targets.forEach((el)=>io.observe(el));
    return ()=>io.disconnect();
}
function wireBookingForm(on) {
    qsa(".tab").forEach((tab)=>{
        on(tab, "click", ()=>{
            state.plan = toPlanLabel(tab.dataset.plan);
            qsa(".tab").forEach((t)=>t.classList.remove("is-active"));
            tab.classList.add("is-active");
            updatePlanFieldsUI();
            recalcPrice();
        });
    });
    on($("courtSelect"), "change", async (e)=>{
        setSelectedCourt(e.target.value);
        await refreshAvailability();
        recalcPrice();
    });
    on($("durationInput"), "change", (e)=>{
        state.hours = clamp(Number(e.target.value || 1), 1, 12);
        recalcPrice();
    });
    on($("dateInput"), "change", async (e)=>{
        state.startDate = e.target.value || todayISO();
        if (state.plan === "Hourly") state.endDate = state.startDate;
        await refreshAvailability();
        recalcPrice();
    });
    on($("endDateInput"), "change", async (e)=>{
        state.endDate = e.target.value || state.startDate;
        await refreshAvailability();
        recalcPrice();
    });
    on($("timeInput"), "change", (e)=>{
        state.startTime = e.target.value || "10:00";
    });
    on($("quoteBtn"), "click", async ()=>{
        await refreshAvailability();
        recalcPrice();
    });
}
function wirePromo(on) {
    on($("applyPromo"), "click", applyPromo);
    on($("promoInput"), "keydown", (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            applyPromo();
        }
    });
}
function scrollToBooking() {
    const booking = qs(".booking");
    if (!booking) return;
    booking.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
async function loadCourts() {
    if (!sb) {
        state.courts = DEMO_COURTS.slice();
    } else {
        const { data, error } = await sb.from("courts").select("id,name,slug,hero_image,card_image,hourly_rate,daily_rate,weekly_rate,is_active").eq("is_active", true).order("name", {
            ascending: true
        });
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
    wrap.innerHTML = state.courts.map((c)=>{
        const img = resolveCourtImage(c);
        return `
        <button class="court-view" type="button" data-court="${c.id}">
          <div class="court-view__img">
            ${img ? `<img src="${escapeAttr(img)}" alt="${escapeHtml(c.name)}" />` : ""}
          </div>
          <div class="court-view__label">${escapeHtml(c.name)}</div>
        </button>
      `;
    }).join("");
    qsa("[data-court]", wrap).forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            const id = btn.getAttribute("data-court");
            setSelectedCourt(id);
            scrollToBooking();
        });
    });
}
function renderTrendingCourts() {
    const wrap = $("trendingCards");
    if (!wrap) return;
    wrap.innerHTML = state.courts.slice(0, 4).map((c)=>{
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
    }).join("");
    qsa("[data-court]", wrap).forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            const id = btn.getAttribute("data-court");
            setSelectedCourt(id);
            scrollToBooking();
        });
    });
}
function setSelectedCourt(courtId) {
    state.selectedCourtId = courtId;
    const court = state.courts.find((c)=>String(c.id) === String(courtId));
    if (!court) return;
    if ($("courtSelect")) {
        if (!$("courtSelect").dataset.bound) {
            $("courtSelect").innerHTML = state.courts.map((c)=>`<option value="${c.id}">${escapeHtml(c.name)}</option>`).join("");
            $("courtSelect").dataset.bound = "1";
        }
        $("courtSelect").value = String(courtId);
    }
    if ($("rateHint")) {
        $("rateHint").textContent = `Hourly ${formatNaira(court.hourly_rate)} | Daily ${formatNaira(court.daily_rate)} | Weekly ${formatNaira(court.weekly_rate)}`;
    }
    refreshAvailability();
    recalcPrice();
}
function resolveCourtImage(court) {
    const haystack = `${court?.name || ""} ${court?.slug || ""}`.toLowerCase();
    const match = COURT_IMAGES.find((img)=>haystack.includes(img.key));
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
    const court = state.courts.find((c)=>String(c.id) === String(payload.court_id));
    const name = court ? court.name : "Selected court";
    const dates = payload.plan === "Hourly" ? `${payload.start_date} ${payload.start_time}` : `${payload.start_date} to ${payload.end_date}`;
    const receiptId = ref || "pending";
    const issuedAt = new Date().toLocaleString("en-NG");
    const rows = [
        [
            "Court",
            name
        ],
        [
            "Plan",
            payload.plan
        ],
        [
            "Dates",
            dates
        ],
        [
            "Subtotal",
            formatNaira(payload.base_amount)
        ],
        [
            "Discount",
            formatNaira(payload.discount_amount)
        ],
        [
            "Total",
            formatNaira(payload.total_amount)
        ],
        [
            "Status",
            payload.status
        ]
    ];
    const rowsHtml = rows.map(([label, value])=>`<div class="receipt__row"><span>${label}</span><b>${value}</b></div>`).join("");
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
      ${rows.map(([label, value])=>`<div class="row"><span>${label}</span><strong>${value}</strong></div>`).join("")}
    </div>
  </body>
</html>`;
    state.receipt = {
        html: receiptHtml,
        filename: `receipt-${receiptId}.html`
    };
}
function downloadReceipt() {
    if (!state.receipt.html) return;
    const blob = new Blob([
        state.receipt.html
    ], {
        type: "text/html"
    });
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
    const court = state.courts.find((c)=>String(c.id) === String(state.selectedCourtId));
    const label = court ? court.name : "Selected court";
    const dateLine = state.plan === "Hourly" ? `${state.startDate} at ${state.startTime}` : `${state.startDate} to ${state.endDate}`;
    el.textContent = `${label} | ${state.plan} | ${dateLine} | Total ${formatNaira(state.pricing.total || 0)}`;
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
        const { data: bookings, error: bErr } = await sb.from("bookings").select("start_date,end_date,status").eq("court_id", state.selectedCourtId).in("status", [
            "pending",
            "confirmed"
        ]).gte("start_date", start.toISOString().slice(0, 10)).lte("end_date", end.toISOString().slice(0, 10));
        if (bErr) console.error(bErr);
        (bookings || []).forEach((bk)=>{
            expandDateRangeIntoSet(bk.start_date, bk.end_date, state.bookedDates);
        });
        const { data: blocks, error: blErr } = await sb.from("availability_blocks").select("start_date,end_date").eq("court_id", state.selectedCourtId).gte("start_date", start.toISOString().slice(0, 10)).lte("end_date", end.toISOString().slice(0, 10));
        if (blErr) console.error(blErr);
        (blocks || []).forEach((bl)=>{
            expandDateRangeIntoSet(bl.start_date, bl.end_date, state.blockedDates);
        });
    }
    updateAvailabilityStatus();
}
function isRangeUnavailable(startISO, endISO) {
    const tmp = new Set();
    expandDateRangeIntoSet(startISO, endISO, tmp);
    for (const d of tmp){
        if (state.bookedDates.has(d) || state.blockedDates.has(d)) return true;
    }
    return false;
}
function expandDateRangeIntoSet(startISO, endISO, set) {
    const start = new Date(startISO);
    const end = new Date(endISO);
    for(let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)){
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
    const court = state.courts.find((c)=>String(c.id) === String(state.selectedCourtId));
    if (!court) return;
    let base = 0;
    if (state.plan === "Hourly") {
        const hours = clamp(Number($("durationInput")?.value || state.hours), 1, 12);
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
    state.pricing = {
        base,
        discount,
        total
    };
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
        return Math.round(promo.value / 100 * baseAmount);
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
    const { data, error } = await sb.from("promo_codes").select("id,code,type,value,is_active,starts_at,ends_at,max_redemptions,redeemed_count,min_amount").eq("code", code).maybeSingle();
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
    if (data.max_redemptions != null && data.redeemed_count >= data.max_redemptions) {
        showPromoHelp("Promo limit reached.", "bad");
        state.promo = null;
        recalcPrice();
        return;
    }
    state.promo = {
        id: data.id,
        code: data.code,
        type: data.type,
        value: data.value
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
        showMessage("modalError", "Selected dates are unavailable. Please choose another date.", true);
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
        status: "pending"
    };
    if (!sb) {
        showMessage("modalOk", "Demo mode: booking captured locally. Connect Supabase to save it.", true);
        renderReceipt(payload, "demo");
        openReceiptModal();
        return;
    }
    const { data, error } = await sb.from("bookings").insert(payload).select("id,created_at").single();
    if (error) {
        console.error(error);
        showMessage("modalError", "Booking failed. Please try again.", true);
        return;
    }
    showMessage("modalOk", `Booking created. Ref: ${data.id}. We will contact you to confirm.`, true);
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
    return String(str || "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
function escapeAttr(str) {
    return String(str || "").replaceAll('"', "%22");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/BookingClient.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$booking$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/booking.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "Dolphins Courts",
    description: "Premium basketball court rentals for tournaments, events, and private sessions.",
    areaServed: "Lagos",
    url: "/"
};
function BookingClient() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookingClient.useEffect": ()=>{
            const cleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$booking$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initBookingPage"])();
            return ({
                "BookingClient.useEffect": ()=>{
                    if (typeof cleanup === "function") cleanup();
                }
            })["BookingClient.useEffect"];
        }
    }["BookingClient.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "nav",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nav__inner container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "brand",
                            href: "#top",
                            "aria-label": "Dolphins Courts",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "brand__mark",
                                    src: "/assets/img/adrenale.png",
                                    alt: "Adrenale"
                                }, void 0, false, {
                                    fileName: "[project]/components/BookingClient.jsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "brand__text",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "Adrenale-Dolphins"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookingClient.jsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "RENTALS"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookingClient.jsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookingClient.jsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BookingClient.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "nav__links",
                            "aria-label": "Primary",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#courts",
                                    children: "Courts"
                                }, void 0, false, {
                                    fileName: "[project]/components/BookingClient.jsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#usage",
                                    children: "Usage"
                                }, void 0, false, {
                                    fileName: "[project]/components/BookingClient.jsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#faq",
                                    children: "FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/components/BookingClient.jsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#contact",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/components/BookingClient.jsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "nav__admin",
                                    href: "/admin",
                                    children: "Admin"
                                }, void 0, false, {
                                    fileName: "[project]/components/BookingClient.jsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BookingClient.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "nav__actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "iconbtn nav__toggle",
                                    id: "navToggle",
                                    type: "button",
                                    "aria-label": "Toggle menu",
                                    "aria-expanded": "false",
                                    "aria-controls": "mobileMenu",
                                    children: "☰"
                                }, void 0, false, {
                                    fileName: "[project]/components/BookingClient.jsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "search",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "search__icon",
                                            "aria-hidden": "true",
                                            children: "⌕"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookingClient.jsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "searchInput",
                                            type: "search",
                                            placeholder: "Search courts..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookingClient.jsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookingClient.jsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "scrollBook",
                                    className: "btn btn--dark",
                                    type: "button",
                                    children: "Book now"
                                }, void 0, false, {
                                    fileName: "[project]/components/BookingClient.jsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BookingClient.jsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BookingClient.jsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/BookingClient.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mobile-menu",
                id: "mobileMenu",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#courts",
                        children: "Courts"
                    }, void 0, false, {
                        fileName: "[project]/components/BookingClient.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#usage",
                        children: "Usage"
                    }, void 0, false, {
                        fileName: "[project]/components/BookingClient.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#faq",
                        children: "FAQ"
                    }, void 0, false, {
                        fileName: "[project]/components/BookingClient.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#contact",
                        children: "Contact"
                    }, void 0, false, {
                        fileName: "[project]/components/BookingClient.jsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/admin",
                        children: "Admin"
                    }, void 0, false, {
                        fileName: "[project]/components/BookingClient.jsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BookingClient.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                id: "top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "hero",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero__bg",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/BookingClient.jsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container hero__inner",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero__copy",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                children: "Adrenale-Dolphins Rental"
                                            }, void 0, false, {
                                                fileName: "[project]/components/BookingClient.jsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Book premium basketball courts by the hour, day, or week. Transparent pricing, calendar availability, and instant reservations."
                                            }, void 0, false, {
                                                fileName: "[project]/components/BookingClient.jsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BookingClient.jsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "booking",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "booking__tabs",
                                                role: "tablist",
                                                "aria-label": "Booking type",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "tab is-active",
                                                        "data-plan": "hourly",
                                                        type: "button",
                                                        role: "tab",
                                                        children: "Hourly"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 105,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "tab",
                                                        "data-plan": "daily",
                                                        type: "button",
                                                        role: "tab",
                                                        children: "Daily"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 113,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "tab",
                                                        "data-plan": "weekly",
                                                        type: "button",
                                                        role: "tab",
                                                        children: "Weekly"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 116,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookingClient.jsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "booking__row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "field",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "dateInput",
                                                                children: "Start date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 128,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "calendar-wrap",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "dateInput",
                                                                    type: "date"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BookingClient.jsx",
                                                                    lineNumber: 130,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 129,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 127,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "field",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "timeInput",
                                                                children: "Start time"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 135,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "timeInput",
                                                                type: "time",
                                                                defaultValue: "10:00"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 136,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 134,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "field",
                                                        id: "durationField",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "durationInput",
                                                                children: "Duration"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 140,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                id: "durationInput",
                                                                defaultValue: "2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "1",
                                                                        children: "1 hour"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookingClient.jsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "2",
                                                                        children: "2 hours"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookingClient.jsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "3",
                                                                        children: "3 hours"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookingClient.jsx",
                                                                        lineNumber: 144,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "4",
                                                                        children: "4 hours"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookingClient.jsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "6",
                                                                        children: "6 hours"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookingClient.jsx",
                                                                        lineNumber: 146,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 141,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 139,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "field",
                                                        id: "endDateField",
                                                        style: {
                                                            display: "none"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "endDateInput",
                                                                children: "End date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 155,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "endDateInput",
                                                                type: "date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 156,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 150,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "field field--promo",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "promoInput",
                                                                children: "Promo code"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 160,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "promo",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "promoInput",
                                                                        type: "text",
                                                                        placeholder: "e.g. DOLPHINS10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookingClient.jsx",
                                                                        lineNumber: 162,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        id: "applyPromo",
                                                                        className: "btn btn--light",
                                                                        type: "button",
                                                                        children: "Apply"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookingClient.jsx",
                                                                        lineNumber: 167,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 161,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "help",
                                                                id: "promoHelp"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 175,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 159,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "field field--cta",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: " "
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 179,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                id: "quoteBtn",
                                                                className: "btn btn--primary",
                                                                type: "button",
                                                                children: "Check & Price"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 180,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 178,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookingClient.jsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "booking__summary",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pricebox",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pricebox__line",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Subtotal"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookingClient.jsx",
                                                                        lineNumber: 189,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        id: "subtotalText",
                                                                        children: "₦0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookingClient.jsx",
                                                                        lineNumber: 190,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 188,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pricebox__line",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Discount"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookingClient.jsx",
                                                                        lineNumber: 193,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        id: "discountText",
                                                                        children: "₦0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookingClient.jsx",
                                                                        lineNumber: 194,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 192,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pricebox__total",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Total"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookingClient.jsx",
                                                                        lineNumber: 197,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        id: "totalText",
                                                                        children: "₦0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BookingClient.jsx",
                                                                        lineNumber: 198,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 196,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 187,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "status",
                                                        id: "availabilityStatus",
                                                        "aria-live": "polite"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 202,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        id: "bookNowBtn",
                                                        className: "btn btn--dark btn--wide",
                                                        type: "button",
                                                        disabled: true,
                                                        children: "Reserve now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 208,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookingClient.jsx",
                                                lineNumber: 186,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "booking__note",
                                                children: "Courts can be rented for tournaments, school events, weddings, funerals, and corporate events."
                                            }, void 0, false, {
                                                fileName: "[project]/components/BookingClient.jsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BookingClient.jsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BookingClient.jsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BookingClient.jsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "section",
                        id: "courts",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "section__head",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Court views"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookingClient.jsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Choose the environment that matches your event."
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookingClient.jsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookingClient.jsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cards cards--category",
                                    id: "categoryCards"
                                }, void 0, false, {
                                    fileName: "[project]/components/BookingClient.jsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BookingClient.jsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/BookingClient.jsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "strip",
                        id: "usage",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "strip__inner",
                                id: "usageStrip"
                            }, void 0, false, {
                                fileName: "[project]/components/BookingClient.jsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/BookingClient.jsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/BookingClient.jsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "promoBanner",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container promoBanner__inner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "promoBanner__copy",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Book Indoor Arena with a discount"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookingClient.jsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Use promo codes at checkout to reduce your total instantly."
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookingClient.jsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn--primary",
                                            id: "bannerBookBtn",
                                            type: "button",
                                            children: "Book now"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookingClient.jsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookingClient.jsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "promoBanner__badge",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            id: "bannerPercent",
                                            children: "10%"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookingClient.jsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Promo codes available"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookingClient.jsx",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookingClient.jsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BookingClient.jsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/BookingClient.jsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "section section--soft",
                        id: "faq",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "section__head",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "FAQs"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookingClient.jsx",
                                            lineNumber: 267,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Quick answers to common rental questions."
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookingClient.jsx",
                                            lineNumber: 268,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookingClient.jsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "faq",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                    children: "Do you require a deposit?"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookingClient.jsx",
                                                    lineNumber: 273,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Deposits depend on the court and booking type. If required, you’ll see it in your booking confirmation."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookingClient.jsx",
                                                    lineNumber: 274,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookingClient.jsx",
                                            lineNumber: 272,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                    children: "Can I extend my booking?"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookingClient.jsx",
                                                    lineNumber: 280,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Yes. Extensions are allowed if the court has no conflicting bookings. Book extensions before end time."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookingClient.jsx",
                                                    lineNumber: 281,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookingClient.jsx",
                                            lineNumber: 279,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                    children: "How do promo codes work?"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookingClient.jsx",
                                                    lineNumber: 287,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Enter a code and click Apply. Valid codes reduce your subtotal automatically based on rules and expiry."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookingClient.jsx",
                                                    lineNumber: 288,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookingClient.jsx",
                                            lineNumber: 286,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookingClient.jsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BookingClient.jsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/BookingClient.jsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "section",
                        id: "contact",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "section__head",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Contact"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookingClient.jsx",
                                            lineNumber: 300,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Need a quote for a tournament, school, or event? Contact us on:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BookingClient.jsx",
                                            lineNumber: 301,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookingClient.jsx",
                                    lineNumber: 299,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "contact-split",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cards cards--contact contact-cards",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "card card--mini contact-card",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "contact-card__head",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "contact-card__icon",
                                                                    "aria-hidden": "true",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        viewBox: "0 0 24 24",
                                                                        "aria-hidden": "true",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M20 12a8 8 0 0 1-8 8c-1.1 0-2.2-.2-3.2-.6L4 20l.7-4.6A7.9 7.9 0 0 1 4 12a8 8 0 1 1 16 0z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                                lineNumber: 312,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M8 9c1.4 2.6 3.6 4.7 6.2 6.2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                                lineNumber: 313,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M9.2 7.5l1.3-.5 1.2 2.2-1 .9"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                                lineNumber: 314,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M14.3 12.6l2.2 1.2-.5 1.3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                                lineNumber: 315,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/BookingClient.jsx",
                                                                        lineNumber: 311,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BookingClient.jsx",
                                                                    lineNumber: 310,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                    children: "WhatsApp"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BookingClient.jsx",
                                                                    lineNumber: 318,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/BookingClient.jsx",
                                                            lineNumber: 309,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "contact-card__value",
                                                            href: "https://wa.me/2349067831477",
                                                            children: "+234 906 783 1477"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookingClient.jsx",
                                                            lineNumber: 320,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "contact-card__note",
                                                            children: "Fast response, 8am–8pm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookingClient.jsx",
                                                            lineNumber: 326,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookingClient.jsx",
                                                    lineNumber: 308,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "card card--mini contact-card",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "contact-card__head",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "contact-card__icon",
                                                                    "aria-hidden": "true",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        viewBox: "0 0 24 24",
                                                                        "aria-hidden": "true",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                x: "3",
                                                                                y: "5",
                                                                                width: "18",
                                                                                height: "14",
                                                                                rx: "2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                                lineNumber: 335,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M3 7l9 6 9-6"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                                lineNumber: 336,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/BookingClient.jsx",
                                                                        lineNumber: 334,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BookingClient.jsx",
                                                                    lineNumber: 333,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                    children: "Email"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BookingClient.jsx",
                                                                    lineNumber: 339,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/BookingClient.jsx",
                                                            lineNumber: 332,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "contact-card__value",
                                                            href: "mailto:ballarkafrica@gmail.com",
                                                            children: "ballarkafrica@gmail.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookingClient.jsx",
                                                            lineNumber: 341,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "contact-card__note",
                                                            children: "We reply within 24 hours"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookingClient.jsx",
                                                            lineNumber: 347,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookingClient.jsx",
                                                    lineNumber: 331,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookingClient.jsx",
                                            lineNumber: 307,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "location-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "location-map",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                        title: "Dolphins Indoor Basketball Court",
                                                        src: "https://www.google.com/maps?q=Dolphins%20Indoor%20Basketball%20Court%20Lagos&output=embed",
                                                        loading: "lazy",
                                                        referrerPolicy: "no-referrer-when-downgrade"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 355,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BookingClient.jsx",
                                                    lineNumber: 354,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "location-body",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: "Venue"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookingClient.jsx",
                                                            lineNumber: 363,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: "Dolphins Indoor Court"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookingClient.jsx",
                                                            lineNumber: 364,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "1, Olu Aboderin St, Lagos, Nigeria"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookingClient.jsx",
                                                            lineNumber: 365,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "btn btn--light location-btn",
                                                            href: "https://www.google.com/maps?q=Dolphins%20Indoor%20Basketball%20Court%20Lagos",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children: "Get Directions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BookingClient.jsx",
                                                            lineNumber: 366,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BookingClient.jsx",
                                                    lineNumber: 362,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BookingClient.jsx",
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BookingClient.jsx",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BookingClient.jsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/BookingClient.jsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container footer__inner",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer__brand",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "brand brand--footer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        className: "brand__mark",
                                                        src: "/assets/img/adrenale.png",
                                                        alt: "Adrenale"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 384,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "brand__text",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: "Dolphins"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 390,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: "BASKETBALL RENTALS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 391,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 389,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookingClient.jsx",
                                                lineNumber: 383,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "muted",
                                                children: "Pricing is sample content. Replace phone/email and connect payment later. This site is optimized for fast loading and clean structure."
                                            }, void 0, false, {
                                                fileName: "[project]/components/BookingClient.jsx",
                                                lineNumber: 394,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BookingClient.jsx",
                                        lineNumber: 382,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer__links",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Explore"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 403,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#courts",
                                                        children: "Courts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 404,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#usage",
                                                        children: "Usage"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 405,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookingClient.jsx",
                                                lineNumber: 402,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Help"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 408,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#faq",
                                                        children: "FAQs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 409,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#contact",
                                                        children: "Contact"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 410,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/admin",
                                                        children: "Admin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 411,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookingClient.jsx",
                                                lineNumber: 407,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BookingClient.jsx",
                                        lineNumber: 401,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BookingClient.jsx",
                                lineNumber: 381,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer__bottom container",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "© ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                id: "year"
                                            }, void 0, false, {
                                                fileName: "[project]/components/BookingClient.jsx",
                                                lineNumber: 418,
                                                columnNumber: 17
                                            }, this),
                                            " Dolphins Courts"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BookingClient.jsx",
                                        lineNumber: 417,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "muted",
                                        children: "Terms · Privacy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BookingClient.jsx",
                                        lineNumber: 420,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BookingClient.jsx",
                                lineNumber: 416,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BookingClient.jsx",
                        lineNumber: 380,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BookingClient.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal",
                id: "modal",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal__backdrop",
                        id: "modalBackdrop"
                    }, void 0, false, {
                        fileName: "[project]/components/BookingClient.jsx",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal__panel",
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-labelledby": "modalTitle",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal__head",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        id: "modalTitle",
                                        children: "Reserve your booking"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BookingClient.jsx",
                                        lineNumber: 435,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "iconbtn",
                                        id: "closeModal",
                                        type: "button",
                                        "aria-label": "Close",
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BookingClient.jsx",
                                        lineNumber: 436,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BookingClient.jsx",
                                lineNumber: 434,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal__body",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "summary",
                                        id: "bookingSummary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BookingClient.jsx",
                                        lineNumber: 447,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "custName",
                                                        children: "Full name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 451,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "custName",
                                                        type: "text",
                                                        placeholder: "Your name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 452,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookingClient.jsx",
                                                lineNumber: 450,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "custPhone",
                                                        children: "Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 455,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "custPhone",
                                                        type: "tel",
                                                        placeholder: "+234..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 456,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookingClient.jsx",
                                                lineNumber: 454,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "custEmail",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 459,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "custEmail",
                                                        type: "email",
                                                        placeholder: "you@example.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 460,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookingClient.jsx",
                                                lineNumber: 458,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "eventType",
                                                        children: "Event type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 467,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "eventType",
                                                        defaultValue: "Tournament",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Tournament",
                                                                children: "Tournament"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 469,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "School event",
                                                                children: "School event"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 470,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Wedding",
                                                                children: "Wedding"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 471,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Funeral",
                                                                children: "Funeral"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 472,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Corporate event",
                                                                children: "Corporate event"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 473,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Other",
                                                                children: "Other"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/BookingClient.jsx",
                                                                lineNumber: 474,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 468,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookingClient.jsx",
                                                lineNumber: 466,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "field field--full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "notes",
                                                        children: "Notes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 479,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        id: "notes",
                                                        placeholder: "Add any detail (layout, vendors, timing, etc.)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BookingClient.jsx",
                                                        lineNumber: 480,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BookingClient.jsx",
                                                lineNumber: 478,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BookingClient.jsx",
                                        lineNumber: 449,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "msg msg--error",
                                        id: "modalError"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BookingClient.jsx",
                                        lineNumber: 487,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "msg msg--ok",
                                        id: "modalOk"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BookingClient.jsx",
                                        lineNumber: 488,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BookingClient.jsx",
                                lineNumber: 446,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal__foot",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn--light",
                                        id: "cancelModal",
                                        type: "button",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BookingClient.jsx",
                                        lineNumber: 492,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn--dark",
                                        id: "confirmBooking",
                                        type: "button",
                                        children: "Confirm reservation"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BookingClient.jsx",
                                        lineNumber: 495,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BookingClient.jsx",
                                lineNumber: 491,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BookingClient.jsx",
                        lineNumber: 428,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BookingClient.jsx",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal",
                id: "receiptModal",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal__backdrop",
                        id: "receiptBackdrop"
                    }, void 0, false, {
                        fileName: "[project]/components/BookingClient.jsx",
                        lineNumber: 503,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal__panel",
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-labelledby": "receiptTitle",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal__head",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        id: "receiptTitle",
                                        children: "Receipt"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BookingClient.jsx",
                                        lineNumber: 512,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "iconbtn",
                                        id: "closeReceipt",
                                        type: "button",
                                        "aria-label": "Close",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BookingClient.jsx",
                                        lineNumber: 513,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BookingClient.jsx",
                                lineNumber: 511,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal__body",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "receipt",
                                    id: "receiptContent"
                                }, void 0, false, {
                                    fileName: "[project]/components/BookingClient.jsx",
                                    lineNumber: 524,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/BookingClient.jsx",
                                lineNumber: 523,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal__foot",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn--light",
                                        id: "cancelReceipt",
                                        type: "button",
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BookingClient.jsx",
                                        lineNumber: 528,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn--dark",
                                        id: "downloadReceipt",
                                        type: "button",
                                        children: "Download receipt"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BookingClient.jsx",
                                        lineNumber: 531,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BookingClient.jsx",
                                lineNumber: 527,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BookingClient.jsx",
                        lineNumber: 505,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BookingClient.jsx",
                lineNumber: 502,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(jsonLd)
                }
            }, void 0, false, {
                fileName: "[project]/components/BookingClient.jsx",
                lineNumber: 542,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(BookingClient, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = BookingClient;
var _c;
__turbopack_context__.k.register(_c, "BookingClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_e626085b._.js.map
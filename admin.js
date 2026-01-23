const SUPABASE_URL = "https://nxolazivbugqiglgxvmf.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54b2xheml2YnVncWlnbGd4dm1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxMDU2MjQsImV4cCI6MjA4NDY4MTYyNH0.ap6D8cjxDDl4w3WWLP-WvfILc2JwZxFa8rD_JUdrqS8";

const SUPABASE_CONFIGURED =
  SUPABASE_URL &&
  SUPABASE_ANON_KEY &&
  !SUPABASE_URL.includes("YOUR_SUPABASE_URL") &&
  !SUPABASE_ANON_KEY.includes("YOUR_SUPABASE_ANON_KEY");

const sb = SUPABASE_CONFIGURED
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

const NGN = new Intl.NumberFormat("en-NG");

const $ = (id) => document.getElementById(id);
const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function setText(el, text) {
  if (!el) return;
  el.textContent = text;
}

function showMsg(id, msg, tone) {
  const el = $(id);
  if (!el) return;
  el.textContent = msg;
  el.classList.remove("is-bad", "is-good");
  if (tone === "bad") el.classList.add("is-bad");
  if (tone === "good") el.classList.add("is-good");
}

/** ------------- STATE ------------- **/
const state = {
  courts: [],
  bookings: [],
  blocks: [],
  promos: [],
};
let inactivityTimer = null;
const INACTIVITY_LIMIT_MS = 5 * 60 * 1000;

document.addEventListener("DOMContentLoaded", async () => {
  if (!sb) {
    showMsg(
      "bookingMsg",
      "Supabase is not configured. Add your keys in admin.js.",
      "bad"
    );
    return;
  }

  wireEvents();
  wireAuth();

  const { data } = await sb.auth.getSession();
  handleAuthState(data.session);

  sb.auth.onAuthStateChange((_event, session) => {
    handleAuthState(session);
  });
});

function wireEvents() {
  $("refreshBookings")?.addEventListener("click", loadBookings);
  $("bookingStatusFilter")?.addEventListener("change", renderBookings);
  $("bookingSearch")?.addEventListener("input", renderBookings);

  $("blockForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    await createBlock();
  });

  $("promoForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    await createPromo();
  });

  $("bookingBody")?.addEventListener("click", async (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    await updateBookingStatus(btn.dataset.id, btn.dataset.action);
  });

  $("blockBody")?.addEventListener("click", async (e) => {
    const btn = e.target.closest("button[data-block]");
    if (!btn) return;
    await deleteBlock(btn.dataset.block);
  });
}

function startInactivityTimer() {
  clearInactivityTimer();
  inactivityTimer = setTimeout(async () => {
    await sb.auth.signOut();
  }, INACTIVITY_LIMIT_MS);
}

function clearInactivityTimer() {
  if (!inactivityTimer) return;
  clearTimeout(inactivityTimer);
  inactivityTimer = null;
}

function wireInactivityTracking() {
  const events = ["mousemove", "keydown", "click", "scroll", "touchstart"];
  events.forEach((evt) => {
    document.addEventListener(evt, () => {
      startInactivityTimer();
    });
  });
  startInactivityTimer();
}

function wireAuth() {
  $("loginForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = ($("loginEmail")?.value || "").trim();
    const password = $("loginPassword")?.value || "";
    if (!email || !password) return;

    showMsg("loginMsg", "Signing in...");
    const { error } = await sb.auth.signInWithPassword({ email, password });
    if (error) {
      console.error(error);
      showMsg("loginMsg", "Login failed. Check credentials.", "bad");
      return;
    }
    showMsg("loginMsg", "Signed in.", "good");
    $("loginForm")?.reset();
  });

  $("signOutBtn")?.addEventListener("click", async () => {
    await sb.auth.signOut();
  });
}

async function handleAuthState(session) {
  const authed = !!session;
  toggleAuthUI(authed);
  if (authed) {
    wireInactivityTracking();
    startInactivityTimer();
    await loadAll();
  } else {
    clearInactivityTimer();
  }
}

function toggleAuthUI(authed) {
  const auth = $("adminAuth");
  const app = $("adminApp");
  const signOut = $("signOutBtn");

  if (auth) auth.classList.toggle("is-active", !authed);
  if (app) {
    app.classList.toggle("is-active", authed);
    app.setAttribute("aria-hidden", authed ? "false" : "true");
  }
  if (signOut) signOut.style.display = authed ? "inline-flex" : "none";
}

async function loadAll() {
  await Promise.all([loadCourts(), loadBookings(), loadBlocks(), loadPromos()]);
}

async function loadCourts() {
  const { data, error } = await sb
    .from("courts")
    .select("id,name,slug,hourly_rate,daily_rate,weekly_rate,is_active")
    .order("name", { ascending: true });

  if (error) {
    console.error(error);
    return;
  }
  state.courts = data || [];
  renderCourts();
  renderCourtSelects();
}

async function loadBookings() {
  showMsg("bookingMsg", "Loading bookings...");
  const { data, error } = await sb
    .from("bookings")
    .select(
      "id,created_at,status,plan,start_date,end_date,start_time,total_amount,customer_name,customer_phone,customer_email,court_id,courts(name)"
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    showMsg("bookingMsg", "Failed to load bookings.", "bad");
    return;
  }
  state.bookings = data || [];
  renderBookings();
  showMsg("bookingMsg", `${state.bookings.length} bookings loaded.`, "good");
}

async function loadBlocks() {
  const { data, error } = await sb
    .from("availability_blocks")
    .select("id,start_date,end_date,court_id,courts(name)")
    .order("start_date", { ascending: false });

  if (error) {
    console.error(error);
    showMsg("blockMsg", "Failed to load blocks.", "bad");
    return;
  }
  state.blocks = data || [];
  renderBlocks();
}

async function loadPromos() {
  const { data, error } = await sb
    .from("promo_codes")
    .select(
      "id,code,type,value,is_active,redeemed_count,max_redemptions,min_amount"
    )
    .order("code", { ascending: true });

  if (error) {
    console.error(error);
    showMsg("promoMsg", "Failed to load promo codes.", "bad");
    return;
  }
  state.promos = data || [];
  renderPromos();
}

function renderBookings() {
  const body = $("bookingBody");
  if (!body) return;

  const statusFilter = $("bookingStatusFilter")?.value || "all";
  const q = ($("bookingSearch")?.value || "").trim().toLowerCase();

  const rows = state.bookings.filter((b) => {
    const statusOk = statusFilter === "all" || b.status === statusFilter;
    if (!statusOk) return false;
    if (!q) return true;
    const hay = [
      b.customer_name,
      b.customer_email,
      b.customer_phone,
      b.courts?.name,
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });

  body.innerHTML = rows
    .map((b) => {
      const courtName = b.courts?.name || "Unknown";
      const dates =
        b.plan === "Hourly"
          ? `${b.start_date} ${b.start_time}`
          : `${b.start_date} to ${b.end_date}`;
      return `
        <tr>
          <td>
            <b>${escapeHtml(b.customer_name || "-")}</b><br />
            <span class="admin-muted">${escapeHtml(b.customer_email || "")}</span>
          </td>
          <td>${escapeHtml(courtName)}</td>
          <td>${escapeHtml(b.plan)}</td>
          <td>${escapeHtml(dates)}</td>
          <td>NGN ${NGN.format(b.total_amount || 0)}</td>
          <td><span class="pill ${escapeHtml(b.status)}">${escapeHtml(
            b.status
          )}</span></td>
          <td>
            <div class="admin-actions">
              <button class="btn btn--light" data-action="confirmed" data-id="${
                b.id
              }">Confirm</button>
              <button class="btn btn--light" data-action="rejected" data-id="${
                b.id
              }">Reject</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

function renderBlocks() {
  const body = $("blockBody");
  if (!body) return;

  body.innerHTML = state.blocks
    .map((b) => {
      return `
      <tr>
        <td>${escapeHtml(b.courts?.name || "Unknown")}</td>
        <td>${escapeHtml(b.start_date)}</td>
        <td>${escapeHtml(b.end_date)}</td>
        <td>
          <button class="btn btn--light" data-block="${b.id}">Remove</button>
        </td>
      </tr>
    `;
    })
    .join("");
}

function renderPromos() {
  const body = $("promoBody");
  if (!body) return;

  body.innerHTML = state.promos
    .map((p) => {
      const usage =
        p.max_redemptions == null
          ? `${p.redeemed_count || 0} / unlimited`
          : `${p.redeemed_count || 0} / ${p.max_redemptions}`;
      return `
      <tr>
        <td><b>${escapeHtml(p.code)}</b></td>
        <td>${escapeHtml(p.type)}</td>
        <td>${p.type === "percent" ? `${p.value}%` : `NGN ${NGN.format(p.value)}`}</td>
        <td>${p.is_active ? "yes" : "no"}</td>
        <td>${usage}</td>
      </tr>
    `;
    })
    .join("");
}

function renderCourts() {
  const body = $("courtBody");
  if (!body) return;

  body.innerHTML = state.courts
    .map((c) => {
      return `
      <tr>
        <td><b>${escapeHtml(c.name)}</b></td>
        <td>${escapeHtml(c.slug)}</td>
        <td>NGN ${NGN.format(c.hourly_rate || 0)}</td>
        <td>NGN ${NGN.format(c.daily_rate || 0)}</td>
        <td>NGN ${NGN.format(c.weekly_rate || 0)}</td>
        <td>${c.is_active ? "yes" : "no"}</td>
      </tr>
    `;
    })
    .join("");
}

function renderCourtSelects() {
  const select = $("blockCourt");
  if (!select) return;
  select.innerHTML = state.courts
    .map((c) => `<option value="${c.id}">${escapeHtml(c.name)}</option>`)
    .join("");
}

async function updateBookingStatus(id, status) {
  if (!id) return;
  const { data: sessionData } = await sb.auth.getSession();
  if (!sessionData?.session) {
    showMsg("bookingMsg", "Please sign in again.", "bad");
    return;
  }

  showMsg("bookingMsg", "Updating booking...");
  const { data, error } = await sb
    .from("bookings")
    .update({ status })
    .eq("id", id)
    .select("id,status");

  if (error) {
    console.error(error);
    showMsg("bookingMsg", `Update failed: ${error.message}`, "bad");
    return;
  }

  const updated = Array.isArray(data) ? data[0] : data;
  if (!updated) {
    showMsg(
      "bookingMsg",
      "No rows updated. Check RLS update policy for bookings.",
      "bad"
    );
    return;
  }

  state.bookings = state.bookings.map((b) =>
    b.id === updated.id ? { ...b, status: updated.status } : b
  );
  renderBookings();
  showMsg("bookingMsg", "Booking updated.", "good");

  await loadBookings();
}

async function createBlock() {
  const courtId = $("blockCourt")?.value;
  const start = $("blockStart")?.value;
  const end = $("blockEnd")?.value;
  if (!courtId || !start || !end) return;

  const { error } = await sb
    .from("availability_blocks")
    .insert({ court_id: courtId, start_date: start, end_date: end });

  if (error) {
    console.error(error);
    showMsg("blockMsg", "Failed to create block.", "bad");
    return;
  }
  showMsg("blockMsg", "Block created.", "good");
  await loadBlocks();
}

async function deleteBlock(id) {
  const { error } = await sb.from("availability_blocks").delete().eq("id", id);

  if (error) {
    console.error(error);
    showMsg("blockMsg", "Failed to remove block.", "bad");
    return;
  }
  showMsg("blockMsg", "Block removed.", "good");
  await loadBlocks();
}

async function createPromo() {
  const code = ($("promoCode")?.value || "").trim().toUpperCase();
  const type = $("promoType")?.value || "percent";
  const value = Number($("promoValue")?.value || 0);
  const minAmount = $("promoMin")?.value ? Number($("promoMin").value) : null;
  const maxUses = $("promoMax")?.value ? Number($("promoMax").value) : null;
  const start = $("promoStart")?.value || null;
  const end = $("promoEnd")?.value || null;

  if (!code || value <= 0) {
    showMsg("promoMsg", "Enter a promo code and value.", "bad");
    return;
  }

  const payload = {
    code,
    type,
    value,
    is_active: true,
    starts_at: start ? `${start}T00:00:00Z` : null,
    ends_at: end ? `${end}T23:59:59Z` : null,
    max_redemptions: maxUses,
    min_amount: minAmount,
  };

  const { error } = await sb.from("promo_codes").insert(payload);

  if (error) {
    console.error(error);
    showMsg("promoMsg", "Failed to create promo.", "bad");
    return;
  }

  showMsg("promoMsg", "Promo created.", "good");
  $("promoForm").reset();
  await loadPromos();
}

function escapeHtml(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

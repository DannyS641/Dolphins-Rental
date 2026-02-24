"use client";

import { useEffect } from "react";
import Link from "next/link";
import { initAdminPage } from "../lib/admin";

export default function AdminClient() {
  useEffect(() => {
    const cleanup = initAdminPage();
    return () => {
      if (typeof cleanup === "function") cleanup();
    };
  }, []);

  return (
    <>
      <header className="admin-header">
        <div className="container admin-header__inner">
          <div className="admin-brand">
            <img
              className="brand__mark"
              src="/assets/img/adrenale.png"
              alt="Adrenale"
            />
            <div>
              <b>Admin</b>
              <div className="admin-muted">Dolphins Courts</div>
            </div>
          </div>
          <div className="admin-header__actions">
            <button className="btn btn--light" id="signOutBtn" type="button">
              Sign out
            </button>
            <Link className="btn btn--light" href="/">
              Back to site
            </Link>
          </div>
        </div>
      </header>

      <main className="container admin-main">
        <section className="admin-auth" id="adminAuth">
          <div className="admin-panel admin-auth__panel">
            <h2>Admin login</h2>
            <p className="admin-muted">
              Sign in to manage bookings, blocks, and promo codes.
            </p>
            <form className="admin-form admin-auth__form" id="loginForm">
              <input
                id="loginEmail"
                type="email"
                placeholder="Email"
                required
              />
              <input
                id="loginPassword"
                type="password"
                placeholder="Password"
                required
              />
              <button className="btn btn--dark" type="submit">
                Sign in
              </button>
            </form>
            <div className="admin-msg" id="loginMsg"></div>
          </div>
        </section>

        <div id="adminApp" className="admin-app" aria-hidden="true">
          <section className="admin-panel">
            <div className="admin-panel__head">
              <h2>Bookings</h2>
              <div className="admin-actions">
                <input
                  id="bookingSearch"
                  type="search"
                  placeholder="Search name, email, phone, court..."
                />
                <select id="bookingStatusFilter" defaultValue="pending">
                  <option value="all">All</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="rejected">Rejected</option>
                </select>
                <button
                  className="btn btn--light"
                  id="refreshBookings"
                  type="button"
                >
                  Refresh
                </button>
              </div>
            </div>

            <div className="admin-msg" id="bookingMsg"></div>
            <div className="admin-table-wrap">
              <table className="admin-table" id="bookingTable">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Court</th>
                    <th>Plan</th>
                    <th>Dates</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody id="bookingBody"></tbody>
              </table>
            </div>
          </section>

          <section className="admin-grid">
            <div className="admin-panel">
              <div className="admin-panel__head">
                <h2>Availability Blocks</h2>
              </div>
              <form className="admin-form" id="blockForm">
                <select id="blockCourt"></select>
                <input id="blockStart" type="date" required />
                <input id="blockEnd" type="date" required />
                <button className="btn btn--dark" type="submit">
                  Add block
                </button>
              </form>
              <div className="admin-msg" id="blockMsg"></div>
              <div className="admin-table-wrap">
                <table className="admin-table" id="blockTable">
                  <thead>
                    <tr>
                      <th>Court</th>
                      <th>Start</th>
                      <th>End</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody id="blockBody"></tbody>
                </table>
              </div>
            </div>

            <div className="admin-panel">
              <div className="admin-panel__head">
                <h2>Promo Codes</h2>
              </div>
              <form className="admin-form" id="promoForm">
                <input id="promoCode" type="text" placeholder="CODE" required />
                <select id="promoType" defaultValue="percent">
                  <option value="percent">percent</option>
                  <option value="fixed">fixed</option>
                </select>
                <input id="promoValue" type="number" min="0" required />
                <input
                  id="promoMin"
                  type="number"
                  min="0"
                  placeholder="Min NGN"
                />
                <input
                  id="promoMax"
                  type="number"
                  min="0"
                  placeholder="Max uses"
                />
                <input id="promoStart" type="date" />
                <input id="promoEnd" type="date" />
                <button className="btn btn--dark" type="submit">
                  Add promo
                </button>
              </form>
              <div className="admin-msg" id="promoMsg"></div>
              <div className="admin-table-wrap">
                <table className="admin-table" id="promoTable">
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Type</th>
                      <th>Value</th>
                      <th>Active</th>
                      <th>Usage</th>
                    </tr>
                  </thead>
                  <tbody id="promoBody"></tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="admin-panel">
            <div className="admin-panel__head">
              <h2>Courts</h2>
            </div>
            <div className="admin-table-wrap">
              <table className="admin-table" id="courtTable">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Slug</th>
                    <th>Hourly</th>
                    <th>Daily</th>
                    <th>Weekly</th>
                    <th>Active</th>
                  </tr>
                </thead>
                <tbody id="courtBody"></tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

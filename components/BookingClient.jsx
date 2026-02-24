"use client";

import { useEffect } from "react";
import Link from "next/link";
import { initBookingPage } from "../lib/booking";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Dolphins Courts",
  description:
    "Premium basketball court rentals for tournaments, events, and private sessions.",
  areaServed: "Lagos",
  url: "/",
};

export default function BookingClient() {
  useEffect(() => {
    const cleanup = initBookingPage();
    return () => {
      if (typeof cleanup === "function") cleanup();
    };
  }, []);

  return (
    <>
      <header className="nav">
        <div className="nav__inner container">
          <a className="brand" href="#top" aria-label="Dolphins Courts">
            <img
              className="brand__mark"
              src="/assets/img/adrenale.png"
              alt="Adrenale"
            />
            <span className="brand__text">
              <b>Adrenale-Dolphins</b>
              <small>RENTALS</small>
            </span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            <a href="#courts">Courts</a>
            <a href="#usage">Usage</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
            <Link className="nav__admin" href="/admin">
              Admin
            </Link>
          </nav>

          <div className="nav__actions">
            <button
              className="iconbtn nav__toggle"
              id="navToggle"
              type="button"
              aria-label="Toggle menu"
              aria-expanded="false"
              aria-controls="mobileMenu"
            >
              &#9776;
            </button>
            <div className="search">
              <span className="search__icon" aria-hidden="true">
                ⌕
              </span>
              <input
                id="searchInput"
                type="search"
                placeholder="Search courts..."
              />
            </div>
            <button id="scrollBook" className="btn btn--dark" type="button">
              Book now
            </button>
          </div>
        </div>
      </header>
      <nav className="mobile-menu" id="mobileMenu" aria-hidden="true">
        <a href="#courts">Courts</a>
        <a href="#usage">Usage</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
        <Link href="/admin">Admin</Link>
      </nav>

      <main id="top">
        <section className="hero">
          <div className="hero__bg" aria-hidden="true"></div>
          <div className="container hero__inner">
            <div className="hero__copy">
              <h1>Adrenale-Dolphins Rental</h1>
              <p>
                Book premium basketball courts by the hour, day, or week.
                Transparent pricing, calendar availability, and instant
                reservations.
              </p>
            </div>

            <div className="booking">
              <div
                className="booking__tabs"
                role="tablist"
                aria-label="Booking type"
              >
                <button
                  className="tab is-active"
                  data-plan="hourly"
                  type="button"
                  role="tab"
                >
                  Hourly
                </button>
                <button className="tab" data-plan="daily" type="button" role="tab">
                  Daily
                </button>
                <button
                  className="tab"
                  data-plan="weekly"
                  type="button"
                  role="tab"
                >
                  Weekly
                </button>
              </div>

              <div className="booking__row">
                <div className="field">
                  <label htmlFor="dateInput">Start date</label>
                  <div className="calendar-wrap">
                    <input id="dateInput" type="date" />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="timeInput">Start time</label>
                  <input id="timeInput" type="time" defaultValue="10:00" />
                </div>

                <div className="field" id="durationField">
                  <label htmlFor="durationInput">Duration</label>
                  <select id="durationInput" defaultValue="2">
                    <option value="1">1 hour</option>
                    <option value="2">2 hours</option>
                    <option value="3">3 hours</option>
                    <option value="4">4 hours</option>
                    <option value="6">6 hours</option>
                  </select>
                </div>

                <div
                  className="field"
                  id="endDateField"
                  style={{ display: "none" }}
                >
                  <label htmlFor="endDateInput">End date</label>
                  <input id="endDateInput" type="date" />
                </div>

                <div className="field field--promo">
                  <label htmlFor="promoInput">Promo code</label>
                  <div className="promo">
                    <input
                      id="promoInput"
                      type="text"
                      placeholder="e.g. DOLPHINS10"
                    />
                    <button
                      id="applyPromo"
                      className="btn btn--light"
                      type="button"
                    >
                      Apply
                    </button>
                  </div>
                  <div className="help" id="promoHelp"></div>
                </div>

                <div className="field field--cta">
                  <label>&nbsp;</label>
                  <button id="quoteBtn" className="btn btn--primary" type="button">
                    Check & Price
                  </button>
                </div>
              </div>

              <div className="booking__summary">
                <div className="pricebox">
                  <div className="pricebox__line">
                    <span>Subtotal</span>
                    <b id="subtotalText">₦0</b>
                  </div>
                  <div className="pricebox__line">
                    <span>Discount</span>
                    <b id="discountText">₦0</b>
                  </div>
                  <div className="pricebox__total">
                    <span>Total</span>
                    <b id="totalText">₦0</b>
                  </div>
                </div>

                <div
                  className="status"
                  id="availabilityStatus"
                  aria-live="polite"
                ></div>

                <button
                  id="bookNowBtn"
                  className="btn btn--dark btn--wide"
                  type="button"
                  disabled
                >
                  Reserve now
                </button>
              </div>

              <div className="booking__note">
                Courts can be rented for tournaments, school events, weddings,
                funerals, and corporate events.
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="courts">
          <div className="container">
            <div className="section__head">
              <h2>Court views</h2>
              <p>Choose the environment that matches your event.</p>
            </div>

            <div className="cards cards--category" id="categoryCards"></div>
          </div>
        </section>

        <section className="strip" id="usage">
          <div className="container">
            <div className="strip__inner" id="usageStrip"></div>
          </div>
        </section>

        <section className="promoBanner">
          <div className="container promoBanner__inner">
            <div className="promoBanner__copy">
              <h3>Book Indoor Arena with a discount</h3>
              <p>Use promo codes at checkout to reduce your total instantly.</p>
              <button
                className="btn btn--primary"
                id="bannerBookBtn"
                type="button"
              >
                Book now
              </button>
            </div>

            <div className="promoBanner__badge">
              <b id="bannerPercent">10%</b>
              <span>Promo codes available</span>
            </div>
          </div>
        </section>

        <section className="section section--soft" id="faq">
          <div className="container">
            <div className="section__head">
              <h2>FAQs</h2>
              <p>Quick answers to common rental questions.</p>
            </div>

            <div className="faq">
              <details>
                <summary>Do you require a deposit?</summary>
                <p>
                  Deposits depend on the court and booking type. If required,
                  you’ll see it in your booking confirmation.
                </p>
              </details>
              <details>
                <summary>Can I extend my booking?</summary>
                <p>
                  Yes. Extensions are allowed if the court has no conflicting
                  bookings. Book extensions before end time.
                </p>
              </details>
              <details>
                <summary>How do promo codes work?</summary>
                <p>
                  Enter a code and click Apply. Valid codes reduce your subtotal
                  automatically based on rules and expiry.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="section__head">
              <h2>Contact</h2>
              <p>
                Need a quote for a tournament, school, or event? Contact us on:
              </p>
            </div>

            <div className="contact-split">
              <div className="cards cards--contact contact-cards">
                <div className="card card--mini contact-card">
                  <div className="contact-card__head">
                    <span className="contact-card__icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20 12a8 8 0 0 1-8 8c-1.1 0-2.2-.2-3.2-.6L4 20l.7-4.6A7.9 7.9 0 0 1 4 12a8 8 0 1 1 16 0z"></path>
                        <path d="M8 9c1.4 2.6 3.6 4.7 6.2 6.2"></path>
                        <path d="M9.2 7.5l1.3-.5 1.2 2.2-1 .9"></path>
                        <path d="M14.3 12.6l2.2 1.2-.5 1.3"></path>
                      </svg>
                    </span>
                    <b>WhatsApp</b>
                  </div>
                  <a
                    className="contact-card__value"
                    href="https://wa.me/2349067831477"
                  >
                    +234 906 783 1477
                  </a>
                  <span className="contact-card__note">
                    Fast response, 8am–8pm
                  </span>
                </div>

                <div className="card card--mini contact-card">
                  <div className="contact-card__head">
                    <span className="contact-card__icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                        <path d="M3 7l9 6 9-6"></path>
                      </svg>
                    </span>
                    <b>Email</b>
                  </div>
                  <a
                    className="contact-card__value"
                    href="mailto:ballarkafrica@gmail.com"
                  >
                    ballarkafrica@gmail.com
                  </a>
                  <span className="contact-card__note">
                    We reply within 24 hours
                  </span>
                </div>
              </div>

              <div className="location-card">
                <div className="location-map">
                  <iframe
                    title="Dolphins Indoor Basketball Court"
                    src="https://www.google.com/maps?q=Dolphins%20Indoor%20Basketball%20Court%20Lagos&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="location-body">
                  <h3>Venue</h3>
                  <b>Dolphins Indoor Court</b>
                  <p>1, Olu Aboderin St, Lagos, Nigeria</p>
                  <a
                    className="btn btn--light location-btn"
                    href="https://www.google.com/maps?q=Dolphins%20Indoor%20Basketball%20Court%20Lagos"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer__inner">
            <div className="footer__brand">
              <div className="brand brand--footer">
                <img
                  className="brand__mark"
                  src="/assets/img/adrenale.png"
                  alt="Adrenale"
                />
                <span className="brand__text">
                  <b>Dolphins</b>
                  <small>BASKETBALL RENTALS</small>
                </span>
              </div>
              <p className="muted">
                Pricing is sample content. Replace phone/email and connect
                payment later. This site is optimized for fast loading and clean
                structure.
              </p>
            </div>

            <div className="footer__links">
              <div>
                <b>Explore</b>
                <a href="#courts">Courts</a>
                <a href="#usage">Usage</a>
              </div>
              <div>
                <b>Help</b>
                <a href="#faq">FAQs</a>
                <a href="#contact">Contact</a>
                <Link href="/admin">Admin</Link>
              </div>
            </div>
          </div>

          <div className="footer__bottom container">
            <span>
              © <span id="year"></span> Dolphins Courts
            </span>
            <span className="muted">Terms · Privacy</span>
          </div>
        </footer>
      </main>

      <div className="modal" id="modal" aria-hidden="true">
        <div className="modal__backdrop" id="modalBackdrop"></div>

        <div
          className="modal__panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
        >
          <div className="modal__head">
            <h3 id="modalTitle">Reserve your booking</h3>
            <button
              className="iconbtn"
              id="closeModal"
              type="button"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="modal__body">
            <div className="summary" id="bookingSummary"></div>

            <div className="grid">
              <div className="field">
                <label htmlFor="custName">Full name</label>
                <input id="custName" type="text" placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="custPhone">Phone</label>
                <input id="custPhone" type="tel" placeholder="+234..." />
              </div>
              <div className="field">
                <label htmlFor="custEmail">Email</label>
                <input
                  id="custEmail"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="field">
                <label htmlFor="eventType">Event type</label>
                <select id="eventType" defaultValue="Tournament">
                  <option value="Tournament">Tournament</option>
                  <option value="School event">School event</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Funeral">Funeral</option>
                  <option value="Corporate event">Corporate event</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="field field--full">
                <label htmlFor="notes">Notes</label>
                <textarea
                  id="notes"
                  placeholder="Add any detail (layout, vendors, timing, etc.)"
                ></textarea>
              </div>
            </div>

            <div className="msg msg--error" id="modalError"></div>
            <div className="msg msg--ok" id="modalOk"></div>
          </div>

          <div className="modal__foot">
            <button className="btn btn--light" id="cancelModal" type="button">
              Cancel
            </button>
            <button className="btn btn--dark" id="confirmBooking" type="button">
              Confirm reservation
            </button>
          </div>
        </div>
      </div>

      <div className="modal" id="receiptModal" aria-hidden="true">
        <div className="modal__backdrop" id="receiptBackdrop"></div>

        <div
          className="modal__panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="receiptTitle"
        >
          <div className="modal__head">
            <h3 id="receiptTitle">Receipt</h3>
            <button
              className="iconbtn"
              id="closeReceipt"
              type="button"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div className="modal__body">
            <div className="receipt" id="receiptContent"></div>
          </div>

          <div className="modal__foot">
            <button className="btn btn--light" id="cancelReceipt" type="button">
              Close
            </button>
            <button
              className="btn btn--dark"
              id="downloadReceipt"
              type="button"
            >
              Download receipt
            </button>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

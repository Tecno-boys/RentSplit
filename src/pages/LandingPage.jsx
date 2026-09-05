import React from "react";
import "./LandingPage.css";

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCheckCircle() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      />
    </svg>
  );
}

function IconShieldCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconBag() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconHouse() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCamera() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconArrows() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconApple() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.71-.93 2.73.99.08 2.01-.48 2.63-1.23z" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#debt-engine", label: "Debt Engine" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#about", label: "About Us" },
  { href: "#testimonials", label: "Reviews" },
];

const VALUE_PROPS = [
  "No more awkward money conversations",
  "No math and finance arguments",
  "Let's make that easy for you",
];

const EXPENSES = [
  {
    icon: "🛒",
    name: "Trader Joe's Shared Groceries",
    meta: "Paid by Marcus • Split 4 ways",
    amount: "$96.40",
    share: "Your share: $24.10",
  },
  {
    icon: "⚡",
    name: "ConEd Electric & Gas",
    meta: "Auto-split monthly • Equal",
    amount: "$142.00",
    share: "Your share: $35.50",
  },
];

const METRICS = [
  { value: "4.9", suffix: "★", label: "App Store Rating", sub: "Over 3,800+ reviews", green: true },
  { value: "$14M+", label: "Bills Settled", sub: "Without awkward group texts", green: false },
  { value: "45,000+", label: "Happy Roommates", sub: "In 18 metropolitan cities", green: true },
  { value: "0", label: "Fights Caused", sub: "100% peaceful settlements", green: true },
];

const CATEGORIES = [
  {
    icon: <IconBag />,
    title: "Share Groceries",
    tag: "Receipt OCR & Item Breakdown",
    desc: "Snap the receipt. Tap who had the oat milk and who shared the paper towels. RentSplit calculates tax and tips per person automatically.",
  },
  {
    icon: <IconHouse />,
    title: "Monthly Rent",
    tag: "By room size & private bath",
    desc: "Configure rent based on square footage, master bedroom perks, or equal splits. Auto-reminders dispatch 3 days before the 1st of the month.",
  },
  {
    icon: <IconBolt />,
    title: "Wi-Fi & Power",
    tag: "Recurring auto-schedulers",
    desc: "Link electric, gas, water, or fiber bills. Settle recurring fixed and fluctuating utility invoices cleanly without recurring debates.",
  },
];

const CAPABILITIES = [
  {
    icon: <IconCamera />,
    title: "Instant Receipt Scanning (OCR)",
    desc: "Take a photo of the grocery bill. Itemize who had the almond milk and who ate the snacks in seconds.",
  },
  {
    icon: <IconArrows />,
    title: "Debt Simplification Algorithm",
    desc: "No endless circle of Venmo requests. Our math engine collapses 12 multi-roommate debts into single 1-to-1 settlements.",
  },
  {
    icon: <IconClock />,
    title: "Automated Recurring Rent & Wi-Fi",
    desc: "Set it on the 1st of the month. Rent reminders and calculated utilities generate automatically.",
  },
];

const STEPS = [
  {
    title: "Create Flat & Share 6-Digit Code",
    desc: "Invite your flatmates with a quick WhatsApp link or join code. No long signup forms.",
  },
  {
    title: "Log or Snap Expenses As They Happen",
    desc: "Rent, detergent, pizza party, or power bills. Choose who paid and who shares.",
  },
  {
    title: "Settle in 1-Tap",
    desc: "Connect with Venmo, PayPal, Zelle, or mark paid in cash. Clean slate every month.",
  },
];

const FOOTER_PRODUCT = [
  { href: "#features", label: "Receipt OCR" },
  { href: "#features", label: "Rent Calculator" },
  { href: "#debt-engine", label: "Debt Engine" },
  { href: "#how-it-works", label: "6-Digit Join Code" },
  { href: "#get-started", label: "Web App" },
];

const FOOTER_COMPANY = [
  { href: "#about", label: "About Us" },
  { href: "#testimonials", label: "Customer Stories" },
  { href: "#support", label: "Help Center" },
  { href: "#careers", label: "Careers" },
];

const FOOTER_LEGAL = [
  { href: "#privacy", label: "Privacy Policy" },
  { href: "#terms", label: "Terms of Service" },
  { href: "#security", label: "Bank-Level Security" },
  { href: "#contact", label: "Contact Support" },
];

function Header() {
  return (
    <header className="rs-header">
      <div className="rs-container rs-header-inner">
        <a className="rs-brand" href="#">
          <div className="rs-brand-mark">R</div>
          <div className="rs-brand-cols">
            <span className="rs-brand-eyebrow">Roomies</span>
            <span className="rs-brand-name rs-logo-text">
              RENTSPLIT<span style={{ color: "var(--brand-green)" }}>.</span>
            </span>
          </div>
        </a>

        <nav className="rs-nav" aria-label="Desktop Navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="rs-header-actions">
          <a className="rs-btn rs-btn-outline" href="#login">
            LOG IN
          </a>
          <a className="rs-btn rs-btn-solid" href="#get-started">
            GET STARTED
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="rs-hero" id="hero">
      <div className="rs-container rs-hero-grid">
        <div className="rs-hero-content">
          <div className="rs-pill">
            <span className="rs-pulse-dot" />
            Roommate finance without the friction
          </div>

          <h1 className="rs-h1">
            The hardest part of being roommates is <br />
            <span className="rs-text-gradient">splitting bills and finances.</span>
          </h1>

          <div className="rs-value-props">
            {VALUE_PROPS.map((text) => (
              <div className="rs-value-prop" key={text}>
                <span className="rs-value-prop-arrow">&gt;</span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="rs-cta-group">
            <a className="rs-cta-primary" href="#get-started">
              LET US HELP YOU
              <IconArrow />
            </a>
            <div className="rs-cta-note">
              <IconCheckCircle />
              Free for up to 6 flatmates • 2-min setup
            </div>
          </div>
        </div>

        <div className="rs-hero-visual">
          <div className="rs-hero-glow" />
          <div className="rs-hero-card">
            <div className="rs-hero-card-header">
              <div>
                <div className="rs-hero-card-eyebrow">Current Flat</div>
                <div className="rs-hero-card-title">The Brooklyn Loft (#4B)</div>
              </div>
              <span className="rs-badge">4 Active Roommates</span>
            </div>

            <div className="rs-balance-box">
              <div>
                <span className="rs-balance-label">Your Net Settlement</span>
                <span className="rs-balance-amount">+$114.50</span>
                <span className="rs-balance-sub">You are owed by flatmates</span>
              </div>
              <button className="rs-btn-small" type="button">
                Request Settle
              </button>
            </div>

            <div className="rs-expenses">
              <div className="rs-expenses-title">Recent Apartment Expenses</div>
              {EXPENSES.map((exp) => (
                <div className="rs-expense-row" key={exp.name}>
                  <div className="rs-expense-left">
                    <div className="rs-expense-icon">{exp.icon}</div>
                    <div>
                      <div className="rs-expense-name">{exp.name}</div>
                      <div className="rs-expense-meta">{exp.meta}</div>
                    </div>
                  </div>
                  <div>
                    <div className="rs-expense-amount">{exp.amount}</div>
                    <div className="rs-expense-share">{exp.share}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rs-hero-card-footer">
              <div className="rs-hero-card-footer-left">
                <span className="rs-dot-green" />
                <span>Algorithm simplified: 12 debts → 2 payments</span>
              </div>
              <span className="rs-mono-green">100% In Sync</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricsBar() {
  return (
    <section className="rs-metrics">
      <div className="rs-container">
        <div className="rs-metrics-head">
          <span className="rs-metrics-eyebrow">SOCIAL PROOF &amp; STATS</span>
          <h2 className="rs-metrics-sub">
            Trusted by <strong>45,000+ roommates</strong> in shared apartments worldwide
          </h2>
        </div>

        <div className="rs-metrics-grid">
          {METRICS.map((m) => (
            <div className="rs-metric-card" key={m.label}>
              <div className={`rs-metric-value${m.green ? "" : " rs-white"}`}>
                {m.value} {m.suffix}
              </div>
              <div className="rs-metric-label">{m.label}</div>
              <div className="rs-metric-sub">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="rs-about" id="about">
      <div className="rs-container">
        <div className="rs-about-card">
          <div className="rs-about-grid">
            <div className="rs-about-left">
              <span className="rs-about-badge">ABOUT US</span>
              <div>
                <span className="rs-about-brand-eyebrow">ROOMIES</span>
                <h3 className="rs-about-brand-title rs-logo-text">
                  RENTSPLIT<span style={{ color: "var(--brand-green)" }}>.</span>
                </h3>
              </div>
              <p className="rs-about-desc">
                Designed from real flatshare friction in New York, London, and San Francisco. No corporate bloat
                — just seamless shared living.
              </p>
              <div className="rs-about-note">
                <IconShieldCheck />
                <span>Automatic mathematical debt simplification built right in.</span>
              </div>
            </div>

            <div className="rs-about-right">
              <p>
                <strong>Roomies RentSplit</strong> was created by former roommates who got tired of calculating
                Wi-Fi shares at 1 AM and waiting weeks for grocery reimbursements.
              </p>
              <p>
                Whether you share a luxury condo or a tight student apartment, our automated algorithms track
                monthly rent, utility bills, and daily grocery runs without anyone having to be the "bad guy"
                landlord collector.
              </p>
              <p className="rs-about-footnote">
                Stop maintaining messy shared spreadsheets or trading twelve different Venmo requests back and
                forth every month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="rs-categories" id="features">
      <div className="rs-container">
        <div className="rs-section-head">
          <h2 className="rs-section-title">SPLIT EVERYTHING WITH 1 TAP</h2>
          <p className="rs-section-desc">Smart categories tailored specifically for shared apartments and roommates.</p>
        </div>

        <div className="rs-category-grid">
          {CATEGORIES.map((cat) => (
            <div className="rs-category-card" key={cat.title}>
              <div className="rs-category-icon">{cat.icon}</div>
              <h3 className="rs-category-title">{cat.title}</h3>
              <p className="rs-category-tag">{cat.tag}</p>
              <p className="rs-category-desc">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="rs-capabilities" id="debt-engine">
      <div className="rs-container rs-capabilities-grid">
        <div className="rs-capabilities-left">
          <span className="rs-eyebrow">SMART CAPABILITIES</span>
          <h2 className="rs-capabilities-title">Engineered to keep roommate peace.</h2>
          <p className="rs-capabilities-desc">
            We eliminated manual math errors, endless group chat screenshot spam, and debt bottlenecks with
            purpose-built roommate tools.
          </p>
          <div>
            <a className="rs-link-arrow" href="#get-started">
              Explore algorithm mechanics →
            </a>
          </div>
        </div>

        <div className="rs-capabilities-right">
          {CAPABILITIES.map((cap) => (
            <div className="rs-capability-card" key={cap.title}>
              <div className="rs-capability-icon">{cap.icon}</div>
              <div>
                <h3 className="rs-capability-title">{cap.title}</h3>
                <p className="rs-capability-desc">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="rs-setup" id="how-it-works">
      <div className="rs-container">
        <div className="rs-setup-head">
          <span className="rs-eyebrow">QUICK SETUP</span>
          <h2 className="rs-section-title" style={{ marginTop: "0.25rem" }}>
            Live together, split simpler
          </h2>
          <p className="rs-setup-sub">Get your entire apartment onboarded in under two minutes.</p>
        </div>

        <div className="rs-setup-grid">
          {STEPS.map((step, i) => (
            <div className="rs-step-card" key={step.title}>
              <div className="rs-step-number">{i + 1}</div>
              <h3 className="rs-step-title">{step.title}</h3>
              <p className="rs-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="rs-testimonial-section" id="testimonials">
      <div className="rs-container rs-testimonial-wrap">
        <div className="rs-testimonial-card">
          <div className="rs-stars">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <blockquote className="rs-testimonial-quote">
            "Before RentSplit, our group chat was just passive-aggressive screenshots of the electricity bill.
            Now it handles the math and everyone pays on time without any weird tension."
          </blockquote>
          <div className="rs-reviewer">
            <div className="rs-reviewer-avatar">MK</div>
            <div>
              <div className="rs-reviewer-name">Marcus &amp; 3 Flatmates</div>
              <div className="rs-reviewer-meta">Brooklyn, NY • Sharing 2 years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="rs-bottom-cta" id="get-started">
      <div className="rs-container rs-bottom-cta-inner">
        <h2 className="rs-bottom-cta-title">
          Ditch the awkward texts.
          <br />
          <span className="rs-text-gradient">Start splitting smart today.</span>
        </h2>
        <p className="rs-bottom-cta-sub">Free for up to 6 roommates per apartment. Available on iOS &amp; Web.</p>

        <div className="rs-bottom-cta-actions">
          <a className="rs-cta-big" href="#app-store">
            GET STARTED FREE
          </a>
        </div>

        <div className="rs-app-badges">
          <a className="rs-app-badge" href="#app-store">
            <IconApple />
            App Store
          </a>
          <a className="rs-app-badge" href="#web-portal">
            <IconGlobe />
            Web Portal
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="rs-footer">
      <div className="rs-container">
        <div className="rs-footer-grid">
          <div className="rs-footer-brand-col">
            <div className="rs-footer-brand-row">
              <div className="rs-footer-mark">R</div>
              <span className="rs-footer-brand-name rs-logo-text">
                ROOMIES RENTSPLIT<span style={{ color: "var(--brand-green)" }}>.</span>
              </span>
            </div>
            <p className="rs-footer-desc">
              The ultimate companion for roommates everywhere. Keep peace, keep friendships, split every dollar
              without the awkwardness.
            </p>
            <div className="rs-footer-tag">Built for shared apartments.</div>
          </div>

          <div>
            <h4 className="rs-footer-col-title">Product</h4>
            <ul className="rs-footer-list">
              {FOOTER_PRODUCT.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="rs-footer-col-title">Company</h4>
            <ul className="rs-footer-list">
              {FOOTER_COMPANY.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="rs-footer-col-title">Legal &amp; Security</h4>
            <ul className="rs-footer-list">
              {FOOTER_LEGAL.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rs-footer-bottom">
          <div>© 2026 Roomies RentSplit Inc. All rights reserved.</div>
          <div className="rs-footer-bottom-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#support">Support</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="rs-app">
      <Header />
      <Hero />
      <MetricsBar />
      <About />
      <Categories />
      <Capabilities />
      <Steps />
      <Testimonial />
      <BottomCTA />
      <Footer />
    </div>
  );
}
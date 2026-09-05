import React from "react";
import "./dashboardstyles.css";

function Icon({ name, className = "" }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

const NAV_LINKS = [
  { path: "dashboard-overview", label: "Dashboard / Overview", active: true },
  { path: "expenses-ocr", label: "Expenses & OCR" },
  { path: "recurring-bills-rent", label: "Recurring Bills & Rent" },
  { path: "debt-simplification-settle", label: "Debt Simplification & Settle" },
  { path: "flatmates-split-rules", label: "Flatmates & Split Rules" },
];

const STATS = [
  {
    icon: "account_balance_wallet",
    iconColor: "var(--primary-container)",
    label: "Personal Net Balance",
    value: "+$114.50",
    valueClass: "rd-currency-display",
    valueColor: "var(--primary-container)",
    sub: "Owed to you by flatmates",
    footer: "cta",
  },
  {
    icon: "donut_large",
    iconColor: "var(--secondary)",
    label: "October Flat Spend",
    value: "$4,820.00",
    valueClass: "rd-currency-display",
    valueColor: "var(--primary)",
    footer: "progress",
    progressPct: 92.6,
    footerLeft: "Paced at 92.6%",
    footerRight: "Target $5,200",
  },
  {
    icon: "real_estate_agent",
    iconColor: "var(--secondary-fixed)",
    label: "Upcoming Rent & Bills",
    value: "Nov 1st",
    valueClass: "rd-headline-md",
    valueColor: "var(--primary)",
    subCurrency: "$3,400.00 Lease Total",
    subCurrencyColor: "var(--secondary-fixed)",
    footer: "text-icon",
    footerLeft: "Automatic ACH via Vault",
    footerIcon: "verified_user",
    footerIconColor: "var(--secondary)",
  },
  {
    icon: "hub",
    iconColor: "var(--primary-container)",
    label: "Debt Engine Status",
    value: "2 Swaps Needed",
    valueClass: "rd-headline-md",
    valueColor: "var(--primary)",
    sub: "Resolves 12 micro-debts instantly",
    footer: "tags",
    tagLeft: "Max Efficiency",
    tagRight: "Graph v2",
  },
];

const LEDGER_ENTRIES = [
  {
    icon: "shopping_cart",
    iconColor: "var(--primary-container)",
    name: "Trader Joe's Groceries",
    meta: "Paid by Marcus • Split 4 ways",
    amount: "$96.40",
    status: "Settling",
    statusClass: "rd-status-settling",
  },
  {
    icon: "bolt",
    iconColor: "var(--secondary)",
    name: "ConEd Power",
    meta: "Paid by Samira • Split 4 ways",
    amount: "$142.00",
    status: "Settled",
    statusClass: "rd-status-settled",
  },
  {
    icon: "wifi",
    iconColor: "var(--secondary-fixed)",
    name: "Spectrum Wi-Fi",
    meta: "Auto-paid Vault • Split 4 ways",
    amount: "$89.99",
    status: "Settled",
    statusClass: "rd-status-settled",
  },
  {
    icon: "local_cafe",
    iconColor: "var(--primary-container)",
    name: "Whole Foods Household",
    meta: "Paid by Leo • Marcus & Leo split",
    amount: "$64.20",
    status: "Pending",
    statusClass: "rd-status-pending",
  },
];

const FEED_ITEMS = [
  {
    icon: "document_scanner",
    tone: "tone-primary",
    title: "Marcus uploaded a receipt",
    time: "14m ago",
    desc: "AI OCR parsed 7 line items from Trader Joe's receipt with 99.4% confidence.",
  },
  {
    icon: "check_circle",
    tone: "tone-secondary-fixed",
    title: "ConEd Power bill settled",
    time: "2h ago",
    desc: "Samira marked payment verified for all 4 loft residents ($35.50 each).",
  },
  {
    icon: "autorenew",
    tone: "tone-secondary",
    title: "Spectrum Wi-Fi auto-debited",
    time: "Yesterday",
    desc: "$89.99 successfully drawn from reserve vault without manual intervention.",
  },
];

const SETTLEMENTS = [
  {
    name: "Samira Khan",
    room: "Bedroom 2",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaj6f0cMsQCeoWfjmkPWKWEuWIcZ904mQIecq5Yqi_bhgX2sg5iNcp3Rs5R-BzT-Y3Ep55H-NpDpaJOva4TkQNSDYr_iXTlgO9T3NqKLbdoeISJX6-wLX5nQpUD_XjUu7FijYzHhHe72b1ysX1hlT4EfUNPk4gP3D4fCtAiq6PVFkvAIiF-CLufU3G2iRAKp7h5YlzdSMTNfT7F_loKBPtKll9G8Nn4kavT5gRgv3xordLBQ9-PXDsUQ",
    alt: "Close-up environmental headshot of Samira Khan smiling softly inside modern apartment living room",
    amount: "$78.50",
    status: "owed",
  },
  {
    name: "Leo Chen",
    room: "Bedroom 3",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxjUrjz_TYk8JdAQ_J8emf-8p80x9F9aIkkbTdMKW9cJYfRMWByFcf9dcTameVOQGc8YotBJc4Es7E7QBvhUbAIoq1TNMdLRtOnedmxyG8GsWUta_uGz9sTiNtWi4pLox0gxLrC07JvbLVbFztHRJgju7mJeAual2cqRhx8eM9n7vHyFcX-r_1eiVh-wXvLj5DGzmKqyn0QuJUsQrUZQiM0RdMcFVhxeNU8YJelgXYIaP3pmme6A3d0A",
    alt: "Portrait photo of Leo Chen wearing minimal black top in loft setting with plants",
    amount: "$36.00",
    status: "owed",
  },
  {
    name: "Chloe Dupont",
    room: "Master Suite",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY6uXMbbAB8gaDUg1KQlEMhapfZwV6gjcOfYObEitpFgA_LgRVArbFq3_3AwkZnIZ9mNBJ0MyzT0jnDsmxL1f-DiN51qn9U1u7Az9oIvDf_1e7PSitsuMGeCrcgKmERNrUjvEfswsrcd83izoxQyk9TzkxGDvIHpNDot26whnhEn_eFXbgkFDE4cSGchDQ0BsShGMBiSQaSqBMirkkY2SlbsRpia8yODj-9J01XC2QuXKQQ8vdewXyww",
    alt: "Portrait photo of Chloe Dupont in high contrast low light interior setting",
    amount: "$0.00",
    status: "settled",
  },
];

const SUPPLIES = [
  {
    icon: "clean_hands",
    tone: "neutral",
    name: "Paper towels",
    status: "Adequate",
    statusClass: "adequate",
  },
  {
    icon: "soap",
    tone: "warn",
    name: "Dishwasher Pods",
    sub: "3 left • Samira's turn",
    status: "Low",
    statusClass: "low",
  },
  {
    icon: "water_drop",
    tone: "neutral",
    name: "Olive oil",
    status: "Full",
    statusClass: "full",
  },
];

function Header() {
  return (
    <header className="rd-header">
      <div className="rd-header-inner">
        <div className="rd-header-left">
          <div className="rd-brand">
            <div className="rd-brand-mark">
              <Icon name="toll" />
            </div>
            <div className="rd-brand-cols">
              <span className="rd-headline-md rd-brand-name">ROOMIES</span>
              <span className="rd-label-mono rd-brand-sub">RENTSPLIT</span>
            </div>
          </div>

          <div className="rd-header-divider" />

          <div className="rd-flat-pill">
            <div className="rd-flat-name">
              <Icon name="apartment" />
              <span className="rd-body-md">The Brooklyn Loft (#4B)</span>
            </div>
            <div className="rd-flat-active">
              <span className="rd-dot-pulse" />
              <span className="rd-label-mono">4 Active</span>
            </div>
            <div className="rd-flat-code">
              <span className="rd-label-mono">CODE:</span>
              <span className="rd-label-mono">849-291</span>
            </div>
          </div>
        </div>

        <nav className="rd-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.path}
              href="#"
              className={link.active ? "active" : ""}
              data-path={link.path}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="rd-header-actions">
          <button className="rd-btn-add" type="button">
            <Icon name="add" />
            <span>Add Expense</span>
          </button>
          <button className="rd-btn-icon" type="button">
            <Icon name="notifications" />
            <span className="rd-notif-dot" />
          </button>
          <div className="rd-account">
            <div className="rd-account-avatar">
              <Icon name="person" />
            </div>
            <div className="rd-account-info">
              <span className="rd-body-sm rd-account-name">Marcus Vance</span>
              <span className="rd-label-mono rd-account-role">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function WelcomeRow() {
  return (
    <div className="rd-welcome-row">
      <div className="rd-welcome-text">
        <div className="rd-ledger-status">
          <span className="rd-label-mono">Communal Ledger Active</span>
          <span className="rd-dot-pulse" />
          <span className="rd-label-mono">NYC-BK-4B</span>
        </div>
        <h1 className="rd-headline-lg rd-welcome-title">Welcome back, Marcus.</h1>
        <p className="rd-body-lg rd-welcome-sub">Your flat is running smoothly with 4 synced members.</p>
      </div>

      <div className="rd-rent-card">
        <div className="rd-rent-icon">
          <Icon name="calendar_clock" />
        </div>
        <div className="rd-rent-info">
          <span className="rd-label-mono rd-rent-label">Next Rent Milestone</span>
          <div className="rd-rent-value-row">
            <span className="rd-headline-md rd-rent-value">Due in 6 days</span>
            <span className="rd-currency-md rd-rent-amount">($950.00)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ stat }) {
  return (
    <div className="rd-stat-card">
      <div className="rd-stat-head">
        <span className="rd-label-mono">{stat.label}</span>
        <Icon name={stat.icon} className="" />
      </div>

      <div className="rd-stat-body">
        <span className={stat.valueClass} style={{ color: stat.valueColor }}>
          {stat.value}
        </span>
        {stat.sub && <span className="rd-body-sm rd-stat-sub">{stat.sub}</span>}
        {stat.subCurrency && (
          <span className="rd-currency-md" style={{ color: stat.subCurrencyColor }}>
            {stat.subCurrency}
          </span>
        )}
        {stat.footer === "progress" && (
          <div className="rd-progress-track">
            <div className="rd-progress-fill" style={{ width: `${stat.progressPct}%` }} />
          </div>
        )}
      </div>

      {stat.footer === "cta" && (
        <div className="rd-stat-footer">
          <button className="rd-stat-cta" type="button">
            Request Settle
            <Icon name="arrow_forward" />
          </button>
          <span className="rd-dot-pulse" />
        </div>
      )}

      {stat.footer === "progress" && (
        <div className="rd-stat-footer rd-body-sm rd-stat-footer-text">
          <span>{stat.footerLeft}</span>
          <span>{stat.footerRight}</span>
        </div>
      )}

      {stat.footer === "text-icon" && (
        <div className="rd-stat-footer rd-body-sm rd-stat-footer-text">
          <span>{stat.footerLeft}</span>
          <Icon name={stat.footerIcon} className="" />
        </div>
      )}

      {stat.footer === "tags" && (
        <div className="rd-stat-footer">
          <span className="rd-label-mono rd-tag-pill">{stat.tagLeft}</span>
          <span className="rd-label-mono" style={{ color: "var(--outline)" }}>
            {stat.tagRight}
          </span>
        </div>
      )}
    </div>
  );
}

function StatsGrid() {
  return (
    <div className="rd-stats-grid">
      {STATS.map((stat) => (
        <StatCard stat={stat} key={stat.label} />
      ))}
    </div>
  );
}

function LedgerPanel() {
  return (
    <div className="rd-panel">
      <div className="rd-panel-head">
        <div className="rd-panel-title-row">
          <Icon name="receipt_long" />
          <h2 className="rd-headline-md rd-panel-title">Household Ledger Preview</h2>
        </div>
        <span className="rd-label-mono rd-panel-meta">Latest 4 entries</span>
      </div>

      <div className="rd-ledger-list">
        {LEDGER_ENTRIES.map((entry) => (
          <div className="rd-ledger-row" key={entry.name}>
            <div className="rd-ledger-left">
              <div className="rd-ledger-icon" style={{ color: entry.iconColor }}>
                <Icon name={entry.icon} />
              </div>
              <div className="rd-ledger-info">
                <span className="rd-body-md rd-ledger-name">{entry.name}</span>
                <span className="rd-label-mono rd-ledger-meta">{entry.meta}</span>
              </div>
            </div>
            <div className="rd-ledger-right">
              <span className="rd-currency-md rd-ledger-amount">{entry.amount}</span>
              <span className={`rd-label-mono rd-status-pill ${entry.statusClass}`}>{entry.status}</span>
            </div>
          </div>
        ))}
      </div>

      <a className="rd-panel-link rd-headline-md" href="#">
        <span>View All Expenses &amp; OCR Scans</span>
        <Icon name="arrow_forward" />
      </a>
    </div>
  );
}

function PeacekeeperPanel() {
  return (
    <div className="rd-panel">
      <div className="rd-panel-head">
        <div className="rd-panel-title-row">
          <Icon name="shield_with_heart" />
          <h2 className="rd-headline-md rd-panel-title">Household Peacekeeper</h2>
        </div>
        <div className="rd-live-badge">
          <span className="rd-dot-ping" />
          <span className="rd-label-mono">Live</span>
        </div>
      </div>

      <div className="rd-feed-list" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {FEED_ITEMS.map((item) => (
          <div className="rd-feed-item" key={item.title}>
            <div className={`rd-feed-icon ${item.tone}`}>
              <Icon name={item.icon} />
            </div>
            <div className="rd-feed-body">
              <div className="rd-feed-title-row">
                <span className="rd-body-sm rd-feed-title">{item.title}</span>
                <span className="rd-label-mono rd-feed-time">• {item.time}</span>
              </div>
              <p className="rd-body-sm rd-feed-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SettlementPanel() {
  return (
    <div className="rd-panel">
      <div className="rd-panel-head">
        <div className="rd-panel-title-row">
          <Icon name="account_tree" />
          <h2 className="rd-headline-md rd-panel-title">Settlement Snapshot</h2>
        </div>
        <a className="rd-label-mono rd-panel-link-inline" href="#">
          Settle Hub
          <Icon name="arrow_forward" />
        </a>
      </div>

      <div className="rd-settlement-list">
        {SETTLEMENTS.map((person) => (
          <div
            className={`rd-settlement-row${person.status === "settled" ? " faded" : ""}`}
            key={person.name}
          >
            <div className="rd-settlement-person">
              <div className="rd-avatar">
                <img src={person.img} alt={person.alt} />
              </div>
              <div className="rd-person-info">
                <span className="rd-body-md rd-person-name">{person.name}</span>
                <span className="rd-label-mono rd-person-room">{person.room}</span>
              </div>
            </div>
            {person.status === "owed" ? (
              <div className="rd-settlement-value">
                <span className="rd-currency-md rd-owed-amount">{person.amount}</span>
                <span className="rd-label-mono rd-owed-label">owes you</span>
              </div>
            ) : (
              <div className="rd-settlement-value">
                <span className="rd-currency-md rd-settled-amount">{person.amount}</span>
                <span className="rd-label-mono rd-settled-label">All Settled</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="rd-panel-note">
        <div className="rd-panel-note-left">
          <Icon name="bolt" />
          <span className="rd-body-sm">Auto-simplifier eliminates 3 redundant transactions.</span>
        </div>
      </div>
    </div>
  );
}

function SuppliesPanel() {
  return (
    <div className="rd-panel">
      <div className="rd-panel-head">
        <div className="rd-panel-title-row">
          <Icon name="inventory_2" />
          <h2 className="rd-headline-md rd-panel-title">Household Supplies</h2>
        </div>
        <a className="rd-label-mono rd-manage-link" href="#">
          Manage
        </a>
      </div>

      <div className="rd-supplies-list">
        {SUPPLIES.map((item) => (
          <div className="rd-supply-row" key={item.name}>
            <div className="rd-supply-left">
              <div className={`rd-supply-icon ${item.tone}`}>
                <Icon name={item.icon} />
              </div>
              {item.sub ? (
                <div className="rd-supply-meta">
                  <span className="rd-body-md rd-supply-name">{item.name}</span>
                  <span className="rd-label-mono rd-supply-sub">{item.sub}</span>
                </div>
              ) : (
                <span className="rd-body-md rd-supply-name">{item.name}</span>
              )}
            </div>
            <span className={`rd-label-mono rd-supply-status ${item.statusClass}`}>{item.status}</span>
          </div>
        ))}
      </div>

      <button className="rd-btn-restock rd-label-mono" type="button">
        <Icon name="add" />
        Request Item Restock
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="rd-footer">
      <div className="rd-footer-inner">
        <div className="rd-footer-left">
          <span className="rd-label-mono">ROOMIES RENTSPLIT</span>
          <span className="rd-label-mono">•</span>
          <span className="rd-label-mono">Communal Ledger Protocol v2.4</span>
        </div>
        <div className="rd-footer-right">
          <span className="rd-label-mono rd-footer-synced">
            <span className="rd-dot-ping" style={{ width: "0.375rem", height: "0.375rem" }} />
            All Balances Synced
          </span>
          <span className="rd-label-mono rd-footer-copyright">© 2025 Co-Living Networks Inc.</span>
        </div>
      </div>
    </footer>
  );
}

export default function Dashboard() {
  return (
    <div className="rd-app">
      <Header />
      <main className="rd-main">
        <section className="rd-hero">
          <div className="rd-glow-a" />
          <div className="rd-glow-b" />
          <div className="rd-container rd-hero-inner">
            <WelcomeRow />
            <StatsGrid />
            <div className="rd-two-col">
              <div className="rd-col-left">
                <LedgerPanel />
                <PeacekeeperPanel />
              </div>
              <div className="rd-col-right">
                <SettlementPanel />
                <SuppliesPanel />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
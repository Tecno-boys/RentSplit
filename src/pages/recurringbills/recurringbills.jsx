import React, { useState } from "react";
import "./RecurringBills.css";

function Icon({ name, className = "", style }) {
  return (
    <span className={`material-symbols-outlined ${className}`} style={style}>
      {name}
    </span>
  );
}

const NAV_LINKS = [
  { path: "dashboard-overview", label: "Dashboard / Overview" },
  { path: "expenses-ocr", label: "Expenses & OCR" },
  { path: "recurring-bills-rent", label: "Recurring Bills & Rent", active: true },
  { path: "debt-simplification-settle", label: "Debt Simplification & Settle" },
  { path: "flatmates-split-rules", label: "Flatmates & Split Rules" },
];

const ROOMMATES = [
  {
    key: "marcus",
    name: "Marcus Vance",
    room: "Master Room",
    roomDetail: "280 sq ft • Private En-Suite",
    sqft: 280,
    pct: 30,
    pctExact: "29.95%",
    amount: "$950.00",
    color: "var(--primary-container)",
    tagBg: "rgba(0, 255, 136, 0.1)",
    tagColor: "var(--primary-container)",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCETkDuDnssV_hnbLJ5PJFAPk2at3yjB0EntHk_VshMbd1QUvPzqYNpO-xdM7HAG0uw4WlWmb_md2Lvy-YplSvHYD_OoXK8XhUFB3Qw9VTESMURogNCnJ4rryRpaciXwl6f-yaB_-R-K1QzMxXxbjZxxDne1On3qKhgjq43pCp-823AoUwWoymap-XnKruppvhUdeQ4pLNR6f5RGAmPhwLpwx0oJRP9TEQytOh1EFA8HZ64iHMTUItGiA",
    alt: "Portrait of Marcus Vance",
  },
  {
    key: "samira",
    name: "Samira Khan",
    room: "Balcony Room",
    roomDetail: "240 sq ft • Private Terrace Access",
    sqft: 240,
    pct: 26,
    pctExact: "25.67%",
    amount: "$880.00",
    color: "var(--secondary)",
    tagBg: "rgba(69, 223, 164, 0.1)",
    tagColor: "var(--secondary)",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPnQNV5tGrfbB5WfLacoQLaa5uq3xCTd1siATD63xx4whu76o_FWiH2Dblm4KFXL3xyLsoUOijc5rgs_vt3dMTzMclYxvw66mimjF2z8pCqbtGracoNO-ZoaHy1rjcYGmHNoqtKjjA_5No58jqIFaTs8HBjEBRJua3avugBHrMcvAw24tmZgSimBpEfsyCe5W7fUedF3yugwjPT14zVZ88l3tsyvKTBA5E5uKAnD_ES3Oawpqqig3CTg",
    alt: "Portrait of Samira Khan",
  },
  {
    key: "leo",
    name: "Leo Chen",
    room: "Standard A",
    roomDetail: "210 sq ft • Shared Bath 1",
    sqft: 210,
    pct: 23,
    pctExact: "22.46%",
    amount: "$790.00",
    color: "var(--secondary-container)",
    tagBg: "rgba(0, 189, 133, 0.1)",
    tagColor: "var(--secondary-container)",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaPk26AUEXico5GpeEZFcAH2VtU5cSLpBqCrtQDZtw-yFA-HDfWnosztVWQEw4PsUtLuTRFa_Zhm4_KzucAejaohf7TR7Jwby5j9l_6zU2zwR_abiSj-NL_OiWBEFQ-72FXTmluHgS-vaxYuAVZhMfaHTir0K02EXfKzFelPZOeK9KjA5WiunH0EMoqyVgo2aLYfur7RWNlgdLhp4maoJCBU5YlMoH2tu9W8O0W06EPQ4tbOQ_MdWl9A",
    alt: "Portrait of Leo Chen",
  },
  {
    key: "chloe",
    name: "Chloe Dupont",
    room: "Standard B",
    roomDetail: "205 sq ft • East Sun Exposure",
    sqft: 205,
    pct: 22,
    pctExact: "21.92%",
    amount: "$780.00",
    color: "var(--outline-variant)",
    tagBg: "var(--surface-container-highest)",
    tagColor: "var(--on-surface-variant)",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfgM9p6_jI9orjyzo3MNCJ2oWei06hnIQEdIEzNhIWtGh3HSaYmx-tYb1DyGGsO80MWCFKhcfSNgHouq-qicpP5Wbf5IqWJRS5zbmqROM0SlHLfx3Uc25zPDtiHXryL2kz2V_yENi-MFjj-lHKPoGsVIuM3mImwgAXntLBjuUIDOZuW8qSWqdPRJpJc5JoG1ETNUexmaPkXCyv3THPEiMeyOzlOuCr_gZsurslhT5DLYHSiLkO0IyaKw",
    alt: "Portrait of Chloe Dupont",
  },
];

const UTILITIES = [
  {
    icon: "bolt",
    iconColor: "var(--primary-container)",
    name: "ConEd Electric & Gas",
    desc: "Consolidated Variable Billing",
    price: "~$140.00",
    priceNote: "avg / mo",
    sparkline: true,
    footerRows: [
      { label: "Split Rule", value: "25% (4 ways equal)" },
      { label: "Cycle Date", value: "18th of month", accent: true },
    ],
  },
  {
    icon: "wifi",
    iconColor: "var(--secondary)",
    name: "Spectrum Gigabit Fiber",
    desc: "High Speed 1Gbps Dedicated",
    price: "$89.99",
    priceNote: "fixed / mo",
    individualCost: "$22.50 ea",
    footerRows: [
      { label: "Split Rule", value: "Flat 4-Way Equal" },
      { label: "Cycle Date", value: "15th of month", accent: true },
    ],
  },
  {
    icon: "cleaning_services",
    iconColor: "var(--secondary-fixed)",
    name: "Monthly Cleaning Crew",
    desc: "Communal Spaces + Kitchen",
    price: "$160.00",
    priceNote: "monthly total",
    individualCost: "$40.00 ea",
    footerRows: [
      { label: "Schedule", value: "1st & 3rd Thursday" },
      { label: "Direct Debit", value: "Via Venmo Batch", accent: true },
    ],
  },
  {
    icon: "tv",
    iconColor: "var(--tertiary-fixed-dim)",
    name: "Shared Streaming Bundle",
    desc: "Spotify Family + Hulu (Ad-Free)",
    price: "$24.99",
    priceNote: "fixed / mo",
    individualCost: "$6.25 ea",
    footerRows: [
      { label: "Paid By", value: "Samira Khan (Reimbursed)" },
      { label: "Cycle Date", value: "27th of month", accent: true },
    ],
  },
];

const RULES = [
  {
    icon: "chat",
    iconColor: "var(--secondary)",
    title: "WhatsApp / SMS Pre-Notification",
    desc: "Sends gentle reminder balance preview 3 days before the 1st of every month at 10:00 AM.",
  },
  {
    icon: "sync_alt",
    iconColor: "var(--primary-container)",
    title: "Auto-Draft via Plaid ACH Network",
    desc: "Direct bank pull triggered automatically on the 28th to allow settlement before the landlord deadline.",
  },
  {
    icon: "receipt_long",
    iconColor: "var(--secondary-fixed)",
    title: "Proof-of-Payment Ledger Snapshot",
    desc: "Automatically emails official landlord transaction receipts to all 4 flatmate registered emails.",
  },
];

const TIMELINE = [
  {
    date: "15",
    tone: "upcoming",
    title: "Spectrum Internet Draft",
    meta: "$89.99 total ($22.50 / each)",
    metaTone: "accent",
  },
  {
    date: "18",
    tone: "muted",
    title: "ConEd Statement Arrival",
    meta: "Est. ~$140.00 split 4-ways",
  },
  {
    date: "28",
    tone: "highlight",
    title: "ACH Rent Pull Initiated",
    meta: "$3,400.00 aggregate sum",
    titleStrong: true,
    metaTone: "highlight",
  },
  {
    date: "01",
    tone: "muted",
    title: "Landlord Rent Disbursed",
    meta: "NYC Horizon Holdings LLC",
  },
];

function Header() {
  return (
    <header className="rb-header">
      <div className="rb-header-inner">
        <div className="rb-header-left">
          <div className="rb-brand">
            <div className="rb-brand-mark">
              <Icon name="toll" />
            </div>
            <div className="rb-brand-cols">
              <span className="rb-headline-md rb-brand-name">ROOMIES</span>
              <span className="rb-label-mono rb-brand-sub">RENTSPLIT</span>
            </div>
          </div>

          <div className="rb-header-divider" />

          <div className="rb-flat-pill">
            <div className="rb-flat-name">
              <Icon name="apartment" />
              <span className="rb-body-md">The Brooklyn Loft (#4B)</span>
            </div>
            <div className="rb-flat-active">
              <span className="rb-dot-pulse" />
              <span className="rb-label-mono">4 Active</span>
            </div>
            <div className="rb-flat-code">
              <span className="rb-label-mono">CODE:</span>
              <span className="rb-label-mono">849-291</span>
            </div>
          </div>
        </div>

        <nav className="rb-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.path} href="#" className={link.active ? "active" : ""} data-path={link.path}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="rb-header-actions">
          <button className="rb-btn-add" type="button">
            <Icon name="add" />
            <span>Add Expense</span>
          </button>
          <button className="rb-btn-icon" type="button">
            <Icon name="notifications" />
            <span className="rb-notif-dot" />
          </button>
          <div className="rb-account">
            <div className="rb-account-avatar">
              <Icon name="person" />
            </div>
            <div className="rb-account-info">
              <span className="rb-body-sm rb-account-name">Marcus Vance</span>
              <span className="rb-label-mono rb-account-role">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero({ onOpenModal }) {
  return (
    <div className="rb-hero">
      <div className="rb-hero-text">
        <div className="rb-hero-tag">
          <span className="rb-hero-tag-dot" />
          <span className="rb-label-mono">Contract Protocol • Apt 4B</span>
        </div>
        <h1 className="rb-headline-lg rb-hero-title">Recurring Bills &amp; Rent Allocation</h1>
        <p className="rb-body-lg rb-hero-sub">
          Automate monthly lease splits based on room size and auto-schedule utility dues.
        </p>
      </div>

      <div className="rb-hero-actions">
        <div className="rb-vault-pill">
          <Icon name="verified_user" />
          <span className="rb-label-mono">
            ACH LANDLORD VAULT: <strong>LINKED</strong>
          </span>
        </div>
        <button className="rb-edit-btn rb-headline-md" type="button" onClick={onOpenModal}>
          <Icon name="tune" />
          <span>Edit Formula</span>
        </button>
      </div>
    </div>
  );
}

function LeasePanel({ autopay, onToggleAutopay }) {
  return (
    <div className="rb-lease-panel">
      <div className="rb-lease-glow" />

      <div className="rb-lease-top">
        <div className="rb-lease-metrics">
          <div className="rb-metric-block">
            <span className="rb-label-mono rb-metric-block-label">Total Contractual Lease</span>
            <div className="rb-metric-row">
              <span className="rb-currency-display" style={{ color: "var(--primary)" }}>
                $3,400.00
              </span>
              <span className="rb-label-mono">/ month</span>
            </div>
          </div>
          <div className="rb-metric-vdivider" />
          <div className="rb-metric-block">
            <span className="rb-label-mono rb-metric-block-label">Total Measurable Space</span>
            <span className="rb-headline-md rb-metric-block-value">
              935 <span className="rb-body-sm">sq ft private footprint</span>
            </span>
          </div>
        </div>

        <div className="rb-autopay-card">
          <div className="rb-autopay-left">
            <div className="rb-autopay-icon">
              <Icon name="account_balance" />
            </div>
            <div className="rb-autopay-info">
              <span className="rb-body-md rb-autopay-title">Landlord Auto-Pay</span>
              <span className="rb-label-mono rb-autopay-sub">Lease ends Aug 31, 2026</span>
            </div>
          </div>
          <label className="rb-toggle">
            <input type="checkbox" checked={autopay} onChange={onToggleAutopay} />
            <span className="rb-toggle-track" />
          </label>
        </div>
      </div>

      <div className="rb-ratio-block">
        <div className="rb-ratio-head">
          <span className="rb-label-mono">Square-Footage Proportional Split Ratio</span>
          <span className="rb-label-mono">100% Floorplan Accounted</span>
        </div>

        <div className="rb-stacked-bar">
          {ROOMMATES.map((r) => (
            <div
              key={r.key}
              className="rb-bar-seg"
              style={{ width: r.pctExact, backgroundColor: r.color }}
            >
              <div className="rb-bar-tooltip">
                {r.name.split(" ")[0]}: {r.sqft} sq ft ({r.amount})
              </div>
            </div>
          ))}
        </div>

        <div className="rb-ratio-legend">
          {ROOMMATES.map((r) => (
            <div className="rb-legend-item rb-label-mono" key={r.key}>
              <span className="rb-legend-dot" style={{ backgroundColor: r.color }} />
              <span>
                {r.name.split(" ")[0]} ({r.sqft}sqft • {r.pct}%)
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rb-breakdown-grid">
        {ROOMMATES.map((r) => (
          <div className="rb-person-card" key={r.key}>
            <div className="rb-person-top">
              <div className="rb-person-head">
                <div className="rb-avatar-wrap">
                  <img src={r.img} alt={r.alt} />
                  <span className="rb-avatar-pct" style={{ color: r.color }}>
                    {r.pct}%
                  </span>
                </div>
                <span className="rb-room-tag" style={{ backgroundColor: r.tagBg, color: r.tagColor }}>
                  {r.room}
                </span>
              </div>
              <div className="rb-person-name-block">
                <span className="rb-body-lg rb-person-name">{r.name}</span>
                <span className="rb-body-sm rb-person-room">{r.roomDetail}</span>
              </div>
            </div>
            <div className="rb-share-box">
              <span className="rb-label-mono rb-share-box-label">Monthly Share</span>
              <div className="rb-share-row">
                <span className="rb-currency-md rb-share-amount">{r.amount}</span>
                <span className="rb-label-mono rb-share-autopay">Auto-Pay On</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rb-footnote">
        <div className="rb-footnote-left">
          <Icon name="info" />
          <span className="rb-body-sm">
            Formula incorporates +$40 amenity adjustment for private en-suite bathroom and +$20 for private
            terrace balcony.
          </span>
        </div>
        <a className="rb-footnote-link rb-label-mono" href="#">
          <span>Download Signed Addendum (PDF)</span>
          <Icon name="arrow_outward" />
        </a>
      </div>
    </div>
  );
}

function Sparkline() {
  return (
    <svg className="rb-sparkline" viewBox="0 0 160 30" fill="none" preserveAspectRatio="none">
      <path
        d="M0 24 Q 25 10, 50 18 T 100 8 T 130 14 T 160 6"
        fill="none"
        stroke="var(--primary-container)"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M0 24 Q 25 10, 50 18 T 100 8 T 130 14 T 160 6 L 160 30 L 0 30 Z"
        fill="var(--primary-container)"
        fillOpacity="0.08"
      />
    </svg>
  );
}

function UtilitiesSection() {
  return (
    <div className="rb-section">
      <div className="rb-section-head">
        <div>
          <h2 className="rb-headline-md rb-section-title">Automated Utilities &amp; Subscriptions</h2>
          <p className="rb-body-sm rb-section-desc">
            Connected household feeds auto-billed and fractioned across active residents.
          </p>
        </div>
        <button className="rb-add-bill-btn rb-headline-md" type="button">
          <Icon name="add_circle" />
          <span>Add Recurring Bill</span>
        </button>
      </div>

      <div className="rb-utilities-grid">
        {UTILITIES.map((u) => (
          <div className="rb-utility-card" key={u.name}>
            <div className="rb-utility-top">
              <div className="rb-utility-head">
                <div className="rb-utility-icon">
                  <Icon name={u.icon} style={{ color: u.iconColor }} />
                </div>
                <span className="rb-autodraft-pill">
                  <span className="rb-dot-pulse" />
                  AUTO-DRAFT
                </span>
              </div>

              <div className="rb-utility-name-block">
                <span className="rb-body-lg rb-utility-name">{u.name}</span>
                <span className="rb-body-sm rb-utility-desc">{u.desc}</span>
              </div>

              <div className="rb-utility-price-row">
                <div className="rb-utility-price-line">
                  <span className="rb-currency-md rb-utility-price">{u.price}</span>
                  <span className="rb-label-mono rb-utility-price-note">{u.priceNote}</span>
                </div>
                {u.sparkline ? (
                  <Sparkline />
                ) : (
                  <div className="rb-individual-cost">
                    <span className="rb-body-sm">Individual Cost:</span>
                    <span className="rb-body-sm">{u.individualCost}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="rb-utility-footer">
              {u.footerRows.map((row) => (
                <div className="rb-utility-footer-row" key={row.label}>
                  <span>{row.label}</span>
                  <span className={row.accent ? "accent" : ""}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AutomationSection() {
  return (
    <div className="rb-automation-grid">
      <div className="rb-automation-card">
        <div className="rb-automation-head">
          <div className="rb-automation-head-left">
            <div className="rb-automation-icon">
              <Icon name="smart_toy" />
            </div>
            <div>
              <h3 className="rb-headline-md rb-automation-title">Automated Reminder &amp; Pull Rules</h3>
              <p className="rb-body-sm rb-automation-sub">
                Zero-friction collection rules to prevent lease default and late fees.
              </p>
            </div>
          </div>
          <span className="rb-label-mono rb-active-pill">ALL ACTIVE</span>
        </div>

        <div className="rb-rules-list">
          {RULES.map((rule) => (
            <div className="rb-rule-row" key={rule.title}>
              <div className="rb-rule-left">
                <div className="rb-rule-icon">
                  <Icon name={rule.icon} style={{ color: rule.iconColor }} />
                </div>
                <div>
                  <div className="rb-body-md rb-rule-title">{rule.title}</div>
                  <div className="rb-body-sm rb-rule-desc">{rule.desc}</div>
                </div>
              </div>
              <Icon name="toggle_on" className="rb-rule-toggle" />
            </div>
          ))}
        </div>
      </div>

      <div className="rb-timeline-card">
        <div>
          <div className="rb-timeline-head">
            <span className="rb-body-lg">Upcoming Milestones</span>
            <span className="rb-label-mono">OCTOBER 2025</span>
          </div>

          <div className="rb-timeline-list" style={{ marginTop: "1rem" }}>
            {TIMELINE.map((item) => (
              <div className="rb-timeline-item" key={item.title}>
                <div className={`rb-timeline-date ${item.tone}`}>{item.date}</div>
                <div>
                  <div className={`rb-body-sm rb-timeline-title${item.titleStrong ? " strong" : ""}`}>
                    {item.title}
                  </div>
                  <div className={`rb-label-mono rb-timeline-meta ${item.metaTone || ""}`}>{item.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="rb-sync-btn rb-headline-md" type="button">
          <Icon name="calendar_month" />
          <span>Sync with Google / Apple Calendar</span>
        </button>
      </div>
    </div>
  );
}

function AllocationModal({ onClose }) {
  const [sqft, setSqft] = useState({
    marcus: 280,
    samira: 240,
    leo: 210,
    chloe: 205,
  });
  const [saveLabel, setSaveLabel] = useState("Recalculate & Save");

  const updateField = (key) => (e) => {
    const value = e.target.value === "" ? "" : Number(e.target.value);
    setSqft((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    setSaveLabel("Calculated!");
    setTimeout(() => {
      setSaveLabel("Recalculate & Save");
      onClose();
    }, 600);
  };

  const fields = [
    { key: "marcus", label: "Marcus (Master + Bath)" },
    { key: "samira", label: "Samira (Terrace Balcony)" },
    { key: "leo", label: "Leo (Standard A)" },
    { key: "chloe", label: "Chloe (Standard B)" },
  ];

  return (
    <div className="rb-modal-overlay" onClick={onClose}>
      <div className="rb-modal" onClick={(e) => e.stopPropagation()}>
        <div className="rb-modal-head">
          <div>
            <h3 className="rb-headline-md rb-modal-title">Lease Allocation Engine</h3>
            <span className="rb-body-sm rb-modal-sub">Adjust square footages or amenity premium offsets.</span>
          </div>
          <button className="rb-modal-close" type="button" onClick={onClose}>
            <Icon name="close" />
          </button>
        </div>

        <div className="rb-modal-fields">
          {fields.map((f) => (
            <div className="rb-modal-field" key={f.key}>
              <span className="rb-body-md">{f.label}</span>
              <div className="rb-modal-field-input-row">
                <input type="number" value={sqft[f.key]} onChange={updateField(f.key)} />
                <span className="rb-label-mono rb-modal-field-unit">sq ft</span>
              </div>
            </div>
          ))}
        </div>

        <div className="rb-modal-actions">
          <button className="rb-modal-cancel" type="button" onClick={onClose}>
            Cancel
          </button>
          <button className="rb-modal-save rb-headline-md" type="button" onClick={handleSave}>
            {saveLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="rb-footer">
      <div className="rb-footer-inner">
        <div className="rb-footer-left">
          <span className="rb-label-mono">ROOMIES RENTSPLIT</span>
          <span className="rb-label-mono">•</span>
          <span className="rb-label-mono">Communal Ledger Protocol v2.4</span>
        </div>
        <div className="rb-footer-right">
          <span className="rb-label-mono rb-footer-synced">
            <span className="rb-dot-ping" />
            All Balances Synced
          </span>
          <span className="rb-label-mono rb-footer-copyright">© 2025 Co-Living Networks Inc.</span>
        </div>
      </div>
    </footer>
  );
}

export default function RecurringBills() {
  const [modalOpen, setModalOpen] = useState(false);
  const [autopay, setAutopay] = useState(true);

  return (
    <div className="rb-app">
      <Header />
      <main className="rb-main">
        <div className="rb-container">
          <Hero onOpenModal={() => setModalOpen(true)} />
          <LeasePanel autopay={autopay} onToggleAutopay={() => setAutopay((v) => !v)} />
          <UtilitiesSection />
          <AutomationSection />
        </div>
      </main>
      <Footer />
      {modalOpen && <AllocationModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}
import React, { useState } from "react";
import "./RecurringBills.css";
import Nav from "../../components/postLogin/nav";

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
    name: "Electric & Gas",
    price: "~$140.00",
    priceNote: "avg / mo",
    sparkline: true,
  },
  {
    icon: "wifi",
    iconColor: "var(--secondary)",
    name: "Spectrum Gigabit Fiber",
    price: "$89.99",
    priceNote: "fixed / mo",
    individualCost: "$22.50 ea",
  },
  {
    icon: "cleaning_services",
    iconColor: "var(--secondary-fixed)",
    name: "Monthly Cleaning Crew",
    price: "$160.00",
    priceNote: "monthly total",
    individualCost: "$40.00 ea",
  },
  {
    icon: "tv",
    iconColor: "var(--tertiary-fixed-dim)",
    name: "Shared Streaming Bundle",
    price: "$24.99",
    priceNote: "fixed / mo",
    individualCost: "$6.25 ea",
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

function Hero({ onOpenModal }) {
  return (
    <div className="rb-hero">
      <div className="rb-hero-text">
        <h1 className="rb-headline-lg rb-hero-title">Recurring Bills &amp; Rent Allocation</h1>
        <p className="rb-body-lg rb-hero-sub">
          Pay according to your agreement
        </p>
      </div>

      <div className="rb-hero-actions">
        <button className="rb-edit-btn rb-headline-md" type="button" onClick={onOpenModal}>
          <Icon name="tune" />
          <span>Edit Split</span>
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
            <span className="rb-label-mono rb-metric-block-label">Your Monthly Rent</span>
            <div className="rb-metric-row">
              <span className="rb-currency-display" style={{ color: "var(--primary)" }}>
                $3,400.00
              </span>
              <span className="rb-label-mono">/ month</span>
            </div>
          </div>
          <div className="rb-metric-vdivider" />
        </div>
      </div>

      <div className="rb-ratio-block">
        <div className="rb-ratio-head">
          <span className="rb-label-mono">Split Ratio</span>
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
                {r.name.split(" ")[0]}
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
                </div>
                <span className="rb-body-lg rb-person-name">{r.name}</span>
                <span className="rb-room-tag" style={{ backgroundColor: r.tagBg, color: r.tagColor }}>
                  {r.room}
                </span>
              </div>
            </div>
            <div className="rb-share-box">
              <span className="rb-label-mono rb-share-box-label">Monthly Share</span>
              <div className="rb-share-row">
                <span className="rb-currency-md rb-share-amount">{r.amount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rb-footnote">
        <div className="rb-footnote-left">
          <Icon name="info" />
          <span className="rb-body-sm">
            Ratios are set by the Flat Admin
          </span>
        </div>
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
          <h2 className="rb-headline-md rb-section-title">Utilities &amp; Subscriptions</h2>
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

                <div className="rb-utility-name-block">
                <span className="rb-body-lg rb-utility-name">{u.name}</span>
                <span className="rb-body-sm rb-utility-desc">{u.desc}</span>
                </div>

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
          </div>
        ))}
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
      <Nav />
      <main className="rb-main">
        <div className="rb-container">
          <Hero onOpenModal={() => setModalOpen(true)} />
          <LeasePanel autopay={autopay} onToggleAutopay={() => setAutopay((v) => !v)} />
          <UtilitiesSection />
        </div>
      </main>
      <Footer />
      {modalOpen && <AllocationModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}
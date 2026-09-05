import React, { useRef, useState } from "react";
import "./debtsettle.css";

function Icon({ name, className = "" }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

const NAV_LINKS = [
  { path: "dashboard-overview", label: "Dashboard / Overview" },
  { path: "expenses-ocr", label: "Expenses & OCR" },
  { path: "recurring-bills-rent", label: "Recurring Bills & Rent" },
  { path: "debt-simplification-settle", label: "Debt Simplification & Settle", active: true },
  { path: "flatmates-split-rules", label: "Flatmates & Split Rules" },
];

const SWAPS = [
  {
    payerName: "Chloe Dupont",
    payerImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQiS9Qv6X7rPY5guH2oqubawBFYmEX3JPQNIhmW7PdqFdK7p6Nm_C58smtGOMRFcl-qqvUft0Juoqjh_akSsdWlBEl-ldXaET7uXM0-Mqlp--mgyqaXrsuLiCqmQdAZouBYvzXIdpHpgrKjGcQwv-DGOUuUwJzTFU2pYJtB7mOrFfom8Ptgdr7z-WW_RZEnMtPBXy5-GLS2CAa0oZUFg_a7I-HKX5hFeHNbbG337YmjaVFrKf9-M9tiQ",
    payerAlt: "Portrait of Chloe Dupont",
    receiverName: "Samira Khan",
    receiverImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9YwRwAKme6jYjgtEPHL1719VgCoWVUITR985KscNpF1uJ8xJcUR-vo-zdWRAMElVC5hdmZ7IpmZh7TzIOoIjcIRdTo1yZpIEv58wYUdfx-jDczDSuxrtTEQ433h8L5mqq_QYbj00i-9OeQVZcoeBjK29r-j2RJPMQjIA9ThMNIWDLGDwwlUZZvoRNwbyD4yr8qr6AAfvhIadZ5ulrKOfKd32svXGbjKfCFf12Y4ejcHYTMI_XAXtH0Q",
    receiverAlt: "Portrait of Samira Khan",
    receiverIsYou: false,
    amount: "$42.00",
    note: "Clears 5 micro-debts (Wi-Fi + Groceries + Takeout)",
    duration: "2s",
  },
  {
    payerName: "Leo Chen",
    payerImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHXRSu5kcADmmNXQIiSncGZlguMQQub27siMwJCVigWZ_k_EMTxJhxJitKSHghHJ_TOqcvPdLPUIxzsjzJxreEp-GuNUVWSgmzjIDHO_VTtD-34Zxf_ZOjQ3WncSX9XlR6lBat4vgd51fDnY49c0LdJUlv_7Cmj3Kdrl7J-XHb0bO2Jngqzgf8rWPDcbX0K-GKW1PEYBS6Psk1dl7p7ZMby9fBAjKr2m0Ye0o3KeoHf8xjekYxSxPBsg",
    payerAlt: "Portrait of Leo Chen",
    receiverName: "Marcus Vance (You)",
    receiverImg: null,
    receiverIsYou: true,
    amount: "$36.00",
    note: "Clears 7 micro-debts (ConEd Electric + Laundry tokens)",
    duration: "2.4s",
  },
];

const BALANCES = [
  {
    name: "Samira Khan",
    handle: "@samira-khan-9",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdmvglTW5gr7apUszBwRe9-Yf_N7Xevzs1LQO2W-hjzSHZ-Vq_CLE0ruDN-1kbTU82klYXN9Qd5jkOVnkFAHhi68kQCwT3fyFhbpQeZKqCK0HZi0JtFWCpPwtevkObp6ZPB1_-0Czxvju8CjPeTnAnREdLwyQZsFzWL1EIBug2R4FzzwS3zEW92oGBMYvznTRvmIc9IxbxIrwGQi6Jug3B36x7D7-W54EzvKc_h1-RtiCWCT4RiNzYEg",
    alt: "Portrait of Samira Khan",
    status: "owes",
    amount: "$78.50",
    netLabel: "Net Flat Balance",
    netValue: "+$42.00",
    netTone: "secondary",
    note: "Covers March Trader Joe's run ($56.20) and fiber internet share ($22.30).",
    primaryAction: { label: "Send Venmo Link", icon: "outgoing_mail", href: "https://venmo.com" },
    secondaryActions: [
      { label: "Zelle Request", icon: "account_balance", type: "settle" },
      { label: "Mark Cash Paid", icon: "done_all", type: "markPaid" },
    ],
  },
  {
    name: "Leo Chen",
    handle: "@leo-chen22",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpwcTHgjAQ2_RIIWAfsA325_wG_HjxhdLTcNfmqrHfDxL-YtsCTU9Jz1ymy8OeSCKpfRhyE68mZtcoOx-22hi6esAMA8MM5jCeFl-EZkRCxjocSLL_s17tY2ZU3vURxUmFvAxv-hiu6faTK-KJoBkjMXpc0H6y-rRHXmg3bE1gKY9_CbtjIrZbPgRIkyLR05-I3--VmXSG1k2Q7B-b9JSxdeRx55HGERvqFBe1hFs9hnoknzovQIS-XA",
    alt: "Portrait of Leo Chen",
    status: "owes",
    amount: "$36.00",
    netLabel: "Net Flat Balance",
    netValue: "-$36.00",
    netTone: "error",
    note: "Electricity surge charge for air conditioning and living room smart bulbs.",
    primaryAction: { label: "Send Zelle Link", icon: "account_balance", type: "settle" },
    secondaryActions: [
      { label: "WhatsApp Nudge", icon: "chat", type: "nudge" },
      { label: "Mark Paid", icon: "done_all", type: "markPaid" },
    ],
  },
  {
    name: "Chloe Dupont",
    handle: "@chloedupont",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLnFSKxVBT39np2yOuu3Cce02qhuxW-hJEJ2y9l4U6VjPUnhSdmVFKvduiVrsXL2xfy8UpQUxqYV9mPK2RrN-D-zdOSoFvKmnkenemzv8NOpTV8cUQG4Z7-h2oM39XL0tVkwflhtF4BR4L06U-H2OSoagKMBvynkioiDIEVi0eSC6uR3HMNhvoY2cEx8ZX9V905M-wbwmbMJX-38DQgfK1h9B1HjrriyZQLMnOt3qDCDWQpAMvY0unrQ",
    alt: "Portrait of Chloe Dupont",
    status: "settled",
    amount: "$0.00",
    note: "Zero debt pending. Algorithm assigned remaining $42.00 to Samira directly.",
  },
];

const GATEWAYS = [
  {
    letter: "V",
    bg: "rgba(0, 140, 255, 0.15)",
    color: "#008CFF",
    name: "Venmo",
    detail: "@marcus-vance",
  },
  {
    letter: "Z",
    bg: "rgba(116, 20, 202, 0.2)",
    color: "#A855F7",
    name: "Zelle",
    detail: "mvance@brooklynloft.io",
  },
  {
    letter: "P",
    bg: "rgba(0, 48, 135, 0.2)",
    color: "#38BDF8",
    name: "PayPal Direct",
    detail: "Connected / Verified",
  },
];

const HISTORY = [
  {
    date: "Apr 18, 2025",
    payer: "Samira Khan",
    recipient: "Marcus Vance",
    method: "Venmo",
    methodColor: "var(--secondary)",
    ref: "#VM-99410",
    amount: "$124.00",
    amountColor: "var(--primary-fixed-dim)",
  },
  {
    date: "Apr 04, 2025",
    payer: "Leo Chen",
    recipient: "Chloe Dupont",
    method: "Zelle",
    methodColor: "#A855F7",
    ref: "#ZL-38102",
    amount: "$65.40",
    amountColor: "var(--on-surface)",
  },
  {
    date: "Mar 31, 2025",
    payer: "Chloe Dupont",
    recipient: "Marcus Vance",
    method: "Cash Log",
    methodColor: "var(--primary-fixed-dim)",
    ref: "#OFFLINE",
    amount: "$210.00",
    amountColor: "var(--primary-fixed-dim)",
  },
  {
    date: "Mar 15, 2025",
    payer: "Marcus Vance",
    recipient: "Leo Chen",
    method: "Venmo",
    methodColor: "var(--secondary)",
    ref: "#VM-82019",
    amount: "$45.00",
    amountColor: "var(--on-surface)",
  },
];

function Header() {
  return (
    <header className="ds-header">
      <div className="ds-header-inner">
        <div className="ds-header-left">
          <div className="ds-brand">
            <div className="ds-brand-mark">
              <Icon name="toll" />
            </div>
            <div className="ds-brand-cols">
              <span className="ds-headline-md ds-brand-name">ROOMIES</span>
              <span className="ds-label-mono ds-brand-sub">RENTSPLIT</span>
            </div>
          </div>

          <div className="ds-header-divider" />

          <div className="ds-flat-pill">
            <div className="ds-flat-name">
              <Icon name="apartment" />
              <span className="ds-body-md">The Brooklyn Loft (#4B)</span>
            </div>
            <div className="ds-flat-active">
              <span className="ds-dot-pulse" />
              <span className="ds-label-mono">4 Active</span>
            </div>
            <div className="ds-flat-code">
              <span className="ds-label-mono">CODE:</span>
              <span className="ds-label-mono">849-291</span>
            </div>
          </div>
        </div>

        <nav className="ds-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.path} href="#" className={link.active ? "active" : ""} data-path={link.path}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ds-header-actions">
          <button className="ds-btn-add" type="button">
            <Icon name="add" />
            <span>Add Expense</span>
          </button>
          <button className="ds-btn-icon" type="button">
            <Icon name="notifications" />
            <span className="ds-notif-dot" />
          </button>
          <div className="ds-account">
            <div className="ds-account-avatar">
              <Icon name="person" />
            </div>
            <div className="ds-account-info">
              <span className="ds-body-sm ds-account-name">Marcus Vance</span>
              <span className="ds-label-mono ds-account-role">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero({ onRerun }) {
  return (
    <div className="ds-hero">
      <div className="ds-hero-text">
        <div className="ds-hero-tag-row">
          <span className="ds-live-pill ds-label-mono">
            <span className="ds-dot-pulse" />
            Min-Flow Solver Active
          </span>
          <span className="ds-hero-dim ds-label-mono">•</span>
          <span className="ds-hero-cycle ds-label-mono">CYCLE 14 / APR 2025</span>
        </div>
        <h1 className="ds-headline-lg ds-hero-title">Debt Simplification &amp; Settle Up Hub</h1>
        <p className="ds-body-lg ds-hero-sub">
          Mathematical minimum-cash-flow algorithm reducing tangled multi-directional debts down to direct
          zero-friction transfers.
        </p>
      </div>

      <div className="ds-net-pill">
        <div>
          <span className="ds-label-mono ds-net-label">Net Receivable</span>
          <div className="ds-currency-display ds-net-value">+$114.50</div>
        </div>
        <div className="ds-net-divider" />
        <button className="ds-rerun-btn" type="button" onClick={onRerun}>
          <Icon name="sync" />
          <span>Re-run Graph</span>
        </button>
      </div>
    </div>
  );
}

function EngineSection({ onBroadcast }) {
  return (
    <section className="ds-engine">
      <div className="ds-engine-glow-a" />
      <div className="ds-engine-glow-b" />

      <div className="ds-engine-inner">
        <div className="ds-engine-head">
          <div className="ds-engine-head-left">
            <div className="ds-engine-icon">
              <Icon name="hub" />
            </div>
            <div>
              <div className="ds-headline-md ds-engine-title">
                Algorithm Result: 12 Micro-Debts Collapsed into 2 Direct Swaps
              </div>
              <div className="ds-body-sm ds-engine-sub">
                All inter-roommate grocery runs, electricity spikes, and split diners resolved.
              </div>
            </div>
          </div>
          <div className="ds-reduction-pill">
            <Icon name="verified" />
            <span className="ds-label-mono">83% reduction in payment transfers across the flat</span>
          </div>
        </div>

        <div className="ds-flow-grid">
          <div className="ds-flow-left">
            <div className="ds-flow-left-head">
              <span className="ds-label-mono ds-flow-left-head-label">
                <span className="dot" /> Directed Resolution Path
              </span>
              <span className="ds-label-mono ds-flow-tree-tag">O(V + E) Minimal Spanning Tree</span>
            </div>

            <div className="ds-swap-list">
              {SWAPS.map((swap) => (
                <div className="ds-swap-row" key={swap.payerName}>
                  <div className="ds-swap-person">
                    <div className="ds-swap-avatar-wrap">
                      <img src={swap.payerImg} alt={swap.payerAlt} />
                      <span className="ds-swap-role-tag">Payer</span>
                    </div>
                    <div className="ds-swap-name-block">
                      <span className="ds-body-md ds-swap-name">{swap.payerName}</span>
                      <span className="ds-label-mono ds-swap-meta">Flat Share #4B</span>
                    </div>
                  </div>

                  <div className="ds-swap-stream">
                    <div className="ds-swap-stream-top ds-label-mono">
                      <span className="label">
                        <span className="dot" /> Direct Transfer
                      </span>
                      <span className="amount">{swap.amount} USD</span>
                    </div>
                    <div className="ds-stream-track">
                      <div className="ds-stream-fill" style={{ animationDuration: swap.duration }} />
                    </div>
                    <span className="ds-swap-note">{swap.note}</span>
                  </div>

                  <div className="ds-swap-person right">
                    <div className="ds-swap-name-block right">
                      <span className={`ds-body-md ds-swap-name${swap.receiverIsYou ? " you" : ""}`}>
                        {swap.receiverName}
                      </span>
                      <span className="ds-label-mono ds-swap-meta receiver">Receiver</span>
                    </div>
                    <div className="ds-swap-avatar-wrap">
                      {swap.receiverImg ? (
                        <img src={swap.receiverImg} alt={swap.receiverAlt} />
                      ) : (
                        <div className="ds-swap-avatar-fallback">
                          <Icon name="person" />
                        </div>
                      )}
                      <span className="ds-swap-role-tag receiver">+{swap.amount.replace("$", "$")}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ds-flow-right">
            <div className="ds-stat-card">
              <span className="ds-label-mono ds-stat-card-label">Transactions Eliminated</span>
              <div className="ds-stat-big-row">
                <span className="ds-display-hero ds-stat-big-value">10</span>
                <span className="ds-body-sm ds-stat-big-note">of 12 routes cut</span>
              </div>
              <p className="ds-body-sm ds-stat-card-desc">
                Direct netting cancels reciprocal micro-charges between members without requiring everyone to
                reimburse each other sequentially.
              </p>
            </div>

            <div className="ds-stat-card">
              <span className="ds-label-mono ds-stat-card-label">Household Friction Score</span>
              <div className="ds-friction-row">
                <span className="ds-currency-display ds-friction-value">0.02</span>
                <span className="ds-friction-badge ds-label-mono">
                  <Icon name="trending_down" />
                  94% Drop
                </span>
              </div>
              <div className="ds-friction-track">
                <div className="ds-friction-fill" style={{ width: "6%" }} />
              </div>
              <span className="ds-friction-note">Measured by cross-app requests &amp; days pending</span>
            </div>

            <button className="ds-broadcast-btn" type="button" onClick={onBroadcast}>
              <Icon name="cell_tower" />
              Broadcast Split Notification to Roomies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BalancesSection({ onSettle, onMarkPaid, onNudge, onViewAudit }) {
  return (
    <section className="ds-section">
      <div className="ds-section-head">
        <div>
          <h2 className="ds-headline-lg ds-section-title">Active Roommate Balances</h2>
          <p className="ds-body-md ds-section-desc">
            Real-time status based on current household expenses, rent, and split rules.
          </p>
        </div>
        <span className="ds-label-mono ds-section-meta">3 Flatmates Tracked</span>
      </div>

      <div className="ds-balances-grid">
        {BALANCES.map((b) => (
          <div className="ds-balance-card" key={b.name}>
            <div className="ds-balance-top">
              <div className="ds-balance-head">
                <div className="ds-balance-person">
                  <img className="ds-balance-avatar" src={b.img} alt={b.alt} />
                  <div>
                    <div className="ds-headline-md ds-balance-name">{b.name}</div>
                    <div className="ds-label-mono ds-balance-handle">{b.handle}</div>
                  </div>
                </div>
                <span className={`ds-status-tag ds-label-mono ${b.status}`}>
                  <span className={`ds-status-dot ${b.status}`} />
                  {b.status === "owes" ? "Owes You" : "Settled"}
                </span>
              </div>

              <div className="ds-balance-detail">
                <div className="ds-balance-detail-block">
                  <span className="ds-label-mono ds-balance-detail-label">
                    {b.status === "owes" ? "Direct to Marcus" : "Direct to Marcus"}
                  </span>
                  <span
                    className="ds-currency-display ds-balance-detail-value"
                    style={{ color: b.status === "owes" ? "var(--primary-fixed-dim)" : "var(--on-surface)" }}
                  >
                    {b.amount}
                  </span>
                </div>
                <div className="ds-balance-detail-block right">
                  <span className="ds-label-mono ds-balance-detail-label">
                    {b.status === "owes" ? b.netLabel : "Status"}
                  </span>
                  {b.status === "owes" ? (
                    <span
                      className="ds-currency-md ds-balance-detail-value"
                      style={{ color: b.netTone === "error" ? "var(--error)" : "var(--secondary)" }}
                    >
                      {b.netValue}
                    </span>
                  ) : (
                    <span className="ds-currency-md ds-balance-detail-value" style={{ color: "var(--primary-fixed-dim)", fontWeight: 700 }}>
                      Square
                    </span>
                  )}
                </div>
              </div>

              {b.status === "owes" ? (
                <p className="ds-body-sm ds-balance-note">{b.note}</p>
              ) : (
                <div className="ds-balance-settled-note">
                  <Icon name="check_circle" />
                  <span className="ds-body-sm">{b.note}</span>
                </div>
              )}
            </div>

            <div className="ds-balance-actions">
              {b.status === "owes" ? (
                <>
                  {b.primaryAction.href ? (
                    <a
                      className="ds-btn-primary-full ds-headline-md"
                      href={b.primaryAction.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name={b.primaryAction.icon} />
                      {b.primaryAction.label}
                    </a>
                  ) : (
                    <button
                      className="ds-btn-primary-full ds-headline-md"
                      type="button"
                      onClick={() => onSettle(b.name, b.amount)}
                    >
                      <Icon name={b.primaryAction.icon} />
                      {b.primaryAction.label}
                    </button>
                  )}
                  <div className="ds-actions-row2">
                    {b.secondaryActions.map((action) => (
                      <button
                        key={action.label}
                        className="ds-btn-secondary-sm"
                        type="button"
                        onClick={() => {
                          if (action.type === "settle") onSettle(b.name, b.amount);
                          else if (action.type === "markPaid") onMarkPaid(b.name);
                          else if (action.type === "nudge") onNudge(b.name);
                        }}
                      >
                        <Icon
                          name={action.icon}
                          style={{ color: action.type === "markPaid" ? "var(--primary-container)" : "var(--secondary)" }}
                        />
                        {action.label}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <button className="ds-btn-secondary-full ds-body-sm" type="button" onClick={() => onViewAudit(b.name)}>
                  <Icon name="receipt_long" />
                  View {b.name.split(" ")[0]}'s Split Audit
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function IntegrationsSection() {
  const [autoSweep, setAutoSweep] = useState(true);

  return (
    <section className="ds-integrations">
      <div>
        <h3 className="ds-headline-md ds-sub-title">Connected Gateways</h3>
        <p className="ds-body-sm ds-sub-desc">Direct API endpoints for zero-fee peer transactions.</p>
      </div>

      <div className="ds-gateway-list">
        {GATEWAYS.map((g) => (
          <div className="ds-gateway-card" key={g.name}>
            <div className="ds-gateway-left">
              <div className="ds-gateway-mark" style={{ backgroundColor: g.bg, color: g.color }}>
                {g.letter}
              </div>
              <div>
                <div className="ds-body-md ds-gateway-name">{g.name}</div>
                <div className="ds-label-mono ds-gateway-detail">{g.detail}</div>
              </div>
            </div>
            <div className="ds-gateway-right">
              <span className="ds-gateway-status ds-label-mono">Active</span>
              <Icon name="lock" className="ds-gateway-lock" />
            </div>
          </div>
        ))}

        <div className="ds-sweep-card">
          <div className="ds-sweep-head">
            <span className="ds-headline-md ds-sweep-title" style={{ fontSize: "14px" }}>
              Automatic Settlement Sweep
            </span>
            <label className="ds-toggle">
              <input type="checkbox" checked={autoSweep} onChange={() => setAutoSweep((v) => !v)} />
              <span className="ds-toggle-track" />
            </label>
          </div>
          <p className="ds-body-sm ds-sweep-desc">
            Automatically trigger payment requests on the 1st of each month via connected gateways.
          </p>
        </div>
      </div>
    </section>
  );
}

function HistorySection() {
  return (
    <section className="ds-history">
      <div className="ds-history-head">
        <div>
          <h3 className="ds-headline-md ds-sub-title">Settlement Audit Trail</h3>
          <p className="ds-body-sm ds-sub-desc">
            Immutable household record of transfers, dates, and gateway references.
          </p>
        </div>
        <div className="ds-history-actions">
          <button className="ds-filter-btn ds-label-mono" type="button">
            <Icon name="filter_list" />
            Filter
          </button>
          <button className="ds-filter-btn ds-label-mono" type="button">
            <Icon name="download" />
            Export CSV
          </button>
        </div>
      </div>

      <div className="ds-table-wrap">
        <div className="ds-table-scroll">
          <table className="ds-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Payer / Recipient</th>
                <th>Method &amp; Ref</th>
                <th className="right">Amount</th>
                <th className="center">Status</th>
                <th className="right">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {HISTORY.map((row) => (
                <tr key={`${row.date}-${row.payer}`}>
                  <td className="ds-td-date">{row.date}</td>
                  <td>
                    <div className="ds-flow-cell">
                      <span className="payer">{row.payer}</span>
                      <Icon name="arrow_forward" />
                      <span className="recipient">{row.recipient}</span>
                    </div>
                  </td>
                  <td>
                    <div className="ds-method-cell">
                      <span className="ds-method-name" style={{ color: row.methodColor }}>
                        {row.method}
                      </span>
                      <span className="ds-method-ref">{row.ref}</span>
                    </div>
                  </td>
                  <td className="right">
                    <span className="ds-td-amount" style={{ color: row.amountColor }}>
                      {row.amount}
                    </span>
                  </td>
                  <td className="center">
                    <span className="ds-status-chip">Settled</span>
                  </td>
                  <td className="right">
                    <button className="ds-receipt-btn" type="button" title="View receipt">
                      <Icon name="receipt" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="ds-table-footer">
          <span>Showing 4 of 38 all-time settlements</span>
          <button className="ds-view-all-link" type="button">
            View All Ledger Cycles →
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="ds-footer">
      <div className="ds-footer-inner">
        <div className="ds-footer-left">
          <span className="ds-label-mono">ROOMIES RENTSPLIT</span>
          <span className="ds-label-mono">•</span>
          <span className="ds-label-mono">Communal Ledger Protocol v2.4</span>
        </div>
        <div className="ds-footer-right">
          <span className="ds-label-mono ds-footer-synced">
            <span className="ds-dot-ping" />
            All Balances Synced
          </span>
          <span className="ds-label-mono ds-footer-copyright">© 2025 Co-Living Networks Inc.</span>
        </div>
      </div>
    </footer>
  );
}

export default function DebtSettle() {
  const [toast, setToast] = useState({ visible: false, message: "" });
  const timeoutRef = useRef(null);

  const triggerToast = (message) => {
    setToast({ visible: true, message });
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setToast((t) => ({ ...t, visible: false }));
    }, 3000);
  };

  const handleSettle = (user, amount) => {
    triggerToast(`Payment link generated for ${user} (${amount}). Copied to clipboard!`);
  };

  const handleMarkPaid = (user) => {
    triggerToast(`Marked ${user} as Settled in Cash. Ledger updated.`);
  };

  const handleNudge = (user) => {
    triggerToast(`Gentle WhatsApp nudge dispatched to ${user}!`);
  };

  const handleViewAudit = (user) => {
    triggerToast(`Viewing settled ledger breakdown for ${user}.`);
  };

  const handleRerun = () => {
    triggerToast("Re-running minimum flow solver... 0 redundant paths found.");
  };

  const handleBroadcast = () => {
    triggerToast("Summary SMS & Push sent to 3 roommates.");
  };

  return (
    <div className="ds-app">
      <Header />
      <main className="ds-main">
        <div className="ds-container">
          <Hero onRerun={handleRerun} />
          <EngineSection onBroadcast={handleBroadcast} />
          <BalancesSection
            onSettle={handleSettle}
            onMarkPaid={handleMarkPaid}
            onNudge={handleNudge}
            onViewAudit={handleViewAudit}
          />
          <div className="ds-bento">
            <IntegrationsSection />
            <HistorySection />
          </div>
        </div>
      </main>

      <div className={`ds-toast${toast.visible ? " visible" : ""}`}>
        <Icon name="check_circle" />
        <span className="ds-toast-msg">{toast.message}</span>
      </div>

      <Footer />
    </div>
  );
}
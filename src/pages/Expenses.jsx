import React, { useMemo, useRef, useState } from "react";
import "./expenses.css";

function Icon({ name, className = "" }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

const NAV_LINKS = [
  { path: "dashboard-overview", label: "Dashboard / Overview" },
  { path: "expenses-ocr", label: "Expenses & OCR", active: true },
  { path: "recurring-bills-rent", label: "Recurring Bills & Rent" },
  { path: "debt-simplification-settle", label: "Debt Simplification & Settle" },
  { path: "flatmates-split-rules", label: "Flatmates & Split Rules" },
];

const ROOMMATES = [
  { key: "All", label: "All Roommates" },
  { key: "Marcus", label: "Marcus (You)" },
  { key: "Samira", label: "Samira Khan" },
  { key: "Leo", label: "Leo Zhang" },
  { key: "Chloe", label: "Chloe Bennett" },
];

const CATEGORY_PILLS = [
  "All Expenses",
  "Rent & Lease",
  "Groceries",
  "Utilities",
  "Supplies",
  "Dining & Takeout",
];

const RECENT_SCANS = [
  {
    icon: "local_grocery_store",
    tone: "accent",
    name: "Trader Joe's #541",
    meta: "14 items detected • Marcus paid",
    amount: "$96.40",
    split: "Split: 4 ways",
    selected: true,
  },
  {
    icon: "eco",
    tone: "muted",
    name: "Whole Foods Market",
    meta: "6 items • Marcus & Chloe share",
    amount: "$64.20",
    split: "Split: 2 ways",
    selected: false,
  },
  {
    icon: "shopping_bag",
    tone: "muted",
    name: "Target Household Supplies",
    meta: "4 items • Paid by Samira",
    amount: "$38.50",
    split: "Split: Equal",
    selected: false,
  },
];

const INITIAL_LINE_ITEMS = [
  {
    id: "item-1",
    name: "Organic Almond Milk (Unsweetened)",
    sku: "SKU #009381 • Pantry",
    price: 4.99,
    checks: { Marcus: true, Samira: true, Leo: false, Chloe: true },
  },
  {
    id: "item-2",
    name: "Cold Brew Coffee Concentrate 32oz",
    sku: "SKU #004492 • Beverage",
    price: 6.49,
    checks: { Marcus: true, Samira: false, Leo: true, Chloe: false },
  },
  {
    id: "item-3",
    name: "San Francisco Style Sourdough Boule",
    sku: "SKU #001229 • Bakery",
    price: 4.29,
    checks: { Marcus: true, Samira: true, Leo: true, Chloe: true },
  },
  {
    id: "item-4",
    name: "Organic Hass Avocados (4ct Bag)",
    sku: "SKU #007718 • Fresh Produce",
    price: 5.0,
    checks: { Marcus: true, Samira: true, Leo: false, Chloe: true },
  },
  {
    id: "item-5",
    name: "Wild Sockeye Salmon Fillet (Frozen)",
    sku: "SKU #003014 • Marcus Sole Claim",
    price: 12.99,
    checks: { Marcus: true, Samira: false, Leo: false, Chloe: false },
  },
];

const ROOMMATE_COLUMNS = [
  { key: "Marcus", initials: "MA", title: "Marcus (You)" },
  { key: "Samira", initials: "SA", title: "Samira Khan" },
  { key: "Leo", initials: "LE", title: "Leo Zhang" },
  { key: "Chloe", initials: "CH", title: "Chloe Bennett" },
];

const LEDGER_ROWS = [
  {
    date: "Apr 24, 2025",
    title: "Trader Joe's (Grocery Restock)",
    sub: "14 line items split via AI itemizer",
    category: "Groceries",
    categoryTone: "",
    payerKey: "Marcus",
    payerInitials: "MV",
    payerName: "Marcus (You)",
    isYou: true,
    split: "Itemized (Custom)",
    yourShare: "$21.43",
    total: "$96.40",
    status: "Settled",
    statusClass: "settled",
  },
  {
    date: "Apr 01, 2025",
    title: "Brooklyn Loft #4B Monthly Rent",
    sub: "Skyline Properties LLC (ACH Wire)",
    category: "Rent & Lease",
    categoryTone: "tone-secondary",
    payerKey: "Samira",
    payerInitials: "SK",
    payerName: "Samira Khan",
    isYou: false,
    split: "Room SqFt Ratio",
    yourShare: "$875.00",
    yourShareNeutral: true,
    total: "$3,500.00",
    status: "Auto-Debited",
    statusClass: "autodebited",
  },
  {
    date: "Apr 15, 2025",
    title: "ConEdison Electric & Gas",
    sub: "Billing cycle: Mar 10 - Apr 10",
    category: "Utilities",
    categoryTone: "",
    payerKey: "Leo",
    payerInitials: "LZ",
    payerName: "Leo Zhang",
    isYou: false,
    split: "Equal 25% (4)",
    yourShare: "$46.88",
    total: "$187.50",
    status: "Pending (2)",
    statusClass: "pending",
  },
  {
    date: "Apr 18, 2025",
    title: "Target Household Restock",
    sub: "Dish soap, paper towels, trash bags",
    category: "Supplies",
    categoryTone: "",
    payerKey: "Chloe",
    payerInitials: "CB",
    payerName: "Chloe Bennett",
    isYou: false,
    split: "Equal 25% (4)",
    yourShare: "$9.62",
    total: "$38.50",
    status: "Settled",
    statusClass: "settled",
  },
  {
    date: "Apr 21, 2025",
    title: "Lucali Pizza Night",
    sub: "Flatmate communal movie dinner",
    category: "Dining & Takeout",
    categoryTone: "",
    payerKey: "Marcus",
    payerInitials: "MV",
    payerName: "Marcus (You)",
    isYou: true,
    split: "Equal 25% (4)",
    yourShare: "$24.87",
    total: "$99.50",
    status: "Pending (1)",
    statusClass: "pending",
  },
];

function Header() {
  return (
    <header className="eo-header">
      <div className="eo-header-inner">
        <div className="eo-header-left">
          <div className="eo-brand">
            <div className="eo-brand-mark">
              <Icon name="toll" />
            </div>
            <div className="eo-brand-cols">
              <span className="eo-headline-md eo-brand-name">ROOMIES</span>
              <span className="eo-label-mono eo-brand-sub">RENTSPLIT</span>
            </div>
          </div>

          <div className="eo-header-divider" />

          <div className="eo-flat-pill">
            <div className="eo-flat-name">
              <Icon name="apartment" />
              <span className="eo-body-md">The Brooklyn Loft (#4B)</span>
            </div>
            <div className="eo-flat-active">
              <span className="eo-dot-pulse" />
              <span className="eo-label-mono">4 Active</span>
            </div>
            <div className="eo-flat-code">
              <span className="eo-label-mono">CODE:</span>
              <span className="eo-label-mono">849-291</span>
            </div>
          </div>
        </div>

        <nav className="eo-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.path} href="#" className={link.active ? "active" : ""} data-path={link.path}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="eo-header-actions">
          <button className="eo-btn-add" type="button">
            <Icon name="add" />
            <span>Add Expense</span>
          </button>
          <button className="eo-btn-icon" type="button">
            <Icon name="notifications" />
            <span className="eo-notif-dot" />
          </button>
          <div className="eo-account">
            <div className="eo-account-avatar">
              <Icon name="person" />
            </div>
            <div className="eo-account-info">
              <span className="eo-body-sm eo-account-name">Marcus Vance</span>
              <span className="eo-label-mono eo-account-role">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function PageHead() {
  return (
    <div className="eo-page-head">
      <div className="eo-page-head-text">
        <div className="eo-badge-row">
          <span className="eo-live-pill eo-label-mono">
            <span className="eo-dot-pulse" />
            NEURAL ENGINE OCR v3.1 ACTIVE
          </span>
          <span className="eo-label-mono eo-badge-dim">•</span>
          <span className="eo-label-mono eo-badge-caps">Loft #4B Fiscal Stream</span>
        </div>
        <h1 className="eo-headline-lg eo-page-title">Expenses &amp; Smart Receipt OCR</h1>
        <p className="eo-body-lg eo-page-sub">
          Upload paper stubs or digital invoices, itemize micro line items with edge machine vision, and
          reconcile the communal ledger seamlessly.
        </p>
      </div>

      <div className="eo-metric-strip">
        <div className="eo-metric-cell">
          <span className="eo-label-mono eo-metric-cell-label">April Ledger Total</span>
          <span className="eo-currency-md eo-metric-cell-value">$4,285.90</span>
        </div>
        <div className="eo-metric-cell">
          <span className="eo-label-mono eo-metric-cell-label secondary">Your Pending Share</span>
          <span className="eo-currency-md eo-metric-cell-value accent">$312.44</span>
        </div>
        <div className="eo-metric-cell">
          <span className="eo-label-mono eo-metric-cell-label">OCR Verified Items</span>
          <span className="eo-currency-md eo-metric-cell-value secondary-value">48 / 48</span>
        </div>
      </div>
    </div>
  );
}

function ActionBar({
  search,
  onSearchChange,
  roommateFilter,
  onRoommateChange,
  menuOpen,
  onToggleMenu,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="eo-action-bar">
      <div className="eo-action-row">
        <div className="eo-search">
          <Icon name="search" />
          <input
            type="text"
            placeholder="Search merchant, item, flatmate note, or SKU..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className="eo-action-controls">
          <div className="eo-dropdown">
            <button className="eo-dropdown-btn" type="button" onClick={onToggleMenu}>
              <Icon name="group" />
              <span>
                Paid By: <strong>{roommateFilter.label}</strong>
              </span>
              <Icon name="expand_more" className="caret" />
            </button>
            {menuOpen && (
              <div className="eo-dropdown-menu">
                {ROOMMATES.map((r) => (
                  <button key={r.key} type="button" onClick={() => onRoommateChange(r)}>
                    {r.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="eo-date-pill">
            <Icon name="calendar_today" />
            <span className="eo-label-mono">Apr 1 - Apr 30, 2025</span>
          </div>

          <button className="eo-btn-secondary" type="button">
            <Icon name="document_scanner" />
            <span>Scan Receipt</span>
          </button>
          <button className="eo-btn-primary" type="button">
            <Icon name="add_circle" />
            <span>New Expense</span>
          </button>
        </div>
      </div>

      <div className="eo-pill-row">
        <span className="eo-label-mono eo-pill-label">Categories:</span>
        {CATEGORY_PILLS.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`eo-pill${activeCategory === cat ? " active" : ""}`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

function IngestionSection({
  dragOver,
  onDropzoneClick,
  onDragOver,
  onDragLeave,
  onDrop,
  fileInputRef,
  onFileSelected,
}) {
  return (
    <div className="eo-section">
      <div className="eo-section-head">
        <div className="eo-section-title-row">
          <Icon name="center_focus_strong" />
          <h2 className="eo-headline-md eo-section-title">Neural Receipt Ingestion &amp; Optical Splitter</h2>
        </div>
        <div className="eo-precision-tag eo-label-mono">
          <span className="eo-precision-dot" />
          <span>99.4% Extraction Precision</span>
        </div>
      </div>

      <div className="eo-bento">
        <div className="eo-bento-left">
          <div
            className={`eo-dropzone${dragOver ? " drag-over" : ""}`}
            onClick={onDropzoneClick}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            <div className="eo-dropzone-icon">
              <Icon name="upload_file" />
            </div>
            <h3 className="eo-headline-md eo-dropzone-title">Drag Receipt or Document</h3>
            <p className="eo-body-sm eo-dropzone-desc">
              AI Vision will detect store metadata, line-by-line inventory, sales taxes, and proposed equal
              splits.
            </p>
            <div className="eo-dropzone-formats eo-label-mono">
              <Icon name="verified" />
              <span>PDF, PNG, JPG, HEIC up to 25MB</span>
            </div>
            <input
              ref={fileInputRef}
              accept="image/*,application/pdf"
              style={{ display: "none" }}
              type="file"
              onChange={onFileSelected}
            />
          </div>

          <div className="eo-scans-shelf">
            <div className="eo-scans-head">
              <span className="eo-label-mono">Recent Ingestion Queue</span>
              <span className="eo-label-mono">3 Processed Today</span>
            </div>
            {RECENT_SCANS.map((scan) => (
              <div className={`eo-scan-card${scan.selected ? " selected" : ""}`} key={scan.name}>
                <div className="eo-scan-left">
                  <div className={`eo-scan-icon ${scan.tone}`}>
                    <Icon name={scan.icon} />
                  </div>
                  <div>
                    <div className="eo-scan-name-row">
                      <span className={`eo-body-md eo-scan-name${scan.selected ? " selected-text" : ""}`}>
                        {scan.name}
                      </span>
                      {scan.selected && <span className="eo-scan-badge">SELECTED</span>}
                    </div>
                    <span className="eo-body-sm eo-scan-meta">{scan.meta}</span>
                  </div>
                </div>
                <div className="eo-scan-right">
                  <span className={`eo-currency-md eo-scan-amount${scan.selected ? " selected-text" : " muted"}`}>
                    {scan.amount}
                  </span>
                  <span className={`eo-label-mono eo-scan-split${scan.selected ? "" : " accent"}`}>
                    {scan.split}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ItemizerPanel />
      </div>
    </div>
  );
}

function ItemizerPanel() {
  const [items, setItems] = useState(INITIAL_LINE_ITEMS);

  const toggleCheck = (itemId, roommateKey) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, checks: { ...item.checks, [roommateKey]: !item.checks[roommateKey] } }
          : item
      )
    );
  };

  const setAll = (state) => {
    setItems((prev) =>
      prev.map((item) => ({
        ...item,
        checks: Object.fromEntries(ROOMMATE_COLUMNS.map((r) => [r.key, state])),
      }))
    );
  };

  const { userTotal, householdTotal } = useMemo(() => {
    let user = 0;
    let grand = 0;
    items.forEach((item) => {
      const checkedCount = ROOMMATE_COLUMNS.filter((r) => item.checks[r.key]).length;
      if (checkedCount > 0) {
        const perPerson = item.price / checkedCount;
        if (item.checks.Marcus) user += perPerson;
        grand += item.price;
      }
    });
    return { userTotal: user, householdTotal: grand - user };
  }, [items]);

  return (
    <div className="eo-bento-right">
      <div className="eo-itemizer">
        <div className="eo-itemizer-head">
          <div>
            <div className="eo-itemizer-meta-row eo-label-mono">
              <span>Live Itemizer Preview</span>
              <span>•</span>
              <span>Trader Joe's - Court St, Brooklyn</span>
            </div>
            <h3 className="eo-headline-md eo-itemizer-title">Assign Line-Item Consumers</h3>
          </div>
          <div className="eo-quick-split">
            <span>Quick split:</span>
            <button className="eo-quick-btn" type="button" onClick={() => setAll(true)}>
              Select All
            </button>
            <button className="eo-quick-btn clear" type="button" onClick={() => setAll(false)}>
              Clear
            </button>
          </div>
        </div>

        <div className="eo-legend-row eo-label-mono">
          <div className="eo-legend-desc">DETECTED LINE ITEM &amp; TAX CODE</div>
          <div className="eo-legend-price">PRICE</div>
          <div className="eo-legend-checks">
            {ROOMMATE_COLUMNS.map((r) => (
              <span key={r.key} title={r.title}>
                {r.initials}
              </span>
            ))}
          </div>
        </div>

        <div className="eo-item-list">
          {items.map((item) => (
            <div className="eo-item-row" key={item.id}>
              <div className="eo-item-desc">
                <span className="eo-body-md eo-item-name">{item.name}</span>
                <span className="eo-label-mono eo-item-sku">{item.sku}</span>
              </div>
              <div className="eo-currency-md eo-item-price">${item.price.toFixed(2)}</div>
              <div className="eo-item-checks">
                {ROOMMATE_COLUMNS.map((r) => (
                  <input
                    key={r.key}
                    type="checkbox"
                    checked={item.checks[r.key]}
                    onChange={() => toggleCheck(item.id, r.key)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="eo-itemizer-footer">
          <div className="eo-live-shares">
            <div className="eo-live-share-block">
              <span className="eo-label-mono">Your Allocation</span>
              <span className="eo-currency-md accent">${userTotal.toFixed(2)}</span>
            </div>
            <div className="eo-live-divider" />
            <div className="eo-live-share-block">
              <span className="eo-label-mono">Flatmate Total</span>
              <span className="eo-currency-md neutral">${householdTotal.toFixed(2)}</span>
            </div>
          </div>
          <button className="eo-apply-btn eo-headline-md" type="button">
            Apply &amp; Push to Ledger
          </button>
        </div>
      </div>
    </div>
  );
}

function LedgerTable({ search, roommateFilter, activeCategory }) {
  const filteredRows = useMemo(() => {
    const query = search.trim().toLowerCase();
    return LEDGER_ROWS.filter((row) => {
      const matchesCategory = activeCategory === "All Expenses" || row.category === activeCategory;
      const matchesPayer = roommateFilter.key === "All" || row.payerKey === roommateFilter.key;
      const haystack = [
        row.date,
        row.title,
        row.sub,
        row.category,
        row.payerName,
        row.split,
        row.yourShare,
        row.total,
        row.status,
      ]
        .join(" ")
        .toLowerCase();
      const matchesSearch = query === "" || haystack.includes(query);
      return matchesCategory && matchesPayer && matchesSearch;
    });
  }, [search, roommateFilter, activeCategory]);

  return (
    <div className="eo-section">
      <div className="eo-ledger-head">
        <div>
          <h2 className="eo-headline-md eo-ledger-heading">Communal Ledger &amp; Live Transactions</h2>
          <p className="eo-body-sm eo-ledger-desc">
            Fully reconciled audit trail for Brooklyn Loft #4B with settlement receipts and auto-debits.
          </p>
        </div>
        <div className="eo-ledger-actions">
          <button className="eo-icon-text-btn" type="button">
            <Icon name="file_download" style={{ color: "var(--secondary)" }} />
            <span>Export CSV</span>
          </button>
          <button className="eo-icon-text-btn" type="button">
            <Icon name="print" />
            <span>Print PDF</span>
          </button>
        </div>
      </div>

      <div className="eo-table-wrap">
        <table className="eo-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description &amp; Merchant</th>
              <th>Category</th>
              <th>Paid By</th>
              <th>Split Algorithm</th>
              <th className="right">Your Share</th>
              <th className="right">Total Amount</th>
              <th className="center">Stub</th>
              <th className="center">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row) => (
              <tr key={row.title}>
                <td className="eo-td-date">{row.date}</td>
                <td>
                  <div className="eo-td-desc">
                    <span className="eo-td-desc-title">{row.title}</span>
                    <span className="eo-td-desc-sub">{row.sub}</span>
                  </div>
                </td>
                <td>
                  <span className={`eo-cat-pill ${row.categoryTone}`}>{row.category}</span>
                </td>
                <td>
                  <div className="eo-td-payer">
                    <div className={`eo-payer-avatar ${row.isYou ? "you" : "other"}`}>{row.payerInitials}</div>
                    <span className={row.isYou ? "eo-payer-name you" : ""}>{row.payerName}</span>
                  </div>
                </td>
                <td className="eo-td-split">{row.split}</td>
                <td className={`right ${row.yourShareNeutral ? "" : ""}`}>
                  <span
                    className="eo-td-share"
                    style={row.yourShareNeutral ? { color: "var(--on-surface)" } : undefined}
                  >
                    {row.yourShare}
                  </span>
                </td>
                <td className="right">
                  <span className="eo-td-total">{row.total}</span>
                </td>
                <td className="center">
                  <button className="eo-stub-btn" type="button" title="View receipt">
                    <Icon name="receipt_long" />
                  </button>
                </td>
                <td className="center">
                  <span className={`eo-status-pill ${row.statusClass}`}>
                    {row.statusClass === "settled" && <span className="eo-dot-pulse" />}
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
            {filteredRows.length === 0 && (
              <tr>
                <td colSpan={9} style={{ textAlign: "center", padding: "2rem", color: "var(--outline)" }}>
                  No transactions match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="eo-pagination">
        <span className="eo-pagination-info">Showing 1-5 of 34 Ledger Entries</span>
        <div className="eo-pagination-controls">
          <button className="eo-page-nav-btn" type="button" disabled>
            <Icon name="chevron_left" />
          </button>
          <span className="eo-page-num active">1</span>
          <button className="eo-page-num" type="button">
            2
          </button>
          <button className="eo-page-num" type="button">
            3
          </button>
          <button className="eo-page-nav-btn" type="button">
            <Icon name="chevron_right" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="eo-footer">
      <div className="eo-footer-inner">
        <div className="eo-footer-left">
          <span className="eo-label-mono">ROOMIES RENTSPLIT</span>
          <span className="eo-label-mono">•</span>
          <span className="eo-label-mono">Communal Ledger Protocol v2.4</span>
        </div>
        <div className="eo-footer-right">
          <span className="eo-label-mono eo-footer-synced">
            <span className="eo-dot-ping" />
            All Balances Synced
          </span>
          <span className="eo-label-mono eo-footer-copyright">© 2025 Co-Living Networks Inc.</span>
        </div>
      </div>
    </footer>
  );
}

export default function ExpensesOCR() {
  const [search, setSearch] = useState("");
  const [roommateFilter, setRoommateFilter] = useState(ROOMMATES[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Expenses");
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleRoommateChange = (roommate) => {
    setRoommateFilter(roommate);
    setMenuOpen(false);
  };

  const handleDropzoneClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelected = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      alert(`Receipt "${file.name}" uploaded to OCR Queue. AI extraction running...`);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      alert(`Receipt "${file.name}" uploaded to OCR Queue. AI extraction running...`);
    }
  };

  return (
    <div className="eo-app" onClick={() => menuOpen && setMenuOpen(false)}>
      <Header />
      <main className="eo-main">
        <div className="eo-container">
          <PageHead />

          <ActionBar
            search={search}
            onSearchChange={setSearch}
            roommateFilter={roommateFilter}
            onRoommateChange={handleRoommateChange}
            menuOpen={menuOpen}
            onToggleMenu={(e) => {
              e.stopPropagation();
              setMenuOpen((v) => !v);
            }}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <IngestionSection
            dragOver={dragOver}
            onDropzoneClick={handleDropzoneClick}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            fileInputRef={fileInputRef}
            onFileSelected={handleFileSelected}
          />

          <LedgerTable search={search} roommateFilter={roommateFilter} activeCategory={activeCategory} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
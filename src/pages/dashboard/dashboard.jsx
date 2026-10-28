import React from "react";
import "./dashboardstyles.css";
import {STATS, LEDGER_ENTRIES, FEED_ITEMS, SETTLEMENTS, SUPPLIES, Icon} from "../../components/postLogin/dashboard/dashboardData"
import Nav from "../../components/postLogin/nav"

function WelcomeRow() {
  return (
    <div className="rd-welcome-row">
      <div className="rd-welcome-text">
        <h1 className="rd-headline-lg rd-welcome-title">Welcome back, Marcus.</h1>
        <p className="rd-body-lg rd-welcome-sub">Your flat has 4 synced members.</p>
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
      <Nav />
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
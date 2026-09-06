import {IconArrow, IconCheckCircle} from "./Icons";

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

          {/* map the value props from the array instead of defining them manually */}
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
              {/* map the expenses from the array instead of defining them manually */}
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

export default Hero;
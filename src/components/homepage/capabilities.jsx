import {IconCamera, IconArrows, IconClock} from "./Icons";

//an array of capabilities
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
            {/*map the capabilities from the array instead of defining them manually*/}
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

export default Capabilities;
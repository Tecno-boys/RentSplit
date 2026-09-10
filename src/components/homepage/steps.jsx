//an array of steps
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
            {/*map the steps from the array instead of defining them manually*/}
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

export default Steps;
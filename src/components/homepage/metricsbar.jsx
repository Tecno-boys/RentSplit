const METRICS = [
  { value: "4.9", suffix: "★", label: "App Store Rating", sub: "Over 3,800+ reviews", green: true },
  { value: "$14M+", label: "Bills Settled", sub: "Without awkward group texts", green: false },
  { value: "45,000+", label: "Happy Roommates", sub: "In 18 metropolitan cities", green: true },
  { value: "0", label: "Fights Caused", sub: "100% peaceful settlements", green: true },
];

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
            {/*map the metrics from the array instead of defining them manually*/}
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

export default MetricsBar;
import {IconShieldCheck} from "./Icons";

function About() {
  return (
    <section className="rs-about" id="about">
      <div className="rs-container">
        <div className="rs-about-card">
          <div className="rs-about-grid">
            <div className="rs-about-left">
              <span className="rs-about-badge">ABOUT US</span>
              <div>
                <span className="rs-about-brand-eyebrow">ROOMIES</span>
                <h3 className="rs-about-brand-title rs-logo-text">
                  RENTSPLIT<span style={{ color: "var(--brand-green)" }}>.</span>
                </h3>
              </div>
              <p className="rs-about-desc">
                Designed from real flatshare friction in New York, London, and San Francisco. No corporate bloat
                — just seamless shared living.
              </p>
              <div className="rs-about-note">
                <IconShieldCheck />
                <span>Automatic mathematical debt simplification built right in.</span>
              </div>
            </div>

            <div className="rs-about-right">
              <p>
                <strong>Roomies RentSplit</strong> was created by former roommates who got tired of calculating
                Wi-Fi shares at 1 AM and waiting weeks for grocery reimbursements.
              </p>
              <p>
                Whether you share a luxury condo or a tight student apartment, our automated algorithms track
                monthly rent, utility bills, and daily grocery runs without anyone having to be the "bad guy"
                landlord collector.
              </p>
              <p className="rs-about-footnote">
                Stop maintaining messy shared spreadsheets or trading twelve different Venmo requests back and
                forth every month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
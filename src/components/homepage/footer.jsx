
//an array of objects for the footer links
const FOOTER_PRODUCT = [
  { href: "#features", label: "Receipt OCR" },
  { href: "#features", label: "Rent Calculator" },
  { href: "#debt-engine", label: "Debt Engine" },
  { href: "#how-it-works", label: "6-Digit Join Code" },
  { href: "#get-started", label: "Web App" },
];

//an array of objects for the footer links
const FOOTER_COMPANY = [
  { href: "#about", label: "About Us" },
  { href: "#testimonials", label: "Customer Stories" },
  { href: "#support", label: "Help Center" },
  { href: "#careers", label: "Careers" },
];

//an array of objects for the footer links
const FOOTER_LEGAL = [
  { href: "#privacy", label: "Privacy Policy" },
  { href: "#terms", label: "Terms of Service" },
  { href: "#security", label: "Bank-Level Security" },
  { href: "#contact", label: "Contact Support" },
];

function Footer() {
  return (
    <footer className="rs-footer">
      <div className="rs-container">
        <div className="rs-footer-grid">
          <div className="rs-footer-brand-col">

            {/*the content card on the left*/}
            <div className="rs-footer-brand-row">
              <div className="rs-footer-mark">R</div>
              <span className="rs-footer-brand-name rs-logo-text">
                ROOMIES RENTSPLIT<span style={{ color: "var(--brand-green)" }}>.</span>
              </span>
            </div>
            <p className="rs-footer-desc">
              The ultimate companion for roommates everywhere. Keep peace, keep friendships, split every dollar
              without the awkwardness.
            </p>
            <div className="rs-footer-tag">Built for shared apartments.</div>

          </div>

          <div>
            {/*the verical lists*/}
            <h4 className="rs-footer-col-title">Product</h4>
            {/*Building the list of footer product links via map instead of individually using the array FOOTER_PRODUCT*/}
            <ul className="rs-footer-list">
              {FOOTER_PRODUCT.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="rs-footer-col-title">Company</h4>
            <ul className="rs-footer-list">
            {/*Building the list of footer company links via map instead of individually using the array FOOTER_COMPANY*/}
              {FOOTER_COMPANY.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="rs-footer-col-title">Legal &amp; Security</h4>
            <ul className="rs-footer-list">
            {/*Building the list of footer legal links via map instead of individually using the array FOOTER_LEGAL*/}
              {FOOTER_LEGAL.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*the bottom section of the footer with copyright and links*/}
        <div className="rs-footer-bottom">
          <div>© 2026 Roomies RentSplit Inc. All rights reserved.</div>
          <div className="rs-footer-bottom-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#support">Support</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
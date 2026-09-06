const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#debt-engine", label: "Debt Engine" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#about", label: "About Us" },
  { href: "#testimonials", label: "Reviews" },
];

function Header() {
  return (
    <header className="rs-header">
      <div className="rs-container rs-header-inner">
        <a className="rs-brand" href="#">

          <div className="rs-brand-mark">R</div>

          <div className="rs-brand-cols">

            <span className="rs-brand-eyebrow">Roomies</span>

            <span className="rs-brand-name rs-logo-text">
              RENTSPLIT<span style={{ color: "var(--brand-green)" }}>.</span>
            </span>

          </div>

        </a>

        <nav className="rs-nav" aria-label="Desktop Navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="rs-header-actions">
          <a className="rs-btn rs-btn-outline" href="#login">
            LOG IN
          </a>
          <a className="rs-btn rs-btn-solid" href="#get-started">
            GET STARTED
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
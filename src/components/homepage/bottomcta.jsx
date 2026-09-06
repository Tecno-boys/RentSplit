//importing the necessary icons
import {IconApple, IconGlobe} from "./Icons";

function BottomCTA() {
  return (
    <section className="rs-bottom-cta" id="get-started">

      <div className="rs-container rs-bottom-cta-inner">
        <h2 className="rs-bottom-cta-title">
          Ditch the awkward texts.
          <br />
          <span className="rs-text-gradient">Start splitting smart today.</span>
        </h2>
        <p className="rs-bottom-cta-sub">Free for up to 6 roommates per apartment. Available on iOS &amp; Web.</p>

        <div className="rs-bottom-cta-actions">
          <a className="rs-cta-big" href="#app-store">
            GET STARTED FREE
          </a>
        </div>

        <div className="rs-app-badges">
          <a className="rs-app-badge" href="#app-store">
            <IconApple />
            App Store
          </a>
          <a className="rs-app-badge" href="#web-portal">
            <IconGlobe />
            Web Portal
          </a>
        </div>
      </div>
      
    </section>
  );
}

export default BottomCTA;
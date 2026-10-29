import { navigation } from "../../data/siteContent.js";
import ArrowIcon from "../common/ArrowIcon.jsx";
import Brand from "../common/Brand.jsx";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand footer />
            <p>Connecting people, creating opportunities, serving communities.</p>
          </div>
          <div className="footer-links">
            <span>Explore</span>
            {navigation.map(({ id, label }) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </div>
          <div className="footer-signoff">
            <span>Our guiding values</span>
            <strong>Unity · Faith · Sacrifice</strong>
            <a className="back-top" href="#home">
              Back to top <ArrowIcon diagonal />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Rastriya Janaseva</span>
          <span>Made for people, with purpose.</span>
        </div>
      </div>
    </footer>
  );
}

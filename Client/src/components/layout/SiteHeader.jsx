import { useState } from "react";
import {
  navigation,
  navigationSectionIds,
} from "../../data/siteContent.js";
import useActiveSection from "../../hooks/useActiveSection.js";
import ArrowIcon from "../common/ArrowIcon.jsx";
import Brand from "../common/Brand.jsx";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(navigationSectionIds);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav
          className={`primary-nav${menuOpen ? " primary-nav--open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navigation.map(({ id, label, cta }) => (
            <a
              key={id}
              href={`#${id}`}
              className={[
                cta && "nav-join",
                activeSection === id && "is-active",
              ]
                .filter(Boolean)
                .join(" ")}
              aria-current={activeSection === id ? "location" : undefined}
              onClick={closeMenu}
            >
              {label}
              {cta && <ArrowIcon />}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

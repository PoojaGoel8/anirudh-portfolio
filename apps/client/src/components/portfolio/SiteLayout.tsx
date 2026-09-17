import { ArrowUpRight, Download, FileCode2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const navItems = [
  { label: "Work", to: "/work" },
  { label: "Experience", to: "/experience" },
  { label: "Leadership", to: "/leadership" },
  { label: "Recommendations", to: "/recommendations" },
  { label: "About", to: "/about" },
];

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand" aria-label="Anirudh Dalmia home">
            <span className="brand-mark">AD</span>
            <span className="brand-copy">
              <strong>Anirudh Dalmia</strong>
              <small>Transformation · Risk · AI</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }: { isActive: boolean }) => (isActive ? "nav-link active" : "nav-link")}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <a
              className="icon-link"
              href="https://www.linkedin.com/in/anirudh-dalmia/"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Anirudh Dalmia’s LinkedIn profile"
            >
              <span className="linkedin-glyph" aria-hidden="true">in</span>
            </a>
            <a className="header-cta" href="mailto:anirudhdalmia@hotmail.com">
              Start a conversation <ArrowUpRight size={15} />
            </a>
            <button
              className="menu-button"
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }: { isActive: boolean }) => (isActive ? "mobile-link active" : "mobile-link")}
              >
                {item.label}
                <ArrowUpRight size={18} />
              </NavLink>
            ))}
            <a className="mobile-link" href="/assets/documents/anirudh-dalmia-resume.pdf" download>
              Download résumé <Download size={18} />
            </a>
            <a className="mobile-link" href="/assets/documents/anirudh-dalmia-portfolio.html" download>
              Download HTML portfolio <FileCode2 size={18} />
            </a>
          </nav>
        ) : null}
      </header>

      <main id="main-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-primary">
          <p className="eyebrow light">Build meaningful change</p>
          <h2>Complexity becomes progress when people can see the path.</h2>
          <div className="footer-actions">
            <a className="button button-light" href="mailto:anirudhdalmia@hotmail.com">
              Email Anirudh <ArrowUpRight size={16} />
            </a>
            <a
              className="button button-ghost-light"
              href="https://www.linkedin.com/in/anirudh-dalmia/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <span className="linkedin-glyph small" aria-hidden="true">in</span>
            </a>
            <a
              className="button button-ghost-light"
              href="/assets/documents/anirudh-dalmia-portfolio.html"
              download
            >
              Download HTML <FileCode2 size={16} />
            </a>
          </div>
        </div>
        <div className="footer-meta">
          <span>Singapore</span>
          <span>AI transformation · Financial crime · Programme leadership</span>
          <span>© 2026 Anirudh Dalmia</span>
        </div>
      </footer>
    </div>
  );
}

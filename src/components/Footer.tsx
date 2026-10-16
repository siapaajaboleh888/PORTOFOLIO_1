import './Footer.css';

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__divider" aria-hidden="true" />
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <button className="footer__logo" onClick={scrollToTop} aria-label="Back to top">
            <span style={{ color: 'var(--accent-blue)' }}>&lt;</span>
            <span className="gradient-text">Emha Anam</span>
            <span style={{ color: 'var(--accent-blue)' }}>/&gt;</span>
          </button>
          <p className="footer__tagline">
            AI-Assisted Web Developer · Madura, Indonesia
          </p>
          <p className="footer__copy">
            © {new Date().getFullYear()} Moh. Syaiful Anam. Built with React + Vite.
          </p>
        </div>

        {/* Quick links */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <h4 className="footer__nav-title">Navigation</h4>
          {['home', 'projects', 'services', 'process', 'about', 'contact'].map(id => (
            <button
              key={id}
              className="footer__nav-link"
              onClick={() => scrollTo(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>

        {/* Back to top */}
        <div className="footer__top">
          <button
            className="footer__back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
          <span>Back to top</span>
        </div>
      </div>
    </footer>
  );
}

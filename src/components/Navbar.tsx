import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'My Process' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Update active section based on scroll position
      const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id));
      const current = sections
        .filter(Boolean)
        .findLast((el) => {
          const rect = el!.getBoundingClientRect();
          return rect.top <= 100;
        });
      if (current?.id) setActive(current.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__inner">
        {/* Logo */}
        <button
          className="navbar__logo"
          onClick={() => scrollTo('home')}
          aria-label="Go to home"
        >
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name">Emha Anam</span>
          <span className="navbar__logo-bracket">/&gt;</span>
        </button>

        {/* Desktop Nav */}
        <div className="navbar__links" role="list">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              role="listitem"
              className={`navbar__link ${active === id ? 'navbar__link--active' : ''}`}
              onClick={() => scrollTo(id)}
              aria-current={active === id ? 'page' : undefined}
            >
              {label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          className="btn btn-primary navbar__cta hide-mobile"
          onClick={() => scrollTo('contact')}
        >
          Hire Me
        </button>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="navbar__mobile" aria-hidden={!menuOpen} role="dialog">
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            className={`navbar__mobile-link ${active === id ? 'navbar__mobile-link--active' : ''}`}
            onClick={() => scrollTo(id)}
            tabIndex={menuOpen ? 0 : -1}
          >
            {label}
          </button>
        ))}
        <button
          className="btn btn-primary"
          onClick={() => scrollTo('contact')}
          tabIndex={menuOpen ? 0 : -1}
          style={{ margin: '1rem 1.5rem 0' }}
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
}

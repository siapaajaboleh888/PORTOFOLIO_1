import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'projects', label: t.nav.projects },
    { id: 'services', label: t.nav.services },
    { id: 'process', label: t.nav.process },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const sectionIds = ['home', 'projects', 'services', 'process', 'about', 'contact'];

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Update active section based on scroll position
      const sections = sectionIds.map((id) => document.getElementById(id));
      const current = sections
        .filter((el): el is HTMLElement => el !== null)
        .findLast((el) => {
          const rect = el.getBoundingClientRect();
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
          {navItems.map(({ id, label }) => (
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

        {/* Language Switcher & CTA */}
        <div className="navbar__actions">
          <div className="navbar__lang-switch" role="group" aria-label="Language selector">
            <button
              type="button"
              className={`navbar__lang-btn ${lang === 'en' ? 'navbar__lang-btn--active' : ''}`}
              onClick={() => setLang('en')}
              title="English"
            >
              EN
            </button>
            <span className="navbar__lang-divider">/</span>
            <button
              type="button"
              className={`navbar__lang-btn ${lang === 'id' ? 'navbar__lang-btn--active' : ''}`}
              onClick={() => setLang('id')}
              title="Bahasa Indonesia"
            >
              ID
            </button>
          </div>

          <button
            className="btn btn-primary navbar__cta hide-mobile"
            onClick={() => scrollTo('contact')}
          >
            {t.nav.hireMe}
          </button>
        </div>

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
        {navItems.map(({ id, label }) => (
          <button
            key={id}
            className={`navbar__mobile-link ${active === id ? 'navbar__mobile-link--active' : ''}`}
            onClick={() => scrollTo(id)}
            tabIndex={menuOpen ? 0 : -1}
          >
            {label}
          </button>
        ))}

        <div className="navbar__mobile-actions">
          <div className="navbar__lang-switch navbar__lang-switch--mobile">
            <button
              type="button"
              className={`navbar__lang-btn ${lang === 'en' ? 'navbar__lang-btn--active' : ''}`}
              onClick={() => setLang('en')}
            >
              English (EN)
            </button>
            <button
              type="button"
              className={`navbar__lang-btn ${lang === 'id' ? 'navbar__lang-btn--active' : ''}`}
              onClick={() => setLang('id')}
            >
              Bahasa Indonesia (ID)
            </button>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => scrollTo('contact')}
            tabIndex={menuOpen ? 0 : -1}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            {t.nav.hireMe}
          </button>
        </div>
      </div>
    </nav>
  );
}

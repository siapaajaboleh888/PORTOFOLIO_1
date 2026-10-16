import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';
import { HeroCanvas } from './HeroCanvas';
import { HeroVisual } from './HeroVisual';
import { PROFILE } from '../data/siteData';
import './Hero.css';

export function Hero() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero grid-bg" aria-label="Introduction">
      {/* Background orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      {/* Particle canvas */}
      <HeroCanvas />

      <div className="container hero__container" ref={ref}>
        <div className={`hero__content ${inView ? 'hero__content--visible' : ''}`}>
          {/* Status badge */}
          <div className="hero__badge" aria-label="Availability status">
            <span className="status-dot active" />
            <span>{t.hero.statusBadge}</span>
            <span className="hero__badge-location">{t.hero.location}</span>
          </div>

          {/* Main heading */}
          <h1 className="hero__name">
            <span className="hero__name-greeting">{t.hero.greeting}</span>
            <br />
            <span className="gradient-text">{PROFILE.name}</span>
          </h1>

          {/* Sub heading */}
          <p className="hero__headline">
            {t.hero.headline}
            <span className="hero__divider"> · </span>
            {t.hero.subheadline}
          </p>

          {/* Description */}
          <p className="hero__tagline">{t.hero.tagline}</p>

          {/* Tech chips */}
          <div className="hero__chips" aria-label="Key skills">
            {t.hero.chips.map(chip => (
              <span key={chip} className="hero__chip tag tag-blue">{chip}</span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero__ctas">
            <button
              id="hero-view-work-btn"
              className="btn btn-primary"
              onClick={() => scrollTo('projects')}
            >
              {t.hero.ctaWork}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
            <button
              id="hero-contact-btn"
              className="btn btn-outline"
              onClick={() => scrollTo('contact')}
            >
              {t.hero.ctaContact}
            </button>
          </div>

          {/* Social proof / quick stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">6+</span>
              <span className="hero__stat-label">{t.hero.statProjects}</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-number">AI+</span>
              <span className="hero__stat-label">{t.hero.statWorkflow}</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-number">100%</span>
              <span className="hero__stat-label">{t.hero.statRemote}</span>
            </div>
          </div>
        </div>

        {/* Right side visual code terminal & floating badges */}
        <HeroVisual />

        {/* Scroll indicator */}
        <div className="hero__scroll-hint" aria-label="Scroll down">
          <span>{t.hero.scroll}</span>
          <div className="hero__scroll-line" />
        </div>
      </div>
    </section>
  );
}

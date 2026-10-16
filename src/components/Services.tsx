import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES } from '../data/siteData';
import './Services.css';

export function Services() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section services" aria-labelledby="services-heading">
      {/* Background decoration */}
      <div className="services__bg-orb" aria-hidden="true" />

      <div className="container">
        <div className={`section-header ${inView ? 'section-header--visible' : ''}`} ref={ref}>
          <div className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            {t.services.label}
          </div>
          <h2 className="section-title" id="services-heading">{t.services.title}</h2>
          <p className="section-subtitle">
            {t.services.subtitle}
          </p>
          <div className="divider" />
        </div>

        <div className="services__grid" role="list">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="services__cta-banner">
          <div className="services__cta-content">
            <h3>{t.services.ctaTitle}</h3>
            <p>{t.services.ctaDesc}</p>
          </div>
          <button
            id="services-contact-btn"
            className="btn btn-primary"
            onClick={() => scrollTo('contact')}
          >
            {t.services.ctaBtn}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <article
      ref={ref}
      className={`service-card card ${inView ? 'service-card--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
      role="listitem"
    >
      <div className="service-card__icon" aria-hidden="true">{service.icon}</div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">{service.description}</p>

      <div className="service-card__deliverables">
        <span className="service-card__deliverables-label">{t.services.deliverablesLabel}</span>
        <ul className="service-card__deliverables-list">
          {service.deliverables.map((d, i) => (
            <li key={i}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ color: 'var(--accent-blue)' }}>
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {d}
            </li>
          ))}
        </ul>
      </div>

      {service.note && (
        <p className="service-card__note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
          </svg>
          {service.note}
        </p>
      )}
    </article>
  );
}

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';
import { PROFILE } from '../data/siteData';
import './Contact.css';

export function Contact() {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const isId = lang === 'id';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (PROFILE.email) {
      navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const socials = [
    {
      id: 'github',
      label: 'GitHub',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
      href: PROFILE.github,
      handle: '@siapaajaboleh888',
      available: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: PROFILE.linkedin,
      handle: 'siapaajaboleh888',
      available: true,
    },
    {
      id: 'upwork',
      label: 'Upwork',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
        </svg>
      ),
      href: PROFILE.upwork,
      handle: 'Open for contracts',
      available: true,
    },
    {
      id: 'fiverr',
      label: 'Fiverr',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-1.338-4.758c0-3.362.287-4.752 3.334-4.752v-1.78c-2.304.001-4.013.473-4.932 2.214V4.298H17.77v11.25h2.297c-.401-1.96-.401-4.506-.401-4.718zM13.508 5.13c-1.525 0-2.51.626-3.083 1.577V4.3H8.132v11.25h2.293V9.282c0-1.845.87-2.844 2.406-2.844.902 0 1.472.418 1.777 1.05.232.478.244 1.097.244 1.603v6.15h2.308V9.022c.001-2.415-.921-3.892-3.652-3.892zM3.33 7.5c.827 0 1.485.27 1.919.832.438.567.61 1.34.61 2.12 0 .792-.169 1.545-.604 2.08-.435.536-1.063.805-1.918.805-.844 0-1.468-.27-1.906-.805-.433-.535-.599-1.288-.599-2.08 0-.78.17-1.553.603-2.12.432-.563 1.062-.832 1.895-.832zm0-1.945C1.547 5.555 0 7.24 0 10.452c0 3.21 1.547 4.894 3.33 4.894 1.032 0 1.833-.39 2.42-1.126V15.3h2.15V4.298H5.75v.957C5.162 4.543 4.362 5.555 3.33 5.555z" />
        </svg>
      ),
      href: PROFILE.fiverr,
      handle: 'Gig packages ready',
      available: true,
    },
  ];

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <div className="contact__bg" aria-hidden="true">
        <div className="contact__bg-orb contact__bg-orb--1" />
        <div className="contact__bg-orb contact__bg-orb--2" />
      </div>

      <div className="container">
        <div className={`section-header ${inView ? 'section-header--visible' : ''}`} ref={ref}>
          <div className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
            {t.contact.label}
          </div>
          <h2 className="section-title" id="contact-heading">{t.contact.title}</h2>
          <p className="section-subtitle">
            {t.contact.subtitle}
          </p>
          <div className="divider" />
        </div>

        <div className="contact__layout">
          {/* Left: message card */}
          <div className="contact__message-card card">
            <div className="contact__message-icon" aria-hidden="true">✉️</div>
            <h3>{t.contact.formTitle}</h3>
            <p>{t.contact.hoursDesc}</p>

            {PROFILE.email ? (
              <div className="contact__email-wrapper">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="btn btn-primary contact__email-btn"
                  id="contact-email-btn"
                  title={isId ? 'Kirim email langsung' : 'Send an email'}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>{PROFILE.email}</span>
                </a>

                <button
                  type="button"
                  className="btn btn-outline contact__copy-btn"
                  onClick={handleCopyEmail}
                  aria-label={isId ? 'Salin alamat email' : 'Copy email address'}
                  title={isId ? 'Salin email ke clipboard' : 'Copy email to clipboard'}
                >
                  {copied ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span style={{ color: '#22c55e' }}>{isId ? 'Tersalin!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                      <span>{isId ? 'Salin' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>
            ) : null}

            <div className="contact__quick-info">
              <div className="contact__quick-item">
                <span>⏱</span>
                <span>{isId ? 'Waktu respon: 1–2 hari kerja' : 'Response time: 1–2 business days'}</span>
              </div>
              <div className="contact__quick-item">
                <span>🌏</span>
                <span>{isId ? 'Terbuka untuk klien lokal & global' : 'Open to international & local clients'}</span>
              </div>
              <div className="contact__quick-item">
                <span>💬</span>
                <span>{isId ? 'Bahasa Indonesia & English' : 'English & Indonesian'}</span>
              </div>
            </div>
          </div>

          {/* Right: social links */}
          <div className="contact__socials">
            <h3 className="contact__socials-title">{isId ? 'Temukan Saya di' : 'Find me on'}</h3>
            <div className="contact__social-cards">
              {socials.map(social => (
                <SocialCard key={social.id} social={social} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SocialItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string | null;
  handle: string;
  available: boolean;
}

function SocialCard({ social }: { social: SocialItem }) {
  if (!social.available || !social.href) {
    return (
      <div className="social-card social-card--disabled" aria-label={`${social.label} — not yet configured`}>
        <div className="social-card__icon">{social.icon}</div>
        <div className="social-card__info">
          <span className="social-card__label">{social.label}</span>
          <span className="social-card__handle">{social.handle}</span>
        </div>
        <span className="social-card__badge">Soon</span>
      </div>
    );
  }

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-card"
      id={`contact-${social.id}-link`}
      aria-label={`Visit my ${social.label} profile`}
    >
      <div className="social-card__icon">{social.icon}</div>
      <div className="social-card__info">
        <span className="social-card__label">{social.label}</span>
        <span className="social-card__handle">{social.handle}</span>
      </div>
      <svg className="social-card__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M7 17L17 7M17 7H7M17 7V17" />
      </svg>
    </a>
  );
}

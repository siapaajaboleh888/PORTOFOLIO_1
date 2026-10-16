import { useLanguage } from '../context/LanguageContext';
import './HeroVisual.css';

export function HeroVisual() {
  const { t } = useLanguage();

  return (
    <div className="hero-visual" aria-hidden="true">
      {/* Glow backdrop */}
      <div className="hero-visual__glow" />

      {/* Floating Badge 1 - Top Right */}
      <div className="hero-visual__badge hero-visual__badge--top">
        <div className="hero-visual__badge-icon hero-visual__badge-icon--lightning">⚡</div>
        <div className="hero-visual__badge-text">
          <span className="hero-visual__badge-title">{t.hero.visualSpeedBadgeTitle}</span>
          <span className="hero-visual__badge-subtitle">{t.hero.visualSpeedBadgeSub}</span>
        </div>
      </div>

      {/* Main Glass Code Terminal */}
      <div className="hero-visual__card">
        {/* Terminal Header */}
        <div className="hero-visual__header">
          <div className="hero-visual__dots">
            <span className="hero-visual__dot hero-visual__dot--red" />
            <span className="hero-visual__dot hero-visual__dot--yellow" />
            <span className="hero-visual__dot hero-visual__dot--green" />
          </div>
          <div className="hero-visual__tab">
            <span className="hero-visual__tab-lang">TS</span>
            <span className="hero-visual__tab-name">EmhaAnam.config.ts</span>
          </div>
          <div className="hero-visual__status">
            <span className="status-dot active" />
            <span className="hero-visual__status-text">Active</span>
          </div>
        </div>

        {/* Code Content */}
        <div className="hero-visual__code">
          <div className="hero-visual__line">
            <span className="line-num">01</span>
            <span className="syn-keyword">const</span>{' '}
            <span className="syn-var">engineer</span>:{' '}
            <span className="syn-type">DeveloperProfile</span> = &#123;
          </div>
          <div className="hero-visual__line">
            <span className="line-num">02</span>
            <span className="syn-indent" />
            <span className="syn-prop">name</span>:{' '}
            <span className="syn-str">"Moh. Syaiful Anam"</span>,
          </div>
          <div className="hero-visual__line">
            <span className="line-num">03</span>
            <span className="syn-indent" />
            <span className="syn-prop">alias</span>:{' '}
            <span className="syn-str">"Emha Anam"</span>,
          </div>
          <div className="hero-visual__line">
            <span className="line-num">04</span>
            <span className="syn-indent" />
            <span className="syn-prop">role</span>:{' '}
            <span className="syn-str">"AI-Assisted Web Developer"</span>,
          </div>
          <div className="hero-visual__line">
            <span className="line-num">05</span>
            <span className="syn-indent" />
            <span className="syn-prop">stack</span>: [
            <span className="syn-str">"React"</span>,{' '}
            <span className="syn-str">"TypeScript"</span>,{' '}
            <span className="syn-str">"Node"</span>
            ],
          </div>
          <div className="hero-visual__line">
            <span className="line-num">06</span>
            <span className="syn-indent" />
            <span className="syn-prop">testing</span>: [
            <span className="syn-str">"QA Automation"</span>,{' '}
            <span className="syn-str">"E2E"</span>
            ],
          </div>
          <div className="hero-visual__line">
            <span className="line-num">07</span>
            <span className="syn-indent" />
            <span className="syn-prop">aiPowered</span>:{' '}
            <span className="syn-bool">true</span>,
          </div>
          <div className="hero-visual__line">
            <span className="line-num">08</span>
            <span className="syn-indent" />
            <span className="syn-prop">status</span>:{' '}
            <span className="syn-str">"Ready for Projects 🟢"</span>,
          </div>
          <div className="hero-visual__line">
            <span className="line-num">09</span>
            &#125;;
          </div>
        </div>

        {/* Live Terminal Test Runner Bar */}
        <div className="hero-visual__footer">
          <div className="hero-visual__terminal-item">
            <span className="hero-visual__check">✓</span>
            <span>{t.hero.visualTestsPassed}</span>
          </div>
          <div className="hero-visual__terminal-badge">
            <span>{t.hero.visualQAVerified}</span>
          </div>
        </div>
      </div>

      {/* Floating Badge 2 - Bottom Left */}
      <div className="hero-visual__badge hero-visual__badge--bottom">
        <div className="hero-visual__badge-icon hero-visual__badge-icon--shield">🛡️</div>
        <div className="hero-visual__badge-text">
          <span className="hero-visual__badge-title">{t.hero.visualQABadgeTitle}</span>
          <span className="hero-visual__badge-subtitle">{t.hero.visualQABadgeSub}</span>
        </div>
      </div>
    </div>
  );
}

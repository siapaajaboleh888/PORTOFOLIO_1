import { useInView } from 'react-intersection-observer';
import { PROFILE, SKILLS } from '../data/siteData';
import './About.css';

export function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="about__bg-orb" aria-hidden="true" />
      <div className="container">
        <div className={`section-header ${inView ? 'section-header--visible' : ''}`} ref={ref}>
          <div className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
            About
          </div>
          <h2 className="section-title" id="about-heading">Behind the Work</h2>
          <div className="divider" />
        </div>

        <div className="about__layout">
          {/* Profile */}
          <div className="about__profile">
            <AboutAvatar />

            <div className="about__info-cards">
              <div className="about__info-card">
                <span className="about__info-label">📍 Location</span>
                <span className="about__info-value">{PROFILE.location}</span>
              </div>
              <div className="about__info-card">
                <span className="about__info-label">🎓 Education</span>
                <span className="about__info-value">{PROFILE.institution}</span>
              </div>
              <div className="about__info-card">
                <span className="about__info-label">🌐 Languages</span>
                <span className="about__info-value">Indonesian (Native) · English (Working)</span>
              </div>
              <div className="about__info-card">
                <span className="about__info-label">💼 Availability</span>
                <span className="about__info-value" style={{ color: '#22c55e' }}>
                  Open to remote freelance
                </span>
              </div>
            </div>
          </div>

          {/* Bio + Skills */}
          <div className="about__content">
            <div className="about__bio">
              {PROFILE.bio.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="about__skills">
              <h3 className="about__skills-title">Technical Skills</h3>
              <p className="about__skills-note">
                Skills listed below are based on verified project usage or active learning.
                No percentage ratings — those tend to be misleading.
              </p>
              <div className="about__skill-groups">
                {SKILLS.map(group => (
                  <SkillGroup key={group.category} group={group} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutAvatar() {
  return (
    <div className="about__avatar-wrapper" aria-label="Profile illustration">
      <div className="about__avatar" aria-hidden="true">
        <div className="about__avatar-inner">
          {/* Stylized code/terminal illustration */}
          <div className="about__avatar-terminal">
            <div className="about__terminal-bar">
              <span className="about__terminal-dot red" />
              <span className="about__terminal-dot yellow" />
              <span className="about__terminal-dot green" />
              <span className="about__terminal-title">syaiful.sh</span>
            </div>
            <div className="about__terminal-body">
              <p><span className="about__term-green">const</span> <span className="about__term-blue">dev</span> = {'{'}</p>
              <p>&nbsp;&nbsp;name: <span className="about__term-cyan">"Syaiful"</span>,</p>
              <p>&nbsp;&nbsp;role: <span className="about__term-cyan">"AI-Dev"</span>,</p>
              <p>&nbsp;&nbsp;location: <span className="about__term-cyan">"Madura 🇮🇩"</span>,</p>
              <p>&nbsp;&nbsp;open: <span className="about__term-violet">true</span>,</p>
              <p>{'}'}</p>
              <p>&nbsp;</p>
              <p><span className="about__term-muted">// Ready for new projects</span></p>
              <p className="about__term-cursor">_</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillGroup({ group }: { group: typeof SKILLS[0] }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`about__skill-group ${inView ? 'about__skill-group--visible' : ''}`}
    >
      <div className="about__skill-group-header">
        <h4 className="about__skill-group-title">{group.category}</h4>
        <span className="about__skill-group-note">{group.note}</span>
      </div>
      <div className="about__skill-tags">
        {group.items.map(item => (
          <span key={item} className="tag tag-blue">{item}</span>
        ))}
      </div>
    </div>
  );
}

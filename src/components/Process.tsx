import { useInView } from 'react-intersection-observer';
import { WORKFLOW_STEPS } from '../data/siteData';
import './Process.css';

export function Process() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="process" className="section process" aria-labelledby="process-heading">
      <div className="container">
        <div className={`section-header ${inView ? 'section-header--visible' : ''}`} ref={ref}>
          <div className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            My Process
          </div>
          <h2 className="section-title" id="process-heading">How I Work</h2>
          <p className="section-subtitle">
            A structured, repeatable workflow — so you always know what's happening, 
            what's next, and what to expect from the collaboration.
          </p>
          <div className="divider" />
        </div>

        <div className="process__grid" role="list">
          {WORKFLOW_STEPS.map((step, i) => (
            <ProcessStep key={step.step} step={step} index={i} />
          ))}
        </div>

        {/* AI note */}
        <div className="process__ai-note">
          <div className="process__ai-note-icon" aria-hidden="true">🤖</div>
          <div className="process__ai-note-content">
            <strong>About AI in my workflow:</strong>
            <p>
              I use AI tools to accelerate development — from generating UI scaffolds to assisting
              with test case documentation. However, all decisions, validation, code review,
              and final delivery are my responsibility. AI is a tool, not a replacement for judgment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: typeof WORKFLOW_STEPS[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`process-step ${inView ? 'process-step--visible' : ''} ${isEven ? '' : 'process-step--right'}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      role="listitem"
    >
      <div className="process-step__connector" aria-hidden="true">
        <div className="process-step__dot" />
        {index < WORKFLOW_STEPS.length - 1 && <div className="process-step__line" />}
      </div>
      <div className="process-step__card card">
        <div className="process-step__header">
          <span className="process-step__num" aria-label={`Step ${step.step}`}>{step.step}</span>
          <span className="process-step__icon" aria-hidden="true">{step.icon}</span>
        </div>
        <h3 className="process-step__title">{step.title}</h3>
        <p className="process-step__desc">{step.description}</p>
      </div>
    </div>
  );
}

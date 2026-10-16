import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { Project } from '../data/projects';
import './ProjectModal.css';

interface Props {
  project: Project;
  onClose: () => void;
}

const STATUS_COLORS: Record<string, string> = {
  completed: '#22c55e',
  prototype: '#f59e0b',
  academic: '#06b6d4',
  experiment: '#8b5cf6',
};

export function ProjectModal({ project, onClose }: Props) {
  const { lang } = useLanguage();

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const isId = lang === 'id';

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${project.id}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal">
        {/* Header */}
        <div className="modal__header" style={{ background: project.imageColor }}>
          <div className="modal__header-inner">
            <div className="modal__header-meta">
              <span
                className="modal__status"
                style={{ color: STATUS_COLORS[project.status] }}
              >
                ● {isId && project.status === 'completed' ? 'Selesai' :
                   isId && project.status === 'prototype' ? 'Prototipe' :
                   isId && project.status === 'academic' ? 'Akademik' :
                   project.statusLabel}
              </span>
              <span className="modal__category">{project.category}</span>
            </div>
            <h2 className="modal__title" id={`modal-title-${project.id}`}>
              {project.title}
            </h2>
            <p className="modal__tagline">{project.tagline}</p>
          </div>
          <button
            className="modal__close"
            onClick={onClose}
            aria-label="Close project details"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="modal__body">
          {/* Overview */}
          <section className="modal__section">
            <h3 className="modal__section-title">
              <span>01</span> {isId ? 'Ringkasan Proyek' : 'Project Overview'}
            </h3>
            <p>{project.solution}</p>
          </section>

          {/* Problem */}
          <section className="modal__section">
            <h3 className="modal__section-title">
              <span>02</span> {isId ? 'Masalah yang Dihadapi' : 'Problem Statement'}
            </h3>
            <p>{project.problem}</p>
          </section>

          {/* Features */}
          <section className="modal__section">
            <h3 className="modal__section-title">
              <span>03</span> {isId ? 'Fitur Utama' : 'Key Features'}
            </h3>
            <ul className="modal__list">
              {project.features.map((f, i) => (
                <li key={i} className="modal__list-item">
                  <span className="modal__list-bullet" aria-hidden="true">→</span>
                  {f}
                </li>
              ))}
            </ul>
          </section>

          {/* Tech Stack */}
          <section className="modal__section">
            <h3 className="modal__section-title">
              <span>04</span> {isId ? 'Teknologi yang Digunakan' : 'Technology Stack'}
            </h3>
            <div className="modal__tech-groups">
              {project.techCategories.map(cat => (
                <div key={cat.label} className="modal__tech-group">
                  <span className="modal__tech-label">{cat.label}</span>
                  <div className="modal__tech-tags">
                    {cat.items.map(item => (
                      <span key={item} className="tag tag-blue">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="modal__section">
            <h3 className="modal__section-title">
              <span>05</span> {isId ? 'Proses Pengerjaan' : 'Development Process'}
            </h3>
            <ol className="modal__steps">
              {project.process.map((step, i) => (
                <li key={i} className="modal__step">
                  <span className="modal__step-num">{String(i + 1).padStart(2, '0')}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Testing */}
          <section className="modal__section">
            <h3 className="modal__section-title">
              <span>06</span> {isId ? 'Pengujian & Validasi Mutu' : 'Testing & Validation'}
            </h3>
            <p>{project.testing}</p>
          </section>

          {/* Limitations */}
          <section className="modal__section">
            <h3 className="modal__section-title">
              <span>07</span> {isId ? 'Catatan & Pengembangan Lanjutan' : 'Limitations & Future Improvements'}
            </h3>
            <p>{project.limitations}</p>
          </section>

          {/* Role */}
          <section className="modal__section">
            <h3 className="modal__section-title">
              <span>08</span> {isId ? 'Peran & Kontribusi Saya' : 'My Role & Contribution'}
            </h3>
            <p>{project.role}</p>
          </section>

          {/* Links */}
          <div className="modal__links">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                id={`modal-repo-${project.id}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                {isId ? 'Lihat Kode Sumber' : 'View Source Code'}
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id={`modal-demo-${project.id}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
                {isId ? 'Demo Langsung' : 'Live Demo'}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

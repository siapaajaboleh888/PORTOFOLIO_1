import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';
import { FEATURED_PROJECTS, PROJECTS } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import type { Project } from '../data/projects';
import './Projects.css';

const STATUS_COLORS: Record<string, string> = {
  completed: 'tag-green',
  prototype: 'tag-amber',
  academic: 'tag-cyan',
  experiment: 'tag-violet',
};

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const { lang } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const isId = lang === 'id';

  return (
    <article
      ref={ref}
      className={`project-card card ${inView ? 'project-card--visible' : ''}`}
      style={{
        transitionDelay: `${index * 0.1}s`,
        background: `${project.imageColor}`,
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
    >
      {/* Card glow overlay */}
      <div className="project-card__glow" aria-hidden="true" />

      {/* Header */}
      <div className="project-card__header">
        <div className="project-card__meta">
          <span className={`tag ${STATUS_COLORS[project.status]}`}>
            <span className="status-dot" style={{
              background: project.status === 'completed' ? '#22c55e' :
                project.status === 'prototype' ? '#f59e0b' : '#06b6d4',
            }} />
            {isId && project.status === 'completed' ? 'Selesai' :
             isId && project.status === 'prototype' ? 'Prototipe' :
             isId && project.status === 'academic' ? 'Akademik' :
             project.statusLabel}
          </span>
          <span className="project-card__category">{project.category}</span>
        </div>

        <div className="project-card__icon" aria-hidden="true">
          {project.category === 'Software Testing' ? '🧪' :
           project.category === 'Web Application' ? '🌐' :
           project.category === 'Information System' ? '📊' :
           project.category === 'Education' ? '📚' : '💡'}
        </div>
      </div>

      {/* Body */}
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__tagline">{project.tagline}</p>

      {/* Tech stack */}
      <div className="project-card__tech" aria-label="Technologies used">
        {project.techStack.slice(0, 4).map(tech => (
          <span key={tech} className="tag tag-blue project-card__tech-tag">{tech}</span>
        ))}
        {project.techStack.length > 4 && (
          <span className="project-card__tech-more">+{project.techStack.length - 4}</span>
        )}
      </div>

      {/* Footer */}
      <div className="project-card__footer">
        <span className="project-card__cta">
          View Details
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </span>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__repo-link"
            onClick={(e) => e.stopPropagation()}
            aria-label={`View ${project.title} on GitHub`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const { lang, t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const displayedProjects = showAll ? PROJECTS : FEATURED_PROJECTS;
  const isId = lang === 'id';

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-heading">
      <div className="container">
        {/* Header */}
        <div className={`section-header ${inView ? 'section-header--visible' : ''}`} ref={ref}>
          <div className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" />
            </svg>
            {t.projects.label}
          </div>
          <h2 className="section-title" id="projects-heading">{t.projects.title}</h2>
          <p className="section-subtitle">
            {t.projects.subtitle}
          </p>
          <div className="divider" />
        </div>

        {/* Grid */}
        <div className="projects__grid" role="list">
          {displayedProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Toggle */}
        {!showAll && PROJECTS.length > FEATURED_PROJECTS.length && (
          <div className="projects__more">
            <button
              id="projects-show-all-btn"
              className="btn btn-outline"
              onClick={() => setShowAll(true)}
            >
              {isId ? `Lihat Semua Proyek (${PROJECTS.length})` : `View All Projects (${PROJECTS.length})`}
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

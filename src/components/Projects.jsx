import { projects, socialLinks } from '../data/portfolioData';

/**
 * Small inline GitHub SVG icon
 */
export function GitHubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

/**
 * Small inline External Link SVG icon
 */
export function ExternalLinkIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

/**
 * ProjectCard component
 * Renders an individual project card with gradient border for flagship projects,
 * metadata, tags, and action buttons.
 */
export function ProjectCard({ project, aosDelay }) {
  const borderClasses = project.isFlagship
    ? 'bg-gradient-to-r from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500/80 hover:via-white/20 hover:to-red-500/50'
    : 'bg-white/10 hover:bg-white/20';

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`p-[1px] rounded-2xl transition-all duration-300 shadow-xl ${borderClasses}`}
    >
      <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90 relative overflow-hidden flex flex-col justify-between h-full">
        <div>
          {/* Badge pill */}
          {project.badge && (
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-4 w-fit">
              {project.badge}
            </span>
          )}

          {/* Title and faint serif-italic number */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              {project.title}
            </h3>
            <span className="text-5xl font-black text-white/10 font-serif italic select-none shrink-0 leading-none">
              {project.number}
            </span>
          </div>

          {/* Description */}
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full text-xs font-bold px-3 py-1 bg-white/5 border border-white/10 text-white/80 hover:bg-red-500/20 hover:text-white hover:border-red-500/30 transition-all duration-200 select-none"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-xs md:text-sm hover:bg-white/20 hover:border-white/30 transition-all"
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>
          )}

          {project.links?.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff2a2a] text-white font-semibold text-xs md:text-sm hover:bg-red-600 shadow-[0_0_15px_rgba(255,42,42,0.4)] transition-all"
            >
              Live Demo
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          ) : (
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/40 font-medium text-xs md:text-sm cursor-not-allowed select-none"
            >
              Demo Coming Soon
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Projects section component
 * Showcases featured engineering projects with flagship highlights and repository CTA.
 */
export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-bold tracking-widest uppercase mb-4">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
            Work that speaks for itself
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto mt-4 font-medium">
            A selection of full-stack, AI, and blockchain applications built to solve practical challenges.
          </p>
        </div>

        {/* Project Cards Column */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              aosDelay={(index + 1) * 100}
            />
          ))}
        </div>

        {/* Explore All Repositories CTA */}
        <div className="flex justify-center" data-aos="fade-up">
          <a
            href={socialLinks.github || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-bold hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all duration-300 shadow-xl group"
          >
            <GitHubIcon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
            <span>Explore All My Repositories</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

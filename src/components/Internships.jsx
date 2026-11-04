import { internshipsList } from '../data/portfolioData';

/**
 * InternshipCard component
 * Card displaying an internship position, duration, organization,
 * bulleted list of skills gained, and technology pills.
 */
export function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between shadow-2xl"
    >
      <div>
        {/* Top row: Duration and mini badge */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs text-white/50 uppercase tracking-wider">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest border border-white/10 select-none">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white tracking-tight mt-4">
          {intern.role}
        </h3>
        <p className="uppercase text-red-200 text-sm font-bold tracking-wide mt-1 mb-6">
          {intern.organization}
        </p>

        {/* Skills Gained list */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-wider text-white/70 font-bold mb-3">
            Skills Gained:
          </p>
          <ul className="space-y-2">
            {intern.skills.map((skill, i) => (
              <li key={i} className="text-sm text-white/90 flex items-start gap-2">
                <span className="text-black font-black mt-0.5">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom: Technologies */}
      <div className="border-t border-white/10 pt-4 mt-auto">
        <p className="text-[10px] uppercase tracking-wider text-white/60 font-mono mb-2">
          Technologies:
        </p>
        <div className="flex flex-wrap gap-2">
          {intern.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-black/30 border border-white/10 text-white/90 select-none"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Internships component
 * Displays professional internships and practical industry experience.
 */
export default function Internships() {
  return (
    <section className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Torn paper divider flowing from previous dark section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none -translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-[#0a0a0a] rotate-180"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative pulsing black star bottom-left */}
      <svg
        className="absolute bottom-10 left-10 w-8 h-8 text-black opacity-20 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10 mt-6">
        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm md:text-base font-semibold text-red-100 max-w-xl mx-auto mt-4 leading-relaxed">
            Hands-on internships and practical technical roles contributing to production-grade data and intelligence systems.
          </p>
        </div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard
              key={`${intern.organization}-${index}`}
              intern={intern}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { technicalSkills } from '../data/portfolioData';

/**
 * SkillBadge component
 * Individual pill displaying a single skill
 */
export function SkillBadge({ name }) {
  return (
    <span className="inline-flex rounded-full px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-red-600/20 transition-colors duration-200 select-none">
      {name}
    </span>
  );
}

/**
 * SkillCard component
 * Card displaying a skill category and its badges
 */
export function SkillCard({ category, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_0_25px_rgba(239,68,68,0.15)] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <h3 className="text-lg font-black uppercase text-white tracking-wider pb-3 mb-5 border-b border-white/10">
          {category.title}
        </h3>
        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * TechnicalSkills component
 * Displays full tech stack categorized into responsive glassmorphic cards
 */
export default function TechnicalSkills() {
  return (
    <section id="skills" className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden">
      {/* Blurred background red accent circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-bold tracking-widest uppercase mb-4">
            Technical Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            My Skillset
          </h2>
          <p className="text-sm md:text-base text-white/50 mt-3 font-medium">
            Core technologies, libraries, and frameworks I leverage to engineer robust solutions.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

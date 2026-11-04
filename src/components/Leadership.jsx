import { leadershipList } from '../data/portfolioData';

/**
 * LeadershipItem component
 * Alternating timeline card with glowing red dot node,
 * metadata badge, title, role, and description.
 */
export function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 last:mb-0 w-full">
      {/* Red glowing dot on the vertical timeline line */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 md:top-8 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_12px_rgba(255,42,42,0.8)] border-2 border-white/80 z-20 pointer-events-none" />

      {/* Even index: Card on LEFT, Spacer on RIGHT */}
      {isEven ? (
        <>
          <div
            data-aos="fade-right"
            className="w-full ml-10 md:ml-0 md:w-[45%] md:text-right"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(255,42,42,0.15)] transition-all duration-300">
              <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3">
                {item.badge}
              </span>
              <h3 className="text-xl md:text-2xl font-black text-white hover:text-[#ff2a2a] transition-colors tracking-tight mb-1">
                {item.title}
              </h3>
              <p className="font-mono uppercase text-red-400 text-xs tracking-wider font-semibold mb-3">
                {item.role}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
          <div className="hidden md:block md:w-[45%]" />
        </>
      ) : (
        <>
          <div className="hidden md:block md:w-[45%]" />
          <div
            data-aos="fade-left"
            className="w-full ml-10 md:ml-0 md:w-[45%] md:text-left"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(255,42,42,0.15)] transition-all duration-300">
              <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3">
                {item.badge}
              </span>
              <h3 className="text-xl md:text-2xl font-black text-white hover:text-[#ff2a2a] transition-colors tracking-tight mb-1">
                {item.title}
              </h3>
              <p className="font-mono uppercase text-red-400 text-xs tracking-wider font-semibold mb-3">
                {item.role}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/**
 * Leadership section component
 * Showcases research, awards, community participation, and leadership milestones.
 */
export default function Leadership() {
  return (
    <section className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Torn-paper divider at the top connecting from the red Internships section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none -translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-[#ff2a2a] rotate-180"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mt-6">
        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-bold tracking-widest uppercase mb-4">
            Activities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            Leadership & Engagement
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto mt-4 font-medium">
            Research publications, competitions, and technical workshops demonstrating initiative and collaborative growth.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical 2px gradient line */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10 pointer-events-none" />

          {/* Timeline items list */}
          <div className="relative z-10">
            {leadershipList.map((item, index) => (
              <LeadershipItem
                key={`${item.title}-${index}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

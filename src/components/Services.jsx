import { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { skillsContent } from '../data/portfolioData';

/* ─────────────────────────────────────────────
   TagCard component
   A "hanging tag" card that activates (turns red)
   when the scroll-driven line tip passes it.
───────────────────────────────────────────── */
function TagCard({ number, title, text, className, aosDelay, aosType, pathLength, containerRef }) {
  const cardRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  // Listen to scroll-driven pathLength and activate when line tip passes this card
  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!containerRef?.current || !cardRef?.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerHeight = containerRect.height;
    const cardRect = cardRef.current.getBoundingClientRect();
    // Card position relative to the container top
    const cardTopInContainer = cardRect.top - containerRect.top;
    const lineTipY = latest * containerHeight;
    setIsActive(lineTipY >= cardTopInContainer + 50);
  });

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-colors duration-700 shadow-xl ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_0_30px_rgba(255,42,42,0.4)]'
          : 'bg-white shadow-gray-200'
      } ${className}`}
    >
      {/* Punched hole at the top */}
      <div className="flex justify-center pt-1 pb-0">
        <div
          className={`w-5 h-5 rounded-full border-2 transition-colors duration-700 ${
            isActive ? 'border-red-300 bg-red-600' : 'border-gray-300 bg-gray-100'
          }`}
        />
      </div>

      {/* Inner panel */}
      <div
        className={`rounded-[1.5rem] mt-2 p-8 min-h-[220px] flex flex-col justify-between transition-colors duration-700 ${
          isActive ? 'bg-red-700/50' : 'bg-[#f4f4f4]'
        }`}
      >
        <div>
          {/* Faint serif-italic number */}
          <div
            className={`font-serif italic text-5xl font-black mb-3 transition-colors duration-700 ${
              isActive ? 'text-white/30' : 'text-gray-200'
            }`}
          >
            {number}
          </div>

          {/* Title */}
          <h3
            className={`text-2xl font-black tracking-tight mb-3 transition-colors duration-700 ${
              isActive ? 'text-white' : 'text-gray-900'
            }`}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className={`text-sm leading-relaxed transition-colors duration-700 ${
              isActive ? 'text-red-100' : 'text-gray-500'
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Card layout config: position, tilt, AOS
───────────────────────────────────────────── */
const cardLayout = [
  {
    className: 'md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
    aosType: 'fade-left',
    aosDelay: 100,
  },
  {
    className: 'md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
    aosType: 'fade-right',
    aosDelay: 200,
  },
  {
    className: 'md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
    aosType: 'fade-left',
    aosDelay: 300,
  },
  {
    className: 'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
    aosType: 'fade-right',
    aosDelay: 400,
  },
];

/* ─────────────────────────────────────────────
   Services (Process) section
───────────────────────────────────────────── */
export default function Services() {
  const containerRef = useRef(null);

  // Scroll progress tied to the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  // Smooth out the raw scroll value
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Desktop winding path
  const desktopPath = 'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200';
  // Mobile straight vertical path
  const mobilePath = 'M 2,0 L 2,100';

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* ── Header block ── */}
        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-12 md:mb-0"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-xs font-bold tracking-widest uppercase mb-4">
            {skillsContent.badge}
          </span>

          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900 tracking-tight pr-10">
              {skillsContent.heading}
            </h2>
            {/* Hand-drawn arrow SVG */}
            <svg
              className="absolute -bottom-4 right-0 w-8 h-8 text-[#ff2a2a]"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </div>

          <p className="text-sm md:text-base text-gray-500 mt-8 leading-relaxed font-medium max-w-sm">
            {skillsContent.description}
          </p>
        </div>

        {/* ── Desktop animated winding path SVG ── */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="path-mask">
              <motion.path
                d={desktopPath}
                stroke="white"
                strokeWidth="20"
                fill="none"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* Layer 1: faint guide dashes */}
          <path
            d={desktopPath}
            stroke="#cbd5e1"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8 10"
          />

          {/* Layer 2: animated black dashes revealed by mask */}
          <path
            d={desktopPath}
            stroke="black"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* ── Mobile animated vertical path SVG ── */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="path-mask-mobile">
              <motion.path
                d={mobilePath}
                stroke="white"
                strokeWidth="20"
                fill="none"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* Faint guide */}
          <path
            d={mobilePath}
            stroke="#cbd5e1"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />

          {/* Animated black dashes */}
          <path
            d={mobilePath}
            stroke="black"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* ── Cards ── */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, index) => (
            <TagCard
              key={card.number}
              number={card.number}
              title={card.title}
              text={card.text}
              className={cardLayout[index]?.className ?? ''}
              aosType={cardLayout[index]?.aosType ?? 'fade-up'}
              aosDelay={cardLayout[index]?.aosDelay ?? index * 100}
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}
        </div>

        {/* ── Hand-written end note ── */}
        <p
          className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none pointer-events-none"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {skillsContent.endText}
        </p>
      </div>
    </section>
  );
}

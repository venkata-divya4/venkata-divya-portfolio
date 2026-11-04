import { motion } from 'framer-motion';
import stackImage from '../assets/about/profile.png';
import { aboutContent, personalInfo } from '../data/portfolioData';

/**
 * About component
 * Features an ID badge on a lanyard with spring physics bounce animation,
 * styled bio with TAP Academy credit, decorative stars, and torn-paper section divider.
 */
export default function About() {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative 4-point star: Top-Right */}
      <svg
        className="absolute top-12 right-12 w-8 h-8 text-black opacity-30 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Decorative 4-point star: Bottom-Left with delay */}
      <svg
        className="absolute bottom-32 left-10 w-8 h-8 text-black opacity-30 animate-pulse pointer-events-none"
        style={{ animationDelay: '1s' }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Inner Content Grid */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* Left: ID Badge on a Lanyard (Framer Motion spring bounce once) */}
        <div className="md:w-[350px] shrink-0 w-full flex justify-center relative">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 110, damping: 9, mass: 1.1 }}
            className="relative pt-12"
          >
            {/* Black lanyard string */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black z-0" />

            {/* Grey clip rectangle */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-4 bg-gray-400 rounded-sm shadow z-10" />

            {/* Dark ID Card */}
            <div className="relative z-0 bg-gray-900 max-w-[280px] rounded-2xl p-3 shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500 mx-auto">
              {/* Cutout slot at the top */}
              <div className="w-12 h-2 bg-black rounded-full mx-auto mb-3" />

              {/* Profile portrait photo */}
              <img
                src={stackImage}
                alt={personalInfo.name}
                className="w-full aspect-[3/4] rounded-xl object-cover object-top shadow-inner"
              />
            </div>
          </motion.div>
        </div>

        {/* Right: Bio Text Content */}
        <div className="flex-1 space-y-6" data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">
            {aboutContent.heading}
          </h2>
          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* White torn-paper SVG divider along bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}

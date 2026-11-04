import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

/**
 * Preloader component
 * Displays a full-screen red shutter with a water-fill brand name animation.
 * Automatically dismisses after 2200ms and slides up out of view.
 */
export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  // Dismiss the preloader after 2200ms
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        // Outer red shutter — slides up on exit
        <motion.div
          key="preloader"
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex items-center justify-center"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Brand name wrapper — fades and shrinks on exit */}
          <motion.div
            className="relative text-5xl md:text-7xl font-black tracking-tighter select-none"
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Background copy: faint dark-red placeholder text */}
            <span className="text-red-900/30" aria-hidden="true">
              {personalInfo.brandName}
              <span>.</span>
            </span>

            {/* Foreground copy: white text that "fills up" via animating clipPath */}
            <motion.span
              className="absolute inset-0 text-white whitespace-nowrap"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}
              aria-hidden="true"
            >
              {personalInfo.brandName}
              <span className="text-black">.</span>
            </motion.span>

            {/* Visually hidden accessible label */}
            <span className="sr-only">{personalInfo.brandName}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

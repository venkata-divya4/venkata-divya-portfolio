import { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero/hero.mp4';
import heroPoster from '../assets/about/profile.png';
import { heroContent, socialLinks } from '../data/portfolioData';

/* ─────────────────────────────────────────────
   Shared social link data — used in both the
   desktop fixed sidebar and the mobile inline row.
   Only includes links that have a non-empty URL.
───────────────────────────────────────────── */
function SocialLinks({ className = '', iconClass = '' }) {
  const links = [
    {
      href: socialLinks.github,
      label: 'GitHub Profile',
      icon: (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      href: socialLinks.linkedin,
      label: 'LinkedIn Profile',
      icon: (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      href: socialLinks.instagram,
      label: 'Instagram Profile',
      icon: (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ].filter((l) => !!l.href); // hide any icon whose link is empty

  return (
    <>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          className={className}
        >
          {l.icon}
        </a>
      ))}
    </>
  );
}

/**
 * Hero section
 * Full-screen video background (object-contain so the portrait is never cropped),
 * left content block with CTAs, right "Play Reel" button, desktop fixed social bar.
 */
export default function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Init AOS once; refresh when all assets have loaded so layout shifts don't
  // hide elements that have already scrolled past the trigger point.
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });

    const handleLoad = () => AOS.refresh();
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  // Play / pause the background video reel
  function toggleVideo(e) {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-[#ff2a2a]"
    >
      {/* ── Background video ─────────────────────────────────────────── */}
      {/* object-contain keeps the full portrait visible — never zooms/crops */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-contain object-top md:object-right z-0"
        playsInline
        poster={heroPoster}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

      {/* ── Desktop fixed social sidebar ─────────────────────────────── */}
      <aside
        aria-label="Social links"
        className="hidden lg:flex flex-col gap-4 fixed left-6 top-1/2 -translate-y-1/2 z-50 mix-blend-difference"
      >
        <SocialLinks
          className="text-white/60 hover:text-white hover:scale-125 transition-all duration-200"
          iconClass="w-5 h-5"
        />
      </aside>

      {/* ── Main content layer ───────────────────────────────────────── */}
      <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-[8%] flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end">

        {/* Left block */}
        <div className="max-w-2xl">

          {/* Mobile-only social icons row (above the title) */}
          <div
            className="flex lg:hidden gap-4 mb-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <SocialLinks
              className="text-white/60 hover:text-white hover:scale-125 transition-all duration-200"
              iconClass="w-5 h-5"
            />
          </div>

          {/* Main heading */}
          <h1
            className="text-white text-3xl md:text-5xl font-bold tracking-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {heroContent.greeting},
            <br />
            {/* Title in solid black so it pops against the red background */}
            <span className="text-black font-extrabold">
              {heroContent.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-white text-sm md:text-lg font-semibold max-w-md mt-4 mb-6 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {heroContent.subtitle}
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-wrap items-center gap-3 md:gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Primary */}
            <a
              href={heroContent.ctaPrimary.href}
              className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              {heroContent.ctaPrimary.text}
            </a>

            {/* Secondary */}
            <a
              href={heroContent.ctaSecondary.href}
              className="px-6 py-3 rounded-full bg-black/40 border border-white/30 text-white font-semibold backdrop-blur-md hover:bg-black/60 transition-all"
            >
              {heroContent.ctaSecondary.text}
            </a>

            {/* Resume download — only rendered when the link is set */}
            {heroContent.ctaResume && heroContent.ctaResume.href && (
              <a
                href={heroContent.ctaResume.href}
                download
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-white/50 text-white font-semibold hover:bg-white/10 transition-all"
              >
                {/* Download-document icon */}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                {heroContent.ctaResume.text}
              </a>
            )}
          </div>
        </div>

        {/* ── Right block: Play Reel button ──────────────────────────── */}
        <div
          className="mt-8 md:mt-0 flex flex-col items-center pointer-events-auto cursor-pointer group"
          onClick={toggleVideo}
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <button
            type="button"
            aria-label={isPlaying ? 'Pause Reel' : 'Play Reel'}
            className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex items-center justify-center hover:scale-110 hover:bg-[#ff2a2a] hover:shadow-[0_0_20px_rgba(255,42,42,0.8)] transition-all duration-300"
          >
            {isPlaying ? (
              /* Pause bars */
              <svg
                className="w-5 h-5 md:w-8 md:h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              /* Play triangle */
              <svg
                className="w-5 h-5 md:w-8 md:h-8 text-white ml-0.5 md:ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Label below the button */}
          <span className="mt-2 text-[10px] md:text-xs text-white uppercase tracking-widest font-semibold group-hover:text-black transition-colors">
            {isPlaying ? 'Pause' : 'Play Reel'}
          </span>
        </div>
      </div>

      {/* ── Bouncing scroll arrow (desktop only) ─────────────────────── */}
      <div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none z-20">
        <a
          href="#about"
          className="pointer-events-auto inline-block p-2"
          aria-label="Scroll to About section"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

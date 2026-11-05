import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData';

/**
 * Contact section
 * - Giant parallax "Contact" word behind a red card form
 * - Falls back to a mailto: link when EmailJS is not configured
 * - Sends via EmailJS when VITE_ env vars are set
 */
export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  // 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');

  /* ── Parallax background text ── */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);

  /* ── Form submit handler ── */
  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;

    const { serviceId, templateId, publicKey } = emailjsConfig;

    // Read field values via their id attributes
    const firstName = formRef.current.querySelector('#firstName').value.trim();
    const lastName  = formRef.current.querySelector('#lastName').value.trim();
    const email     = formRef.current.querySelector('#email').value.trim();
    const message   = formRef.current.querySelector('#message').value.trim();

    // Basic required-field validation
    if (!firstName || !email || !message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('sending');

    // Detect whether EmailJS has been configured with real credentials
    const placeholders = [
      'YOUR_EMAILJS_SERVICE_ID',
      'YOUR_EMAILJS_TEMPLATE_ID',
      'YOUR_EMAILJS_PUBLIC_KEY',
    ];
    const isConfigured =
      serviceId && templateId && publicKey &&
      !placeholders.includes(serviceId) &&
      !placeholders.includes(templateId) &&
      !placeholders.includes(publicKey);

    if (!isConfigured) {
      /* ── Mailto fallback ── */
      const subject = `Portfolio Contact from ${firstName} ${lastName}`;
      const body    = encodeURIComponent(
        `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      );
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=${subject}&body=${body}`,
        '_blank'
      );
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    /* ── EmailJS send ── */
    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 4000);
  }

  /* ── Submit button label / style helpers ── */
  const btnLabel = {
    idle:    'Send Message',
    sending: 'Sending…',
    success: 'Sent Successfully ✓',
    error:   'Failed — Try Again',
  }[status];

  const btnClass = {
    idle:    'border-white text-white hover:bg-white hover:text-[#ff2a2a] group',
    sending: 'border-white/40 text-white/50 cursor-not-allowed',
    success: 'border-green-400 text-green-400',
    error:   'border-red-900 bg-red-900/60 text-white',
  }[status];

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* ── Giant parallax "Contact" behind everything ── */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="text-white/[0.03] font-black uppercase tracking-tighter select-none leading-[0.75] scale-y-[1.6] origin-top whitespace-nowrap"
          style={{
            fontSize: '25vw',
            fontFamily: "'Impact','Arial Black',sans-serif",
          }}
        >
          Contact
        </div>
      </motion.div>

      {/* ── Red card, aligned to the right ── */}
      <div className="relative z-10 w-full flex justify-end pb-0">
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16"
        >
          {/* Header row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-bold">
              Reach Me
            </span>

            {/* "DM on Instagram" pill — only shown when the link is set */}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-white text-xs font-bold tracking-wide hover:bg-white/10 transition-colors"
              >
                {/* Instagram icon */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                DM on Instagram
              </a>
            )}
          </div>

          {/* ── Form ── */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-12"
          >
            {/* Input row: left col (name + email) / right col (message) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Left: First name, Last name, Email */}
              <div className="flex flex-col gap-10">
                <div>
                  <label htmlFor="firstName" className="block text-white/60 text-xs uppercase tracking-widest mb-3">
                    First Name <span className="text-white">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="first_name"
                    type="text"
                    required
                    placeholder="venkata"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-white/60 text-xs uppercase tracking-widest mb-3">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="last_name"
                    type="text"
                    placeholder="Divya"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/60 text-xs uppercase tracking-widest mb-3">
                    Email <span className="text-white">*</span>
                  </label>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Right: Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="block text-white/60 text-xs uppercase tracking-widest mb-3">
                  Message <span className="text-white">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={8}
                  placeholder="Tell me about your project or just say hi…"
                  className="w-full flex-1 bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors resize-none min-h-[120px]"
                />
              </div>
            </div>

            {/* Bottom: consent checkbox + note + mailto + submit */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              {/* Left: checkbox + info */}
              <div className="flex flex-col gap-4 max-w-sm">
                {/* Consent checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="permission"
                    className="mt-1 w-4 h-4 accent-black rounded shrink-0"
                  />
                  <span className="text-xs text-white/60 leading-relaxed">
                    I agree that my submitted data is being collected and used to contact me.
                  </span>
                </label>

                {/* Response time note */}
                <p className="text-xs text-white/50 leading-relaxed">
                  Your message will be sent directly to my inbox. I typically respond within 24–48 hours.
                </p>

                {/* Urgent email fallback */}
                <p className="text-xs text-white/50">
                  Urgent?{' '}
                  <a
                    href={`mailto:${personalInfo.emails.primary}`}
                    className="underline text-white/80 hover:text-white transition-colors"
                  >
                    {personalInfo.emails.primary}
                  </a>
                </p>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 text-sm font-bold tracking-wide transition-all duration-300 shrink-0 ${btnClass}`}
              >
                {/* Spinner shown while sending */}
                {status === 'sending' && (
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                )}

                {btnLabel}

                {/* Arrow icon — only on idle */}
                {status === 'idle' && (
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

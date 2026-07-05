import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// A striking aerial night-time Dubai shot (different from the one used before)
const DUBAI_BG =
  'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1920&q=85';

const Hero = () => {
  const { language, t } = useLanguage();
  const isAr = language === 'ar';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-primary"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* ── Background ── */}
      <div className="absolute inset-0">
        <img
          src={DUBAI_BG}
          alt="Dubai skyline at dusk"
          className="w-full h-full object-cover object-center"
        />
        {/* gradient from left (text side) → transparent → dark right */}
        <div
          className="absolute inset-0"
          style={{
            background: isAr
              ? 'linear-gradient(to left, rgba(13,21,32,0.97) 35%, rgba(13,21,32,0.6) 65%, rgba(13,21,32,0.15) 100%)'
              : 'linear-gradient(to right, rgba(13,21,32,0.97) 35%, rgba(13,21,32,0.6) 65%, rgba(13,21,32,0.15) 100%)',
          }}
        />
        {/* bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: 'linear-gradient(to top, #0d1520, transparent)' }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-14 pt-28 pb-20">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isAr ? 'lg:flex-row-reverse' : ''}`}>

          {/* Text Column */}
          <motion.div
            className="flex-1 flex flex-col gap-7"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="block w-10 h-px bg-secondary/60" />
              <span
                className="text-secondary uppercase tracking-[0.35em] font-medium"
                style={{ fontSize: '10px' }}
              >
                {t.hero.subtitle}
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif leading-[1.08]">
              {isAr ? (
                <>
                  <span className="block text-white" style={{ fontSize: 'clamp(3rem,7vw,5.5rem)' }}>اليان</span>
                  <span className="block text-secondary italic" style={{ fontSize: 'clamp(3rem,7vw,5.5rem)' }}>ديوانه</span>
                </>
              ) : (
                <>
                  <span className="block text-white" style={{ fontSize: 'clamp(3rem,7vw,5.5rem)' }}>Lian</span>
                  <span className="block text-secondary italic" style={{ fontSize: 'clamp(3rem,7vw,5.5rem)' }}>Diwana</span>
                </>
              )}
            </h1>

            {/* Divider */}
            <div className="w-12 h-px bg-secondary/50" />

            {/* Taglines */}
            <div className="space-y-1">
              <p className="text-white text-lg md:text-xl font-light leading-snug">
                {t.hero.tagline1}
              </p>
              <p className="text-secondary text-lg md:text-xl font-light leading-snug">
                {t.hero.tagline2}
              </p>
            </div>

            <p className="text-white/55 text-sm leading-relaxed max-w-md font-light">
              {t.hero.description}
            </p>

            {/* CTA */}
            <div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block border border-secondary text-secondary px-8 py-3.5 uppercase font-semibold hover:bg-secondary hover:text-primary transition-all duration-300"
                style={{ fontSize: '11px', letterSpacing: '0.25em' }}
              >
                {t.hero.cta}
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Photo Column */}
          <motion.div
            className="flex-shrink-0 w-full max-w-xs lg:max-w-sm relative"
            initial={{ opacity: 0, x: isAr ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            {/* Gold corner brackets */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-secondary z-10 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-secondary z-10 pointer-events-none" />

            <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <img
                src="/img/profile.jpeg"
                alt="Lian Diwana"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.target.src =
                    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800';
                }}
              />
            </div>

            {/* Location tag */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-20">
              <div className="px-4 py-2 border-l-2 border-secondary" style={{background:'rgba(13,21,32,0.85)', backdropFilter:'blur(8px)'}}>
                <p className="text-white font-semibold text-sm">{t.hero.location}</p>
                <p className="text-secondary uppercase tracking-widest" style={{ fontSize: '9px' }}>{t.hero.hq}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-white/30 uppercase" style={{ fontSize: '9px', letterSpacing: '0.3em' }}>{t.hero.scroll}</span>
        <div className="w-px h-10 bg-gradient-to-b from-secondary/70 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;

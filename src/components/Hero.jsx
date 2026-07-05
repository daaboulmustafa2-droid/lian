import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const containerRef = useRef(null);
  const { language, t } = useLanguage();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect: video container moves slightly slower than text
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="about" ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cream px-6 lg:px-12 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        
        {/* Typography side */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col space-y-8"
        >
          <div className="space-y-4">
            <motion.h1 
              className="font-heading text-6xl md:text-8xl lg:text-[90px] leading-[0.95] font-black tracking-tighter text-primary uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {language === 'ar' ? (
                <>
                  اليان <br />
                  <span className="text-secondary drop-shadow-sm">ديوانه</span><span className="text-secondary">.</span>
                </>
              ) : (
                <>
                  Lian <br />
                  <span className="text-secondary drop-shadow-sm">Diwana</span><span className="text-secondary">.</span>
                </>
              )}
            </motion.h1>
          </div>
          
          {/* Catchy tagline */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
          >
            <p className="font-body text-xl md:text-2xl lg:text-3xl font-bold text-primary leading-tight">
              {t.hero.tagline1}<br />
              <span className="text-secondary">{t.hero.tagline2}</span>
            </p>
            <p className="font-body text-sm md:text-base text-primary/60 max-w-xl leading-relaxed">
              {t.hero.description}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a 
              href="#contact"
              className="inline-block px-8 py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-premium hover:bg-secondary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              {t.hero.cta}
            </a>
          </motion.div>
        </motion.div>

        {/* Video side */}
        <motion.div 
          style={{ y, opacity }}
          className="lg:col-span-5 relative w-full aspect-[4/5] rounded-[40px] overflow-hidden shadow-premium group bg-secondary/5 flex items-center justify-center transition-all duration-700"
        >
          {/* Background Video */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          >
            <source src="/video/Video mp4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className={`absolute bottom-10 text-white z-20 ${language === 'ar' ? 'right-10 text-right' : 'left-10 text-left'}`}>
            <p className="font-heading font-black text-2xl uppercase tracking-tighter">{t.hero.location}</p>
            <p className="font-medium text-xs text-secondary uppercase tracking-widest">{t.hero.hq}</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative subtle pulse */}
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;

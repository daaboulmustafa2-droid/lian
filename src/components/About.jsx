import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { language, t } = useLanguage();

  return (
    <section id="about-me" className="py-24 lg:py-36 bg-[#f8f5f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Portrait side */}
          <motion.div 
            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[480px] lg:h-[580px] overflow-hidden rounded-lg shadow-premium">
              <img 
                src="/img/profile.jpeg" 
                alt="Lian Diwana" 
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000';
                }}
              />
            </div>
            {/* Shifted offset gold frame */}
            <div className="absolute -bottom-5 -right-5 w-full h-full border border-secondary/35 rounded-lg pointer-events-none -z-10" />
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-secondary pointer-events-none" />
          </motion.div>

          {/* Description side */}
          <motion.div 
            initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <p className="text-secondary text-[10px] tracking-[0.4em] uppercase font-semibold">
              {t.about.tag}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] text-primary font-medium leading-tight">
              {t.about.title}
            </h2>
            <div className="w-14 h-px bg-secondary my-2"></div>
            
            <div className="space-y-6 text-primary/70 text-[15px] leading-[1.85] font-light">
              <p>{t.about.body1}</p>
              <p>{t.about.body2}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-secondary/20">
              <p className="font-serif text-primary text-xl font-medium">
                {t.about.signatureName}
              </p>
              <p className="text-secondary text-[10px] tracking-[0.3em] uppercase mt-1">
                {t.about.signatureTitle}
              </p>
            </div>
            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-secondary text-[10px] tracking-[0.25em] uppercase font-semibold border-b border-secondary/40 pb-1 hover:border-secondary transition-colors duration-300"
              >
                {t.about.ctaText}
                <svg className="w-3 h-3 transform rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

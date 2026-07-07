import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const bgImages = [
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
];

const Services = () => {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <section id="services" className="py-24 lg:py-36 bg-primary overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Title */}
        <div className="text-center mb-24">
          <p className="text-secondary text-[10px] tracking-[0.4em] uppercase font-semibold mb-4">
            {t.services.tag}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-medium mb-5">
            {t.services.title}
          </h2>
          <div className="w-14 h-px bg-secondary mx-auto mb-6"></div>
          <p className="text-white/50 text-sm md:text-[15px] max-w-lg mx-auto font-light leading-relaxed">
            {t.services.desc}
          </p>
        </div>

        {/* Services List - Columns */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {t.services.sections.map((section, index) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch ${
                index % 2 === 1 && !isAr ? 'lg:flex-row-reverse' : ''
              } ${index % 2 === 1 && isAr ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Media Card */}
              <div className="w-full lg:w-[45%] relative min-h-[300px] overflow-hidden group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${bgImages[index]}')` }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />
                <div className="absolute inset-0 border border-secondary/15 group-hover:border-secondary/40 transition-colors duration-500 pointer-events-none" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
                  <span className="text-secondary/20 font-serif text-5xl font-light">
                    {section.num}
                  </span>
                  <div>
                    <div className="w-10 h-px bg-secondary mb-3"></div>
                    <h3 className="font-serif text-white text-3xl font-medium tracking-wide">
                      {section.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Bullet Points List */}
              <div className="flex-1 flex flex-col justify-center gap-8">
                {section.bullets.map((bullet, i) => (
                  <motion.div 
                    key={bullet.title}
                    initial={{ opacity: 0, x: isAr ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                    className="flex gap-5 items-start group"
                  >
                    <div className="w-2.5 h-2.5 bg-secondary rounded-full mt-2 shrink-0 group-hover:bg-white transition-colors duration-300" />
                    <div>
                      <h4 className="text-white text-lg font-medium font-sans mb-1 group-hover:text-secondary transition-colors duration-300">
                        {bullet.title}
                      </h4>
                      <p className="text-white/50 text-sm leading-relaxed font-light">
                        {bullet.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Highlights = () => {
  const { t } = useLanguage();

  return (
    <section id="highlights" className="py-24 lg:py-36 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[540px] overflow-hidden order-2 lg:order-1"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1200&q=80')" }}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute top-5 left-5 w-12 h-12 border-t border-l border-secondary/50 pointer-events-none" />
            <div className="absolute bottom-5 right-5 w-12 h-12 border-b border-r border-secondary/50 pointer-events-none" />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex flex-col space-y-6"
          >
            <p className="text-secondary text-[10px] tracking-[0.4em] uppercase font-semibold">
              {t.highlights.tag}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] text-white font-medium leading-snug">
              {t.highlights.title}
            </h2>
            <div className="w-14 h-px bg-secondary"></div>

            <div className="space-y-8 pt-2">
              {t.highlights.items.map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex gap-5"
                >
                  <div className="shrink-0 mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  </div>
                  <div>
                    <h3 className="font-serif text-secondary text-base font-medium mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/55 text-[14px] leading-[1.9] font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Highlights;

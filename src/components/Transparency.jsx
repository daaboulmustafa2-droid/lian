import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ShieldAlert, BarChart3, Globe } from 'lucide-react';

const icons = [
  <ShieldAlert className="w-8 h-8 text-secondary" />,
  <BarChart3 className="w-8 h-8 text-secondary" />,
  <Globe className="w-8 h-8 text-secondary" />
];

const Transparency = () => {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <section id="transparency" className="py-24 lg:py-36 bg-[#0a0a0a]" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-secondary text-[10px] tracking-[0.4em] uppercase font-semibold mb-4">
            {t.transparency.tag}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-medium mb-5">
            {t.transparency.title}
          </h2>
          <div className="w-14 h-px bg-secondary mx-auto mb-6"></div>
          <p className="text-white/55 text-sm max-w-xl mx-auto font-light leading-relaxed">
            {t.transparency.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.transparency.items.map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="bg-primary/40 border border-secondary/10 p-8 lg:p-10 hover:border-secondary/40 transition-all duration-500 hover:shadow-premium relative group flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 border border-secondary/20 flex items-center justify-center mb-8 group-hover:border-secondary transition-colors duration-500">
                  {icons[index]}
                </div>
                <h3 className="font-serif text-white text-2xl font-medium mb-4 group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transparency;

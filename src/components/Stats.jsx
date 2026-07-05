import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Stats = () => {
  const { language, t } = useLanguage();

  const statsData = [
    { value: t.stats.sales.value, label: t.stats.sales.label, sub: t.stats.sales.sub },
    { value: t.stats.roi.value, label: t.stats.roi.label, sub: t.stats.roi.sub },
    { value: t.stats.experience.value, label: t.stats.experience.label, sub: t.stats.experience.sub },
  ];

  return (
    <section id="stats" className="py-24 bg-primary relative overflow-hidden">
      {/* Cityscape Background Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000" 
          alt="Dubai Skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-8">
          {statsData.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col space-y-2 border-white/10 ${
                language === 'ar' ? 'border-r pr-8' : 'border-l pl-8'
              }`}
            >
              <h3 className="font-heading font-black text-4xl lg:text-6xl text-white tracking-tighter">
                {stat.value}
              </h3>
              <p className="font-bold text-xs uppercase tracking-widest text-secondary">
                {stat.label}
              </p>
              <p className="font-body text-xs text-white/40 uppercase tracking-widest">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

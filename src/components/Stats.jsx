import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Stats = () => {
  const { language, t } = useLanguage();

  const statsData = [
    { value: t.stats.experience.value, label: t.stats.experience.label, sub: t.stats.experience.sub },
    { value: t.stats.clients.value,    label: t.stats.clients.label,    sub: t.stats.clients.sub    },
    { value: t.stats.sales.value,      label: t.stats.sales.label,      sub: t.stats.sales.sub      },
  ];

  return (
    <section id="stats" className="py-20" style={{ background: '#111d2e', borderTop: '1px solid rgba(201,162,93,0.18)', borderBottom: '1px solid rgba(201,162,93,0.18)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-14">
        <div
          className="grid grid-cols-1 sm:grid-cols-3"
          style={{ divide: 'auto' }}
        >
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="flex flex-col items-center text-center py-10 px-8"
              style={{
                borderRight: i < 2 && language !== 'ar' ? '1px solid rgba(201,162,93,0.2)' : 'none',
                borderLeft:  i < 2 && language === 'ar' ? '1px solid rgba(201,162,93,0.2)' : 'none',
              }}
            >
              <p className="font-serif text-secondary leading-none mb-3" style={{ fontSize: 'clamp(2.4rem,5vw,3.5rem)' }}>
                {stat.value}
              </p>
              <p className="text-white/70 uppercase font-semibold mb-1.5" style={{ fontSize: '10px', letterSpacing: '0.25em' }}>
                {stat.label}
              </p>
              <p className="text-white/40 font-light" style={{ fontSize: '11px' }}>
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

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const images = [
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 lg:py-36 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Title */}
        <div className="text-center mb-20">
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {t.services.items.map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative h-72 lg:h-80 group overflow-hidden cursor-default"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${images[index]}')` }}
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-500" />
              {/* Gold outline border overlay on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-secondary/20 transition-all duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10 z-10">
                <span className="text-secondary/30 font-serif text-4xl font-light absolute top-6 right-8 group-hover:text-secondary/60 transition-colors duration-300">
                  {item.num}
                </span>
                <div className="w-8 h-px bg-secondary mb-4 transition-all duration-500 group-hover:w-14"></div>
                <h3 className="font-serif text-white text-2xl font-medium mb-2 group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;

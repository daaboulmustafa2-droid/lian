import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const WHATSAPP_LINK = 'https://wa.me/971569357355';

const Developers = () => {
  const { t } = useLanguage();

  const developers = [
    {
      name: 'EMAAR',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Emaar_logo.svg',
      bg: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'NAKHEEL',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Nakheel_logo.svg',
      bg: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'ALDAR',
      logo: null,
      bg: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'MERAAS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Meraas-logo.svg',
      bg: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'DAMAC',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Damac_logo.svg',
      bg: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'SOBHA REALTY',
      logo: null,
      bg: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'DUBAI HOLDING',
      logo: null,
      bg: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'AZIZI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Azizi-developments.png',
      bg: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="developers" className="py-24 lg:py-36 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-secondary text-[10px] tracking-[0.4em] uppercase font-semibold mb-4">
            {t.developers.tag}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-medium mb-5">
            {t.developers.title}
          </h2>
          <div className="w-14 h-px bg-secondary mx-auto mb-6"></div>
          <p className="text-white/55 text-sm max-w-xl mx-auto font-light leading-relaxed">
            {t.developers.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {developers.map((dev, index) => (
            <motion.div 
              key={dev.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              className="relative overflow-hidden group border border-secondary/20 hover:border-secondary transition-all duration-300 min-h-[180px] flex items-center justify-center"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${dev.bg}')` }}
              />
              <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-colors duration-500" />
              
              <div className="relative z-10 flex items-center justify-center p-6">
                {dev.logo ? (
                  <img 
                    src={dev.logo} 
                    alt={dev.name} 
                    className="max-h-[100px] max-w-[150px] w-auto object-contain"
                    style={{ filter: 'brightness(0) invert(1)' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                ) : null}
                <span 
                  className="text-white text-[13px] tracking-[0.3em] uppercase font-semibold text-center leading-relaxed"
                  style={{ display: dev.logo ? 'none' : 'block' }}
                >
                  {dev.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developers;

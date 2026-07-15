import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Developers = () => {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  const developers = [
    { name: 'EMAAR',         logo: '/logos/emaar.svg'         },
    { name: 'NAKHEEL',       logo: '/logos/nakheel.svg'       },
    { name: 'MERAAS',        logo: '/logos/meraas.svg'        },
    { name: 'DAMAC',         logo: '/logos/damac.svg'         },
    { name: 'SOBHA REALTY',  logo: '/logos/sobha.svg'         },
    { name: 'DUBAI HOLDING', logo: '/logos/dubai-holding.png' },
    { name: 'BINGHATTI',     logo: '/logos/binghatti.webp'    },
  ];

  // Double the list for infinite looping marquee
  const loopedDevelopers = [...developers, ...developers];

  return (
    <section id="developers" className="py-20 bg-[#070b10] border-t border-b border-secondary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 text-center">
        <p className="text-secondary text-[9px] tracking-[0.4em] uppercase font-semibold mb-2">
          {t.developers.tag}
        </p>
        <h3 className="font-serif text-white text-xl md:text-2xl font-light tracking-wide">
          {t.developers.title}
        </h3>
      </div>

      <div className="relative w-full overflow-hidden" dir="ltr">
        {/* Gradients for fading edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070b10] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070b10] to-transparent z-10" />

        {/* Marquee list */}
        <div className="flex w-max items-center gap-20 sm:gap-28 animate-ticker" style={{ willChange: 'transform' }}>
          {loopedDevelopers.map((dev, i) => (
            <div key={i} className="flex items-center justify-center shrink-0">
              <img
                src={dev.logo}
                alt={dev.name}
                style={{ height: '20px', width: 'auto' }}
                className="brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                }}
              />
              <span
                className="text-white/50 text-[10px] tracking-[0.3em] font-semibold uppercase"
                style={{ display: 'none' }}
              >
                {dev.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developers;

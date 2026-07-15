import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Developers = () => {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  //
  // Each SVG fills its bounding box differently.
  // EMAAR/NAKHEEL letterforms span ~100% of their viewBox height → they need a
  // smaller CSS height to appear the same visual size as DAMAC, whose rotated
  // content only fills ~65% of its 10-unit viewBox at any given CSS height.
  //
  // Target: all logos should display ink at approximately 13-14 px tall.
  //
  //
  // Mathematically calibrated heights based on visual area matching (~1800 sq px):
  // Wide logos (like DAMAC, R=8) need less height, while taller/stacked logos
  // (like DUBAI HOLDING, R=1.46) need more height so they all have the same visual weight.
  // We cropped the transparent padding from dubai-holding.png and binghatti.webp to make this perfect.
  //
  const developers = [
    { name: 'EMAAR',         logo: '/logos/emaar.svg',         h: 18 },
    { name: 'NAKHEEL',       logo: '/logos/nakheel.svg',       h: 18 },
    { name: 'MERAAS',        logo: '/logos/meraas.svg',        h: 24 }, // has 10% padding
    { name: 'DAMAC',         logo: '/logos/damac.svg',         h: 16 },
    { name: 'SOBHA REALTY',  logo: '/logos/sobha.svg',         h: 24 },
    { name: 'DUBAI HOLDING', logo: '/logos/dubai-holding.png', h: 36 },
    { name: 'BINGHATTI',     logo: '/logos/binghatti.webp',    h: 20 },
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
        <div className="flex w-max items-center gap-16 sm:gap-20 animate-ticker" style={{ willChange: 'transform' }}>
          {loopedDevelopers.map((dev, i) => (
            <div
              key={i}
              className="flex items-center justify-center shrink-0"
              style={{ width: '150px', height: '56px' }}
            >
              <img
                src={dev.logo}
                alt={dev.name}
                style={{ height: `${dev.h}px`, width: 'auto' }}
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

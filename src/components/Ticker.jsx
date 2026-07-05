import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Ticker = () => {
  const { t } = useLanguage();
  // Double the items to create seamless loop
  const items = [...t.ticker, ...t.ticker];

  return (
    <section className="bg-[#0a0a0a] border-t border-b border-secondary/20 overflow-hidden py-3">
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

        <div className="flex w-max animate-ticker">
          {items.map((item, i) => (
            <span key={i} className="flex items-center whitespace-nowrap">
              <span className="text-white/70 text-xs sm:text-sm px-5 py-1 font-light tracking-wide">
                {item}
              </span>
              <span className="text-secondary text-xs" aria-hidden="true">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ticker;

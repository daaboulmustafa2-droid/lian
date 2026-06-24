import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'NBC', url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/NBC_logo.svg' },
  { name: 'ABC', url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/ABC_logo.svg' },
  { name: 'Forbes', url: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Forbes_logo.svg' },
  { name: 'CNBC', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg' },
  { name: 'WSJ', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/WSJ_Logo-black.svg' },
];

const SocialProof = () => {
  return (
    <section className="py-16 bg-cream border-y border-primary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-shrink-0">
            <p className="font-heading font-black text-xs uppercase tracking-[0.3em] text-primary/40">
              كما ظهر في
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo) => (
              <img 
                key={logo.name}
                src={logo.url} 
                alt={logo.name}
                className="h-6 md:h-8 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { toggleLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-primary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#about" className="text-2xl font-heading font-black tracking-tighter text-primary">
            {t.nav.logo}<span className="text-secondary">.</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-x-12 text-xs font-bold uppercase tracking-widest text-primary/80">
          <a href="#about" className="hover:text-primary transition-colors">{t.nav.about}</a>
          <a href="#stats" className="hover:text-primary transition-colors">{t.nav.achievements}</a>
          <a href="#contact" className="hover:text-primary transition-colors">{t.nav.contact}</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="px-4 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full text-xs font-bold transition-all uppercase tracking-widest cursor-pointer"
          >
            {t.nav.langButton}
          </button>
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block px-6 py-2.5 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-premium text-center"
          >
            {t.nav.contact}
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

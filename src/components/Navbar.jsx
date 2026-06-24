import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-primary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-heading font-black tracking-tighter text-primary">
            اليان<span className="text-secondary">.</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-x-16 text-sm font-medium uppercase tracking-widest text-primary/80">
          <a href="#about" className="hover:text-primary transition-colors">من أنا</a>
          <a href="#stats" className="hover:text-primary transition-colors">الإنجازات</a>
          <a href="#contact" className="hover:text-primary transition-colors">احجز استشارتك</a>
        </div>

        <div className="flex items-center space-x-6 space-x-reverse">
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block px-6 py-2.5 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-premium text-center"
          >
            احجز استشارتك
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

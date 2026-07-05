import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { toggleLanguage, language, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(201,162,93,0.15)' : 'none',
        padding: isScrolled ? '14px 0' : '24px 0',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-serif text-secondary text-xl lg:text-2xl tracking-wide hover:opacity-75 transition-opacity duration-300"
        >
          {t.nav.logo}
        </a>

        {/* Nav Links */}
        <div
          className="hidden md:flex items-center gap-10"
          style={{ fontSize: '10px', letterSpacing: '0.22em' }}
        >
          {[
            { href: '#hero', label: t.nav.home },
            { href: '#stats', label: t.nav.achievements },
            { href: '#contact', label: t.nav.contact },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-white/65 hover:text-secondary transition-colors duration-300 uppercase font-medium"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Language Toggle + CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 border border-secondary/35 hover:border-secondary px-3 py-1.5 transition-all duration-300 cursor-pointer"
            style={{ fontSize: '10px', letterSpacing: '0.18em' }}
          >
            <span className={language === 'en' ? 'text-secondary font-semibold' : 'text-white/35'}>EN</span>
            <span className="text-white/20 mx-0.5">|</span>
            <span className={language === 'ar' ? 'text-secondary font-semibold' : 'text-white/35'}>AR</span>
          </button>

          <a
            href="#contact"
            className="hidden sm:block border border-secondary text-secondary px-5 py-2 uppercase font-medium hover:bg-secondary hover:text-primary transition-all duration-300"
            style={{ fontSize: '10px', letterSpacing: '0.2em' }}
          >
            {t.nav.contact}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

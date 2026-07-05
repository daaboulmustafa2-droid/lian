import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WHATSAPP_LINK = 'https://wa.me/971569357355';
const INSTAGRAM_LINK = 'https://www.instagram.com/propertybylian?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
const TIKTOK_LINK = 'https://www.tiktok.com/@property.by.lian';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.76a4.85 4.85 0 01-1.02-.07z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwdJdVudVJj5FjnDFd7HJgwRLrn0clozpVlumlNolVLDXWrn3rhMjmWGlp2h_tWoA03/exec';

const Contact = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', country: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setIsSubmitted(true);
    } catch (err) {
      setError(t.contact.errorText);
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass = "w-full bg-transparent border border-secondary/30 focus:border-secondary text-white placeholder-white/35 px-4 py-3.5 text-sm outline-none transition-colors duration-300 font-light";

  return (
    <section 
      id="contact" 
      className="py-24 lg:py-36 relative"
      style={{
        backgroundColor: '#0a0a0a',
        backgroundImage: "linear-gradient(rgba(10,10,10,0.75), rgba(10,10,10,0.85)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="w-full h-px bg-secondary/25 absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Contact Info Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-10"
          >
            <div>
              <h3 className="font-serif text-secondary text-2xl font-medium mb-1">
                {t.nav.logo}
              </h3>
              <p className="text-white/70 text-[10px] tracking-[0.3em] uppercase mb-6">
                {t.about.signatureTitle}
              </p>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                {t.contact.locationValue}
              </p>
              <div className="w-10 h-px bg-secondary/40 mt-6" />
            </div>

            <div className="space-y-6">
              <p className="text-secondary text-[10px] tracking-[0.4em] uppercase font-semibold">
                {t.contact.follow}
              </p>
              <div className="flex items-center gap-4">
                <motion.a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 border border-secondary/30 flex items-center justify-center text-white/60 hover:text-secondary hover:border-secondary transition-all duration-300"
                  title="Instagram"
                >
                  <InstagramIcon />
                </motion.a>
                <motion.a href={TIKTOK_LINK} target="_blank" rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 border border-secondary/30 flex items-center justify-center text-white/60 hover:text-secondary hover:border-secondary transition-all duration-300"
                  title="TikTok"
                >
                  <TikTokIcon />
                </motion.a>
                <motion.a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 border border-secondary/30 flex items-center justify-center text-white/60 hover:text-secondary hover:border-secondary transition-all duration-300"
                  title="WhatsApp"
                >
                  <WhatsAppIcon />
                </motion.a>
              </div>
            </div>

            <div className="space-y-5">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 border border-secondary/30 flex items-center justify-center text-secondary/60 group-hover:text-secondary group-hover:border-secondary transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-secondary/60 text-[9px] tracking-[0.3em] uppercase font-medium">{t.contact.phone}</p>
                  <p className="text-white text-sm font-light tracking-wide" dir="ltr">+971 56 935 7355</p>
                </div>
              </a>
              <a href="mailto:propertybylian@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 border border-secondary/30 flex items-center justify-center text-secondary/60 group-hover:text-secondary group-hover:border-secondary transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-secondary/60 text-[9px] tracking-[0.3em] uppercase font-medium">{t.contact.email}</p>
                  <p className="text-white text-sm font-light">propertybylian@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form Column — spans 2 cols */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-2 flex flex-col space-y-8"
          >
            <div>
              <p className="text-secondary text-[10px] tracking-[0.4em] uppercase font-semibold mb-3">
                {t.contact.title.replace('.', '')}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-medium mb-4">
                {t.contact.title}
              </h2>
              <div className="w-14 h-px bg-secondary mb-5" />
              <p className="text-white/50 text-sm font-light leading-relaxed max-w-lg">
                {t.contact.description}
              </p>
            </div>

            {isSubmitted ? (
              <div className="border border-secondary/30 p-10 flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 border border-secondary/30 flex items-center justify-center text-secondary">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-white text-2xl font-medium">{t.contact.successTitle}</h4>
                <p className="text-white/60 text-sm font-light max-w-sm">{t.contact.successText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder={t.contact.namePlaceholder}
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t.contact.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    dir="ltr"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder={t.contact.phonePlaceholder}
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                  dir="ltr"
                />
                <input
                  type="text"
                  name="country"
                  required
                  placeholder={t.contact.countryPlaceholder}
                  value={formData.country}
                  onChange={handleChange}
                  className={inputClass}
                />
                {error && (
                  <div className="border border-red-500/30 text-red-400 px-4 py-3 text-sm text-center font-light">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 bg-secondary text-primary font-semibold text-[11px] tracking-[0.3em] uppercase hover:bg-secondary/80 transition-colors duration-300 ${isLoading ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  {isLoading ? t.contact.sending : t.contact.submit}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>

      {/* Footer Copyright */}
      <div className="mt-20 border-t border-secondary/15 pt-10 text-center">
        <p className="text-white/25 text-[10px] tracking-[0.4em] uppercase font-light">
          {language === 'ar' ? '© 2026 اليان ديوانه العقارية. جميع الحقوق محفوظة.' : '© 2026 Lian Diwana. All rights reserved.'}
        </p>
      </div>
    </section>
  );
};

export default Contact;

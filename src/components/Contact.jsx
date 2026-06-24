import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/971569357355';
const INSTAGRAM_LINK = 'https://www.instagram.com/propertybylian?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
const TIKTOK_LINK = 'https://www.tiktok.com/@property.by.lian';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.76a4.85 4.85 0 01-1.02-.07z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// ⚠️ REPLACE THIS with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwdJdVudVJj5FjnDFd7HJgwRLrn0clozpVlumlNolVLDXWrn3rhMjmWGlp2h_tWoA03/exec';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setIsSubmitted(true);
    } catch (err) {
      setError('حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-off-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Details */}
          <div className="flex flex-col space-y-12">
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="font-heading text-4xl lg:text-6xl font-black text-primary uppercase"
              >
                تواصل <br /> <span className="text-secondary text-5xl lg:text-7xl">معنا.</span>
              </motion.h2>
              <p className="font-body text-xl text-primary/60 max-w-md leading-relaxed">
                اكتشف أفضل الفرص العقارية في الإمارات بخطوات بسيطة. تواصل معنا اليوم للحصول على استشارة مجانية مخصصة تلبي احتياجاتك .
              </p>
            </div>

            <div className="space-y-8">
              {/* Phone */}
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 space-x-reverse group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white shadow-premium flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">الهاتف</p>
                  <p className="text-xl font-heading font-bold text-primary tracking-tighter" dir="ltr">‎+971 56 935 7355</p>
                </div>
              </a>

              {/* Email */}
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 space-x-reverse group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white shadow-premium flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">البريد الإلكتروني</p>
                  <p className="text-xl font-heading font-bold text-primary tracking-tighter">propertybylian@gmail.com</p>
                </div>
              </a>

              {/* Location */}
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 space-x-reverse group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white shadow-premium flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">الموقع</p>
                  <p className="text-xl font-heading font-bold text-primary tracking-tighter">دبي، الإمارات العربية المتحدة</p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <p className="text-xs font-bold text-primary/40 uppercase tracking-[0.3em] mb-6">تابعنا على</p>
              <div className="flex items-center gap-6">
                <motion.a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 rounded-full bg-white shadow-premium flex items-center justify-center text-primary hover:text-secondary transition-colors duration-300"
                  title="Instagram"
                >
                  <InstagramIcon />
                </motion.a>
                <motion.a
                  href={TIKTOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 rounded-full bg-white shadow-premium flex items-center justify-center text-primary hover:text-secondary transition-colors duration-300"
                  title="TikTok"
                >
                  <TikTokIcon />
                </motion.a>
                <motion.a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 rounded-full bg-white shadow-premium flex items-center justify-center text-primary hover:text-secondary transition-colors duration-300"
                  title="WhatsApp"
                >
                  <WhatsAppIcon />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Lead Generation Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative rounded-[40px] shadow-premium bg-white p-10 lg:p-12 flex flex-col justify-center"
          >
            <div className="space-y-8">
              <h3 className="font-heading font-black text-3xl text-primary leading-tight">
                احجز استشارتك الآن
              </h3>
              
              {isSubmitted ? (
                <div className="bg-primary/5 p-8 rounded-2xl text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-primary">تم الإرسال بنجاح</h4>
                  <p className="font-body text-primary/60">سيتواصل معك أحد خبرائنا العقاريين قريباً لمساعدتك.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary/60 uppercase tracking-widest">الاسم الكامل</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required 
                      className="w-full bg-off-white border border-primary/10 rounded-xl px-5 py-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary/60 uppercase tracking-widest">البريد الإلكتروني</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      className="w-full bg-off-white border border-primary/10 rounded-xl px-5 py-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-left"
                      dir="ltr"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary/60 uppercase tracking-widest">رقم الهاتف</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                      className="w-full bg-off-white border border-primary/10 rounded-xl px-5 py-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-left"
                      dir="ltr"
                      placeholder="+971 56 935 7355"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary/60 uppercase tracking-widest">دولة الإقامة</label>
                    <input 
                      type="text" 
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required 
                      className="w-full bg-off-white border border-primary/10 rounded-xl px-5 py-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      placeholder="أدخل دولة الإقامة"
                    />
                  </div>
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm text-center">
                      {error}
                    </div>
                  )}
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className={`w-full py-5 mt-2 bg-primary text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-secondary transition-colors duration-300 shadow-premium ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? 'جاري الإرسال...' : 'إرسال الطلب'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Footer copyright */}
      <div className="mt-24 border-t border-primary/5 py-12 text-center">
        <p className="text-primary/30 text-xs font-medium uppercase tracking-[0.5em]">
          &copy; 2026 اليان العقارية. جميع الحقوق محفوظة.
        </p>
      </div>
    </section>
  );
};

export default Contact;

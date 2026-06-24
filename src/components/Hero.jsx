import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect: video container moves slightly slower than text
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="about" ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cream px-6 lg:px-12 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        
        {/* Right Side: Bold Typography (now logically right in RTL) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col space-y-8"
        >
          <div className="space-y-4">

            <motion.h1 
              className="font-heading text-6xl md:text-8xl lg:text-[100px] leading-[0.9] font-black tracking-tighter text-primary uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              اليان <br />
              <span className="text-secondary drop-shadow-sm">ديوانه</span><span className="text-secondary">.</span>
            </motion.h1>
          </div>
          
          {/* Catchy tagline */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
          >
            <p className="font-body text-2xl md:text-3xl font-bold text-primary leading-snug">
              استثمارك الصح، <span className="text-secondary">هدفك أقرب مما تتخيل.</span>
            </p>
            <p className="font-body text-base text-primary/55 max-w-md leading-relaxed">
              مستشار عقاري بدولة الإمارات العربية — أحوّل طموحك إلى أصول حقيقية تدوم.
            </p>
          </motion.div>
          

        </motion.div>

        {/* Left Side: Video (replaced interactive images) */}
        <motion.div 
          style={{ y, opacity }}
          className="lg:col-span-5 relative w-full aspect-[4/5] rounded-[40px] overflow-hidden shadow-premium group bg-secondary/5 flex items-center justify-center transition-all duration-700"
        >
          {/* Background Video */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          >
            <source src="/video/Video mp4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          

          
          <div className="absolute bottom-10 right-10 text-white z-20 text-right">
            <p className="font-heading font-black text-2xl uppercase tracking-tighter">دبي</p>
            <p className="font-medium text-sm text-secondary uppercase tracking-widest">المقر الرئيسي العالمي</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative subtle pulse */}
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;

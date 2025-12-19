'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Partnership() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  // Professional legal images - Replace these paths with your actual images
  const images = [
    {
      src: "/images/legal-1.jpg", // Replace with: Business handshake image
      alt: "Professional Business Partnership",
    },
    {
      src: "/images/legal-2.jpg", // Replace with: Legal team meeting image
      alt: "Legal Team Consultation",
    },
    {
      src: "/images/legal-3.jpg", // Replace with: Lawyer with documents image
      alt: "Legal Documentation",
    },
    {
      src: "/images/legal-4.jpg", // Replace with: Courtroom or office image
      alt: "Professional Legal Services",
    },
    {
      src: "/images/legal-5.jpg", // Replace with: Contract signing image
      alt: "Contract Agreement",
    },
    {
      src: "/images/legal-6.jpg", // Replace with: Law firm office image
      alt: "Modern Law Firm",
    },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="relative">
        {/* Continuous sliding animation */}
        <motion.div
          className="flex gap-6"
          animate={{
            x: isRTL ? [0, 1920] : [0, -1920], // Reverse direction for RTL
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Render images twice for seamless loop */}
          {[...images, ...images].map((image, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 h-64 rounded-lg shadow-xl relative overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image placeholder - will show gradient until real images are added */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-blue to-primary-dark">
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-center p-6">
                  <div>
                    <div className="text-6xl mb-3">🏛️</div>
                    <p className="text-sm font-medium">Replace with real image:</p>
                    <p className="text-xs mt-1 opacity-80">{image.src}</p>
                  </div>
                </div>
              </div>

              {/* Uncomment this when you add real images */}
              {/* <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="320px"
              /> */}

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Gradient overlay at bottom for text readability */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Image caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
                <p className="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

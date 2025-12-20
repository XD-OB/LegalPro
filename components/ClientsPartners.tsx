'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

// Configuration: Add your client/partner logos here
// Images should be placed in /public/images/clients/
const PARTNER_LOGOS = [
  '/images/clients/logo1.png',
  '/images/clients/logo2.png',
  '/images/clients/logo3.png',
  '/images/clients/logo4.png',
  '/images/clients/logo5.png',
  '/images/clients/logo6.png',
  '/images/clients/logo7.png',
  '/images/clients/logo8.png',
];

const USE_REAL_LOGOS = false; // Set to true when you have real logos

// Placeholder logo component
const PlaceholderLogo = ({ index }: { index: number }) => (
  <div className="flex items-center justify-center w-40 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg">
    <div className="text-center">
      <div className="text-3xl font-bold text-gray-400">LOGO</div>
      <div className="text-xs text-gray-400">{index + 1}</div>
    </div>
  </div>
);

export default function ClientsPartners() {
  const { t } = useLanguage();

  // Duplicate the logos array to create seamless infinite scroll
  const duplicatedLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-primary-dark">
            {t.clientsPartners.title}
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t.clientsPartners.subtitle}
          </p>
        </motion.div>

        {/* Infinite Auto-Scroll Carousel */}
        <div className="relative">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div className="overflow-hidden py-8">
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: [0, -50 * PARTNER_LOGOS.length + '%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                >
                  {USE_REAL_LOGOS ? (
                    <div className="relative w-40 h-24">
                      <Image
                        src={logo}
                        alt={`Partner ${(index % PARTNER_LOGOS.length) + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <PlaceholderLogo index={index % PARTNER_LOGOS.length} />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Optional: Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-gold mb-2">50+</div>
            <div className="text-gray-600">{t.clientsPartners.stats.clients}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-gold mb-2">15+</div>
            <div className="text-gray-600">{t.clientsPartners.stats.partners}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-gold mb-2">10+</div>
            <div className="text-gray-600">{t.clientsPartners.stats.experience}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-gold mb-2">100%</div>
            <div className="text-gray-600">{t.clientsPartners.stats.trust}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

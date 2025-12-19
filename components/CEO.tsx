'use client';

import { motion } from 'framer-motion';
import { Award, Users, Scale } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

// ============================================
// CEO IMAGE CONFIGURATION
// ============================================
// To change the CEO image, replace the path below with your image file
// Place your image in: /public/images/ceo/
// Recommended: Use a professional portrait in 3:4 aspect ratio (e.g., 600x800px)
// Supported formats: .jpg, .png, .webp
// Example: "/images/ceo/founder-portrait.jpg"
const CEO_IMAGE_PATH = "/images/ceo/founder.jpg";

// Set to true once you've added your CEO image
// Set to false to show placeholder
const USE_REAL_IMAGE = false;
// ============================================

const statIcons = [Award, Users, Scale];

export default function CEO() {
  const { t } = useLanguage();

  return (
    <section id="ceo" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[3/4]">
              {USE_REAL_IMAGE ? (
                // Real CEO Image
                <Image
                  src={CEO_IMAGE_PATH}
                  alt={t.ceo.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              ) : (
                // Placeholder
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">JD</span>
                    </div>
                    <p className="text-gray-500 text-sm">(Replace with actual CEO image)</p>
                    <p className="text-gray-400 text-xs mt-2">Edit CEO_IMAGE_PATH in components/CEO.tsx</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span className="border border-primary-dark text-primary-dark px-6 py-2 rounded-full text-sm tracking-wider">
                {t.ceo.title}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-primary-dark">
              {t.ceo.name}
            </h2>

            <p className="text-primary-gold text-xl font-semibold mb-6">{t.ceo.position}</p>

            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>{t.ceo.bio}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {t.ceo.stats.map((stat, index) => {
                const Icon = statIcons[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-primary-gold bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-primary-gold" />
                    </div>
                    <div className="text-3xl font-bold text-primary-dark mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

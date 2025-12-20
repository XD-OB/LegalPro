'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Configuration: Set paths to formation images
// Images should be 400x300px or similar aspect ratio for best results
const FORMATION_IMAGES = [
  '/images/formations/lilmokawil.jpg',    // LILMOKAWIL
  '/images/formations/lexpert.jpg',        // L'EXPERT
  '/images/formations/lcomptable.jpg',     // L'COMPTABLE
  '/images/formations/lauditeur.jpg',      // L'AUDITEUR
];

const USE_REAL_IMAGES = false; // Set to true when you have real images

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function FormationCard({ formation, index }: { formation: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 300,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 20,
  });

  const imageScale = useSpring(1, {
    stiffness: 300,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    imageScale.set(1.1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    imageScale.set(1);
  };

  return (
    <Link href={`/formations/${formation.slug}`}>
      <motion.div
        ref={cardRef}
        variants={itemVariants}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          y: -10,
          boxShadow: '0 25px 50px rgba(201, 160, 85, 0.2)',
          transition: { duration: 0.3 }
        }}
        className="bg-white rounded-lg shadow-md transition-shadow duration-300 relative overflow-hidden group cursor-pointer"
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 via-transparent to-primary-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ transform: 'translateZ(-10px)' }}
        />

        {/* Image container with 3D effect */}
        <motion.div
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(20px)',
          }}
          className="relative w-full h-48 overflow-hidden rounded-t-lg z-10"
        >
          {USE_REAL_IMAGES ? (
            <motion.div
              style={{ scale: imageScale }}
              className="w-full h-full"
            >
              <Image
                src={FORMATION_IMAGES[index]}
                alt={formation.title}
                fill
                className="object-cover"
              />
            </motion.div>
          ) : (
            <motion.div
              style={{ scale: imageScale }}
              className="w-full h-full bg-gradient-to-br from-primary-gold/20 to-primary-dark/20 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-6xl mb-2">📚</div>
                <p className="text-sm text-gray-600 font-semibold">Formation Image</p>
              </div>
            </motion.div>
          )}

          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-primary-gold opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ transform: 'translateZ(20px)' }}
          className="relative z-10 p-6"
        >
          <h3 className="text-xl font-semibold mb-3 text-primary-dark group-hover:text-primary-gold transition-colors duration-300">
            {formation.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">{formation.description}</p>
        </motion.div>

        {/* Decorative corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-primary-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{
            clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
            transform: 'translateZ(5px)',
          }}
        />
      </motion.div>
    </Link>
  );
}

export default function Formations() {
  const { t } = useLanguage();
  const formationCount = t.formations.items.length;

  // Dynamic grid classes based on number of formations
  // Less than 5: display in one line on large screens, 2 per line on medium
  // 5 or more: keep standard 3-column grid
  const getGridClasses = () => {
    if (formationCount < 5) {
      // For 4 or fewer items: 1 column mobile, 2 columns tablet, all in one row on desktop
      return `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${formationCount} gap-8`;
    } else {
      // For 5+ items: standard 3-column grid
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
    }
  };

  return (
    <section id="formations" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-primary-dark">
            {t.formations.title}
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t.formations.subtitle}
          </p>
        </motion.div>

        {/* Formations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={getGridClasses()}
          style={{ perspective: '1000px' }}
        >
          {t.formations.items.map((formation, index) => (
            <FormationCard
              key={index}
              formation={formation}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

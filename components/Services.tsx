'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Briefcase, FileText, Building2, Shield, Gavel, Copyright } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useRef } from 'react';

const serviceIcons = [Briefcase, FileText, Building2, Shield, Gavel, Copyright];

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

function ServiceCard({ service, Icon, index }: { service: any; Icon: any; index: number }) {
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

  const iconX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 150,
    damping: 15,
  });
  const iconY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), {
    stiffness: 150,
    damping: 15,
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

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
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
      className="bg-white p-8 rounded-lg shadow-md transition-shadow duration-300 relative overflow-hidden group cursor-pointer"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 via-transparent to-primary-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ transform: 'translateZ(-10px)' }}
      />

      {/* Icon container with 3D effect */}
      <motion.div
        style={{
          x: isHovered ? iconX : 0,
          y: isHovered ? iconY : 0,
          transformStyle: 'preserve-3d',
          transform: 'translateZ(40px)',
        }}
        className="relative bg-primary-gold bg-opacity-10 w-20 h-20 rounded-lg flex items-center justify-center mb-6 mx-auto z-10"
      >
        <motion.div
          animate={isHovered ? {
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          } : {
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-10 h-10 text-primary-gold" />
        </motion.div>

        {/* Floating particles */}
        <motion.div
          className="absolute inset-0"
          animate={isHovered ? {
            opacity: [0, 1, 0],
            scale: [0.8, 1.5, 2],
          } : {
            opacity: 0,
            scale: 0.8,
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "easeOut",
          }}
        >
          <div className="absolute top-0 left-0 w-2 h-2 bg-primary-gold rounded-full" />
          <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-primary-gold rounded-full" />
          <div className="absolute bottom-0 left-0 w-1 h-1 bg-primary-gold rounded-full" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary-gold rounded-full" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div style={{ transform: 'translateZ(20px)' }} className="relative z-10">
        <h3 className="text-xl font-semibold mb-4 text-primary-dark group-hover:text-primary-gold transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
  );
}

export default function Services() {
  const { t } = useLanguage();
  const serviceCount = t.services.items.length;

  // Dynamic grid classes based on number of services
  // Less than 5: display in one line on large screens, 2 per line on medium
  // 5 or more: keep standard 3-column grid
  const getGridClasses = () => {
    if (serviceCount < 5) {
      // For 4 or fewer items: 1 column mobile, 2 columns tablet, all in one row on desktop
      return `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${serviceCount} gap-8`;
    } else {
      // For 5+ items: standard 3-column grid
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
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
            {t.services.title}
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={getGridClasses()}
          style={{ perspective: '1000px' }}
        >
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <ServiceCard
                key={index}
                service={service}
                Icon={Icon}
                index={index}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

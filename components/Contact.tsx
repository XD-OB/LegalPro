'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Map Configuration - Change these coordinates to update the map location
const MAP_CONFIG = {
  latitude: 33.5731,  // Casablanca, Morocco
  longitude: -7.5898,
  zoom: 15,
};

function ContactInfoCard({ icon: Icon, title, value, index }: { icon: any; title: string; value: string; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 20,
  });

  const iconX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 15,
  });
  const iconY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), {
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{
        y: -5,
        boxShadow: '0 20px 40px rgba(201, 160, 85, 0.15)',
        transition: { duration: 0.3 }
      }}
      className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4 relative overflow-hidden group cursor-pointer"
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
          transform: 'translateZ(30px)',
        }}
        className="bg-primary-gold bg-opacity-10 p-3 rounded-lg relative z-10"
      >
        <motion.div
          animate={isHovered ? {
            scale: [1, 1.15, 1],
            rotate: [0, 10, -10, 0],
          } : {
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-6 h-6 text-primary-gold" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div style={{ transform: 'translateZ(20px)' }} className="relative z-10 flex-1">
        <h3 className="font-bold text-lg mb-1 text-primary-dark group-hover:text-primary-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 whitespace-pre-line">{value}</p>
      </motion.div>

      {/* Decorative corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-16 h-16 bg-primary-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          transform: 'translateZ(5px)',
        }}
      />
    </motion.div>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert(t.contact.form.successMessage);
    setFormData({ fullName: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
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
            {t.contact.title}
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.nameLabel}
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={t.contact.form.namePlaceholder}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.form.emailPlaceholder}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.form.messagePlaceholder}
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-gold text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                {t.contact.form.submitButton}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6" style={{ perspective: '1000px' }}>
              <ContactInfoCard
                icon={Phone}
                title={t.contact.info.phone}
                value={t.contact.info.phoneValue}
                index={0}
              />
              <ContactInfoCard
                icon={Mail}
                title={t.contact.info.email}
                value={t.contact.info.emailValue}
                index={1}
              />
              <ContactInfoCard
                icon={MapPin}
                title={t.contact.info.address}
                value={t.contact.info.addressValue}
                index={2}
              />
            </div>

            {/* Google Maps Integration */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-4 text-primary-dark">{t.contact.info.locationTitle}</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.google.com/maps?q=${MAP_CONFIG.latitude},${MAP_CONFIG.longitude}&hl=en&z=${MAP_CONFIG.zoom}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

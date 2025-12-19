'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function LegalDivider() {
  const gavelRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const gavelX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), {
    stiffness: 150,
    damping: 20,
  });
  const gavelY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!gavelRef.current) return;
    const rect = gavelRef.current.getBoundingClientRect();
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
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary-dark via-primary-blue to-primary-dark overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="legal-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <motion.path
                d="M 50 10 L 60 30 L 40 30 Z M 50 40 L 50 70 M 40 80 L 60 80"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#legal-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {/* Animated Scale of Justice */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-2xl"
            >
              {/* Base */}
              <motion.rect
                x="85"
                y="180"
                width="30"
                height="8"
                rx="2"
                fill="#c9a055"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />

              {/* Pole */}
              <motion.line
                x1="100"
                y1="40"
                x2="100"
                y2="180"
                stroke="#c9a055"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />

              {/* Crossbar */}
              <motion.line
                x1="40"
                y1="50"
                x2="160"
                y2="50"
                stroke="#c9a055"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />

              {/* Left chain */}
              <motion.line
                x1="50"
                y1="50"
                x2="50"
                y2="90"
                stroke="#c9a055"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />

              {/* Right chain */}
              <motion.line
                x1="150"
                y1="50"
                x2="150"
                y2="90"
                stroke="#c9a055"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />

              {/* Left pan */}
              <motion.g
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: [0, -5, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: 1 },
                  y: { duration: 2, delay: 1.2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <ellipse cx="50" cy="95" rx="25" ry="8" fill="#c9a055" />
                <path d="M 25 95 L 30 110 L 70 110 L 75 95" fill="#c9a055" stroke="#0f1e2e" strokeWidth="2" />
              </motion.g>

              {/* Right pan */}
              <motion.g
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: [0, 5, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: 1 },
                  y: { duration: 2, delay: 1.2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <ellipse cx="150" cy="95" rx="25" ry="8" fill="#c9a055" />
                <path d="M 125 95 L 130 110 L 170 110 L 175 95" fill="#c9a055" stroke="#0f1e2e" strokeWidth="2" />
              </motion.g>

              {/* Top decoration */}
              <motion.circle
                cx="100"
                cy="35"
                r="8"
                fill="#c9a055"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              />
            </svg>
          </motion.div>

          {/* Animated Text Elements */}
          <div className="text-center max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Animated line */}
              <div className="flex items-center justify-center gap-4">
                <motion.div
                  className="h-0.5 bg-primary-gold flex-1 max-w-[100px]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
                <motion.div
                  className="w-3 h-3 bg-primary-gold rotate-45"
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 45 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
                <motion.div
                  className="h-0.5 bg-primary-gold flex-1 max-w-[100px]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white font-playfair">
                Justice, Integrity, Excellence
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                Built on the pillars of trust and dedication to serve your legal needs
              </p>
            </motion.div>
          </div>

          {/* Animated Gavel */}
          <motion.div
            ref={gavelRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative cursor-pointer"
            style={{
              x: gavelX,
              y: gavelY,
            }}
          >
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-2xl"
            >
              {/* Gavel head */}
              <motion.g
                animate={{ rotate: [-45, -35, -45] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                style={{ transformOrigin: '80px 80px' }}
              >
                <rect
                  x="50"
                  y="60"
                  width="60"
                  height="25"
                  rx="4"
                  fill="#c9a055"
                  stroke="#0f1e2e"
                  strokeWidth="2"
                />
                <rect
                  x="75"
                  y="85"
                  width="10"
                  height="50"
                  rx="2"
                  fill="#c9a055"
                  stroke="#0f1e2e"
                  strokeWidth="2"
                />
              </motion.g>

              {/* Sound block */}
              <motion.ellipse
                cx="140"
                cy="140"
                rx="35"
                ry="12"
                fill="#c9a055"
                stroke="#0f1e2e"
                strokeWidth="2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
              />

              {/* Impact waves */}
              <motion.g>
                {[0, 1, 2].map((i) => (
                  <motion.circle
                    key={i}
                    cx="140"
                    cy="140"
                    r="40"
                    stroke="#c9a055"
                    strokeWidth="2"
                    fill="none"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1.5],
                      opacity: [0.8, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1.5 + i * 0.3,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </motion.g>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-gold rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}

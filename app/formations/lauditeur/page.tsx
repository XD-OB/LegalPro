'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { ArrowLeft, FileSearch, BookOpen, Award, Target, CheckCircle, Briefcase, Shield } from 'lucide-react';
import { useState } from 'react';

// Static data that doesn't change across languages
const sectionColors = [
  "from-purple-600 to-purple-700",
  "from-indigo-600 to-indigo-700",
  "from-blue-600 to-blue-700",
  "from-cyan-600 to-cyan-700",
  "from-teal-600 to-teal-700",
  "from-green-600 to-green-700"
];

export default function LauditeurPage() {
  const { t, isRTL } = useLanguage();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Get translated program data
  const programData = t.formationLauditeur;

  const toggleSection = (sectionIndex: number) => {
    const sectionId = `section-${sectionIndex}`;
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary-dark to-primary-blue text-white py-24 overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary-gold rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-blue rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/#formations"
            className="inline-flex items-center gap-2 text-primary-gold hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            {t.formationCommon.backToFormations}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-start gap-6 mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-primary-gold bg-opacity-20 backdrop-blur-sm w-24 h-24 rounded-2xl flex items-center justify-center border-2 border-primary-gold"
              >
                <FileSearch className="w-12 h-12 text-primary-gold" />
              </motion.div>
              <div className="flex-1">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl md:text-6xl font-bold mb-4 font-playfair"
                >
                  L'AUDITEUR
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-200 leading-relaxed"
                >
                  {programData.title}
                </motion.p>
              </div>
            </div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
                <Shield className="w-8 h-8 text-primary-gold mb-3" />
                <p className="text-3xl font-bold mb-1">6</p>
                <p className="text-gray-300">{t.formationCommon.mainModules}</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
                <BookOpen className="w-8 h-8 text-primary-gold mb-3" />
                <p className="text-3xl font-bold mb-1">ISA</p>
                <p className="text-gray-300">{t.formationCommon.internationalStandards}</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
                <Award className="w-8 h-8 text-primary-gold mb-3" />
                <p className="text-3xl font-bold mb-1">Cas Réel</p>
                <p className="text-gray-300">{t.formationCommon.professionalPractice}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Program Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Objectifs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-br from-primary-gold/10 to-primary-blue/10 rounded-2xl p-8 md:p-12 border-2 border-primary-gold/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-dark font-playfair flex items-center gap-3">
                <Target className="w-10 h-10 text-primary-gold" />
                {t.formationCommon.objectives.toUpperCase()}
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {programData.objectifs.intro}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {programData.objectifs.formation}
              </p>

              <div className="space-y-4">
                {programData.objectifs.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-gold flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Programme Sections - All in ONE Card */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-center mb-4 text-primary-dark font-playfair">
              {t.formationCommon.program}
            </h2>
            <div className="w-24 h-1 bg-primary-gold mx-auto mb-12"></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Single Card Header */}
              <div className="bg-gradient-to-r from-primary-dark to-primary-blue text-white rounded-t-2xl p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold font-playfair">
                  {t.formationCommon.trainingModules}
                </h3>
                <p className="text-white/90 text-lg mt-2">
                  {t.formationCommon.completeProgramAudit}
                </p>
              </div>

              {/* All Sections in One Card Body */}
              <div className="bg-white rounded-b-2xl shadow-xl overflow-hidden">
                {programData.sections.map((section, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <button
                      onClick={() => toggleSection(index)}
                      className={`w-full p-6 md:p-8 hover:bg-gray-50 transition-colors group ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        {/* Arrow - appears on left in RTL */}
                        {isRTL && (
                          <motion.div
                            animate={{
                              rotate: expandedSection === `section-${index}` ? 180 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="text-primary-gold flex-shrink-0"
                          >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </motion.div>
                        )}

                        {/* Title */}
                        <div className="flex-1">
                          <h4 className={`text-xl font-semibold text-primary-dark mb-2 group-hover:text-primary-gold transition-colors ${isRTL ? 'text-right' : ''}`}>
                            {section.title}
                          </h4>
                        </div>

                        {/* Arrow - appears on right in LTR */}
                        {!isRTL && (
                          <motion.div
                            animate={{
                              rotate: expandedSection === `section-${index}` ? 180 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="text-primary-gold flex-shrink-0"
                          >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </motion.div>
                        )}
                      </div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedSection === `section-${index}` ? "auto" : 0,
                        opacity: expandedSection === `section-${index}` ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 md:px-8 pb-6 md:pb-8 bg-gray-50 ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                        {section.description ? (
                          <p className="text-gray-700 text-lg leading-relaxed">{section.description}</p>
                        ) : (
                          <ul className="space-y-3">
                            {section.items?.map((item, itemIndex) => (
                              <li key={itemIndex} className={`flex items-start gap-3 text-gray-700 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <div className="w-1.5 h-1.5 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-lg">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary-dark to-primary-blue text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-gold rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-gold rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <Briefcase className="w-16 h-16 text-primary-gold mx-auto mb-6" />
                <h3 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
                  {programData.ctaTitle}
                </h3>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  {programData.ctaText}
                </p>
                <Link
                  href="/#contact"
                  className="inline-block bg-primary-gold text-primary-dark px-10 py-4 rounded-xl hover:bg-opacity-90 transition-all font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  {t.formationCommon.contactNow}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

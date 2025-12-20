'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock, Award, Target, Briefcase, CheckCircle, Calendar, DollarSign } from 'lucide-react';
import { useState } from 'react';

export default function LexpertPage() {
  const { t, isRTL } = useLanguage();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Get translated program data
  const programData = t.formationLexpert;

  const toggleSection = (sectionId: string) => {
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
                <BookOpen className="w-12 h-12 text-primary-gold" />
              </motion.div>
              <div className="flex-1">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl md:text-6xl font-bold mb-4 font-playfair"
                >
                  L'EXPERT
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-200 leading-relaxed"
                >
                  {programData.subtitle}
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
                <Clock className="w-8 h-8 text-primary-gold mb-3" />
                <p className="text-3xl font-bold mb-1">{programData.totalHours}h</p>
                <p className="text-gray-300">{programData.stats.totalDuration}</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
                <BookOpen className="w-8 h-8 text-primary-gold mb-3" />
                <p className="text-3xl font-bold mb-1">2</p>
                <p className="text-gray-300">{programData.stats.uesPrepared}</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
                <Award className="w-8 h-8 text-primary-gold mb-3" />
                <p className="text-3xl font-bold mb-1">DSCG</p>
                <p className="text-gray-300">{programData.stats.targetDiploma}</p>
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
                {t.formationCommon.objectives}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {programData.objectifsIntro}
              </p>
              <div className="space-y-4">
                {programData.objectifs.map((objectif, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-gold flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">{objectif}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* UE1 Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-t-2xl p-6 md:p-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 font-playfair">
                      {programData.ue1.title}
                    </h3>
                    <p className="text-white/90 text-lg mb-3">
                      {programData.ue1.duration}
                    </p>
                    <div className="inline-block bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30">
                      <p className="text-xs text-white/80 mb-1">{t.formationCommon.pricing}</p>
                      <p className="text-2xl font-bold text-white">{programData.pricing.ue1}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-b-2xl shadow-xl overflow-hidden">
                {programData.ue1.parties.map((partie, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <button
                      onClick={() => toggleSection(`ue1-${index}`)}
                      className={`w-full p-6 md:p-8 hover:bg-gray-50 transition-colors group ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        {/* Arrow - appears on left in RTL */}
                        {isRTL && (
                          <motion.div
                            animate={{
                              rotate: expandedSection === `ue1-${index}` ? 180 : 0
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
                            {partie.title}
                          </h4>
                        </div>

                        {/* Duration - appears between title and arrow */}
                        {partie.duration && (
                          <div className={`flex items-center gap-4 text-sm text-gray-600 flex-shrink-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <span className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                              <Clock className="w-4 h-4" />
                              {partie.duration}
                            </span>
                          </div>
                        )}

                        {/* Arrow - appears on right in LTR */}
                        {!isRTL && (
                          <motion.div
                            animate={{
                              rotate: expandedSection === `ue1-${index}` ? 180 : 0
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
                        height: expandedSection === `ue1-${index}` ? "auto" : 0,
                        opacity: expandedSection === `ue1-${index}` ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 md:px-8 pb-6 md:pb-8 bg-gray-50 ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                        {partie.description && <p className="text-gray-700 mb-4">{partie.description}</p>}
                        {partie.topics && (
                          <ul className="space-y-3">
                            {partie.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className={`flex items-start gap-3 text-gray-700 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <div className="w-1.5 h-1.5 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {partie.subtopics && (
                          <ul className={`space-y-3 mt-4 ${isRTL ? 'mr-4' : 'ml-4'}`}>
                            {partie.subtopics.map((subtopic, subIndex) => (
                              <li key={subIndex} className={`flex items-start gap-3 text-gray-700 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <CheckCircle className="w-4 h-4 text-primary-gold mt-1 flex-shrink-0" />
                                <span>{subtopic}</span>
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

          {/* UE4 Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-2xl p-6 md:p-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 font-playfair">
                      {programData.ue4.title}
                    </h3>
                    <p className="text-white/90 text-lg mb-2">
                      {programData.ue4.duration}
                    </p>
                    <p className="text-white/80 text-sm mb-3">
                      {programData.ue4.description}
                    </p>
                    <div className="inline-block bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30">
                      <p className="text-xs text-white/80 mb-1">{t.formationCommon.pricing}</p>
                      <p className="text-2xl font-bold text-white">{programData.pricing.ue4}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-b-2xl shadow-xl overflow-hidden">
                {programData.ue4.parties.map((partie, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <button
                      onClick={() => toggleSection(`ue4-${index}`)}
                      className={`w-full p-6 md:p-8 hover:bg-gray-50 transition-colors group ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        {/* Arrow - appears on left in RTL */}
                        {isRTL && (
                          <motion.div
                            animate={{
                              rotate: expandedSection === `ue4-${index}` ? 180 : 0
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
                            {partie.title}
                          </h4>
                        </div>

                        {/* Duration - appears between title and arrow */}
                        <div className={`flex items-center gap-4 text-sm text-gray-600 flex-shrink-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <span className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <Clock className="w-4 h-4" />
                            {partie.duration}
                          </span>
                        </div>

                        {/* Arrow - appears on right in LTR */}
                        {!isRTL && (
                          <motion.div
                            animate={{
                              rotate: expandedSection === `ue4-${index}` ? 180 : 0
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
                        height: expandedSection === `ue4-${index}` ? "auto" : 0,
                        opacity: expandedSection === `ue4-${index}` ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 md:px-8 pb-6 md:pb-8 bg-gray-50 ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                        <p className="text-gray-700 mb-4">{partie.description}</p>
                        {partie.topics && (
                          <ul className="space-y-3">
                            {partie.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className={`flex items-start gap-3 text-gray-700 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <div className="w-1.5 h-1.5 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                                <span>{topic}</span>
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

          {/* Préparation Intensive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 border-2 border-amber-200">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-dark font-playfair flex items-center gap-3">
                <Calendar className="w-10 h-10 text-amber-600" />
                {programData.preparationIntensive.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {programData.preparationIntensive.description}
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-semibold text-primary-dark">{programData.preparationIntensive.practicalNotes}</h3>
                {programData.preparationIntensive.reperes.map((repere, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-amber-200">
                    <p className="font-semibold text-primary-dark mb-1">{repere.ue}</p>
                    <p className="text-gray-600">{repere.details}</p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-100 rounded-lg p-4 mb-4">
                <p className="font-semibold text-amber-900 mb-2">{programData.preparationIntensive.summerDates}</p>
                <p className="text-amber-800">{programData.preparationIntensive.dates}</p>
              </div>

              <p className="text-sm text-gray-600 italic">
                {programData.preparationIntensive.note}
              </p>
            </div>
          </motion.div>

          {/* Pricing Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-br from-primary-gold/5 via-white to-primary-blue/5 rounded-2xl p-8 md:p-12 border-2 border-primary-gold/30 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-dark font-playfair text-center flex items-center justify-center gap-3">
                <DollarSign className="w-10 h-10 text-primary-gold" />
                {programData.pricingTitle}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border-2 border-emerald-200 hover:border-emerald-400 transition-colors">
                  <h3 className="text-2xl font-bold text-primary-dark mb-2">UE1</h3>
                  <p className="text-gray-600 mb-4">{programData.ue1Label}</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-primary-gold">{programData.pricing.ue1}</span>
                  </div>
                  <p className="text-sm text-gray-500">{programData.ue1Duration}</p>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-colors">
                  <h3 className="text-2xl font-bold text-primary-dark mb-2">UE4</h3>
                  <p className="text-gray-600 mb-4">{programData.ue4Label}</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-primary-gold">{programData.pricing.ue4}</span>
                  </div>
                  <p className="text-sm text-gray-500">{programData.ue4Duration}</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary-gold/10 rounded-lg border border-primary-gold/30">
                <p className="text-center text-gray-700">
                  {programData.completeTraining}
                </p>
              </div>
            </div>
          </motion.div>

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

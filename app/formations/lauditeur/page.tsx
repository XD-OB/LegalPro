'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { ArrowLeft, FileSearch, Clock, BookOpen, Award, Target, CheckCircle, Briefcase, FileText, Shield } from 'lucide-react';
import { useState } from 'react';

const programData = {
  title: "AUDIT COMPTABLE ET FINANCIER",
  objectifs: {
    intro: "Dans un environnement où le contrôle des risques et la fiabilité des états financiers sont au premier plan des préoccupations des décideurs, la maîtrise des outils et des techniques d'audit s'impose aux différents acteurs de l'univers comptable et fiscal. En effet, maîtriser la démarche et les outils de l'audit permet de mieux appréhender un audit externe, soit de réaliser des missions d'audit de façon autonome.",
    formation: "Le centre de formation ANDERSEN PARTNERS & CO, leader dans la formation des progicist et des métiers, organise une formation au métier de «Audit comptable et financier» le but de cette formation est d'être capable de :",
    points: [
      "Maîtriser les techniques et les outils de l'audit comptable et financier.",
      "D'émettre une opinion sur la qualité de l'information financière produite par l'entreprise auditée.",
      "Connaître le cadre légal de la fonction d'auditeur financier.",
      "Établir les notes de synthèse et élaboration des rapports d'audit."
    ]
  },
  sections: [
    {
      title: "LES CONCEPTS FONDAMENTAUX DE L'AUDIT",
      color: "from-purple-600 to-purple-700",
      items: [
        "Définitions de l'audit.",
        "Les objectifs ou les assertions d'audit.",
        "Les normes d'audit.",
        "Le cadre conceptuel des missions d'audit.",
        "Le risque d'audit et la matérialité."
      ]
    },
    {
      title: "LA DEMARCHE DE L'AUDIT FINANCIER",
      color: "from-indigo-600 to-indigo-700",
      items: [
        "Présentation de l'approche d'audit.",
        "Prise de connaissance de l'entreprise et travaux préparatoires",
        "Évaluation du contrôle interne et élaboration de la stratégie d'audit.",
        "Exécution des contrôles substantiels.",
        "Travaux de fin de mission."
      ]
    },
    {
      title: "LES TECHNIQUES D'AUDIT",
      color: "from-blue-600 to-blue-700",
      items: [
        "Les procédures analytiques ISA 520.",
        "Les procédures analytiques ISA 520.",
        "Confirmation directe ou circularisations ISA 505.",
        "Les dossiers et feuilles de travail ISA 230."
      ]
    },
    {
      title: "CAS PRATIQUE",
      color: "from-cyan-600 to-cyan-700",
      description: "Traitement d'un dossier pratique d'une mission d'audit comptable et financier (Cas réel)"
    },
    {
      title: "NOTES DE SYNTHESE",
      color: "from-teal-600 to-teal-700",
      description: "Modèles de notes de synthèse dans lesquelles vous commentez et analysez les données collectées et les variations calculées en exprimant avec un style et formule professionnels les risques et anomalies soulevés."
    },
    {
      title: "RAPPORT D'AUDIT",
      color: "from-green-600 to-green-700",
      items: [
        "Comment formuler les recommandations et les actions correctives à mettre en œuvre ?",
        "Modèles de rapports d'audit contractuel et légal."
      ]
    }
  ]
};

export default function LauditeurPage() {
  const { t } = useLanguage();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

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
            Retour aux Formations
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
                <p className="text-gray-300">Modules principaux</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
                <BookOpen className="w-8 h-8 text-primary-gold mb-3" />
                <p className="text-3xl font-bold mb-1">ISA</p>
                <p className="text-gray-300">Normes internationales</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
                <Award className="w-8 h-8 text-primary-gold mb-3" />
                <p className="text-3xl font-bold mb-1">Cas Réel</p>
                <p className="text-gray-300">Pratique professionnelle</p>
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
                OBJECTIFS DE LA FORMATION
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
              Programme de Formation
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
                  Modules de Formation
                </h3>
                <p className="text-white/90 text-lg mt-2">
                  Programme complet d'audit comptable et financier
                </p>
              </div>

              {/* All Sections in One Card Body */}
              <div className="bg-white rounded-b-2xl shadow-xl overflow-hidden">
                {programData.sections.map((section, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full p-6 md:p-8 hover:bg-gray-50 transition-colors text-left group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-primary-dark mb-2 group-hover:text-primary-gold transition-colors">
                            {section.title}
                          </h4>
                        </div>
                        <motion.div
                          animate={{
                            rotate: expandedSection === `section-${index}` ? 180 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="text-primary-gold"
                        >
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
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
                      <div className="px-6 md:px-8 pb-6 md:pb-8 bg-gray-50">
                        {section.description ? (
                          <p className="text-gray-700 text-lg leading-relaxed">{section.description}</p>
                        ) : (
                          <ul className="space-y-3">
                            {section.items?.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3 text-gray-700">
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
                  Prêt à Devenir Auditeur Professionnel ?
                </h3>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Rejoignez notre formation L'AUDITEUR et maîtrisez les techniques d'audit comptable et financier conformes aux normes internationales ISA.
                  Contactez-nous pour plus d'informations sur les inscriptions et les prochaines sessions.
                </p>
                <Link
                  href="/#contact"
                  className="inline-block bg-primary-gold text-primary-dark px-10 py-4 rounded-xl hover:bg-opacity-90 transition-all font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Contactez-Nous Maintenant
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

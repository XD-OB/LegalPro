'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock, Award, Target, Briefcase, CheckCircle, Calendar, DollarSign } from 'lucide-react';
import { useState } from 'react';

const programData = {
  totalHours: 104,
  objectifs: [
    "Accompagner nos apprenants vers la réussite au DSCG",
    "Renforcer le niveau dans les UE les plus difficiles du DSCG",
    "Préparer aux UE qui ne donnent pas lieu à une dispense pour les diplômés de masters"
  ],
  pricing: {
    ue1: "15,390 DH",
    ue4: "13,980 DH",
    description: "Tarifs pour les formations"
  },
  ue1: {
    title: "UE1 - Gestion juridique, fiscale et sociale",
    duration: "57h de cours en présentiel et 4h d'examen à distance",
    parties: [
      {
        title: "Partie 1 : L'entreprise et son environnement",
        duration: "15 heures",
        topics: [
          "Les principes fondateurs : La négociation, La formation, L'exécution",
          "La diversité des contrats : De vente, D'entreprise, De distribution, D'assurance",
          "Les éléments constitutifs de l'infraction",
          "Les infractions",
          "La procédure pénale"
        ],
        subtopics: [
          "Agrément et fiscalité",
          "Le contrôle fiscal",
          "La contestation et la procédure fiscale"
        ]
      },
      {
        title: "Partie 2 : Le développement de l'entreprise",
        duration: "6 heures",
        topics: [
          "Les dirigeants et leur relation avec les associés",
          "Le Conseil d'Administration (CA)",
          "Le Conseil de Surveillance (CS)",
          "Les sujets liés à l'implantation des affaires internationales"
        ]
      },
      {
        title: "Partie 3 : Le financement de l'entreprise",
        duration: "6 heures",
        topics: [
          "Augmentation et réduction de capital",
          "L'emprunt obligataire",
          "Le financement par compte courant",
          "Le financement par recours aux marchés financiers",
          "Le crowdfunding",
          "Les emprunts obligataires",
          "Les garanties du crédit"
        ]
      },
      {
        title: "Partie 4 : De l'entreprise au groupe",
        duration: "15 heures",
        topics: [
          "Choix du régime fiscal approprié",
          "Détermination du périmètre d'intégration fiscale",
          "Contribution et fonctionnement du groupe",
          "Fusions de sociétés",
          "Apports partiels d'actifs",
          "Scissions totales ou partielles",
          "Transmission universelle de patrimoine"
        ]
      },
      {
        title: "Partie 5 : La pérennité de l'entreprise",
        duration: "15 heures",
        topics: [
          "L'entreprise en difficulté",
          "La transmission de l'entreprise",
          "La disparition de l'entreprise"
        ]
      },
      {
        title: "Partie 6 : Les associations et autres organismes à but non lucratif",
        description: "Aspects juridiques, fiscaux et sociaux spécifiques aux associations et aux organismes à but non lucratif."
      }
    ]
  },
  ue4: {
    title: "UE4 - Comptabilité et audit",
    duration: "47h de cours en présentiel et 4h d'examen à distance",
    description: "Le référentiel préconise une période de formation de 47 heures. Le sujet de l'UE4 est très complet puisqu'il aborde les différentes thèmes du programme :",
    parties: [
      {
        title: "Partie 1 : Opérations de restructuration",
        duration: "12 heures",
        description: "Au sein de ce thème, les différentes opérations de restructuration sont abordées : fusion, scission, apport partiel d'actif, fusion simplifiée et TUP. Le cadre juridique et le traitement comptable de ces opérations sont à connaître."
      },
      {
        title: "Partie 2: Normes internationales",
        duration: "15 heures",
        description: "Cette partie introduit les normes internationales (IFRS). Les différences avec les normes françaises (PCG) sont abordés. Cette étude va permettre de mieux comprendre la partie sur la consolidation des comptes."
      },
      {
        title: "Partie 3: Comptes de groupe",
        duration: "20 heures",
        topics: [
          "Qu'est-ce qu'un groupe ? (Financières VS internationales)",
          "Quel est son périmètre de consolidation ?",
          "Connaitre les retraitements de pré consolidation (cession interne, crédit bail...)?",
          "Ce que sont les écarts de pré consolidation (écart d'évaluation et écart d'acquisition) ?",
          "Les différentes méthodes de consolidation pour anticiper les capitaux (intégration globale, intégration proportionnelle et mise en équivalence) ?"
        ]
      }
    ]
  },
  preparationIntensive: {
    title: "La préparation intensive d'été",
    description: "Formation ouverte à tous mais particulièrement adaptée aux candidats récemment diplômés, qui cherchent à conclure leur cursus par un succès au DSCG dès le mois d'octobre suivant.",
    reperes: [
      {
        ue: "UE1 Gestion juridique, fiscale et sociale",
        details: "48h de cours en présentiel et 4h d'examen à distance"
      },
      {
        ue: "UE4 Comptabilité et audit",
        details: "40h de cours en présentiel et 4h d'examen à distance"
      }
    ],
    dates: "UE4 : du 18 au 29 juillet",
    note: "Les deux UE étant très denses, il est possible de suivre l'une des deux dans un premier temps et de décaler les matières révisions qui permet de peaufiner toutes les dernières réglées avant l'examen d'octobre."
  }
};

export default function LexpertPage() {
  const { t } = useLanguage();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

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
                  Cycle préparatoire aux examens de DSCG UE 1 ET 4
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
                <p className="text-gray-300">Durée totale</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
                <BookOpen className="w-8 h-8 text-primary-gold mb-3" />
                <p className="text-3xl font-bold mb-1">2</p>
                <p className="text-gray-300">UE préparées</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
                <Award className="w-8 h-8 text-primary-gold mb-3" />
                <p className="text-3xl font-bold mb-1">DSCG</p>
                <p className="text-gray-300">Diplôme visé</p>
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
                Objectifs de la Formation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                L'objectif de la formation est double :
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
                      <p className="text-xs text-white/80 mb-1">Tarif</p>
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
                      className="w-full p-6 md:p-8 hover:bg-gray-50 transition-colors text-left group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-primary-dark mb-2 group-hover:text-primary-gold transition-colors">
                            {partie.title}
                          </h4>
                          {partie.duration && (
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {partie.duration}
                              </span>
                            </div>
                          )}
                        </div>
                        <motion.div
                          animate={{
                            rotate: expandedSection === `ue1-${index}` ? 180 : 0
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
                        height: expandedSection === `ue1-${index}` ? "auto" : 0,
                        opacity: expandedSection === `ue1-${index}` ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 bg-gray-50">
                        {partie.description && <p className="text-gray-700 mb-4">{partie.description}</p>}
                        {partie.topics && (
                          <ul className="space-y-3">
                            {partie.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-start gap-3 text-gray-700">
                                <div className="w-1.5 h-1.5 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {partie.subtopics && (
                          <ul className="space-y-3 mt-4">
                            {partie.subtopics.map((subtopic, subIndex) => (
                              <li key={subIndex} className="flex items-start gap-3 text-gray-700 ml-4">
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
                      <p className="text-xs text-white/80 mb-1">Tarif</p>
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
                      className="w-full p-6 md:p-8 hover:bg-gray-50 transition-colors text-left group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-primary-dark mb-2 group-hover:text-primary-gold transition-colors">
                            {partie.title}
                          </h4>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {partie.duration}
                            </span>
                          </div>
                        </div>
                        <motion.div
                          animate={{
                            rotate: expandedSection === `ue4-${index}` ? 180 : 0
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
                        height: expandedSection === `ue4-${index}` ? "auto" : 0,
                        opacity: expandedSection === `ue4-${index}` ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 bg-gray-50">
                        <p className="text-gray-700 mb-4">{partie.description}</p>
                        {partie.topics && (
                          <ul className="space-y-3">
                            {partie.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-start gap-3 text-gray-700">
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
                <h3 className="text-xl font-semibold text-primary-dark">Repères pratiques</h3>
                {programData.preparationIntensive.reperes.map((repere, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-amber-200">
                    <p className="font-semibold text-primary-dark mb-1">{repere.ue}</p>
                    <p className="text-gray-600">{repere.details}</p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-100 rounded-lg p-4 mb-4">
                <p className="font-semibold text-amber-900 mb-2">Dates été 2023</p>
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
                Tarifs de Formation
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border-2 border-emerald-200 hover:border-emerald-400 transition-colors">
                  <h3 className="text-2xl font-bold text-primary-dark mb-2">UE1</h3>
                  <p className="text-gray-600 mb-4">Gestion juridique, fiscale et sociale</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-primary-gold">{programData.pricing.ue1}</span>
                  </div>
                  <p className="text-sm text-gray-500">57h de cours + 4h d'examen</p>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-colors">
                  <h3 className="text-2xl font-bold text-primary-dark mb-2">UE4</h3>
                  <p className="text-gray-600 mb-4">Comptabilité et audit</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-primary-gold">{programData.pricing.ue4}</span>
                  </div>
                  <p className="text-sm text-gray-500">47h de cours + 4h d'examen</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary-gold/10 rounded-lg border border-primary-gold/30">
                <p className="text-center text-gray-700">
                  <strong>Formation complète (UE1 + UE4):</strong> Contactez-nous pour un tarif préférentiel
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
                  Prêt à Réussir votre DSCG ?
                </h3>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Rejoignez notre formation L'EXPERT et préparez-vous efficacement aux UE 1 et 4 du DSCG.
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

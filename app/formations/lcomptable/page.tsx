'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { ArrowLeft, Calculator, Clock, BookOpen, Award, Target, CheckCircle, Calendar, DollarSign, Briefcase } from 'lucide-react';
import { useState } from 'react';

const programData = {
  title: "Cours de comptabilité générale",
  subtitle: "Comptabilité pratique saisie des dossiers sur SAGE",
  certification: "Certification sage comptabilité",
  startDate: "05/01/2025",
  duration: "8 séances en fin de semaine",
  schedule: "Chaque Dimanche de 09:00h à 12:30h",
  sessionsPerWeek: "4 heures par semaine",
  pricing: {
    total: "1200 DHS",
    monthly: "600.00 DHS Par Mois"
  },
  objectifs: [
    "Maîtriser les fondamentaux et les techniques de la comptabilité générale,",
    "Garantir une tenue pratique de la comptabilité générale des entreprises,",
    "Maîtriser l'ensemble des opérations comptables,",
    "Préparer les déclarations mensuelles de TVA et les cotisations sociales,",
    "Tenir les comptes jusqu'au bilan,",
    "Être en mesure d'organiser les travaux de clôture comptable,",
    "Élaborer les états de synthèse",
    "Réaliser les tableaux de bord, suivre le budget de trésorerie, analyser les flux.",
    "Traiter les factures, les encours, les relances avec les clients ou les fournisseurs..."
  ],
  programme: [
    {
      title: "Introduction à la Comptabilité Générale",
      description: "Principes fondamentaux de la comptabilité et cadre réglementaire"
    },
    {
      title: "Dossier Immobilisation, traitement des opérations sur immobilisations",
      description: "Gestion et traitement comptable des immobilisations corporelles et incorporelles"
    },
    {
      title: "Dossier Fournisseur, Traitement des factures fournisseur",
      description: "Traitement comptable des achats et gestion des comptes fournisseurs"
    },
    {
      title: "Dossier Clients, Traitement des factures clients",
      description: "Traitement comptable des ventes et gestion des comptes clients"
    },
    {
      title: "Dossier Trésorerie, traitement des opérations de la trésorerie",
      description: "Gestion de la trésorerie et rapprochements bancaires"
    },
    {
      title: "Dossier Fiscalité et TVA",
      description: "Gestion de la TVA et obligations fiscales"
    },
    {
      title: "La gestion des opérations de paie",
      description: "Traitement de la paie et charges sociales"
    },
    {
      title: "Travaux de clôtures et analyse des comptes",
      description: "Procédures de clôture comptable et analyse financière"
    },
    {
      title: "Détermination de résultat fiscal et l'IS",
      description: "Calcul du résultat fiscal et de l'impôt sur les sociétés"
    },
    {
      title: "Etablir les états de synthèse...",
      description: "Préparation des états financiers annuels"
    }
  ]
};

export default function LcomptablePage() {
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
                <Calculator className="w-12 h-12 text-primary-gold" />
              </motion.div>
              <div className="flex-1">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl md:text-6xl font-bold mb-4 font-playfair"
                >
                  L'COMPTABLE
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-200 leading-relaxed"
                >
                  {programData.title}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-lg text-gray-300 mt-2"
                >
                  {programData.subtitle}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-lg text-primary-gold mt-1"
                >
                  {programData.certification}
                </motion.p>
              </div>
            </div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
                <Clock className="w-8 h-8 text-primary-gold mb-3" />
                <p className="text-3xl font-bold mb-1">8</p>
                <p className="text-gray-300">Séances</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
                <BookOpen className="w-8 h-8 text-primary-gold mb-3" />
                <p className="text-3xl font-bold mb-1">4h</p>
                <p className="text-gray-300">Par semaine</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
                <Award className="w-8 h-8 text-primary-gold mb-3" />
                <p className="text-3xl font-bold mb-1">Sage</p>
                <p className="text-gray-300">Certification</p>
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
                OBJECTIF DE LA FORMATION
              </h2>
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

          {/* Programme de Formation */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-center mb-4 text-primary-dark font-playfair">
              PROGRAMME DE FORMATION
            </h2>
            <div className="w-24 h-1 bg-primary-gold mx-auto mb-12"></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-2xl p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold font-playfair">
                  Modules de Formation
                </h3>
                <p className="text-white/90 text-lg mt-2">
                  Programme complet de comptabilité générale et pratique sur SAGE
                </p>
              </div>

              <div className="bg-white rounded-b-2xl shadow-xl overflow-hidden">
                {programData.programme.map((module, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full p-6 md:p-8 hover:bg-gray-50 transition-colors text-left group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-primary-dark mb-2 group-hover:text-primary-gold transition-colors">
                            {module.title}
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
                        <p className="text-gray-700 text-lg">{module.description}</p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Date et Durée */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 border-2 border-amber-200">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-dark font-playfair text-center flex items-center justify-center gap-3">
                <Calendar className="w-10 h-10 text-amber-600" />
                Date de formation
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-amber-200">
                  <p className="text-gray-600 mb-2">Date début de formation</p>
                  <p className="text-2xl font-bold text-primary-dark">{programData.startDate}</p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-amber-200">
                  <h3 className="text-xl font-semibold text-primary-dark mb-4">Durée</h3>
                  <p className="text-gray-700 mb-2">
                    La formation se déroulera en {programData.duration} d'un volume de {programData.sessionsPerWeek}.
                  </p>
                  <p className="text-lg font-semibold text-primary-dark">
                    {programData.schedule}
                  </p>
                </div>
              </div>
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
                Date de formation
              </h2>

              <div className="text-center mb-8">
                <p className="text-gray-700 text-lg mb-6">
                  Le prix de la formation est fixé à <strong className="text-primary-gold text-2xl">{programData.pricing.total}</strong>
                </p>
                <div className="bg-white rounded-xl p-8 border-2 border-green-200 hover:border-green-400 transition-colors inline-block">
                  <p className="text-gray-600 mb-2">Paiement mensuel</p>
                  <p className="text-5xl font-bold text-primary-gold mb-2">{programData.pricing.monthly}</p>
                  <p className="text-sm text-gray-500">8 séances de 4 heures</p>
                </div>
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
                  Prêt à Devenir Comptable Certifié ?
                </h3>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Rejoignez notre formation L'COMPTABLE et maîtrisez la comptabilité générale avec la certification Sage.
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

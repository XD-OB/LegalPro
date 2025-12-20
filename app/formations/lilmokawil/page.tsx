'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { ArrowLeft, GraduationCap, Clock, Users, Award, BookOpen, Target, Briefcase } from 'lucide-react';
import { useState } from 'react';

const programData = {
  totalHours: 28,
  sections: [
    {
      title: "Formation pré-création",
      duration: "18 heures",
      color: "from-amber-600 to-amber-700",
      modules: [
        {
          title: "Initiation à la comptabilité et la finance de l'entreprise",
          duration: "8 heures",
          topics: [
            "Principes comptables de base",
            "IS : assiette, déclaration, paiement",
            "TVA : assiette, déclaration, paiement",
            "Contribution Professionnelle Unique",
            "Fiscalité de l'auto-entrepreneur",
            "Taxe professionnelle : assiette, déclaration, paiement",
            "Droits de timbres",
            "Exonérations fiscales",
            "Procédure de demande d'attestation d'exonération de la TVA"
          ]
        },
        {
          title: "Cadre juridique de la création et la gestion de l'entreprise",
          duration: "4 heures",
          topics: [
            "Entrepreneuriat individuel : Principales caractéristiques, Procédure de constitution, Personne physique",
            "La Société à responsabilité limitée : Principales caractéristiques, Procédure de constitution, Personne morale",
            "La Société anonyme : Principales caractéristiques, Procédure d'immatriculation"
          ]
        },
        {
          title: "Élaboration du business plan et business model",
          duration: "4 heures",
          topics: [
            "Introduction : distinction entre le business plan et business model",
            "Définition du business plan",
            "Importance de l'établissement d'un business plan",
            "Méthode de réalisation du business plan",
            "Faire le résumé du business plan",
            "Description des produits et services à offrir",
            "Segment de clientèle ciblé",
            "La stratégie de pénétration du marché",
            "Organisation de l'équipe dirigeante",
            "Évaluation des risques",
            "Prévision de la situation financière",
            "Exemple de business plan"
          ]
        },
        {
          title: "S'initier au marketing digital et outils numériques de communication",
          duration: "2 heures",
          topics: [
            "Qu'est-ce que la communication digitale",
            "Les erreurs et les pièges à éviter dans le digital",
            "Les éléments clés de la réussite de la communication digitale",
            "Comment concrétiser le tout aux moindres frais sans se disperser ?"
          ]
        }
      ]
    },
    {
      title: "Post-création",
      duration: "10 heures",
      color: "from-blue-600 to-blue-700",
      modules: [
        {
          title: "Maîtriser les outils informatiques de gestion",
          duration: "2 heures",
          topics: [
            "Structure de l'ordinateur et systèmes d'exploitation",
            "Aperçu sur les logiciels de gestion",
            "Principales fonctionnalités de Excel, Word PowerPoint"
          ]
        },
        {
          title: "Gérer sa relation quotidienne avec la banque, le fournisseur et le client",
          duration: "2 heures",
          topics: [
            "Transparence dans la relation personnalisée",
            "Confidentialité vis-à-vis du monde extérieur",
            "Conseil utile à même de favoriser la bonne prise de décision",
            "Optimisation des frais dans le Win-Win relationnel",
            "Anticipation et conseil sur qu'éclosent les décisions",
            "Pièges à éviter",
            "Réflexes à développer"
          ]
        },
        {
          title: "Connaître les fondements de gestion des projets",
          duration: "2 heures",
          topics: [
            "Les différents types de projets",
            "La structure organisationnelle d'un projet",
            "Les phases d'un projet de gestion",
            "Le cycle de vie du projet",
            "Le planning de réalisation",
            "Le suivi des coûts",
            "Les risques",
            "Le tableau de bord"
          ]
        },
        {
          title: "Connaître les procédures de la commande publique",
          duration: "2 heures",
          topics: [
            "Définition d'un marché public",
            "Les types de marchés publics",
            "Les conditions générales exigées des concurrents",
            "Les documents du dossier du concurrent",
            "Contenu du dossier technique",
            "Contenu du dossier additif",
            "Contient l'offre financière",
            "L'offre technique",
            "Les conditions à respecter pour la présentation de l'offre",
            "Comment se déroule la procédure d'ouverture des plis"
          ]
        },
        {
          title: "Management du risque",
          duration: "2 heures",
          topics: [
            "Comment se préparer sur le client et le fournisseur",
            "La gestion des impayés",
            "Quelle est la première source des impayés",
            "La relation entre des objectifs S.M.A.R.T. et la réduction des impayés",
            "La pression mal gérée et les impayés",
            "Road Map pour éviter les impayés ou les bien gérer quand ils deviennent inévitables"
          ]
        }
      ]
    }
  ]
};

export default function LilmokawiPage() {
  const { t } = useLanguage();
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const toggleModule = (moduleTitle: string) => {
    setExpandedModule(expandedModule === moduleTitle ? null : moduleTitle);
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
                <GraduationCap className="w-12 h-12 text-primary-gold" />
              </motion.div>
              <div className="flex-1">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl md:text-6xl font-bold mb-4 font-playfair"
                >
                  LILMOKAWIL
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-200 leading-relaxed"
                >
                  Formation spécialement dédiée aux porteurs de projets et futur manager de TPE – PME
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
                <p className="text-gray-300">Phases de formation</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
                <Award className="w-8 h-8 text-primary-gold mb-3" />
                <p className="text-3xl font-bold mb-1">9</p>
                <p className="text-gray-300">Modules spécialisés</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Program Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Introduction */}
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
                Cette formation complète est conçue pour accompagner les entrepreneurs depuis la conception de leur projet jusqu'à sa réalisation et sa gestion quotidienne. Elle couvre tous les aspects essentiels de la création et de la gestion d'une TPE-PME.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-gold rounded-full mt-2"></div>
                  <p className="text-gray-700">Maîtriser les fondamentaux de la gestion d'entreprise</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-gold rounded-full mt-2"></div>
                  <p className="text-gray-700">Comprendre les aspects juridiques et fiscaux</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-gold rounded-full mt-2"></div>
                  <p className="text-gray-700">Développer un business plan solide</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-gold rounded-full mt-2"></div>
                  <p className="text-gray-700">Gérer efficacement votre entreprise au quotidien</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Program Sections */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-primary-dark font-playfair">
              Programme Détaillé
            </h2>
            <div className="w-24 h-1 bg-primary-gold mx-auto mb-12"></div>

            {programData.sections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className="mb-12"
              >
                {/* Section Header */}
                <div className={`bg-gradient-to-r ${section.color} text-white rounded-t-2xl p-6 md:p-8`}>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 font-playfair">
                        {section.title}
                      </h3>
                      <p className="text-white/90 text-lg">
                        Programme complet de formation professionnelle
                      </p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30">
                      <p className="text-sm text-white/80">Durée</p>
                      <p className="text-2xl font-bold">{section.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Modules */}
                <div className="bg-white rounded-b-2xl shadow-xl overflow-hidden">
                  {section.modules.map((module, moduleIndex) => (
                    <div
                      key={moduleIndex}
                      className="border-b border-gray-200 last:border-b-0"
                    >
                      <button
                        onClick={() => toggleModule(`${sectionIndex}-${moduleIndex}`)}
                        className="w-full p-6 md:p-8 hover:bg-gray-50 transition-colors text-left group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-primary-dark mb-2 group-hover:text-primary-gold transition-colors">
                              {module.title}
                            </h4>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {module.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <BookOpen className="w-4 h-4" />
                                {module.topics.length} sujets
                              </span>
                            </div>
                          </div>
                          <motion.div
                            animate={{
                              rotate: expandedModule === `${sectionIndex}-${moduleIndex}` ? 180 : 0
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

                      {/* Expandable Topics */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedModule === `${sectionIndex}-${moduleIndex}` ? "auto" : 0,
                          opacity: expandedModule === `${sectionIndex}-${moduleIndex}` ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-8 bg-gray-50">
                          <ul className="space-y-3">
                            {module.topics.map((topic, topicIndex) => (
                              <motion.li
                                key={topicIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: topicIndex * 0.05 }}
                                className="flex items-start gap-3 text-gray-700"
                              >
                                <div className="w-1.5 h-1.5 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                                <span>{topic}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <div className="bg-gradient-to-br from-primary-dark to-primary-blue text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-gold rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-gold rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <Briefcase className="w-16 h-16 text-primary-gold mx-auto mb-6" />
                <h3 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
                  Prêt à Lancer Votre Projet ?
                </h3>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Rejoignez notre formation LILMOKAWIL et transformez votre idée en entreprise prospère.
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

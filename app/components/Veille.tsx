'use client';

import { useState } from 'react';

export default function Veille() {
  const [activeTab, setActiveTab] = useState('pourquoi');

  const tabs = [
    { id: 'pourquoi', label: 'Pourquoi Faire de la Veille ?', icon: '📖' },
    { id: 'benefices', label: 'Bénéfices', icon: '✅' }
  ];

  const objectifs = [
    {
      icon: '📈',
      title: 'Anticiper les transformations',
      description: 'Identifier les évolutions technologiques avant qu\'elles ne deviennent mainstream',
      color: 'blue'
    },
    {
      icon: 'ℹ️',
      title: 'Sécuriser l\'information',
      description: 'Maintenir une vigilance sur les menaces et vulnérabilités potentielles',
      color: 'blue'
    },
    {
      icon: '➕',
      title: 'Identifier les opportunités',
      description: 'Repérer les innovations qui peuvent créer de la valeur ajoutée',
      color: 'blue'
    },
    {
      icon: '👥',
      title: 'Avantage concurrentiel',
      description: 'Rester à la pointe pour se démarquer professionnellement',
      color: 'blue'
    }
  ];

  const axes = [
    {
      title: 'Supervision & Monitoring',
      description: 'Outils de supervision, métriques, alerting'
    },
    {
      title: 'Cybersécurité',
      description: 'Vulnérabilités, bonnes pratiques, conformité'
    },
    {
      title: 'Automatisation',
      description: 'Scripting, DevOps, CI/CD'
    }
  ];


  const benefices = [
    {
      title: 'Développement des compétences',
      description: 'Apprentissage continu des nouvelles technologies et méthodologies pour rester compétitif sur le marché.'
    },
    {
      title: 'Anticipation des tendances',
      description: 'Capacité à prévoir les évolutions technologiques pour mieux s\'y préparer et les intégrer.'
    },
    {
      title: 'Optimisation des stratégies',
      description: 'Adaptation des stratégies numériques en fonction des nouvelles opportunités identifiées.'
    },
    {
      title: 'Réduction des risques',
      description: 'Identification précoce des vulnérabilités et des menaces potentielles pour renforcer la sécurité.'
    }
  ];

  const indicateurs = [
    { label: 'Temps de détection des nouvelles tendances', value: 95 },
    { label: 'Nombre d\'insights exploitables générés', value: 88 },
    { label: 'Délai d\'adaptation aux changements', value: 82 },
    { label: 'Réduction des vulnérabilités potentielles', value: 90 }
  ];

  return (
    <section id="veille" className="relative py-32 bg-white dark:bg-slate-800 overflow-hidden">
      {/* Background décoratif */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-slate-100 dark:bg-slate-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-slate-100 dark:bg-slate-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête Hero */}
        <div className="text-center mb-20 bg-linear-to-r from-slate-700 via-slate-800 to-slate-900 rounded-3xl p-16 text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Veille Technologique
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Découvrez ma veille sur les dernières tendances et innovations en administration systèmes et réseaux
          </p>
        </div>

        {/* Section principale avec intro */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Veille Technologique
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Restez à la pointe de la technologie grâce à ma veille ciblée sur les innovations numériques, la cybersécurité et l'administration système.
          </p>
        </div>

        {/* Onglets */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-slate-800 dark:bg-slate-700 text-white shadow-xl scale-105'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 shadow-md'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenu des onglets */}
        <div className="mb-16">
          {/* Pourquoi Faire de la Veille */}
          {activeTab === 'pourquoi' && (
            <div className="space-y-12">
              {/* Vhann Card */}
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border-2 border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center text-3xl">
                      📡
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Vhann</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Ma plateforme personnelle d&apos;agrégation de sources d&apos;information et de veille technologique.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="/Dossier_de_Veille_Technologique.pdf"
                      download
                      className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Télécharger
                    </a>
                    <a
                      href="/Dossier_de_Veille_Technologique.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Visualiser
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Objectifs Stratégiques</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {objectifs.map((obj, index) => (
                        <div
                          key={index}
                          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-slate-100 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-xl transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center text-2xl shrink-0">
                              {obj.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 dark:text-white mb-2">{obj.title}</h4>
                              <p className="text-sm text-slate-600 dark:text-slate-300">{obj.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Axes de Veille Prioritaires</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {axes.map((axe, index) => (
                        <div
                          key={index}
                          className="bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-lg transition-all duration-300 text-center"
                        >
                          <h4 className="font-bold text-slate-900 dark:text-white mb-3">{axe.title}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300">{axe.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bénéfices */}
          {activeTab === 'benefices' && (
            <div className="space-y-12">
              {/* Vhann Card */}
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border-2 border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center text-3xl">
                      📡
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Vhann</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Ma plateforme personnelle d&apos;agrégation de sources d&apos;information et de veille technologique.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="/Dossier_de_Veille_Technologique.pdf"
                      download
                      className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Télécharger
                    </a>
                    <a
                      href="/Dossier_de_Veille_Technologique.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Visualiser
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Pour les Professionnels IT</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {benefices.map((benefice, index) => (
                        <div
                          key={index}
                          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-slate-100 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-xl transition-all duration-300"
                        >
                          <h4 className="font-bold text-slate-900 dark:text-white mb-3">{benefice.title}</h4>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{benefice.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Indicateurs de Performance</h3>
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border-2 border-slate-100 dark:border-slate-700">
                      <div className="space-y-6">
                        {indicateurs.map((ind, index) => (
                          <div key={index}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-slate-700 dark:text-slate-300 font-medium">{ind.label}</span>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                              <div
                                className="h-full bg-linear-to-r from-slate-700 to-slate-900 dark:from-slate-500 dark:to-slate-400 rounded-full transition-all duration-1000"
                                style={{ width: `${ind.value}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { useScrollReveal, useProgressReveal } from '../hooks/useScrollReveal';

export default function Veille() {
  const [activeTab, setActiveTab] = useState('pourquoi');

  const heroReveal = useScrollReveal();
  const introReveal = useScrollReveal();
  const objectifsReveal = useScrollReveal();
  const axesReveal = useScrollReveal();
  const beneficesReveal = useScrollReveal();
  const indicateursReveal = useScrollReveal();
  const progressReveal = useProgressReveal();

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
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-slate-100 dark:bg-red-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-slate-100 dark:bg-green-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête Hero */}
        <div
          ref={heroReveal.ref}
          className={`text-center mb-20 relative bg-linear-to-r from-slate-700 via-slate-800 to-slate-900 rounded-3xl p-16 text-white overflow-hidden transition-all duration-1000 ${
            heroReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Subtle blue glow overlay */}
          <div className="absolute inset-0 bg-red-500/10 rounded-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-500/15 rounded-full blur-3xl"></div>
          <h2 className="relative text-5xl md:text-6xl font-bold mb-6">
            Veille Technologique
          </h2>
          <p className="relative text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Découvrez ma veille sur les dernières tendances et innovations en administration systèmes et réseaux
          </p>
        </div>

        {/* Section principale avec intro */}
        <div
          ref={introReveal.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            introReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
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
                  ? 'bg-linear-to-r from-red-600 to-green-600 text-white shadow-xl scale-105'
                  : 'bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-md border border-slate-200 dark:border-slate-700'
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
            <div key="pourquoi" className="space-y-12 animate-[fadeIn_0.5s_ease-in-out]">
              {/* Vhann Card */}
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border-2 border-slate-100 dark:border-slate-700 border-l-4 border-l-red-500">
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
                      className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 transition-colors rounded-lg px-2 py-1"
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
                      className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 transition-colors rounded-lg px-2 py-1"
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
                  <div
                    ref={objectifsReveal.ref}
                    className={`transition-all duration-700 ${
                      objectifsReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Objectifs Stratégiques</h3>
                    <div className="h-1 w-20 bg-linear-to-r from-red-500 to-green-500 rounded-full mb-8"></div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {objectifs.map((obj, index) => (
                        <div
                          key={index}
                          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-slate-100 dark:border-slate-700 hover:border-red-400 dark:hover:border-red-600 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-linear-to-br from-red-50 to-green-50 dark:from-red-900/20 dark:to-green-900/20 rounded-xl flex items-center justify-center text-2xl shrink-0">
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

                  <div
                    ref={axesReveal.ref}
                    className={`transition-all duration-700 ${
                      axesReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Axes de Veille Prioritaires</h3>
                    <div className="h-1 w-20 bg-linear-to-r from-red-500 to-green-500 rounded-full mb-8"></div>
                    <div className="grid md:grid-cols-3 gap-6">
                      {axes.map((axe, index) => (
                        <div
                          key={index}
                          className="bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-red-400 dark:hover:border-red-600 hover:shadow-lg transition-all duration-300 text-center"
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
            <div key="benefices" className="space-y-12 animate-[fadeIn_0.5s_ease-in-out]">
              {/* Vhann Card */}
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border-2 border-slate-100 dark:border-slate-700 border-l-4 border-l-red-500">
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
                      className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 transition-colors rounded-lg px-2 py-1"
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
                      className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 transition-colors rounded-lg px-2 py-1"
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
                  <div
                    ref={beneficesReveal.ref}
                    className={`transition-all duration-700 ${
                      beneficesReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Pour les Professionnels IT</h3>
                    <div className="h-1 w-20 bg-linear-to-r from-red-500 to-green-500 rounded-full mb-8"></div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {benefices.map((benefice, index) => (
                        <div
                          key={index}
                          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-slate-100 dark:border-slate-700 hover:border-red-400 dark:hover:border-red-600 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                          <h4 className="font-bold text-slate-900 dark:text-white mb-3">{benefice.title}</h4>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{benefice.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    ref={indicateursReveal.ref}
                    className={`transition-all duration-700 ${
                      indicateursReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Indicateurs de Performance</h3>
                    <div className="h-1 w-20 bg-linear-to-r from-red-500 to-green-500 rounded-full mb-8"></div>
                    <div
                      ref={progressReveal.ref}
                      className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border-2 border-slate-100 dark:border-slate-700"
                    >
                      <div className="space-y-6">
                        {indicateurs.map((ind, index) => (
                          <div key={index}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-slate-700 dark:text-slate-300 font-medium">{ind.label}</span>
                              <span className="text-sm font-bold text-red-600 dark:text-red-400">{ind.value}%</span>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                              <div
                                className="h-full bg-linear-to-r from-red-500 to-green-500 rounded-full"
                                style={{
                                  width: progressReveal.shouldAnimate ? ind.value + '%' : '0%',
                                  transition: 'width 1.5s cubic-bezier(0.22, 1, 0.36, 1)'
                                }}
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

      {/* Keyframes for fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

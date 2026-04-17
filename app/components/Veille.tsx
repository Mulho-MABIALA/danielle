'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Veille() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('pourquoi');

  const tabs = [
    { id: 'pourquoi', label: t.veille.tabWhy, icon: '📖' },
    { id: 'benefices', label: t.veille.tabBenefits, icon: '✅' },
    { id: 'outils', label: t.veille.tabOutils, icon: '🛠️' },
  ];

  const objectifIcons = ['📈', 'ℹ️', '➕', '👥'];

  const VhannCard = () => (
    <div className="lg:col-span-1 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border-2 border-slate-100 dark:border-slate-700 border-l-4 border-l-red-500">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center text-3xl">
          📡
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Vhann</h3>
      </div>
      <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
        {t.veille.platformDesc}
      </p>
      <div className="flex flex-col gap-3">
        <a
          href="/Veille_Technologique_Supervision&Monitoring.pdf"
          download
          className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 transition-colors rounded-lg px-2 py-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {t.veille.download}
        </a>
        <a
          href="/Veille_Technologique_Supervision&Monitoring.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 transition-colors rounded-lg px-2 py-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          {t.veille.view}
        </a>
      </div>
    </div>
  );

  return (
    <section id="veille" className="relative py-32 bg-white dark:bg-slate-800 overflow-hidden">
      {/* Background décoratif */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-slate-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-slate-100 dark:bg-green-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête Hero */}
        <div className="text-center mb-20 relative bg-linear-to-r from-slate-700 via-slate-800 to-slate-900 rounded-3xl p-16 text-white overflow-hidden">
          <div className="absolute inset-0 bg-blue-800/10 rounded-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-800/15 rounded-full blur-3xl"></div>
          <h2 className="relative text-5xl md:text-6xl font-bold mb-6">
            {t.veille.title}
          </h2>
          <p className="relative text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            {t.veille.subtitle}
          </p>
        </div>

        {/* Section principale avec intro */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Supervision Et Monitoring Des Systèmes
          </h3>
        </div>

        {/* Onglets */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-linear-to-r from-blue-800 to-indigo-900 text-white shadow-xl scale-105'
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
              <div className="grid lg:grid-cols-3 gap-8">
                <VhannCard />

                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{t.veille.strategicObjectives}</h3>
                    <div className="h-1 w-20 bg-linear-to-r from-blue-700 to-indigo-800 rounded-full mb-8"></div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {t.veille.objectives.map((obj, index) => (
                        <div
                          key={index}
                          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-linear-to-br from-red-50 to-green-50 dark:from-red-900/20 dark:to-green-900/20 rounded-xl flex items-center justify-center text-2xl shrink-0">
                              {objectifIcons[index] || '📌'}
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 dark:text-white mb-2">{obj.title}</h4>
                              <p className="text-sm text-slate-600 dark:text-slate-300">{obj.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{t.veille.watchAxes}</h3>
                    <div className="h-1 w-20 bg-linear-to-r from-blue-700 to-indigo-800 rounded-full mb-8"></div>
                    <div className="grid md:grid-cols-3 gap-6">
                      {t.veille.axes.map((axe, index) => (
                        <div
                          key={index}
                          className="bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-lg transition-all duration-300 text-center"
                        >
                          <h4 className="font-bold text-slate-900 dark:text-white mb-3">{axe.title}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300">{axe.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Outils */}
          {activeTab === 'outils' && (
            <div key="outils" className="animate-[fadeIn_0.5s_ease-in-out]">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Mes outils de veille</h3>
                <div className="h-1 w-20 bg-linear-to-r from-blue-700 to-indigo-800 rounded-full mx-auto mb-4"></div>
                <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Les plateformes et outils que j'utilise au quotidien pour rester à jour sur les évolutions technologiques.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.veille.outils.map((outil, index) => (
                  <a
                    key={index}
                    href={outil.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-2xl border-2 border-slate-100 dark:border-slate-700 hover:-translate-y-3 transition-all duration-300 flex flex-col gap-4"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-white font-bold text-xl shadow-lg"
                        style={{ backgroundColor: outil.color }}
                      >
                        {outil.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors text-lg">
                          {outil.name}
                        </h4>
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                          style={{ backgroundColor: outil.color }}
                        >
                          {outil.category}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                      {outil.desc}
                    </p>

                    {/* Footer link */}
                    <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300" style={{ color: outil.color }}>
                      <span>Visiter le site</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Articles */}
          {activeTab === 'benefices' && (
            <div key="benefices" className="animate-[fadeIn_0.5s_ease-in-out]">
              {/* Header */}
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Articles de veille</h3>
                  <div className="h-1 w-16 bg-linear-to-r from-blue-700 to-indigo-800 rounded-full"></div>
                </div>
                <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-bold px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800">
                  {t.veille.articles.length} articles
                </span>
              </div>

              {/* Grille d'articles */}
              <div className="grid md:grid-cols-2 gap-8">
                {t.veille.articles.map((article, index) => (
                  <div
                    key={index}
                    className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 dark:border-slate-700 hover:-translate-y-2 transition-all duration-300 flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                      {/* Numéro */}
                      <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm border border-white/30">
                        {index + 1}
                      </div>
                      {/* Badges */}
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                        <span className="bg-blue-700 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                          {article.source} · {article.date}
                        </span>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="p-6 flex flex-col flex-1">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors leading-snug">
                        {article.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {article.summary}
                      </p>

                      {/* Points clés */}
                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 mb-4 flex-1">
                        <p className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest mb-3">
                          {article.pointsLabel}
                        </p>
                        <ul className="space-y-2">
                          {article.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5"></div>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-xs text-slate-500 dark:text-slate-400 italic mb-5 leading-relaxed">
                        {article.conclusion}
                      </p>

                      <a
                        href={article.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center justify-center gap-2 bg-linear-to-r from-blue-800 to-indigo-900 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-blue-900/25 hover:scale-105 transition-all duration-300"
                      >
                        Lire l'article
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
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

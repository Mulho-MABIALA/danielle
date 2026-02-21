'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal, useProgressReveal } from '../hooks/useScrollReveal';

export default function Competences() {
  const { t } = useLanguage();
  const [filterIndex, setFilterIndex] = useState(0);
  const headerReveal = useScrollReveal();
  const progressReveal = useProgressReveal();
  const statsReveal = useScrollReveal();

  const icons = ['💻', '🖥️', '☁️', '🛡️', '🔐', '🗄️', '⚙️', '🔒', '🛡️', '🔐', '🛡️', '🗄️', '💾', '🐳', '📝', '👥', '🎯', '💬', '🔄'];
  const filterIcons = ['🔧', '💻', '🌐', '🛡️', '🗄️', '👥'];

  const competences = t.competences.list.map((item, i) => ({
    icon: icons[i] || '⚙️',
    title: item.name,
    subtitle: item.desc,
    level: item.level,
    category: item.category,
  }));

  const filteredCompetences = filterIndex === 0
    ? competences
    : competences.filter(comp => comp.category === t.competences.categories[filterIndex]);

  const stats = [
    { value: `${t.competences.list.length}`, label: t.competences.skills },
    { value: '86%', label: t.competences.avgLevel },
    { value: '3+', label: t.competences.experience },
    { value: '15+', label: t.competences.projects }
  ];

  return (
    <section id="competences" className="relative py-32 bg-linear-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-slate-200 dark:bg-blue-900/15 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 bg-slate-200 dark:bg-indigo-900/15 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerReveal.ref} className={`text-center mb-16 scroll-reveal scroll-reveal-up ${headerReveal.isRevealed ? 'revealed' : ''}`}>
          <span className="inline-block text-slate-600 dark:text-slate-300 text-sm font-semibold tracking-widest uppercase bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full mb-4">
            {t.competences.badge}
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-linear-to-r from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
              {t.competences.title}</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            {t.competences.subtitle}
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-linear-to-r from-blue-700 to-indigo-800 rounded-full"></div>
            <div className="w-4 h-1 bg-blue-700 rounded-full"></div>
            <div className="w-2 h-1 bg-indigo-400 rounded-full"></div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {t.competences.categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setFilterIndex(i)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                filterIndex === i
                  ? 'bg-linear-to-r from-blue-800 to-indigo-900 text-white shadow-lg shadow-red-600/20 scale-105'
                  : 'bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-md hover:shadow-lg border border-slate-200 dark:border-slate-700'
              }`}
            >
              <span>{filterIcons[i] || '🔧'}</span>
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div ref={progressReveal.ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredCompetences.map((comp, index) => (
            <div
              key={comp.title}
              className={`group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-2xl border-2 transition-all duration-300 hover:-translate-y-3 relative overflow-hidden ${
                comp.level >= 90
                  ? 'border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700'
                  : 'border-slate-100 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
              style={{ animationDelay: `${(index % 6) * 0.1}s` }}
            >
              {comp.level >= 90 && (
                <div className="absolute top-0 left-4 right-4 h-1 bg-linear-to-r from-blue-700 to-indigo-800 rounded-b-full"></div>
              )}

              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-2xl ${
                  comp.level >= 90
                    ? 'bg-linear-to-br from-red-50 to-green-50 dark:from-red-900/20 dark:to-green-900/20'
                    : 'bg-slate-100 dark:bg-slate-700'
                }`}>
                  {comp.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors">
                    {comp.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{comp.subtitle}</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t.competences.mastery}</span>
                  <span className="text-sm font-bold bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full">
                    {comp.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1500 ease-out ${
                      comp.level >= 90
                        ? 'bg-linear-to-r from-blue-700 to-indigo-800'
                        : 'bg-linear-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500'
                    }`}
                    style={{ width: progressReveal.shouldAnimate ? `${comp.level}%` : '0%', transition: 'width 1.5s cubic-bezier(0.22, 1, 0.36, 1)' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div ref={statsReveal.ref} className={`scroll-reveal scroll-reveal-up ${statsReveal.isRevealed ? 'revealed' : ''}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

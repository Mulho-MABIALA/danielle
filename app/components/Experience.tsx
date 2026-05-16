'use client';

import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();
  const headerReveal = useScrollReveal();
  const statsReveal = useScrollReveal();
  const card1Reveal = useScrollReveal();
  const card2Reveal = useScrollReveal();
  const card3Reveal = useScrollReveal();
  const cardReveals = [card1Reveal, card2Reveal, card3Reveal];

  const [modalImage, setModalImage] = useState<{ src: string; label: string } | null>(null);

  const dgfipMissionImages: Record<number, string> = {
    0: '/mission_1.png',
    1: '/mission_2.png',
    2: '/mission_3.png',
    3: '/mission_4.png',
    4: '/mission_5.png',
    5: '/mission_6.png',
  };

  const lijeDockerImages: Record<number, string> = {
    0: '/docker_mission_1.png',
    1: '/docker_mission_2.png',
    2: '/docker_mission_3.png',
    3: '/docker_mission_4.png',
  };

  const badgeClasses = ['bg-linear-to-r from-blue-800 to-indigo-900', 'bg-indigo-600', 'bg-indigo-700'];
  const experiences = t.experiences.list.map((exp, i) => ({ ...exp, id: i + 1, badgeClass: badgeClasses[i] || 'bg-indigo-800' }));

  return (
    <section id="experiences" className="relative py-16 sm:py-24 md:py-32 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-slate-200 dark:bg-blue-900/15 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-slate-100 dark:bg-indigo-900/15 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerReveal.ref} className={`text-center mb-10 sm:mb-16 md:mb-20 scroll-reveal scroll-reveal-up ${headerReveal.isRevealed ? 'revealed' : ''}`}>
          <span className="inline-block text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-slate-200 dark:bg-slate-700 px-3 sm:px-4 py-2 rounded-full mb-4">
            {t.experiences.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            {t.experiences.title}
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 sm:w-12 h-1 bg-linear-to-r from-blue-800 to-indigo-800 rounded-full"></div>
            <div className="w-3 sm:w-4 h-1 bg-blue-700 rounded-full"></div>
            <div className="w-2 h-1 bg-indigo-400 rounded-full"></div>
          </div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-2">
            {t.experiences.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-3 sm:left-5 lg:left-8 top-0 w-0.5 sm:w-1 h-full bg-linear-to-b from-blue-700 via-indigo-800 to-purple-500 rounded-full"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => {
              const reveal = cardReveals[index];
              const isDGFIPStage = index === 0;
              const isLijeStage = index === 1;
              return (
                <div
                  key={exp.id}
                  ref={reveal.ref}
                  className={`relative flex items-start gap-4 sm:gap-6 lg:gap-8 pl-10 sm:pl-14 lg:pl-20 scroll-reveal scroll-reveal-left ${reveal.isRevealed ? 'revealed' : ''}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1 sm:left-3 lg:left-5 w-4 sm:w-6 h-4 sm:h-6 z-10">
                    <div className="w-4 sm:w-6 h-4 sm:h-6 bg-blue-800 dark:bg-blue-700 rounded-full border-2 sm:border-4 border-slate-50 dark:border-slate-900"></div>
                    <div className="absolute inset-0 rounded-full bg-blue-800 dark:bg-blue-700 animate-ping opacity-20"></div>
                  </div>

                  {/* Card */}
                  <div className="w-full min-w-0">
                    <div className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border-2 border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

                      {/* Card header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4 sm:mb-6">
                        <div className="min-w-0">
                          <span className={`inline-block ${exp.badgeClass} text-white text-xs font-bold px-3 py-1 rounded-full mb-2 sm:mb-3`}>
                            {exp.type === 'stage' ? t.experiences.stage : t.experiences.emploi}
                          </span>
                          <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                            {exp.title}
                          </h3>
                        </div>
                        <span className="self-start shrink-0 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      {/* Company & location */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-slate-600 dark:text-slate-400">
                          <svg className="w-4 sm:w-5 h-4 sm:h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <span className="font-semibold text-sm sm:text-base">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 text-slate-500 dark:text-slate-500">
                          <svg className="w-4 sm:w-5 h-4 sm:h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-sm sm:text-base">{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 leading-relaxed">{exp.description}</p>

                      {/* Missions */}
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-2 sm:mb-3">
                          {t.experiences.missions}
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {exp.missions.map((mission, idx) => {
                            const imageSrc = isDGFIPStage ? dgfipMissionImages[idx] : isLijeStage ? lijeDockerImages[idx] : undefined;
                            return imageSrc ? (
                              <li
                                key={idx}
                                onClick={() => setModalImage({ src: imageSrc, label: mission })}
                                className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 cursor-pointer group/mission hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg px-2 py-1 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                              >
                                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 dark:text-indigo-400 group-hover/mission:text-blue-600 mt-0.5 shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="flex-1 leading-snug">{mission}</span>
                                <svg className="w-4 h-4 text-blue-400 opacity-0 group-hover/mission:opacity-100 mt-0.5 shrink-0 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </li>
                            ) : (
                              <li key={idx} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 dark:text-indigo-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="leading-snug">{mission}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium px-2.5 sm:px-3 py-1 rounded-full hover:bg-blue-50 dark:hover:bg-red-900/20 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200 cursor-default"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      {exp.type === 'stage' && exp.pdfPath && (
                        <div className="flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-slate-100 dark:border-slate-700">
                          <a
                            href={exp.pdfPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-sm font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all duration-200"
                          >
                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            {t.experiences.visualiser}
                          </a>
                          <a
                            href={exp.apiPath}
                            download
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 rounded-lg bg-linear-to-r from-blue-800 to-indigo-900 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-900/25 hover:scale-105 transition-all duration-200"
                          >
                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {t.experiences.telecharger}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div ref={statsReveal.ref} className={`mt-12 sm:mt-16 md:mt-20 scroll-reveal scroll-reveal-up ${statsReveal.isRevealed ? 'revealed' : ''}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', value: '2', label: t.experiences.stages },
              { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', value: '4+', label: t.experiences.months },
              { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', value: '1', label: t.experiences.securityStage },
              { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', value: '2', label: t.experiences.companies },
            ].map((stat, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-slate-100 dark:border-slate-700 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-br from-blue-800 to-indigo-900 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
                <p className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent mb-0.5 sm:mb-1">{stat.value}</p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal image */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-xl md:max-w-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-100 dark:border-slate-700">
              <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 line-clamp-2 flex-1 pr-4">
                {modalImage.label}
              </p>
              <button
                onClick={() => setModalImage(null)}
                className="w-7 sm:w-8 h-7 sm:h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-600 text-slate-600 dark:text-slate-300 transition-colors shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-3 sm:p-4">
              <img
                src={modalImage.src}
                alt={modalImage.label}
                className="w-full h-auto rounded-lg sm:rounded-xl object-contain max-h-[60vh] sm:max-h-[70vh]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

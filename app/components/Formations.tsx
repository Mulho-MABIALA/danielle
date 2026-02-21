'use client';

import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Formations() {
  const headerReveal = useScrollReveal();
  const card1Reveal = useScrollReveal();
  const card2Reveal = useScrollReveal();
  const card3Reveal = useScrollReveal();
  const rightColReveal = useScrollReveal();
  const certsReveal = useScrollReveal();
  const statsReveal = useScrollReveal();

  return (
    <section id="formations" className="relative py-32 bg-white dark:bg-slate-800 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-slate-100 dark:bg-blue-900/15 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-slate-50 dark:bg-indigo-900/15 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerReveal.ref} className={`text-center mb-20 scroll-reveal scroll-reveal-up ${headerReveal.isRevealed ? 'revealed' : ''}`}>
          <span className="inline-block text-slate-600 dark:text-slate-300 text-sm font-semibold tracking-widest uppercase bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full mb-4">
            Mon cursus
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Formations
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-linear-to-r from-blue-400 to-indigo-500 rounded-full"></div>
            <div className="w-4 h-1 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-1 bg-indigo-400 rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Column 1: Academic Path */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Parcours Académique</h3>
            </div>

            <div className="space-y-6">
              {/* BTS SIO */}
              <div ref={card1Reveal.ref} className={`group relative scroll-reveal scroll-reveal-left ${card1Reveal.isRevealed ? 'revealed' : ''}`}>
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-blue-400 to-indigo-500 rounded-full"></div>
                <div className="absolute -left-[7px] top-6 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-800 z-10">
                  <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"></div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ml-4">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block bg-linear-to-r from-blue-500 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      2024 - 2026
                    </span>
                    <div className="flex gap-2">
                      <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs font-semibold px-3 py-1 rounded-full">
                        Motivée
                      </span>
                      <span className="bg-green-50 dark:bg-indigo-900/20 text-green-700 dark:text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full">
                        Travailleuse
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    BTS Services Informatiques aux Organisations
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 font-medium mb-3">Option SISR - Systèmes et Réseaux</p>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-semibold">Lycée Beaupeyrat, Limoges</span>
                  </div>
                </div>
              </div>

              {/* Licence 2 */}
              <div ref={card2Reveal.ref} className={`group relative scroll-reveal scroll-reveal-left stagger-2 ${card2Reveal.isRevealed ? 'revealed' : ''}`}>
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-orange-500 to-green-500 rounded-full"></div>
                <div className="absolute -left-[7px] top-6 w-4 h-4 rounded-full bg-green-500 border-4 border-white dark:border-slate-800 z-10">
                  <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ml-4">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      2023 - 2024
                    </span>
                    <span className="bg-green-50 dark:bg-indigo-900/20 text-green-700 dark:text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full">
                      Passionnée
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Licence 2 Génie Logiciel
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 font-medium mb-3">Développement informatique</p>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">Institut International (2i), Congo-Brazzaville</span>
                  </div>
                </div>
              </div>

              {/* Bac */}
              <div ref={card3Reveal.ref} className={`group relative scroll-reveal scroll-reveal-left stagger-3 ${card3Reveal.isRevealed ? 'revealed' : ''}`}>
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-green-500 to-slate-300 rounded-full"></div>
                <div className="absolute -left-[7px] top-6 w-4 h-4 rounded-full bg-green-500 border-4 border-white dark:border-slate-800 z-10">
                  <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ml-4">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block bg-indigo-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                      2021 - 2022
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Baccalauréat Général
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 font-medium mb-3">Série D - Sciences Expérimentales</p>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-semibold">Le Jade, Congo-Brazzaville</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Further Studies & Certifications */}
          <div className="space-y-8">
            <div ref={rightColReveal.ref} className={`scroll-reveal scroll-reveal-right ${rightColReveal.isRevealed ? 'revealed' : ''}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Poursuite d&apos;Études</h3>
              </div>

              <div className="bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                      Envisagée
                    </span>
                  </div>
                  <span className="bg-linear-to-r from-blue-500 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    BAC+3
                  </span>
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Bachelor AIS - Administrateur d&apos;Infrastructures Sécurisées
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-200 font-semibold mb-3">
                  Formation reconnue par l&apos;État (RNCP 37680)
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Après mon BTS SIO option SISR, je souhaite poursuivre ma formation avec le Bachelor AIS
                  pour approfondir mes compétences en administration d&apos;infrastructures et en sécurité informatique.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group">
                  En savoir plus sur cette formation
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Certifications */}
            <div ref={certsReveal.ref} className={`scroll-reveal scroll-reveal-right stagger-2 ${certsReveal.isRevealed ? 'revealed' : ''}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Certifications</h3>
              </div>

              <div className="space-y-4">
                {/* AWS Certification */}
                <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-orange-400 to-yellow-400"></div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-linear-to-br from-orange-400 to-yellow-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.75 11.35a4.32 4.32 0 0 0 .09-.83 4.26 4.26 0 0 0-7.8-2.37 3 3 0 0 0-4.64 2.52 3 3 0 0 0 .05.52A3.75 3.75 0 0 0 7.5 18h10.88a3.37 3.37 0 0 0 .37-6.65z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 px-2 py-0.5 rounded-full">AWS</span>
                        <span className="text-xs font-bold text-green-700 dark:text-indigo-400 bg-green-50 dark:bg-indigo-900/20 px-2 py-0.5 rounded-full">Obtenue</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        Certification Amazon Web Services
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Cloud Computing &amp; Infrastructure</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="/Certification_AWS.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-700 hover:bg-orange-50 dark:hover:bg-orange-900/20 text-slate-700 dark:text-slate-200 hover:text-orange-700 dark:hover:text-orange-400 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Visualiser
                    </a>
                    <a
                      href="/api/download/aws"
                      className="flex-1 flex items-center justify-center gap-2 bg-linear-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Télécharger
                    </a>
                  </div>
                </div>

                {/* ANSSI Certification */}
                <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 to-red-600"></div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-linear-to-br from-blue-700 to-red-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-full">ANSSI</span>
                        <span className="text-xs font-bold text-green-700 dark:text-indigo-400 bg-green-50 dark:bg-indigo-900/20 px-2 py-0.5 rounded-full">Obtenue</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        Certification ANSSI
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Cybersécurité &amp; Sécurité des Systèmes</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="/Vhann_Certification_ANSSI.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Visualiser
                    </a>
                    <a
                      href="/api/download/anssi"
                      className="flex-1 flex items-center justify-center gap-2 bg-linear-to-r from-blue-700 to-red-600 hover:from-blue-800 hover:to-red-700 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Télécharger
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div ref={statsReveal.ref} className={`mt-8 grid grid-cols-2 gap-4 scroll-reveal scroll-reveal-scale ${statsReveal.isRevealed ? 'revealed' : ''}`}>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-3xl font-bold bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-1">5+</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">Années d&apos;étude</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-linear-to-br from-orange-600 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-3xl font-bold bg-linear-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-1">3</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">Diplômes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

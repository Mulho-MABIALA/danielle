'use client';

import { useRouter } from 'next/navigation';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

export default function About() {
  const router = useRouter();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/api/download/cv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => router.push('/'), 800);
  };

  const headerReveal = useScrollReveal();
  const mainCardReveal = useScrollReveal();
  const sidebarReveal = useScrollReveal();
  const statsReveal = useScrollReveal();
  const { containerRef: domainsRef, revealedItems: domainsRevealed } = useStaggerReveal(6);

  const domains = [
    { icon: '🖥️', title: 'Administration système', desc: 'Gestion et maintenance de systèmes' },
    { icon: '🌐', title: 'Gestion de réseaux', desc: 'Configuration et supervision' },
    { icon: '📦', title: 'Virtualisation', desc: 'Déploiement d\'environnements virtuels' },
    { icon: '🔧', title: 'Serveurs Web, DNS, FTP', desc: 'Installation et configuration' },
    { icon: '🔒', title: 'Sécurité informatique', desc: 'Protection des infrastructures' },
    { icon: '⚙️', title: 'Infrastructure IT', desc: 'Architecture et optimisation' }
  ];

  return (
    <section id="apropos" className="relative py-32 overflow-hidden bg-linear-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-slate-200 dark:bg-red-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-100 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerReveal.ref} className={`text-center mb-20 scroll-reveal scroll-reveal-up ${headerReveal.isRevealed ? 'revealed' : ''}`}>
          <span className="inline-block text-slate-600 dark:text-slate-300 text-sm font-semibold tracking-widest uppercase bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full mb-4">
            Mon parcours
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            À propos de moi
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-linear-to-r from-red-500 to-green-500 rounded-full"></div>
            <div className="w-4 h-1 bg-red-400 rounded-full"></div>
            <div className="w-2 h-1 bg-green-400 rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left column */}
          <div className="lg:col-span-3 space-y-8">
            {/* Main card */}
            <div ref={mainCardReveal.ref} className={`scroll-reveal scroll-reveal-left ${mainCardReveal.isRevealed ? 'revealed' : ''}`}>
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-red-500 to-green-500"></div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-linear-to-br from-red-600 to-green-600 rounded-2xl flex items-center justify-center shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Qui suis-je ?</h3>
                    <p className="text-slate-600 dark:text-slate-300">Étudiante passionnée par l&apos;informatique</p>
                  </div>
                </div>

                <div className="space-y-6 text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
                  <p>
                    Actuellement étudiante en <span className="font-bold text-slate-800 dark:text-slate-200 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded">BTS SIO option SISR</span> au Lycée Beaupeyrat,
                    je me forme à l&apos;administration des systèmes et réseaux, à la virtualisation, à la gestion de serveurs (web, DNS, FTP)
                    et à la sécurisation des infrastructures informatiques.
                  </p>
                  <p>
                    Mon parcours dans l&apos;informatique a débuté par une <span className="font-semibold text-slate-800 dark:text-slate-200">curiosité naturelle</span> pour comprendre le fonctionnement des systèmes
                    et des réseaux. Aujourd&apos;hui, je mets en pratique mes compétences en BTS SIO SISR à travers des projets concrets,
                    en administrant des systèmes et réseaux, en déployant des services et en veillant à la sécurité des infrastructures
                    informatiques.
                  </p>
                </div>
              </div>
            </div>

            {/* Expertise domains */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-linear-to-br from-red-600 to-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                Domaines d&apos;expertise
              </h3>
              <div ref={domainsRef} className="grid md:grid-cols-2 gap-4">
                {domains.map((domain, index) => (
                  <div
                    key={index}
                    className={`group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-100 dark:border-slate-700 transition-all duration-300 relative overflow-hidden scroll-reveal scroll-reveal-card ${domainsRevealed[index] ? 'revealed' : ''} stagger-${index + 1}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-red-50 to-transparent dark:from-red-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    <div className="relative flex items-start gap-4">
                      <span className="text-3xl">{domain.icon}</span>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">{domain.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{domain.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Sticky contact */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-6">
              <div ref={sidebarReveal.ref} className={`scroll-reveal scroll-reveal-right ${sidebarReveal.isRevealed ? 'revealed' : ''}`}>
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-red-500 via-orange-500 to-green-500"></div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Me contacter</h3>

                  <div className="space-y-6">
                    {/* Email */}
                    <div className="group">
                      <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-red-50/50 dark:hover:bg-red-900/10 transition-all duration-300">
                        <div className="shrink-0 w-14 h-14 bg-linear-to-br from-red-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email</p>
                          <a href="mailto:vhanndanielle@gmail.com" className="text-slate-900 dark:text-white font-semibold hover:text-red-600 dark:hover:text-red-400 transition-colors break-all">
                            vhanndanielle@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="group">
                      <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-red-50/50 dark:hover:bg-red-900/10 transition-all duration-300">
                        <div className="shrink-0 w-14 h-14 bg-linear-to-br from-red-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Téléphone</p>
                          <a href="tel:+33771898971" className="text-slate-900 dark:text-white font-semibold hover:text-red-600 dark:hover:text-red-400 transition-colors">
                            +33 7 71 89 89 71
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="group">
                      <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-red-50/50 dark:hover:bg-red-900/10 transition-all duration-300">
                        <div className="shrink-0 w-14 h-14 bg-linear-to-br from-red-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Localisation</p>
                          <p className="text-slate-900 dark:text-white font-semibold">Limoges, France</p>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="relative py-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-medium">Réseaux sociaux</span>
                      </div>
                    </div>

                    {/* Social */}
                    <div className="flex gap-3 justify-center">
                      <a href="https://github.com/Vhann14" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-[#333] text-white rounded-xl hover:bg-[#24292f] hover:scale-110 hover:shadow-lg hover:shadow-[#333]/30 transition-all duration-300 shadow-md" aria-label="GitHub">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/vhann-kibamba-wilfride-8bba68334/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-[#0A66C2] text-white rounded-xl hover:bg-[#004182] hover:scale-110 hover:shadow-lg hover:shadow-[#0A66C2]/30 transition-all duration-300 shadow-md" aria-label="LinkedIn">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>

                    {/* CV Download */}
                    <button type="button" onClick={handleDownloadCV} className="group/btn w-full bg-linear-to-r from-red-600 to-green-600 text-white px-8 py-4 rounded-2xl hover:shadow-2xl hover:shadow-red-500/25 hover:scale-[1.02] transition-all duration-300 font-bold flex items-center justify-center gap-3 mt-8 relative overflow-hidden cursor-pointer">
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                      <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="relative z-10">Télécharger mon CV</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div ref={statsReveal.ref} className={`grid grid-cols-2 gap-4 scroll-reveal scroll-reveal-scale ${statsReveal.isRevealed ? 'revealed' : ''}`}>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <p className="text-3xl font-bold bg-linear-to-r from-red-600 to-green-600 bg-clip-text text-transparent mb-1">2+</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">Années d&apos;étude</p>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <p className="text-3xl font-bold bg-linear-to-r from-red-600 to-green-600 bg-clip-text text-transparent mb-1">100%</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">Motivation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

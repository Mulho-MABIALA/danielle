'use client';

import Image from "next/image";

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden dark:bg-slate-900">
      {/* Background avec animations */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="absolute top-20 right-20 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texte */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-slate-600 dark:text-slate-300 text-sm font-semibold tracking-widest uppercase bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full">
                  👋 Bienvenue
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                Bonjour, je suis{' '}
                <span className="relative inline-block">
                  <span className="bg-linear-to-r from-slate-700 via-slate-800 to-slate-900 dark:from-slate-200 dark:via-slate-300 dark:to-slate-400 bg-clip-text text-transparent">
                    Danielle
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 2 150 2 198 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1e293b" />
                        <stop offset="100%" stopColor="#0f172a" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300">
                Étudiante en BTS SIO option SISR
              </p>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed border-l-4 border-slate-800 dark:border-slate-400 pl-6">
              Actuellement étudiante en <span className="font-bold text-slate-800 dark:text-slate-200">BTS SIO option SISR</span> à l'Institut Beaupeyrat,
              je développe des compétences en administration système et réseau, en gestion d'infrastructures informatiques
              et en maintenance de services afin d'assurer la sécurité et la continuité des systèmes.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Retrouvez-moi sur :</span>
              <a
                href="https://github.com/Vhann14"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-slate-800 text-white rounded-full hover:bg-slate-900 hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/vhann-kibamba-wilfride-8bba68334/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-slate-700 text-white rounded-full hover:bg-slate-900 hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Boutons CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/CV.pdf"
                download
                className="group bg-slate-800 dark:bg-slate-700 text-white px-8 py-4 rounded-full hover:bg-slate-900 dark:hover:bg-slate-600 hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Télécharger mon CV
              </a>
              <a
                href="#contact"
                className="border-2 border-slate-800 dark:border-slate-400 text-slate-800 dark:text-slate-300 px-8 py-4 rounded-full hover:bg-slate-800 dark:hover:bg-slate-700 hover:text-white hover:shadow-xl transition-all duration-300 font-semibold"
              >
                Me contacter
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Effet de glow animé */}
              <div className="absolute -inset-1 bg-linear-to-r from-slate-600 via-slate-800 to-slate-900 rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              {/* Cadre décoratif */}
              <div className="absolute -inset-4 border-4 border-slate-200 dark:border-slate-700 rounded-3xl -rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>

              {/* Image principale */}
              <div className="relative">
                <Image
                  src="/danielle.jpg"
                  alt="Danielle - Étudiante BTS SIO SISR"
                  width={550}
                  height={550}
                  className="rounded-3xl shadow-2xl object-cover ring-8 ring-white group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Badge flottant */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 border-4 border-slate-100 dark:border-slate-700 animate-bounce-slow">
                <div className="text-center">
                  <p className="text-3xl font-bold text-slate-800 dark:text-white">BTS</p>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">SIO SISR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#apropos" className="flex flex-col items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors">
          <span className="text-sm font-medium">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

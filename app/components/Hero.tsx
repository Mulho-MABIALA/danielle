'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const router = useRouter();
  const { t } = useLanguage();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/api/download/cv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => router.push('/'), 800);
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden dark:bg-slate-900">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="absolute top-20 right-20 w-72 h-72 bg-slate-200 dark:bg-blue-900/25 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-slate-100 dark:bg-indigo-900/25 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-slate-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              {/* Welcome badge */}
              <div className="inline-block opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                <span className="text-slate-600 dark:text-slate-300 text-sm font-semibold tracking-widest uppercase bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full">
                  {t.hero.badge}
                </span>
              </div>

              {/* Main heading */}
              <h1 className="opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                  {t.hero.greeting}
                </span>
                <span className="relative inline-block mt-2">
                  <span className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] bg-linear-to-r from-blue-700 via-indigo-800 to-blue-900 dark:from-blue-300 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Vhann Danielle
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 2 150 2 198 10" stroke="url(#hero-gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1e40af" />
                        <stop offset="100%" stopColor="#312e81" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 opacity-0 animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                {t.hero.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed border-l-4 border-blue-700 dark:border-indigo-700 pl-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
              {t.hero.description}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2 opacity-0 animate-slide-up" style={{ animationDelay: '1.0s', animationFillMode: 'both' }}>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{t.hero.findMe}</span>
              <a
                href="https://github.com/Vhann14"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-[#333] text-white rounded-full hover:bg-[#24292f] hover:scale-110 hover:shadow-lg hover:shadow-[#333]/30 transition-all duration-300 shadow-md"
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
                className="flex items-center justify-center w-12 h-12 bg-[#0A66C2] text-white rounded-full hover:bg-[#004182] hover:scale-110 hover:shadow-lg hover:shadow-[#0A66C2]/30 transition-all duration-300 shadow-md"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-slide-up" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
              <button
                type="button"
                onClick={handleDownloadCV}
                className="group relative bg-linear-to-r from-blue-800 to-indigo-900 text-white px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-blue-800/30 hover:scale-105 transition-all duration-300 font-semibold flex items-center gap-3 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="relative z-10">{t.hero.downloadCV}</span>
              </button> 

              <Link
                href="/contact"
                className="relative border-2 border-blue-700 dark:border-indigo-700 text-slate-800 dark:text-slate-300 px-10 py-4 rounded-full overflow-hidden group transition-all duration-300 font-semibold hover:text-white dark:hover:text-white hover:shadow-xl"
              >
                <span className="absolute inset-0 bg-linear-to-r from-blue-800 to-indigo-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10">{t.hero.contact}</span>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-scale-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-700 via-indigo-800 to-blue-900 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="absolute -inset-4 border-4 border-slate-200 dark:border-slate-700 rounded-3xl -rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
              <div className="relative">
                <Image
                  src="/Photo_Profil.png"
                  alt="Danielle - Etudiante BTS SIO SISR"
                  width={550}
                  height={550}
                  className="rounded-3xl shadow-2xl object-cover ring-8 ring-white dark:ring-slate-800 group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 border-4 border-slate-100 dark:border-slate-700 animate-bounce-slow">
                <div className="text-center">
                  <p className="text-3xl font-bold bg-linear-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent">BTS</p>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">SIO SISR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

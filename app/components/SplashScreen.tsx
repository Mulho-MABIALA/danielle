'use client';

import { useState } from 'react';

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-700 ${
        isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #0f172a 60%, #1a1a2e 100%)',
      }}
    >
      {/* Blobs décoratifs animés */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-slate-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>

      {/* Grille de points subtile */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Lignes décoratives */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>

      {/* Contenu principal */}
      <div className="relative text-center px-6 max-w-4xl mx-auto">
        {/* Badge BTS */}
        <div
          className="animate-slide-up mb-8"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          <span className="inline-block px-6 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-sm font-medium tracking-widest uppercase">
            Portfolio 2024 - 2025
          </span>
        </div>

        {/* Nom principal */}
        <h1
          className="animate-slide-up text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          <span
            className="bg-clip-text text-transparent animate-shimmer"
            style={{
              backgroundImage: 'linear-gradient(90deg, #e2e8f0, #ffffff, #93c5fd, #ffffff, #e2e8f0)',
              backgroundSize: '200% auto',
            }}
          >
            Vhann
          </span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #60a5fa, #818cf8, #a78bfa)',
            }}
          >
            Danielle
          </span>
        </h1>

        {/* Ligne séparatrice animée */}
        <div
          className="flex justify-center mb-8 animate-fade-in"
          style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
        >
          <div className="animate-line-expand h-[2px] bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 rounded-full"></div>
        </div>

        {/* Sous-titre BTS */}
        <div
          className="animate-slide-up mb-4"
          style={{ animationDelay: '0.9s', animationFillMode: 'both' }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white/90 tracking-wide">
            BTS SIO <span className="text-blue-400 font-semibold">option SISR</span>
          </h2>
        </div>

        {/* Description */}
        <p
          className="animate-slide-up text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ animationDelay: '1.1s', animationFillMode: 'both' }}
        >
          Administration Systèmes & Réseaux
        </p>

        {/* Bouton d'entrée */}
        <div
          className="animate-scale-in"
          style={{ animationDelay: '1.4s', animationFillMode: 'both' }}
        >
          <button
            onClick={handleEnter}
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #6366f1, #8b5cf6)',
            }}
          >
            {/* Shine effect au hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

            <span className="relative">Découvrir mon portfolio</span>
            <svg
              className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Indicateur de scroll */}
        <div
          className="animate-fade-in mt-16"
          style={{ animationDelay: '2s', animationFillMode: 'both' }}
        >
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <span className="text-xs tracking-widest uppercase">Cliquez pour entrer</span>
            <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex justify-center pt-1">
              <div className="w-1 h-2 bg-slate-500 rounded-full animate-bounce-slow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Coins décoratifs */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-blue-500/20 rounded-tl-lg animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'both' }}></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-blue-500/20 rounded-tr-lg animate-fade-in" style={{ animationDelay: '1.6s', animationFillMode: 'both' }}></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-indigo-500/20 rounded-bl-lg animate-fade-in" style={{ animationDelay: '1.7s', animationFillMode: 'both' }}></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-indigo-500/20 rounded-br-lg animate-fade-in" style={{ animationDelay: '1.8s', animationFillMode: 'both' }}></div>
    </div>
  );
}

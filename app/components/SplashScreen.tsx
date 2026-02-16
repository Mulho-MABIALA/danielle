'use client';

import { useState, useEffect } from 'react';

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles] = useState(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.1,
    }))
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => onEnter(), 1000);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-1000 ease-out ${
        isExiting ? 'opacity-0 scale-110 blur-sm' : 'opacity-100 scale-100 blur-0'
      }`}
      style={{
        background: 'radial-gradient(ellipse at 50% 50%, #1e293b 0%, #0f172a 50%, #020617 100%)',
      }}
    >
      {/* Curseur glow suiveur */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
        }}
      ></div>

      {/* Orbites animées */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-blue-500/[0.06]"
          style={{ animation: 'spin-slow 30s linear infinite' }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400/40 rounded-full"></div>
        </div>
        <div
          className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-indigo-500/[0.06]"
          style={{ animation: 'spin-slow 20s linear infinite reverse' }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-indigo-400/40 rounded-full"></div>
        </div>
        <div
          className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border border-purple-500/[0.06]"
          style={{ animation: 'spin-slow 15s linear infinite' }}
        >
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-purple-400/50 rounded-full"></div>
        </div>
      </div>

      {/* Particules flottantes */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-blue-300 pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        ></div>
      ))}

      {/* Lignes de grille néon subtiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-full h-full opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      {/* Contenu principal */}
      <div className="relative text-center px-6 max-w-5xl mx-auto">
        {/* Badge animé */}
        <div
          className="animate-slide-up mb-10"
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-blue-400/20 bg-blue-500/5 backdrop-blur-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-300/80 text-sm font-medium tracking-[0.2em] uppercase">
              Portfolio 2024 - 2025
            </span>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        {/* Nom principal avec effet de profondeur */}
        <div
          className="animate-slide-up relative mb-2"
          style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
        >
          {/* Ombre du texte en background */}
          <h1
            className="absolute inset-0 text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter select-none blur-2xl opacity-20"
            aria-hidden="true"
          >
            <span className="text-blue-500">Vhann</span>
          </h1>
          <h1 className="relative text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-[0.85]">
            <span
              className="bg-clip-text text-transparent animate-shimmer"
              style={{
                backgroundImage: 'linear-gradient(90deg, #94a3b8, #ffffff, #60a5fa, #ffffff, #94a3b8)',
                backgroundSize: '200% auto',
              }}
            >
              Vhann
            </span>
          </h1>
        </div>

        <div
          className="animate-slide-up relative mb-8"
          style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] uppercase">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #60a5fa, #818cf8, #a78bfa, #c084fc)',
              }}
            >
              Danielle
            </span>
          </h1>
        </div>

        {/* Ligne séparatrice avec glow */}
        <div
          className="flex justify-center mb-10 animate-fade-in"
          style={{ animationDelay: '1s', animationFillMode: 'both' }}
        >
          <div className="relative">
            <div className="animate-line-expand h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
            <div className="animate-line-expand h-[3px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent rounded-full blur-sm absolute top-0 left-0"></div>
          </div>
        </div>

        {/* BTS SIO SISR avec style premium */}
        <div
          className="animate-slide-up mb-3"
          style={{ animationDelay: '1.1s', animationFillMode: 'both' }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extralight text-white/80 tracking-[0.3em] uppercase">
            BTS SIO
          </h2>
        </div>
        <div
          className="animate-slide-up mb-8"
          style={{ animationDelay: '1.25s', animationFillMode: 'both' }}
        >
          <span className="inline-block px-8 py-2 text-lg sm:text-xl md:text-2xl font-semibold tracking-widest text-blue-300 border-x border-blue-500/30">
            option SISR
          </span>
        </div>

        {/* Description */}
        <p
          className="animate-slide-up text-slate-500 text-base md:text-lg max-w-xl mx-auto mb-14 leading-relaxed font-light tracking-wide"
          style={{ animationDelay: '1.4s', animationFillMode: 'both' }}
        >
          Solutions d&apos;Infrastructure, Systèmes et Réseaux
        </p>

        {/* Bouton d'entrée premium */}
        <div
          className="animate-scale-in"
          style={{ animationDelay: '1.7s', animationFillMode: 'both' }}
        >
          <button
            onClick={handleEnter}
            className="group relative inline-flex items-center gap-4 cursor-pointer"
          >
            {/* Glow du bouton */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl group-hover:bg-blue-500/30 transition-all duration-500 scale-150"></div>

            <div
              className="relative inline-flex items-center gap-3 px-12 py-5 rounded-full text-white font-medium text-lg overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] border border-white/10 group-hover:border-white/20"
              style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(99,102,241,0.3), rgba(139,92,246,0.3))',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <span className="relative tracking-wider">Découvrir mon portfolio</span>
              <div className="relative w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <svg
                  className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Footer info */}
      <div
        className="absolute bottom-8 left-0 right-0 flex justify-center animate-fade-in"
        style={{ animationDelay: '2.2s', animationFillMode: 'both' }}
      >
        <div className="flex items-center gap-8 text-slate-600 text-xs tracking-[0.2em] uppercase">
          <span>Administration Systèmes</span>
          <div className="w-1 h-1 bg-blue-500/50 rounded-full"></div>
          <span>Réseaux</span>
          <div className="w-1 h-1 bg-indigo-500/50 rounded-full"></div>
          <span>Cybersécurité</span>
        </div>
      </div>

      {/* Coins décoratifs fins */}
      <div className="absolute top-6 left-6 w-20 h-20 animate-fade-in" style={{ animationDelay: '1.8s', animationFillMode: 'both' }}>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-500/30 to-transparent"></div>
        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-blue-500/30 to-transparent"></div>
      </div>
      <div className="absolute top-6 right-6 w-20 h-20 animate-fade-in" style={{ animationDelay: '1.9s', animationFillMode: 'both' }}>
        <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-blue-500/30 to-transparent"></div>
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-blue-500/30 to-transparent"></div>
      </div>
      <div className="absolute bottom-6 left-6 w-20 h-20 animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'both' }}>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-indigo-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-[1px] h-full bg-gradient-to-t from-indigo-500/30 to-transparent"></div>
      </div>
      <div className="absolute bottom-6 right-6 w-20 h-20 animate-fade-in" style={{ animationDelay: '2.1s', animationFillMode: 'both' }}>
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-indigo-500/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-t from-indigo-500/30 to-transparent"></div>
      </div>
    </div>
  );
}

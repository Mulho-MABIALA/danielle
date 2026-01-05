'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Formations', href: '#formations' },
    { name: 'Compétences', href: '#competences' },
    { name: 'Expériences', href: '#experiences' },
    { name: 'Projets', href: '#projets' },
    { name: 'Veille', href: '#veille' },
    { name: 'Technologies', href: '#technologies' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-white shadow-md py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Nom */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-950 bg-clip-text text-transparent hover:from-slate-700 hover:to-slate-900 transition-all duration-300"
            >
              Danielle
            </Link>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 hover:text-slate-800 transition-all duration-300 font-medium text-sm group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 bg-slate-800 text-white px-8 py-2.5 rounded-full hover:bg-slate-900 hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium text-sm"
            >
              Contact
            </a>
          </div>

          {/* Bouton Menu Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-slate-800 focus:outline-none transition-colors p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile - Slide from top */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 mt-2">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-white hover:bg-white/20 rounded-lg transition-all duration-300 font-medium transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-3 text-slate-800 bg-white hover:bg-slate-50 rounded-lg transition-all duration-300 font-medium text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

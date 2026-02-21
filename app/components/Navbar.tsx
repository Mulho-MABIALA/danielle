'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../context/LanguageContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, t, setLang } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; flag: string; label: string }[] = [
    { code: 'fr', flag: '🇫🇷', label: 'FR' },
    { code: 'it', flag: '🇮🇹', label: 'IT' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-slate-900/5 dark:shadow-slate-900/30 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-3xl font-bold bg-linear-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent hover:from-blue-900 hover:to-indigo-950 transition-all duration-500"
            >
              Danielle
            </Link>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {t.nav.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 transition-all duration-300 font-medium text-sm group ${
                    isActive
                      ? 'text-slate-900 dark:text-white font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-800 rounded-full"></span>
                  )}
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-blue-700 to-indigo-800 rounded-full transition-all duration-300 ${
                      isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                    }`}
                  ></span>
                </Link>
              );
            })}

            {/* Language switcher */}
            <div className="ml-2 flex items-center gap-1 border border-slate-200 dark:border-slate-700 rounded-full px-1 py-1">
              {languages.map(({ code, flag, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                    lang === code
                      ? 'bg-blue-800 text-white shadow'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                  aria-label={`Switch to ${label}`}
                >
                  <span>{flag}</span>
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:rotate-12 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* Contact CTA */}
            <Link
              href="/contact"
              className="ml-3 bg-linear-to-r from-blue-800 to-indigo-900 text-white px-7 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-900/25 hover:scale-105 transition-all duration-300 font-medium text-sm animate-glow-pulse"
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile language switcher */}
            <div className="flex items-center gap-0.5 border border-slate-200 dark:border-slate-700 rounded-full px-1 py-0.5">
              {languages.map(({ code, flag }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-1.5 py-0.5 rounded-full text-sm transition-all duration-200 ${
                    lang === code
                      ? 'bg-blue-800 shadow'
                      : 'opacity-50 hover:opacity-100'
                  }`}
                  aria-label={`Switch to ${code.toUpperCase()}`}
                >
                  {flag}
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:rotate-12"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* Animated Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-7 h-5 flex flex-col justify-between p-0"
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-full bg-slate-800 dark:bg-slate-200 rounded-full transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-2.25' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-slate-800 dark:bg-slate-200 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-slate-800 dark:bg-slate-200 rounded-full transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-2.25' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Glassmorphism */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass rounded-2xl mx-4 mt-3 overflow-hidden">
          <div className="px-4 pt-4 pb-6 space-y-1">
            {t.nav.items.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                    isActive
                      ? 'bg-linear-to-r from-blue-800/10 to-indigo-900/10 text-blue-800 dark:text-blue-400'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animation: isMenuOpen ? `reveal-left 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${index * 60}ms both` : 'none',
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="block px-4 py-3 bg-linear-to-r from-blue-800 to-indigo-900 text-white rounded-xl transition-all duration-300 font-medium text-center mt-3"
              onClick={() => setIsMenuOpen(false)}
              style={{
                animation: isMenuOpen ? `reveal-left 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${t.nav.items.length * 60}ms both` : 'none',
              }}
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

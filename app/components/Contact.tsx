'use client';

import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: infoRef, isRevealed: infoRevealed } = useScrollReveal();
  const { ref: formRef, isRevealed: formRevealed } = useScrollReveal();
  const { ref: socialRef, isRevealed: socialRevealed } = useScrollReveal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setStatusMessage(data.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(data.error || t.contact.errorDefault);
      }
    } catch {
      setStatus('error');
      setStatusMessage(t.contact.serverError);
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-linear-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-slate-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-slate-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-reveal scroll-reveal-up ${headerRevealed ? 'revealed' : ''}`}>
          <span className="inline-block text-slate-600 dark:text-slate-300 text-sm font-semibold tracking-widest uppercase bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full mb-4">
            {t.contact.badge}
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-linear-to-r from-blue-800 to-indigo-900 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
              {t.contact.title}
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            {t.contact.description}
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-linear-to-r from-blue-700 to-indigo-800 rounded-full"></div>
            <div className="w-4 h-1 bg-linear-to-r from-blue-700 to-indigo-800 rounded-full"></div>
            <div className="w-2 h-1 bg-linear-to-r from-blue-700 to-indigo-800 rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div ref={infoRef} className={`bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-2 border-slate-100 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 scroll-reveal scroll-reveal-left ${infoRevealed ? 'revealed' : ''}`}>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">{t.contact.infoTitle}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-1">{t.contact.location}</h4>
                    <p className="text-slate-600 dark:text-slate-300">Limoges, France</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-1">{t.contact.phone}</h4>
                    <a href="tel:+33771898971" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:underline transition-colors">
                      +33 7 71 89 89 71
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-1">{t.contact.email}</h4>
                    <a href="mailto:vhanndanielle@gmail.com" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:underline transition-colors break-all">
                      vhanndanielle@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div ref={socialRef} className={`relative bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg text-white overflow-hidden scroll-reveal scroll-reveal-up ${socialRevealed ? 'revealed' : ''}`}>
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-700 to-indigo-800"></div>
              <h3 className="text-2xl font-bold mb-6">{t.contact.followTitle}</h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/vhann-kibamba-wilfride-8bba68334/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#0A66C2] hover:bg-[#004182] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/Vhann14" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#333] hover:bg-[#24292f] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-slate-500/20">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className={`bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-2 border-slate-100 dark:border-slate-700 scroll-reveal scroll-reveal-right ${formRevealed ? 'revealed' : ''}`}>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">{t.contact.formTitle}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="peer w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-blue-700 dark:focus:border-blue-500 focus:outline-none transition-colors" placeholder=" " />
                <label htmlFor="name" className="absolute left-4 top-3 text-slate-500 dark:text-slate-400 transition-all duration-200 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-blue-800 dark:peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:scale-75 origin-left pointer-events-none">{t.contact.name}</label>
              </div>

              <div className="relative">
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="peer w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-blue-700 dark:focus:border-blue-500 focus:outline-none transition-colors" placeholder=" " />
                <label htmlFor="email" className="absolute left-4 top-3 text-slate-500 dark:text-slate-400 transition-all duration-200 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-blue-800 dark:peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:scale-75 origin-left pointer-events-none">{t.contact.email}</label>
              </div>

              <div className="relative">
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="peer w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-blue-700 dark:focus:border-blue-500 focus:outline-none transition-colors" placeholder=" " />
                <label htmlFor="subject" className="absolute left-4 top-3 text-slate-500 dark:text-slate-400 transition-all duration-200 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-blue-800 dark:peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:scale-75 origin-left pointer-events-none">{t.contact.subject}</label>
              </div>

              <div className="relative">
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="peer w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-blue-700 dark:focus:border-blue-500 focus:outline-none transition-colors resize-none" placeholder=" " />
                <label htmlFor="message" className="absolute left-4 top-3 text-slate-500 dark:text-slate-400 transition-all duration-200 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-blue-800 dark:peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:scale-75 origin-left pointer-events-none">{t.contact.message}</label>
              </div>

              <button type="submit" disabled={status === 'loading'} className="relative overflow-hidden group w-full bg-linear-to-r from-blue-800 to-indigo-900 text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100">
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative">
                  {status === 'loading' ? t.contact.sending : t.contact.send}
                </span>
              </button>

              {status === 'success' && (
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-blue-800 dark:text-blue-300 text-sm font-medium">
                  ✓ {statusMessage}
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-400 text-sm font-medium">
                  ✗ {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { useScrollReveal, useProgressReveal } from '../hooks/useScrollReveal';

type Competence = {
  icon: string;
  title: string;
  subtitle: string;
  level: number;
  category: string[];
};

export default function Competences() {
  const [activeFilter, setActiveFilter] = useState('all');
  const headerReveal = useScrollReveal();
  const progressReveal = useProgressReveal();
  const statsReveal = useScrollReveal();

  const competences: Competence[] = [
    { icon: '💻', title: 'Linux (Debian, Ubuntu)', subtitle: 'Administration avancée et scripting', level: 90, category: ['systemes'] },
    { icon: '🖥️', title: 'Windows Server', subtitle: 'Active Directory, GPO, WSUS', level: 85, category: ['systemes'] },
    { icon: '☁️', title: 'Virtualisation (VMware, Proxmox)', subtitle: 'Gestion de clusters et migrations', level: 88, category: ['systemes'] },
    { icon: '🛡️', title: 'Pare-feu Fortinet', subtitle: 'Configuration, règles, VPN', level: 92, category: ['securite'] },
    { icon: '🔐', title: 'VPN (WireGuard, OpenVPN)', subtitle: 'Tunnels sécurisés et accès distants', level: 87, category: ['reseaux', 'securite'] },
    { icon: '🗄️', title: 'DNS, DHCP, VLAN', subtitle: 'Services réseau essentiels', level: 85, category: ['reseaux', 'services'] },
    { icon: '⚙️', title: 'Routage et Switching', subtitle: 'Configuration réseau avancée', level: 80, category: ['reseaux'] },
    { icon: '🔒', title: 'Bastion Wallix', subtitle: 'Gestion des accès privilégiés', level: 90, category: ['securite'] },
    { icon: '🛡️', title: 'Fail2ban, Portsentry', subtitle: 'Protection contre les intrusions', level: 83, category: ['securite'] },
    { icon: '🔐', title: 'SSL/TLS, GPG', subtitle: 'Chiffrement et certificats', level: 85, category: ['securite'] },
    { icon: '🛡️', title: 'Iptables/Netfilter', subtitle: 'Firewall Linux natif', level: 82, category: ['securite'] },
    { icon: '🗄️', title: 'Apache, Nginx', subtitle: 'Serveurs web et reverse proxy', level: 85, category: ['services'] },
    { icon: '💾', title: 'MySQL, PostgreSQL', subtitle: 'Administration de bases de données', level: 80, category: ['services'] },
    { icon: '🐳', title: 'Docker', subtitle: 'Conteneurisation d\'applications', level: 78, category: ['services'] },
    { icon: '📝', title: 'Git, Documentation', subtitle: 'Versioning et docs techniques', level: 88, category: ['soft-skills'] },
    { icon: '👥', title: 'Travail en équipe', subtitle: 'Collaboration efficace', level: 90, category: ['soft-skills'] },
    { icon: '🎯', title: 'Résolution de problèmes', subtitle: 'Analyse et solutions', level: 92, category: ['soft-skills'] },
    { icon: '💬', title: 'Communication', subtitle: 'Vulgarisation technique', level: 85, category: ['soft-skills'] },
    { icon: '🔄', title: 'Adaptation', subtitle: 'Apprentissage continu', level: 88, category: ['soft-skills'] }
  ];

  const filters = [
    { id: 'all', label: 'Toutes', icon: '🔧' },
    { id: 'systemes', label: 'Systèmes', icon: '💻' },
    { id: 'reseaux', label: 'Réseaux', icon: '🌐' },
    { id: 'securite', label: 'Sécurité', icon: '🛡️' },
    { id: 'services', label: 'Services', icon: '🗄️' },
    { id: 'soft-skills', label: 'Soft Skills', icon: '👥' }
  ];

  const filteredCompetences = activeFilter === 'all'
    ? competences
    : competences.filter(comp => comp.category.includes(activeFilter));

  const stats = [
    { value: '19', label: 'Compétences' },
    { value: '86%', label: 'Niveau moyen' },
    { value: '3+', label: 'Années d\'expérience' },
    { value: '15+', label: 'Projets réalisés' }
  ];

  return (
    <section id="competences" className="relative py-32 bg-linear-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-slate-200 dark:bg-red-900/15 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 bg-slate-200 dark:bg-green-900/15 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerReveal.ref} className={`text-center mb-16 scroll-reveal scroll-reveal-up ${headerReveal.isRevealed ? 'revealed' : ''}`}>
          <span className="inline-block text-slate-600 dark:text-slate-300 text-sm font-semibold tracking-widest uppercase bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full mb-4">
            Mes expertises
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-linear-to-r from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
              Mes Compétences Techniques
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Compétences acquises et développées dans le cadre de ma formation BTS SIO et de mes stages
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-linear-to-r from-red-500 to-green-500 rounded-full"></div>
            <div className="w-4 h-1 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-1 bg-indigo-400 rounded-full"></div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? 'bg-linear-to-r from-red-600 to-green-600 text-white shadow-lg shadow-red-600/20 scale-105'
                  : 'bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-md hover:shadow-lg border border-slate-200 dark:border-slate-700'
              }`}
            >
              <span>{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div ref={progressReveal.ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredCompetences.map((comp, index) => (
            <div
              key={comp.title}
              className={`group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-2xl border-2 transition-all duration-300 hover:-translate-y-3 relative overflow-hidden ${
                comp.level >= 90
                  ? 'border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700'
                  : 'border-slate-100 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
              style={{ animationDelay: `${(index % 6) * 0.1}s` }}
            >
              {comp.level >= 90 && (
                <div className="absolute top-0 left-4 right-4 h-1 bg-linear-to-r from-red-500 to-green-500 rounded-b-full"></div>
              )}

              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-2xl ${
                  comp.level >= 90
                    ? 'bg-linear-to-br from-red-50 to-green-50 dark:from-red-900/20 dark:to-green-900/20'
                    : 'bg-slate-100 dark:bg-slate-700'
                }`}>
                  {comp.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {comp.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{comp.subtitle}</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Maîtrise</span>
                  <span className="text-sm font-bold bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 px-3 py-1 rounded-full">
                    {comp.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1500 ease-out ${
                      comp.level >= 90
                        ? 'bg-linear-to-r from-red-500 to-green-500'
                        : 'bg-linear-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500'
                    }`}
                    style={{ width: progressReveal.shouldAnimate ? `${comp.level}%` : '0%', transition: 'width 1.5s cubic-bezier(0.22, 1, 0.36, 1)' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div ref={statsReveal.ref} className={`scroll-reveal scroll-reveal-up ${statsReveal.isRevealed ? 'revealed' : ''}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-4xl md:text-5xl font-bold bg-linear-to-r from-red-400 to-green-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

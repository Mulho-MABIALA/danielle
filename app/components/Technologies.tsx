'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

type Technology = {
  name: string;
  logo: string;
  category: string[];
};

export default function Technologies() {
  const [activeFilter, setActiveFilter] = useState('Toutes');

  const technologies: Technology[] = [
    // Administration système
    { name: 'Active Directory', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg', category: ['Administration système'] },
    { name: 'Samba', logo: 'https://icon.icepanel.io/Technology/svg/Samba.svg', category: ['Administration système'] },
    { name: 'ProFTPD', logo: 'https://avatars.githubusercontent.com/u/6899006?s=200&v=4', category: ['Administration système'] },
    { name: 'MariaDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg', category: ['Administration système'] },

    // Réseau
    { name: 'Packet Tracer', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg', category: ['Réseau'] },
    { name: 'DNS', logo: 'https://cdn-icons-png.flaticon.com/512/2891/2891491.png', category: ['Réseau'] },
    { name: 'DHCP', logo: 'https://cdn-icons-png.flaticon.com/512/1183/1183672.png', category: ['Réseau'] },
    { name: 'SSH', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original-wordmark.svg', category: ['Réseau'] },
    { name: 'Netfilter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: ['Réseau'] },

    // Sécurité
    { name: 'OPNsense', logo: 'https://opnsense.org/wp-content/themes/OPNsense/assets/img/opnsense.png', category: ['Sécurité'] },
    { name: 'HTTPS', logo: 'https://cdn-icons-png.flaticon.com/512/4744/4744417.png', category: ['Sécurité'] },
    { name: 'Fail2ban', logo: 'https://avatars.githubusercontent.com/u/6818092?s=200&v=4', category: ['Sécurité'] },
    { name: 'Zabbix', logo: 'https://assets.zabbix.com/img/logo/zabbix_logo_500x131.png', category: ['Sécurité'] },
    { name: 'Munin', logo: 'https://avatars.githubusercontent.com/u/1809568?s=200&v=4', category: ['Sécurité'] },
    { name: 'GPG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Gnupg_logo.svg/1200px-Gnupg_logo.svg.png', category: ['Sécurité'] },

    // Monitoring & Backup
    { name: 'BackupPC', logo: 'https://backuppc.github.io/backuppc/images/logos/logo320.png', category: ['Monitoring & Backup'] },

    // Virtualisation
    { name: 'Proxmox', logo: '/proxmox_image.png', category: ['Virtualisation'] },
    { name: 'OpenNebula', logo: 'https://opennebula.io/wp-content/uploads/2020/04/opennebula_cloud_logo_white_bg-4.png', category: ['Virtualisation'] },
    { name: 'VirtualBox', logo: '/virtualBox_image.jpg', category: ['Virtualisation'] },

    // IA & Outils numériques
    { name: 'Claude AI', logo: 'https://mintlify.s3.us-west-1.amazonaws.com/anthropic/_generated/favicon/apple-touch-icon.png?v=3', category: ['IA & Outils numériques'] },
    { name: 'QwenLM', logo: 'https://avatars.githubusercontent.com/u/133262055?s=200&v=4', category: ['IA & Outils numériques'] },
    { name: 'Gamma AI', logo: 'https://avatars.githubusercontent.com/u/108307481?s=200&v=4', category: ['IA & Outils numériques'] },
    { name: 'Perplexity', logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/perplexity-ai-icon.svg', category: ['IA & Outils numériques'] },
    { name: 'LM Studio', logo: 'https://avatars.githubusercontent.com/u/142217632?s=200&v=4', category: ['IA & Outils numériques'] },
    { name: 'Hugging Face', logo: 'https://huggingface.co/front/assets/huggingface_logo.svg', category: ['IA & Outils numériques'] },
    { name: 'Mistral AI', logo: 'https://avatars.githubusercontent.com/u/132372032?s=200&v=4', category: ['IA & Outils numériques'] },
    { name: 'Botpress', logo: 'https://avatars.githubusercontent.com/u/23510677?s=200&v=4', category: ['IA & Outils numériques'] },
    { name: 'Gemini', logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg', category: ['IA & Outils numériques'] },
    { name: 'Prezi', logo: 'https://avatars.githubusercontent.com/u/888466?s=200&v=4', category: ['IA & Outils numériques'] },

    // Hébergement & Web
    { name: 'Hébergement & Web', logo: 'https://cdn-icons-png.flaticon.com/512/1183/1183621.png', category: ['Hébergement & Web'] },
  ];

  const filters = [
    { name: 'Toutes', color: 'blue' },
    { name: 'Administration système', color: 'purple' },
    { name: 'Réseau', color: 'green' },
    { name: 'Sécurité', color: 'red' },
    { name: 'Monitoring & Backup', color: 'yellow' },
    { name: 'Virtualisation', color: 'indigo' },
    { name: 'IA & Outils numériques', color: 'pink' },
    { name: 'Hébergement & Web', color: 'cyan' }
  ];

  const filteredTechnologies = activeFilter === 'Toutes'
    ? technologies
    : technologies.filter(tech => tech.category.includes(activeFilter));

  // All hooks declared at top level (never conditionally)
  const heroReveal = useScrollReveal();
  const titleReveal = useScrollReveal();
  const catAdminReveal = useScrollReveal();
  const catReseauReveal = useScrollReveal();
  const catSecuriteReveal = useScrollReveal();
  const catMonitoringReveal = useScrollReveal();
  const catVirtualisationReveal = useScrollReveal();
  const catIAReveal = useScrollReveal();
  const filteredStagger = useStaggerReveal(filteredTechnologies.length);

  const categoryReveals = [catAdminReveal, catReseauReveal, catSecuriteReveal, catMonitoringReveal, catVirtualisationReveal, catIAReveal];

  const getButtonColor = (filterName: string) => {
    const isActive = activeFilter === filterName;

    if (isActive) {
      return 'bg-linear-to-r from-red-600 to-green-600 text-white shadow-lg scale-105';
    }
    return 'bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-md hover:shadow-lg border border-slate-200 dark:border-slate-700';
  };

  const categories = [
    {
      name: 'Administration système',
      colorFrom: 'purple-600', colorTo: 'purple-400',
      gradientHeader: 'from-purple-700 to-purple-500',
      borderColor: 'border-purple-100 dark:border-purple-900 hover:border-purple-300 dark:hover:border-purple-700',
      hoverBg: 'from-purple-50 to-transparent dark:from-purple-900/20 dark:to-transparent',
      hoverText: 'group-hover:text-purple-700 dark:group-hover:text-purple-400',
      gridCols: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
    },
    {
      name: 'Réseau',
      colorFrom: 'green-600', colorTo: 'green-400',
      gradientHeader: 'from-green-700 to-green-500',
      borderColor: 'border-green-100 dark:border-green-900 hover:border-green-300 dark:hover:border-green-700',
      hoverBg: 'from-green-50 to-transparent dark:from-green-900/20 dark:to-transparent',
      hoverText: 'group-hover:text-green-700 dark:group-hover:text-green-400',
      gridCols: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    },
    {
      name: 'Sécurité',
      colorFrom: 'red-600', colorTo: 'red-400',
      gradientHeader: 'from-red-700 to-red-500',
      borderColor: 'border-red-100 dark:border-red-900 hover:border-red-300 dark:hover:border-red-700',
      hoverBg: 'from-red-50 to-transparent dark:from-red-900/20 dark:to-transparent',
      hoverText: 'group-hover:text-red-700 dark:group-hover:text-red-400',
      gridCols: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
    },
    {
      name: 'Monitoring & Backup',
      colorFrom: 'amber-600', colorTo: 'amber-400',
      gradientHeader: 'from-amber-700 to-amber-500',
      borderColor: 'border-amber-100 dark:border-amber-900 hover:border-amber-300 dark:hover:border-amber-700',
      hoverBg: 'from-amber-50 to-transparent dark:from-amber-900/20 dark:to-transparent',
      hoverText: 'group-hover:text-amber-700 dark:group-hover:text-amber-400',
      gridCols: 'grid-cols-2 md:grid-cols-2 lg:grid-cols-4',
    },
    {
      name: 'Virtualisation',
      colorFrom: 'indigo-600', colorTo: 'indigo-400',
      gradientHeader: 'from-indigo-700 to-indigo-500',
      borderColor: 'border-indigo-100 dark:border-indigo-900 hover:border-indigo-300 dark:hover:border-indigo-700',
      hoverBg: 'from-indigo-50 to-transparent dark:from-indigo-900/20 dark:to-transparent',
      hoverText: 'group-hover:text-indigo-700 dark:group-hover:text-indigo-400',
      gridCols: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-3',
    },
    {
      name: 'IA & Outils numériques',
      colorFrom: 'pink-600', colorTo: 'pink-400',
      gradientHeader: 'from-pink-700 to-pink-500',
      borderColor: 'border-pink-100 dark:border-pink-900 hover:border-pink-300 dark:hover:border-pink-700',
      hoverBg: 'from-pink-50 to-transparent dark:from-pink-900/20 dark:to-transparent',
      hoverText: 'group-hover:text-pink-700 dark:group-hover:text-pink-400',
      gridCols: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    },
  ];

  return (
    <section id="technologies" className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Background décoratif amélioré */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-slate-200 dark:bg-red-900/15 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 bg-slate-200 dark:bg-green-900/15 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-slate-200 dark:bg-red-900/15 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section amélioré */}
        <div ref={heroReveal.ref} className={`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 rounded-3xl p-12 md:p-20 text-center mb-20 shadow-2xl relative overflow-hidden scroll-reveal scroll-reveal-up ${heroReveal.isRevealed ? 'revealed' : ''}`}>
          {/* Pattern de fond */}
          <div className={`absolute inset-0 opacity-10 scroll-reveal scroll-reveal-up ${heroReveal.isRevealed ? 'revealed' : ''}`}>
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <div className="relative">
            <span className="inline-block text-slate-300 dark:text-slate-400 text-sm font-semibold tracking-widest uppercase bg-white/20 dark:bg-white/10 px-4 py-2 rounded-full mb-6">
              Stack Technique
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Technologies maîtrisées
            </h2>
            <p className="text-lg md:text-xl text-slate-200 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Découvrez les différentes technologies que j'utilise et maîtrise dans mes projets professionnels
            </p>
          </div>
        </div>

        {/* Section Title épurée */}
        <div ref={titleReveal.ref} className={`text-center mb-16 scroll-reveal scroll-reveal-up ${titleReveal.isRevealed ? 'revealed' : ''}`}>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-12 h-1 bg-linear-to-r from-red-500 to-green-500 rounded-full"></div>
            <div className="w-4 h-1 bg-linear-to-r from-red-500 to-green-500 rounded-full"></div>
            <div className="w-2 h-1 bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* Filtres améliorés */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-xl ${getButtonColor(filter.name)}`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Section par catégorie */}
        {activeFilter === 'Toutes' ? (
          <>
            {categories.map((cat, catIndex) => {
              const reveal = categoryReveals[catIndex];
              const catTechs = technologies.filter(t => t.category.includes(cat.name));
              return (
                <div key={cat.name} className="mb-20">
                  <div
                    ref={reveal.ref}
                    className={`flex items-center gap-4 mb-8 scroll-reveal scroll-reveal-left ${reveal.isRevealed ? 'revealed' : ''}`}
                  >
                    <div className={`w-12 h-1 bg-linear-to-r from-${cat.colorFrom} to-${cat.colorTo} rounded-full`}></div>
                    <h4 className={`text-3xl font-bold bg-linear-to-r ${cat.gradientHeader} bg-clip-text text-transparent`}>
                      {cat.name}
                    </h4>
                    <div className={`flex-1 h-1 bg-linear-to-r from-${cat.colorTo} to-transparent rounded-full`}></div>
                  </div>
                  <div className={`grid ${cat.gridCols} gap-6`}>
                    {catTechs.map((tech, index) => (
                      <div
                        key={index}
                        className={`group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 ${cat.borderColor} transition-all duration-300 hover:-translate-y-2 flex flex-col items-center relative overflow-hidden`}
                      >
                        <div className={`absolute inset-0 bg-linear-to-br ${cat.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        <div className="w-20 h-20 mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                          <Image
                            src={tech.logo}
                            alt={tech.name}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                        <p className={`text-sm font-semibold text-slate-800 dark:text-white text-center relative z-10 ${cat.hoverText} transition-colors duration-300`}>{tech.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div ref={filteredStagger.containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredTechnologies.map((tech, index) => (
              <div
                key={index}
                className={`group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-slate-100 dark:border-slate-700 hover:border-slate-800 dark:hover:border-slate-600 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center relative overflow-hidden scroll-reveal scroll-reveal-up ${filteredStagger.revealedItems[index] ? 'revealed' : ''}`}
              >
                <div className="absolute inset-0 bg-linear-to-br from-slate-50 to-transparent dark:from-slate-700/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-20 h-20 mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <p className="text-sm font-semibold text-slate-800 dark:text-white text-center relative z-10 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors duration-300">{tech.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

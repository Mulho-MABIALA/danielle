'use client';

import { useState } from 'react';
import Image from 'next/image';

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

  const getButtonColor = (filterName: string) => {
    const filter = filters.find(f => f.name === filterName);
    const isActive = activeFilter === filterName;

    switch (filter?.color) {
      case 'blue':
        return isActive ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-800 hover:bg-slate-200';
      case 'purple':
        return isActive ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700 hover:bg-purple-200';
      case 'green':
        return isActive ? 'bg-green-600 text-white' : 'bg-green-100 text-green-700 hover:bg-green-200';
      case 'red':
        return isActive ? 'bg-red-600 text-white' : 'bg-red-100 text-red-700 hover:bg-red-200';
      case 'yellow':
        return isActive ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-700 hover:bg-amber-200';
      case 'indigo':
        return isActive ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200';
      case 'pink':
        return isActive ? 'bg-pink-600 text-white' : 'bg-pink-100 text-pink-700 hover:bg-pink-200';
      case 'cyan':
        return isActive ? 'bg-cyan-600 text-white' : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200';
      default:
        return isActive ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
    }
  };

  return (
    <section id="technologies" className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Background décoratif amélioré */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-slate-800 dark:bg-slate-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 bg-slate-700 dark:bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-slate-600 dark:bg-slate-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section amélioré */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 rounded-3xl p-12 md:p-20 text-center mb-20 shadow-2xl relative overflow-hidden">
          {/* Pattern de fond */}
          <div className="absolute inset-0 opacity-10">
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
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full"></div>
            <div className="w-4 h-1 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full"></div>
            <div className="w-2 h-1 bg-slate-600 rounded-full"></div>
          </div>
        </div>

        {/* Filtres améliorés */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 ${getButtonColor(filter.name)}`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Section par catégorie */}
        {activeFilter === 'Toutes' ? (
          <>
            {/* Administration système */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
                <h4 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">
                  Administration système
                </h4>
                <div className="flex-1 h-1 bg-gradient-to-r from-purple-400 to-transparent rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {technologies.filter(t => t.category.includes('Administration système')).map((tech, index) => (
                  <div
                    key={index}
                    className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-purple-100 dark:border-purple-900 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="w-20 h-20 mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white text-center relative z-10 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors duration-300">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Réseau */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-linear-to-r from-green-600 to-green-400 rounded-full"></div>
                <h4 className="text-3xl font-bold bg-linear-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
                  Réseau
                </h4>
                <div className="flex-1 h-1 bg-linear-to-r from-green-400 to-transparent rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {technologies.filter(t => t.category.includes('Réseau')).map((tech, index) => (
                  <div
                    key={index}
                    className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-green-100 dark:border-green-900 hover:border-green-300 dark:hover:border-green-700 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-green-50 to-transparent dark:from-green-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="w-20 h-20 mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white text-center relative z-10 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-300">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sécurité */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-linear-to-r from-red-600 to-red-400 rounded-full"></div>
                <h4 className="text-3xl font-bold bg-linear-to-r from-red-700 to-red-500 bg-clip-text text-transparent">
                  Sécurité
                </h4>
                <div className="flex-1 h-1 bg-linear-to-r from-red-400 to-transparent rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {technologies.filter(t => t.category.includes('Sécurité')).map((tech, index) => (
                  <div
                    key={index}
                    className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-red-100 dark:border-red-900 hover:border-red-300 dark:hover:border-red-700 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-red-50 to-transparent dark:from-red-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="w-20 h-20 mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white text-center relative z-10 group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors duration-300">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Monitoring & Backup */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-linear-to-r from-amber-600 to-amber-400 rounded-full"></div>
                <h4 className="text-3xl font-bold bg-linear-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
                  Monitoring & Backup
                </h4>
                <div className="flex-1 h-1 bg-linear-to-r from-amber-400 to-transparent rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {technologies.filter(t => t.category.includes('Monitoring & Backup')).map((tech, index) => (
                  <div
                    key={index}
                    className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-amber-100 dark:border-amber-900 hover:border-amber-300 dark:hover:border-amber-700 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-amber-50 to-transparent dark:from-amber-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="w-20 h-20 mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white text-center relative z-10 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors duration-300">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Virtualisation */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-linear-to-r from-indigo-600 to-indigo-400 rounded-full"></div>
                <h4 className="text-3xl font-bold bg-linear-to-r from-indigo-700 to-indigo-500 bg-clip-text text-transparent">
                  Virtualisation
                </h4>
                <div className="flex-1 h-1 bg-linear-to-r from-indigo-400 to-transparent rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {technologies.filter(t => t.category.includes('Virtualisation')).map((tech, index) => (
                  <div
                    key={index}
                    className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-indigo-100 dark:border-indigo-900 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-indigo-50 to-transparent dark:from-indigo-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="w-20 h-20 mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white text-center relative z-10 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors duration-300">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* IA & Outils numériques */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-linear-to-r from-pink-600 to-pink-400 rounded-full"></div>
                <h4 className="text-3xl font-bold bg-linear-to-r from-pink-700 to-pink-500 bg-clip-text text-transparent">
                  IA & Outils numériques
                </h4>
                <div className="flex-1 h-1 bg-linear-to-r from-pink-400 to-transparent rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {technologies.filter(t => t.category.includes('IA & Outils numériques')).map((tech, index) => (
                  <div
                    key={index}
                    className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-pink-100 dark:border-pink-900 hover:border-pink-300 dark:hover:border-pink-700 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-pink-50 to-transparent dark:from-pink-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="w-20 h-20 mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white text-center relative z-10 group-hover:text-pink-700 dark:group-hover:text-pink-400 transition-colors duration-300">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredTechnologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-slate-100 dark:border-slate-700 hover:border-slate-800 dark:hover:border-slate-600 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center relative overflow-hidden"
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

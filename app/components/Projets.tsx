'use client';

import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  github?: string;
  external?: string;
  status?: string;
};

type Documentation = {
  title: string;
  description: string;
  icon: string;
  pdf: string;
};

export default function Projets() {
  const projetsAnnee2: Project[] = [
    {
      title: 'Projet Apache Guacamole',
      description: 'Projet de spécialisation de deuxième année basé sur Apache Guacamole, une solution de bureau à distance qui permet l\'accès aux serveurs via un navigateur web sans plugin supplémentaire.',
      image: '/guacamole1.png',
      tags: ['Apache', 'Guacamole', 'Remote Desktop', 'Docker', 'HTML5'],
      date: '2024 - 2025',
      github: '#',
    },
    {
      title: 'Sécurisation d\'infrastructure',
      description: 'Mise en place d\'une infrastructure sécurisée avec pare-feu, détection d\'intrusion et gestion des acces basée sur OPNsense et Fail2ban.',
      image: '/guacamole2.png',
      tags: ['OPNsense', 'Fail2ban', 'HTTPS', 'SSH sécurisé'],
      date: 'Oct 2024 - Déc 2024',
      github: '#',
      status: 'En cours',
    },
  ];

  const docsAnnee2: Documentation[] = [
    {
      title: 'Récupération d\'une configuration',
      description: 'Procédures de sauvegarde et restauration des configurations systèmes - Backup des...',
      icon: '🖥️',
      pdf: '/Backuppc.pdf',
    },
    {
      title: 'Active Directory Windows Server',
      description: 'Installation et administration d\'Active Directory - Gestion des utilisateurs, GPO, et services...',
      icon: '🔍',
      pdf: '/Active_Directory.pdf',
    },
    {
      title: 'Authentification GPG',
      description: 'Mise en place de l\'authentification par clés GPG - Chiffrement et signature des communication...',
      icon: '🔐',
      pdf: '/Chiffrement_TLS.pdf',
    },
    {
      title: 'Configuration d\'un serveur BDD',
      description: 'Installation et configuration d\'un serveur MySQL - Sécurisation, optimisation des performances...',
      icon: '🗄️',
      pdf: '/Maria_DB.pdf',
    },
    {
      title: 'Configuration TLS sur ProFTPD',
      description: 'Sécurisation d\'un serveur FTP avec ProFTPD - Configuration du chiffrement TLS et gestion d...',
      icon: '🐧',
      pdf: '/Chiffrement_TLS.pdf',
    },
    {
      title: 'Contexte GSB',
      description: 'Présentation détaillée du projet Galaxy Swiss Bourdin - Analyse des besoins et spécification...',
      icon: '🗃️',
      pdf: '/Contexte_GSB.pdf',
    },
    {
      title: 'DHCP 1',
      description: 'Configuration de base d\'un serveur DHCP - Installation et paramétrage initial du service...',
      icon: '🖧',
      pdf: '/DHCP.pdf',
    },
    {
      title: 'DHCP 2',
      description: 'Configuration avancée DHCP - Réservations, options DHCP et haute disponibilité du service.',
      icon: '🖧',
      pdf: '/DHCP.pdf',
    },
    {
      title: 'DNS',
      description: 'Configuration d\'un serveur DNS sous Windows Server - Zones DNS, enregistrements et...',
      icon: '🌐',
      pdf: '/serveur_DNS.pdf',
    },
    {
      title: 'FTP',
      description: 'Déploiement d\'un serveur FTP Windows - Configuration IIS, gestion des utilisateurs et...',
      icon: '💻',
      pdf: '/Serveur_FTP&SAMBA.pdf',
    },
    {
      title: 'HTTP',
      description: 'Configuration d\'un serveur web IIS - Installation, hébergement de sites et sécurisation HTTPS.',
      icon: '☁️',
      pdf: '/Serveur_HTTP.pdf',
    },
    {
      title: 'Installation',
      description: 'Guide d\'installation pas à pas de Windows Server - Configuration initiale et paramétrage...',
      icon: '🗃️',
      pdf: '/Installation.pdf',
    },
    {
      title: 'OPNsense',
      description: 'Déploiement d\'OPNsense comme pare-feu - Configuration des règles, VPN et surveillance ...',
      icon: '🛡️',
      pdf: '/OPNsense.pdf',
    },
    {
      title: 'Portsentry & Fail2ban',
      description: 'Protection contre les intrusions avec Portsentry et Fail2ban - Détection et blocage automatiqu...',
      icon: '🔒',
      pdf: '/fail2ban.pdf',
    },
    {
      title: 'Serveur de sauvegarde',
      description: 'Mise en place d\'une solution de backup centralisée - Planification et automatisation de...',
      icon: '💾',
      pdf: '/Backuppc.pdf',
    },
    {
      title: 'Zabbix',
      description: 'Installation et configuration de Zabbix - Supervision complète de l\'infrastructure et...',
      icon: '📊',
      pdf: '/ZABBIX.pdf',
    },
  ];

  const projetsAnnee1: Project[] = [
    {
      title: 'Virtualisation d\'infrastructure',
      description: 'Mise en place d\'une infrastructure virtuelle complète avec Proxmox, comprenant plusieurs serveurs et un système de sauvegarde.',
      image: '/proxmox_image.png',
      tags: ['Proxmox', 'BackupPC', 'Linux', 'Virtualisation'],
      date: 'Nov 2023 - Déc 2023',
      github: '#',
    },
    {
      title: 'Monitoring réseau avec Zabbix',
      description: 'Implémentation d\'une solution de surveillance réseau complète avec Zabbix pour le monitoring en temps réel des équipements et services.',
      image: '/ZABBIX.pdf',
      tags: ['Zabbix', 'SNMP', 'Monitoring', 'Network'],
      date: 'Jan 2024 - Fév 2024',
      github: '#',
    },
  ];

  const docsAnnee1: Documentation[] = [
    {
      title: 'Munin',
      description: 'Installation de Munin pour la supervision système et réseau - Monitoring de ressource...',
      icon: '🖥️',
      pdf: '/Munin.pdf',
    },
    {
      title: 'HTTP',
      description: 'Installation et configuration d\'un serveur web Apache2 sous Linux avec sécurisation SSL/TL...',
      icon: '☁️',
      pdf: '/Serveur_HTTP.pdf',
    },
    {
      title: 'FTP',
      description: 'Mise en place d\'un serveur FTP sécurisé avec vsftpd - Gestion des utilisateurs, des droits...',
      icon: '💻',
      pdf: '/ftp.pdf',
    },
    {
      title: 'DHCP',
      description: 'Configuration d\'un serveur DHCP sous Linux - Gestion des baux, des plages d\'adresses IP et...',
      icon: '🖧',
      pdf: '/DHCP.pdf',
    },
    {
      title: 'Portsentry',
      description: 'Configuration du pare-feu Linux avec iptables - Règles de filtrage, NAT, redirection de ports et...',
      icon: '🛡️',
      pdf: '/fail2ban.pdf',
    },
    {
      title: 'LAMP',
      description: 'Installation et configuration d\'une pile LAMP (Linux, Apache, MySQL, PHP) pour héberger...',
      icon: '🗃️',
      pdf: '/lamp.pdf',
    },
    {
      title: 'MySQL',
      description: 'Installation et paramétrage d\'un serveur DNS avec BIND9 - Configuration des zones, des...',
      icon: '🔍',
      pdf: '/Maria_DB.pdf',
    },
    {
      title: 'Contexte',
      description: 'Analyse approfondie du contexte du projet: besoins du client, contraintes techniques et...',
      icon: '🗃️',
      pdf: '/Contexte_GSB.pdf',
    },
    {
      title: 'Installation',
      description: 'Guide détaillé d\'installation et de configuration initiale des systèmes Linux et Windows Server...',
      icon: '🗃️',
      pdf: '/Installation.pdf',
    },
    {
      title: 'BackupPC ou Rsync',
      description: 'Configuration de Rsync pour la synchronisation et la sauvegarde automatisée des fichiers entr...',
      icon: '☁️',
      pdf: '/Backuppc.pdf',
    },
    {
      title: 'SSH',
      description: 'Mise en place d\'une connexion SSH sécurisée avec authentification par clés, configuration d...',
      icon: '🔒',
      pdf: '/SSH.pdf',
    },
    {
      title: 'Netfilter',
      description: 'Configuration du pare-feu Linux avec iptables - Règles de filtrage, NAT, redirection de ports et...',
      icon: '🌐',
      pdf: '/Netfilter.pdf',
    },
  ];

  return (
    <section id="projets" className="relative py-32 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl p-12 md:p-20 text-center mb-20 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Mes Projets
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Découvrez les projets sur lesquels j&apos;ai travaillé durant ma formation, avec un accent particulier sur mon projet de spécialisation de deuxième année basé sur Apache Guacamole, une solution de bureau à distance HTML5 permettant d&apos;accéder aux serveurs sans logiciel supplémentaire.
            </p>
          </div>
        </div>

        {/* À propos du projet Apache Guacamole */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-lg border border-slate-200 dark:border-slate-700 mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6">
            À propos du projet Apache Guacamole
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            Apache Guacamole est une application de bureau à distance sans client qui permet d&apos;accéder aux serveurs via un navigateur web. Ce projet de spécialisation de deuxième année comprend l&apos;installation, la configuration et la sécurisation d&apos;un serveur Guacamole pour permettre l&apos;accès à distance à différents environnements informatiques.
          </p>
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            Technologies utilisées: Docker, Apache, HTML5, MySQL, LDAP, RDP, SSH, VNC et plus encore.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Voir le dépôt GitHub
            </a>
            <a href="https://guacamole.apache.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Site officiel Apache Guacamole
            </a>
          </div>
        </div>

        {/* Titre principal */}
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Mes Projets & Documentations
          </h3>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-3xl mx-auto italic">
            Découvrez mes réalisations techniques et documentations tout au long de mon parcours de formation
          </p>
        </div>

        {/* ===== BTS SIO SISR - Année 2 ===== */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">BTS SIO SISR - Année 2</h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 ml-16 mb-10">Projets de spécialisation</p>

          {/* Projets Année 2 */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projetsAnnee2.map((projet, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-56 relative bg-slate-100 dark:bg-slate-700 overflow-hidden">
                  <Image
                    src={projet.image}
                    alt={projet.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{projet.title}</h4>
                    <div className="flex items-center gap-2">
                      {projet.github && (
                        <a href={projet.github} className="text-slate-500 hover:text-blue-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </a>
                      )}
                      {projet.external && (
                        <a href={projet.external} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{projet.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projet.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400">{projet.date}</span>
                    <div className="flex items-center gap-3">
                      {projet.status && (
                        <span className="text-sm text-orange-500 font-semibold">{projet.status}</span>
                      )}
                      {projet.github && (
                        <a href={projet.github} className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                          Voir le code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Documentations Techniques Année 2 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Documentations Techniques</h4>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docsAnnee2.map((doc, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl mb-3">{doc.icon}</div>
                  <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{doc.title}</h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed line-clamp-2">{doc.description}</p>
                  <div className="flex gap-3">
                    <a
                      href={doc.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Visualiser
                    </a>
                    <a
                      href={doc.pdf}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Télécharger
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== BTS SIO SISR - Année 1 ===== */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">BTS SIO SISR - Année 1</h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 ml-16 mb-10">Fondamentaux de l&apos;administration système</p>

          {/* Projets Année 1 */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projetsAnnee1.map((projet, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-56 relative bg-slate-100 dark:bg-slate-700 overflow-hidden">
                  <Image
                    src={projet.image}
                    alt={projet.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{projet.title}</h4>
                    <div className="flex items-center gap-2">
                      {projet.github && (
                        <a href={projet.github} className="text-slate-500 hover:text-blue-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{projet.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projet.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400">{projet.date}</span>
                    {projet.github && (
                      <a href={projet.github} className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Voir le code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Documentations Techniques Année 1 */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Documentations Techniques</h4>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docsAnnee1.map((doc, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl mb-3">{doc.icon}</div>
                  <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{doc.title}</h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed line-clamp-2">{doc.description}</p>
                  <div className="flex gap-3">
                    <a
                      href={doc.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Visualiser
                    </a>
                    <a
                      href={doc.pdf}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Télécharger
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

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
  const heroReveal = useScrollReveal();
  const aboutReveal = useScrollReveal();
  const titleReveal = useScrollReveal();
  const year2HeaderReveal = useScrollReveal();
  const year1HeaderReveal = useScrollReveal();
  const docsAnnee2Stagger = useStaggerReveal(16);
  const docsAnnee1Stagger = useStaggerReveal(12);

  const projetsAnnee2: Project[] = [
    {
      title: 'Projet Apache Guacamole',
      description: 'Projet de spécialisation de deuxième année basé sur Apache Guacamole, une solution de bureau à distance qui permet l\'accès aux serveurs via un navigateur web sans plugin supplémentaire.',
      image: '/guacamole1.png',
      tags: ['Apache', 'Guacamole', 'Remote Desktop', 'Docker', 'HTML5'],
      date: '2025 - 2026',
      github: '#',
    },
    {
      title: 'Sécurisation d\'infrastructure',
      description: 'Mise en place d\'une infrastructure sécurisée avec 2 serveurs DNS , un serveur web chiffré , avec pour service Wordpress.',
      image: '/guacamole2.png',
      tags: ['OPNsense', 'DNS', 'HTTPS', 'SSH sécurisé'],
      date: 'Fév 2026 - Mars 2026',
      github: '#',
      status: 'En cours',
    },
  ];

  const docsAnnee2: Documentation[] = [
    {
      title: 'Installation et Configuration des systèmes GSB ',
      description: 'Prodécure d\'installation et de  configuration du réseau GSB ...',
      icon: '🖥️',
      pdf: '/Installation&Configuration_Systeme.pdf',
    },
    {
      title: 'Serveur de sauvegarde BACKUPPC',
      description: 'Installation et Configuration du service de sauvegarde Backuppc ...',
      icon: '🔍',
      pdf: '/Backuppc.pdf',
    },
    {
      title: 'Serveur DHCP',
      description: 'Mise en place de D\'un serveur d\'attribution automatique de configuration réseau , serveur DHCP ...',
      icon: '🔐',
      pdf: '/DHCP.pdf',
    },
    {
      title: 'Configuration d\'un serveur BDD',
      description: 'Installation et configuration d\'un serveur MySQL - Sécurisation, optimisation des performances...',
      icon: '🗄️',
      pdf: '/Maria_DB.pdf',
    },
    {
      title: 'Configuration du serveur ProFTPD & SAMBA',
      description: 'Sécurisation d\'un serveur FTP avec ProFTPD - Configuration du serveur de partage de fichiers SAMBA ...',
      icon: '🐧',
      pdf: '/Serveur_FTP&SAMBA.pdf',
    },
    {
      title: 'Contexte GSB',
      description: 'Présentation détaillée dU continent Océanie ...',
      icon: '🗃️',
      pdf: '/Contexte_GSB.pdf',
    },
    {
      title: 'Configuration de BIND9',
      description: 'Configuration de base d\'un serveur DNS - Zones DNS, enregistrements etc...',
      icon: '🖧',
      pdf: '/serveur_DNS.pdf',
    },
    {
      title: 'Coçnfiguration du serveur Web ',
      description: 'Configuration de Apache2 , avec VirtalHost intégrés .',
      icon: '🖧',
      pdf: '/Serveur_HTTP.pdf',
    },
    {
      title: 'ZABBIX',
      description: 'Configuration d\'un serveur de supervision ZABBIX - ...',
      icon: '🌐',
      pdf: '/ZABBIX.pdf',
    },
    {
      title: 'Installation et Configuration De OpenSense ',
      description: 'Installation et Configuration du parefeu Moderne Opensense avec IHM ...',
      icon: '💻',
      pdf: '/Configuration_du_pare-feu_opensense (1).pdf',
    },
    {
      title: 'Mise en Place de l\'hyperviseur PROXMOX ',
      description: 'Déploiement d\'un serveur Proxmox permettant la virtualisation de systèmes Windows et Linux, avec gestion des ressources, du stockage et du réseau virtuel..',
      icon: '☁️',
      pdf: '/Deploiement_Proxmox.pdf',
    },
    {
      title: 'Configuration de VLAN ',
      description: 'Guide de Configuration de VLAN sur un SWITCH Cisco ...',
      icon: '🗃️',
      pdf: '/Installation.pdf',
    },
    {
      title: 'Inventaire des Machines Et VLAN de GSB',
      description: 'Ensemble des Machines , d\'adressage IP et des Vlans de l\'organisme GSB  ...',
      icon: '🛡️',
      pdf: '/inventaires_des_vlans_et_machines_de_gsb.pdf',
    },
    // {
    //   title: 'Portsentry & Fail2ban',
    //   description: 'Protection contre les intrusions avec Portsentry et Fail2ban - Détection et blocage automatiqu...',
    //   icon: '🔒',
    //   pdf: '/fail2ban.pdf',
    // },
    {
      title: 'Evolution de L\'infrastructure dû à une épreuve sur machine ',
      description: 'Modification du réseau et ajout de VLAN ...',
      icon: '💾',
      pdf: '/epreuve_sur_machine.pdf',
    },
    {
      title: 'Chiffrement Avec SSL/TLS ',
      description: 'Implémentation du chiffrement SSL/TLS sur un serveur afin de protéger les flux réseau contre l\'interception et assurer une connexion sécurisée en HTTPS....',
      icon: '📊',
      pdf: '/Chiffrement_TLS.pdf',
    },
  ];

  // const projetsAnnee1: Project[] = [
  //   {
  //     title: 'Virtualisation d\'infrastructure',
  //     description: 'Mise en place d\'une infrastructure virtuelle complète avec Proxmox, comprenant plusieurs serveurs et un système de sauvegarde.',
  //     image: '/proxmox_image.png',
  //     tags: ['Proxmox', 'BackupPC', 'Linux', 'Virtualisation'],
  //     date: 'Nov 2024 - Déc 2024',
  //     github: '',
  //   },
  //   {
  //     title: 'Monitoring réseau avec Zabbix',
  //     description: 'Implémentation d\'une solution de surveillance réseau complète avec Zabbix pour le monitoring en temps réel des équipements et services.',
  //     image: '/virtualBox_image.jpg',
  //     tags: ['Zabbix', 'SNMP', 'Monitoring', 'Network'],
  //     date: 'Jan 2025 - Fév 2025',
  //     github: '',
  //   },
  // ];

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
      title: 'Fail2ban',
      description: 'Configuration d\' service analysant en temps réel les journaux d\'évènement de divers services (SSH, Apache, FTP, entre autres) à la recherche de comportements malveillants',
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
      title: 'Rsync',
      description: 'Configuration de Rsync pour la synchronisation et la sauvegarde automatisée des fichiers entr...',
      icon: '☁️',
      pdf: '/sauvegarde_Rsync.pdf',
    },
    {
      title: 'SSH',
      description: 'Mise en place d\'une connexion SSH sécurisée avec authentification par clés, configuration d...',
      icon: '🔒',
      pdf: '/creation_des_cles_ssh.pdf',
    },
    {
      title: 'Netfilter',
      description: 'Configuration du pare-feu Linux avec iptables - Règles de filtrage, NAT, redirection de ports et...',
      icon: '🌐',
      pdf: '/netfilter_iptables.pdf',
    },
  ];

  return (
    <section id="projets" className="relative py-32 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={heroReveal.ref}
          className={`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 rounded-3xl p-12 md:p-20 text-center mb-20 shadow-2xl relative overflow-hidden transition-all duration-1000 ${heroReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          {/* Subtle blue glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-800/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Mes Projets
            </h2>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Découvrez les projets sur lesquels j&apos;ai travaillé durant ma formation, avec un accent particulier sur mon projet de spécialisation de deuxième année basé sur Apache Guacamole, une solution de bureau à distance HTML5 permettant d&apos;accéder aux serveurs sans logiciel supplémentaire.
            </p>
          </div>
        </div>

        {/* À propos du projet Apache Guacamole */}
        <div
          ref={aboutReveal.ref}
          className={`bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-lg border border-slate-200 dark:border-slate-700 mb-20 transition-all duration-700 ${aboutReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">
            À propos du projet Apache Guacamole
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            Apache Guacamole est une application de bureau à distance sans client qui permet d&apos;accéder aux serveurs via un navigateur web. Ce projet de spécialisation de deuxième année comprend l&apos;installation, la configuration et la sécurisation d&apos;un serveur Guacamole pour permettre l&apos;accès à distance à différents environnements informatiques.
          </p>
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            Technologies utilisées: Docker, Apache, HTML5, MySQL, LDAP, RDP, SSH, VNC et plus encore.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold hover:text-blue-800 dark:hover:text-blue-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Voir le dépôt GitHub
            </a>
            <a href="https://guacamole.apache.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold hover:text-blue-800 dark:hover:text-blue-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Site officiel Apache Guacamole
            </a>
          </div>
        </div>

        {/* Titre principal */}
        <div
          ref={titleReveal.ref}
          className={`text-center mb-20 transition-all duration-700 ${titleReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Mes Projets & Documentations
          </h3>
          <div className="w-20 h-1 bg-linear-to-r from-blue-800 to-indigo-800 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-3xl mx-auto italic">
            Découvrez mes réalisations techniques et documentations tout au long de mon parcours de formation
          </p>
        </div>

        {/* ===== BTS SIO SISR - Année 2 ===== */}
        <div className="mb-20">
          <div
            ref={year2HeaderReveal.ref}
            className={`flex items-center gap-4 mb-2 transition-all duration-700 ${year2HeaderReveal.isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="w-12 h-12 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">BTS SIO SISR - Année 2</h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 ml-16 mb-10">Projets de spécialisation</p>

          {/* Projets Année 2 */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projetsAnnee2.map((projet, index) => (
              <div key={index} className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
                <div className="h-56 relative bg-slate-100 dark:bg-slate-700 overflow-hidden">
                  <Image
                    src={projet.image}
                    alt={projet.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-t from-slate-900/60 to-transparent transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{projet.title}</h4>
                    <div className="flex items-center gap-2">
                      {projet.github && (
                        <a href={projet.github} className="text-slate-500 hover:text-slate-800 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </a>
                      )}
                      {projet.external && (
                        <a href={projet.external} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-800 transition-colors">
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
                      <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400">{projet.date}</span>
                    <div className="flex items-center gap-3">
                      {projet.status && (
                        <span className="text-sm text-amber-500 font-semibold bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-full">{projet.status}</span>
                      )}
                      {projet.github && (
                        <a href={projet.github} className="inline-flex items-center gap-1 text-sm text-slate-700 dark:text-slate-300 font-semibold hover:text-slate-900 transition-colors">
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
              <svg className="w-6 h-6 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Documentations Techniques</h4>
            </div>
            <div ref={docsAnnee2Stagger.containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docsAnnee2.map((doc, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-2 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
                  style={{
                    opacity: docsAnnee2Stagger.revealedItems[index] ? 1 : 0,
                    transform: docsAnnee2Stagger.revealedItems[index] ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.5s ease',
                  }}
                >
                  <div className="w-10 h-10 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg flex items-center justify-center text-2xl mb-3">{doc.icon}</div>
                  <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{doc.title}</h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed line-clamp-2">{doc.description}</p>
                  <div className="flex gap-3">
                    <a
                      href={doc.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
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
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
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
          <div
            ref={year1HeaderReveal.ref}
            className={`flex items-center gap-4 mb-2 transition-all duration-700 ${year1HeaderReveal.isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="w-12 h-12 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">BTS SIO SISR - Année 1</h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 ml-16 mb-10">Fondamentaux de l&apos;administration système</p>

          {/* Projets Année 1 */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projetsAnnee1.map((projet, index) => (
              <div key={index} className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
                <div className="h-56 relative bg-slate-100 dark:bg-slate-700 overflow-hidden">
                  <Image
                    src={projet.image}
                    alt={projet.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-t from-slate-900/60 to-transparent transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{projet.title}</h4>
                    <div className="flex items-center gap-2">
                      {projet.github && (
                        <a href={projet.github} className="text-slate-500 hover:text-slate-800 transition-colors">
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
                      <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400">{projet.date}</span>
                    {projet.github && (
                      <a href={projet.github} className="inline-flex items-center gap-1 text-sm text-slate-700 dark:text-slate-300 font-semibold hover:text-slate-900 transition-colors">
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
              <svg className="w-6 h-6 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Documentations Techniques</h4>
            </div>
            <div ref={docsAnnee1Stagger.containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docsAnnee1.map((doc, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-2 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
                  style={{
                    opacity: docsAnnee1Stagger.revealedItems[index] ? 1 : 0,
                    transform: docsAnnee1Stagger.revealedItems[index] ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.5s ease',
                  }}
                >
                  <div className="w-10 h-10 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg flex items-center justify-center text-2xl mb-3">{doc.icon}</div>
                  <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{doc.title}</h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed line-clamp-2">{doc.description}</p>
                  <div className="flex gap-3">
                    <a
                      href={doc.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
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
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
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

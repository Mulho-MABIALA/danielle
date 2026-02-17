'use client';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      type: 'stage',
      title: 'Stagiaire Administrateur Système & Sécurité',
      company: 'DGFIP (ESI)',
      location: 'France',
      period: '05/01/2026 - 13/02/2026',
      description: 'Stage en administration système et sécurité informatique',
      missions: [
        'Administrer des pares-feux Fortinet du réseau d\'administration de la DGFIP',
        'Traiter des demandes d\'ouverture de flux',
        'Créer des règles à implémenter sur le Pare-feu Fortinet',
        'Administrer la solution Bastion Wallix',
        'Mettre en œuvre et gérer des solutions de virtualisation',
      ],
      tags: ['Fortinet', 'Wallix', 'Sécurité', 'Virtualisation'],
      color: 'slate-800',
    },
    {
      id: 2,
      type: 'emploi',
      title: 'Employée de production',
      company: 'LIMOJOUX',
      location: 'Clermont-Ferrand',
      period: '15/07/2025 - 29/08/2025',
      description: 'Travail saisonnier en production alimentaire',
      missions: [
        'Mise en barquette et étiquetage de produits alimentaires',
        'Respect des règles d\'hygiène et de sécurité alimentaire',
        'Travail en équipe sur ligne de production',
      ],
      tags: ['Travail en équipe', 'Rigueur', 'Hygiène'],
      color: 'slate-600',
    },
    {
      id: 3,
      type: 'stage',
      title: 'Stagiaire en support à la PRA',
      company: 'Lije-Technologies',
      location: 'Couzeix',
      period: '26/05/2025 - 27/06/2025',
      description: 'Stage de première année BTS SIO',
      missions: [
        'Mettre en place d\'un environnement de développement géospatial via l\'installation de QGIS dans un conteneur Docker',
        'Rédiger une documentation technique détaillant la procédure d\'installation, de configuration et d\'utilisation',
      ],
      tags: ['Docker', 'QGIS', 'Documentation', 'Linux'],
      color: 'slate-700',
    },
  ];

  return (
    <section id="experiences" className="relative py-32 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      {/* Background décoratif */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-slate-200 dark:bg-slate-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-slate-100 dark:bg-slate-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-20">
          <span className="inline-block text-slate-600 dark:text-slate-300 text-sm font-semibold tracking-widest uppercase bg-slate-200 dark:bg-slate-700 px-4 py-2 rounded-full mb-4">
            Mon parcours
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Expériences
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-slate-800 dark:bg-slate-200 rounded-full"></div>
            <div className="w-4 h-1 bg-slate-600 dark:bg-slate-300 rounded-full"></div>
            <div className="w-2 h-1 bg-slate-400 dark:bg-slate-400 rounded-full"></div>
          </div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Mes stages et expériences professionnelles qui ont façonné mon parcours
          </p>
        </div>

        {/* Timeline des expériences */}
        <div className="relative max-w-4xl mx-auto">
          {/* Ligne verticale gauche */}
          <div className="absolute left-6 lg:left-8 top-0 w-1 h-full bg-gradient-to-b from-slate-800 via-slate-600 to-slate-400 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative flex items-start gap-8 pl-16 lg:pl-20"
              >
                {/* Point sur la timeline */}
                <div className="absolute left-4 lg:left-6 w-6 h-6 bg-slate-800 dark:bg-slate-200 rounded-full border-4 border-slate-50 dark:border-slate-900 z-10"></div>

                {/* Carte d'expérience */}
                <div className="w-full">
                  <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-2 border-slate-100 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-2xl transition-all duration-300">
                    {/* En-tête de la carte */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <span className={`inline-block bg-${exp.color} dark:bg-slate-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>
                          {exp.type === 'stage' ? 'Stage' : 'Emploi'}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {exp.title}
                        </h3>
                      </div>
                      <span className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold px-4 py-2 rounded-lg">
                        {exp.period}
                      </span>
                    </div>

                    {/* Entreprise et lieu */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      {exp.description}
                    </p>

                    {/* Missions */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-3">
                        Missions réalisées
                      </h4>
                      <ul className="space-y-2">
                        {exp.missions.map((mission, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                            <svg className="w-5 h-5 text-slate-500 dark:text-slate-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{mission}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 text-center hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-slate-800 dark:bg-slate-700 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white mb-1">2</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">Stages</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 text-center hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-slate-700 dark:bg-slate-600 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white mb-1">4+</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">Mois d'expérience</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 text-center hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-slate-600 dark:bg-slate-500 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white mb-1">1</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">Stage Sécurité</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 text-center hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-slate-500 dark:bg-slate-400 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white mb-1">3</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">Entreprises</p>
          </div>
        </div>
      </div>
    </section>
  );
}

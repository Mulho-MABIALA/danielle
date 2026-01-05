'use client';

export default function Formations() {
  return (
    <section id="formations" className="relative py-32 bg-white overflow-hidden">
      {/* Background décoratif */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-slate-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-20">
          <span className="inline-block text-slate-600 text-sm font-semibold tracking-widest uppercase bg-slate-100 px-4 py-2 rounded-full mb-4">
            Mon cursus
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Formations
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-slate-800 rounded-full"></div>
            <div className="w-4 h-1 bg-slate-600 rounded-full"></div>
            <div className="w-2 h-1 bg-slate-400 rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Colonne 1: Parcours Académique */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900">Parcours Académique</h3>
            </div>

            <div className="space-y-6">
              {/* BTS SIO */}
              <div className="group relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-slate-800 to-slate-600 rounded-full"></div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-100 hover:border-slate-300 hover:shadow-2xl transition-all duration-300 ml-4">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block bg-slate-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                      2024 - 2026
                    </span>
                    <div className="flex gap-2">
                      <span className="bg-slate-100 text-slate-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Motivée
                      </span>
                      <span className="bg-slate-200 text-slate-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Travailleuse
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    BTS Services Informatiques aux Organisations
                  </h4>
                  <p className="text-slate-600 font-medium mb-3">Option SISR - Systèmes et Réseaux</p>
                  <div className="flex items-center gap-2 text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-semibold">Lycée Beaupeyrat, Limoges</span>
                  </div>
                </div>
              </div>

              {/* Licence 2 */}
              <div className="group relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-slate-600 to-slate-400 rounded-full"></div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-100 hover:border-slate-300 hover:shadow-2xl transition-all duration-300 ml-4">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block bg-slate-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                      2023 - 2024
                    </span>
                    <span className="bg-slate-200 text-slate-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Passionnée
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Licence 2 Génie Logiciel
                  </h4>
                  <p className="text-slate-600 font-medium mb-3">Développement informatique</p>
                  <div className="flex items-center gap-2 text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">Institut International (2i), Congo-Brazzaville</span>
                  </div>
                </div>
              </div>

              {/* Baccalauréat */}
              <div className="group relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-slate-400 to-slate-200 rounded-full"></div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-100 hover:border-slate-300 hover:shadow-2xl transition-all duration-300 ml-4">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block bg-slate-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      2021 - 2022
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Baccalauréat Général
                  </h4>
                  <p className="text-slate-600 font-medium mb-3">Série D - Sciences Expérimentales</p>
                  <div className="flex items-center gap-2 text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-semibold">Le Jade, Congo-Brazzaville</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne 2: Poursuite d'études & Certifications */}
          <div className="space-y-8">
            {/* Poursuite d'études */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Poursuite d'Études</h3>
              </div>

              <div className="bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                      Envisagée
                    </span>
                  </div>
                  <span className="bg-slate-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                    BAC+3
                  </span>
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  Bachelor AIS - Administrateur d'Infrastructures Sécurisées
                </h4>
                <p className="text-sm text-slate-700 font-semibold mb-3">
                  Formation reconnue par l'État (RNCP 37680)
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Après mon BTS SIO option SISR, je souhaite poursuivre ma formation avec le Bachelor AIS
                  pour approfondir mes compétences en administration d'infrastructures et en sécurité informatique.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-900 transition-colors group"
                >
                  En savoir plus sur cette formation
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Certifications</h3>
              </div>

              {/* Message temporaire */}
              <div className="bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border-2 border-dashed border-slate-300 text-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  Certifications à venir
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Cette section sera bientôt complétée avec mes certifications professionnelles
                  et formations complémentaires en administration système et réseau.
                </p>
              </div>
            </div>

            {/* Stats sur le parcours */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-1">5+</p>
                <p className="text-sm text-slate-600 font-medium">Années d'étude</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-1">3</p>
                <p className="text-sm text-slate-600 font-medium">Diplômes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

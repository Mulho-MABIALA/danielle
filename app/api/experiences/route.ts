import { NextResponse } from 'next/server';

const experiences = [
  {
    id: 1,
    type: 'stage',
    title: 'Stagiaire Administrateur Systeme & Securite',
    company: 'DGFIP (ESI)',
    location: 'France',
    period: '05/01/2026 - 13/02/2026',
    description: 'Stage en administration systeme et securite informatique',
    missions: [
      "Administrer des pares-feux Fortinet du reseau d'administration de la DGFIP",
      "Traiter des demandes d'ouverture de flux",
      'Creer des regles a implementer sur le Pare-feu Fortinet',
      'Administrer la solution Bastion Wallix',
      'Mettre en oeuvre et gerer des solutions de virtualisation',
    ],
    tags: ['Fortinet', 'Wallix', 'Securite', 'Virtualisation'],
  },
  {
    id: 2,
    type: 'emploi',
    title: 'Employee de production',
    company: 'LIMOJOUX',
    location: 'Clermont-Ferrand',
    period: '15/07/2025 - 29/08/2025',
    description: 'Travail saisonnier en production alimentaire',
    missions: [
      'Mise en barquette et etiquetage de produits alimentaires',
      "Respect des regles d'hygiene et de securite alimentaire",
      'Travail en equipe sur ligne de production',
    ],
    tags: ['Travail en equipe', 'Rigueur', 'Hygiene'],
  },
  {
    id: 3,
    type: 'stage',
    title: 'Stagiaire en support a la PRA',
    company: 'Lije-Technologies',
    location: 'Couzeix',
    period: '26/05/2025 - 27/06/2025',
    description: 'Stage de premiere annee BTS SIO',
    missions: [
      "Mise en place d'un environnement de developpement geospatial via l'installation de QGIS dans un conteneur Docker",
      "Rediger une documentation technique detaillant la procedure d'installation, de configuration et d'utilisation",
    ],
    tags: ['Docker', 'QGIS', 'Documentation', 'Linux'],
  },
];

export async function GET() {
  return NextResponse.json(
    { success: true, data: experiences, total: experiences.length },
    { status: 200 }
  );
}

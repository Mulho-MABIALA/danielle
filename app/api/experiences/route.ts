import { NextResponse } from ''next/server'';

const experiences = [
  {
    id: 1,
    type: ''stage'',
    title: ''Stagiaire Administrateur Système & Sécurité'',
    company: ''DGFIP (ESI)'',
    location: ''France'',
    period: ''05/01/2026 - 13/02/2026'',
    description: ''Stage en administration système et sécurité informatique'',
    missions: [
      Administrer des pares-feux Fortinet du réseau d''administration de la DGFIP,
      Traiter des demandes d''ouverture de flux,
      ''Créer des règles à implémenter sur le Pare-feu Fortinet'',
      ''Administrer la solution Bastion Wallix'',
      Mettre en œuvre et gérer des solutions de virtualisation,
    ],
    tags: [''Fortinet'', ''Wallix'', ''Sécurité'', ''Virtualisation''],
  },
  {
    id: 2,
    type: ''emploi'',
    title: ''Employée de production'',
    company: ''LIMOJOUX'',
    location: ''Clermont-Ferrand'',
    period: ''15/07/2025 - 29/08/2025'',
    description: ''Travail saisonnier en production alimentaire'',
    missions: [
      ''Mise en barquette et étiquetage de produits alimentaires'',
      Respect des règles d''hygiène et de sécurité alimentaire,
      ''Travail en équipe sur ligne de production'',
    ],
    tags: [''Travail en équipe'', ''Rigueur'', ''Hygiène''],
  },
  {
    id: 3,
    type: ''stage'',
    title: ''Stagiaire en support à la PRA'',
    company: ''Lije-Technologies'',
    location: ''Couzeix'',
    period: ''26/05/2025 - 27/06/2025'',
    description: ''Stage de première année BTS SIO'',
    missions: [
      Mettre en place d''un environnement de développement géospatial via l''installation de QGIS dans un conteneur Docker,
      Rédiger une documentation technique détaillant la procédure d''installation, de configuration et d''utilisation,
    ],
    tags: [''Docker'', ''QGIS'', ''Documentation'', ''Linux''],
  },
];

export async function GET() {
  return NextResponse.json(
    { success: true, data: experiences, total: experiences.length },
    { status: 200 }
  );
}
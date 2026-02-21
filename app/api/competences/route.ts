import { NextResponse } from ''next/server'';

const competences = [
  { id: 1, title: ''Linux (Debian, Ubuntu)'', level: 90, category: ''systemes'' },
  { id: 2, title: ''Windows Server'', level: 85, category: ''systemes'' },
  { id: 3, title: ''Virtualisation (VMware, Proxmox)'', level: 88, category: ''systemes'' },
  { id: 4, title: ''Pare-feu Fortinet'', level: 92, category: ''securite'' },
  { id: 5, title: ''VPN (WireGuard, OpenVPN)'', level: 87, category: ''securite'' },
  { id: 6, title: ''DNS, DHCP, VLAN'', level: 85, category: ''reseaux'' },
  { id: 7, title: ''Routage et Switching'', level: 80, category: ''reseaux'' },
  { id: 8, title: ''Bastion Wallix'', level: 90, category: ''securite'' },
  { id: 9, title: ''Docker'', level: 78, category: ''services'' },
  { id: 10, title: ''Apache, Nginx'', level: 85, category: ''services'' },
  { id: 11, title: ''MySQL, PostgreSQL'', level: 80, category: ''services'' },
  { id: 12, title: ''Travail en équipe'', level: 90, category: ''soft-skills'' },
  { id: 13, title: ''Résolution de problèmes'', level: 92, category: ''soft-skills'' },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get(''category'');

  const filtered = category && category !== ''all''
    ? competences.filter((c) => c.category === category)
    : competences;

  const avgLevel = Math.round(
    filtered.reduce((sum, c) => sum + c.level, 0) / filtered.length
  );

  return NextResponse.json(
    { success: true, data: filtered, total: filtered.length, avgLevel },
    { status: 200 }
  );
}
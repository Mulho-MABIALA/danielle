import { NextRequest, NextResponse } from 'next/server';

type ContactBody = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function POST(request: NextRequest) {
  try {
    const body: ContactBody = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      );
    }

    console.log('Message recu:', { name, email, subject, message });

    return NextResponse.json(
      {
        success: true,
        message: 'Votre message a bien ete envoye. Je vous repondrai dans les plus brefs delais.',
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Erreur serveur. Veuillez reessayer plus tard.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Endpoint contact actif. Utilisez POST pour envoyer un message.' },
    { status: 200 }
  );
}

import { NextRequest, NextResponse } from ''next/server'';

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

    if (\!name || \!email || \!subject || \!message) {
      return NextResponse.json(
        { error: ''Tous les champs sont requis.'' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (\!emailRegex.test(email)) {
      return NextResponse.json(
        { error: ''Adresse email invalide.'' },
        { status: 400 }
      );
    }

    // Ici on pourrait intégrer un service d''email (Resend, Nodemailer, etc.)
    console.log(''Message reçu:'', { name, email, subject, message });

    return NextResponse.json(
      {
        success: true,
        message: ''Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.'',
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: ''Erreur serveur. Veuillez réessayer plus tard.'' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: ''Endpoint contact actif. Utilisez POST pour envoyer un message.'' },
    { status: 200 }
  );
}
import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'CV_ALTERNANCE_Cybersecurite_VhannKibamba.pdf');
    const file = await readFile(filePath);

    return new NextResponse(file, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="CV_ALTERNANCE_Cybersecurite_VhannKibamba.pdf"',
        'Cache-Control': 'no-store',
      },
    });
  } catch {
    return NextResponse.json({ error: 'CV introuvable.' }, { status: 404 });
  }
}

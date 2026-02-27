import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'RAPPORT_STAGE1.pdf');
    const file = await readFile(filePath);

    return new NextResponse(file, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="RAPPORT_STAGE_DGFIP.pdf"',
        'Cache-Control': 'no-store',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Rapport introuvable.' }, { status: 404 });
  }
}

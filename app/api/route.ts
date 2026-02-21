import { NextResponse } from ''next/server'';

export async function GET() {
  return NextResponse.json({
    api: ''Portfolio Danielle'',
    version: ''1.0.0'',
    endpoints: {
      contact: ''POST /api/contact'',
      experiences: ''GET /api/experiences'',
      competences: ''GET /api/competences?category=<categorie>'',
    },
  });
}
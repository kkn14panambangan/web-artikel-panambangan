import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const journals = await prisma.journal.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(journals);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch journals' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, pdf_url } = body;

    const journal = await prisma.journal.create({
      data: {
        title,
        pdf_url
      }
    });

    return NextResponse.json(journal, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create journal' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const articles = await prisma.article.findMany();
    const togaArticle = articles.find(a => a.title.includes('TOGA'));
    
    if (togaArticle) {
      await prisma.article.update({
        where: { id: togaArticle.id },
        data: { image_url: '/toga-garden.jpg' }
      });
      return NextResponse.json({ success: true, message: 'TOGA article updated with new image.' });
    }
    
    return NextResponse.json({ success: false, message: 'TOGA article not found.' }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

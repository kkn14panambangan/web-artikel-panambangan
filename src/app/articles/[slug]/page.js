import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await prisma.article.findUnique({
    where: { slug }
  });
  
  if (!article) return { title: 'Artikel Tidak Ditemukan' };
  
  return {
    title: `${article.title} - KKM 14 PANAMBANGAN`,
    description: article.content.substring(0, 160)
  };
}

export default async function ArticleDetail({ params }) {
  const { slug } = await params;
  const article = await prisma.article.findUnique({
    where: { slug }
  });

  if (!article) {
    notFound();
  }

  return (
    <div className="fade-in container article-container">
      <div className="article-header-wrapper">
        <h1 className="article-title">
          {article.title}
        </h1>
        <div className="article-meta-badges">
          <span><i className="fa-solid fa-calendar"></i> {new Date(article.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span><i className="fa-solid fa-user"></i> {article.author}</span>
        </div>
      </div>
      
      {article.image_url && (
        <div className="article-hero-image">
          <img 
            src={article.image_url} 
            alt={article.title} 
          />
        </div>
      )}
      
      <div 
        className="dashboard-panel article-content article-content-panel" 
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
}

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
    <div className="fade-in container" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', color: 'var(--text-main)', marginBottom: '15px', lineHeight: 1.3 }}>
          {article.title}
        </h1>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '14px' }}>
          <span><i className="fa-solid fa-calendar"></i> {new Date(article.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span><i className="fa-solid fa-user"></i> {article.author}</span>
        </div>
      </div>
      
      {article.image_url && (
        <div style={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', marginBottom: '40px', boxShadow: 'var(--shadow-md)' }}>
          <img 
            src={article.image_url} 
            alt={article.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
      )}
      
      <div className="dashboard-panel" style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-main)' }}>
        {article.content.split('\n').map((paragraph, index) => (
          <p key={index} style={{ marginBottom: '15px' }}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

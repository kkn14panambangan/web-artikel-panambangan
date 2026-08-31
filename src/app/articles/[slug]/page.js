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
    <div className="fade-in container" style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 24px' }}>
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', fontWeight: '800', color: 'var(--text-main)', marginBottom: '20px', lineHeight: 1.2, textShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          {article.title}
        </h1>
        <div style={{ display: 'inline-flex', gap: '24px', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '15px', background: 'var(--surface-color)', padding: '10px 24px', borderRadius: '50px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fa-solid fa-calendar" style={{ color: 'var(--primary-color)' }}></i> {new Date(article.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fa-solid fa-user" style={{ color: 'var(--primary-color)' }}></i> {article.author}</span>
        </div>
      </div>
      
      {article.image_url && (
        <div style={{ width: '100%', height: '500px', borderRadius: '24px', overflow: 'hidden', marginBottom: '50px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
          <img 
            src={article.image_url} 
            alt={article.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
      )}
      
      <div 
        className="dashboard-panel article-content" 
        style={{ padding: '50px 60px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: 'none', background: '#ffffff', fontSize: '18px', lineHeight: '1.9' }}
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
}

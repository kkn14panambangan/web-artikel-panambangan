import Link from 'next/link';

import { PrismaClient } from '@prisma/client';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

export const metadata = {
  title: 'Daftar Artikel - KKM 14 PANAMBANGAN',
}

export default async function ArticlesPage() {
  const articles = await prisma.article.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="fade-in">
      <div className="section-header">
        <div className="section-line"></div>
        <h1 className="section-title">Semua Artikel</h1>
        <div className="section-line"></div>
      </div>

      <div style={{ marginBottom: '30px', display: 'flex', gap: '15px' }}>
        <input 
          type="text" 
          placeholder="Cari artikel..." 
          style={{ padding: '10px 15px', borderRadius: '6px', border: '1px solid var(--border-color)', width: '100%', maxWidth: '400px' }}
        />
        <button className="btn">Cari</button>
      </div>

      <div className="grid grid-cols-3">
        {articles.map((article) => (
          <Link href={`/articles/${article.slug}`} key={article.slug} className="card">
            <div className="card-img-container">
              <img src={article.image_url || 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&q=60'} alt={article.title} className="card-img" />
            </div>
            <div className="card-body">
              <h3 className="card-title">{article.title}</h3>
              <div className="card-meta">
                <span><i className="fa-solid fa-calendar"></i> {new Date(article.createdAt).toLocaleDateString('id-ID')}</span>
                <span><i className="fa-solid fa-user"></i> {article.author}</span>
              </div>
              <p className="card-excerpt">{article.content.replace(/<[^>]*>?/gm, '').substring(0, 100)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

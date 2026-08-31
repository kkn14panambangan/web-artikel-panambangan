import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

export default async function Home() {
  const articles = await prisma.article.findMany({
    take: 3,
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="fade-in">
      <div className="hero">
        <div className="hero-overlay"></div>
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80" alt="Desa" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
        <div className="hero-content">
          <div className="hero-badge">
            Selamat Datang di Portal Desa
          </div>
          <h1 className="hero-title">Edukasi Ketahanan Pangan Melalui TOGA & Maggot BSF</h1>
          <p style={{ maxWidth: '600px', fontSize: '16px', lineHeight: 1.5, opacity: 0.9 }}>
            Mari kita wujudkan Desa Panambangan menjadi Desa yang mandiri dan berwawasan lingkungan.
          </p>
        </div>
      </div>

      <div className="section-header">
        <div className="section-line"></div>
        <h2 className="section-title">Artikel Terkini</h2>
        <div className="section-line"></div>
      </div>

      <div className="grid grid-cols-3">
        {articles.map((article) => (
          <Link href={`/articles/${article.slug}`} key={article.slug} className="card">
            <div className="card-img-container">
              <img src={article.image_url || 'https://images.unsplash.com/photo-1596484552735-86699ebf3994?auto=format&fit=crop&w=500&q=60'} alt={article.title} className="card-img" />
            </div>
            <div className="card-body">
              <h3 className="card-title">{article.title}</h3>
              <div className="card-meta">
                <span><i className="fa-solid fa-calendar"></i> {new Date(article.createdAt).toLocaleDateString('id-ID')}</span>
                <span><i className="fa-solid fa-user"></i> {article.author || 'Administrator'}</span>
              </div>
              <p className="card-excerpt">{article.content.replace(/<[^>]*>?/gm, '').substring(0, 100)}...</p>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="section-header" style={{ marginTop: '60px' }}>
        <div className="section-line"></div>
        <h2 className="section-title">Jurnal & Dokumen</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="dashboard-panel" style={{ textAlign: 'center' }}>
        <i className="fa-solid fa-file-pdf" style={{ fontSize: '40px', color: 'var(--primary-lighter)', marginBottom: '15px' }}></i>
        <h3 style={{ fontSize: '18px', color: 'var(--primary-color)', marginBottom: '10px' }}>Kumpulan Jurnal PDF</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>Akses berbagai jurnal penelitian dan dokumen KKM dalam format PDF.</p>
        <Link href="/journals" className="btn">Lihat Semua Jurnal</Link>
      </div>
    </div>
  );
}

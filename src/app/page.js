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
      <div className="hero" style={{ position: 'relative', height: 'min(600px, 80vh)', backgroundColor: '#000', borderRadius: '32px', overflow: 'hidden', marginBottom: '80px', display: 'flex', alignItems: 'center', padding: '0 8%', boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }}>
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80" alt="Desa" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.8 }} />
        <div className="hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(2, 44, 34, 0.95) 0%, rgba(6, 78, 59, 0.6) 50%, rgba(0,0,0,0) 100%)', zIndex: 1 }}></div>
        <div className="hero-content" style={{ position: 'relative', zIndex: 10, color: 'white', maxWidth: '800px', width: '100%' }}>
          <div className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', color: '#fff', padding: '8px 20px', fontSize: '15px', fontWeight: '600', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <span style={{ display: 'block', width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981' }}></span>
            Selamat Datang di Portal Desa
          </div>
          <h1 className="hero-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: '800', lineHeight: 1.15, marginBottom: '24px', textShadow: '0 10px 30px rgba(0,0,0,0.3)', letterSpacing: '-0.02em' }}>
            Edukasi Ketahanan Pangan Melalui <span style={{ color: '#6ee7b7' }}>TOGA</span> & <span style={{ color: '#6ee7b7' }}>Maggot BSF</span>
          </h1>
          <p style={{ maxWidth: '650px', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.6, opacity: 0.9, textShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
            Mari kita wujudkan Desa Panambangan menjadi Desa yang mandiri dan berwawasan lingkungan melalui aksi nyata berkelanjutan.
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

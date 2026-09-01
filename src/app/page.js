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
        <img src="/hero-bg.png" alt="Balai Desa Panambangan" className="hero-bg-img" />
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <div className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', color: '#fff', padding: '8px 20px', fontSize: '15px', fontWeight: '600', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <span style={{ display: 'block', width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981' }}></span>
            Selamat Datang di Portal Desa
          </div>
          <h1 className="hero-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: '800', lineHeight: 1.3, marginBottom: '24px', textShadow: '0 4px 20px rgba(0,0,0,0.4)', letterSpacing: '-0.01em' }}>
            Edukasi Ketahanan Pangan Melalui <span style={{ color: '#34d399' }}>TOGA</span>, <span style={{ color: '#34d399' }}>Maggot BSF</span> & <span style={{ color: '#34d399' }}>UMKM Kembang Tahu</span>
          </h1>
          <p style={{ maxWidth: '600px', fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: 1.6, opacity: 0.9, textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            Mari kita wujudkan Desa Panambangan menjadi Desa yang mandiri dan berwawasan lingkungan melalui aksi nyata berkelanjutan.
          </p>
        </div>

        <div className="custom-map-board">
          <div className="map-board-main">
            <h3 className="map-board-title">PETA DESA PANAMBANGAN</h3>
            
            <div className="map-board-compass">
              <span className="compass-u">U</span>
              <i className="fa-solid fa-caret-up"></i>
            </div>
            
            <img src="/qgis-map.png" alt="Peta Desa Panambangan" className="map-board-img" />
            
            <div className="map-board-scale">
              <div className="scale-line"></div>
              <span>500 m</span>
            </div>
          </div>
          
          <div className="map-board-sidebar">
            <ul className="sidebar-legend-list">
              <li><span className="legend-color legend-green"></span> Areal Pertanian</li>
              <li><span className="legend-color legend-yellow"></span> Areal Perkebunan</li>
              <li><span className="legend-color legend-red"></span> Daerah Penduduk</li>
              <li><span className="legend-line border-line"></span> Batas Desa</li>
              <li><span className="legend-icon"><i className="fa-solid fa-location-dot"></i></span> Fasilitas</li>
              <li><span className="legend-line river-line"></span> Sungai</li>
              <li><span className="legend-line road-line"></span> Jalan Raya</li>
            </ul>
          </div>
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

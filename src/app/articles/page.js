import Link from 'next/link';

export const metadata = {
  title: 'Daftar Artikel - KKM 14 PANAMBANGAN',
}

export default function ArticlesPage() {
  const articles = [
    { slug: 'jahe-merah', title: 'Cara Praktis Menanam Jahe Merah di Pekarangan Rumah', date: '30 Juli 2026', desc: 'Jahe merah kaya akan manfaat kesehatan dan bernilai ekonomi. Pelajari cara menanamnya di lahan sempit dengan panduan ini.', image: 'https://images.unsplash.com/photo-1596484552735-86699ebf3994?auto=format&fit=crop&w=500&q=60' },
    { slug: 'maggot-bsf', title: 'Panduan Awal Budidaya Maggot BSF Skala Rumahan', date: '30 Juli 2026', desc: 'Ubah sampah dapur organik menjadi pakan ternak bernutrisi tinggi dengan menggunakan larva lalat tentara hitam.', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=500&q=60' }
  ];

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
              <img src={article.image} alt={article.title} className="card-img" />
            </div>
            <div className="card-body">
              <h3 className="card-title">{article.title}</h3>
              <div className="card-meta">
                <span><i className="fa-solid fa-calendar"></i> {article.date}</span>
                <span><i className="fa-solid fa-user"></i> Admin</span>
              </div>
              <p className="card-excerpt">{article.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

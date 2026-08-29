import Link from 'next/link';

export const metadata = {
  title: 'Daftar Jurnal - KKM 14 PANAMBANGAN',
}

export default function JournalsPage() {
  const journals = [
    { id: 1, title: 'Pemetaan Potensi Lahan Pertanian Desa Panambangan', date: '15 Agustus 2026', size: '2.4 MB' },
    { id: 2, title: 'Laporan Evaluasi Program TOGA Berkelanjutan', date: '20 Agustus 2026', size: '1.8 MB' }
  ];

  return (
    <div className="fade-in">
      <div className="section-header">
        <div className="section-line"></div>
        <h1 className="section-title">Dokumen & Jurnal</h1>
        <div className="section-line"></div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
        {journals.map((journal, index) => (
          <div key={journal.id} style={{ padding: '20px', borderBottom: index !== journals.length - 1 ? '1px solid var(--border-color)' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'background-color 0.3s' }} className="hover:bg-gray-50">
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <i className="fa-solid fa-file-pdf" style={{ fontSize: '32px', color: '#e25555' }}></i>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '5px' }}>{journal.title}</h3>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  <span><i className="fa-regular fa-calendar"></i> {journal.date}</span> &nbsp;&nbsp;&bull;&nbsp;&nbsp; 
                  <span><i className="fa-solid fa-weight-hanging"></i> {journal.size}</span>
                </div>
              </div>
            </div>
            <button className="btn" style={{ padding: '8px 15px', fontSize: '14px' }}>
              <i className="fa-solid fa-download"></i> Unduh
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

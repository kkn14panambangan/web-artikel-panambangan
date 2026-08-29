"use client";
import { useState } from 'react';

export default function UploadPage() {
  const [tab, setTab] = useState('article');

  return (
    <div className="fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="section-header">
        <div className="section-line"></div>
        <h1 className="section-title">Upload Dokumen</h1>
        <div className="section-line"></div>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
        <button 
          onClick={() => setTab('article')}
          className="btn" 
          style={{ backgroundColor: tab === 'article' ? 'var(--primary-color)' : '#ccc', flex: 1 }}>
          Tulis Artikel Baru
        </button>
        <button 
          onClick={() => setTab('journal')}
          className="btn" 
          style={{ backgroundColor: tab === 'journal' ? 'var(--primary-color)' : '#ccc', flex: 1 }}>
          Upload Jurnal PDF
        </button>
      </div>

      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid var(--border-color)' }}>
        {tab === 'article' ? (
          <form>
            <div className="form-group">
              <label className="form-label">Judul Artikel</label>
              <input type="text" className="form-control" placeholder="Masukkan judul..." required />
            </div>
            <div className="form-group">
              <label className="form-label">Gambar Thumbnail (URL)</label>
              <input type="url" className="form-control" placeholder="https://..." />
            </div>
            <div className="form-group">
              <label className="form-label">Isi Artikel</label>
              <textarea className="form-control" rows="10" placeholder="Tulis isi artikel di sini..." required></textarea>
            </div>
            <button type="button" className="btn" style={{ width: '100%' }}>Simpan Artikel</button>
          </form>
        ) : (
          <form>
            <div className="form-group">
              <label className="form-label">Judul Jurnal</label>
              <input type="text" className="form-control" placeholder="Contoh: Jurnal Pemetaan Lahan Desa" required />
            </div>
            <div className="form-group">
              <label className="form-label">File PDF</label>
              <input type="file" accept=".pdf" className="form-control" required style={{ padding: '9px' }} />
            </div>
            <button type="button" className="btn" style={{ width: '100%' }}>Upload Jurnal</button>
          </form>
        )}
      </div>
    </div>
  );
}

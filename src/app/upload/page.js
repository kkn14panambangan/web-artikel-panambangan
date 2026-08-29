"use client";
import { useState } from 'react';

export default function UploadPage() {
  const [tab, setTab] = useState('article');
  
  const [articleTitle, setArticleTitle] = useState('');
  const [articleImage, setArticleImage] = useState('');
  const [articleContent, setArticleContent] = useState('');
  
  const [journalTitle, setJournalTitle] = useState('');
  const [journalFile, setJournalFile] = useState(null);
  
  const [loading, setLoading] = useState(false);

  const handleArticleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: articleTitle, image_url: articleImage, content: articleContent })
      });
      if (res.ok) {
        alert('Artikel berhasil disimpan!');
        setArticleTitle(''); setArticleImage(''); setArticleContent('');
      } else alert('Gagal menyimpan artikel.');
    } catch(err) { alert('Terjadi kesalahan.'); }
    setLoading(false);
  };

  const handleJournalSubmit = async (e) => {
    e.preventDefault();
    if (!journalFile) return;
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', journalFile);
      
      const uploadRes = await fetch('/api/upload', { method: 'POST', body: formData });
      const uploadData = await uploadRes.json();
      
      if (uploadData.success) {
        const res = await fetch('/api/journals', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: journalTitle, pdf_url: uploadData.url })
        });
        if (res.ok) {
          alert('Jurnal berhasil diupload!');
          setJournalTitle(''); setJournalFile(null);
        } else alert('Gagal menyimpan data jurnal.');
      } else alert('Gagal mengupload file.');
    } catch(err) { alert('Terjadi kesalahan.'); }
    setLoading(false);
  };

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
          <form onSubmit={handleArticleSubmit}>
            <div className="form-group">
              <label className="form-label">Judul Artikel</label>
              <input type="text" className="form-control" value={articleTitle} onChange={e => setArticleTitle(e.target.value)} placeholder="Masukkan judul..." required />
            </div>
            <div className="form-group">
              <label className="form-label">Gambar Thumbnail (URL)</label>
              <input type="url" className="form-control" value={articleImage} onChange={e => setArticleImage(e.target.value)} placeholder="https://..." />
            </div>
            <div className="form-group">
              <label className="form-label">Isi Artikel</label>
              <textarea className="form-control" rows="10" value={articleContent} onChange={e => setArticleContent(e.target.value)} placeholder="Tulis isi artikel di sini..." required></textarea>
            </div>
            <button type="submit" className="btn" disabled={loading} style={{ width: '100%', opacity: loading ? 0.7 : 1 }}>{loading ? 'Menyimpan...' : 'Simpan Artikel'}</button>
          </form>
        ) : (
          <form onSubmit={handleJournalSubmit}>
            <div className="form-group">
              <label className="form-label">Judul Jurnal</label>
              <input type="text" className="form-control" value={journalTitle} onChange={e => setJournalTitle(e.target.value)} placeholder="Contoh: Jurnal Pemetaan Lahan Desa" required />
            </div>
            <div className="form-group">
              <label className="form-label">File PDF</label>
              <input type="file" accept=".pdf" className="form-control" onChange={e => setJournalFile(e.target.files[0])} required style={{ padding: '9px' }} />
            </div>
            <button type="submit" className="btn" disabled={loading} style={{ width: '100%', opacity: loading ? 0.7 : 1 }}>{loading ? 'Mengupload...' : 'Upload Jurnal'}</button>
          </form>
        )}
      </div>
    </div>
  );
}

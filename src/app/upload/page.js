"use client";
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

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
      // Bypassing Vercel's 4.5MB API route limit by uploading directly from client
      const filename = Date.now() + '-' + journalFile.name.replace(/\s+/g, '-');
      
      const { data, error } = await supabase.storage
        .from('uploads')
        .upload(filename, journalFile, {
          upsert: false
        });
        
      if (error) {
        console.error('Supabase upload error:', error);
        alert('Gagal mengupload file ke storage.');
        setLoading(false);
        return;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('uploads')
        .getPublicUrl(filename);
      
      const res = await fetch('/api/journals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: journalTitle, pdf_url: publicUrl })
      });
      
      if (res.ok) {
        alert('Jurnal berhasil diupload!');
        setJournalTitle(''); setJournalFile(null);
      } else alert('Gagal menyimpan data jurnal ke database.');
    } catch(err) { 
      console.error(err);
      alert('Terjadi kesalahan.'); 
    }
    setLoading(false);
  };

  return (
    <div className="fade-in">
      <div className="section-header">
        <div className="section-line"></div>
        <h1 className="section-title">Upload Dokumen</h1>
        <div className="section-line"></div>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', background: 'rgba(0,0,0,0.05)', padding: '6px', borderRadius: '12px' }}>
        <button 
          onClick={() => setTab('article')}
          style={{ 
            flex: 1, 
            padding: '12px', 
            borderRadius: '8px', 
            border: 'none',
            background: tab === 'article' ? '#ffffff' : 'transparent',
            color: tab === 'article' ? 'var(--primary-color)' : 'var(--text-muted)',
            fontWeight: tab === 'article' ? '700' : '500',
            boxShadow: tab === 'article' ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}>
          <i className="fa-solid fa-pen-nib" style={{ marginRight: '8px' }}></i> Tulis Artikel Baru
        </button>
        <button 
          onClick={() => setTab('journal')}
          style={{ 
            flex: 1, 
            padding: '12px', 
            borderRadius: '8px', 
            border: 'none',
            background: tab === 'journal' ? '#ffffff' : 'transparent',
            color: tab === 'journal' ? 'var(--primary-color)' : 'var(--text-muted)',
            fontWeight: tab === 'journal' ? '700' : '500',
            boxShadow: tab === 'journal' ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}>
          <i className="fa-solid fa-file-pdf" style={{ marginRight: '8px' }}></i> Upload Jurnal PDF
        </button>
      </div>

      <div className="dashboard-panel" style={{ border: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.05)', borderRadius: '24px' }}>
        {tab === 'article' ? (
          <form onSubmit={handleArticleSubmit}>
            <div className="form-group" style={{ marginBottom: '24px' }}>
              <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-main)', marginBottom: '8px' }}>Judul Artikel</label>
              <input type="text" className="form-control" value={articleTitle} onChange={e => setArticleTitle(e.target.value)} placeholder="Masukkan judul yang menarik..." required style={{ padding: '16px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', width: '100%' }} />
            </div>
            <div className="form-group" style={{ marginBottom: '24px' }}>
              <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-main)', marginBottom: '8px' }}>URL Gambar Thumbnail</label>
              <input type="url" className="form-control" value={articleImage} onChange={e => setArticleImage(e.target.value)} placeholder="https://..." style={{ padding: '16px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', width: '100%' }} />
            </div>
            <div className="form-group" style={{ marginBottom: '32px' }}>
              <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-main)', marginBottom: '8px' }}>Isi Artikel (Mendukung Format HTML)</label>
              <textarea className="form-control" rows="12" value={articleContent} onChange={e => setArticleContent(e.target.value)} placeholder="Tulis isi artikel di sini... (gunakan <p>, <h2>, dll untuk format)" required style={{ padding: '16px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', width: '100%', resize: 'vertical' }}></textarea>
            </div>
            <button type="submit" className="btn" disabled={loading} style={{ width: '100%', padding: '16px', fontSize: '16px', borderRadius: '12px', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Menyimpan...' : 'Terbitkan Artikel'} <i className="fa-solid fa-paper-plane" style={{ marginLeft: '8px' }}></i>
            </button>
          </form>
        ) : (
          <form onSubmit={handleJournalSubmit}>
            <div className="form-group" style={{ marginBottom: '24px' }}>
              <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-main)', marginBottom: '8px' }}>Judul Jurnal/Dokumen</label>
              <input type="text" className="form-control" value={journalTitle} onChange={e => setJournalTitle(e.target.value)} placeholder="Contoh: Laporan Keuangan Desa Tahun 2026" required style={{ padding: '16px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', width: '100%' }} />
            </div>
            <div className="form-group" style={{ marginBottom: '32px' }}>
              <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-main)', marginBottom: '8px' }}>Pilih File PDF</label>
              <div style={{ position: 'relative' }}>
                <input type="file" accept=".pdf" className="form-control" onChange={e => setJournalFile(e.target.files[0])} required style={{ padding: '14px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', width: '100%', cursor: 'pointer' }} />
              </div>
            </div>
            <button type="submit" className="btn" disabled={loading} style={{ width: '100%', padding: '16px', fontSize: '16px', borderRadius: '12px', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Mengunggah...' : 'Upload Dokumen'} <i className="fa-solid fa-cloud-arrow-up" style={{ marginLeft: '8px' }}></i>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

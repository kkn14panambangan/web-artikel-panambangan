import Link from 'next/link';

import { PrismaClient } from '@prisma/client';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

export const metadata = {
  title: 'Daftar Jurnal - KKM 14 PANAMBANGAN',
}

export default async function JournalsPage() {
  const journals = await prisma.journal.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="fade-in">
      <div className="section-header">
        <div className="section-line"></div>
        <h1 className="section-title">Dokumen & Jurnal</h1>
        <div className="section-line"></div>
      </div>

      <div className="grid grid-cols-3">
        {journals.map((journal, index) => (
          <div key={journal.id} className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: 'auto', background: 'var(--surface-color)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
              <div style={{ background: 'rgba(226, 85, 85, 0.1)', padding: '16px', borderRadius: '16px', color: '#e25555' }}>
                <i className="fa-solid fa-file-pdf" style={{ fontSize: '32px' }}></i>
              </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '8px', lineHeight: '1.4' }}>{journal.title}</h3>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span><i className="fa-regular fa-calendar" style={{ width: '16px' }}></i> {new Date(journal.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span><i className="fa-solid fa-user" style={{ width: '16px' }}></i> {journal.author}</span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 'auto' }}>
              <a href={journal.pdf_url} target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '8px', alignItems: 'center' }}>
                <i className="fa-solid fa-download"></i> Unduh Dokumen
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

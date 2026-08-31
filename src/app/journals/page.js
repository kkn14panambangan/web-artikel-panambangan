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

      <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
        {journals.map((journal, index) => (
          <div key={journal.id} style={{ padding: '20px', borderBottom: index !== journals.length - 1 ? '1px solid var(--border-color)' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'background-color 0.3s' }} className="hover:bg-gray-50">
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <i className="fa-solid fa-file-pdf" style={{ fontSize: '32px', color: '#e25555' }}></i>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '5px' }}>{journal.title}</h3>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  <span><i className="fa-regular fa-calendar"></i> {new Date(journal.createdAt).toLocaleDateString('id-ID')}</span> &nbsp;&nbsp;&bull;&nbsp;&nbsp; 
                  <span><i className="fa-solid fa-user"></i> {journal.author}</span>
                </div>
              </div>
            </div>
            <a href={journal.pdf_url} target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '8px 15px', fontSize: '14px' }}>
              <i className="fa-solid fa-download"></i> Unduh
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

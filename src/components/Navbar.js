"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand" onClick={() => setIsOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none', cursor: 'pointer' }}>
          <div style={{ padding: '2px', background: 'var(--surface)', borderRadius: '50%', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <img src="/logo.png" alt="Logo" width="45" height="45" style={{ borderRadius: '50%', display: 'block' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="navbar-title" style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '0.5px', lineHeight: '1.2' }}>
              KKM 14 <span style={{ opacity: 0.9, fontWeight: 600 }}>DESA PANAMBANGAN</span>
            </div>
            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)', fontWeight: '600', letterSpacing: '0.5px', marginTop: '2px' }}>
              KEC. SEDONG KAB. CIREBON PROV. JAWA BARAT
            </div>
          </div>
        </Link>

        <button 
          className="hamburger" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>

        <nav className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
          <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>BERANDA</Link>
          <Link href="/articles" className="nav-link" onClick={() => setIsOpen(false)}>ARTIKEL</Link>
          <Link href="/journals" className="nav-link" onClick={() => setIsOpen(false)}>JURNAL</Link>
          <Link href="/upload" className="nav-link" onClick={() => setIsOpen(false)}>UPLOAD</Link>
        </nav>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LiveClock from './LiveClock';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        setIsOpen(false); // Close mobile menu when scrolled down
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar-wrapper">
      <div className={`navbar ${isScrolled ? 'navbar-collapsed' : ''}`}>
        <div className="navbar-container">
          <Link href="/" className="navbar-brand" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <img src="/logo.jpg" alt="Logo" width="48" height="48" style={{ display: 'block' }} />
            <div className="navbar-title">
              <span className="navbar-title-main">KKM 14</span>
              <span className="navbar-title-sub">DESA PANAMBANGAN</span>
              <span className="hide-on-mobile" style={{ fontSize: '0.55rem', fontWeight: '500', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '2px', lineHeight: '1.2' }}>
                Kec. Sedong, Kab. Cirebon, Jawa Barat
              </span>
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
            <a href="/poster-qr.html" target="_blank" rel="noopener noreferrer" className="nav-link" onClick={() => setIsOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><i className="fa-solid fa-qrcode"></i> QR CODE</a>
            <LiveClock />
          </nav>
        </div>
      </div>
    </div>
  );
}

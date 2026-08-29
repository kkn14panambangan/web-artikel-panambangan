"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src="/logo.png" alt="Logo" width="40" height="40" style={{ borderRadius: '50%' }} />
          <div>
            <div className="navbar-title">
              KKM 14 <br className="mobile-only" /> DESA PANAMBANGAN
            </div>
          </div>
        </div>

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

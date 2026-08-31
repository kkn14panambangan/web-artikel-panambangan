"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-container">
          <Link href="/" className="navbar-brand" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <img src="/logo.png" alt="Logo" width="48" height="48" style={{ display: 'block' }} />
            <div className="navbar-title">
              <span className="navbar-title-main">KKM 14</span>
              <span className="navbar-title-sub">DESA PANAMBANGAN</span>
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
    </div>
  );
}

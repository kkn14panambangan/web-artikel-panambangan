import './globals.css'
import BackToTop from '../components/BackToTop'
import Navbar from '../components/Navbar'
import LiveClock from '../components/LiveClock'

export const metadata = {
  title: 'KKM 14 PANAMBANGAN',
  description: 'Web Portal dan Sistem Informasi KKM 14 UMC Desa Panambangan.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        
        <main className="container">
          {children}
        </main>
        
        <footer className="footer">
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Desa Panambangan</h4>
            <p style={{ color: 'var(--primary-lighter)', marginBottom: '20px', maxWidth: '500px' }}>
              Menuju desa mandiri pangan dan ramah lingkungan melalui program edukasi dan pemberdayaan masyarakat terpadu.
            </p>
            <div style={{ borderTop: '1px solid var(--primary-dark)', width: '100%', paddingTop: '20px', marginTop: '10px' }}>
              <p style={{ color: 'var(--primary-lighter)', fontSize: '14px' }}>Hak cipta © KKM UMC 2026 - KKM 14</p>
            </div>
          </div>
        </footer>
        <BackToTop />
        <LiveClock />
      </body>
    </html>
  )
}

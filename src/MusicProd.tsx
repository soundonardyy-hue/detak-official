import { useNavigate } from 'react-router-dom';

export default function MusicProd() {
  const navigate = useNavigate();

  // Link WhatsApp langsung ke nomor Tuan Ardyy dengan draf teks pesanan otomatis
  const waUrl = "https://wa.me/6289627200810?text=Halo%20Algen%20Company,%20saya%20ingin%20melakukan%20pemesanan%20(Order%20Now)%20untuk%20proyek%20audio/music%20production.";

  return (
    <div className="page" style={{ padding: '0 24px' }}>
      <div className="grid-bg"></div>
      
      {/* Wrapper Kontainer Utama */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        
        {/* Back Button */}
        <div style={{ padding: '40px 0 20px 0' }}>
          <button className="hero-btn" onClick={() => navigate('/')}>
            ← BACK TO ALGEN
          </button>
        </div>

        {/* Header Section */}
        <section className="hero" style={{ minHeight: 'auto', padding: '40px 0', maxWidth: 'none', margin: '0' }}>
          <span className="hero-top">SECTOR 03 // SONIC LAB</span>
          <h1 className="logo" style={{ fontSize: 'clamp(36px, 8vw, 64px)', letterSpacing: '0.05em', lineHeight: '1.1' }}>
            MUSIC PRODUCTION
          </h1>
          <p style={{ marginTop: '24px', maxWidth: '700px' }}>
            We engineer immersive acoustic experiences and cutting-edge sonic brandings. Transforming raw creative energy into industry-standard audio productions.
          </p>
          
          {/* Emas Premium Button - Menggantikan Blok Putih Kasar */}
          <div style={{ marginTop: '32px' }}>
            <a 
              href={waUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-btn"
              style={{ 
                textDecoration: 'none', 
                display: 'inline-block', 
                background: 'rgba(212, 175, 55, 0.1)', // Transparansi emas mewah
                color: '#d4af37', // Warna tulisan emas tulen (Gold)
                border: '1px solid #d4af37', // Bingkai emas tipis yang presisi
                padding: '14px 36px',
                fontWeight: '700',
                letterSpacing: '0.15em',
                fontSize: '14px',
                textTransform: 'uppercase',
                boxShadow: '0 0 15px rgba(212, 175, 55, 0.2)' // Efek pendaran neon emas tipis
              }}
            >
              ORDER NOW // VIA WA
            </a>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="portfolio" style={{ padding: '40px 0 60px 0', maxWidth: 'none', margin: '0' }}>
          
          {/* 01 // COMMERCIAL AUDIO */}
          <div className="portfolio-card" style={{ padding: '32px 0' }}>
            <div className="number">01 // BRANDING</div>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>COMMERCIAL AUDIO & JINGLES</h2>
            <p style={{ maxWidth: '700px' }}>
              Crafting tailor-made jingles, custom sonic logos, and high-impact background tracks engineered to define and elevate corporate identities across global markets.
            </p>
          </div>

          {/* 02 // CINEMATIC SCORING */}
          <div className="portfolio-card" style={{ padding: '32px 0' }}>
            <div className="number">02 // VISUAL SCORE</div>
            <h2>CINEMATIC SCORING & SOUND DESIGN</h2>
            <p style={{ maxWidth: '700px' }}>
              Composing atmospheric, deep, and ambient musical scores specifically tailored for short films, digital animations, video games, and high-fidelity trailers.
            </p>
          </div>

          {/* 03 // POST-PRODUCTION */}
          <div className="portfolio-card" style={{ padding: '32px 0', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div className="number">03 // ENGINE</div>
            <h2>POST-PRODUCTION, MIXING & MASTERING</h2>
            <p style={{ maxWidth: '700px' }}>
              Polishing multi-track audio projects to absolute perfection. Providing a powerful, clean, and balanced sound signature optimized for everything from high-end studio monitors to standard mobile phone speakers.
            </p>
          </div>

        </section>

        {/* Portfolio Showcase Area */}
        <section style={{ padding: '20px 0 80px 0', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <span className="hero-top">// VISUAL ARCHIVE</span>
          <h2 style={{ fontSize: '28px', marginTop: '8px', marginBottom: '16px' }}>YOUTUBE SHOWCASE PORTFOLIO</h2>
          <p style={{ color: '#888', maxWidth: '600px', marginBottom: '24px' }}>
            Our visual and sonic archives are currently being compiled. High-fidelity audio blueprints and video showcases will be deployed here soon.
          </p>
          
          <div style={{ 
            width: '100%', 
            height: '200px', 
            border: '1px dashed rgba(212, 175, 55, 0.2)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'rgba(212, 175, 55, 0.4)',
            fontSize: '14px',
            letterSpacing: '0.1em'
          }}>
            [ DEPLOYING AUDIO REELS PORTFOLIO // SOON ]
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="footer" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 0' }}>
        <div className="footer-logo">ALGEN COMPANY</div>
        <div className="footer-text">© 2026 Algen Company. All rights reserved.</div>
      </footer>
    </div>
  );
}

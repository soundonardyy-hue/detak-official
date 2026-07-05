import { useNavigate } from 'react-router-dom';

export default function WebProd() {
  const navigate = useNavigate();

  // Link WhatsApp otomatis yang disesuaikan untuk pemesanan website
  const waUrl = "https://wa.me/6289627200810?text=Halo%20Algen%20Company,%20saya%20ingin%20melakukan%20pemesanan%20(Order%20Website)%20untuk%20proyek%20web%20development.";

  return (
    <div className="page web-prod-fix" style={{ padding: '0 24px' }}>
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
          <span className="hero-top">SECTOR 02 // WEB DEVELOPMENT</span>
          <h1 className="logo" style={{ fontSize: 'clamp(36px, 8vw, 64px)', letterSpacing: '0.05em', lineHeight: '1.1' }}>
            WEBSITE PRODUCTION
          </h1>
          <p style={{ marginTop: '24px', maxWidth: '700px' }}>
            We engineer high-performance digital platforms and premium web ecosystems. Our focus is fusing top-tier code architecture with striking, high-fidelity visual aesthetics.
          </p>

          {/* Emas Premium Button - Order Website */}
          <div style={{ marginTop: '32px' }}>
            <a 
              href={waUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-btn"
              style={{ 
                textDecoration: 'none', 
                display: 'inline-block', 
                background: 'rgba(212, 175, 55, 0.1)', // Transparansi emas
                color: '#d4af37', // Warna teks emas
                border: '1px solid #d4af37', // Bingkai emas tipis
                padding: '14px 36px',
                fontWeight: '700',
                letterSpacing: '0.15em',
                fontSize: '14px',
                textTransform: 'uppercase',
                boxShadow: '0 0 15px rgba(212, 175, 55, 0.2)' // Efek pendaran neon emas
              }}
            >
              ORDER WEBSITE // VIA WA
            </a>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="portfolio" style={{ padding: '40px 0 80px 0', maxWidth: 'none', margin: '0' }}>
          
          {/* 01 // ARCHITECTURE */}
          <div className="portfolio-card" style={{ padding: '32px 0' }}>
            <div className="number">01 // ARCHITECTURE</div>
            <h2>HIGH-PERFORMANCE STACK</h2>
            <p style={{ maxWidth: '700px' }}>
              Building lightning-fast web applications using modern frameworks and cloud-optimized hosting solutions. Every deployment is optimized for maximum loading speed, robust security, and fluid user interactions.
            </p>
          </div>

          {/* 02 // INTERFACE DESIGN */}
          <div className="portfolio-card" style={{ padding: '32px 0' }}>
            <div className="number">02 // INTERFACE DESIGN</div>
            <h2>FUTURE AESTHETICS</h2>
            <p style={{ maxWidth: '700px' }}>
              Crafting commanding, immersive user interfaces tailored for high-impact visual delivery. We specialize in sleek dark interfaces, glowing neon geometries, and precise layouts designed to stand out.
            </p>
          </div>

          {/* 03 // SYSTEM INTEGRATION */}
          <div className="portfolio-card" style={{ padding: '32px 0', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div className="number">03 // SYSTEM INTEGRATION</div>
            <h2>END-TO-END DEPLOYMENT</h2>
            <p style={{ maxWidth: '700px' }}>
              From initial interactive prototypes to production-ready servers, we bridge the gap between heavy technical engineering and smooth responsive designs, fully optimized for both desktop and mobile layouts.
            </p>
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

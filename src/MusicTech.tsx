import { useNavigate } from 'react-router-dom';

export default function MusicTech() {
  const navigate = useNavigate();

  return (
    <div className="page" style={{ padding: '0 24px' }}>
      <div className="grid-bg"></div>
      
      {/* Wrapper Kontainer Utama agar Semuanya Sejajar Sejak Awal */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        
        {/* Back Button dengan Posisi yang Lebih Elegan */}
        <div style={{ padding: '40px 0 20px 0' }}>
          <button className="hero-btn" onClick={() => navigate('/')}>
            ← BACK TO ALGEN
          </button>
        </div>

        {/* Header Section dengan Padding Sesuai Layout Home */}
        <section className="hero" style={{ minHeight: 'auto', padding: '40px 0', maxWidth: 'none', margin: '0' }}>
          <span className="hero-top">SECTOR 01 // AUDIO INNOVATION</span>
          <h1 className="logo" style={{ fontSize: 'clamp(36px, 8vw, 64px)', letterSpacing: '0.05em', lineHeight: '1.1' }}>
            MUSIC TECHNOLOGY
          </h1>
          <p style={{ marginTop: '24px', maxWidth: '700px' }}>
            Algen Company shatters traditional boundaries in audio creation through a next-gen interactive software ecosystem. The core of this innovation relies on the seamless synergy between our two flagship products.
          </p>
        </section>

        {/* Portfolio Content (LAZETONE, LazeMotion, System Integration) */}
        <section className="portfolio" style={{ padding: '40px 0 80px 0', maxWidth: 'none', margin: '0' }}>
          
          {/* 01 // LAZETONE */}
          <div className="portfolio-card" style={{ padding: '32px 0' }}>
            <div className="number">01 // DESKTOP ENGINE</div>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>LAZETONE</h2>
            <p style={{ maxWidth: '700px' }}>
              A standalone desktop audio software built with C++ and the JUCE Framework. LAZETONE operates as the primary host engine, processing high-performance audio synthesis algorithms to generate and output sound instantly based on real-time motion data.
            </p>
          </div>

          {/* 02 // LAZEMOTION */}
          <div className="portfolio-card" style={{ padding: '32px 0' }}>
            <div className="number">02 // TRANSMITTER</div>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>LazeMotion</h2>
            <p style={{ maxWidth: '700px' }}>
              A companion mobile application built with Flutter (Dart). It utilizes the smartphone's internal sensors to track hand movements with pinpoint accuracy, transmitting wireless data instantly via the OSC (Open Sound Control) protocol over Wi-Fi directly to LAZETONE.
            </p>
          </div>

          {/* SYSTEM INTEGRATION (Kotak Dihapus, Disamakan Minimalis Sesuai Request Lu) */}
          <div className="portfolio-card" style={{ padding: '32px 0', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div className="number">03 // SYSTEM INTEGRATION</div>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>UNIFIED PERFORMANCE</h2>
            <p style={{ maxWidth: '700px' }}>
              LAZETONE and LazeMotion are designed as an integrated ecosystem. LazeMotion provides the stream of raw kinetic data, while LAZETONE provides the high-fidelity audio processing. They function as a single, unified instrument to transform physical motion into digital sound.
            </p>
          </div>

        </section>

      </div>

      {/* Footer Tetap Berada di Luar Kontainer Utama untuk Efek Lebar Penuh */}
      <footer className="footer" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 0' }}>
        <div className="footer-logo">ALGEN COMPANY</div>
        <div className="footer-text">© 2026 Algen Company. All rights reserved.</div>
      </footer>
    </div>
  );
}

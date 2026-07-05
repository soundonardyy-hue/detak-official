import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const waNumber = "6281381550525";

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', position: 'relative' }}>
      <style>{'.telma-font { font-family: "Telma", sans-serif; }'}</style>

      {/* HAMBURGER MENU */}
      <button onClick={() => setIsOpen(!isOpen)} style={{ position: 'fixed', top: '30px', left: '30px', background: 'none', border: 'none', cursor: 'pointer', zIndex: 2000, fontSize: '1.5rem' }}>☰</button>
      {isOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: '#fff', zIndex: 1500, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
          <button onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: '30px', left: '30px', border: 'none', background: 'none', fontSize: '1.5rem' }}>✕</button>
          <a href="mailto:detakentertainment02@gmail.com" style={{ color: '#000', textDecoration: 'none', fontSize: '1.2rem' }}>Email</a>
          <a href="https://www.instagram.com/detak_entertainment?igsh=NDNrMzZ4enkxOW56" target="_blank" style={{ color: '#000', textDecoration: 'none', fontSize: '1.2rem' }}>Instagram</a>
          <a href={"https://wa.me/" + waNumber} target="_blank" style={{ color: '#000', textDecoration: 'none', fontSize: '1.2rem' }}>WhatsApp</a>
        </div>
      )}

      {/* SECTION 1: HOME */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '60px 20px', textAlign: 'center' }}>
        <img src="/logo.jpg" alt="Detak Entertainment" style={{ width: '140px', marginBottom: '40px' }} />
        <div style={{ maxWidth: '600px', textAlign: 'left' }}>
          <p style={{ fontSize: '1rem', lineHeight: '1.7', textAlign: 'justify', marginBottom: '40px' }}>
            <strong className="telma-font" style={{ fontSize: '1.2rem' }}>Detak</strong> adalah sebuah perusahaan hiburan dan label musik independen yang bergerak secara mandiri melalui ekosistem kerja yang terintegrasi dari hulu ke hilir.
          </p>
          <h3 className="telma-font" style={{ fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>Masalah Musisi Lokal</h3>
          <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>Banyak musisi berbakat dengan idealisme luar biasa terkubur dan gagal berkembang karena manajemen yang berantakan, keterbatasan biaya produksi, ketidakpahaman hukum distribusi, dan ketiadaan panggung pertunjukan yang layak.</p>
          <h3 className="telma-font" style={{ fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>Solusi Detak</h3>
          <p style={{ fontSize: '0.9rem', color: '#000', lineHeight: '1.6', fontWeight: '500', marginBottom: '20px' }}>Detak Entertainment hadir sebagai wadah profesional yang menjembatani idealisme murni musisi lokal dengan tata kelola bisnis modern.</p>
          <div style={{ background: '#f9f9f9', padding: '20px', borderLeft: '2px solid #000', marginBottom: '20px' }}>
            <h3 className="telma-font" style={{ fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>Prinsip Utama</h3>
            <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>"Kita tidak mengubah warna musik mereka; kita mengemas personaliti dan karya mereka dengan standar industri global agar mereka memiliki daya nilai komersial yang tinggi tanpa kehilangan jiwanya."</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: SECTORS */}
      <section style={{ minHeight: '100vh', padding: '60px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ maxWidth: '600px', width: '100%' }}>
          <h1 className="telma-font" style={{ fontSize: '2.5rem', marginBottom: '60px', textAlign: 'center' }}>Our Sectors</h1>
          <div style={{ display: 'grid', gap: '50px' }}>
            {[
              { title: "Detak Creative", sub: "Inkubasi & Produksi", desc: "Tempat idealisme dipoles tanpa kehilangan nyawa. Dari konsep awal hingga master audio final, kami memastikan karya lo punya kualitas global." },
              { title: "Detak Management", sub: "Hak Cipta & Bisnis", desc: "Kami mengurus kerumitan hukum, distribusi global, dan royalti, sehingga lo bisa fokus sepenuhnya pada kreativitas tanpa distraksi administrasi." },
              { title: "Detak Experience", sub: "Marketing & Live Show", desc: "Membawa karya lo ke pendengar melalui strategi pemasaran yang terukur dan eksekusi panggung pertunjukan nyata yang presisi dan magis." }
            ].map((pillar, i) => (
              <div key={i} style={{ borderLeft: '3px solid #000', paddingLeft: '20px' }}>
                <h3 className="telma-font" style={{ margin: '0', fontSize: '1.2rem' }}>{pillar.title}</h3>
                <h4 style={{ margin: '5px 0 15px 0', fontSize: '0.9rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{pillar.sub}</h4>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '40px 20px', borderTop: '1px solid #eee', textAlign: 'center', fontSize: '0.75rem', color: '#666' }}>
        <p style={{ marginBottom: '10px' }}>&copy; 2026 Detak Entertainment. All Rights Reserved.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', color: '#000' }}>
          <span>Iklan</span> | <span>Kontak</span> | <span>Kami</span> | <span>Disclaimer</span> | <span>Privacy</span><br/>
          <span>Kode Etik</span> | <span>Pedoman Media Siber</span> | <span>Karir</span><br/>
          <span>Redaksi</span> | <span>Sitemap</span> | <span>Arsip Berita</span> | <span>RSS</span>
        </div>
      </footer>

      {/* FLOATING WA */}
      <a href={"https://wa.me/" + waNumber} target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: '30px', right: '30px', background: '#000', color: '#fff', padding: '15px 20px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '700', textDecoration: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', zIndex: 1000, fontFamily: '"Telma", sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Contact Us</a>
    </div>
  );
}

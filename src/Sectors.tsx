export default function Sectors() {
  const pillars = [
    {
      title: "Detak Creative",
      subtitle: "Inkubasi & Produksi",
      desc: "Tempat idealisme dipoles tanpa kehilangan nyawa. Dari konsep awal hingga master audio final, kami memastikan karya lo punya kualitas global."
    },
    {
      title: "Detak Management",
      subtitle: "Hak Cipta & Bisnis",
      desc: "Kami mengurus kerumitan hukum, distribusi global, dan royalti, sehingga lo bisa fokus sepenuhnya pada kreativitas tanpa distraksi administrasi."
    },
    {
      title: "Detak Experience",
      subtitle: "Marketing & Live Show",
      desc: "Membawa karya lo ke pendengar melalui strategi pemasaran yang terukur dan eksekusi panggung pertunjukan nyata yang presisi dan magis."
    }
  ];

  return (
    <div style={{ padding: '60px 20px', background: '#ffffff', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <style>{}</style>
      
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 className="telma-font" style={{ fontSize: '2.5rem', marginBottom: '60px' }}>Our Sectors</h1>
        
        <div style={{ display: 'grid', gap: '50px' }}>
          {pillars.map((pillar, index) => (
            <div key={index} style={{ borderLeft: '3px solid #000', paddingLeft: '20px' }}>
              <h3 className="telma-font" style={{ margin: '0', fontSize: '1.2rem' }}>{pillar.title}</h3>
              <h4 style={{ margin: '5px 0 15px 0', fontSize: '0.9rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{pillar.subtitle}</h4>
              <p style={{ color: '#000', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>{pillar.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '80px', borderTop: '1px solid #eee', paddingTop: '40px' }}>
          <p className="telma-font" style={{ marginBottom: '20px', fontSize: '1rem' }}>Ingin berkolaborasi atau mendiskusikan proyek lo?</p>
          <a href="mailto:info@detak.com" style={{ color: '#000', textDecoration: 'none', borderBottom: '1px solid #000', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '700' }}>
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}

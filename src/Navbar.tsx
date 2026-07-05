import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const waUrl = "https://wa.me/6281381550525?text=Halo%20Detak%20Entertainment";

  const menuItems = [
    { name: 'HOME // CORE', path: '/' },
    { name: 'SECTOR 01 // MUSIC CURATION', path: '/music-tech' },
    { name: 'SECTOR 02 // DIGITAL PRODUCTS', path: '/web-prod' },
    { name: 'SECTOR 03 // AUDIO PRODUCTION', path: '/music-prod' }
  ];

  return (
    <>
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)} style={{ position: 'fixed', top: '24px', right: '24px', zIndex: 1000, background: 'rgba(5, 5, 5, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid #d4af37', padding: '12px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', borderRadius: '4px', boxShadow: '0 0 10px rgba(212, 175, 55, 0.1)' }}>
        <span style={{ width: '20px', height: '2px', background: '#d4af37' }}></span>
        <span style={{ width: '20px', height: '2px', background: '#d4af37' }}></span>
        <span style={{ width: '20px', height: '2px', background: '#d4af37' }}></span>
      </button>
      {isOpen && (
        <div className="nav-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(5, 5, 5, 0.98)', zIndex: 999, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '24px', padding: '0 24px', textAlign: 'center' }}>
          {menuItems.map((item) => (
            <a key={item.name} onClick={() => { navigate(item.path); setIsOpen(false); }} style={{ color: '#fff', fontSize: 'clamp(16px, 4vw, 22px)', textDecoration: 'none', letterSpacing: '0.15em', fontWeight: '700', cursor: 'pointer', transition: 'color 0.2s', padding: '10px' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#d4af37')} onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}>
              {item.name}
            </a>
          ))}
          <div style={{ width: '60px', height: '1px', background: '#d4af37' }}></div>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', background: 'rgba(212, 175, 55, 0.1)', color: '#d4af37', border: '1px solid #d4af37', padding: '12px 28px', fontWeight: '700', letterSpacing: '0.15em', fontSize: '13px', textTransform: 'uppercase', borderRadius: '4px', boxShadow: '0 0 15px rgba(212, 175, 55, 0.2)', marginTop: '8px' }}>
            CONTACT DETAK
          </a>
        </div>
      )}
    </>
  );
}

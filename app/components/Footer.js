'use client';

export default function Footer() {
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid rgba(201,168,76,0.15)', padding: '80px 48px 40px' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 60, marginBottom: 80 }}>

          {/* Logo & tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <svg width="44" height="44" viewBox="0 0 52 52">
                <defs>
                  <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e8d08a"/>
                    <stop offset="100%" stopColor="#a87c28"/>
                  </linearGradient>
                </defs>
                <circle cx="26" cy="26" r="24" fill="none" stroke="url(#goldGrad2)" strokeWidth="1.5"/>
                <line x1="14" y1="16" x2="26" y2="16" stroke="url(#goldGrad2)" strokeWidth="2" strokeLinecap="round"/>
                <line x1="20" y1="16" x2="20" y2="36" stroke="url(#goldGrad2)" strokeWidth="2" strokeLinecap="round"/>
                <line x1="20" y1="23" x2="32" y2="16" stroke="url(#goldGrad2)" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="20" y1="23" x2="32" y2="30" stroke="url(#goldGrad2)" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              <div>
                <div style={{ fontFamily: 'Tenor Sans, sans-serif', fontSize: 16, letterSpacing: '0.3em', color: '#c9a84c' }}>TALEK</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 8, letterSpacing: '0.25em', color: 'rgba(201,168,76,0.6)', fontWeight: 300 }}>MAISON DE COUTURE</div>
              </div>
            </div>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, lineHeight: 1.8, color: 'rgba(245,240,232,0.4)', fontWeight: 300, maxWidth: 280 }}>
              L'élégance africaine réinventée. Des polos d'exception qui portent l'âme d'un continent.
            </p>
          </div>

          {[
            { title: 'Navigation', links: ['Accueil', 'Collection', 'À propos', 'Savoir-faire'] },
            { title: 'Collection', links: ['Polo Kente Royal', 'Polo Wax Blanc', 'Polo Signature', 'Polo Prestige'] },
            { title: 'Contact', links: ['contact@talekskia.com', '@talek_couture', 'Commander sur mesure', 'Guide des tailles'] },
          ].map(({ title, links }) => (
            <div key={title}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.35em', color: '#c9a84c', marginBottom: 24 }}>{title.toUpperCase()}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {links.map(link => (
                  <a key={link} href="#" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: 'rgba(245,240,232,0.4)', textDecoration: 'none', fontWeight: 300, transition: 'color 0.3s' }}
                    onMouseEnter={e => e.target.style.color = '#c9a84c'}
                    onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.4)'}
                  >{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, color: 'rgba(245,240,232,0.3)', fontWeight: 300, letterSpacing: '0.1em' }}>
            © 2025 TALEK — Maison de Couture. Tous droits réservés.
          </div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 14, color: 'rgba(201,168,76,0.4)', fontStyle: 'italic' }}>
            L'Élégance Africaine Réinventée
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

export default function Ticker() {
  const items = ['ARTISANAT AFRICAIN', 'ÉLÉGANCE CONTEMPORAINE', 'COTON PREMIUM', 'ÉDITION LIMITÉE', 'FAIT AVEC PASSION', 'MAISON DE COUTURE'];

  return (
    <div style={{ background: '#c9a84c', padding: '14px 0', overflow: 'hidden', position: 'relative' }}>
      <div style={{
        display: 'flex', gap: 0,
        animation: 'ticker 25s linear infinite',
        width: 'max-content',
      }}>
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} style={{
            fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.35em',
            color: '#0a0a0a', fontWeight: 400, whiteSpace: 'nowrap', padding: '0 40px',
          }}>
            {item} <span style={{ opacity: 0.5, marginLeft: 40 }}>✦</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}

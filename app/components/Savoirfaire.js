'use client';

const pilliers = [
  {
    num: 'I',
    title: 'Matières d\'Excellence',
    desc: 'Nous sélectionnons les meilleures fibres de coton Pima et Supima, réputées pour leur douceur incomparable et leur résistance au temps. Chaque fil est choisi pour sublimer le geste africain.',
    detail: 'COTON PIMA · TISSU PIQUÉ · JERSEY PREMIUM',
    svg: (
      <svg width="80" height="80" viewBox="0 0 80 80">
        <defs>
          <pattern id="fabric" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect width="4" height="4" fill="rgba(201,168,76,0.15)"/>
            <rect x="4" y="4" width="4" height="4" fill="rgba(201,168,76,0.08)"/>
          </pattern>
        </defs>
        <rect width="80" height="80" fill="url(#fabric)"/>
        <circle cx="40" cy="40" r="28" fill="none" stroke="#c9a84c" strokeWidth="1"/>
        <circle cx="40" cy="40" r="18" fill="none" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5"/>
        <line x1="12" y1="40" x2="68" y2="40" stroke="#c9a84c" strokeWidth="0.5" strokeDasharray="2,4"/>
        <line x1="40" y1="12" x2="40" y2="68" stroke="#c9a84c" strokeWidth="0.5" strokeDasharray="2,4"/>
      </svg>
    )
  },
  {
    num: 'II',
    title: 'Inspiration Africaine',
    desc: 'Les motifs Kente du Ghana, les imprimés Wax d\'Afrique de l\'Ouest et les symboles Adinkra nourrissent chacune de nos créations. Un héritage millénaire sublimé par le prêt-à-porter.',
    detail: 'KENTE · WAX · ADINKRA · BOGOLAN',
    svg: (
      <svg width="80" height="80" viewBox="0 0 80 80">
        <rect width="80" height="80" fill="none"/>
        {[0,1,2,3].map(i => (
          <rect key={i} x={i*20} y="0" width="20" height="80" fill={['rgba(201,168,76,0.12)','rgba(201,168,76,0.06)','rgba(201,168,76,0.10)','rgba(201,168,76,0.04)'][i]}/>
        ))}
        {[0,2,4,6,8,10].map(i => (
          <line key={i} x1="0" y1={i*8} x2="80" y2={i*8} stroke="#c9a84c" strokeWidth="0.5" opacity="0.4"/>
        ))}
        <polygon points="40,10 50,30 70,30 55,44 60,64 40,52 20,64 25,44 10,30 30,30" fill="none" stroke="#c9a84c" strokeWidth="1"/>
      </svg>
    )
  },
  {
    num: 'III',
    title: 'Coupe Raffinée',
    desc: 'Chaque polo est conçu selon des patrons ajustés qui épousent la silhouette avec élégance. Une coupe pensée pour l\'homme et la femme modernes, alliant confort et prestance.',
    detail: 'PATRON N°1 · COUPE AJUSTÉE · FINITIONS MAIN',
    svg: (
      <svg width="80" height="80" viewBox="0 0 80 80">
        <path d="M20,10 L60,10 L65,25 L55,25 L55,70 L25,70 L25,25 L15,25 Z" fill="none" stroke="#c9a84c" strokeWidth="1" strokeDasharray="3,3"/>
        <line x1="25" y1="35" x2="55" y2="35" stroke="rgba(201,168,76,0.5)" strokeWidth="0.5"/>
        <line x1="25" y1="50" x2="55" y2="50" stroke="rgba(201,168,76,0.5)" strokeWidth="0.5"/>
        <circle cx="40" cy="30" r="2" fill="#c9a84c"/>
        <circle cx="40" cy="45" r="2" fill="rgba(201,168,76,0.5)"/>
      </svg>
    )
  }
];

export default function Savoirfaire() {
  return (
    <section id="savoirfaire" style={{ padding: '140px 48px' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 100 }}>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.4em', color: '#c9a84c', marginBottom: 16 }}>
            L'ÂME DE LA MARQUE
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, fontStyle: 'italic' }}>
            Notre Savoir-faire
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {pilliers.map((p, i) => (
            <div key={p.num} style={{
              padding: '60px 48px',
              background: i === 1 ? '#c9a84c' : '#111',
              border: i !== 1 ? '1px solid rgba(201,168,76,0.1)' : 'none',
              transition: 'all 0.3s',
            }}>
              <div style={{ marginBottom: 32, opacity: 0.8 }}>{p.svg}</div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, letterSpacing: '0.3em', color: i === 1 ? '#0a0a0a' : '#c9a84c', marginBottom: 16 }}>
                {p.num}
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 300, fontStyle: 'italic', color: i === 1 ? '#0a0a0a' : '#f5f0e8', marginBottom: 20, lineHeight: 1.2 }}>
                {p.title}
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, lineHeight: 1.9, color: i === 1 ? 'rgba(10,10,10,0.7)' : 'rgba(245,240,232,0.6)', fontWeight: 300, marginBottom: 24 }}>
                {p.desc}
              </p>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.25em', color: i === 1 ? 'rgba(10,10,10,0.5)' : 'rgba(201,168,76,0.5)' }}>
                {p.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

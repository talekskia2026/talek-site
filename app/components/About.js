'use client';

export default function About() {
  return (
    <section id="about" style={{ padding: '140px 48px', maxWidth: 1400, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }}>

        {/* Images */}
        <div style={{ position: 'relative' }}>
          <div style={{ aspectRatio: '4/5', border: '1px solid rgba(201,168,76,0.3)', overflow: 'hidden', background: '#111' }}>
            <img src="/images/about1.png" alt="TALEK" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={e => e.target.style.display = 'none'} />
          </div>
          {/* Stats flottantes */}
          <div style={{
            position: 'absolute', bottom: -30, right: -30,
            background: '#c9a84c', padding: '32px 40px', textAlign: 'center',
          }}>
            <div style={{ fontSize: 48, fontWeight: 300, color: '#0a0a0a', lineHeight: 1 }}>100%</div>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.3em', color: '#0a0a0a', marginTop: 8 }}>ARTISANAT</div>
          </div>
          <div style={{ position: 'absolute', top: 30, left: -30, border: '1px solid rgba(201,168,76,0.2)', padding: '24px 32px', background: 'rgba(10,10,10,0.9)' }}>
            <div style={{ fontSize: 36, fontWeight: 300, color: '#c9a84c', lineHeight: 1 }}>2022</div>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.3em', color: 'rgba(245,240,232,0.6)', marginTop: 8 }}>FONDATION</div>
          </div>
        </div>

        {/* Texte */}
        <div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.4em', color: '#c9a84c', marginBottom: 24 }}>
            NOTRE HISTOIRE
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300, lineHeight: 1.15, marginBottom: 32, fontStyle: 'italic' }}>
            Une vision,<br />
            <span style={{ color: '#c9a84c' }}>deux continents,</span><br />
            un polo
          </h2>
          <div style={{ width: 60, height: 1, background: '#c9a84c', marginBottom: 32 }}/>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, lineHeight: 2, color: 'rgba(245,240,232,0.7)', fontWeight: 300, marginBottom: 24 }}>
            TALEK est née d'une passion pour l'élégance africaine et le raffinement du prêt-à-porter de luxe. Chaque polo est une œuvre qui raconte l'histoire d'un continent riche en couleurs, en patterns et en savoir-faire ancestral.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, lineHeight: 2, color: 'rgba(245,240,232,0.7)', fontWeight: 300, marginBottom: 48 }}>
            Nos créations fusionnent les motifs Kente, Wax et Adinkra avec des coupes contemporaines raffinées, pour un homme ou une femme qui porte son héritage avec fierté et élégance.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            {[['Matières', 'Coton Pima & Supima premium sélectionné avec soin'], ['Inspiration', 'Motifs Kente, Wax & Adinkra revisités'], ['Édition', 'Pièces en série limitée numérotées'], ['Livraison', 'Expédition mondiale depuis Paris']].map(([title, desc]) => (
              <div key={title}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.3em', color: '#c9a84c', marginBottom: 8 }}>{title.toUpperCase()}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: 'rgba(245,240,232,0.6)', lineHeight: 1.6, fontWeight: 300 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

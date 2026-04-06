'use client';
import { useState } from 'react';

const products = [
  { id: '01', name: 'Polo Kente Royal', price: '185 €', desc: 'Motifs Kente tissés à la main', img: '/images/polo1.png' },
  { id: '02', name: 'Polo Wax Blanc', price: '165 €', desc: 'Col contrasté wax rouge', img: '/images/polo2.png' },
  { id: '03', name: 'Polo Signature', price: '195 €', desc: 'Broderies Adinkra dorées', img: '/images/polo3.png' },
  { id: '04', name: 'Polo Sahel', price: '175 €', desc: 'Tons terre & ocre africain', img: '/images/polo4.png' },
  { id: '05', name: 'Polo Prestige', price: '220 €', desc: 'Édition limitée numérotée', img: '/images/polo5.png' },
];

export default function Collection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="collection" style={{ padding: '140px 48px', background: '#080808' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80 }}>
          <div>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.4em', color: '#c9a84c', marginBottom: 16 }}>NOS CRÉATIONS</div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.1 }}>
              La Collection
            </h2>
          </div>
          <a href="#contact" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.25em', color: '#c9a84c', textDecoration: 'none', borderBottom: '1px solid rgba(201,168,76,0.4)', paddingBottom: 4 }}>
            VOIR TOUT →
          </a>
        </div>

        {/* Grille produits */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {/* Grande carte */}
          <div style={{ gridRow: 'span 2', position: 'relative', overflow: 'hidden', cursor: 'none' }}
            onMouseEnter={() => setHovered(0)} onMouseLeave={() => setHovered(null)}>
            <div style={{ aspectRatio: '3/4', background: '#1a1a1a', position: 'relative', overflow: 'hidden' }}>
              <img src={products[0].img} alt={products[0].name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', transform: hovered === 0 ? 'scale(1.05)' : 'scale(1)' }}
                onError={e => e.target.style.display = 'none'} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 50%)', transition: 'opacity 0.4s', opacity: hovered === 0 ? 1 : 0.6 }}/>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 32 }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.3em', color: '#c9a84c', marginBottom: 8 }}>{products[0].id}</div>
                <div style={{ fontSize: 24, fontWeight: 300, fontStyle: 'italic', marginBottom: 4 }}>{products[0].name}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, color: 'rgba(245,240,232,0.6)', marginBottom: 12, fontWeight: 300 }}>{products[0].desc}</div>
                <div style={{ fontFamily: 'Tenor Sans, sans-serif', fontSize: 18, color: '#c9a84c' }}>{products[0].price}</div>
              </div>
            </div>
          </div>

          {/* Petites cartes */}
          {products.slice(1).map((p, i) => (
            <div key={p.id} style={{ position: 'relative', overflow: 'hidden', cursor: 'none' }}
              onMouseEnter={() => setHovered(i + 1)} onMouseLeave={() => setHovered(null)}>
              <div style={{ aspectRatio: '4/3', background: '#1a1a1a', position: 'relative', overflow: 'hidden' }}>
                <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', transform: hovered === i + 1 ? 'scale(1.05)' : 'scale(1)' }}
                  onError={e => e.target.style.display = 'none'} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 60%)', transition: 'opacity 0.4s', opacity: hovered === i + 1 ? 1 : 0.6 }}/>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20 }}>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 8, letterSpacing: '0.3em', color: '#c9a84c', marginBottom: 4 }}>{p.id}</div>
                  <div style={{ fontSize: 18, fontWeight: 300, fontStyle: 'italic', marginBottom: 2 }}>{p.name}</div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, color: 'rgba(245,240,232,0.6)', fontWeight: 300 }}>{p.desc}</div>
                  <div style={{ fontFamily: 'Tenor Sans, sans-serif', fontSize: 16, color: '#c9a84c', marginTop: 8 }}>{p.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

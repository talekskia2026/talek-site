'use client';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden', padding: '0 48px',
    }}>
      {/* Fond motif africain subtil */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: `repeating-linear-gradient(45deg, #c9a84c 0px, #c9a84c 1px, transparent 1px, transparent 20px),
          repeating-linear-gradient(-45deg, #c9a84c 0px, #c9a84c 1px, transparent 1px, transparent 20px)`,
      }}/>

      {/* Watermark TK */}
      <div style={{
        position: 'absolute', right: -80, top: '50%', transform: 'translateY(-50%)',
        fontSize: 400, fontFamily: 'Tenor Sans, sans-serif', color: 'rgba(201,168,76,0.04)',
        letterSpacing: '-0.05em', lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
      }}>TK</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', maxWidth: 1400, margin: '0 auto', width: '100%', paddingTop: 100 }}>
        {/* Texte */}
        <div style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(40px)', transition: 'all 1.2s ease' }}>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, letterSpacing: '0.4em', color: '#c9a84c', marginBottom: 24, fontWeight: 300 }}>
            COLLECTION 2025
          </div>
          <h1 style={{ fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 300, lineHeight: 1.05, marginBottom: 32, fontStyle: 'italic' }}>
            L'Élégance<br />
            <span style={{ color: '#c9a84c', fontStyle: 'normal', fontWeight: 400 }}>Africaine</span><br />
            Réinventée
          </h1>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', maxWidth: 420, fontWeight: 300, marginBottom: 48 }}>
            Des polos d'exception qui fusionnent l'artisanat africain ancestral avec l'élégance du prêt-à-porter contemporain.
          </p>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <a href="#collection" style={{
              fontFamily: 'Montserrat, sans-serif', fontSize: 11, letterSpacing: '0.25em',
              color: '#0a0a0a', background: '#c9a84c', padding: '16px 40px',
              textDecoration: 'none', fontWeight: 400, display: 'inline-block',
              transition: 'all 0.3s',
            }}>DÉCOUVRIR LA COLLECTION</a>
            <a href="#about" style={{
              fontFamily: 'Montserrat, sans-serif', fontSize: 11, letterSpacing: '0.25em',
              color: '#c9a84c', textDecoration: 'none', fontWeight: 300,
              borderBottom: '1px solid rgba(201,168,76,0.4)', paddingBottom: 2,
            }}>NOTRE HISTOIRE →</a>
          </div>
        </div>

        {/* Image hero */}
        <div style={{ opacity: loaded ? 1 : 0, transition: 'all 1.5s ease 0.3s', position: 'relative' }}>
          <div style={{
            position: 'relative', aspectRatio: '3/4',
            border: '1px solid rgba(201,168,76,0.3)',
            overflow: 'hidden',
          }}>
            <img
              src="/images/hero.jpg"
              alt="TALEK Collection"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={e => { e.target.style.display = 'none'; e.target.parentElement.style.background = '#1a1a1a'; }}
            />
            {/* Overlay doré */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 60%)' }}/>
            <div style={{ position: 'absolute', bottom: 24, left: 24, fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.3em', color: '#c9a84c' }}>
              POLO SIGNATURE · COLLECTION 2025
            </div>
          </div>
          {/* Cadre décoratif */}
          <div style={{ position: 'absolute', top: -12, right: -12, bottom: 12, left: 12, border: '1px solid rgba(201,168,76,0.15)', zIndex: -1 }}/>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.3em', color: 'rgba(201,168,76,0.6)' }}>DÉFILER</div>
        <div style={{ width: 1, height: 50, background: 'linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)', animation: 'fadeIn 2s ease infinite alternate' }}/>
      </div>
    </section>
  );
}

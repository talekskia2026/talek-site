'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Collection', 'A propos', 'Savoir-faire', 'Contact'];

  return (h
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: scrolled ? '12px 48px' : '24px 48px',
          background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
          transition: 'all 0.4s ease',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  }}>
{/* Logo */}
      <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 14 }}>
        <Image
          src="/images/logo-tk.jpg"
          alt="TALEK Maison de Couture"
          width={52}
          height={52}
          style={{
                        filter: 'invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(0.9)',
                        objectFit: 'contain',
          }}
          priority
        />
                    <div>
                      <div style={{ fontFamily: 'Tenor Sans, sans-serif', fontSize: 18, letterSpacing: '0.3em', color: '#c9a84c' }}>TALEK</div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.25em', color: 'rgba(201,168,76,0.7)', fontWeight: 300 }}>MAISON DE COUTURE</div>
            </div>
            </a>

{/* Liens desktop */}
      <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
{links.map(link => (
            <a key={link} href={`#${link.toLowerCase().replace('a ', '').replace('-', '')}`}
            style={{
                            fontFamily: 'Montserrat, sans-serif', fontSize: 11, letterSpacing: '0.2em',
                            color: 'rgba(245,240,232,0.8)', textDecoration: 'none', fontWeight: 300,
                            transition: 'color 0.3s',
            }}
            onMouseEnter={e => e.target.style.color = '#c9a84c'}
                          onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.8)'}
                        >{link.toUpperCase()}</a>
        ))}
        <a href="#contact" style={{
                    fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.2em',
                    color: '#0a0a0a', background: '#c9a84c', padding: '10px 24px',
                    textDecoration: 'none', fontWeight: 400, transition: 'all 0.3s',
        }}
          onMouseEnter={e => { e.target.style.background = '#e8d08a'; }}
          onMouseLeave={e => { e.target.style.background = '#c9a84c'; }}
        >PROCHAINEMENT DISPONIBLE</a>
          </div>
          </nav>
  );
}

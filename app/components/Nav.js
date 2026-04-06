'use client';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Collection', 'À propos', 'Savoir-faire', 'Contact'];

  return (
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
        <svg width="52" height="52" viewBox="0 0 52 52">
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e8d08a"/>
              <stop offset="50%" stopColor="#c9a84c"/>
              <stop offset="100%" stopColor="#a87c28"/>
            </linearGradient>
          </defs>
          <circle cx="26" cy="26" r="24" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5"/>
          <circle cx="26" cy="26" r="20" fill="none" stroke="url(#goldGrad)" strokeWidth="0.5" opacity="0.5"/>
          {/* T */}
          <line x1="14" y1="16" x2="26" y2="16" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round"/>
          <line x1="20" y1="16" x2="20" y2="36" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round"/>
          {/* K imbriqué dans la barre verticale du T */}
          <line x1="20" y1="23" x2="32" y2="16" stroke="url(#goldGrad)" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="20" y1="23" x2="32" y2="30" stroke="url(#goldGrad)" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
        <div>
          <div style={{ fontFamily: 'Tenor Sans, sans-serif', fontSize: 18, letterSpacing: '0.3em', color: '#c9a84c' }}>TALEK</div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.25em', color: 'rgba(201,168,76,0.7)', fontWeight: 300 }}>MAISON DE COUTURE</div>
        </div>
      </a>

      {/* Liens desktop */}
      <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
        {links.map(link => (
          <a key={link} href={`#${link.toLowerCase().replace('à ', '').replace('-', '')}`}
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
        >COMMANDER</a>
      </div>
    </nav>
  );
}

'use client';
import { useEffect, useRef, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Collection from './components/Collection';
import Savoirfaire from './components/Savoirfaire';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    cursor.style.cssText = `
      position:fixed;width:20px;height:20px;border:1px solid #c9a84c;
      border-radius:50%;pointer-events:none;z-index:9999;
      transform:translate(-50%,-50%);transition:all 0.15s ease;
    `;
    document.body.appendChild(cursor);
    const move = e => { cursor.style.left = e.clientX+'px'; cursor.style.top = e.clientY+'px'; };
    window.addEventListener('mousemove', move);
    return () => { window.removeEventListener('mousemove', move); cursor.remove(); };
  }, []);

  return (
    <main style={{ background: '#0a0a0a', color: '#f5f0e8', fontFamily: "'Cormorant Garamond', serif", overflowX: 'hidden' }}>
      <Nav />
      <Hero />
      <Ticker />
      <About />
      <Collection />
      <Savoirfaire />
      <Contact />
      <Footer />
    </main>
  );
}

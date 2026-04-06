'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    width: '100%', background: 'transparent',
    border: 'none', borderBottom: '1px solid rgba(201,168,76,0.3)',
    padding: '16px 0', fontFamily: 'Montserrat, sans-serif',
    fontSize: 13, color: '#f5f0e8', outline: 'none', fontWeight: 300,
    transition: 'border-color 0.3s',
  };

  return (
    <section id="contact" style={{ padding: '140px 48px', background: '#080808' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100 }}>

        {/* Infos */}
        <div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.4em', color: '#c9a84c', marginBottom: 24 }}>NOUS CONTACTER</div>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.2, marginBottom: 40 }}>
            Parlons de<br /><span style={{ color: '#c9a84c' }}>votre polo</span>
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, lineHeight: 2, color: 'rgba(245,240,232,0.6)', fontWeight: 300, marginBottom: 60 }}>
            Chaque polo TALEK peut être personnalisé selon vos désirs. Contactez-nous pour une commande sur mesure ou pour toute question sur notre collection.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {[
              { label: 'EMAIL', value: 'contact@talekskia.com' },
              { label: 'INSTAGRAM', value: '@talek_couture' },
              { label: 'LIVRAISON', value: 'Mondiale · 5-10 jours ouvrés' },
            ].map(({ label, value }) => (
              <div key={label}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.35em', color: '#c9a84c', marginBottom: 6 }}>{label}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: 'rgba(245,240,232,0.8)', fontWeight: 300 }}>{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulaire */}
        <div>
          {sent ? (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
              <div style={{ fontSize: 48, marginBottom: 24 }}>✦</div>
              <div style={{ fontFamily: 'Tenor Sans, sans-serif', fontSize: 24, color: '#c9a84c', marginBottom: 16 }}>Message envoyé</div>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: 'rgba(245,240,232,0.6)', fontWeight: 300 }}>
                Nous vous répondrons dans les 48 heures.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              <div>
                <label style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.35em', color: '#c9a84c', display: 'block', marginBottom: 8 }}>NOM COMPLET</label>
                <input name="nom" value={form.nom} onChange={handle} required placeholder="Votre nom" style={inputStyle} />
              </div>
              <div>
                <label style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.35em', color: '#c9a84c', display: 'block', marginBottom: 8 }}>ADRESSE EMAIL</label>
                <input name="email" type="email" value={form.email} onChange={handle} required placeholder="votre@email.com" style={inputStyle} />
              </div>
              <div>
                <label style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.35em', color: '#c9a84c', display: 'block', marginBottom: 8 }}>VOTRE MESSAGE</label>
                <textarea name="message" value={form.message} onChange={handle} required placeholder="Décrivez votre projet, vos envies..." rows={5} style={{ ...inputStyle, resize: 'none' }} />
              </div>
              <button type="submit" style={{
                background: '#c9a84c', color: '#0a0a0a', border: 'none', padding: '18px 48px',
                fontFamily: 'Montserrat, sans-serif', fontSize: 11, letterSpacing: '0.25em',
                cursor: 'none', fontWeight: 400, alignSelf: 'flex-start', transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.target.style.background = '#e8d08a'; }}
                onMouseLeave={e => { e.target.style.background = '#c9a84c'; }}
              >ENVOYER LE MESSAGE</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Search, ArrowRight, ShieldCheck, Users, Globe, Award } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        padding: '5rem 0 4rem 0',
        overflow: 'hidden',
        background: 'var(--grad-hero)',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <span
            style={{
              background: 'rgba(139, 197, 63, 0.15)',
              border: '1px solid rgba(139, 197, 63, 0.4)',
              color: '#8BC53F',
              padding: '0.35rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: '700',
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <ShieldCheck size={16} /> ESTABLISHED 1984 • OVER 40 YEARS OF EXCELLENCE
          </span>
        </div>

        {/* Hero Heading */}
        <h1
          style={{
            fontSize: '3.2rem',
            fontWeight: '900',
            lineHeight: '1.15',
            letterSpacing: '-0.02em',
            marginBottom: '1.25rem',
            maxWidth: '900px',
            margin: '0 auto 1.25rem auto',
          }}
        >
          Connecting Generations of Excellence <br />
          <span className="gold-text">Kongu Engineering College</span>
        </h1>

        <p
          style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            maxWidth: '720px',
            margin: '0 auto 2.5rem auto',
            lineHeight: '1.6',
          }}
        >
          Welcome to the official digital hub of the <strong style={{ color: 'var(--text-main)' }}>KECAA Network</strong>.
          Empowering alumni across 45+ countries to collaborate, mentor, reunite, and inspire future innovators.
        </p>

        {/* Interactive Search Bar */}
        <div
          className="glass-card"
          style={{
            maxWidth: '680px',
            margin: '0 auto 3rem auto',
            padding: '0.5rem 0.5rem 0.5rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            border: '1px solid rgba(244, 197, 66, 0.3)',
          }}
        >
          <Search size={22} color="#F4C542" />
          <input
            type="text"
            placeholder="Search alumni by name, company (e.g. Google, Microsoft), or batch (e.g. 2018)..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-main)',
              fontSize: '0.95rem',
            }}
          />
          <button
            style={{
              background: 'linear-gradient(135deg, #8BC53F 0%, #F4C542 100%)',
              color: '#0A162F',
              fontWeight: '700',
              padding: '0.75rem 1.5rem',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: '0 4px 15px rgba(139, 197, 63, 0.3)',
            }}
          >
            Find Alumni <ArrowRight size={18} />
          </button>
        </div>

        {/* Feature Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            maxWidth: '850px',
            margin: '0 auto',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
            <Users size={18} color="#8BC53F" /> <strong>35,000+</strong> Registered Graduates
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
            <Globe size={18} color="#F4C542" /> <strong>40+</strong> Global Alumni Chapters
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
            <Award size={18} color="#8BC53F" /> <strong>₹2.5 Cr+</strong> Scholarships Awarded
          </div>
        </div>
      </div>
    </section>
  );
}

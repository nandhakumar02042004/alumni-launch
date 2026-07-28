import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Sparkles, Sun, Moon, Film, UserCheck, Search, Menu } from 'lucide-react';

export function Navbar({ onReplayLaunch }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--glass-bg)',
        backdropFilter: 'var(--glass-blur)',
        WebkitBackdropFilter: 'var(--glass-blur)',
        borderBottom: 'var(--glass-border)',
        boxShadow: 'var(--glass-shadow)',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
        }}
      >
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1E376A 0%, #0A162F 100%)',
              border: '2px solid #F4C542',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(244, 197, 66, 0.3)',
            }}
          >
            <Sparkles size={22} color="#F4C542" />
          </div>
          <div>
            <div style={{ fontWeight: '800', fontSize: '1.15rem', color: 'var(--text-main)', letterSpacing: '0.02em', lineHeight: '1.1' }}>
              KECAA <span style={{ color: '#8BC53F', fontSize: '0.85rem', fontWeight: '600' }}>PORTAL</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#F4C542', fontWeight: '600', letterSpacing: '0.05em' }}>
              Kongu Engineering College
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
          <a href="#hero" style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '0.92rem', transition: 'color 0.2s' }}>
            Home
          </a>
          <a href="#directory" style={{ fontWeight: '600', color: 'var(--text-muted)', fontSize: '0.92rem', transition: 'color 0.2s' }}>
            Directory
          </a>
          <a href="#events" style={{ fontWeight: '600', color: 'var(--text-muted)', fontSize: '0.92rem', transition: 'color 0.2s' }}>
            Events
          </a>
          <a href="#mentorship" style={{ fontWeight: '600', color: 'var(--text-muted)', fontSize: '0.92rem', transition: 'color 0.2s' }}>
            Career Hub
          </a>
          <a href="#hall-of-fame" style={{ fontWeight: '600', color: 'var(--text-muted)', fontSize: '0.92rem', transition: 'color 0.2s' }}>
            Hall of Fame
          </a>
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Replay Cinematic Launch Button */}
          <button
            onClick={onReplayLaunch}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.9rem',
              borderRadius: '9999px',
              background: 'rgba(244, 197, 66, 0.12)',
              border: '1px solid rgba(244, 197, 66, 0.3)',
              color: '#F4C542',
              fontSize: '0.82rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            title="Replay Curtain Launch Experience"
          >
            <Film size={15} /> Launch Scene
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            style={{
              padding: '0.5rem',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              cursor: 'pointer',
            }}
            title="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? <Sun size={18} color="#F4C542" /> : <Moon size={18} color="#1E376A" />}
          </button>

          {/* Member Login CTA */}
          <button
            style={{
              background: 'linear-gradient(135deg, #1E376A 0%, #15274E 100%)',
              border: '1px solid #8BC53F',
              color: '#FFFFFF',
              padding: '0.5rem 1.1rem',
              borderRadius: '8px',
              fontSize: '0.88rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(139, 197, 63, 0.2)',
            }}
          >
            <UserCheck size={16} color="#8BC53F" /> Alumni Login
          </button>
        </div>
      </div>
    </header>
  );
}

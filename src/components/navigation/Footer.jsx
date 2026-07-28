import React from 'react';
import { Sparkles, MapPin, Mail, Phone, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer
      style={{
        background: '#050B18',
        borderTop: '1px solid rgba(244, 197, 66, 0.15)',
        padding: '4rem 0 2rem 0',
        color: 'var(--text-muted)',
      }}
    >
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#1E376A',
                  border: '2px solid #F4C542',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={18} color="#F4C542" />
              </div>
              <span style={{ fontWeight: '800', color: '#FFFFFF', fontSize: '1.1rem' }}>KECAA PORTAL</span>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Kongu Engineering College Alumni Association (KECAA). Building a lifelong network of leadership, innovation, and pride.
            </p>
          </div>

          {/* Contact Col */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: '700', marginBottom: '1rem' }}>College Campus</h4>
            <div style={{ fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <MapPin size={16} color="#8BC53F" />
                <span>Kongu Engineering College Campus, Perundurai, Erode, Tamil Nadu 638060</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Mail size={16} color="#F4C542" />
                <span>alumni@kongu.edu</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Phone size={16} color="#8BC53F" />
                <span>+91 4294 226555</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: '700', marginBottom: '1rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="#directory" style={{ color: 'var(--text-muted)' }}>Alumni Search Directory</a></li>
              <li><a href="#events" style={{ color: 'var(--text-muted)' }}>Upcoming Events & Galas</a></li>
              <li><a href="#mentorship" style={{ color: 'var(--text-muted)' }}>Mentorship & Jobs</a></li>
              <li><a href="#give-back" style={{ color: 'var(--text-muted)' }}>Give Back to KEC</a></li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
          }}
        >
          <div>
            © {new Date().getFullYear()} Kongu Engineering College Alumni Association (KECAA). All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#8BC53F' }}>
            Built with <Heart size={14} fill="#8BC53F" color="#8BC53F" /> for KEC Alumni Worldwide
          </div>
        </div>
      </div>
    </footer>
  );
}

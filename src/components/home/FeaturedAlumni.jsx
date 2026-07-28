import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { MapPin, Briefcase, GraduationCap, MessageSquare } from 'lucide-react';

const ALUMNI_MEMBERS = [
  {
    id: 1,
    name: 'Rajeswari Sundaram',
    batch: 'Batch of 1998 • ECE',
    role: 'Vice President of Engineering',
    company: 'Microsoft Inc.',
    location: 'Seattle, WA, USA',
    badge: 'Hall of Fame',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200',
  },
  {
    id: 2,
    name: 'Karthik Subramanian',
    batch: 'Batch of 2004 • CSE',
    role: 'Co-Founder & CTO',
    company: 'FinTech Nexus (Unicorn)',
    location: 'Bengaluru, India',
    badge: 'Entrepreneur',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
  },
  {
    id: 3,
    name: 'Dr. Anandhi Natarajan',
    batch: 'Batch of 2001 • Mech',
    role: 'Principal Research Scientist',
    company: 'ISRO Space Centre',
    location: 'Thiruvananthapuram, India',
    badge: 'Distinguished Alumni',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200',
  },
  {
    id: 4,
    name: 'Senthil Kumar V.',
    batch: 'Batch of 2012 • Civil',
    role: 'Director of Infrastructure',
    company: 'L&T Construction',
    location: 'Dubai, UAE',
    badge: 'Global Mentor',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
  },
];

export function FeaturedAlumni() {
  return (
    <section id="directory" style={{ padding: '4rem 0', background: 'rgba(10, 22, 47, 0.4)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Badge variant="emerald">DISTINGUISHED GRADUATES</Badge>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginTop: '0.5rem', color: 'var(--text-main)' }}>
            Featured KEC Alumni Spotlight
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0.5rem auto 0 auto' }}>
            Meet some of our distinguished leaders shaping technology, space research, finance, and engineering worldwide.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.5rem' }}>
          {ALUMNI_MEMBERS.map((alumni) => (
            <Card key={alumni.id} style={{ border: '1px solid rgba(244, 197, 66, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <img
                  src={alumni.avatar}
                  alt={alumni.name}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #F4C542',
                  }}
                />
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)', margin: 0 }}>
                    {alumni.name}
                  </h3>
                  <div style={{ fontSize: '0.82rem', color: '#8BC53F', fontWeight: '600', marginTop: '0.1rem' }}>
                    <GraduationCap size={14} style={{ display: 'inline', marginRight: '0.3rem' }} />
                    {alumni.batch}
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: '600', marginBottom: '0.25rem' }}>
                <Briefcase size={15} style={{ display: 'inline', marginRight: '0.4rem', color: '#F4C542' }} />
                {alumni.role}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                {alumni.company}
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                <MapPin size={14} style={{ display: 'inline', marginRight: '0.3rem', color: '#8BC53F' }} />
                {alumni.location}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
                <Badge variant="amber">{alumni.badge}</Badge>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    style={{
                      padding: '0.4rem 0.75rem',
                      borderRadius: '6px',
                      background: 'rgba(30, 55, 106, 0.6)',
                      border: '1px solid rgba(244, 197, 66, 0.3)',
                      color: '#F4C542',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    <MessageSquare size={13} /> Connect
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

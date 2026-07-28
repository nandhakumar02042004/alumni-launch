import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Calendar, MapPin, Users, Ticket } from 'lucide-react';

const UPCOMING_EVENTS = [
  {
    id: 1,
    title: 'KECAA Global Alumni Gala & Convention 2026',
    date: 'September 18 - 20, 2026',
    venue: 'Convention Centre & Hybrid Virtual',
    attendees: '450+ Confirmed',
    tag: 'Flagship Event',
  },
  {
    id: 2,
    title: 'Silver Jubilee Reunion (Class of 2001)',
    date: 'October 12, 2026',
    venue: 'KEC Campus, Perundurai',
    attendees: '210+ Confirmed',
    tag: 'Campus Reunion',
  },
  {
    id: 3,
    title: 'KEC Angel Investors & Startup Pitch Day',
    date: 'November 05, 2026',
    venue: 'Tech Park Auditorium, Bengaluru',
    attendees: '95 Founders & VCs',
    tag: 'Mentorship',
  },
];

export function EventsSection() {
  return (
    <section id="events" style={{ padding: '4.5rem 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <Badge variant="amber">REUNIONS & WEBINARS</Badge>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginTop: '0.4rem', color: 'var(--text-main)' }}>
              Upcoming KECAA Events & Gatherings
            </h2>
          </div>
          <button
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: '8px',
              background: 'transparent',
              border: '1px solid #8BC53F',
              color: '#8BC53F',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            View All Events →
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '1.5rem' }}>
          {UPCOMING_EVENTS.map((event) => (
            <Card key={event.id} style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <Badge variant="primary">{event.tag}</Badge>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Users size={14} color="#8BC53F" /> {event.attendees}
                </span>
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.75rem', lineHeight: '1.3' }}>
                {event.title}
              </h3>

              <div style={{ fontSize: '0.88rem', color: '#F4C542', fontWeight: '600', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Calendar size={16} /> {event.date}
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={16} color="#8BC53F" /> {event.venue}
              </div>

              <button
                style={{
                  width: '100%',
                  padding: '0.65rem 0',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #1E376A 0%, #15274E 100%)',
                  border: '1px solid rgba(244, 197, 66, 0.4)',
                  color: '#F4C542',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                }}
              >
                <Ticket size={16} /> RSVP & Get Pass
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

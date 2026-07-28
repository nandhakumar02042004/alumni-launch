export const alumniService = {
  async getAlumniList() {
    return [
      {
        id: 1,
        name: 'Sarah Chen',
        degree: 'B.S. Computer Science',
        gradYear: 2020,
        company: 'Google',
        role: 'Senior Staff Engineer',
        location: 'San Francisco, CA',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150',
      },
      {
        id: 2,
        name: 'David Rodriguez',
        degree: 'M.S. Data Analytics',
        gradYear: 2018,
        company: 'Microsoft',
        role: 'Principal Data Scientist',
        location: 'Seattle, WA',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      },
      {
        id: 3,
        name: 'Emily Watson',
        degree: 'B.A. Business Admin',
        gradYear: 2022,
        company: 'Stripe',
        role: 'Product Operations Lead',
        location: 'New York, NY',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150',
      },
    ];
  },

  async getUpcomingEvents() {
    return [
      {
        id: 'ev-1',
        title: 'Global Alumni Gala 2026',
        date: '2026-09-15',
        location: 'Grand Ballroom & Virtual',
        attendees: 340,
        badge: 'Featured',
      },
      {
        id: 'ev-2',
        title: 'Tech Founders & VC Networking',
        date: '2026-10-02',
        location: 'Innovation Hub, Austin TX',
        attendees: 120,
        badge: 'Mentorship',
      },
    ];
  },
};

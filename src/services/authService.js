import { apiRequest } from './api';

export const authService = {
  async login(credentials) {
    // Mock authentication API call for setup
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 'user_101',
          name: 'Alex Morgan',
          email: credentials.email,
          role: 'alumni',
          gradYear: 2021,
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
        });
      }, 500);
    });
  },

  async register(formData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Account created successfully!' });
      }, 500);
    });
  },

  async getCurrentUser() {
    return apiRequest('/auth/me');
  },
};

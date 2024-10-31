import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptor for auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const studentApi = {
  // Get student profile and overall stats
  getProfile: async () => {
    const { data } = await api.get('/student/profile');
    return data;
  },

  // Get all courses for the student
  getCourses: async () => {
    const { data } = await api.get('/student/courses');
    return data;
  },

  // Get progress data for charts
  getProgressData: async () => {
    const { data } = await api.get('/student/progress');
    return data;
  },

  // Get detailed course statistics
  getCourseStats: async () => {
    const { data } = await api.get('/student/course-stats');
    return data;
  }
};
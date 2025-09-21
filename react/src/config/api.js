import axios from 'axios';

// Use Docker service name for backend
export const API_BASE_URL = "http://host.docker.internal:5454";

// Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add JWT token if available
const token = localStorage.getItem('jwt');
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;

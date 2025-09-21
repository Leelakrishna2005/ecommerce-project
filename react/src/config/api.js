import axios from 'axios';

// Backend URLs
const LOCAL_BACKEND = "http://localhost:5454";
const SERVER_BACKEND = "http://192.168.1.100:5454"; // 🔹 replace with the IP/hostname where Jenkins runs

// Decide which to use (local vs deployed server)
export const API_BASE_URL =
  window.location.hostname === "localhost" ? LOCAL_BACKEND : SERVER_BACKEND;

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

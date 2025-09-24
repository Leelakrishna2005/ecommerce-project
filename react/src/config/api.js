// inside react code
import axios from 'axios';

const LOCAL_BACKEND = 'http://localhost:5454';
const DOCKER_BACKEND = 'http://backend:5454';  // "backend" is name of service in Docker Compose
const PROD_BACKEND = 'https://your-production-api.com';  // change if you deploy

let baseURL;

if (window.location.hostname === 'localhost') {
  baseURL = LOCAL_BACKEND;
} else if (window.location.hostname === 'backend' || window.location.hostname === 'some-docker-domain') {
  baseURL = DOCKER_BACKEND;
} else {
  baseURL = PROD_BACKEND;
}

const api = axios.create({
  baseURL,
});

export default api;

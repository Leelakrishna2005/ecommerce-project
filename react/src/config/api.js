import axios from "axios";

const LOCAL_BACKEND = "http://localhost:5454";
const DOCKER_BACKEND = "http://backend:5454";
const PROD_BACKEND = "https://your-production-api.com"; // adjust if needed

let API_BASE_URL;

if (window.location.hostname === "localhost") {
  API_BASE_URL = LOCAL_BACKEND;
} else if (window.location.hostname === "backend") {
  API_BASE_URL = DOCKER_BACKEND;
} else {
  API_BASE_URL = PROD_BACKEND;
}

export { API_BASE_URL };   // 👈 named export (fixes your build)

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;        // 👈 default export

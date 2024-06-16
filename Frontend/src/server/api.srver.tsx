import axios from "axios";

/**
 *
 * @returns axios Create a axios instans
 */
const api = axios.create({
  baseURL: "http://localhost:3000/api", // later need to read from process.env REACT_APP_HOST_BACKEND,
});

export default api;

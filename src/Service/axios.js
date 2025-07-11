import axios from "axios";
import { toast } from "react-hot-toast";

const api = axios.create({
  baseURL: "https://data.finuniques.in/api",
  // baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor - add token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    toast.error("Request error!");
    return Promise.reject(error);
  }
);

// Response Interceptor - handle global errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      toast.error("Session expired. Please login again.");
      localStorage.removeItem("token");
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    } else if (status === 403) {
      toast.error("Access denied!");
    } else if (status === 500) {
      toast.error("Server error. Please try again later.");
    } else {
      const msg = error?.response?.data?.message || "Something went wrong.";
      toast.error(msg);
    }

    return Promise.reject(error);
  }
);

export default api;

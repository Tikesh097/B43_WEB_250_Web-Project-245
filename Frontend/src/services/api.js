import axios from "axios";

const API_URL = "http://your-api-url.com/api"; // Replace with your actual API URL

// User Registration
export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

// User Login
export const loginUser = async (credentials) => {
  return await axios.post(`${API_URL}/login`, credentials);
};

// Submit Crime Report
export const submitReport = async (reportData) => {
  return await axios.post(`${API_URL}/reports`, reportData);
};

// Fetch Reports for Case Tracking
export const fetchReports = async () => {
  return await axios.get(`${API_URL}/reports`);
};

// Fetch Crime Statistics
export const fetchCrimeStatistics = async () => {
  return await axios.get(`${API_URL}/crime-statistics`);
};

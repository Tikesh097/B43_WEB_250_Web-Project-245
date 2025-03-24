import axios from "axios";
const API_URL = "http://localhost:5000/api";

// Function to register a user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Registration failed!";
  }
};

// Function to log in a user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Login failed!";
  }
};

// Function to submit a crime report (Requires Auth)
export const submitReport = async (reportData) => {
  try {
    const response = await axios.post(`${API_URL}/reports`, reportData, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to submit report!";
  }
};

// Fetch Reports for Case Tracking
export const fetchReports = async () => {
  return await axios.get(`${API_URL}/reports`);
};

// Fetch Crime Statistics
export const fetchCrimeStatistics = async () => {
  return await axios.get(`${API_URL}/crime-statistics`);
};

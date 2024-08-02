import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Function to handle user login
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    localStorage.setItem('token', response.data.token);
    return true;
  } catch (error) {
    console.error('Login failed', error);
    return false;
  }
};

// Function to handle user registration
export const registerUser = async (userData) => {
  try {
    await axios.post(`${API_URL}/register`, userData);
    return true;
  } catch (error) {
    console.error('Registration failed', error);
    return false;
  }
};

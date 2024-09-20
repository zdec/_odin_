// src/utils/authService.js
import axios from 'axios';

const API_URL = 'https://your-api-url.com'; // Reemplaza con tu URL de API

export const loginUser = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

export const registerUser = async (username, password) => {
  const response = await axios.post(`${API_URL}/register`, { username, password });
  return response.data;
};

export const login = async (username, password) => {
  const response = await fetch('https://your-backend-api.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Failed to login'); // Puedes personalizar el mensaje de error
  }

  const data = await response.json();
  return data.token;
};

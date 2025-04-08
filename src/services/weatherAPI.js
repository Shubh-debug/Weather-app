// src/services/weatherAPI.js
import axios from 'axios';

// ✅ Load API key from .env (Vite syntax)
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const getWeatherByCity = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log('Fetching:', url); // Debug log
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('❌ API Error:', error.response?.data || error.message);
    throw error;
  }
};

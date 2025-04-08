// src/pages/HomePage.jsx
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import Loading from '../components/Loading';
import { getWeatherByCity } from '../services/weatherAPI';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError('');
      const data = await getWeatherByCity(city);
      setWeather(data);
      setLoading(false);
    } catch (err) {
      setWeather(null);
      setError('City not found or API error.');
      setLoading(false);
    }
  };

  return (
    <div className={styles.homePage}>
      <div className={styles.hero}>
        <h1>🌦️ Weather Dashboard</h1>
        <p>Get current weather conditions for any city in the world</p>
        <SearchBar onSearch={handleSearch} />
      </div>
      
      {error && <p className={styles.error}>{error}</p>}
      
      {loading ? (
        <Loading />
      ) : (
        weather && (
          <div className={styles.weatherContainer}>
            <WeatherCard weather={weather} />
            <Link to="/details" className={styles.detailsLink}>
              View detailed weather information
            </Link>
          </div>
        )
      )}
      
      {!weather && !loading && !error && (
        <div className={styles.welcome}>
          <div className={styles.welcomeIcon}>☀️</div>
          <h2>Welcome to Weather Dashboard</h2>
          <p>Enter a city name above to check the current weather</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
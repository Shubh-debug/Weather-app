// src/pages/DetailsPage.jsx
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherDetails from '../components/WeatherDetails';
import Loading from '../components/Loading';
import { getWeatherByCity } from '../services/weatherAPI';
import styles from './DetailsPage.module.css';

const DetailsPage = () => {
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
      setError('City not found or API error. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className={styles.detailsPage}>
      <div className={styles.searchContainer}>
        <h1>Weather Details</h1>
        <p>Search for a city to view detailed weather information</p>
        <SearchBar onSearch={handleSearch} />
      </div>
      
      {error && <p className={styles.error}>{error}</p>}
      
      {loading ? (
        <Loading />
      ) : (
        weather ? (
          <WeatherDetails weather={weather} />
        ) : (
          !error && (
            <div className={styles.placeholder}>
              <div className={styles.placeholderIcon}>🔍</div>
              <h2>Enter a city name to see detailed weather information</h2>
            </div>
          )
        )
      )}
    </div>
  );
};

export default DetailsPage;
// src/pages/DetailsPage.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import WeatherDetails from '../components/WeatherDetails';
import Loading from '../components/Loading';
import { getWeatherByCity } from '../services/weatherAPI';
import styles from './DetailsPage.module.css';

const DetailsPage = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const city = searchParams.get('city');

  useEffect(() => {
    if (city) {
      const fetchWeather = async () => {
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
      fetchWeather();
    }
  }, [city]);

  return (
    <div className={styles.detailsPage}>
      <h1>Weather Details</h1>
      
      {error && <p className={styles.error}>{error}</p>}
      
      {loading ? (
        <Loading />
      ) : weather ? (
        <WeatherDetails weather={weather} />
      ) : (
        <div className={styles.placeholder}>
          <div className={styles.placeholderIcon}>🔍</div>
          <h2>No weather data available</h2>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
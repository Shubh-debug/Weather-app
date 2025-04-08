// src/components/WeatherDetails.jsx
import React from 'react';
import styles from './WeatherDetails.module.css';

const WeatherDetails = ({ weather }) => {
  if (!weather) return null;

  // Convert Unix timestamp to readable time
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.mainInfo}>
        <div className={styles.location}>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p className={styles.dateTime}>
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
        
        <div className={styles.currentWeather}>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt={weather.weather[0].description}
            className={styles.weatherIcon}
          />
          <div className={styles.tempInfo}>
            <h2 className={styles.temp}>{Math.round(weather.main.temp)}°C</h2>
            <p className={styles.feelsLike}>Feels like: {Math.round(weather.main.feels_like)}°C</p>
            <p className={styles.description}>{weather.weather[0].description}</p>
          </div>
        </div>
      </div>
      
      <div className={styles.detailsGrid}>
        <div className={styles.detailBox}>
          <h3>Humidity</h3>
          <p>{weather.main.humidity}%</p>
        </div>
        <div className={styles.detailBox}>
          <h3>Wind</h3>
          <p>{weather.wind.speed} km/h</p>
        </div>
        <div className={styles.detailBox}>
          <h3>Pressure</h3>
          <p>{weather.main.pressure} hPa</p>
        </div>
        <div className={styles.detailBox}>
          <h3>Visibility</h3>
          <p>{(weather.visibility / 1000).toFixed(1)} km</p>
        </div>
        <div className={styles.detailBox}>
          <h3>Sunrise</h3>
          <p>{formatTime(weather.sys.sunrise)}</p>
        </div>
        <div className={styles.detailBox}>
          <h3>Sunset</h3>
          <p>{formatTime(weather.sys.sunset)}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
// src/components/WeatherCard.jsx
import React from 'react';
import styles from './WeatherCard.module.css';

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className={styles.card}>
      <h2>{weather.name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather-icon"
      />
      <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
      <p><strong>Condition:</strong> {weather.weather[0].main}</p>
      <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
      <p><strong>Wind:</strong> {weather.wind.speed} km/h</p>
    </div>
  );
};

export default WeatherCard;

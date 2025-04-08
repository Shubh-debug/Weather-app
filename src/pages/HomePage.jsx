// src/pages/HomePage.jsx
import React from 'react';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearch = (city) => {
    navigate(`/details?city=${encodeURIComponent(city)}`);
  };

  return (
    <div className={styles.homePage}>
      <div className={styles.hero}>
        <h1>🌦️ Weather Dashboard</h1>
        <p>Get current weather conditions for any city in the world</p>
        <SearchBar onSearch={handleSearch} />
      </div>
      
      <div className={styles.welcome}>
        <div className={styles.welcomeIcon}>☀️</div>
        <h2>Welcome to Weather Dashboard</h2>
        <p>Enter a city name above to check the current weather</p>
      </div>
    </div>
  );
};

export default HomePage;
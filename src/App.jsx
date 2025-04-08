// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import styles from './App.module.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details" element={<DetailsPage />} />
          </Routes>
        </div>
        <footer className={styles.footer}>
          <p>© 2025 Weather Dashboard. Data provided by OpenWeatherMap.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
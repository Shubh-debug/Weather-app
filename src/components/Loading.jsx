// src/components/Loading.jsx
import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p>Loading weather data.....</p>
    </div>
  );
};

export default Loading;
// src/components/Header.jsx
import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/"> Weather App</Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/details" className={styles.navLink}>Weather Details</Link>
      </nav>
    </header>
  );
};

export default Header;
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <button className={styles.menu}></button>
      <h2 className={styles.title}>Spot</h2>
      <div className={styles.profile}>
        <Link to="/login">Log in</Link> / <Link to="/signup">Create account</Link>
      </div>
    </div>
  );
}
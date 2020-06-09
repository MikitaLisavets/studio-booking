import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { getUser } from '../../selectors';
import Display from '../../utils/Display';

export default function Header(): JSX.Element {
  const user = useShallowEqualSelector(getUser);

  return (
    <div className={styles.header}>
      <button className={styles.menu}></button>
      <h2 className={styles.title}>Spot</h2>
      <Display if={!!user}>
        <div className={styles.profile}>
          <span>{user?.email}</span>
        </div>
      </Display>
      <Display if={!user}>
        <div className={styles.profile}>
          <Link to="/login">Log in</Link> / <Link to="/signup">Create account</Link>
        </div>
      </Display>
    </div>
  );
}
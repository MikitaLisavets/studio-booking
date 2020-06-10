import styles from './Header.module.scss';
import React from 'react';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import Display from '../../utils/Display';
import L from '../../utils/locale';
import { Link } from 'react-router-dom';
import { getUser } from '../../selectors/selectors';

export default function Header(): JSX.Element {
  const user = useShallowEqualSelector(getUser);

  return (
    <div className={styles.header}>
      <button className={styles.menu}></button>
      <h2 className={styles.title}>{L('header.logo')}</h2>
      <Display if={!!user}>
        <div className={styles.profile}>
          <span>{user?.email}</span>
        </div>
      </Display>
      <Display if={!user}>
        <div className={styles.profile}>
          <Link to="/login">{L('header.login')}</Link> / <Link to="/signup">{L('header.signup')}</Link>
        </div>
      </Display>
    </div>
  );
}
import styles from './Header.module.scss';
import React, { MouseEvent } from 'react';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import Display from '../../utils/Display';
import L from '../../utils/locale';
import { Link } from 'react-router-dom';
import { getUser } from '../../selectors/selectors';
import { SIGN_UP_ROUTE, LOGIN_ROUTE, LOGOUT_ROUTE } from '../../constants/navigation';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/Actions';


export default function Header(): JSX.Element {
  const dispatch = useDispatch();
  const user = useShallowEqualSelector(getUser);

  function handleLogoutClick(event: MouseEvent): void {
    event.preventDefault();
    dispatch(logout());
  }

  return (
    <div className={styles.header}>
      <button className={styles.menu} aria-label="Toggle Navigation"></button>
      <h2 className={styles.title}>{L('header.logo')}</h2>
      <Display if={!!user}>
        <div className={styles.profile}>
          <span>{user?.email}</span>
          (<a href={LOGOUT_ROUTE} onClick={handleLogoutClick}>{L('header.logout')}</a>)
        </div>
      </Display>
      <Display if={!user}>
        <div className={styles.profile}>
          <Link to={LOGIN_ROUTE}>{L('header.login')}</Link> / <Link to={SIGN_UP_ROUTE}>{L('header.signup')}</Link>
        </div>
      </Display>
    </div>
  );
}
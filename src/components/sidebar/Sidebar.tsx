import styles from './Sidebar.module.scss';
import React from 'react';
import { CloseIcon } from '../icons/Icons';
import { Link } from 'react-router-dom';
import { MAIN_ROUTE, PRICES_ROUTE, SCHEDULE_ROUTE, ROOMS_ROUTE, CONTACTS_ROUTE, ABOUT_ROUTE } from '../../constants/navigation';
import L from '../../utils/locale';

export default function Sidebar(): JSX.Element {
  const LINKS = [
    { name: L('navigation.route.main'), url: MAIN_ROUTE },
    { name: L('navigation.route.prices'), url: PRICES_ROUTE },
    { name: L('navigation.route.schedule'), url: SCHEDULE_ROUTE },
    { name: L('navigation.route.rooms'), url: ROOMS_ROUTE },
    { name: L('navigation.route.contacts'), url: CONTACTS_ROUTE },
    { name: L('navigation.route.about'), url: ABOUT_ROUTE },
  ];

  return (
    <div className={styles.menu}>
      <button className={styles.close}><CloseIcon/></button>
      <ul className={styles.list}>
        {LINKS.map((link) => (
          <li className={styles.item} key={link.url}>
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
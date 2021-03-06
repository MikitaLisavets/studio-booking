import styles from './Main.module.scss';
import React from 'react';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { getLocale } from '../../selectors/selectors';
import * as Actions from '../../actions/Actions';
import Header from '../../components/header/Header';
import { useDispatch } from 'react-redux';
import { WavesIcon } from '../../components/icons/Icons';

export default function Main(): JSX.Element {
  const locale = useShallowEqualSelector(getLocale);
  const dispatch = useDispatch();
  const setLocale = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = event.target.value;
    if (locale !== value) dispatch(Actions.setLocale(value));
  };


  return (
    <div className={styles.page}>
      <Header/>
      <div className={styles.hero}>
        <WavesIcon/>
      </div>
      <label htmlFor="lang-selector">Lang:</label>
      <select id="lang-selector" onBlur={setLocale} onChange={setLocale}>
        <option value="en" selected>En</option>
        <option value="ru">Ru</option>
      </select>
    </div>
  );
}
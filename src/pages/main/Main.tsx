import './Main.scss';
import React from 'react';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { getLocale } from '../../selectors/selectors';
import * as Actions from '../../actions/Actions';
import Header from '../../components/header/Header';
import L from '../../utils/locale';
import { useDispatch } from 'react-redux';

export default function Main(): JSX.Element {
  const locale = useShallowEqualSelector(getLocale);
  const dispatch = useDispatch();
  const setLocale = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = event.target.value;
    if (locale !== value) dispatch(Actions.setLocale(value));
  };


  return (
    <div className="main-page">
      <Header/>
      <div>Lang:</div>
      <select onBlur={setLocale} onChange={setLocale}>
        <option value="en" selected>En</option>
        <option value="ru">Ru</option>
      </select>

      <h1>{L('mainPage.title')}</h1>
    </div>
  );
}
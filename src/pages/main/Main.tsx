import './Main.scss';
import React from 'react';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import useAction from '../../hooks/useAction';
import { getCounter, getLocale } from '../../selectors';
import * as Actions from '../../actions/CommonActions';
import Header from '../../components/header/Header';
import L from '../../utils/locale';
import { useDispatch } from 'react-redux';

export default function Main(): JSX.Element {
  const counter = useShallowEqualSelector(getCounter);
  const locale = useShallowEqualSelector(getLocale);
  const dispatch = useDispatch();
  const increment = useAction(Actions.increment());
  const decrement = useAction(Actions.decrement());
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
      <div> Main {counter}</div>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
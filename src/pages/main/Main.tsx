import './Main.scss';
import React from 'react';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import useAction from '../../hooks/useAction';
import { getCounter } from '../../selectors';
import * as Actions from '../../actions';
import Header from '../../components/header/Header';
import L from '../../utils/locale';

export default function Main(): JSX.Element {
  const counter = useShallowEqualSelector(getCounter);
  const increment = useAction(Actions.increment());
  const decrement = useAction(Actions.decrement());

  return (
    <div className="container">
      <Header/>
      <h1>{L('mainPage.title')}</h1>
      <div> Main {counter}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
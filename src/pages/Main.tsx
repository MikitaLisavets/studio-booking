import './Main.scss';
import React from 'react';
import useShallowEqualSelector from '../hooks/useShallowEqualSelector';
import useAction from '../hooks/useAction';
import { getCounter } from '../selectors';
import * as Actions from '../actions';

export default function Main(): JSX.Element {
  const counter = useShallowEqualSelector(getCounter);
  const increment = useAction(Actions.increment());
  const decrement = useAction(Actions.decrement());

  return (
    <div className="container">
      <div> Main {counter}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
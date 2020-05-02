import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions';
import { AppState } from '../types';
import { combineReducers, Action } from 'redux';

export const initialState: AppState = {
  counter: 0
};

export function counter(state = initialState.counter, action: Action): number {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return state + 1;
  case DECREMENT_COUNTER:
    return state - 1;
  default:
    return state;
  }
}

export default combineReducers({
  counter
});
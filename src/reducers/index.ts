import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions';
import { AppState } from '../types';
import { combineReducers, AnyAction } from 'redux';

export const initialState: AppState = {
  locale: 'en',
  counter: 0
};

export function locale(state = initialState.locale, action: AnyAction): string {
  switch (action.type) {
  case 'SET_LOCALE':
    return action.payload;
  default:
    return state;
  }
}

export function counter(state = initialState.counter, action: AnyAction): number {
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
  locale,
  counter
});
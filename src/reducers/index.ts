import * as Actions from '../actions';
import { AppState } from '../types';
import { combineReducers, Action } from 'redux';

export const initialState: AppState = {
  locale: 'en',
  counter: 0
};

export function locale(state = initialState.locale, action: Actions.SetLocaleAction): string {
  switch (action.type) {
  case Actions.SET_LOCALE:
    return action.payload;
  default:
    return state;
  }
}

export function counter(state = initialState.counter, action: Action): number {
  switch (action.type) {
  case Actions.INCREMENT_COUNTER:
    return state + 1;
  case Actions.DECREMENT_COUNTER:
    return state - 1;
  default:
    return state;
  }
}

export default combineReducers({
  locale,
  counter
});
import * as Actions from '../actions/CommonActions';
import { AppState, ErrorRequest } from '../types';
import { combineReducers, Action } from 'redux';

export const initialState: AppState = {
  error: null,
  locale: 'en',
  counter: 0
};

export function error(state = initialState.error, action: Actions.ErrorActionType): ErrorRequest | null {
  switch (action.type) {
  case Actions.SET_ERROR:
    return !action.payload.statusCode
      ? { statusCode: 500, code: 'SystemException', message: action.payload.message}
      : action.payload;
  case Actions.CLEAR_ERROR:
    return null;
  default:
    return state;
  }
}

export function locale(state = initialState.locale, action: Actions.LocaleAction): string {
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
  error,
  locale,
  counter
});
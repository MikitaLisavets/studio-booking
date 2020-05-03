import { Action } from 'redux';

export const SET_LOCALE = 'SET_LOCALE';
export type SetLocaleAction = {
  type: typeof SET_LOCALE;
  payload: string;
}
export function setLocale(locale: string): SetLocaleAction {
  return {
    type: SET_LOCALE,
    payload: locale
  };
}

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export function increment(): Action {
  return {
    type: INCREMENT_COUNTER,
  };
}

export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export function decrement(): Action {
  return {
    type: DECREMENT_COUNTER,
  };
}
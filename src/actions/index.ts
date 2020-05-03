import { Action } from 'redux';
import { Error } from '../types';

export const SET_LOCALE = 'SET_LOCALE';

interface SetLocaleAction {
  type: typeof SET_LOCALE;
  payload: string;
}

export type LocaleAction = SetLocaleAction;

export function setLocale(locale: string): LocaleAction {
  return {
    type: SET_LOCALE,
    payload: locale
  };
}

export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: Error;
}

interface ClearErrorAction {
  type: typeof CLEAR_ERROR;
}
export type ErrorActionType = SetErrorAction | ClearErrorAction;

export function setError(error: Error): ErrorActionType {
  return {
    type: SET_ERROR,
    payload: error
  };
}
export function clearError(): ErrorActionType {
  return {
    type: CLEAR_ERROR
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
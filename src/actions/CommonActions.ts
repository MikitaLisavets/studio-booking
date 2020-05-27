import { Action, AnyAction } from 'redux';
import { AppState, ErrorRequest } from '../types';
import { rest } from '../utils/rest';
import { ThunkAction } from 'redux-thunk';

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
  payload: ErrorRequest;
}

interface ClearErrorAction {
  type: typeof CLEAR_ERROR;
}
export type ErrorActionType = SetErrorAction | ClearErrorAction;

export function setError(error: ErrorRequest): ErrorActionType {
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

export function initApp(): ThunkAction<void, AppState, never, AnyAction> {
  return (dispatch): void => {
    rest.setErrorHandler(error => { dispatch(setError(error)); });
  };
}
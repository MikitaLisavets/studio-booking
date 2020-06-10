import * as types from './types';
import { AnyAction } from 'redux';
import { AppState, ErrorRequest, User } from '../types/types';
import { rest, updateSession } from '../utils/rest';
import { ThunkAction } from 'redux-thunk';

export const SET_LOCALE = 'SET_LOCALE';
export function setLocale(locale: string): types.SetLocaleAction {
  return {
    type: SET_LOCALE,
    payload: locale
  };
}

export const SET_ERROR = 'SET_ERROR';
export function setError(error: ErrorRequest): types.SetErrorAction {
  return {
    type: SET_ERROR,
    payload: error
  };
}

export const CLEAR_ERROR = 'CLEAR_ERROR';
export function clearError(): types.ClearErrorAction {
  return {
    type: CLEAR_ERROR
  };
}

export const SET_USER = 'SET_USER';
export function setUser(user: User): types.SetUserAction {
  return {
    type: SET_USER,
    payload: user
  };
}

export const CLEAR_USER = 'CLEAR_USER';
export function clearUser(): types.ClearUserAction {
  return {
    type: CLEAR_USER
  };
}

export function initApp(): ThunkAction<void, AppState, never, AnyAction> {
  return (dispatch): void => {
    rest.setErrorHandler(error => { dispatch(setError(error)); });
    updateSession(() => { dispatch(clearUser()); })
      .then((response) => {
        if (!response) return;
        dispatch(setUser(response.user));
      });
  };
}
import { AnyAction } from 'redux';
import { AppState, ErrorRequest, User } from '../types/Types';
import { rest, updateSession } from '../utils/rest';
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

export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

interface ClearUserAction {
  type: typeof CLEAR_USER;
}

export type UserActionType = SetUserAction | ClearUserAction;

export function setUser(user: User): UserActionType {
  return {
    type: SET_USER,
    payload: user
  };
}

export function clearUser(): UserActionType {
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
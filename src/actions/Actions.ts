import * as types from './types';
import { AnyAction } from 'redux';
import { AppState, ErrorRequest, User } from '../types/types';
import * as Rest from '../utils/rest';
import { ThunkAction } from 'redux-thunk';
import { MAIN_ROUTE } from '../constants/navigation';
import { history } from '../appRoutes';

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

export const SET_IS_CODE_CONFIRM_REQUIRED = 'SET_IS_CODE_CONFIRM_REQUIRED';
export function setIsCodeConfirmRequired(payload: boolean): types.IsCodeConfirmRequiredAction {
  return {
    type: SET_IS_CODE_CONFIRM_REQUIRED,
    payload
  };
}

export function initApp(): ThunkAction<void, AppState, never, AnyAction> {
  return (dispatch): void => {
    Rest.rest.setErrorHandler(error => { dispatch(setError(error)); });
    Rest.updateSession(() => { dispatch(clearUser()); })
      .then((response) => {
        if (!response) return;
        dispatch(setUser(response.user));
      });
  };
}

export function login({ email, password }: Rest.LoginRequest): ThunkAction<void, AppState, never, AnyAction> {
  return (dispatch): void => {
    Rest.login({ email, password })
      .then((response) => {
        if (!response) return;
        dispatch(setUser(response.user));
        history.push(MAIN_ROUTE);
      });
  };
}

export function logout(): ThunkAction<void, AppState, never, AnyAction> {
  return (dispatch): void => {
    Rest.logout().then(() => {
      dispatch(clearUser());
      history.push(MAIN_ROUTE);
    });
  };
}

export function signUp({ email, phoneNumber, password }: Rest.SignUpRequest): ThunkAction<void, AppState, never, AnyAction> {
  return (dispatch): void => {
    Rest.signUp({ email, phoneNumber, password })
      .then((response) => {
        if (response) dispatch(setIsCodeConfirmRequired(!response.UserConfirmed));
      });
  };
}

export function confirmSignUp({ confirmationCode, email, password }: Rest.ConfirmSignUpRequest): ThunkAction<void, AppState, never, AnyAction> {
  return (dispatch): void => {
    Rest.confirmSignUp({ confirmationCode, email, password })
      .then((response) => {
        if (!response) return;
        dispatch(setUser(response.user));
        dispatch(setIsCodeConfirmRequired(false));
        history.push(MAIN_ROUTE);
      });
  };
}
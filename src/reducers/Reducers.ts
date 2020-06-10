import * as Actions from '../actions/Actions';
import * as actionTypes from '../actions/types';
import { AppState, ErrorRequest, User } from '../types/types';
import { combineReducers } from 'redux';

export const initialState: AppState = {
  user: null,
  error: null,
  locale: 'en'
};

export function user(state = initialState.user, action: actionTypes.UserActionType): User | null {
  switch (action.type) {
  case Actions.SET_USER:
    return action.payload;
  case Actions.CLEAR_USER:
    return null;
  default:
    return state;
  }
}

export function error(state = initialState.error, action: actionTypes.ErrorActionType): ErrorRequest | null {
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

export function locale(state = initialState.locale, action: actionTypes.LocaleAction): string {
  switch (action.type) {
  case Actions.SET_LOCALE:
    return action.payload;
  default:
    return state;
  }
}

export default combineReducers({
  user,
  error,
  locale
});
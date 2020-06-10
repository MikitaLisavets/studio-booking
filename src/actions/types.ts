import * as Actions from './Actions';
import { ErrorRequest, User } from '../types/types';

export type SetLocaleAction = {
  type: typeof Actions.SET_LOCALE;
  payload: string;
}
export type LocaleAction = SetLocaleAction;

export interface SetErrorAction {
  type: typeof Actions.SET_ERROR;
  payload: ErrorRequest;
}
export interface ClearErrorAction {
  type: typeof Actions.CLEAR_ERROR;
}
export type ErrorActionType = SetErrorAction | ClearErrorAction;

export interface SetUserAction {
  type: typeof Actions.SET_USER;
  payload: User;
}
export interface ClearUserAction {
  type: typeof Actions.CLEAR_USER;
}
export type UserActionType = SetUserAction | ClearUserAction;
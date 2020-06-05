import { ListUsersResponse, User, ErrorRequest } from '../types/Types';
import RestCreator from './restCreator';


export const API = process.env.REACT_APP_API || '';
export const rest = new RestCreator(API);

export async function allUsers(): Promise<ListUsersResponse> {
  const response = await fetch(API + '/listUsers', { method: 'POST' });
  const result =  await response.json();

  if (response.ok) return result;
  throw result;
}

export type SignUpProp = {
  password: string;
  email: string;
}
export async function oldSignUp({ password, email}: SignUpProp): Promise<SignUpResponse> {
  const response = await fetch(API + '/signUp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password,
      email
    })
  });
  const result =  await response.json();

  if (response.ok) return result;
  throw result;
}

export type ConfirmSignUpProp = {
  confirmationCode: string;
  email: string;
}

export async function oldConfirmSignUp({ confirmationCode, email }: ConfirmSignUpProp): Promise<object> {
  const response = await fetch(API + '/confirmSignUp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      confirmationCode,
      email
    })
  });
 
  const result =  await response.json();

  if (response.ok) return result;
  throw result;
}

// new API

export const SIGN_UP_URL = '/signUp';
export interface SignUpRequest {
  email: string;
  phoneNumber: string;
  password: string;
}

export interface SignUpResponse {
  UserConfirmed: boolean;
}

export function signUp(params: SignUpRequest, errorHandler: ((error: ErrorRequest) => void) | null = null): Promise<SignUpResponse | void> {
  return rest.post<SignUpResponse>(SIGN_UP_URL, params, {}, {}, errorHandler);
}

export const CONFIRM_SIGN_UP_URL = '/confirmSignUp';
export interface ConfirmSignUpRequest {
  confirmationCode: string;
  email: string;
  password: string;
}

export interface ConfirmSignUpResponse {
  user: User;
}

export function confirmSignUp(params: ConfirmSignUpRequest, errorHandler: ((error: ErrorRequest) => void) | null = null): Promise<ConfirmSignUpResponse | void> {
  return rest.post<ConfirmSignUpResponse>(CONFIRM_SIGN_UP_URL, params, {}, {}, errorHandler);
}

export const LOGIN_URL = '/login';
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
}

export function login(params: LoginRequest, errorHandler: ((error: ErrorRequest) => void) | null = null): Promise<LoginResponse | void> {
  return rest.post<LoginResponse>(LOGIN_URL, params, {}, { credentials: 'include' }, errorHandler);
}


export const UPDATE_SESSION_URL = '/updateSession';

export interface UpdateSessionResponse {
  user: User;
}

export function updateSession(errorHandler: ((error: ErrorRequest) => void) | null = null): Promise<LoginResponse | void> {
  return rest.post<UpdateSessionResponse>(UPDATE_SESSION_URL, {}, {}, { credentials: 'include' }, errorHandler);
}

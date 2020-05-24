import { ListUsersResponse, User } from '../types';
import RestCreator from './restCreator';


export const API = process.env.REACT_APP_API || '';
const rest = new RestCreator(API);

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

export type LoginProp = {
  password: string;
  email: string;
}
export async function login({ password, email}: LoginProp): Promise<User> {
  const response = await fetch(API + '/login', {
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

export function signUp(params: SignUpRequest, errorHandler: ((error: Error) => void) | null = null): Promise<SignUpResponse | void> {
  return rest.post<SignUpResponse>(SIGN_UP_URL, params, {}, errorHandler);
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

export function confirmSignUp(params: ConfirmSignUpRequest, errorHandler: ((error: Error) => void) | null = null): Promise<ConfirmSignUpResponse | void> {
  return rest.post<ConfirmSignUpResponse>(CONFIRM_SIGN_UP_URL, params, {}, errorHandler);
}
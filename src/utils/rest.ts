import { ListUsersResponse, SignUpResponse, ErrorResponse } from '../types';

const API = process.env.REACT_APP_API;

export async function allUsers(): Promise<ListUsersResponse | ErrorResponse> {
  const response = await fetch(API + '/listUsers', { method: 'POST' });
  return await response.json();
}

export type SignUpProp = {
  password: string;
  email: string;
}
export async function signUp({ password, email}: SignUpProp): Promise<SignUpResponse | ErrorResponse> {
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
 
  return await response.json();
}

export type ConfirmSignUpProp = {
  confirmationCode: string;
  email: string;
}

export async function confirmSignUp({ confirmationCode, email }: ConfirmSignUpProp): Promise<object | ErrorResponse> {
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
 
  return await response.json();
}
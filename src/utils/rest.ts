import { ListUsersResponse, SignUpResponse } from '../types';

const API = process.env.REACT_APP_API;

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
export async function signUp({ password, email}: SignUpProp): Promise<SignUpResponse> {
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

export async function confirmSignUp({ confirmationCode, email }: ConfirmSignUpProp): Promise<object> {
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
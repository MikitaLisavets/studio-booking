const API = process.env.REACT_APP_API;

export async function allUsers() {
  const response = await fetch(API + '/listUsers', { method: 'POST' });
  return await response.json();
}

export async function signUp({ password, email }: any) {
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

export async function confirmSignUp({ confirmationCode, email }: any) {
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
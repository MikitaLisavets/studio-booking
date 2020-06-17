import * as Rest from '../../utils/rest';
import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/Actions';

export default function Login(): JSX.Element {
  const dispatch = useDispatch();

  function handleLoginSubmit(event: FormEvent): void {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) return console.error('Not valid form');

    dispatch(login({ email, password }));
  }

  return (
    <div className="login-page">
      <form action={`${Rest.API}${Rest.LOGIN_URL}`} method="POST" onSubmit={handleLoginSubmit}>
        <fieldset>
          <label htmlFor="email">Email:</label><br/>
          <input id="email" type="email" name="email" required/>
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password:</label><br/>
          <input id="password" type="password" name="password" required/>
        </fieldset>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
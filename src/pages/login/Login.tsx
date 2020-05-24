import * as rest from '../../utils/rest';
import React, { FormEvent } from 'react';

export default function Login(): JSX.Element {
  function handleLoginSubmit(event: FormEvent): void {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) return console.error('Not valid form');

    rest.login({ email, password }, (error) => { console.log(error); })
      .then((response) => {
        if (!response) return;
        console.log(response.user);
      });
  }


  return (
    <div className="login-page">
      <form action={`${rest.API}${rest.LOGIN_URL}`} method="POST" onSubmit={handleLoginSubmit}>
        <fieldset>
          <label htmlFor="email">Email:</label><br/>
          <input id="email" type="email" name="email"/>
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password:</label><br/>
          <input id="password" type="password" name="password"/>
        </fieldset>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
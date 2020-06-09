import * as rest from '../../utils/rest';
import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../actions/Actions';
import { useHistory } from 'react-router-dom';
import { MAIN_ROUTE } from '../../constants/navigation';

export default function Login(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleLoginSubmit(event: FormEvent): void {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) return console.error('Not valid form');

    rest.login({ email, password }, (error) => { console.log(error); })
      .then((response) => {
        if (!response) return;
        dispatch(setUser(response.user));
        history.push(MAIN_ROUTE);
      });
  }

  return (
    <div className="login-page">
      <form action={`${rest.API}${rest.LOGIN_URL}`} method="POST" onSubmit={handleLoginSubmit}>
        <fieldset>
          <label htmlFor="email">Email:</label><br/>
          <input id="email" type="email" name="email" value="xosaj13634@seberkd.com"/>
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password:</label><br/>
          <input id="password" type="password" name="password" value="Testest1"/>
        </fieldset>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
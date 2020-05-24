import * as rest from '../../utils/rest';
import React, { useState, FormEvent } from 'react';
import './App.scss';
import { oldUser } from '../../types';
import Display from '../../utils/Display';

function App(): JSX.Element {
  const [allUsers, setAllUsers] = useState<oldUser[]>([]);
  const [error, setError] = useState('');
  const [needConfirm, setNeedConfirm] = useState(false);

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const email = target.elements[0] as HTMLInputElement;
    const password = target.elements[1] as HTMLInputElement;
    const confirmationCode = target.elements[2] as HTMLInputElement;

    if (needConfirm) {
      rest.oldConfirmSignUp({ email: email.value, confirmationCode: confirmationCode.value })
        .then(() => setNeedConfirm(false))
        .catch(response => {
          if (response.error) return setError(response.error.message);
        });
    } else {
      rest.oldSignUp({ email: email.value, password: password.value })
        .then(() => setNeedConfirm(true))
        .catch(response => {
          if (response.error) return setError(response.error.message);
        });
    }
  }

  function handleGetAllUsers(): void {
    rest.allUsers()
      .then((response) => setAllUsers(response.Users || []))
      .catch((response) => { if (response.error) setError(response.error.message); });
  }

  return (
    <div className="app-page" onSubmit={handleSubmit}>
      <Display if={!!error}>
        <div className="error">
          {error}
        </div>
      </Display>
      <form>
        <label>Email: 
          <input type="email" name="email"/>
        </label>
        <br/>
        <label>Password: 
          <input type="password" name="password"/>
        </label>
        <br/>
        <Display if={needConfirm}>
          <label>Confirm code: 
            <input type="text" name="confirmationCode"/>
            <span className="green">Check your email</span>
          </label>
        </Display>
        <br/>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleGetAllUsers}>Get all users</button>
      </form>
      <br/>
      <Display if={!!allUsers.length}>
        <div>
          All users:
          <ul>
            { allUsers.map((user, index) => {
              const email = user.Attributes?.find(({ Name }) => Name === 'email')?.Value;
              return (
                <li key={index}>
                  {email}{' '} [{user.UserStatus}]
                </li>
              );
            })}
          </ul>
        </div>
      </Display>
    </div>
  );
}

export default App;

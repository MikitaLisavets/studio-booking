import * as rest from './utils/rest';
import React, { useState, FormEvent } from 'react';
import './App.css';
import { User } from './types';

function App(): JSX.Element {
  const [allUsers, setAllUsers] = useState<Array<User>>([]);
  const [error, setError] = useState('');
  const [needConfirm, setNeedConfirm] = useState(false);

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const email = target.elements[0] as HTMLInputElement;
    const password = target.elements[1] as HTMLInputElement;
    const confirmationCode = target.elements[2] as HTMLInputElement;

    if (needConfirm) {
      rest.confirmSignUp({ email: email.value, confirmationCode: confirmationCode.value })
        .then(response => {
          if (response.error) return setError(response.error.message);
          setNeedConfirm(false);
        });
    } else {
      rest.signUp({ email: email.value, password: password.value })
        .then(response => {
          if (response.error) return setError(response.error.message);
          setNeedConfirm(true);
        }); 
    }
  }

  function handleGetAllUsers(): void {
    rest.allUsers().then(setAllUsers);
  }

  return (
    <div className="App" onSubmit={handleSubmit}>
      { error
        ?
        <div className="error">
          {error}
        </div>
        : ''
      }
      {
        
      }
      <form>
        <label>Email: 
          <input type="email" name="email"/>
        </label>
        <br/>
        <label>Password: 
          <input type="password" name="password"/>
        </label>
        <br/>
        { needConfirm
          ? 
          <label>Confirm code: 
            <input type="text" name="confirmationCode"/>
            <span className="green">Check your email</span>
          </label>
          : ''
        }
        <br/>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleGetAllUsers}>Get all users</button>
      </form>

      { allUsers.length ?
        <div>
          All users:
          <ul>
            { allUsers.map((user, index) => {
              const email = user.Attributes.find(({ Name }) => Name === 'email')?.Value;
              return (
                <li key={index}>
                  {email}{' '} [{user.UserStatus}]
                </li>
              );
            })}
          </ul>
        </div>
        : ''
      }

    </div>
  );
}

export default App;

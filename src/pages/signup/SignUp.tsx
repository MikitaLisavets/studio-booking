import React, { FormEvent, useState } from 'react';
import * as rest from '../../utils/rest';
import Display from '../../utils/Display';

export default function SignUp(): JSX.Element {
  const [userData, setUserData] = useState({
    email: '',
    phoneNumber: '',
    password: ''
  });
  const [confirmStage, setConfirmStage] = useState(false);

  function handleSignUpSubmit(event: FormEvent): void {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const phoneNumber = formData.get('phoneNumber') as string;
    const password = formData.get('password') as string;

    if (!email || !phoneNumber || !password) return console.error('Not valid form');

    setUserData({ email, phoneNumber, password });

    rest.signUp({ email, phoneNumber, password }, (error) => { console.log(error); })
      .then((response) => {
        if (!response) return;
        console.log(response.UserConfirmed);
        setConfirmStage(true);
      });
  }

  function handleConfirmSignUpSubmit(event: FormEvent): void {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const confirmationCode = formData.get('confirmationCode') as string;

    if (!confirmationCode) return console.error('Not valid form');

    rest.confirmSignUp({ confirmationCode, email: userData.email, password: userData.password }, (error) => { console.log(error); })
      .then((response) => {
        if (!response) return;
        console.log(response.user);
      });

    return;
  }
 
  return (
    <div className="sign-up-page">
      <Display if={!confirmStage}>
        <SignUpForm onSubmit={handleSignUpSubmit}/>
      </Display>
      <Display if={confirmStage}>
        <ConfirmSignUpForm onSubmit={handleConfirmSignUpSubmit}/>
      </Display>
    </div>
  );
}

interface SignUpFormProps {
  onSubmit(event: FormEvent<HTMLFormElement>): void;
}

function SignUpForm({ onSubmit }: SignUpFormProps): JSX.Element {
  return (
    <form action={`${rest.API}${rest.SIGN_UP_URL}`} method="POST" onSubmit={onSubmit}>
      <fieldset>
        <label htmlFor="email">Email:</label><br/>
        <input id="email" type="email" name="email"/>
      </fieldset>
      <fieldset>
        <label htmlFor="phoneNumber">Phone number:</label><br/>
        <input id="phoneNumber" type="tel" name="phoneNumber"/>
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password:</label><br/>
        <input id="password" type="password" name="password"/>
      </fieldset>
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
}

interface ConfirmSignUpFormProps {
  onSubmit(event: FormEvent<HTMLFormElement>): void;
}

function ConfirmSignUpForm({ onSubmit }: ConfirmSignUpFormProps): JSX.Element {
  return (
    <form action={`${rest.API}${rest.CONFIRM_SIGN_UP_URL}`} method="POST" onSubmit={onSubmit}>
      <fieldset>
        <label htmlFor="confirmationCode">Confirmation code:</label><br/>
        <input id="confirmationCode" type="number" name="confirmationCode"/>
      </fieldset>
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
}
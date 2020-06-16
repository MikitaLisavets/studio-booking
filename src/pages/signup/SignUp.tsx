import React, { FormEvent, useState } from 'react';
import * as Rest from '../../utils/rest';
import Display from '../../utils/Display';
import { useDispatch } from 'react-redux';
import { signUp, confirmSignUp } from '../../actions/Actions';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { getIsCodeConfirmRequired } from '../../selectors/selectors';

export default function SignUp(): JSX.Element {
  const dispatch = useDispatch();
  const isCodeConfirmRequired = useShallowEqualSelector(getIsCodeConfirmRequired);

  const [userData, setUserData] = useState({
    email: '',
    phoneNumber: '',
    password: ''
  });

  function handleSignUpSubmit(event: FormEvent): void {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const phoneNumber = formData.get('phoneNumber') as string;
    const password = formData.get('password') as string;

    if (!email || !phoneNumber || !password) return console.error('Not valid form');

    setUserData({ email, phoneNumber, password });
    dispatch(signUp({ email, phoneNumber, password }));
  }

  function handleConfirmSignUpSubmit(event: FormEvent): void {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const confirmationCode = formData.get('confirmationCode') as string;

    if (!confirmationCode) return console.error('Not valid form');

    dispatch(confirmSignUp({ confirmationCode, email: userData.email, password: userData.password }));

    return;
  }
 
  return (
    <div className="sign-up-page">
      <Display if={!isCodeConfirmRequired}>
        <SignUpForm onSubmit={handleSignUpSubmit}/>
      </Display>
      <Display if={isCodeConfirmRequired}>
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
    <form action={`${Rest.API}${Rest.SIGN_UP_URL}`} method="POST" onSubmit={onSubmit}>
      <fieldset>
        <label htmlFor="email">Email:</label><br/>
        <input id="email" type="email" name="email" required/>
      </fieldset>
      <fieldset>
        <label htmlFor="phoneNumber">Phone number:</label><br/>
        <input id="phoneNumber" type="tel" name="phoneNumber" required/>
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password:</label><br/>
        <input id="password" type="password" name="password" required/>
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
    <form action={`${Rest.API}${Rest.CONFIRM_SIGN_UP_URL}`} method="POST" onSubmit={onSubmit}>
      <fieldset>
        <label htmlFor="confirmationCode">Confirmation code:</label><br/>
        <input id="confirmationCode" type="number" name="confirmationCode"/>
      </fieldset>
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
}
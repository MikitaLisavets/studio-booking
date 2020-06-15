import React from 'react';
import { Router, Route, Switch } from 'react-router';
import Main from './pages/main/Main';
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import { SIGN_UP_ROUTE, MAIN_ROUTE, LOGIN_ROUTE } from './constants/navigation';
import { createBrowserHistory } from 'history';


export const history = createBrowserHistory();

export default function AppRouter(): JSX.Element {
  return (
    <Router history={history}>
      <Switch>
        <Route path={SIGN_UP_ROUTE} component={SignUp} />
        <Route path={LOGIN_ROUTE} component={Login} />
        <Route path={MAIN_ROUTE} component={Main} />
      </Switch>
    </Router>
  );
}
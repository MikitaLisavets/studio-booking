import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main/Main';
import App from './pages/app/App';
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import { SIGN_UP_ROUTE, MAIN_ROUTE, LOGIN_ROUTE } from './constants/navigation';

export default function AppRouter(): JSX.Element {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path={SIGN_UP_ROUTE} component={SignUp} />
          <Route path={LOGIN_ROUTE} component={Login} />
          <Route path="/app" component={App} />
          <Route path={MAIN_ROUTE} component={Main} />
        </Switch>
      </Router>
    </div>
  );
}
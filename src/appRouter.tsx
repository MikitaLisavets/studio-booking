import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main/Main';
import App from './pages/app/App';
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';

export default function AppRouter(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/app" component={App} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}
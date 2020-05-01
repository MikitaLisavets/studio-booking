import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './pages/App';
import Main from './pages/Main';

export default function AppRouter(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
}
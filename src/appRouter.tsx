import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './pages/App';
import Main from './pages/Main';

export default function AppRouter(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/App" component={App} />
      </Switch>
    </Router>
  );
}
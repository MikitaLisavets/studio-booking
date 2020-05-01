import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import Main from './pages/Main';
import * as serviceWorker from './serviceWorker';
import rootReducer, { initialState } from './reducers';

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <Main />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

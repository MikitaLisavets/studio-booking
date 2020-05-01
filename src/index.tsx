import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer, { initialState } from './reducers';
import AppRouter from './appRouter';


const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRouter/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

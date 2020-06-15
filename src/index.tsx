import './styles/index.scss';
import { createStore, applyMiddleware, compose, AnyAction } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { initApp } from './actions/Actions';
import rootReducer, { initialState } from './reducers/Reducers';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import { AppState } from './types/types';
import App from './pages/app/App';

const middleware = applyMiddleware(thunkMiddleware);
const isDev = process.env.REACT_APP_STAGE === 'dev';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const composeEnhancers = isDev ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
const store = createStore(rootReducer, initialState, composeEnhancers(middleware));
const dispatch: ThunkDispatch<AppState, never, AnyAction> = store.dispatch;
dispatch(initApp());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

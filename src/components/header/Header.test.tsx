jest.mock('../../utils/locale');

import configureStore from 'redux-mock-store';
import Header from './Header';
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

function createComponent(newState = {}): ReactWrapper {
  const state = {
    user: null
  };

  const mockStore = configureStore();
  const store = mockStore({ ...state, ...newState });

  return mount(
    <StaticRouter>
      <Provider store={store}>
        <Header/>
      </Provider>
    </StaticRouter>
  );
}

describe('Header', () => {
  let component: unknown;

  describe('when user is empty', () => {
    beforeAll(() => {
      component = createComponent();
    });

    it('renders correctly', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when user exists', () => {
    beforeAll(() => {
      component = createComponent({ user: { email: 'email@email.com' } });
    });

    it('renders correctly', () => {
      expect(component).toMatchSnapshot();
    });
  });
});

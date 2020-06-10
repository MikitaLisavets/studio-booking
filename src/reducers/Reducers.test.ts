import * as actionTypes from '../actions/types';
import * as Actions from '../actions/Actions';
import * as Reducers from './Reducers';

describe('Reducers', () => {
  describe('initialState', () => {
    it('returns initial state snapshot', () => {
      expect(Reducers.initialState).toMatchSnapshot();
    });
  });

  describe('locale', () => {
    const action: actionTypes.LocaleAction = {
      type:    Actions.SET_LOCALE,
      payload: 'ru'
    };

    it('returns updated locale on SET_LOCALE action', () => {
      expect(Reducers.locale('en', action)).toEqual('ru');
    });
  });
});
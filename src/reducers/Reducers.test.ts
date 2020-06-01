import * as Actions from '../actions/Actions';
import * as Reducers from './Reducers';

describe('Reducers', () => {
  // describe('initialState', () => {
  //   it('returns initial state snapshot', () => {
  //     expect(Reducers.initialState).toMatchSnapshot();
  //   });
  // });

  describe('locale', () => {
    const action: Actions.LocaleAction = {
      type:    Actions.SET_LOCALE,
      payload: 'ru'
    };

    it('returns updated locale on SET_LOCALE action', () => {
      expect(Reducers.locale('en', action)).toEqual('ru');
    });
  });

  describe('counter', () => {
    it('returns incremented counter on INCREMENT_COUNTER action', () => {
      expect(Reducers.counter(0, { type: Actions.INCREMENT_COUNTER })).toEqual(1);
    });

    it('returns decremented counter on DECREMENT_COUNTER action', () => {
      expect(Reducers.counter(0, { type: Actions.DECREMENT_COUNTER })).toEqual(-1);
    });
  });
});
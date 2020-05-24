import * as Urls from './urls';

describe('Urls', () => {
  describe('stringify', () => {
    it('turns object into params string again', () => {
      expect(Urls.stringify({})).toBe('');
      expect(Urls.stringify({ key1: 'value1' })).toBe('key1=value1');
      expect(Urls.stringify({ key1: 'value1', key2: 'value2' })).toBe('key1=value1&key2=value2');
      expect(Urls.stringify({ key1: 'value1', key2: '', key3: 'value3' }))
        .toBe('key1=value1&key2&key3=value3');
    });
  });
});
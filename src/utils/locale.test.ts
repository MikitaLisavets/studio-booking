jest.mock('../translations/index');

import L from './locale';
import * as redux from 'react-redux';

describe('L', () => {
  let useSelectorSpy: jest.SpyInstance;

  beforeAll(() => {
    useSelectorSpy = jest.spyOn(redux, 'useSelector');
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe('when the locale exists', () => {
    beforeAll(() => {
      useSelectorSpy.mockReturnValue('en');
    });

    it ('returns translation when the key exists', () => {
      expect(L('existingKey')).toBe('existingKeyForENLocale');
    });
  
    it ('returns empty string when the key does not exist', () => {
      expect(L('notExistingKey')).toBe('');
    });
  });

  describe('when the locale does not exist', () => {
    beforeAll(() => {
      useSelectorSpy.mockReturnValue('xx');
    });

    it ('returns translation from default locale when the key exists', () => {
      expect(L('existingKey')).toBe('existingKeyForDefaultLocale');
    });
  
    it ('returns empty string when the key does not exist', () => {
      expect(L('notExistingKey')).toBe('');
    });
  });
});
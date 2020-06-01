import RestCreator from './restCreator';

describe('RestCreator', () => {
  const fetchMock = jest.fn().mockImplementation(() => Promise.resolve());
  const API = '/api';
  let rest: RestCreator;

  beforeAll(() => {
    window.fetch = fetchMock;
    rest = new RestCreator(API);
  });

  describe('post', () => {
    beforeEach(() => {
      fetchMock.mockClear();
    });

    it('calls "post" method without post and query params', () => {
      rest.post('/test');

      expect(fetchMock).toHaveBeenCalledWith('/api/test', {
        body: '{}',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        method: 'POST'
      });
    });

    it('calls "post" method with post params', () => {
      rest.post('/test', { param1: 'value1' });

      expect(fetchMock).toHaveBeenCalledWith('/api/test', {
        body:    JSON.stringify({ param1: 'value1' }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        method: 'POST'
      });
    });

    it('calls "post" method with query params', () => {
      rest.post('/test', {}, { queryParam1: 'queryValue1' });
      expect(fetchMock).toHaveBeenCalledWith('/api/test?queryParam1=queryValue1', {
        body: '{}',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        method: 'POST',
      });
    });

    it('calls "post" method with post and query params', () => {
      rest.post('/test', { param1: 'value1' }, { queryParam1: 'queryValue1' });
      expect(fetchMock).toHaveBeenCalledWith('/api/test?queryParam1=queryValue1', {
        body: JSON.stringify({ param1: 'value1' }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        method: 'POST',
      });
    });
  });

  describe('get', () => {
    beforeEach(() => {
      fetchMock.mockClear();
    });

    it('calls "get" method without query params', () => {
      rest.get('/test');

      expect(fetchMock).toHaveBeenCalledWith('/api/test', {
        method: 'GET'
      });
    });

    it('calls "get" method with query params', () => {
      rest.get('/test', { queryParam1: 'queryValue1' });
      expect(fetchMock).toHaveBeenCalledWith('/api/test?queryParam1=queryValue1', {
        method: 'GET'
      });
    });
  });
});
import { stringify } from './urls';

export default class RestCreator {
  errorHandler: () => void;
  apiUrl: string

  constructor(apiUrl: string) {
    this.errorHandler = (): void => undefined;
    this.apiUrl = apiUrl;
  }

  setErrorHandler(handler: () => void): void {
    this.errorHandler = handler;
  }

  get<T>(url: string, queryParams = {}, errorHandler: ((error: Error) => void) | null = null): Promise<T | void> {
    const stringifyQueryParams = stringify(queryParams);

    const fullUrl = [
      this.apiUrl,
      url,
      stringifyQueryParams ? `?${stringifyQueryParams}` : ''
    ].join('');

    return fetch(fullUrl, { method: 'GET', mode: 'cors' })
      .then((response: Response) => this.processResponse<T>(response))
      .catch(errorHandler || this.errorHandler);
  }

  post<T>(url: string, postParams = {}, queryParams = {}, errorHandler: ((error: Error) => void) | null = null): Promise<T | void> {
    const stringifyQueryParams = stringify(queryParams);

    const fullUrl = [
      this.apiUrl,
      url,
      stringifyQueryParams ? `?${stringifyQueryParams}` : ''
    ].join('');

    return fetch(
      fullUrl, {
        method:  'POST',
        mode:    'cors',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body:    JSON.stringify(postParams)
      })
      .then((response: Response) => this.processResponse<T>(response))
      .catch(errorHandler || this.errorHandler);
  }

  private processResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      return response.json()
        .catch(() => { throw response; })
        .then(error => { throw error; });
    }

    return response.json();
  }
}
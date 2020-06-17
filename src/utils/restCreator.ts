import { stringify } from './urls';
import { ErrorRequest } from '../types/types';

export default class RestCreator {
  errorHandler: (error: ErrorRequest) => void;
  apiUrl: string

  constructor(apiUrl: string) {
    this.errorHandler = (): void => undefined;
    this.apiUrl = apiUrl;
  }

  setErrorHandler(handler: (error: ErrorRequest) => void): void {
    this.errorHandler = handler;
  }

  get<T>(url: string, queryParams = {}, options = {}, errorHandler: ((error: ErrorRequest) => void) | null = null): Promise<T | void> {
    const stringifyQueryParams = stringify(queryParams);

    const fullUrl = [
      this.apiUrl,
      url,
      stringifyQueryParams ? `?${stringifyQueryParams}` : ''
    ].join('');

    return fetch(fullUrl, { method: 'GET', mode: 'cors', ...options })
      .then((response: Response) => this.processResponse<T>(response))
      .catch(errorHandler || this.errorHandler);
  }

  post<T>(url: string, postParams = {}, queryParams = {}, options = {}, errorHandler: ((error: ErrorRequest) => void) | null = null): Promise<T | void> {
    const stringifyQueryParams = stringify(queryParams);

    const fullUrl = [
      this.apiUrl,
      url,
      stringifyQueryParams ? `?${stringifyQueryParams}` : ''
    ].join('');

    return fetch(
      fullUrl, {
        method:  'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body:    JSON.stringify(postParams),
        ...options
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
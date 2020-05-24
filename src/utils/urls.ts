export interface StringifyParams {
  [key: string]: string | number | boolean;
}

export function stringify(params: StringifyParams): string {
  return Object.keys(params)
    .filter(key => params[key] !== undefined)
    .map(key => key + (params[key] !== '' ? '=' + encodeURIComponent(params[key]) : ''))
    .join('&');
}
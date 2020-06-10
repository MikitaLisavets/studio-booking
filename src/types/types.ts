export type AppState = {
  user: User | null;
  error: ErrorRequest | null;
  locale: string;
}

export type User = {
  sub?: string;
  email?: string;
  email_verified?: string;
  phone_number?: string;
  phone_number_verified?: string;
}

export type ErrorRequest = {
  message: string;
  code?: string;
  statusCode?: number;
}
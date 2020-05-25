export type AppState = {
  error: ErrorRequest | null;
  locale: string;
  counter: number;
}

export type UserStatus = 'UNCONFIRMED' | 'CONFIRMED' | 'ARCHIVED' | 'COMPROMISED' | 'UNKNOWN' | 'RESET_REQUIRED' | 'FORCE_CHANGE_PASSWORD' | string;

export type Attribute = {
  Name: string;
  Value?: string;
}

export type oldUser = {
  Username?: string;
  Attributes?: Attribute[];
  Enabled?: boolean;
  UserStatus?: UserStatus;
}

export type User = {
  sub?: string;
  email?: string;
  email_verified?: string;
  phone_number?: string;
  phone_number_verified?: string;
}

export type SignUpResponse = {
  UserConfirmed: boolean;
  UserSub: string;
}

export type ListUsersResponse = {
  Users?: oldUser[];
  PaginationToken?: string;
}

export type GetUserResponse = {
  Username: string;
  UserAttributes?: Attribute;
  Enabled?: boolean;
  UserStatus?: UserStatus;
}

export type ErrorRequest = {
  message: string;
  code?: string;
  statusCode?: number;
}
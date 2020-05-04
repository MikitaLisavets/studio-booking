export type AppState = {
  error: Error | null;
  locale: string;
  counter: number;
}

export type UserStatus = 'UNCONFIRMED' | 'CONFIRMED' | 'ARCHIVED' | 'COMPROMISED' | 'UNKNOWN' | 'RESET_REQUIRED' | 'FORCE_CHANGE_PASSWORD' | string;

export type Attribute = {
  Name: string;
  Value?: string;
}

export type User = {
  Username?: string;
  Attributes?: Attribute[];
  Enabled?: boolean;
  UserStatus?: UserStatus;
}

export type Error = {
  code: string;
  message: string;
  statusCode: number;
}

export type SignUpResponse = {
  UserConfirmed: boolean;
  UserSub: string;
}

export type ListUsersResponse = {
  Users?: User[];
  PaginationToken?: string;
}

export type GetUserResponse = {
  Username: string;
  UserAttributes?: Attribute;
  Enabled?: boolean;
  UserStatus?: UserStatus;
}
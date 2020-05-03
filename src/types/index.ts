export type AppState = {
  locale: string;
  counter: number;
}

export type UserAttribute = {
  Name: string;
  Value: string;
}

export type User = {
  Attributes: Array<UserAttribute>;
  UserStatus: string;
}
export type AppState = {
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
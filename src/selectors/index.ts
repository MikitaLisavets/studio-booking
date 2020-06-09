import { AppState, User } from '../types/Types';

export const getLocale = (state: AppState): string => state.locale;
export const getUser = (state: AppState): User | null => state.user;
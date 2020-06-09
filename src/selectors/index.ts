import { AppState, User } from '../types/Types';

export const getLocale = (state: AppState): string => state.locale;
export const getCounter = (state: AppState): number => state.counter;
export const getUser = (state: AppState): User | null => state.user;
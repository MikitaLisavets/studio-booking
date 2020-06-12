import { AppState, User } from '../types/types';

export const getLocale = (state: AppState): string => state.locale;
export const getUser = (state: AppState): User | null => state.user;
export const getIsCodeConfirmRequired = (state: AppState): boolean => state.isCodeConfirmRequired;
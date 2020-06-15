import { AppState, User, ErrorRequest } from '../types/types';

export const getLocale = (state: AppState): string => state.locale;
export const getUser = (state: AppState): User | null => state.user;
export const getError = (state: AppState): ErrorRequest | null => state.error;
export const getIsCodeConfirmRequired = (state: AppState): boolean => state.isCodeConfirmRequired;
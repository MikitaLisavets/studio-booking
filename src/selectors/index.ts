import { AppState } from '../types/Types';

export const getLocale = (state: AppState): string => state.locale;
export const getCounter = (state: AppState): number => state.counter;
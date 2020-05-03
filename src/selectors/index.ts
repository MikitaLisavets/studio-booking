import { AppState } from '../types';

export const getLocale = (state: AppState): string => state.locale;
export const getCounter = (state: AppState): number => state.counter;
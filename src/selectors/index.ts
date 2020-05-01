import { AppState } from '../types';

export const getCounter = (state: AppState): number => state.counter;
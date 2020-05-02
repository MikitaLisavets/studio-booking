import { Action } from 'redux';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment(): Action<typeof INCREMENT_COUNTER> {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decrement(): Action<typeof DECREMENT_COUNTER> {
  return {
    type: DECREMENT_COUNTER,
  };
}
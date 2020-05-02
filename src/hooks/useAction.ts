import { useCallback } from 'react';
import { Action } from 'redux';
import { useDispatch } from 'react-redux';

export default function useAction(action: Action): () => Action {
  const dispatch = useDispatch();
  return useCallback(
    () => dispatch(action),
    [action, dispatch]
  );
}
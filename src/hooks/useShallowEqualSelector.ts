import { useSelector, shallowEqual } from 'react-redux';
import { AppState } from '../types/Types';

export default function useShallowEqualSelector<T>(selector: (state: AppState) => T): T {
  return useSelector<AppState, T>(selector, shallowEqual);
}
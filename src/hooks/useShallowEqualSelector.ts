import { useSelector, shallowEqual } from 'react-redux';
import { AppState } from '../types';

export default function useShallowEqualSelector(selector: (state: AppState) => unknown): unknown {
  return useSelector(selector, shallowEqual);
}
import translations from '../translations';
import useShallowEqualSelector from '../hooks/useShallowEqualSelector';
import { getLocale } from '../selectors';

export default function L(key: string): string {
  const locale = useShallowEqualSelector(getLocale);
  const translation = translations[locale] || translations.default;
  return translation[key] || '';
}
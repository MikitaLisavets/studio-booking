import ru from './ru.json';
import en from './en.json';

type Translation = {
  [key: string]: string;
}
type Translations = {
  [key: string]: Translation;
}

const translations: Translations = {
  en,
  ru,
  default: en
};

export default translations;
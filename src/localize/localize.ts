import * as en from './languages/en.json';
import * as en from './languages/nb.json';
// import * as de from './languages/de.json';

var languages = {
  en: en,
  nb: no,
  // de: de,
};

export function localize(string: string, search: string = '', replace: string = '') {
  const section = string.split('.')[0];
  const key = string.split('.')[1];

  const lang = (localStorage.getItem('selectedLanguage') || 'en').replace(/['"]+/g, '').replace('-', '_');

  var translated: string;

  try {
    translated = languages[lang][section][key];
  } catch (e) {
    translated = languages['en'][section][key];
  }

  if (translated === undefined) translated = languages['en'][section][key];

  if (search !== '' && replace !== '') {
    translated = translated.replace(search, replace);
  }
  return translated;
}

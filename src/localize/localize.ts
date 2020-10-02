import * as de from './languages/de.json';
import * as en from './languages/en.json';
import * as nb from './languages/nb.json';
import * as pl from './languages/pl.json';

const languages = {
  de: de,
  en: en,
  nb: nb,
  no: nb,
  pl: pl,
};

export function localize(string: string, search = '', replace = ''): string {
  const section = string.split('.')[0];
  const key = string.split('.')[1];

  const lang = (localStorage.getItem('selectedLanguage') || 'en').replace(/['"]+/g, '').replace('-', '_');

  let translated: string;

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

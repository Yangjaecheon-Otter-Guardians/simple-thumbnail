import { FONT_LIST } from 'constants/fonts';

export const convertFontNameToValue = (name: string): string => {
  for (const i of FONT_LIST) {
    if (i.name === name) {
      return i.value;
    }
  }
  return '';
};

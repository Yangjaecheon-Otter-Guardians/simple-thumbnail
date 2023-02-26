import { atom } from 'recoil';

export const testAtom = atom({
  key: 'testAtom',
  default: 1,
});

const previewImage = atom({
  key: 'previewImage',
  default: '',
});

const isImageBright = atom({
  key: 'isImageBright',
  default: false,
});

const isEditState = atom({
  key: 'isEditState',
  default: false,
});

export { previewImage, isImageBright, isEditState };

const INITIALRATIO = 1;
export const ratioAtom = atom({
  key: 'previewRatio',
  default: INITIALRATIO,
});

const INITIALFONT = 'AAA';
export const previewFont = atom({
  key: 'previewFont',
  default: INITIALFONT,
});

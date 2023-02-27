import { FONT_LIST } from 'constants/fonts';
import { atom } from 'recoil';
const previewImage = atom({
  key: 'previewImage',
  default: '',
});

const isImageBright = atom({
  key: 'isImageBright',
  default: false,
});

const INITIALRATIO = 4 / 3;

export const ratioAtom = atom({
  key: 'previewRatio',
  default: INITIALRATIO,
});

const previewColor = atom({
  key: 'previewColor',
  default: '',
});

const previewGradation = atom({
  key: 'previewGradation',
  default: '',
});

const colorUploaderTab = atom({
  key: 'colorUploaderTab',
  default: '1',
});

export const previewFont = atom({
  key: 'previewFont',
  default: FONT_LIST[0].value,
});

export { previewImage, isImageBright, previewColor, previewGradation, colorUploaderTab };

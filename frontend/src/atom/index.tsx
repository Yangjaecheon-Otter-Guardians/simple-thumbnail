import { singleColorArray } from 'components/ColorSingle';
import { FONT_LIST } from 'constants/fonts';
import { atom } from 'recoil';
const previewImage = atom({
  key: 'previewImage',
  default: '',
});

const isImageBright = atom({
  key: 'isImageBright',
  default: true,
});

const INITIALRATIO = 4 / 3;

export const ratioAtom = atom({
  key: 'previewRatio',
  default: INITIALRATIO,
});

const previewColor = atom({
  key: 'previewColor',
  default: { color: singleColorArray[0].hex, isPicker: false },
});

const previewGradation = atom({
  key: 'previewGradation',
  default: '',
});

// 1: 색상배경, 2: 랜덤 이미지, 3: 직접 업로드
const backgroundTab = atom({
  key: 'backgroundTab',
  default: '1',
});

// 1: 단색, 2: 그라데이션
const colorUploaderTab = atom({
  key: 'colorUploaderTab',
  default: '1',
});

export const previewFont = atom({
  key: 'previewFont',
  default: FONT_LIST[0].value,
});

export { previewImage, isImageBright, previewColor, previewGradation, colorUploaderTab, backgroundTab };

import { atom } from 'recoil';

export const testAtom = atom({
  key: 'testAtom',
  default: 1,
});

export const isEditState = atom({
  key: 'isEditState',
  default: false,
});

const INITIALRATIO = 1;
export const ratioAtom = atom({
  key: 'previewRatio',
  default: INITIALRATIO,
});

export const previewImage = atom({
  key: "previewImage",
  default: "",
});


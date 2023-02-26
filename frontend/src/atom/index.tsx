import { atom } from 'recoil';

const testAtom = atom({
  key: 'testAtom',
  default: 1,
});

const previewImage = atom({
  key: "previewImage",
  default: "",
});

export { testAtom, previewImage };

import { atom } from "recoil";

const testAtom = atom({
  key: "testAtom",
  default: 1,
});

const previewImage = atom({
  key: "previewImage",
  default: "",
});

const isImageBright = atom({
  key: "isImageBright",
  default: false,
});

const isEditState = atom({
  key: "isEditState",
  default: false,
});

export { testAtom, previewImage, isImageBright, isEditState };

import { atom } from "recoil";

const testAtom = atom({
  key: "testAtom",
  default: 1,
});

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export { testAtom };

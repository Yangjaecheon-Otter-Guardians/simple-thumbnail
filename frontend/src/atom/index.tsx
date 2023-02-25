import { atom } from "recoil";

const testAtom = atom({
  key: "testAtom",
  default: 1,
});

export { testAtom };

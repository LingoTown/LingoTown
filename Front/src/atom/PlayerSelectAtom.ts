import { atom } from "recoil";

export const PlayerSelectAtom = atom<number>({
  key: "playerSelectAtom",
  default: -1,
});

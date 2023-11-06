import { atom } from "recoil";
export const npcStateAtom = atom<number>({
  key: 'npcStateAtom',
  default: 0,
});
export const talkIdAtom = atom<number>({
  key: 'talkIdAtom',
  default: 0,
});


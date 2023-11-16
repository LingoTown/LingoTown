import { atom } from "recoil";
export const npcStateAtom = atom<number>({
  key: 'npcStateAtom',
  default: 0,
});
export const npcStateName = atom<string>({
  key: 'npcStateName',
  default: "npc",
});
export const talkIdAtom = atom<number>({
  key: 'talkIdAtom',
  default: 0,
});

export const detailVerAtom = atom<boolean>({
  key : 'detailVerAtom',
  default : false,
})


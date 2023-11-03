import { atom } from "recoil";

export const npcStateAtom = atom<number>({
  key: 'npcStateAtom',
  default: 0,
});

type TalkStateAtom = {
  onRec: boolean;
  offRec: boolean;
  reset: boolean;
};

export const talkStateAtom = atom<TalkStateAtom>({
  key: 'talkStateAtom',
  default: {
    onRec: false,
    offRec: false, 
    reset: false,
  }})
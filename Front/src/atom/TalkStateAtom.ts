import { atom } from "recoil";

type TalkStateAtom = {
  onRec: boolean;
  offRec: boolean;
  reset: boolean;
  finish: boolean;
};

export const talkStateAtom = atom<TalkStateAtom>({
  key: 'talkStateAtom',
  default: {
    onRec: false,
    offRec: false, 
    reset: false,
    finish: false,
  },
});
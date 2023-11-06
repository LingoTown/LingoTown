import { atom } from "recoil";

export const npcStateAtom = atom<number>({
  key: 'npcStateAtom',
  default: 0,
});

type TalkStateAtom = {
  onRec: boolean;
  offRec: boolean;
  reset: boolean;
  finish: boolean;
  selectTopic: boolean;
  talkId: number;
};

export const talkStateAtom = atom<TalkStateAtom>({
  key: 'talkStateAtom',
  default: {
    onRec: false,
    offRec: false, 
    reset: false,
    finish: false,
    selectTopic: false,
    talkId: 0
  },
});



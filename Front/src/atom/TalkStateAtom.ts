import { atom } from "recoil";

type TalkStateAtom = {
  onRec: boolean;
  offRec: boolean;
  reset: boolean;
  finish: boolean;
  selectTopic: boolean;
  isToast: boolean;
  talkId: number;
  gender: string;
};

export const talkStateAtom = atom<TalkStateAtom>({
  key: 'talkStateAtom',
  default: {
    onRec: false,
    offRec: false, 
    reset: false,
    finish: false,
    selectTopic: false,
    isToast: false,
    talkId: 0,
    gender: ""
  },
});



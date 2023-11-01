import { atom } from "recoil";
import { topic } from "../type/TalkType";

type TalkBalloonAtom = {
  sentence: string;
  audio: string;
  isShow: boolean;
  isMove: boolean;
  topicList: topic[];
};

export const talkBalloonAtom = atom<TalkBalloonAtom>({
  key: 'talkBalloonAtom',
  default: {
    sentence: "",
    audio:"", 
    isShow: false,
    isMove: true,
    topicList: []
  }
});
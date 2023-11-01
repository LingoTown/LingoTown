import { atom } from "recoil";
import { topic } from "../type/TalkType";

type TalkBalloonAtom = {
  sentence: string;
  audio: string;
  audioPlay: boolean;
  isShow: boolean;
  isMove: boolean;
  topicList: topic[];
};

export const talkBalloonAtom = atom<TalkBalloonAtom>({
  key: 'talkBalloonAtom',
  default: {
    sentence: "",
    audio: "", 
    audioPlay: false,
    isShow: false,
    isMove: true,
    topicList: []
  }
});
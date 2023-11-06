import { atom } from "recoil";
import { topic } from "../type/TalkType";

type TalkBalloonAtom = {
  sentence: string;
  prevSectence: string;
  audio: string;
  audioPlay: boolean;
  isShow: boolean;
  isMove: boolean;
  topicList: topic[];
  isLoading: boolean;
  isUser: boolean;
};

export const talkBalloonAtom = atom<TalkBalloonAtom>({
  key: 'talkBalloonAtom',
  default: {
    sentence: "",
    prevSectence:"",
    audio: "", 
    audioPlay: false,
    isShow: false,
    isMove: true,
    topicList: [],
    isLoading: false,
    isUser: true,
  }
});

export const initialTalkBalloon = {
  sentence: "",
  prevSectence: "",
  audio: "",
  audioPlay: false,
  isShow: false,
  isMove: true,
  topicList: [],
  isLoading: false,
  isUser: true,
};
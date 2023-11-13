import { atom } from "recoil";
import { topic } from "../type/TalkType";

type TalkBalloonAtom = {
  sentence: string;
  prevSectence: string;
  audio: string;
  translate: string;
  audioPlay: boolean;
  isShow: boolean;
  isMove: boolean;
  topicList: topic[];
  isLoading: boolean;
  isUser: boolean;
  isModal: boolean;
  npc: string;
};

export const talkBalloonAtom = atom<TalkBalloonAtom>({
  key: 'talkBalloonAtom',
  default: {
    sentence: "",
    prevSectence:"",
    audio: "", 
    translate:"",
    audioPlay: false,
    isShow: false,
    isMove: true,
    topicList: [],
    isLoading: false,
    isUser: true,
    isModal: false,
    npc: "",
  }
});

export const initialTalkBalloon = {
  sentence: "",
  prevSectence: "",
  audio: "",
  translate:"",
  audioPlay: false,
  isShow: false,
  isMove: true,
  topicList: [],
  isLoading: false,
  isUser: true,
  isModal: false,
  npc: "",
};
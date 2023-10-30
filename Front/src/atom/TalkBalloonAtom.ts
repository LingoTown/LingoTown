import { atom } from "recoil";

type TalkBalloonAtom = {
  sentence: string;
  isShow: boolean;
  isMove: boolean;
};

export const talkBalloonAtom = atom<TalkBalloonAtom>({
  key: 'talkBalloonAtom',
  default: {
    // sentence: "The sun painted the horizon with shades of pink and orange, casting a warm glow across the serene beach as waves gently lapped the shore. The sun painted the horizon with shades of pink and orange, casting a warm glow across the serene beach as waves gently lapped the shore. warm glow across the serene beach as waves gently lapped the shore.",
    sentence: "", 
    isShow: false,
    isMove: true
  }
});
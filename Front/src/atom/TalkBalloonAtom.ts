import { atom } from "recoil";

type TalkBalloonAtom = {
  img: string;
  sentence: string;
  isShow: boolean;
};

export const talkBalloonAtom = atom<TalkBalloonAtom>({
  key: 'talkBalloonAtom',
  default: {
    img: "https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/rabbit1.PNG",
    // sentence: "The sun painted the horizon with shades of pink and orange, casting a warm glow across the serene beach as waves gently lapped the shore. The sun painted the horizon with shades of pink and orange, casting a warm glow across the serene beach as waves gently lapped the shore. warm glow across the serene beach as waves gently lapped the shore.",
    sentence: "", 
    isShow: false,
  },
});
import { atom } from "recoil";

type talkHistory = {
  talk: string;
  isUser: boolean;
}

export const talkHistoryAtom = atom<talkHistory[]>({
  key:'talkHistoryStateAtom',
  default:
  [
    { talk:"Hello What's your name?", isUser: true},
    { talk:"Hi there! I'm Olivia, the chef at Lingo Mongo restaurant. How can I assist you today?", isUser: false},
    { talk:"What's your favorite food?", isUser: true},
  ]
})

export const initialTalkHistoryState = []
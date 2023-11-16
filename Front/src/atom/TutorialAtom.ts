import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';
import { tutorialType } from "../type/TutorialType";

const { persistAtom } = recoilPersist({
  key: 'tutorialAtom',
  storage: localStorage,
});

export const tutorialAtom = atom<tutorialType>({
  key: "tutorialAtom",
  default: {
    visit: false //한 번도 안읽었다.
  },
  effects_UNSTABLE: [persistAtom],
});

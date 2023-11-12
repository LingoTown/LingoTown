import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { npcListType } from "../type/IntimacyType";

const { persistAtom } = recoilPersist({
  key: "intimacyAtom",
  storage: localStorage
});

export const intimacyAtom = atom<npcListType>({
  key: "intimacyAtom",
  default: {
    npcList: []
  },
  effects_UNSTABLE: [persistAtom]
});

export const initialIntimacy = {
  npcList: []
};

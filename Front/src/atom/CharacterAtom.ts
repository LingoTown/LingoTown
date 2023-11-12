import { atom } from "recoil";
import { CharacterList } from "../type/CharacterType";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: 'characterAtom',
    storage: localStorage,
  });

export const characterAtom = atom<CharacterList>({
  key: "characterAtom",
  default: {
    characterList: []
  },
  effects_UNSTABLE: [persistAtom],
});

export const initialCharacter = {
    characterList: []
};

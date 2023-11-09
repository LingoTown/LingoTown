import { atom } from "recoil";

// 캐릭터를 선택하기 이전 미리보기 기능
export const PlayerSelectAtom = atom<number>({
  key: "playerSelectAtom",
  default: 0,
});
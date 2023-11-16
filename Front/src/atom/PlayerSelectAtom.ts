import { atom } from "recoil";

interface PlayerSelectType{
  index : number,
  change : boolean,
}

// 캐릭터를 선택하기 이전 미리보기 기능
export const PlayerSelectAtom = atom<PlayerSelectType>({
  key: "playerSelectAtom",
  default: {
    index : 0,
    change : false,
  },
});
import { atom } from "recoil";

//내가 선택했던 캐릭터 불러오기 (id 기준이 아닌 배열 index 기준으로 가져옴)
const prevPlayer = localStorage.getItem('userAtom') != null ? JSON.parse(localStorage.getItem('userAtom')!).userAtom.characterId-1:0;
export const PlayerSelectAtom = atom<number>({
  key: "playerSelectAtom",
  default: prevPlayer,
});

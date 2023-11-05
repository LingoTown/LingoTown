import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';
import { userType } from "../type/UserType";

const { persistAtom } = recoilPersist({
  key: 'userAtom',
  storage: localStorage,
});

export const userAtom = atom<userType>({
  key: "userAtom",
  default: {
    email : "",
    gender: "",
    social: "",
    nickname : "",
    accessToken : "",
    refreshToken: "",
    profileImg : ""
  },
  effects_UNSTABLE: [persistAtom],
});

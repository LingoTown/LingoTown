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
    email : "temp@temp.temp",
    gender: "temp",
    social: "temp",
    nickname : "USER",
    accessToken : "temp",
    refreshToken: "temp",
    profileImg : "https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/female+7.png"
  },
  effects_UNSTABLE: [persistAtom],
});

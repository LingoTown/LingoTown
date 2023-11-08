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
    profileImg : "",
    characterId : 1,
    characterGender: "MALE",
    characterLink: import.meta.env.VITE_S3_URL + "Player/m_1.glb",
    lockList: []
  },
  effects_UNSTABLE: [persistAtom],
});

export const initialUser = {
  email : "",
  gender: "",
  social: "",
  nickname : "",
  accessToken : "",
  refreshToken: "",
  profileImg : "",
  characterId : 1,
  characterGender: "MALE",
  characterLink: import.meta.env.VITE_S3_URL + "Player/m_1.glb",
  lockList: []
};

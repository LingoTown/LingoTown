import { HttpJson } from "./common/Http";
import ReturnType from "../type/ReturnType";


const googleLogin = async (param: object, success: (data : {data : ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.post(`/api/login/google`, JSON.stringify(param)).then(success).catch(fail);
}

const kakaoLogin = async (param: object, success: (data : {data : ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.post(`/api/login/kakao`, JSON.stringify(param)).then(success).catch(fail);
}

const getUserInfo = async (success: (data : {data : ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.get(`/api/member`).then(success).catch(fail);
}

// 탈퇴

// 닉네임수정

// 프로필 이미지 수정

export { googleLogin, kakaoLogin, getUserInfo };
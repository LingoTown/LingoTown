import { HttpJson } from "./Http";
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

export { googleLogin, kakaoLogin, getUserInfo };
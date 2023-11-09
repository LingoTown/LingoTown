import { HttpJson } from "./common/Http";
import { ReturnType, 
  // CommonResponseType 
} from "../type/ReturnType";
import { UpdateSelectedCharacter, 
  // lockOff 
} from "../type/UserType";


const googleLogin = async (param: object, success: (data : {data : ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.post(`/api/login/google`, JSON.stringify(param)).then(success).catch(fail);
}

const kakaoLogin = async (param: object, success: (data : {data : ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.post(`/api/login/kakao`, JSON.stringify(param)).then(success).catch(fail);
}

const getUserInfo = async (success: (data : {data : ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.get(`/api/member`).then(success).catch(fail);
}

// 캐릭터 잠금 정보 받아오기 : 캐릭터 선택 페이지에서 useEffect로 최초 호출 후 userAtom에 적용할 것
const getCharacterLockInfo = async (success: (data : {data : ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.get(`/api/member/character`).then(success).catch(fail);
}

// 대표 캐릭터 수정
const updateCharacter = async (payload: UpdateSelectedCharacter, success: ( data : { data : ReturnType }) => void, fail: (error: unknown) => void) => {
  await HttpJson.put(`/api/member/select/character`, payload).then(success).catch(fail)
}

// 캐릭터 잠금 해제
// const lockOffCharacter = async (payload: lockOff, success: ( data : { data : CommonResponseType }) => void, fail: (error: unknown) => void) => {
//   await HttpJson.put(`/api/member/lock/off`, payload).then(success).catch(fail)
// }

// 탈퇴

// 닉네임수정

// 프로필 이미지 수정

export { googleLogin, kakaoLogin, getUserInfo, getCharacterLockInfo, updateCharacter };
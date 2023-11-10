import { HttpJson } from "./common/Http";
import { ReturnType } from "../type/ReturnType";


/* 월드 별 퀴즈 정보 가져오기 */
const getQuizListByWorld = async (worldId: string | null, success: ({data} : {data: ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.get(`/api/member/quiz/${worldId}`).then(success).catch(fail);
}

/* 전체 퀴즈 정보 가져오기 */
// const getAllQuizList = async (success: ({data} : {data: ReturnType}) => void, fail: (error: unknown) => void) => {
//   await HttpJson.get(`/api/member/quiz`).then(success).catch(fail);
// }

const submitQuiz = async (param: object, success: (data : {data : ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.post(`/api/talk/quiz`, JSON.stringify(param)).then(success).catch(fail);
}

export { getQuizListByWorld, submitQuiz };
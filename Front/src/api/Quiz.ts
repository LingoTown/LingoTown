import { HttpJson } from "./common/Http";
import ReturnType from "../type/ReturnType";

const getQuizList = async (worldId: string | null, success: ({data} : {data: ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.get(`/api/member/quiz/${worldId}`).then(success).catch(fail);
}

const submitQuiz = async (param: object, success: (data : {data : ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.post(`/api/talk/quiz`, JSON.stringify(param)).then(success).catch(fail);
}

export { getQuizList, submitQuiz };
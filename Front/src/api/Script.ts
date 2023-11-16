import { HttpJson } from "./common/Http";
import { ReturnType } from "../type/ReturnType";

const getTalkList = async (talkId: number, success: ({data} : {data: ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.get(`/api/talk/${talkId}`).then(success).catch(fail);
}

const getTalkDetailScore = async (talkDetailId: number, success: ({data} : {data: ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.get(`/api/talk/detail/score/${talkDetailId}`).then(success).catch(fail);
}

export { getTalkList, getTalkDetailScore }
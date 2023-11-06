import { HttpJson } from "./common/Http";
import ReturnType from "../type/ReturnType";


const getWorldList = async (studyInfoId: string, success: ({data} : {data: ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.get(`/chat/${studyInfoId}`).then(success).catch(fail);
}


export { getWorldList };
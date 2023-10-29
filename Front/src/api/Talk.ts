import { HttpJson, HttpForm } from "./Http";
import ReturnType from "../type/ReturnType";

const startTalk = async (npcId: number, success: (data : {data : ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.post(`/api/talk/start/` + npcId).then(success).catch(fail);
}

const talking = async (param: FormData, success: (data : {data : ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpForm.post(`/api/talk`, param).then(success).catch(fail);
}

export { startTalk, talking };
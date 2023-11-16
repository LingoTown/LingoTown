import { HttpJson, HttpForm } from "./common/Http";
import { ReturnType } from "../type/ReturnType";

const callMyList = async (success: ({data} : {data: ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.get(`/api/talk/list`).then(success).catch(fail);
}

const deleteAccount = async (success: ({data} : {data: ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.delete(`/api/member/leave`).then(success).catch(fail);
}

const saveNickname = async (param: object, success: (data : {data : ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.put(`/api/member/nickname`, JSON.stringify(param)).then(success).catch(fail);
}

const updateProfile = async (param: FormData, success: (data : {data : ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpForm.put(`/api/member/profile`, param).then(success).catch(fail);
}

const getInfo = async (success: ({data} : {data: ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.get(`/api/member`).then(success).catch(fail);
}

const getTalkList = async (npcId: number, success: ({data} : {data: ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.get(`/api/talk/list/${npcId}`).then(success).catch(fail);
}

const deleteTalk = async (talkId: number, success: ({data} : {data: ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.delete(`/api/talk/${talkId}`).then(success).catch(fail);
}

export { callMyList, deleteAccount, saveNickname, updateProfile, getInfo, getTalkList, deleteTalk }
import { HttpJson, HttpForm } from "./common/Http";
import { ReturnType } from "../type/ReturnType";
import { talkingTopicType } from "../type/TalkType";

const startTalk = async (npcId: number, success: (data : {data : ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.post(`/api/talk/start/` + npcId).then(success).catch(fail);
}

const talking = async (param: FormData, success: (data : {data : ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpForm.post(`/api/talk`, param).then(success).catch(fail);
}

const talkingTopic = async (param:talkingTopicType,  success: (data : {data : ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.post(`/api/talk/topic`, param).then(success).catch(fail);
}

const translateSentence = async (param: object, success: (data : {data : ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.post(`/api/papago`, JSON.stringify(param)).then(success).catch(fail);
}

export { startTalk, talking, talkingTopic, translateSentence };
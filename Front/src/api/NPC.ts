import { HttpJson } from "./common/Http";
import { ReturnType } from "../type/ReturnType";


const getTalkNPCList = async (memberNPCId: string, success: ({data} : {data: ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.get(`/api/talk/list/${memberNPCId}`).then(success).catch(fail);
}

const getNPCListByTheme = async (worldId: string, success: ({data} : {data: ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.get(`/api/world/${worldId}`).then(success).catch(fail);
}

const getTopicListByNPC = async (worldId: string, success: ({data} : {data: ReturnType}) => void, fail: (error: unknown) => void) => {
  await HttpJson.get(`/api/world/${worldId}`).then(success).catch(fail);
}

export { getTalkNPCList, getNPCListByTheme, getTopicListByNPC };
import { HttpJson } from "./Http";
// import ReturnType from "../type/ReturnType";


const tempTalk = async (param: object, success: (data : {data : any}) => void, fail: (error: unknown) => void) => {
  await HttpJson.post(`/api/openai`, JSON.stringify(param)).then(success).catch(fail);
}


export { tempTalk };
import { atom } from "recoil";
import { talkDetailType } from "../type/TalkType";


export const talkHistoryAtom = atom<talkDetailType[]>({
  key:'talkHistoryStateAtom',
  default:
  [
    // {
    //   "talkDetailId": 689,
    //   "content": "hello what's your name",
    //   "talkFile": "https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Record/18bbfd45-a1f0-4e0f-ad0e-865a971d18a5_soundBlob",
    //   "createdAt": "2023-11-12T01:49:17",
    //   "member": true
    // }
    // ,
    // {
    //   "talkDetailId": 690,
    //   "content": "Hi there! My name is Isabel. How can I help you today?",
    //   "talkFile": "https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Record/31772225-7bb2-4c10-adf5-5578984edc16_output.mp3",
    //   "createdAt": "2023-11-12T01:49:18",
    //   "member": false
    // }
    // ,
    // {
    //   "talkDetailId": 691,
    //   "content": "what's your favorite musical instrument",
    //   "talkFile": "https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Record/7fb8d668-6dc6-4264-8caa-7b021732b728_soundBlob",
    //   "createdAt": "2023-11-12T01:49:35",
    //   "member": true
    // },
  ]
})

export const initialTalkHistoryState = []
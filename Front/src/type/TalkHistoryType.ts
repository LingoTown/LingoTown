import { grammarCheckType } from "./TalkListType";
import { talkDetailType } from "./TalkType";

export type TalkHistoryType = {
  createAt: string,
  talkDetailList: talkDetailType,
  pronunciationScoreList: grammarCheckType
}
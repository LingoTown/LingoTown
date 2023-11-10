export type talkListType = {
    talkId: number,
    talkDate: string
  }

export type grammarCheckType = {
  fluencyScore : number,
  integrityScore : number,
  overallScore : number,
  pronunciationScore : number,
  rhythmScore : number,
  wordScoreList : wordScoreListType[]
}

type wordScoreListType = {
  word : string,
  score : number
}
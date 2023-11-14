export type talkListType = {
    talkId: number,
    talkDate: string
  }

export type grammarCheckType = {
  fluencyScore : number | null,
  integrityScore : number | null,
  overallScore : number | null,
  pronunciationScore : number | null,
  rhythmScore : number | null,
  wordScoreList : wordScoreListType[]
}

type wordScoreListType = {
  word : string,
  score : number
}
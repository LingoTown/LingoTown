export type topic = {
  topicId: number,
  keyword: string
}

export type startTalkType = {
  talkId: number,
  npcId: number,
  topicList: topic[]
}

export type talkingType = {
  responseMessage: string,
  responseS3URL: string
}

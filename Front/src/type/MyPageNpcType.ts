//마이페이지에서 호출하는 대화 내역 npc 조회용 타입
export type myPageNPCType = {
    npcName : string,
    memberNPCId: number;
    talkCount: number;
    intimacy: number;
    npcId: number;
    language : string,
    theme : string,
    npcImage: string;
    lastVisited : string,
  }
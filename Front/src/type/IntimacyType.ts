export type intimacyType = {
  memberId: number;
  npcId: number;
  intimacy: number;
};
export type npcListType = {
  npcList: {
    memberId: number;
    npcId: number;
    intimacy: number;
  }[];
};

export type UseCharacterUnlockCheckProps = {
  intimacy: IntimacyType;
  user: UserType;
  setUser: (user: UserType) => void;
  characterLockOff: (characterId: number) => void;
};

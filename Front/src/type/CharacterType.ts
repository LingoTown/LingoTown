/* 유저 대표 캐릭터 수정 요청 타입 */
export type CharacterResponseType = {
  characterId: number;
  characterGender: string;
  characterLink: string;
  characterImage: string;
};

/* 캐릭터 잠금 정보 */
export type CharacterLockInfo = {
  characterId: number;
  islocked: boolean;
};

export type CharacterList = {
  characterList: {
    characterId: number;
    characterGender: string;
    characterLink: string;
    characterImage: string;
  }[];
};

export type LockOff = {
  characterId: number;
};

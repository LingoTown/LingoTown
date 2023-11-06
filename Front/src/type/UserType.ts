// 유저 정보 받아오는 타입
export type userType = {
  email: string,
  gender: string,
  social: string,
  nickname: string,
  profileImg: string,
  accessToken: string | null,
  refreshToken: string | null,
  characterId: number,
  characterGender: string,
  characterLink: string
}
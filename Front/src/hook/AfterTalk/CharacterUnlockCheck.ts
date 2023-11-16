import { useEffect } from "react";
import { npcListType } from "../../type/IntimacyType";
import { userType } from "../../type/UserType";
import { useCustomAlert } from "../../component/util/ModalUtil";

interface UseCharacterUnlockCheckProps {
  intimacy: npcListType;
  user: userType;
  setUser: (user: userType) => void;
  characterLockOff: (characterId: number) => void;
}

export const useCharacterUnlockCheck = ({
  intimacy,
  user,
  setUser,
  characterLockOff
}: UseCharacterUnlockCheckProps) => {
  const customAlert = useCustomAlert();

  useEffect(
    () => {
      if (
        intimacy.npcList.some(npc => npc.intimacy > 0) &&
        user.lockList[4].islocked
      ) {
        setUser({
          ...user,
          lockList: user.lockList.map(
            (item, index) => (index === 4 ? { ...item, islocked: false } : item)
          )
        });
        characterLockOff(5);
        customAlert("Alert", "NPC와 대화를 최초 완료하셨습니다! 5번 캐릭터가 잠금 해제 됩니다!");
      }

      if (
        intimacy.npcList.every(npc => npc.intimacy > 0) &&
        user.lockList[8].islocked
      ) {
        setUser({
          ...user,
          lockList: user.lockList.map(
            (item, index) => (index === 8 ? { ...item, islocked: false } : item)
          )
        });
        characterLockOff(9);
        customAlert("Alert", "모든 NPC와 대화를 완료하셨습니다! 9번 캐릭터가 잠금 해제 됩니다!");
      }

      if (
        intimacy.npcList.some(npc => npc.intimacy === 100) &&
        user.lockList[7].islocked
      ) {
        setUser({
          ...user,
          lockList: user.lockList.map(
            (item, index) => (index === 7 ? { ...item, islocked: false } : item)
          )
        });
        characterLockOff(8);
        customAlert("Alert", "특정 NPC와 최대 친밀도를 달성했습니다! 8번 캐릭터가 잠금 해제 됩니다!");
      }
    },
    [intimacy, user, setUser, characterLockOff]
  );
};

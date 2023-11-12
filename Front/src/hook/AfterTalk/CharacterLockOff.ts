import { useRecoilState } from "recoil";
import { userAtom } from "../../atom/UserAtom";
import { lockOffCharacter } from "../../api/Character";

const useCharacterUnlock = () => {
  const [user] = useRecoilState(userAtom);

  const characterLockOff = async (id: number) => {
    const quizId = id;

    await lockOffCharacter(
      quizId,
      ({ data }) => {
        console.log(data.message);
      },
      error => {
        console.log(error);
      }
    );
  };

  return { user, characterLockOff };
};

export default useCharacterUnlock;

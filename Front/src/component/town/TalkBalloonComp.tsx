import { talkBalloonAtom } from "../../atom/TalkBalloonAtom"
import { useRecoilValue } from "recoil"

export const TalkBalloonComp = () => {

  const talkBalloon = useRecoilValue(talkBalloonAtom);

  return(
    <>
      <div className="absolute bottom-4 left-4 right-4 min-h-[147px] bg-white bg-opacity-75 p-4 border border-gray-500 shadow-lg rounded-lg">
        <div className="flex items-center justify-center">
          <img src={talkBalloon.profileImg} className="w-[110px] h-[110px] rounded-full" alt="rabbit" />
          <p className="w-4/5 ml-4 text-xl font-extrabold text-gray-600 p-2 break-words">{talkBalloon.sentence}</p>
        </div>
      </div>
    </>
  )

}
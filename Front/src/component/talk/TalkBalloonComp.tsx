import { talkBalloonAtom } from "../../atom/TalkBalloonAtom"
import { talkStateAtom } from "../../atom/TalkStateAtom";
import { useRecoilValue, useSetRecoilState } from "recoil"

export const TalkBalloonComp = () => {

  const talkBalloon = useRecoilValue(talkBalloonAtom);
  const setTalkState = useSetRecoilState(talkStateAtom);
  const handleOnRec = () => { setTalkState(prevState => ({ ...prevState, onRec: !prevState.onRec })) }
  const handleOffRec = () => { setTalkState(prevState => ({ ...prevState, offRec: !prevState.offRec })) }
  const handleReset = () => { setTalkState(prevState => ({ ...prevState, reset: !prevState.reset })) }

  return(
    <>
      <div className="absolute bottom-4 left-4 right-4 min-h-[147px] bg-white bg-opacity-75 p-4 border border-gray-500 shadow-lg rounded-lg">
        <div className="flex items-center justify-center">
          <img src={talkBalloon.img} className="w-[110px] h-[110px] rounded-full" alt="img" />
          <p className="w-4/5 ml-4 text-xl font-extrabold text-gray-600 p-2 break-words">{talkBalloon.sentence}</p>
        </div>
        <div className="absolute top-0 right-0 z-10 flex flex-col space-y-2 mr-1 mt-1">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          onClick={ handleOnRec }
        > 녹음
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          onClick={ handleOffRec }
        > 전송
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
          onClick={ handleReset }
        > 리셋
        </button>
      </div>
      </div>
    </>
  )

}
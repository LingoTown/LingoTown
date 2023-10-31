import { useState } from "react";
import { talkBalloonAtom } from "../../atom/TalkBalloonAtom"
import { talkStateAtom } from "../../atom/TalkStateAtom";
import { useSetRecoilState, useRecoilState } from "recoil"

export const TalkBalloonComp = () => {

  const [talkBalloon, setTalkBalloon] = useRecoilState(talkBalloonAtom);
  const [toggle, setToggle] = useState<boolean>(true);
  const setTalkState = useSetRecoilState(talkStateAtom);

  const handleOnRec = () => {
    setTalkState(prevState => ({ ...prevState, onRec: !prevState.onRec }));
    setToggle(!toggle);
  };

  const handleOffRec = () => {
    setTalkState(prevState => ({ ...prevState, offRec: !prevState.offRec }));
    setToggle(!toggle);
  };

  const handleReset = () => { 
    setTalkState(prevState => ({ ...prevState, reset: !prevState.reset }));
    setToggle(!toggle);
  };

  const handleEnd = () => {
    handleReset();
    setToggle(!toggle);
    setTalkBalloon(prevState => ({...prevState, isShow: false}));
  };

  return(
    <>
      <div className="absolute bottom-4 left-4 right-4 min-h-[147px] bg-white bg-opacity-75 p-4 border border-gray-500 shadow-lg rounded-lg">
        <div className="flex items-center justify-center">
          <p className="w-4/5 ml-4 text-xl font-extrabold text-gray-600 p-2 break-words">{talkBalloon.sentence}</p>
        </div>
        <div className="absolute top-0 right-0 z-10 flex flex-col space-y-2 mr-1">
        <div className="flex flex-col flex-wrap justify-center">
          {
            toggle?
            <button className="px-4 py-2 m-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              onClick={ handleOnRec }
            >녹음</button>
            :
            <button className="px-4 py-2 m-1 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
              onClick={ handleOffRec }
            >전송</button>
          }
          <button className="px-4 py-2 m-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
            onClick={ handleReset }
          >리셋</button>
          <button className="px-4 py-2 m-1 bg-pink-500 text-white rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50"
            onClick={ handleEnd }
          >종료</button>
        </div>
      </div>
      </div>
    </>
  )
}
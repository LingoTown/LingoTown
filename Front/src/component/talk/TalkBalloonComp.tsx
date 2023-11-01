import { useState, useRef } from "react";
import { talkBalloonAtom } from "../../atom/TalkBalloonAtom"
import { talkStateAtom } from "../../atom/TalkStateAtom";
import { useSetRecoilState, useRecoilState } from "recoil"

export const TalkBalloonComp = () => {

  const [talkBalloon, setTalkBalloon] = useRecoilState(talkBalloonAtom);
  const [isRec, setIsRec] = useState<boolean>(false);
  const setTalkState = useSetRecoilState(talkStateAtom);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOnRec = () => {
    setTalkState(prevState => ({ ...prevState, onRec: !prevState.onRec }));
    setIsRec(true);
  };

  const handleOffRec = () => {

    if (talkBalloon.sentence.length < 10) {

    }

    setTalkState(prevState => ({ ...prevState, offRec: !prevState.offRec }));
    setIsRec(false);
  
  
  };

  const handleReset = () => { 
    setTalkState(prevState => ({ ...prevState, reset: !prevState.reset }));
  };

  const handleEnd = () => {
    handleReset();
    setIsRec(!isRec);
    setTalkBalloon(prevState => ({...prevState, isShow: false}));
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return(
    <>
      <div className="absolute bottom-4 left-4 right-4 min-h-[190px] bg-white bg-opacity-75 p-4 border border-gray-500 shadow-lg rounded-lg">
        <p className="absolute top-[23px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-green-700 font-['passero-one']">
          Press the "Start Talk!!" button to start the conversation.
          </p>
        <hr className="mt-7 bg-gray-500 h-px border-none"></hr>
        <div className="flex items-center justify-center">
          <p className="w-4/5 mt-1 ml-4 text-xl font-extrabold text-gray-600 p-2 break-words">{talkBalloon.sentence}</p>
        </div>
        <div className="absolute top-0 right-0 z-10 flex space-x-2 mr-2 mt-2">
        {
          talkBalloon.audio == "" ?
          null
          :
          <div className="flex">
            <button className="px-2 py-0 bg-purple-500 text-xl text-white rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-['passero-one']"
              onClick={ handlePlay }
            >Listening</button>
            <audio ref={ audioRef } src={ talkBalloon.audio }/>
          </div>
        }
        {
          isRec ?
          <>
            <button className="px-2 py-0 text-xl bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 font-['passero-one']"
              onClick={ handleOffRec }
            >Send</button>
            <button className="px-2 py-0 text-xl bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 font-['passero-one']"
              onClick={ handleReset }
            >Retry</button>
          </>
          :
          <button className="px-2 py-0 text-xl bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 font-['passero-one']"
            onClick={ handleOnRec }
          >Start Talk !!</button>
        }
        <button className="px-2 py-0 text-xl bg-pink-500 text-white rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-['passero-one']"
          onClick={ handleEnd }
        >End</button>
        </div>
      </div>
    </>
  )
}
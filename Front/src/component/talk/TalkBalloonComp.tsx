import { useState, useRef, useEffect } from "react";
import { talkBalloonAtom } from "../../atom/TalkBalloonAtom"
import { talkStateAtom } from "../../atom/TalkStateAtom";
import { useSetRecoilState, useRecoilState } from "recoil"
import { useCustomAlert, useCustomConfirm } from "../util/ModalUtil";

export const TalkBalloonComp = () => {

  const [talkBalloon, setTalkBalloon] = useRecoilState(talkBalloonAtom);
  const [isRec, setIsRec] = useState<boolean>(false);
  const setTalkState = useSetRecoilState(talkStateAtom);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const customAlert = useCustomAlert();
  const customConfirm = useCustomConfirm();
  const isMounted = useRef({ audioPlay: false });
  const [showList, setShowList] = useState<boolean>(false);
  const [showBeforeSentence, setShowBeforeSentence] = useState<boolean>(false);

  const handleOnRec = () => {
    setTalkState(prevState => ({ ...prevState, onRec: !prevState.onRec }));
    setIsRec(true);
  };

  const handleOffRec = () => {
    if (talkBalloon.sentence.length < 10) {
      customAlert("Alert", "Please say at least 10 characters");
      return
    }
    setTalkState(prevState => ({ ...prevState, offRec: !prevState.offRec }));
    setIsRec(false);
  };

  const handleReset = () => {
    setTalkState(prevState => ({ ...prevState, reset: !prevState.reset }));
  };

  const handleEnd = async() => {
    setIsRec(false);
    setTalkBalloon(prevState => ({ ...prevState, isShow: false }));
  };

  const handlePlay = () => {
    console.log("play")
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const selectTopic = async(topic:string) => {
    const flag = await customConfirm("Topic", topic);
    if (flag) {
      console.log("토픽 선택")
    } else {
      console.log("토픽 안선택")
    }
  }

  useEffect(() => {
    console.log("effect")
    if (isMounted.current.audioPlay) {
      handlePlay();
    } else {
      isMounted.current.audioPlay = true;
    }
  }, [talkBalloon.audioPlay])



  return(
    <>
      <button className="absolute top-0 right-0 z-10 flex flex-col space-y-2 mr-1.5 mt-2 px-4 py-2 bg-gray-600 text-white text-lg rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 font-['passero-one']"
        onClick={() => { setShowList(!showList) }}
      >Topics</button>
      {
        showList?
        <>
          <div className="absolute top-16 right-2 w-[330px]">
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="mb-2 p-2 bg-white rounded-lg shadow-inner font-bolder font-['passero-one'] text-xl cursor-pointer hover:bg-gray-200" onClick={() => {
                selectTopic("Favorite food");
              }}>soccer tournament</div>
              <div className="mb-2 p-2 bg-white rounded-lg shadow-inner font-bolder font-['passero-one'] text-xl cursor-pointer hover:bg-gray-200" onClick={() => {
                selectTopic("Where to buy furniture");
              }}>Where to buy furniture</div>
            </div>
          </div>
        </>
        :
        null
      }
      <div className="absolute top-32 right-2 w-[330px] bg-gray-100">asdasd</div>
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
            >Listen Again</button>
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
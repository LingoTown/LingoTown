import { useState, useRef, useEffect } from "react";
import { talkBalloonAtom, initialTalkBalloon } from "../../atom/TalkBalloonAtom"
import { talkStateAtom } from "../../atom/TalkStateAtom";
import { useRecoilState } from "recoil"
import { useCustomAlert, useCustomConfirm } from "../util/ModalUtil";
import { topic } from "../../type/TalkType";
import { talkingTopic } from "../../api/Talk";
import { talkingType } from "../../type/TalkType";

export const TalkBalloonComp = () => {

  const [talkBalloon, setTalkBalloon] = useRecoilState(talkBalloonAtom);
  const [isRec, setIsRec] = useState<boolean>(false);
  const [talkState, setTalkState] = useRecoilState(talkStateAtom);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const customAlert = useCustomAlert();
  const customConfirm = useCustomConfirm();
  const isMounted = useRef({ audioPlay: false });
  const [showList, setShowList] = useState<boolean>(false);
  const [showSentenceModal, setShowSentenceModal] = useState<boolean>(false);

  const handleOnRec = () => {
    setTalkState(prevState => ({ ...prevState, onRec: !prevState.onRec }));
    setTalkBalloon(prev => ({
      ...prev,
      isUser: true,
      sentence: "",
    }));
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
    setTalkBalloon(initialTalkBalloon);
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const selectTopic = async(topic:topic) => {
    const flag = await customConfirm("Topic", topic.keyword);
    if (flag) {
      setIsRec(false);
      doTalking(topic);
    }
  }

  const doTalking = async(topic: topic) => {
    const param = { talkId: talkState.talkId, topic: topic.keyword }
    setShowList(false);
    setTalkBalloon(prev => ({ ...prev, isLoading:true }));
    setTalkState(prev => ({ ...prev, selectTopic: !prev.selectTopic }));
    await talkingTopic(param, ({data}) => {
      const result = data.data as talkingType;
      setTalkBalloon(prev => ({
        ...prev,
        sentence: result.responseMessage,
        prevSectence: result.responseMessage,
        audio: result.responseS3URL,
        isLoading: false,
        isUser: false,
      }));
    }, (error) => {
      console.log(error);
    })
    setTalkBalloon(prev => ({...prev, audioPlay: !talkBalloon.audioPlay }))
  }

  useEffect(() => {
    if (isMounted.current.audioPlay) {
      handlePlay();
    } else {
      isMounted.current.audioPlay = true;
    }
  }, [talkBalloon.audioPlay])

  return(
    <>
      {
        !talkBalloon.prevSectence?
        <button className="absolute top-0 right-0 z-10 flex flex-col space-y-2 mr-2 mt-2 px-4 py-2 bg-gray-600 text-white text-lg rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 font-['passero-one']"
        style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
          onClick={() => { setShowList(!showList) }}
        >Topics</button>
        :
        null
      }
      {
        showList?
        <>
          <div className="absolute top-16 right-2 w-[330px]">
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              {
                talkBalloon.topicList.map((value, index) => {
                 return(
                  <div key={index} className="mb-2 p-2 bg-white rounded-lg shadow-inner font-bolder font-['passero-one'] text-xl hover:bg-gray-200" 
                  style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
                    onClick={() => { selectTopic(value) }}
                  >{value.keyword}</div>
                 ) 
                })
              }
            </div>
          </div>
        </>
        :
        null
      }
      {
        showSentenceModal?
        <div className="absolute top-52 right-2 w-[330px] h-[35vh] bg-gray-100 rounded-lg px-4 py-2">
          <div className="justify-center text-2xl font-bold font-['passero-one']">
            Previous conversation
          </div>
          <hr className="border-black"/>
          <div className="font-['passero-one'] mt-2">
            { talkBalloon.prevSectence }
          </div>
        </div>
        :
        null
      }
      <div className="absolute bottom-4 left-2 right-2 min-h-[190px] bg-white bg-opacity-75 p-4 border border-gray-500 shadow-lg rounded-lg">
        <p className="absolute top-[23px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-green-700 font-['passero-one']">
          {
            talkBalloon.isLoading?
            <>
            Please wait a moment until I reply.       
            </>
            :
            <>    
              {
                isRec?
                <>
                  When you're done, press "Send".
                </>
                :
                <>    
                  Press "Start Talk!!" to start the conversation.
                </>
              }
            </>
          }
        
        </p>
        <hr className="mt-7 bg-gray-500 h-px border-none"></hr>
        <div className="flex items-center justify-center">
          <p className="w-4/5 mt-1 ml-4 text-xl font-extrabold text-gray-600 p-2 break-words">
            {
              talkBalloon.isLoading?
              <>
                답변 준비중 입니다.
              </>
              :
              <>
                {
                  talkBalloon.isUser?
                  <span className="text-blue-800">
                    {talkBalloon.sentence}
                  </span>
                  :
                  <span className="text-pink-800">
                    {talkBalloon.sentence}
                  </span>
                }
              </>
            }
          </p>
        </div>
        <div className="absolute top-0 right-0 z-10 flex space-x-2 mr-2 mt-2">
        {
          talkBalloon.audio == "" ?
          null
          :
          <div className="flex">
            <button className="px-2 py-0 bg-purple-500 text-xl text-white rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-['passero-one']"
              style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
              onClick={ handlePlay }
              onMouseEnter={() => setShowSentenceModal(true)} 
              onMouseLeave={() => setShowSentenceModal(false)}
            >Listen Again</button>
            <audio ref={ audioRef } src={ talkBalloon.audio }/>
          </div>
        }
        {
          isRec ?
          <>
            <button className="px-2 py-0 text-xl bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 font-['passero-one']"
              style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
              onClick={ handleOffRec }
            >Send</button>
            <button className="px-2 py-0 text-xl bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 font-['passero-one']"
              style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
              onClick={ handleReset }
            >Retry</button>
          </>
          :
          <button 
          className={`px-2 py-0 text-xl bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 font-['passero-one'] ${talkBalloon.isLoading ? 'cursor-not-allowed opacity-50' : 'button-flicker'}`}
          style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
            onClick={ handleOnRec }
            disabled={ talkBalloon.isLoading }
          >
            Start Talk !!
          </button>
        }
        <button className="px-2 py-0 text-xl bg-pink-500 text-white rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-['passero-one']"
          style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
          onClick={ handleEnd }
        >End</button>
        </div>
      </div>
    </>
  )
}
import { useState, useRef, useEffect } from "react";
import { talkBalloonAtom, initialTalkBalloon } from "../../atom/TalkBalloonAtom"
import { talkStateAtom } from "../../atom/TalkStateAtom";
import { useRecoilState } from "recoil"
import { useCustomAlert, useCustomConfirm } from "../util/ModalUtil";
import { topic, talkingType } from "../../type/TalkType";
import { translateSentence, endTalk, talkingTopic } from "../../api/Talk";
import { useLocation } from "react-router-dom";
import { talkHistoryAtom, initialTalkHistoryState } from "../../atom/TalkHistoryAtom";
import { getMemberNpcRelationship } from "../../api/NPC";
import { intimacyAtom } from "../../atom/IntimacyAtom";
import { intimacyType } from "../../type/IntimacyType";
import { userAtom } from "../../atom/UserAtom";
import { lockOffCharacter } from "../../api/Character";

export const TalkBalloonComp = () => {  
  // url parsing
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const lang = queryParams.get('language');

  // hook
  const customAlert = useCustomAlert();
  const customConfirm = useCustomConfirm();

  // global state
  const [talkHistoryList, setTalkHistoryList] = useRecoilState(talkHistoryAtom);
  const [talkBalloon, setTalkBalloon] = useRecoilState(talkBalloonAtom);
  const [talkState, setTalkState] = useRecoilState(talkStateAtom);
  const [intimacy, setIntimacy] = useRecoilState(intimacyAtom);
  const [user, setUser] = useRecoilState(userAtom);
  
  // state
  const [showTranslateModal, setShowTranslateModal] = useState<boolean>(true);
  const [showDictionary, setShowDictionary] = useState<boolean>(false);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [showList, setShowList] = useState<boolean>(false);
  const [isRec, setIsRec] = useState<boolean>(false);
  const [dictionary, setDictionary] = useState<string>("");
  const [word, setWord] = useState<string>("");
  const [flag, setFlag] = useState<number>(0);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isMounted = useRef({ audioPlay: false });


  /* 친밀도 정보 가져오기 */
  const fetchIntimacyInfo = async() => {
    await getMemberNpcRelationship(({data}: any) => {
      const result  = data.data as intimacyType[];

      setIntimacy(prev => ({
        ...prev, 
        npcList: result,
      }));

      console.log("fetchIntimacyInfo 완료")
      console.log(flag)
      setFlag(f => f + 1);
      console.log(flag)
    }, 
    (error) => {
      console.log(error);
    });
  }

  /* 캐릭터 잠금 해제 */
  const characterLockOff = async(id: number) => {
    const quizId = id;

    await lockOffCharacter(quizId, ({data}) => {
      console.log(data.message);
    },
    error => {
      console.log(error);
    })
  }



  const handleOnRec = () => {
    setTalkState(prevState => ({ ...prevState, onRec: !prevState.onRec }));

    setTalkBalloon(prev => ({
      ...prev,
      isUser: true,
      sentence: "",
      translate: ""
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

  // Reset 버튼
  const handleReset = () => { setTalkState(prevState => ({ ...prevState, reset: !prevState.reset })) };

  // End 버튼 눌렀을때
  const handleEnd = async() => {
    await endTalk(talkState.talkId, ({}) => {}, (res) => { console.log(res) })
    setIsRec(false);
    setTalkState(prevState => ({ ...prevState, finish: true, isToast: true }));
    setTalkBalloon(initialTalkBalloon);
    setShowHistory(false)
    setTalkHistoryList(initialTalkHistoryState);
    fetchIntimacyInfo();
  };

  // 대화음악 재생
  const handlePlay = () => { if (audioRef.current) audioRef.current.play() };

  const selectTopic = async(topic:topic) => {
    const flag = await customConfirm("Topic", topic.keyword);
    if (flag) {
      setTalkBalloon(prevState => ({...prevState, sentence: "", prevSectence: " "})) 
      setTalkState(prevState => ({ ...prevState, finish: true }));
      setIsRec(false);
      doTalking(topic);
    }
  }

  const handleWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  // 번역 요청하기
  const doDictionary = async(event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      let language = "en";
      if (lang == "1")
        language = "fr";

      const json = { 
        sentence: word,
        before: "ko",
        after: language
      }

      await translateSentence(json, ({data}) => {
        const result = data.data as string;
        setDictionary(result);
      }, (error) => {
        console.log(error);
      })
    }
  };

  const doTalking = async(topic: topic) => {
    const param = {
      talkId: talkState.talkId,
      topic: topic.keyword,
      language: String(localStorage.getItem("Language")) 
    }
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

      const gender = talkState.gender;
      const nation = String(localStorage.getItem("Language"));
      const file = nation + "_" + gender;
      const errAudioLink = import.meta.env.VITE_S3_URL + "ErrorRecord/" + file + ".mp3";
      let errSentence = "Sorry I'm busy... Maybe talk to you next time?";
      if (nation == "FR") {
        errSentence = "Désolé, je suis occupé. On se parle la prochaine fois?";
      }
  
      setTalkBalloon(prev => ({
        ...prev,
        sentence: errSentence,
        prevSectence: errSentence,
        audio: errAudioLink,
        isLoading: false,
        isUser: false,
      }));
    })
    setTalkBalloon(prev => ({ ...prev, audioPlay: !talkBalloon.audioPlay }))
  }

  const doTranslateSentence = async() => {
    let language = "en";
    if (lang == "1")
      language = "fr";

    const json = { 
      sentence: talkBalloon.sentence,
      before: language,
      after: "ko"
    }

    await translateSentence(json, ({data}) => {
      const result = data.data as string;
      setTalkBalloon(prev => ({ ...prev, translate: result}));
    }, (error) => {
      console.log(error);
    })
  }

  const clickHistoryButton = () => {
    setShowHistory(!showHistory);
  }

  
  useEffect(() => {
    if (isMounted.current.audioPlay) {
      handlePlay();
    } else {
      isMounted.current.audioPlay = true;
    }
  }, [talkBalloon.audioPlay])

  useEffect(() => {
    console.log("Flag 상태 변경됨: ", flag);
  }, [flag]);
  
  /* 친밀도가 업데이트 될 때, 캐릭터 잠금 해제 여부를 파악한다. */
  useEffect(() => {
    if(intimacy.npcList.some(npc => npc.intimacy > 0) && user.lockList[4].islocked) {
      setUser({
        ...user,
        lockList: user.lockList.map((item, index) => 
          index === 4 ? {...item, islocked: false} : item
        )
      })
      characterLockOff(5);
    }

    if(intimacy.npcList.every(npc => npc.intimacy > 0) && user.lockList[8] && !user.lockList[4].islocked) {
      setUser({
        ...user,
        lockList: user.lockList.map((item, index) => 
          index === 8 ? {...item, islocked: false} : item
        )
      })
      characterLockOff(9);
    }

    if(intimacy.npcList.some(npc => npc.intimacy === 100) && user.lockList[7] && !user.lockList[4].islocked) {
      setUser({
        ...user,
        lockList: user.lockList.map((item, index) => 
          index === 7 ? {...item, islocked: false} : item
        )
      })
      characterLockOff(8);
    }
  }, [intimacy, flag]);

  return(
    <div style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_small.png'), auto` }}>
      {
        !talkBalloon.prevSectence?
        <button
          className="absolute top-0 right-0 z-10 flex flex-col space-y-2 mr-2 mt-2 px-4 py-2 bg-gray-600 text-white text-lg rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 font-['passero-one']"
          style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
          onClick={() => { setShowList(!showList) }}
        >Topics
        </button>
        :
        <button
          className="absolute top-0 right-0 z-10 flex flex-col space-y-2 mr-2 mt-2 px-4 py-2 bg-gray-600 text-white text-lg rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 font-['passero-one']"
          style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
          onClick={ clickHistoryButton }
        >
          History
        </button>
      }
      {/* 사전 보는 버튼 */}
      <button className="absolute top-0 left-0 z-10 flex flex-col space-y-2 ml-2 mt-2 px-4 py-2 bg-gray-600 text-white text-lg rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 font-['passero-one']"
        style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
        onClick={() => { setShowDictionary(!showDictionary) }}
      >Voca</button>
      {
        // 토픽 리스트 보여주기
        showList && !talkBalloon.prevSectence?
        <>
          <div className="absolute top-16 right-2 w-[330px]">        
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              {
                talkBalloon.topicList.map((value, index) => {
                 return(
                  <div key={index}>
                    <div className="mb-2 p-2 bg-white rounded-lg shadow-inner font-bolder font-['passero-one'] text-xl hover:bg-gray-200" 
                    style={{ cursor: `url(${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png), auto` }}
                      onClick={() => { selectTopic(value) }}
                    >{value.keyword}
                    <div className="text-xs text-gray-500 mt-1 font-['NPSfontBold']">- {value.koKeyword}</div>
                    </div>
                  </div>
                 ) 
                })
              }
            </div>
          </div>
        </>:null
      }
      {
        // History 말풍선
        showHistory?
        <div className="absolute top-[8vh] right-2 w-[330px] h-[60vh] bg-gray-100 rounded-lg px-4 py-2 overflow-auto">
          <div className="justify-center text-2xl font-bold font-['passero-one']">History</div>
          <hr className="border-black"/>
          <div className="font-['GabiaSolmee'] text-l mt-2">
            {
              talkHistoryList.map((value, index)=>(
                <div key={index}>
                  {
                    value.isUser?
                    <div className="mb-2 text-blue-800">
                      Me : {value.talk}
                    </div>
                    :
                    <div className="mb-2">
                      NPC : {value.talk}
                    </div>
                  }
                </div>
              ))
            }
          </div>
        </div>
        :null
      }
      {
        // 번역 말풍선
        showTranslateModal && talkBalloon.translate.length > 0?
        <div className="absolute top-[35vh] left-2 w-[330px] h-[35vh] bg-gray-100 rounded-lg px-4 py-2">
          <div className="justify-center text-2xl font-bold font-['passero-one']">Translate</div>
          <hr className="border-black"/>
          <div className="font-['GabiaSolmee'] text-xl mt-2">{ talkBalloon.translate }</div>
        </div>:null
      }
      {
        // 사전 말 풍선
        showDictionary? 
        <div className="absolute top-[8vh] left-2 w-[300px] bg-gray-100 rounded-lg px-4 py-2">
          <div className="justify-center text-2xl font-bold font-['passero-one']">Voca</div>
          <hr className="border-black"/>
          <input
            className="mt-2 w-full p-2 border-2 border-gray-300 rounded-md leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline"
            type="text" placeholder="🔍︎ Search a word" onKeyDown={ doDictionary } onChange={ handleWord } 
          />
          <div className="mt-2 mb-1" style={{ fontWeight: 'bold' }}> - {dictionary}</div>
        </div>
        :
        null
      }

      <div className="absolute bottom-4 left-2 right-2 min-h-[190px] bg-white bg-opacity-75 p-4 border border-gray-500 shadow-lg rounded-lg">
        <p className="absolute top-[23px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-green-700 font-['passero-one']">
          {
            // 말풍선 상단
            talkBalloon.isLoading?
            <>Please wait a moment until I reply.</>:
            <>{ isRec?<>When you're done, press "Send".</>:<>Press "Start Talk!!" to start the conversation.</> }</>
          }
        </p>
        <hr className="mt-7 bg-gray-500 h-px border-none"></hr>
        <div className="flex items-center justify-center">
          <p className="w-4/5 mt-1 ml-4 text-2xl text-gray-600 p-2 break-words font-['GabiaSolmee']">
            {
              // 말풍선 본문
              talkBalloon.isLoading?
              <>답변 준비중 입니다.</>:
              <>
                {
                  talkBalloon.isUser?
                  <span className="text-blue-800">{talkBalloon.sentence}</span>:
                  <span className="text-black">{talkBalloon.sentence}</span>
                }
              </>
            }
          </p>
        </div>
        {/* 번역 하기 버튼 */}
        <button className="absolute top-2 px-2 py-0 text-xl bg-violet-500 text-white rounded hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 font-['passero-one']"
          style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
          onClick={ doTranslateSentence }
          onMouseEnter={() => setShowTranslateModal(true)}
          onMouseLeave={() => setShowTranslateModal(false)}
          disabled={ talkBalloon.sentence.length == 0 }
        >Translate</button>
        <div className="absolute top-0 right-0 z-10 flex space-x-2 mr-2 mt-2">
        {
          // 음성 다시 듣기
          talkBalloon.audio == "" ?
          null:
          <div className="flex">
            <button className="px-2 py-0 bg-purple-500 text-xl text-white rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-['passero-one']"
              style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
              onClick={ handlePlay }
              // onMouseEnter={() => setShowSentenceModal(true)} 
              // onMouseLeave={() => setShowSentenceModal(false)}
            >Listen Again</button>
            <audio ref={ audioRef } src={ talkBalloon.audio }/>
          </div>
        }
        {
          // 녹음중 할 수 있는버튼
          isRec?
          <>
            <button className="px-2 py-0 text-xl bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 font-['passero-one']"
              style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
              onClick={ handleOffRec }
            >Send</button>
            <button className="px-2 py-0 text-xl bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 font-['passero-one']"
              style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
              onClick={ handleReset }
            >Retry</button>
          </>:
          // 대화 시작하기
          <button 
          className={`px-2 py-0 text-xl bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 font-['passero-one'] ${talkBalloon.isLoading ? 'cursor-not-allowed opacity-50' : 'button-flicker'}`}
          style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
            onClick={ handleOnRec }
            disabled={ talkBalloon.isLoading }
          >Start Talk !!
          </button>
        }
        {/* 대화 끝내기 */}
        <button className="px-2 py-0 text-xl bg-pink-500 text-white rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 font-['passero-one']"
          style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
          onClick={ handleEnd }
        >End</button>
        </div>
      </div>
    </div>
  )
}
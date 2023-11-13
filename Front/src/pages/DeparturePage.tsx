import { useNavigate } from "react-router-dom";
import { departures } from "../api/Departures";
import { DepartureType } from "../type/DepartureType";
import { loadingAtom } from "../atom/LoadingAtom";
import { useSetRecoilState, useRecoilState } from 'recoil';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { PlayerSelectAtom } from "../atom/PlayerSelectAtom";
import { quizAtom } from "../atom/QuizAtom";
import { getAllQuizList } from "../api/Quiz";
import { quizTypeForAtom } from "../type/QuizType";
import { characterAtom } from "../atom/CharacterAtom";
import { CharacterResponseType } from "../type/CharacterType";
import { getCharacterList } from "../api/Character";
import { intimacyType } from "../type/IntimacyType";
import { getMemberNpcRelationship } from "../api/NPC";
import { intimacyAtom } from "../atom/IntimacyAtom";
import { userType } from "../type/UserType";
import { userAtom } from "../atom/UserAtom";
import { lockOffCharacter } from "../api/Character";
import { useCustomAlert } from "../component/util/ModalUtil";

const Rows = () => {
  /* loading */
  const setLoading = useSetRecoilState(loadingAtom);
  const navigate = useNavigate();
  const dep : DepartureType[] = departures;

  const showToaster = (sentence:string, emoji:string) => {
    toast(sentence, {
      duration: 2000,
      icon: emoji,
      style: { fontSize: "20px", fontFamily:"GabiaSolmee" },
      iconTheme: { primary: '#000', secondary: '#fff' },
      ariaProps: { role: 'status', 'aria-live': 'polite' },
    });
  }

  const sortTheme = (language : string, destination: string) => {

    localStorage.setItem("Language", language);
    if(language === "US"){
      navigate("/theme?language=0");
    } else if(language === "FR"){
      navigate("/theme?language=1");
    } else if (language === "UK") {
      navigate("/theme?language=2");
    } else {
      showToaster(destination + " 행 운항 준비중 입니다.","✈️")
    }
  }

  return (
    dep.map((el, i)=>(
      <div key={i} 
      onClick={()=>{setLoading({loading:true}); sortTheme(el.language, el.destination);}} 
      className="hover:bg-[#ddd]/40 text-[1.1rem] flex flex-row bg-[#222] p-3 rounded-lg mb-1"
      style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
      >
        <div className="flex w-1/6 text-yellow-300">&nbsp;&nbsp;{el.time}</div>
        <div className="flex w-2/6 font-bold text-[1.3rem]">
        <img className="rounded-full w-8" src={el.flag}/>&nbsp;&nbsp;{el.destination}</div>
        <div className="flex w-1/6">{el.Flight}</div>
        <div className="flex w-1/6">{el.Gate}</div>
        <div className={`flex w-1/6 ${el.Status === "Cancelled"? "text-red-400" : "text-blue-300"}`}>{el.Status}</div>
      </div>
    ))
  )
}
const DeparturePage = () => {
  /* loading */
  const setLoading = useSetRecoilState(loadingAtom);
  const setQuiz = useSetRecoilState(quizAtom);
  const [, setCharacter] = useRecoilState(characterAtom);
  const [, setIntimacy] = useRecoilState(intimacyAtom);
  const [playerChange, setPlayerChange] = useRecoilState(PlayerSelectAtom);
  const [user, setUser] = useRecoilState(userAtom);
  const customAlert = useCustomAlert();

  const navigate = useNavigate();

  /* 캐릭터 정보 불러오기 */
  const fetchCharacterList = async() => {
    await getCharacterList(({data}: any) => {
      const result = data.data as CharacterResponseType[];

        setCharacter(prev => ({
            ...prev, 
            characterList: result,
        }))
    }, 
    (error) => {
      console.log(error);
    });
  }

  /* 친밀도 정보 가져오기 */
  const fetchIntimacyInfo = async() => {
    await getMemberNpcRelationship(({data}: any) => {
      const result  = data.data as intimacyType[];

      setIntimacy(prev => ({
        ...prev, 
        npcList: result,
      }))
    }, 
    (error) => {
      console.log(error);
    });
  }

  /* 퀴즈 정보 불러오기 */
  const getQuizInfo = async () => {

    await getAllQuizList(({data}: any) => {
        const result = data.data as quizTypeForAtom[];

        setQuiz(prev => ({
            ...prev, 
            quizList: result,
        }))
    }, 
    (error) => {
      console.log(error);
    });
  };

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

  /* 회원가입 날짜가 2023.11.14 이전일때 */
  const checkEnterDate = (user: userType) => {
    const cutoffDate = new Date("2023-11-14");
    const userCreatedAt = new Date(user.createdAt);

    if(userCreatedAt < cutoffDate && user.lockList[2].islocked) {
      setUser({
        ...user,
        lockList: user.lockList.map(
          (item, index) => (index === 2 ? { ...item, islocked: false } : item)
        )
      });

      characterLockOff(3);
      customAlert("Notice", "1차 배포에 참가해주셔서 감사합니다! 3번 캐릭터가 잠금 해제 됩니다!");
    }
  };

  useEffect(() => {
    getQuizInfo();
    fetchCharacterList();
    fetchIntimacyInfo();
    checkEnterDate(user);
  }, [])

  // 캐릭터 변경 토스트 메세지
  
  useEffect(()=>{
    if(playerChange.change){
      showToaster("캐릭터가 변경되었습니다", "✔️");
      setPlayerChange((prev)=>({index:prev.index, change:false}));
    }
  },[playerChange.index]);
  
  return (
    <>
      <Toaster position="top-center" />
      <div className="min-h-screen flex flex-col items-center justify-center bg-cover" style={{ backgroundImage: `url('${import.meta.env.VITE_S3_URL}Introduce/bgggg.png')`, cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_small.png'), auto` }}>    
        <div className="w-full px-5 flex justify-between text-5xl font-bold text-white" style={{ fontFamily: "GabiaSolmee" }}>
          <div className="hover:text-[2.8rem] ml-8 drop-shadow-lg" 
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto`, letterSpacing: '-0.3rem' }}
            onClick={async() => {
              setLoading({loading:true});
              navigate("/playerSelect")
            }}
          >캐릭터 선택</div>
          <div className="hover:text-[2.8rem] mr-8 drop-shadow-lg" onClick={() => {
            navigate("/mypage");
          }}
          style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto`, letterSpacing: '-0.3rem' }}
          >마이페이지</div>
        </div>
        {/* Departure board */}
        <div className="flex flex-col  w-4/5 mt-10 rounded-lg">
          <div className="p-2 px-10 text-[3rem] font-bold w-full bg-[#F5E4A0]/90 rounded-t-lg" style={{ fontFamily: "GabiaSolmee", letterSpacing: '-0.1rem' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;출발 항공편&nbsp;&nbsp;&nbsp;<span className="material-icons text-[3rem] align-middle">flight_takeoff</span></div>
          <div className="p-4 py-10 bg-[#333]/90 rounded-b-lg flex justify-center">
            {/* table starts */}
            <div className=" w-5/6 text-[#fff]">
              <div className="px-5 text-[1.3rem] text-[#ccc] font-bold flex flex-row justify-between mb-2">
                  <div className="w-1/6">Time</div>
                  <div className="w-2/6 pl-10">Destination</div>
                  <div className="w-1/6">Flight</div>
                  <div className="w-1/6">Gate</div>
                  <div className="w-1/6">&nbsp;Status</div>
              </div>
              <Rows></Rows>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* 캐릭터 재설정 알림 */
export const showToaster = (sentence:string, emoji:string) => {
  
  toast(sentence, {
    duration: 2000,
    icon: emoji,
    style: { fontSize: "20px", fontFamily:"GabiaSolmee" },
    iconTheme: { primary: '#000', secondary: '#fff' },
    ariaProps: { role: 'status', 'aria-live': 'polite' },
  });
  
}

export default DeparturePage;
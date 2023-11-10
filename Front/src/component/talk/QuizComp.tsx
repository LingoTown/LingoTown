import { QuizType } from "../../type/QuizType";
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { submitQuiz } from "../../api/Quiz";
import { useCustomPrompt } from "../util/ModalUtil";
import toast, { Toaster } from 'react-hot-toast';
import { talkBalloonAtom } from "../../atom/TalkBalloonAtom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import quizSuccess from "../../hook/QuizSuccess";
import { userAtom } from "../../atom/UserAtom";
import { quizAtom } from "../../atom/QuizAtom";
import { lockOffCharacter } from "../../api/Character";
import { LockOff } from "../../type/CharacterType";

interface QuizCompProps {
  quizList: QuizType[];
  isOpenQuizModal: boolean;
  setQuizLender: Dispatch<SetStateAction<boolean>>;
  setIsOpenQuizModal: Dispatch<SetStateAction<boolean>>;
  translateList: boolean[];
  setTranslateList: Dispatch<SetStateAction<boolean[]>>;
}

type resutltType = {
  result: boolean;
};

export const QuizComp: React.FC<QuizCompProps> = ({quizList, isOpenQuizModal, setQuizLender, setIsOpenQuizModal, translateList, setTranslateList}) => {
 
  const customPrompt = useCustomPrompt();
  const setTalkBalloon = useSetRecoilState(talkBalloonAtom);
  let [user, setUser] = useRecoilState(userAtom);
  let [quiz, setQuiz] = useRecoilState(quizAtom);
  const success = quizSuccess();

  const characterLockOff = async(id: number) => {
    const quizId = id;

    await lockOffCharacter(quizId, ({data}) => {
      console.log(data.message);
    },
    error => {
      console.log(error);
    })
  }

  const doSubmitQuiz = async(quizId:string, quizNum: number) => {
    setIsOpenQuizModal(false);
    const submit = await customPrompt("퀴즈 " + quizNum, "정답을 제출해주세요.");
    if (submit == null) {
      setIsOpenQuizModal(true);
      return
    }

    const json = { "quizId" : quizId, "result" : submit }
    setIsOpenQuizModal(true);

    await submitQuiz(json, ({data}) => {
      const result = data.data as resutltType;
      
      if (result.result) {
        // QuizAtom 업데이트

        success(Number(quizId));

        // DB 수정
        characterLockOff(Number(quizId));

        showToaster("정답입니다😄", "✔️");
      } else {
        showToaster("오답입니다😢", "❌");
      }
      setQuizLender(prev => !prev);
    }, (error) => {
      console.log(error);
    })
  }

  // user 상태가 변경될 때마다 실행되는 useEffect
  useEffect(() => {
    // 캐릭터 잠금 조건 확인 및 처리
    const solvedCnt = quiz.quizList.filter(quiz => quiz.solved).length;

    if(user.lockList[3].islocked) {
      setUser({
        ...user,
        lockList: user.lockList.map((item, index) => 
          index === 3 ? {...item, islocked: false} : item
        )
      });

      characterLockOff(4);
      alert("characterId 4번, m14 캐릭터 잠금 해제");
    }

    if(solvedCnt >= 5 && user.lockList[5].islocked && !user.lockList[3].islocked) {
      setUser({
        ...user,
        lockList: user.lockList.map((item, index) => 
          index === 5 ? {...item, islocked: false} : item
        )
      });

      characterLockOff(6);
      alert("characterId 6번, m28 캐릭터 잠금 해제");
    }

    if(solvedCnt >= 10 && user.lockList[6].islocked && !user.lockList[3].islocked && !user.lockList[5].islocked) {
      setUser({
        ...user,
        lockList: user.lockList.map((item, index) => 
          index === 6 ? {...item, islocked: false} : item
        )
      });

      characterLockOff(7);
      alert("characterId 7번, f22 캐릭터 잠금 해제");
    }
  }, [user, quiz]); // user 및 quiz 상태에 대한 의존성 추가

  const showToaster = (sentence:string, emoji:string) => {
    toast(sentence, {
      duration: 2000,
      icon: emoji,
      style: { fontSize: "15px" },
      iconTheme: { primary: '#000', secondary: '#fff' },
      ariaProps: { role: 'status', 'aria-live': 'polite' },
    });
  }

  // 영어로 보기
  const toEng = (event: React.MouseEvent<HTMLButtonElement>, index:number) => {
    event.stopPropagation();
    const newTranslateList = [...translateList];
    newTranslateList[index] = false;
    setTranslateList(newTranslateList);
  }

  // 한국말로 보기
  const toKor = (event: React.MouseEvent<HTMLButtonElement>, index:number) => {
    event.stopPropagation();
    const newTranslateList = [...translateList];
    newTranslateList[index] = true;
    setTranslateList(newTranslateList);
  }

  // 닫기 버튼 클릭
  const clickClose = () => {
    setIsOpenQuizModal(false)
    setTalkBalloon(prevState => ({...prevState, isModal: false}))
    setTalkBalloon(prevState => ({...prevState, isMove: true}))
  }

  //
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        clickClose();
      }
    };

    // 키 다운 이벤트 리스너 추가
    window.addEventListener('keydown', handleEsc);

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return(
    <>
      <Toaster position="top-center" />
      {
        isOpenQuizModal?
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-20">
          <div className="fixed inset-0 z-10 flex items-center justify-center">
            <div className="bg-[#fff]/80 p-2 rounded-xl w-2/3 max-w-4xl">
              <div className="border-[0.5px] border-white w-full rounded-lg p-1 px-3 flex flex-col items-center">
                <div className="text-[#333] text-[1.5rem] mt-2" style={{ fontFamily: "GabiaSolmee" }}>퀘스트 목록</div>
                <div className="text-[#333] font-bold text-[0.8rem] mb-1">* 각 질문을 클릭하여 정답을 입력해주세요</div>
                {
                  quizList.map((data, index) => (
                    <div key={ index }
                      className="flex justify-between items-center w-full mb-1 hover:bg-[#fff] bg-[#fff]/60 p-1 py-2 rounded-lg cursor-pointer"
                      
                      onClick={() => {
                        doSubmitQuiz(data.quizId, index + 1)
                      }}
                    >
                      {data.solved ? (
                        <span className="bg-[#99D35F] ml-2 w-5 h-5 rounded-full flex items-center justify-center">
                          <span className="material-icons text-white text-[1.1rem]">check</span>
                        </span>
                      ) : (
                        <span className="bg-[#aaaaaa] ml-2 w-5 h-5 rounded-full flex items-center justify-center"></span>
                      )}
                      <div className="flex-grow">
                        {translateList[index] ?
                          <div className="ml-2">{index + 1}. { data.koQuiz }</div>
                          :
                          <div className="ml-2">{index + 1}. { data.quiz }</div>
                        }
                      </div>
                      {translateList[index] ?
                        <button
                          onClick={ (event) => toEng(event, index) }
                          className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded shadow"
                        >To Eng</button>
                        :
                        <button 
                          onClick={ (event) => toKor(event, index) }
                          className="bg-green-700 hover:bg-green-700 text-white font-bold py-1 px-2 rounded shadow"
                        >To Kor</button>
                      }
                    </div>
                  ))
                }
                <div className="mt-2 mb-2 w-full flex justify-center"  style={{ fontFamily: "GabiaSolmee" }}>
                  <button 
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={ clickClose }
                  >닫기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        null
      }    
    </>
  )  
}
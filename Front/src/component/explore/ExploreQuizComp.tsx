import { QuizType } from "../../type/QuizType";
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { talkBalloonAtom } from "../../atom/TalkBalloonAtom";
import { useSetRecoilState } from "recoil";

interface ExploreQuizCompProps {
  quizList: QuizType[];
  isOpenQuizModal: boolean;
  setIsOpenQuizModal: Dispatch<SetStateAction<boolean>>;
  translateList: boolean[];
  setTranslateList: Dispatch<SetStateAction<boolean[]>>;
}

export const ExploreQuizComp: React.FC<ExploreQuizCompProps> = ({ quizList, isOpenQuizModal, setIsOpenQuizModal, translateList, setTranslateList }) => {

  const setTalkBalloon = useSetRecoilState(talkBalloonAtom);

  const toEng = (event: React.MouseEvent<HTMLButtonElement>, index:number) => {
    event.stopPropagation();
    const newTranslateList = [...translateList];
    newTranslateList[index] = false;
    setTranslateList(newTranslateList);
  }

  const toKor = (event: React.MouseEvent<HTMLButtonElement>, index:number) => {
    event.stopPropagation();
    const newTranslateList = [...translateList];
    newTranslateList[index] = true;
    setTranslateList(newTranslateList);
  }

  const clickClose = () => {
    setIsOpenQuizModal(false)
    setTalkBalloon(prevState => ({...prevState, isModal: false}))
    setTalkBalloon(prevState => ({...prevState, isMove: true}))
  }

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
      {
        isOpenQuizModal?
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-20">
          <div className="fixed inset-0 z-10 flex items-center justify-center">
            <div className="bg-[#fff]/80 p-2 rounded-xl w-2/3 max-w-4xl">
              <div className="border-[0.5px] border-white w-full rounded-lg p-1 px-3 flex flex-col items-center">
                <div className="text-[#333] font-['passero-one'] text-[1.5rem] mt-2">Quest List</div>
                <div className="text-[#333] font-bold text-[0.8rem] mb-1">* 각 질문을 클릭하여 정답을 입력해주세요</div>
                {
                  quizList.map((data, index) => (
                    <div key={ index }
                      className="flex justify-between items-center w-full mb-1 hover:bg-[#fff] bg-[#fff]/60 p-1 py-2 rounded-lg cursor-pointer"
                      onClick={() => {
                        setIsOpenQuizModal(false)
                        setTalkBalloon(prev => ({ ...prev, isUser: !prev.isUser}));
                      }}
                    >
                      {data.solved == "true" ? (
                        <span className="bg-[#99D35F] ml-2 w-5 h-5 rounded-full flex items-center justify-center">
                          <span className="material-icons text-white text-[1.1rem]">check</span>
                        </span>
                      ) : (
                        <span className="bg-[#aaaaaa] ml-2 w-5 h-5 rounded-full flex items-center justify-center">
                          {/* <span className="material-icons text-white text-[0.9rem]">close</span> */}
                        </span>
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
                <div className="mt-2 mb-2 w-full flex justify-center">
                  <button 
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setIsOpenQuizModal(false) }
                  >Close
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
import { QuizType } from "../../type/QuizType";
import React, { Dispatch, SetStateAction } from 'react';
import { submitQuiz } from "../../api/Quiz";
import { useCustomPrompt } from "../util/ModalUtil";
import toast, { Toaster } from 'react-hot-toast';

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
        showToaster("정답입니다😄", "✔️");
      } else {
        showToaster("오답입니다😢", "❌");
      }
      setQuizLender(prev => !prev);
    }, (error) => {
      console.log(error);
    })
  }

  const showToaster = (sentence:string, emoji:string) => {
    toast(sentence, {
      duration: 2000,
      icon: emoji,
      style: { fontSize: "15px" },
      iconTheme: { primary: '#000', secondary: '#fff' },
      ariaProps: { role: 'status', 'aria-live': 'polite' },
    });
  }

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
                    onClick={() => setIsOpenQuizModal(false) }
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
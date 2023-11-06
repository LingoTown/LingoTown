import { QuizType } from "../../type/QuizType";
import React, { Dispatch, SetStateAction } from 'react';
import { submitQuiz } from "../../api/Quiz";
import { useCustomPrompt } from "../util/ModalUtil";

interface QuizCompProps {
  quizList: QuizType[];
  isOpenQuizModal: boolean;
  setQuizLender: Dispatch<SetStateAction<boolean>>;
  setIsOpenQuizModal: Dispatch<SetStateAction<boolean>>;
}

type resutltType = {
  result: boolean;
};

export const QuizComp: React.FC<QuizCompProps> = ({quizList, isOpenQuizModal, setQuizLender, setIsOpenQuizModal}) => {
 
  const customPrompt = useCustomPrompt();

  const doSubmitQuiz = async(quizId:string, quizNum: number) => {
    setIsOpenQuizModal(false);
    const submit = await customPrompt("Quiz " + quizNum, "Submit your answer");
    if (submit == null) {
      setIsOpenQuizModal(true);
      return
    }

    const json = {
      "quizId" : quizId,
      "result" : submit
    }

    await submitQuiz(json, ({data}) => {
      const result = data.data as resutltType;
      if (result.result) {
        // alert("정답")
      } else {
        // alert("오답")
      }
      setQuizLender(prev => !prev);
    }, (error) => {
      console.log(error);
    })
    setIsOpenQuizModal(true);
  }

  return(
    <>
      {
        isOpenQuizModal?
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-10">
          <div className="fixed inset-0 z-10 flex items-center justify-center">
            <div className="bg-[#fff]/80 p-2 rounded-xl w-2/3 max-w-4xl">
              <div className="border-[0.5px] border-white w-full rounded-lg p-1 px-3 flex flex-col items-center">
                <div className="text-[#333] font-['passero-one'] text-[1.5rem] mt-2">Quest List</div>
                <div className="text-[#333] font-bold text-[0.8rem] mb-1">* 각 질문을 클릭하여 정답을 입력해주세요</div>
                {
                  quizList.map((data, index) => (
                    <div key={ index }
                      className="w-full mb-1 flex items-center gap-2 cursor-pointer hover:bg-[#fff] bg-[#fff]/60 p-1 py-2 rounded-lg"
                      onClick={() => {
                        doSubmitQuiz(data.quizId, index + 1)
                      }}                  
                      >
                      {data.solved ? (
                        <span className="bg-[#99D35F] ml-2 w-5 h-5 rounded-full flex items-center justify-center">
                          <span className="material-icons text-white text-[1.1rem]">check</span>
                        </span>
                      ) : (
                        <span className="bg-[#E95454] ml-2 w-5 h-5 rounded-full flex items-center justify-center">
                          <span className="material-icons text-white text-[0.9rem]">close</span>
                        </span>
                      )}
                      <div className="ml-1">{index + 1}. { data.quiz }</div>
                    </div>
                  ))
                }
                <div className="mt-2 mb-2 w-full flex justify-center">
                  <button 
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setIsOpenQuizModal(false) }
                  >
                    Close
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
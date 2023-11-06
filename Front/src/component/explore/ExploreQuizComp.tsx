type QuizItem = {
  quiz: string;
  correct: boolean;
};

interface ExploreQuizCompProps {
  dataList: QuizItem[];
  openQ: boolean;
}

export const ExploreQuizComp: React.FC<ExploreQuizCompProps> = ({ dataList, openQ }) => {
  return(
    <>
      {
        openQ?
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-10">
          <div className="fixed inset-0 z-10 flex items-center justify-center">
            <div className="bg-[#fff]/80 p-2 rounded-xl w-1/2 max-w-4xl">
              <div className="border-[0.5px] border-white w-full rounded-lg p-1 px-3 flex flex-col items-center">
                <div className="text-[#333] font-['passero-one'] text-[1.5rem] mb-0">Quest List</div>
                <div className="text-[#333] font-bold text-[0.8rem] mb-1">* 각 질문을 클릭하여 정답을 입력해주세요</div>
                {
                  dataList.map((data, index) => (
                    <div key={ index }
                      className="w-full mb-1 flex items-center gap-2 cursor-pointer hover:bg-[#fff] bg-[#fff]/60 p-1 py-2 rounded-lg"
                      onClick={() => alert("로그인 후 이용가능합니다.")}                  
                      >
                      <div className="ml-2">{ data.quiz }</div>
                      {data.correct ? (
                        <span className="bg-[#99D35F] w-5 h-5 rounded-full flex items-center justify-center">
                          <span className="material-icons text-white text-[1.1rem]">check</span>
                        </span>
                      ) : (
                        <span className="bg-[#E95454] w-5 h-5 rounded-full flex items-center justify-center">
                          <span className="material-icons text-white text-[0.9rem]">close</span>
                        </span>
                      )}
                    </div>
                  ))
                }
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
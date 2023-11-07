import { useNavigate } from 'react-router-dom';
import { useCustomConfirm } from "../util/ModalUtil"
import { talkBalloonAtom } from '../../atom/TalkBalloonAtom';
import { useSetRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import { ExploreQuizComp } from './ExploreQuizComp';
import { QuizType } from '../../type/QuizType';
import { tutorialAtom } from '../../atom/TutorialAtom';

export const ExploreBtn = () => {
  
  const customConfirm = useCustomConfirm();
  const navigate = useNavigate();
  const setTalkBalloon = useSetRecoilState(talkBalloonAtom);
  const [isOpenQuizModal, setIsOpenQuizModal] = useState<boolean>(false);
  const [translateList, setTranslateList] = useState<boolean[]>([]);
  const setTutorialOpen = useSetRecoilState(tutorialAtom);
  const [quizList, setQuizList] = useState<QuizType[]>([
    {
      quizId: "38",
      quiz: "Your friend Jina is here. Find out what day you have to submit your art homework. (e.g. Monday)",
      koQuiz: "친구 Jina가 있네요. 미술 숙제를 몇 요일 해야 하는지 알아보세요. (예시. Monday)",
      solved: "true"
    },
    {
      quizId: "39",
      quiz: "Find out the name of the store where Jina works part-time. (e.g. LingoMongo)",
      koQuiz: "친구 Jina가 아르바이트하는 가게 이름을 알아보세요. (예시. LingoMongo)",
      solved: "false"
    },
    {
      quizId: "40",
      quiz: "Ask Jina what major she wants to study. (e.g. Computer Science)",
      koQuiz: "친구 Jina가 전공하고 싶은 학과에 대해 알아보세요. (예시. Computer Science)",
      solved: "true"
    },
    {
      quizId: "41",
      quiz: "Find out how many friends Barry came here with (e.g. 5)",
      koQuiz: "Barry가 몇 명의 친구와 함께 이 곳을 왔는지 알아보세요. (예시. 5)",
      solved: "false"
    },
    {
      quizId: "42",
      quiz: "Find out how many days Barry is going to stay here. (e.g. 7)",
      koQuiz: "Barry가 이 곳에서 며칠 머무를 예정인지 알아보세요. (예시. 3)",
      solved: "false"
    },
    {
      quizId: "43",
      quiz: "Find out the name of the exhibition that Sheriff Jimmy works for (e.g. LingoMongo)",
      koQuiz: "Jimmy가 일을 하는 전시회 이름이 무엇인지 알아보세요. (예시. LingoMongo)",
      solved: "false"
    },
    {
      quizId: "44",
      quiz: "There's a tourist, Barry. Find out his birthday. (e.g. 12/09)",
      koQuiz: "관광객 barry이 보이네요. 생일을 알아보세요. (예시. 12/09)",
      solved: "false"
    }
  ]);
  setQuizList;


  useEffect(() => {
    setTranslateList(new Array(quizList.length).fill(0));
  }, [])
  
  const exit = async() => {
    setTalkBalloon(prevState => ({...prevState, isMove: false}));
    const flag = await customConfirm("Notice", "Are you sure you want to leave the Explore?");
    if (flag)
      navigate("/");
    setTalkBalloon(prevState => ({...prevState, isMove: true}));
  }
  
  useEffect(() => {
    setTalkBalloon(prevState => ({...prevState, isMove: !isOpenQuizModal}));
  }, [isOpenQuizModal])
  
  return(
    <>
      <div className="absolute top-0 left-0 z-10 mt-2 ml-2">
        <button
          className="px-4 py-2 bg-gray-800 text-white text-lg rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 font-['passero-one']"
          onClick={ exit }
          style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
        >Back To Main</button>
      </div>
      <div className='justify-center flex'>
        <ExploreQuizComp 
          quizList={quizList}
          isOpenQuizModal={isOpenQuizModal}
          setIsOpenQuizModal={setIsOpenQuizModal}
          translateList={translateList}
          setTranslateList={setTranslateList}
        />
        <div className="absolute top-0 right-0 z-10 flex flex-col space-y-2 mr-1.5 mt-2">
          <button
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
            className="px-4 py-2 bg-gray-800 text-white text-lg rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 font-['passero-one']"
            onClick={() => {setTutorialOpen({visit: false})}}
          >Guide</button>
        </div>
        <div className="absolute top-14 right-0 z-10 flex flex-col space-y-2 mr-1.5 mt-1">
          <button 
            className="px-4 py-2 bg-[#95E5F9] text-[#000] text-lg rounded hover:bg-[#B1EFFF] font-['passero-one']"
            onClick={() => { setIsOpenQuizModal(!isOpenQuizModal) }}
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
          >Quest</button>
        </div>
      </div>
    </>
  )
}
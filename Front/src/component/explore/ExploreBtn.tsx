import { useNavigate } from 'react-router-dom';
import { useCustomConfirm, useCustomPrompt } from "../util/ModalUtil"
import { talkBalloonAtom } from '../../atom/TalkBalloonAtom';
import { useSetRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import { ExploreQuizComp } from './ExploreQuizComp';

export const ExploreBtn = () => {
  
  const customConfirm = useCustomConfirm();
  const customPrompt = useCustomPrompt();
  const navigate = useNavigate();
  const setTalkBalloon = useSetRecoilState(talkBalloonAtom);
  const [openQ, setOpenQ] = useState(false);
  const dataList = [
    { quiz: "1. 가장 주력 메뉴가 무엇인지, 오늘의 음식을 추천 받아보세요!", correct: true },
    { quiz: "2. 리뷰를 작성하면 할인을 해준대요! 직원에게 몇 % 할인받을 수 있는지 물어보세요!", correct: true },
    { quiz: "3. 비빔밥을 파네요. 얼마나 매운지 알아보세요!", correct: false },
    { quiz: "4. 식당에 손님이 많네요. 대기 시간이 얼마인지 확인해보세요", correct: false },
  ]
  
  const exit = async() => {
    setTalkBalloon(prevState => ({...prevState, isMove: false}));
    const flag = await customConfirm("Notice", "Are you sure you want to leave the Explore?");
    if (flag)
      navigate("/");
    setTalkBalloon(prevState => ({...prevState, isMove: true}));

  }
  
  useEffect(() => {
    setTalkBalloon(prevState => ({...prevState, isMove: !openQ}));
  }, [openQ])
  
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
        <ExploreQuizComp dataList={dataList} openQ={openQ}/>
        <div className="absolute top-0 right-0 z-10 flex flex-col space-y-2 mr-1.5 mt-2">
          <button
            className="px-4 py-2 bg-gray-800 text-white text-lg rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 font-['passero-one']"
            onClick={() => customPrompt("Info", "해당 테마의 정보를 확인 할 수 있습니다.")}
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
          >Info</button>
          <button 
            className="px-4 py-2 bg-[#95E5F9] text-[#000] text-lg rounded hover:bg-[#B1EFFF] font-['passero-one']"
            onClick={() => { setOpenQ(!openQ) }}
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
          >Quiz</button>
        </div>
      </div>
    </>
  )
}
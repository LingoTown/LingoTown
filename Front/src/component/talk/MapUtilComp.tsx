import { useNavigate } from 'react-router-dom';
import { useCustomConfirm, useCustomPrompt } from "../util/ModalUtil"
import { talkBalloonAtom } from '../../atom/TalkBalloonAtom';
import { useSetRecoilState } from 'recoil';
import {useState} from 'react';

export const MapUtilComp = () => {
  // 데이터 형식 
  // 질문리스트, 맞았는지 틀렸는지 => 정답여부는 백에서 처리
  
  const customConfirm = useCustomConfirm();
  const customPrompt = useCustomPrompt();
  const navigate = useNavigate();
  const setTalkBalloon = useSetRecoilState(talkBalloonAtom);
  const [openQ, setOpenQ] = useState(false);
  // const [showAns, setShowAns] = useState([true,false,false]);
  const [correct, setCorrect] = useState([true,false,true]);
  setCorrect;
  const exit = async() => {
    setTalkBalloon(prevState => ({...prevState, isMove: false}));
    const flag = await customConfirm("Notice", "Would you like to leave the theme?");
    setTalkBalloon(prevState => ({...prevState, isMove: true}));
    if (flag) {
      navigate("/");
    }
  }
  
  return(
    <>
    <div className='justify-center flex'>
      <div className="absolute top-0 left-0 z-10 mt-2 ml-2">
        <button
          className="px-4 py-2 bg-gray-800 text-white text-lg rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 font-['passero-one']"
          onClick={ exit }
        >Back To Main</button>
      </div>
      {
        openQ?
        <div className="z-10 absolute bg-[#fff]/80 p-2 rounded-xl mt-2 w-1/2">
          <div className="border-[0.5px] border-white w-full rounded-lg h-full p-1 px-3 flex flex-col">
            <div className="text-[#333] font-['passero-one'] text-[1.5rem] self-center mb-0">Quest List</div>
            <div className="text-[#333] text-[0.8rem] self-center mb-1">*각 질문을 클릭하여 정답을 입력해주세요</div>
            <div onClick={async()=>{
              console.log("click");
              const flag = await customPrompt("정답을 입력해주세요", "");
              console.log(flag);
            }} className="mb-1 flex items-center gap-2 hover:bg-[#fff] bg-[#fff]/60 p-1 py-2 rounded-lg">
              <div>1. 가장 주력 메뉴가 무엇인지, 오늘의 음식을 추천 받아보세요!</div>
              {
                correct[0]?
                <span className="bg-[#99D35F] w-5 h-5 rounded-full flex items-center justify-center">
                <span className="material-icons text-white text-[1.1rem]">check</span>
                </span>
                :
                <span className="bg-[#E95454] w-5 h-5 rounded-full flex items-center justify-center">
                <span className="font-bolder material-icons text-white text-[0.9rem] mb-1">X</span>
                </span>
              }
            </div>
            <div onClick={async()=>{
              console.log("click");
              const flag = await customPrompt("정답을 입력해주세요", "");
              console.log(flag);
            }} className="mb-1 flex items-center gap-2 hover:bg-[#fff] bg-[#fff]/60 p-1 py-2 rounded-lg">
              <div>1. 가장 주력 메뉴가 무엇인지, 오늘의 음식을 추천 받아보세요!</div>
              {
                correct[1]?
                <span className="bg-[#99D35F] w-5 h-5 rounded-full flex items-center justify-center">
                <span className="material-icons text-white text-[1.1rem]">check</span>
                </span>
                :
                <span className="bg-[#E95454] w-5 h-5 rounded-full flex items-center justify-center">
                <span className="font-bolder material-icons text-white text-[0.9rem] mb-1">X</span>
                </span>
              }
            </div>
            {/* <div>
              2. 리뷰를 작성하면 할인을 해준대요! 직원에게 몇 % 할인받을 수 있는지 물어보세요!
            </div>
            <div>
              3. 비빔밥을 파네요. 얼마나 매운지 알아보세요!
            </div>
            <div>
              4. 식당에 손님이 많네요. 대기 시간이 얼마인지 확인해보세요
            </div> */}
          </div>
        </div>
        :
        ""
      }
      
      <div className="absolute top-0 right-0 z-10 flex flex-col space-y-2 mr-1.5 mt-2">
        <button
          className="px-4 py-2 bg-gray-800 text-white text-lg rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 font-['passero-one']"
          onClick={() => customPrompt("Info", "해당 테마의 정보를 확인 할 수 있습니다.")}
        >Info</button>
        <button 
          className="px-4 py-2 bg-[#95E5F9] text-[#000] text-lg rounded hover:bg-[#B1EFFF] font-['passero-one']"
          onClick={() => {setOpenQ(!openQ)}}
        >My Quest</button>
      </div>
    </div>

    </>
  )
}
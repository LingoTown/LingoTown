import React, { useEffect } from 'react';
import { useState } from "react";
import { tutorialAtom } from '../../atom/TutorialAtom';
import { useSetRecoilState } from 'recoil';
import Lottie from 'lottie-react';
import { useLocation } from 'react-router-dom';

const cursorLink = import.meta.env.VITE_S3_URL + 'MousePointer/navigation_small.png'; // 기본 
const cursorHoverLink = import.meta.env.VITE_S3_URL + 'MousePointer/navigation_hover_small.png'; //hover

const Tutorial = () => {
  const [step, setStep] = useState<number>(0);
  const [isPressed, setIsPressed] = React.useState(false);
  const img:string[] = ["", "Tutorial/DirectionalKey.png", "Tutorial/SpaceBarkey.png", "Tutorial/A_key.png", "Tutorial/S_key.png", "Tutorial/D_key.png"];
  const title:string[] = ["LingoTown", "방향키", "스페이스바", "Ask키", "Start키", "Done키"];
  const statement:string[] = ["", "방향키로 링고타운을 돌아다녀 보세요!", "스페이스바를 눌러 신나게 점프해볼까요?!", "링고타운 주민들에게 가까이 다가가 A키로 말을 걸어보세요!", "빔프로젝트 앞에서 S키를 눌러 영상을 감상해보세요!", "어디서든 D키를 눌러 영상을 종료하실 수 있습니다!"]; 
  const setVisit = useSetRecoilState(tutorialAtom);
  const [animationData, setAnimationData] = useState(null);

  // param check
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const world = queryParams.get('world'); //1~4 

  // 마우스가 버튼 위로 올라왔을 때와 떠났을 때의 이벤트 핸들러
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  // lotties 파일 가져오기
  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_S3_URL}`+`Tutorial/earth.json`);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error('Error fetching animation data:', error);
      }
    };

    fetchAnimationData();
  }, []);

  const nextStep = () => {
    if(world!="2"){//발표회 상영 요소 o
      if(step == 3) {
        setVisit({visit:true}); //1번 읽었다.
        return;
      }
    }else{
      if(step == title.length-1) {
        setVisit({visit:true}); //1번 읽었다.
        return;
      }
    }
    setStep(step+1);
  }

  const moveStep = (index: number) => {
    setStep(index);
  }

  const skipStep = () => {
    setVisit({visit:true}); //1번 읽었다.
  }
  

  return (
    <div
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: "10px 4px 4px 1px rgba(0, 0, 0, 0.25)",
        height: "600px",
        cursor: `url(${cursorLink}), auto`,
        userSelect: 'none'
      }}
      className="absolute z-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white max-w-[700px] w-full md:w-[700px] h-auto rounded-[20px] p-8"
    >
      <div 
        onClick={skipStep}
        style={{ cursor: `url(${cursorHoverLink}), auto` }} 
        className="font-[NPSfontBold] text-[#09B1F8] font-['ARLRDBD'] text-[13px] font-bold ml-[95%]">
        SKIP
      </div>

      {/* 이미지 */}
      <div className='w-[100%] h-[100%] max-h-[500px] flex justify-center items-center'>
        {
          step===0?
          <Lottie className="mx-auto max-w-[270px]" animationData={animationData} />
          :
          <img className="mx-auto max-w-[300px]" src={import.meta.env.VITE_S3_URL+img[step]} />
        }
      </div>

      {/* 타이틀 */}
      <div className="font-[NPSfontBold] text-center text-[20px] font-bold mt-7">
        {title[step]}
      </div>

      {/* 설명 */}
      <div className="font-[NPSfontBold] text-center text-[15px] mt-5">
        {
          step==0?
          <>
            <p> AI와 대화하는 메타버스 언어마을</p>
            <p>LingoTown에 오신 것을 환영합니다!</p>
          </>
          :
          <>
            <p> {statement[step]}</p>
          </>
        }
      </div>

      <div 
        style={{ cursor: `url(${cursorLink}), auto` }} 
        className="font-[NPSfontBold] flex justify-center items-center mt-8 space-x-2">
        <button
          style={applyPressedStyle(isPressed)}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onClick={nextStep}
        >
          {title.length-1==step?"End":"Next"}
        </button>
      </div>

      {/* next page */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        {
          world!="2"?
          title.map((_, index)=>{
            if(index>=4) return;
            return(
              <div onClick={()=>moveStep(index)} key={index} className="w-[8px] h-[8px] rounded-xl" style={index==step?{ backgroundColor: "#09B1F8" }:{ backgroundColor: "black", cursor: `url(${cursorHoverLink}), auto` }} />
            )
          })
          :
          title.map((_, index)=>{
            return(
              <div onClick={()=>moveStep(index)} key={index} className="w-[8px] h-[8px] rounded-xl" style={index==step?{ backgroundColor: "#09B1F8" }:{ backgroundColor: "black", cursor: `url(${cursorHoverLink}), auto` }} />
            )
          })
        }
      </div>
    </div>
  );
}

// Inline 스타일 객체
const buttonStyle = {
  padding: '10px 50px',
  border: 'none',
  backgroundColor: '#FFAA40', // Tailwind's teal-400
  color: 'white',
  fontSize: '1em',
  outline: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  boxShadow: '0 6px #A66615', // Tailwind's teal-700
  transition: 'transform 0.2s, box-shadow 0.2s'
};

// 눌렸을 때의 스타일 변화를 적용하는 함수
const applyPressedStyle = (isPressed:any) => ({
  ...buttonStyle,
  transform: isPressed ? 'translateY(4px)' : 'translateY(0)',
  boxShadow: isPressed ? '0 2px #A66615' : '0 6px #A66615', 
  cursor: `url(${cursorHoverLink}), auto`
});

export default Tutorial;
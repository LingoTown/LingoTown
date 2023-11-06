import React from 'react';
import { useState } from "react";

const Tutorial = () => {
  const [step, setStep] = useState<number>(0);
  const [isPressed, setIsPressed] = React.useState(false);
  const [img, setImg] = useState<string[]>(["/tutorial/DirectionalKey.png", "/tutorial/SpaceBarkey.png", "/tutorial/A_key.png", "/tutorial/S_key.png", "/tutorial/D_key.png"]);
  const [title, setTile] = useState<string[]>(["방향키", "스페이스바", "Action키", "Start키", "Done키"]);
  const [statement, setStatement] = useState<string[]>(["방향키로 링고타운을 돌아다녀 보세요!", "스페이스바를 눌러 신나게 점프해볼까요?!", "A키로 링고타운 주민들에게 말을 걸어보세요!", "S키로 영상을 감상해보세요!", "D키로 영상을 종료해보세요!"]); 

  // 마우스가 버튼 위로 올라왔을 때와 떠났을 때의 이벤트 핸들러
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  const nextStep = () => {
    if(step == title.length-1) return;
    else setStep(step+1);
  }

  const moveStep = (index: number) => {
    setStep(index);
  }

  return (
    <div
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: "10px 4px 4px 1px rgba(0, 0, 0, 0.25)",
        height: "520px" 
      }}
      className="absolute z-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white max-w-[700px] w-full md:w-[700px] h-auto rounded-[20px] p-8"
    >
      <div className="font-[NPSfontBold] text-[#09B1F8] font-['ARLRDBD'] text-[13px] font-bold ml-[95%]">
        SKIP
      </div>

      {/* 이미지 */}
      <div className='w-[100%] h-[100%] max-h-[500px] flex justify-center items-center'>
        <img className="mx-auto max-w-[300px]" src={img[step]} />
      </div>

      {/* 설명 */}
      <div className="font-[NPSfontBold] text-center text-[20px] font-bold mt-10">
        {title[step]}
      </div>
      <div className="font-[NPSfontBold] text-center text-[15px] mt-5">
        {statement[step]}
      </div>

      <div className="font-[NPSfontBold] flex justify-center items-center mt-8 space-x-2">
        <button
          style={applyPressedStyle(isPressed)}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onClick={nextStep}
        >
          Next
        </button>
      </div>

      {/* next page */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        {
          title.map((_, index)=>{
            return(
              <div onClick={()=>moveStep(index)} key={index} className="w-[6px] h-[7px] rounded-xl" style={index==step?{ backgroundColor: "#09B1F8" }:{ backgroundColor: "black" }} />
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
  boxShadow: isPressed ? '0 2px #A66615' : '0 6px #A66615'
});

export default Tutorial;
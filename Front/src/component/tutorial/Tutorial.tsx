import React, { useEffect } from 'react';
import { useState } from "react";
import { tutorialAtom } from '../../atom/TutorialAtom';
import { useSetRecoilState } from 'recoil';
import Lottie from 'lottie-react';


const cursorLink = import.meta.env.VITE_S3_URL + 'MousePointer/navigation_small.png'; // 기본 
const cursorHoverLink = import.meta.env.VITE_S3_URL + 'MousePointer/navigation_hover_small.png'; //hover

const Tutorial = () => {
  const [step, setStep] = useState<number>(0);
  const [isPressed, setIsPressed] = React.useState(false);
  const img:string[] = ["", "keyboard_handling.png", `DirectionalKey.png`, `SpaceBarkey.png`, `A_key.png`, `S_key.png`, `SS_key.png`, `D_key.png`, `quest.png`, `quest_character.png`, `freeTalking.png`, `free_start.png`, `free_send.png`, `free_retry.png`, `free_end.png`, `topic.png`, `topic_select.png`, `topic_listen.png`, `topic_translate.png`, `topic_voca.png`, `topic_answer.png`, `topic_end.png`, `record.png`, `topic_record.png`, `guide.png`];
  const title:string[] = ["LingoTown", "키보드 조작편", "방향키", "스페이스바", "Ask키", "Start키", "Start Stop키", "Done키", "퀘스트편", "캐릭터 획득", "Free Talking편", "Start Talk 버튼", "Send 버튼", "Retry 버튼", "End 버튼", "Topic 대화편", "Topic 버튼", "Listen Again 버튼", "Translate 버튼", "Voca 버튼", "Start Talk 버튼", "End 버튼", "스피킹 학습편", "Mypage", "♥ Enjoy Lingo Town ♥"];
  const statement:string[] = ["", "", "방향키로 링고타운을 돌아다녀 보세요!", "스페이스바를 눌러 신나게 점프해볼까요?!", "링고타운 주민들에게 가까이 다가가 A키로 말을 걸어보세요!", "빔프로젝트가 있다면? 가까이 다가가 S키를 눌러 영상을 감상해보세요!", "S키를 2번 누르면 일시정지가 됩니다!", "어디서든 D키를 눌러 영상을 종료하실 수 있습니다!","", "퀘스트를 해결하며 NPC와 친밀도도 올리고, 새로운 캐릭터도 획득해보세요!", "", "Start Talk 버튼을 누르면 프리토킹 시작입니다!", "NPC에게 하고 싶은 말을 하고 Send 버튼을 눌러주세요!", "다시 말씀하시고 싶으시다면 Retry 버튼을 눌러주세요!", "End를 누르시면 대화가 종료됩니다!", "", "NPC별로 준비된 Topic을 선택해 대화하실 수 있습니다.", "Listen Again버튼을 눌러 NPC의 질문을 다시 들어보세요!", "NPC 말이 해석되지 않는다면? Translate 버튼을 눌러보세요!", "단어가 생각이 나지 않는다면? Voca 버튼을 눌러보세요!", "말할 답변을 생각하고, start talk 버튼을 눌러 대답해보세요!", "End버튼을 눌러 NPC와의 대화를 종료하실 수 있습니다!", "", "모든 대화 기록은 Mypage에서 확인하고 재학습 하실 수 있습니다!", "궁금한 점이 있으시다면 언제든 가이드 버튼을 눌러 확인해주세요!"]; 
  const setVisit = useSetRecoilState(tutorialAtom);
  const [animationData, setAnimationData] = useState(null);


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
    if(step == title.length-1) {
      setVisit({visit:true}); //1번 읽었다.
      return;
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
      className="absolute z-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fff]/80 max-w-[700px] w-full md:w-[700px] h-auto rounded-[20px] p-8"
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
          <img className={ step==8 || step==15? "mx-auto max-w-[200px]" : ( step==10 || step==22 || step==24? "mx-auto max-w-[250px]":(step==23?"mx-auto max-w-[300px]":(step==9 ? "mx-auto max-w-[350px]" : "mx-auto max-w-[400px]")))} src={`${import.meta.env.VITE_S3_URL}Tutorial/`+img[step]} />
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
        className="font-[NPSfontBold] flex justify-center items-center mt-6 space-x-2">
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
  transition: 'transform 0.2s, box-shadow 0.2s',
  width: '150px'
};

// 눌렸을 때의 스타일 변화를 적용하는 함수
const applyPressedStyle = (isPressed:any) => ({
  ...buttonStyle,
  transform: isPressed ? 'translateY(4px)' : 'translateY(0)',
  boxShadow: isPressed ? '0 2px #A66615' : '0 6px #A66615', 
  cursor: `url(${cursorHoverLink}), auto`
});

export default Tutorial;
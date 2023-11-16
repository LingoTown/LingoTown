import React, { useEffect, useState } from 'react';
import { tutorialAtom } from '../../atom/TutorialAtom';
import { useSetRecoilState } from 'recoil';
import Lottie from 'lottie-react';


const cursorLink = import.meta.env.VITE_S3_URL + 'MousePointer/navigation_small.png'; // 기본 
const cursorHoverLink = import.meta.env.VITE_S3_URL + 'MousePointer/navigation_hover_small.png'; //hover

const Tutorial: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [isPressed, setIsPressed] = React.useState(false);
  const img:string[] = ["", "Tutorial/keyboard_handling.png", `Tutorial/DirectionalKey.png`, `Tutorial/SpaceBarkey.png`, `Tutorial/A_key.png`, `Tutorial/S_key.png`, `Tutorial/SS_key.png`, `Tutorial/D_key.png`, `Tutorial/quest.png`, `Tutorial/quest_character.png`, `Tutorial/freeTalking.png`, `Tutorial/free_start.png`, `Tutorial/free_send.png`, `Tutorial/free_retry.png`, `Objects/free_history.png`, `Tutorial/free_end.png`, `Tutorial/topic.png`, `Tutorial/topic_select.png`, `Tutorial/topic_listen.png`, `Tutorial/topic_translate.png`, `Objects/topic_voca.png`, `Tutorial/topic_answer.png`, `Tutorial/topic_end.png`, `Tutorial/record.png`, `Tutorial/topic_record.png`, `Tutorial/guide.png`];
  const title:string[] = ["LingoTown", "키보드 조작편", "방향키", "스페이스바", "Ask키", "Start키", "Start Stop키", "Done키", "퀘스트편", "캐릭터 획득", "프리토킹편", "Start Talk 버튼", "Send 버튼", "Retry 버튼", "History 버튼", "End 버튼", "Topic 대화편", "Topic 버튼", "Listen Again 버튼", "Translate 버튼", "Help 버튼", "Start Talk 버튼", "End 버튼", "스피킹 학습편", "Mypage", "♥ Enjoy Lingo Town ♥"];
  const statement:string[] = ["", "", "방향키로 링고타운을 돌아다녀 보세요!", "스페이스바를 눌러 신나게 점프해볼까요?!", "링고타운 주민들에게 가까이 다가가 A키로 말을 걸어보세요!", "빔프로젝트가 있다면? 가까이 다가가 S키를 눌러 영상을 감상해보세요!", "S키를 2번 누르면 일시정지가 됩니다!", "어디서든 D키를 눌러 영상을 종료하실 수 있습니다!","", "퀘스트를 해결하며 NPC와 친밀도도 올리고, 새로운 캐릭터도 획득해보세요!", "", "Start Talk 버튼을 누르면 프리토킹 시작입니다!", "NPC에게 하고 싶은 말을 하고 Send 버튼을 눌러주세요!", "다시 말씀하시고 싶으시다면 Retry 버튼을 눌러주세요!", "History 버튼을 눌러 대화 내역을 확인하세요!", "End를 누르시면 대화가 종료됩니다!", "", "NPC별로 준비된 Topic을 선택해 대화하실 수 있습니다.", "Listen Again버튼을 눌러 NPC의 질문을 다시 들어보세요!", "NPC 말이 해석되지 않는다면? Translate 버튼을 눌러보세요!", "단어가 생각이 나지 않는다면? Help 버튼을 눌러보세요!", "말할 답변을 생각하고, start talk 버튼을 눌러 대답해보세요!", "End버튼을 눌러 NPC와의 대화를 종료하실 수 있습니다!", "", "모든 대화 기록은 Mypage에서 확인하고 재학습 하실 수 있습니다!", "궁금한 점이 있으시다면 언제든 가이드 버튼을 눌러 확인해주세요!"]; 
  const chapter:string[] = ["키보드 조작편", "퀘스트편", "프리토킹편", "Topic 대화편", "스피킹 학습편"];
  const setVisit = useSetRecoilState(tutorialAtom);
  const [animationData, setAnimationData] = useState(null);

  // 이미지 상태 관리
  const [imageLeftSrc, setImageLeftSrc] = useState('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Button/left_btn.png');
  const [imageRightSrc, setImageRightSrc] = useState('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Button/right_btn.png');

  // 마우스 호버 이벤트 핸들러
  const onMouseOverLeft = () => setImageLeftSrc('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Button/left_btn_hover.png');
  const onMouseOutLeft = () => setImageLeftSrc('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Button/left_btn.png');
  const onMouseOverRight = () => setImageRightSrc('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Button/right_btn_hover.png');
  const onMouseOutRight = () => setImageRightSrc('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Button/right_btn.png');


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

  const prevStep = () => {
    if(step == 0) {
      return;
    }
    setStep(step-1);
  }

  const closeStep = () => {
    setVisit({visit:true}); //1번 읽었다.
  }
  const nextChapter = (idx:number) => {
    if(idx==0) setStep(1);
    if(idx==1) setStep(8);
    if(idx==2) setStep(10);
    if(idx==3) setStep(16);
    if(idx==4) setStep(23);
  }
  
  function getClassForStep(step: number): string {
    if ([8, 16, 23].includes(step)) {
      return "mx-auto max-w-[200px]";
    } else if ([10, 14, 25].includes(step)) {
      return "mx-auto max-w-[250px]";
    } else if (step === 24) {
      return "mx-auto max-w-[300px]";
    } else if (step === 9) {
      return "mx-auto max-w-[350px]";
    } else {
      return "mx-auto max-w-[400px]";
    }
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

    {/* 챕터 */}
    <div className='flex items-center h-[100px]'>
      {
        chapter.map((title, idx)=>{
          return(
            <div 
              key={idx}
              style={{ cursor: `url(${cursorLink}), auto` }} 
              className="w-[100px] h-[11px] bg-[#FFAA40] font-[NPSfontBold] flex justify-center items-center mr-2 ml-2">
              <button
                className='hover:text-gray-600/50'
                style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }} 
                onClick={()=>nextChapter(idx)}>
                {title}
              </button>
            </div>
          )
        })
      }
    </div>

      {/* 왼 / 이미지 / 오 */}
      <div  className='flex w-[100%] h-[100%] max-h-[350px]'>
        {/* 왼 */}
        <div
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
            className={step==0?'invisible':'flex justify-center items-center'}>
            <img
                className='w-[70%]'
                src={imageLeftSrc}
                onMouseOver={onMouseOverLeft}
                onMouseOut={onMouseOutLeft}
                onClick={prevStep}
                alt="Button"
            />
        </div>

        {/* 이미지 */}
        <div className='w-[100%] h-[100%] flex justify-center items-center'>
          {
            step===0?
            <Lottie className="mx-auto max-w-[270px]" animationData={animationData} />
            :
            <img className={getClassForStep(step)} src={`${import.meta.env.VITE_S3_URL}${img[step]}`}/>          }
        </div>

        {/* 오 */}
        <div
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
            className={step==title.length-1?'invisible':'flex justify-center items-center'}>
            <img
                className='w-[70%]'
                src={imageRightSrc}
                onMouseOver={onMouseOverRight}
                onMouseOut={onMouseOutRight}
                onClick={nextStep}
                alt="Button"
            />
        </div>

      </div>


      {/* 타이틀 */}
      <div className="font-[NPSfontBold] text-center text-[20px] font-bold mt-10 h-[30px]">
        {title[step]}
      </div>

      {/* 설명 */}
      <div className="font-[NPSfontBold] text-center text-[15px] mt-5 h-[100px]">
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
        className="font-[NPSfontBold] flex justify-center items-center h-[100px]">
          <button
            style={applyPressedStyle(isPressed)}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onClick={closeStep}
          >
            CLOSE
          </button>
      </div>
    </div>
  );
}

// Inline 스타일 객체
const buttonStyle = {
  padding: '5px 10px',
  border: 'none',
  backgroundColor: '#FFAA40', // Tailwind's teal-400
  color: 'white',
  fontSize: '12px',
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
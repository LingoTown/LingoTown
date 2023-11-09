import React from 'react';
import { useNavigate } from 'react-router-dom';
const cursorLink = import.meta.env.VITE_S3_URL + 'MousePointer/navigation_small.png'; // 기본 
const cursorHoverLink = import.meta.env.VITE_S3_URL + 'MousePointer/navigation_hover_small.png'; //hover

export const CancelButtonComp = () => {

  const [isPressed, setIsPressed] = React.useState(false);

  // hook
  const navigate = useNavigate();

  // 마우스가 버튼 위로 올라왔을 때와 떠났을 때의 이벤트 핸들러
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  return (
    <div 
      style={{ cursor: `url(${cursorLink}), auto` }} 
      className="fixed inset-0 z-20 flex justify-end items-end mr-[220px] mb-10 font-[NPSfontBold] select-none">
      <button
        className="w-[150px]"
        style={applyPressedStyle(isPressed)}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onClick={() => navigate("/departure")}
      >
        Back
      </button>
    </div>
  );
}

// Inline 스타일 객체
const buttonStyle = {
  padding: '10px 50px',
  border: 'none',
  backgroundColor: '#BDA4D5', // Tailwind's teal-400
  color: 'white',
  fontSize: '1em',
  outline: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  boxShadow: '0 6px #7E587E', // Tailwind's teal-700
  transition: 'transform 0.2s, box-shadow 0.2s'
};

// 눌렸을 때의 스타일 변화를 적용하는 함수
const applyPressedStyle = (isPressed:boolean) => ({
  ...buttonStyle,
  transform: isPressed ? 'translateY(4px)' : 'translateY(0)',
  boxShadow: isPressed ? '0 2px #7E587E' : '0 6px #7E587E', 
  cursor: `url(${cursorHoverLink}), auto`
});
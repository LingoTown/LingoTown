import React from 'react';
import { useNavigate } from 'react-router-dom';
const cursorLink = import.meta.env.VITE_S3_URL + 'MousePointer/navigation_small.png'; // 기본 
const cursorHoverLink = import.meta.env.VITE_S3_URL + 'MousePointer/navigation_hover_small.png'; //hover
import { useRecoilState } from 'recoil';
import { userAtom } from '../../atom/UserAtom';
import { PlayerSelectAtom } from "../../atom/PlayerSelectAtom";
import { UpdateSelectedCharacter } from "../../type/UserType";
import { CharacterResponseType } from "../../type/CharacterType";
import { updateCharacter } from "../../api/User"

export const SelectButtonComp = () => {

  const [isPressed, setIsPressed] = React.useState(false);

  // hook
  const navigate = useNavigate();

  // 마우스가 버튼 위로 올라왔을 때와 떠났을 때의 이벤트 핸들러
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  /* User Info */
  const [user, setUser] = useRecoilState(userAtom);
  const [selectPlayer, setSelectPlayer] = useRecoilState(PlayerSelectAtom);

  /* 대표 캐릭터 수정 */
  const handleCharacterSelect = async (clickedCharacterIndex: number) => {

      if (user.lockList[clickedCharacterIndex].islocked === true) 
          return;
      
      const payload: UpdateSelectedCharacter = {
          previousId: user.characterId,
          nowId: clickedCharacterIndex + 1
      };

      setSelectPlayer({index:clickedCharacterIndex, change:true});

      await updateCharacter(payload, ({data}) => {
          const result = data.data as CharacterResponseType;

          setUser(prev => ({
              ...prev, 
              characterId: result.characterId,
              characterGender: result.characterGender,
              characterLink: result.characterLink
          }))
      }, 
      (error) => {
          console.log(error);
      });
      navigate("/departure");
  };

  return (
    <div 
      style={{ cursor: `url(${cursorLink}), auto` }} 
      className="fixed inset-0 z-20 flex justify-end items-end mr-10 mb-10 font-[NPSfontBold] select-none">
      <button
        className="w-[150px]"
        style={applyPressedStyle(isPressed)}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleCharacterSelect(selectPlayer.index)}
      >
        Choice
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
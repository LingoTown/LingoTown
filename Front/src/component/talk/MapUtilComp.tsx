import { useNavigate } from 'react-router-dom';
import { useCustomAlert, useCustomConfirm, useCustomPrompt } from "../util/ModalUtil"
import { talkBalloonAtom } from '../../atom/TalkBalloonAtom';
import { useSetRecoilState } from 'recoil';


export const MapUtilComp = () => {

  const customAlert = useCustomAlert();
  const customConfirm = useCustomConfirm();
  const customPrompt = useCustomPrompt();
  const navigate = useNavigate();
  const setTalkBalloon = useSetRecoilState(talkBalloonAtom);

  const exit = async() => {
    setTalkBalloon(prevState => ({...prevState, isMove: false}));
    const flag = await customConfirm("Notice", "테마에서 떠나시겠습니까?");
    setTalkBalloon(prevState => ({...prevState, isMove: true}));
    if (flag) {
      navigate("/");
    } 
  }

  return(
    <>
      <div className="absolute top-0 right-0 z-10 flex flex-col space-y-2 mr-2 mt-3">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          onClick={ exit }
        >나가기
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          onClick={ () => customAlert("토끼", "토끼와 대화를 시작하시겠습니까?")}
        >설정</button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
          onClick={() => customPrompt("닉네임 변경", "변경할 닉네임을 입력해 주세요")}
        >정보</button>
      </div>
    </>
  )
}
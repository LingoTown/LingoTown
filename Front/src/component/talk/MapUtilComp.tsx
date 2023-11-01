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
      <div className="absolute top-0 left-0 z-10 mt-2 ml-2">
        <button 
          className="px-4 py-2 bg-gray-800 text-white text-lg rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 font-['passero-one']"
          onClick={ exit }
        >Back To Main</button>
      </div>
      <div className="absolute top-0 right-0 z-10 flex flex-col space-y-2 mr-1.5 mt-2">
        <button
          className="px-4 py-2 bg-gray-500 text-white text-lg rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 font-['passero-one']"
          onClick={ () => customAlert("Setting", "설정창 구현 중입니다.")}
        >Setting</button>
        <button 
          className="px-4 py-2 bg-gray-500 text-white text-lg rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 font-['passero-one']"
          onClick={() => customPrompt("Info", "해당 테마의 정보를 확인 할 수 있습니다.")}
        >Info</button>
      </div>
    </>
  )
}
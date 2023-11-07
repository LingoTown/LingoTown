import { useNavigate } from 'react-router-dom';
import { useCustomConfirm, useCustomPrompt } from "../util/ModalUtil"
import { talkBalloonAtom } from '../../atom/TalkBalloonAtom';
import { useSetRecoilState } from 'recoil';

export const SYMapUtilComp = () => {

  // hook
  const customConfirm = useCustomConfirm();
  const customPrompt = useCustomPrompt();
  const navigate = useNavigate();

  // state
  const setTalkBalloon = useSetRecoilState(talkBalloonAtom);

  const exitPage = async() => {
    setTalkBalloon(prevState => ({ ...prevState, isMove: false }));
    const flag = await customConfirm("Notice", "Would you like to leave the theme?");
    setTalkBalloon(prevState => ({ ...prevState, isMove: true }));
    if (flag) {
      navigate("/departure");
    }
  }

  const modalOn = () => { setTalkBalloon(prevState => ({...prevState, isModal: true})) }
  const modalOff = () => { setTalkBalloon(prevState => ({...prevState, isModal: false})) }
  
  return(
    <>
      <div className='justify-center flex'>
        <div className="absolute top-0 left-0 z-10 mt-2 ml-2">
          <button
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
            className="px-4 py-2 bg-gray-800 text-white text-lg rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 font-['passero-one']"
            onClick={ exitPage } onMouseOver={ modalOn } onMouseOut={ modalOff }
          >Back To Main</button>
        </div>
      </div>
    </>
  )
}
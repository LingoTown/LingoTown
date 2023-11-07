import { useNavigate, useLocation } from 'react-router-dom';
import { useCustomConfirm, useCustomAlert } from "../util/ModalUtil"
import { talkBalloonAtom } from '../../atom/TalkBalloonAtom';
import { useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { getQuizList } from '../../api/Quiz';
import { QuizType } from '../../type/QuizType';
import { QuizComp } from './QuizComp';
import { tutorialAtom } from '../../atom/TutorialAtom';

export const MapUtilComp = () => {

  // hook 
  const customAlert = useCustomAlert();
  const customConfirm = useCustomConfirm();
  const navigate = useNavigate();

  // param check
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const lang = queryParams.get('language');
  const world = queryParams.get('world');

  // state
  const setTalkBalloon = useSetRecoilState(talkBalloonAtom);
  const setTutorialOpen = useSetRecoilState(tutorialAtom);
  const [isOpenQuizModal, setIsOpenQuizModal] = useState<boolean>(false);
  const [quizList, setQuizList] = useState<QuizType[]>([]);
  const [quizLender, setQuizLender] = useState<boolean>(true);
  const [translateList, setTranslateList] = useState<boolean[]>([]);

  // API
  const doGetQuizList = async() => {
    await getQuizList(world, ({data}) => {
      const result = data.data as QuizType[];
      setQuizList([...result]);
      setTranslateList(new Array(result.length).fill(0));
    },() => {
      navigate("/departure");
      customAlert("Notice", "올바르지 않은 접근입니다.");
    });
  }

  // validation check
  useEffect(() => {
    if (lang == null || world == null) {  
      navigate("/departure");
      customAlert("Notice", "올바르지 않은 접근입니다.");
    }
  }, [])

  // API call
  useEffect(() => {
    doGetQuizList();
  }, [quizLender])

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
        <QuizComp
          quizList={quizList}
          isOpenQuizModal={isOpenQuizModal}
          setQuizLender={setQuizLender}
          setIsOpenQuizModal={setIsOpenQuizModal}
          translateList={translateList}
          setTranslateList={setTranslateList}
        />
        <div className="absolute top-0 right-0 z-10 flex flex-col space-y-2 mr-1.5 mt-2">
          <button
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
            className="px-4 py-2 bg-gray-800 text-white text-lg rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 font-['passero-one']"
            onClick={() => {setTutorialOpen({visit: false})}}
          >Guide</button>
        </div>
        <div className="absolute top-14 right-0 z-10 flex flex-col space-y-2 mr-1.5 mt-1">
          <button 
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
            className="px-4 py-2 bg-[#95E5F9] text-[#000] text-lg rounded hover:bg-[#B1EFFF] font-['passero-one']"
            onClick={() => {setIsOpenQuizModal(!isOpenQuizModal)}}
          >Quiz</button>
        </div>
      </div>
    </>
  )
}
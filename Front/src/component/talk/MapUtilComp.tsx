import { useNavigate, useLocation } from 'react-router-dom';
import { useCustomConfirm, useCustomAlert } from "../util/ModalUtil"
import { talkBalloonAtom } from '../../atom/TalkBalloonAtom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getQuizListByWorld } from '../../api/Quiz';
import { QuizType } from '../../type/QuizType';
import { QuizComp } from './QuizComp';
import { tutorialAtom } from '../../atom/TutorialAtom';
import { loadingAtom } from '../../atom/LoadingAtom';
import '../../index.css'

interface MapUtilProps {
  isSolved: boolean | false;
  setSolved: Dispatch<SetStateAction<boolean>>;
}

export const MapUtilComp: React.FC<MapUtilProps> = ({ isSolved, setSolved }) => {

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
  const [totalQuizAmount, setTotalQuizAmount] = useState<number>(0);
  const [solvedQuizAmount, setSolvedQuizAmount] = useState<number>(0);
  const [quizLender, setQuizLender] = useState<boolean>(true);
  const [translateList, setTranslateList] = useState<boolean[]>([]);
  const [loading, setLoading] = useRecoilState(loadingAtom);

  // API
  const doGetQuizList = async() => {
    await getQuizListByWorld(world, ({data}) => {
      const result = data.data as QuizType[];
      setQuizList([...result]);
      if (quizList.length == 0)
        setTranslateList(new Array(result.length).fill(0));
    },() => {
      navigate("/departure");
      customAlert("Notice", "올바르지 않은 접근입니다.");
    });
  }

  // API
  const getTotalQuizAmount = async() => {
    await getQuizListByWorld(world, ({data}) => {
      const result = data.data as QuizType[];
      setTotalQuizAmount([...result].length);
    },() => {
      navigate("/departure");
      customAlert("Notice", "올바르지 않은 접근입니다.");
    });
  }

  // API
  const getSolvedQuizAmount = async() => {
    await getQuizListByWorld(world, ({data}) => {
      const result = data.data as QuizType[];
      
      const solvedQuiz = result.filter((quiz) => quiz.solved.toString() === "true");
      
      setSolvedQuizAmount(solvedQuiz.length);
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

  useEffect(() => {
    getTotalQuizAmount();
  }, [])

  useEffect(() => {
    getSolvedQuizAmount();
  }, [solvedQuizAmount, isSolved])

  // API call
  useEffect(() => {
    doGetQuizList();
  }, [quizLender])

  const exitPage = async() => {
    setTalkBalloon(prevState => ({ ...prevState, isMove: false }));
    setTalkBalloon(prevState => ({...prevState, isModal: true}))
    const flag = await customConfirm("Notice", "정말로 테마를 나가시겠어요?");
    setTalkBalloon(prevState => ({ ...prevState, isMove: true }));
    setTalkBalloon(prevState => ({...prevState, isModal: false}))
    if (flag) {
      if(!loading.loading) setLoading({loading:true});
      navigate(`/theme?language=${lang}`);
    }
  }

  const openQuestModal = () => {
    setTalkBalloon(prevState => ({...prevState, isModal: true}))
    setTalkBalloon(prevState => ({...prevState, isMove: false}))
    setIsOpenQuizModal(!isOpenQuizModal)
  }

  return(
    <>
      <div style={{zIndex:"1"}} className='justify-center flex'>
        <div className="absolute top-0 left-0 mt-2 ml-2">
          <button
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto`, fontFamily: "GabiaSolmee", letterSpacing: '-0.1rem' }}
            className="px-4 py-2 bg-gray-800 text-white text-lg rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50"
            onClick={ exitPage }
          >테마 선택</button>
        </div>
        <div className="absolute top-14 left-0 mt-2 ml-2">
          <button
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto`, fontFamily: "GabiaSolmee", letterSpacing: '-0.1rem' }}
            className="px-4 py-2 bg-white bg-white-opacity text-lg rounded"
          >퀘스트 : {solvedQuizAmount} / {totalQuizAmount}</button>
        </div>
        <QuizComp
          quizList={quizList}
          isOpenQuizModal={isOpenQuizModal}
          setQuizLender={setQuizLender}
          setIsOpenQuizModal={setIsOpenQuizModal}
          translateList={translateList}
          setTranslateList={setTranslateList}
          isSolved={isSolved}
          setSolved={setSolved}
        />
        <div className="absolute top-0 right-0 flex flex-col space-y-2 mr-1.5 mt-2">
          <button
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto`, fontFamily: "GabiaSolmee", letterSpacing: '-0.1rem' }}
            className="px-4 py-2 bg-gray-800 text-white text-lg rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50"
            onClick={() => {setTutorialOpen({visit: false})}}
          >가이드</button>
        </div>
        <div 
          className="absolute top-14 right-0 flex flex-col space-y-2 mr-1.5 mt-1">
          <button 
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto`, fontFamily: "GabiaSolmee", letterSpacing: '-0.1rem' }}
            className="px-4 py-2 bg-[#95E5F9] text-[#000] text-lg rounded hover:bg-[#B1EFFF]"
            onClick={ openQuestModal }
          >퀘스트</button>
        </div>
      </div>
    </>
  )
}
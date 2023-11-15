import React, { useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { TalkBalloonComp } from "../component/talk/TalkBalloonComp";
import { talkBalloonAtom } from "../atom/TalkBalloonAtom"
import { loadingAtom } from "../atom/LoadingAtom";
import { useRecoilState, useRecoilValue } from "recoil"
import { MapUtilComp } from "../component/talk/MapUtilComp";
import { Physics, Debug } from '@react-three/cannon';
import LoadingPage from "./LoadingPage";
import Tutorial from "../component/tutorial/Tutorial";
import { tutorialAtom } from "../atom/TutorialAtom";
import toast, { Toaster } from 'react-hot-toast';
import { talkStateAtom } from '../atom/TalkStateAtom';
import { OrbitControls } from '@react-three/drei';

interface CanvasPage {
  theme: JSX.Element;
}


export const CanvasPage: React.FC<CanvasPage> = (props: CanvasPage): JSX.Element => {
  const loading = useRecoilValue(loadingAtom);
  const talkBalloon = useRecoilValue(talkBalloonAtom);
  const tutorialRead = useRecoilValue(tutorialAtom);
  let visited = localStorage.getItem('tutorialAtom')!=null?JSON.parse(localStorage.getItem('tutorialAtom')!):null;
  const [talkState, setTalkState] = useRecoilState(talkStateAtom);
  const [isSolved, setSolved] = useState<boolean>(false);

  useEffect(()=>{
    visited = localStorage.getItem('tutorialAtom')!=null?JSON.parse(localStorage.getItem('tutorialAtom')!):null;
  },[tutorialRead.visit])

  useEffect(() => {
    if (talkState.isToast) {
      showToaster("마이페이지에서 대화를 확인할 수 있습니다.", "✏️")
      setTalkState(prevState => ({ ...prevState, isToast: false }));
    }
  }, [talkState.isToast])

  const showToaster = (sentence:string, emoji:string) => {
    toast(sentence, {
      duration: 2000,
      icon: emoji,
      style: { fontSize: "18px", fontFamily:"GabiaSolmee" },
      iconTheme: { primary: '#000', secondary: '#fff' },
      ariaProps: { role: 'status', 'aria-live': 'polite' },
    });
  }

  return(
    <>
      <Toaster position="top-center" />
      {
        (!loading.loading && (visited == null && !tutorialRead.visit)) || (!loading.loading && !tutorialRead.visit)?
          <div
          style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_small.png'), auto` }} 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-10">
            <Tutorial/>
          </div>
          :null
      }
      {
        loading.loading? <LoadingPage/> : null
      }
      {
        loading.loading || talkBalloon.isShow?
        null
        :
        <MapUtilComp isSolved={isSolved} setSolved={setSolved} />
      }
      <Canvas 
        style={{ zIndex:"-1", height:loading.loading?"0.01vh":"100vh", cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_small.png'), auto`}}>
        <Physics defaultContactMaterial={{ friction: 0, restitution: 1 }} gravity={[0, -9.81, 0]}>
          <Debug scale={1} color='red'>
            <OrbitControls/>
            {props.theme}
          </Debug>
        </Physics>
      </Canvas>

      { talkBalloon.isShow?<TalkBalloonComp />:null }
    </>
  )
}

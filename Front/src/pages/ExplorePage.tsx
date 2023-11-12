import React, { useEffect, useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import { ExploreBtn } from "../component/explore/ExploreBtn";
import { Physics } from '@react-three/cannon';
import { loadingAtom } from "../atom/LoadingAtom";
import { talkBalloonAtom } from "../atom/TalkBalloonAtom"
import { useRecoilValue } from "recoil"
import { tutorialAtom } from "../atom/TutorialAtom";
import LoadingPage from "./LoadingPage";
import Tutorial from "../component/tutorial/Tutorial";
import toast, { Toaster } from 'react-hot-toast';

interface ExplorePage {
  theme: JSX.Element;
}

export const ExplorePage: React.FC<ExplorePage> = (props: ExplorePage): JSX.Element => {

  const loading = useRecoilValue(loadingAtom);
  const talkBalloon = useRecoilValue(talkBalloonAtom);
  const tutorialRead = useRecoilValue(tutorialAtom);
  let visited = localStorage.getItem('tutorialAtom')!=null?JSON.parse(localStorage.getItem('tutorialAtom')!):null;
  const isMounted = useRef(false);

  useEffect(()=>{
    visited = localStorage.getItem('tutorialAtom')!=null?JSON.parse(localStorage.getItem('tutorialAtom')!):null;
  },[tutorialRead.visit])

  useEffect(() => {
    if (isMounted.current) {
      showToaster();
    } else{
      isMounted.current = true;
    }
  }, [talkBalloon.isUser])

  const showToaster = () => {
    const sentence = "로그인 후 이용가능합니다.";
    const emoji = "🌍";
    toast(sentence, {
      duration: 2000,
      icon: emoji,
      style: { fontSize: "14px" },
      iconTheme: { primary: '#000', secondary: '#fff' },
      ariaProps: { role: 'status', 'aria-live': 'polite' },
    });
  }

  return(
    <>
      <Toaster position="top-center" />
      {
        (!loading.loading && (visited == null && !tutorialRead.visit)) || (!loading.loading && !tutorialRead.visit)?
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-10">
          <Tutorial/>
        </div>
        :null
      }
      { loading.loading? <LoadingPage/> : null }
      { loading.loading || talkBalloon.isShow? null : <ExploreBtn />}
      <Canvas style={{ height:loading.loading?"0.01vh":"100vh" }}>
        <Physics defaultContactMaterial={{ friction: 0, restitution: 1 }} gravity={[0, -9.81, 0]}>
          {props.theme}
        </Physics>
      </Canvas>
    </>
  )
}

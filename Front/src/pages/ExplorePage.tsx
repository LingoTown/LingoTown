import React, { useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { ExploreBtn } from "../component/explore/ExploreBtn";
import { Physics } from '@react-three/cannon';
import { loadingAtom } from "../atom/LoadingAtom";
import { talkBalloonAtom } from "../atom/TalkBalloonAtom"
import { useRecoilValue } from "recoil"
import { tutorialAtom } from "../atom/TutorialAtom";
import LoadingPage from "./LoadingPage";
import Tutorial from "../component/tutorial/Tutorial";

interface ExplorePage {
  theme: JSX.Element;
}

export const ExplorePage: React.FC<ExplorePage> = (props: ExplorePage): JSX.Element => {

  const loading = useRecoilValue(loadingAtom);
  const talkBalloon = useRecoilValue(talkBalloonAtom);
  const tutorialRead = useRecoilValue(tutorialAtom);
  let visited = localStorage.getItem('tutorialAtom')!=null?JSON.parse(localStorage.getItem('tutorialAtom')!):null;

  useEffect(()=>{
    visited = localStorage.getItem('tutorialAtom')!=null?JSON.parse(localStorage.getItem('tutorialAtom')!):null;
  },[tutorialRead.visit])


  return(
    <>
      {
        (!loading.loading && (visited == null && !tutorialRead.visit)) || (!loading.loading && !tutorialRead.visit)?<Tutorial/>:null
      }
      { loading.loading? <LoadingPage/> : null }
      { loading.loading || talkBalloon.isShow? null : <ExploreBtn />}
      <Canvas style={{ height:"100vh" }}>
        <Physics defaultContactMaterial={{ friction: 0, restitution: 1 }} gravity={[0, -9.81, 0]}>
          {props.theme}
        </Physics>
      </Canvas>
    </>
  )
}

import { Canvas } from "@react-three/fiber";
import { TalkBalloonComp } from "../component/talk/TalkBalloonComp";
import { talkBalloonAtom } from "../atom/TalkBalloonAtom"
import { loadingAtom } from "../atom/LoadingAtom";
import { useRecoilValue } from "recoil"
import { MapUtilComp } from "../component/talk/MapUtilComp";
import { Physics } from '@react-three/cannon';
import LoadingPage from "./LoadingPage";
// import { Debug } from '@react-three/cannon';
// import { OrbitControls } from "@react-three/drei";

interface CanvasPage {
  theme: JSX.Element;
}


export const CanvasPage: React.FC<CanvasPage> = (props: CanvasPage): JSX.Element => {
  const loading = useRecoilValue(loadingAtom);
  const talkBalloon = useRecoilValue(talkBalloonAtom);

  return(
    <>
      {
        loading.loading? <LoadingPage/> : null
      }
      {
        loading.loading || talkBalloon.isShow?
        null
        :
        <MapUtilComp />
      }
      <Canvas style={{ height:loading.loading?"0.01vh":"100vh", cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_small.png'), auto`}}>
        <Physics defaultContactMaterial={{ friction: 0, restitution: 1 }} gravity={[0, -9.81, 0]}>
          {/* <Debug scale={1} color='red'> */}
          {/* <OrbitControls/> */}
            {props.theme}
          {/* </Debug> */}
        </Physics>
      </Canvas>

      { talkBalloon.isShow?<TalkBalloonComp />:null }
    </>
  )
}

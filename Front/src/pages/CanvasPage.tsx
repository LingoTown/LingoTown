import { Canvas } from "@react-three/fiber";
import { TalkBalloonComp } from "../component/talk/TalkBalloonComp";
import { talkBalloonAtom } from "../atom/TalkBalloonAtom"
import { useRecoilValue } from "recoil"
import { MapUtilComp } from "../component/talk/MapUtilComp";
import { Physics, Debug } from '@react-three/cannon';
// import { OrbitControls } from "@react-three/drei";

interface CanvasPage {
  theme: JSX.Element;
}


export const CanvasPage: React.FC<CanvasPage> = (props: CanvasPage): JSX.Element => {
  const talkBalloon = useRecoilValue(talkBalloonAtom);
  return(
    <>
    {
      talkBalloon.isShow?
      null
      :
      <MapUtilComp />
    }
      <Canvas style={{ height:"100vh" }}>
        {/* <OrbitControls /> */}

        <Physics defaultContactMaterial={{ friction: 0, restitution: 1 }} gravity={[0, -9.81, 0]}>
          <Debug scale={1} color='green'>
            {props.theme}
          </Debug>
        </Physics>
      </Canvas>
      { talkBalloon.isShow?<TalkBalloonComp />:null }
    </>
  )
}

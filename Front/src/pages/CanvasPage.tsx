import { Canvas } from "@react-three/fiber";
import { TalkBalloonComp } from "../component/talk/TalkBalloonComp";
import { talkBalloonAtom } from "../atom/TalkBalloonAtom"
import { useRecoilValue } from "recoil"
import { MapUtilComp } from "../component/talk/MapUtilComp";

interface CanvasPage {
  theme: JSX.Element;
}


export const CanvasPage: React.FC<CanvasPage> = (props: CanvasPage): JSX.Element => {
  const talkBalloon = useRecoilValue(talkBalloonAtom);
  return(
    <>
      <MapUtilComp />
      <Canvas style={{ height:"100vh" }}>
        {props.theme}
      </Canvas>
      { talkBalloon.isShow?<TalkBalloonComp />:null }
    </>
  )
}

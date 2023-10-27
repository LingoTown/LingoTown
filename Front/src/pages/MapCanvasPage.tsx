import { Canvas } from "@react-three/fiber";
import { TalkBalloonComp } from "../component/town/TalkBalloonComp";
import { talkBalloonAtom } from "../atom/TalkBalloonAtom"
import { useRecoilValue } from "recoil"
import { MapUtilComp } from "../component/town/MapUtilComp";


export const ThreeDemensionCanvas = (props:any) => {

  const talkBalloon = useRecoilValue(talkBalloonAtom);

  return(
    <>
      <MapUtilComp />
      <Canvas style={{ height:"100vh" }}>
        {props.customComponent}       
      </Canvas>
      {
        talkBalloon.isShow?
        <TalkBalloonComp />
        :
        null
      }
    </>
  )
}

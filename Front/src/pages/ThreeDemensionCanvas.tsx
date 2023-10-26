import {useState} from 'react';
import { Canvas } from "@react-three/fiber";
import { BasketBallCourtTheme } from "../component/place/BasketBallCourtTheme";
import { ParkTheme } from '../component/place/ParkTheme';

export const ThreeDemensionCanvas = () => {

  const [place, setPlace] = useState<number>(2);//유저가 선택한 맵이 recoil에 저장되고 불러와야 함

  return(
    <>
      <Canvas style={{
        height:"100vh"
      }}>
        {
          place===1?<BasketBallCourtTheme/>:(
            place===2?<ParkTheme/>:null
          )
        }
      </Canvas>
    </>
  )
}

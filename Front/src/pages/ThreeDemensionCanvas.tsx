import {useState} from 'react';
import { Canvas } from "@react-three/fiber";
import { BasketBallCourtTheme } from "../component/place/BasketBallCourtTheme";
import { ParkTheme } from '../component/place/ParkTheme';
import {BarTheme} from '../component/place/BarTheme';
import { EventHallTheme } from '../component/place/EventHallTheme';
import { StreetCarTheme } from '../component/place/StreetCarTheme';
import { SchoolTheme } from '../component/place/SchoolTheme';

export const ThreeDemensionCanvas = () => {

  const [place, setPlace] = useState<number>(6);//유저가 선택한 맵이 recoil에 저장되고 불러와야 함

  return(
    <>
      <Canvas style={{
        height:"100vh"
      }}> 
        {
          place===1?<BasketBallCourtTheme/>:(
            place===2?<ParkTheme/>:(
              place===3?<BarTheme/>:(
                place===4?<EventHallTheme/>:(
                  place===5?<StreetCarTheme/>:(
                    place===6?<SchoolTheme/>:null
                  )
                )
              )
            )
          )
        }
      </Canvas>
    </>
  )
}

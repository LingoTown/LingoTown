import {useState} from 'react';
import { Canvas } from "@react-three/fiber";
import { BasketBallCourtTheme } from "../component/place/BasketBallCourtTheme";
import { ParkTheme } from '../component/place/ParkTheme';
import {BarTheme} from '../component/place/BarTheme';
import { EventHallTheme } from '../component/place/EventHallTheme';
import { StreetCarTheme } from '../component/place/StreetCarTheme';
import { SchoolTheme } from '../component/place/SchoolTheme';
import { HouseTheme } from '../component/place/HouseTheme';
import { ChurchTheme } from '../component/place/ChurchTheme';

export const ThreeDemensionCanvas = () => {

  const [place, setPlace] = useState<number>(8);//유저가 선택한 맵이 recoil에 저장되고 불러와야 함

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
                    place===6?<SchoolTheme/>:(
                      place===7?<HouseTheme/>:(
                        place===8?<ChurchTheme/>:null
                      )
                    )
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

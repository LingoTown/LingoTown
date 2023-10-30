import {useState,Suspense} from 'react';
import { Canvas } from "@react-three/fiber";
import { BasketBallCourtTheme } from "../component/place/BasketBallCourtTheme";
import { ParkTheme } from '../component/place/ParkTheme';
import {BarTheme} from '../component/place/BarTheme';
import { EventHallTheme } from '../component/place/EventHallTheme';
import { StreetCarTheme } from '../component/place/StreetCarTheme';
import { SchoolTheme } from '../component/place/SchoolTheme';
import { HouseTheme } from '../component/place/HouseTheme';
import { ChurchTheme } from '../component/place/ChurchTheme';
import { BusStopTheme } from '../component/place/BusStopTheme';
import { ConvenienceStoreTheme } from '../component/place/ConvenienceStoreTheme';
import { Physics, Debug, usePlane, useBox } from '@react-three/cannon'
import { OrbitControls } from '@react-three/drei';

export const ThreeDemensionCanvas = () => {

  const [place, setPlace] = useState<number>(3);//유저가 선택한 맵이 recoil에 저장되고 불러와야 함

  return(
    <>
      <Canvas style={{
        height:"100vh"
      }}>
        <Suspense></Suspense>
        <Physics defaultContactMaterial={{ friction: 0.1, restitution: 0.8 }} gravity={[0, -9.81, 0]}>
          <Debug scale={1} color='green'>
            <OrbitControls/>
            {
              place===1?<BasketBallCourtTheme/>:(
                place===2?<ParkTheme/>:(
                  place===3?<BarTheme/>:(
                    place===4?<EventHallTheme/>:(
                      place===5?<StreetCarTheme/>:(
                        place===6?<SchoolTheme/>:(
                          place===7?<HouseTheme/>:(
                            place===8?<ChurchTheme/>:(
                              place===9?<BusStopTheme/>:(
                                place===10?<ConvenienceStoreTheme/>:null
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            }
          </Debug> 
        </Physics>
      </Canvas>
    </>
  )
}

import { Canvas } from "@react-three/fiber";
import { RestaurantTheme } from "./RestaurantTheme";

export const ThreeDemensionCanvas = () => {
  return(
    <>
      <Canvas style={{
        height:"100vh"
      }}>
        <RestaurantTheme/>
      </Canvas>
    </>
  )
}

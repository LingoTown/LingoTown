import { Canvas } from "@react-three/fiber";
import { MapUtilComp } from "../component/talk/MapUtilComp";
import * as THREE from "three";

interface IntroducePage {
  theme: JSX.Element;
}

export const IntroducePage: React.FC<IntroducePage> = (props: IntroducePage): JSX.Element => {
  const textureLoader = new THREE.TextureLoader();
  const backgroundTexture = textureLoader.load('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Introduce/bgggg.png');

  return(
    <>
      <MapUtilComp />
      <Canvas shadows style={{ height:"100vh" }} camera={{ position: [0, 0, 10], fov: 30 }}>
        {props.theme}
        <primitive object={backgroundTexture} attach="background" />
      </Canvas>
    </>
  )
}

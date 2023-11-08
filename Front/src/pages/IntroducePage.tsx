import { Canvas } from "@react-three/fiber";
import { MapUtilComp } from "../component/talk/MapUtilComp";
import * as THREE from "three";
import background from "../../public/background/background.png"

interface IntroducePage {
  theme: JSX.Element;
}

export const IntroducePage: React.FC<IntroducePage> = (props: IntroducePage): JSX.Element => {
  const textureLoader = new THREE.TextureLoader();
  textureLoader.crossOrigin = 'anonymous';

  const backgroundTexture = textureLoader.load(background);

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

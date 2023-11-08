import { Canvas } from "@react-three/fiber";
import { SYMapUtilComp } from "../component/playerSelect/SYMapUtilComp";
import * as THREE from "three";
import background from "../../public/background/background.png"

interface playerSelectPage {
  theme: JSX.Element;
}

export const PlayerSelectPage: React.FC<playerSelectPage> = (props: playerSelectPage): JSX.Element => {
  const textLoader = new THREE.TextureLoader();
  textLoader.crossOrigin = 'anonymous';

  const worldbackgroundTexture = textLoader.load(background);

  return(
    <>
      <SYMapUtilComp />

      <Canvas shadows style={{ height:"100vh" }} camera={{ position: [0, 0, 10], fov: 30 }}>
      {/* <Canvas> */}
        {props.theme}
        <primitive object={worldbackgroundTexture} attach="background" />
        {/* <primitive object={worldbackgroundTexture} /> */}
      </Canvas>
    </>
  )
}

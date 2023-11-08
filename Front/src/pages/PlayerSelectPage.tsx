import { Canvas } from "@react-three/fiber";
import { SYMapUtilComp } from "../component/playerSelect/SYMapUtilComp";
import * as THREE from "three";
import VerticalSlider from "../component/playerSelect/VerticalSlider";

interface playerSelectPage {
  theme: JSX.Element;
}

export const PlayerSelectPage: React.FC<playerSelectPage> = (props: playerSelectPage): JSX.Element => {
  const textureLoader = new THREE.TextureLoader();
  // const worldbackgroundTexture = textureLoader.load(import.meta.env.VITE_S3_URL + 'Introduce/bgggg.png');
  const worldbackgroundTexture = textureLoader.load("/selectPlayer/stage.png");
  return(
    <>
      {/* <SYMapUtilComp /> */}
      <VerticalSlider/>

      <Canvas shadows style={{ height:"100vh" }} camera={{ position: [0, 0, 10], fov: 30 }}>
        {props.theme}
        <primitive object={worldbackgroundTexture} attach="background" />
      </Canvas>
    </>
  )
}

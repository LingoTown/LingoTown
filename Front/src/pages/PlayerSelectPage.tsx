import { Canvas } from "@react-three/fiber";
import { MapUtilComp } from "../component/talk/MapUtilComp";
import * as THREE from "three";

interface playerSelectPage {
  theme: JSX.Element;
}

export const PlayerSelectPage: React.FC<playerSelectPage> = (props: playerSelectPage): JSX.Element => {
  const textureLoader = new THREE.TextureLoader();
  const worldbackgroundTexture = textureLoader.load('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Introduce/bgggg.png');
//   const medievalBackgroundTexture = textureLoader.load('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/PlayerSelect/Medieval_Fantasy/scene.gltf');

  return(
    <>
      {/* <MapUtilComp /> */}

      <Canvas shadows style={{ height:"100vh" }} camera={{ position: [0, 0, 10], fov: 30 }}>
      {/* <Canvas> */}
        {props.theme}
        <primitive object={worldbackgroundTexture} attach="background" />
        {/* <primitive object={worldbackgroundTexture} /> */}
      </Canvas>
    </>
  )
}

import { useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import VerticalScroll from "../component/playerSelect/VerticalScroll";
import { SelectButtonComp } from "../component/playerSelect/SelectButtonComp";

interface playerSelectPage {
  theme: JSX.Element;
}

export const PlayerSelectPage: React.FC<playerSelectPage> = (props: playerSelectPage): JSX.Element => {
  const textureLoader = new THREE.TextureLoader();
  // const worldbackgroundTexture = textureLoader.load(import.meta.env.VITE_S3_URL + 'Introduce/bgggg.png');
  const worldbackgroundTexture = textureLoader.load("/selectPlayer/stage.png");

  useEffect(()=>{
    document.body.style.cursor = `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_small.png'), auto`;
  },[])

  return(
    <>
      <VerticalScroll/>

      <Canvas shadows style={{ height:"100vh" }} camera={{ position: [0, 0, 10], fov: 30 }}>
        {props.theme}
        <primitive object={worldbackgroundTexture} attach="background" />
      </Canvas>

      {/* 선택 완료 버튼 */}
      <SelectButtonComp/>
    </>
  )
}

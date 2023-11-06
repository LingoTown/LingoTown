import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { ThemeComp } from "../component/category/ThemeComp";
import LoadingPage from "./LoadingPage";
import { useRecoilValue } from "recoil"
import { loadingAtom } from "../atom/LoadingAtom";

export const ThemePage = () => {
  const textureLoader = new THREE.TextureLoader();
  const backgroundTexture = textureLoader.load('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Introduce/bgggg.png');
  const loading = useRecoilValue(loadingAtom);
  return(
    <>
      {
        loading.loading? <LoadingPage/> : null
      }
      <Canvas shadows style={{ height:loading.loading?"0.01vh":"100vh" }} camera={{ position: [0, 0, 10], fov: 30 }}>
        <ThemeComp />
        <primitive object={backgroundTexture} attach="background" />
      </Canvas>
    </>
  )
}

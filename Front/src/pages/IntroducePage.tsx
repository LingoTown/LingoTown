import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import background from "../../public/background/background.png"
import { useNavigate } from "react-router-dom";

interface IntroducePage {
  theme: JSX.Element;
}

export const IntroducePage: React.FC<IntroducePage> = (props: IntroducePage): JSX.Element => {
  // const textureLoader = new THREE.TextureLoader();
  // textureLoader.crossOrigin = 'anonymous';

  // const backgroundTexture = textureLoader.load(background);
  const navigate = useNavigate();

  return(
    <div
      className="z-0"
      style={{
        backgroundImage: `url(${import.meta.env.VITE_S3_URL}BackGround/cloud_background.png)`
      }}
    >
      <div className="px-5 -mb-10 flex justify-between items-center text-5xl font-bold text-[#5dc7f8] font-['passero-one'] z-10 relative">
        <div className="hover:text-[2.8rem] mt-5 ml-8 drop-shadow-lg" 
          style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
          onClick={async() => {
            navigate(-1);
        }}
        >Back</div>
      </div>
      <Canvas shadows style={{ height:"97vh" }} camera={{ position: [0, 0, 10], fov: 30 }}>
        {props.theme}
      </Canvas>
    </div>
  )
}

import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import { useRecoilState } from "recoil"
import { loadingAtom } from "../atom/LoadingAtom";

interface IntroducePage {
  theme: JSX.Element;
}

export const IntroducePage: React.FC<IntroducePage> = (props: IntroducePage): JSX.Element => {
  const [loading, setLoading] = useRecoilState(loadingAtom);
  const navigate = useNavigate();

  return(
    <div style={{ backgroundImage: `url(${import.meta.env.VITE_S3_URL}BackGround/cloud_background.png)`}}>

      {
        loading.loading? <LoadingPage/> : null
      }
      {
        !loading.loading?
        <div className="px-5 -mb-10 flex justify-between items-center text-5xl font-bold text-[#5dc7f8] font-['GabiaSolmee'] absolute z-10 top-8">
          <div className="hover:text-[2.8rem] ml-6 drop-shadow-lg" 
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
            onClick={async() => {
              setLoading({loading:true});
              navigate(-1);
          }}
          >뒤로가기</div>
        </div>:
        null
      }
      <Canvas shadows style={{ height:loading.loading?"0.01vh":"100vh" }} camera={{ position: [0, 0, 10], fov: 30 }}>
        {props.theme}
      </Canvas>
    </div>
  )
}

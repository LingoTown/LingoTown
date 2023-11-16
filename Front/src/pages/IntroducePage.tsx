import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import { useRecoilState } from "recoil"
import { loadingAtom } from "../atom/LoadingAtom";
import { IntroduceComp } from "../component/introduce/IntroduceComp";
import { useState } from 'react';

export const IntroducePage: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useRecoilState(loadingAtom);
  const [onWorking, setWorking] = useState<boolean>(false);
  const navigate = useNavigate();

  return(
    <div style={{ backgroundImage: `url(${import.meta.env.VITE_S3_URL}BackGround/cloud_background.png)`}}>

      {
        loading.loading? <LoadingPage/> : null
      }
      {
        !loading.loading ?
          <div className={`px-5 -mb-10 flex justify-between items-center text-5xl font-bold text-[#5dc7f8] font-['GabiaSolmee'] absolute ${onWorking ? 'opacity-0 z-0' : 'z-10'} top-8`}>
          <div className="hover:text-[2.8rem] ml-6 drop-shadow-lg" 
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
            onClick={async() => {
              setLoading({loading:true});
              navigate(-1);
          }}
          >테마</div>
        </div>:
        null
      }
      <Canvas shadows style={{ height:loading.loading?"0.01vh":"100vh" }} camera={{ position: [0, 0, 10], fov: 30 }}>
        <IntroduceComp setWorking={setWorking} />
      </Canvas>
    </div>
  )
}

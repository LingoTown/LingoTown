import { Canvas } from "@react-three/fiber";
import { ThemeComp } from "../component/category/ThemeComp";
import LoadingPage from "./LoadingPage";
import { useRecoilState } from "recoil"
import { loadingAtom } from "../atom/LoadingAtom";
import { useNavigate } from "react-router-dom";

export const ThemePage = () => {
  const [loading, setLoading] = useRecoilState(loadingAtom);
  const navigate = useNavigate();

  return(
    <div
      className="z-0"
      style={{
        backgroundImage: `url(${import.meta.env.VITE_S3_URL}BackGround/cloud_background.png)`
      }}
    >
      {
        loading.loading? <LoadingPage/> : null
      }
      {
        !loading.loading?
        <div className="px-5 -mb-12 flex justify-between items-center text-5xl font-bold text-[#5dc7f8] font-['GabiaSolmee'] z-10 relative">
        <div className=" ml-8 mt-3.5 drop-shadow-lg" onClick={() => { navigate("/departure"); }}
        style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
        >
          <div className="w-[12rem] hover:text-[2.8rem] mt-3">
            뒤로가기
          </div>
        </div>
        <div className="mr-8 mt-3.5 drop-shadow-lg" onClick={() => { setLoading({loading:true}); navigate("/introduce"); }}
        style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
        >
          <div className="w-[5rem] hover:text-[2.8rem] mt-3">
            NPC
          </div>
        </div>
        <div className="mr-8 mt-3.5 drop-shadow-lg" onClick={() => { navigate("/mypage"); }}
        style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
        >
          <div className="w-[13rem] hover:text-[2.8rem] mt-3">
            마이페이지
          </div>
        </div>
      </div>
      :
      null
      }

      <div className="z-1 relative">
        <Canvas shadows style={{ height:loading.loading?"0.01vh":"95.5vh" }} camera={{ position: [0, 0, 10], fov: 30 }}>
          <ThemeComp />
        </Canvas>
      </div>
    </div>
  )
}

import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loadingAtom } from '../atom/LoadingAtom';
import { ThemeComp } from '../component/category/ThemeComp';
import LoadingPage from './LoadingPage';

export const ThemePage = () => {

  const [loading, setLoading] = useRecoilState(loadingAtom);
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>();

  useEffect(() => {
    const canvasElement = canvasRef.current;

    const handleContextLost = (event: Event) => {
      event.preventDefault();
      // handle context loss
    };

    const handleContextRestored = (event: Event) => {
      // handle context restoration
    };

    canvasElement?.addEventListener('webglcontextlost', handleContextLost as EventListener);
    canvasElement?.addEventListener('webglcontextrestored', handleContextRestored as EventListener);

    return () => {
      canvasElement?.removeEventListener('webglcontextlost', handleContextLost as EventListener);
      canvasElement?.removeEventListener('webglcontextrestored', handleContextRestored as EventListener);
    };
  }, []);


  return(
    <div
      style={{
        backgroundImage: `url(${import.meta.env.VITE_S3_URL}BackGround/cloud_background.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {
        loading.loading? <LoadingPage/> : null
      }
      {
        !loading.loading ?
        <div className="pt-8 px-5 flex place-content-between text-5xl font-bold text-[#5dc7f8] absolute w-full font-['GabiaSolmee']"
          style={{zIndex:"1"}}
        >
          <div className="flex-grow ml-4 drop-shadow-lg" style={{minWidth: '33%', cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}>
            <div className="pr-80 text-center hover:text-[2.8rem]" onClick={() => { navigate("/departure"); }}>
              뒤로가기
            </div>
          </div>
          <div className="flex-grow drop-shadow-lg" style={{minWidth: '33%', cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}>
            <div className="pr-5 text-center hover:text-[2.8rem]" onClick={() => { setLoading({loading:true}); navigate("/introduce"); }}>
              NPC
            </div>
          </div>
          <div className="flex-grow mr-8 drop-shadow-lg" style={{minWidth: '33%', cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}>
            <div className="pl-[35vh] text-center hover:text-[2.8rem]" onClick={() => { navigate("/mypage"); }}>
              마이페이지
            </div>
          </div>
        </div>
        :
        null
      }

      <Canvas ref={canvasRef} style={{zIndex:"0", height:loading.loading?"0.01vh":"100vh" }} camera={{ position: [0, 0, 10], fov: 30 }}>
        <ThemeComp/>
      </Canvas>

    </div>
  )
}

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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;

    const handleContextLost = (event: Event) => {
      event.preventDefault();
      // handle context loss
    };

    const handleContextRestored = () => {
      // handle context restoration
    };

    canvasElement?.addEventListener('webglcontextlost', handleContextLost as EventListener);
    canvasElement?.addEventListener('webglcontextrestored', handleContextRestored as EventListener);

    return () => {
      canvasElement?.removeEventListener('webglcontextlost', handleContextLost as EventListener);
      canvasElement?.removeEventListener('webglcontextrestored', handleContextRestored as EventListener);
    };
  }, [canvasRef]);


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
        <div className={`w-[100%] pt-12 flex place-content-between text-5xl font-bold text-[#5dc7f8] absolute font-['GabiaSolmee']`}
          style={{ zIndex: "1"}}
        >
          <div className="w-[50%] text-center hover:text-[2.8rem] drop-shadow-lg" 
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto`, letterSpacing: '-0.3rem' }}
            onClick={async() => {
              setLoading({loading:true});
              navigate("/departure")
            }}
          >뒤로가기</div>

          <div className="w-[7%] text-center hover:text-[2.8rem] drop-shadow-lg" 
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto`, letterSpacing: '-0.3rem' }}
            onClick={async() => {
              setLoading({loading:true});
              navigate("/introduce")
            }}
          >NPC</div>
          
          <div className="w-[50%] text-center hover:text-[2.8rem] drop-shadow-lg" 
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto`, letterSpacing: '-0.3rem' }}
            onClick={async() => {
              setLoading({loading:true});
              navigate("/mypage")
            }}
          >마이페이지</div>
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

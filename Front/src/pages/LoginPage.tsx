import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { userAtom } from '../atom/UserAtom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { loadingAtom } from '../atom/LoadingAtom';

const LoginPage = () => {

  const navigate = useNavigate();
  const kakaoLogin = () => { window.location.href = import.meta.env.VITE_KAKAO_LOGIN; }
  const googleLogin = () => { window.location.href = import.meta.env.VITE_GOOGLE_LOGIN; }
  const user = useRecoilValue(userAtom);
  const setLoading = useSetRecoilState(loadingAtom);

  useEffect(() => {
    if (user.email !== "") {
      navigate("/departure");
    }
  }, []);


  return(
  <>
  
    <div
      style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_small.png'), auto` }} 
      className="absolute inset-0 bg-black opacity-50 z-0">
    </div>

    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center z-0" style={{ backgroundImage: `url('${import.meta.env.VITE_S3_URL}Introduce/bgggg.png')`, cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_small.png'), auto` }}>
      <div className="text-center z-0">
        <div>
          <h1 className="text-6xl font-bold text-[#fff] font-['passero-one']">Explore New Language with</h1>
          <h2 className="text-7xl mt-2 font-extrabold text-[#FFE58A] font-['passero-one']">LingoTown!</h2>
        </div>
      </div>
      <div className="z-0 mt-7">
        <img 
          style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
          className="h-10 rounded" 
          src={ import.meta.env.VITE_S3_URL + "Button/KakaoButton.png" } onClick={() => { kakaoLogin() }}/>
        <img 
          style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
          className="h-10 rounded mt-2" 
          src={ import.meta.env.VITE_S3_URL + "Button/GoogleButton.png" } onClick={() => { googleLogin() }}/>
        <img 
          style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
          className="h-10 rounded mt-2 bg-[#ddd]" 
          src={ import.meta.env.VITE_S3_URL + "Button/ExploreNowButton.png"} onClick={() => { setLoading({loading:true}); navigate("/explore"); }}/>
      </div>
    </div>
  </>
  )
}


export default LoginPage;
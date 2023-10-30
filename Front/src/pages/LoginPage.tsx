import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const navigate = useNavigate();

  const kakaoLogin = () => {
    window.location.href = import.meta.env.VITE_KAKAO_LOGIN;
  }

  const googleLogin = () => {
    window.location.href = import.meta.env.VITE_GOOGLE_LOGIN;
  }
  
  return(
  <>
    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center z-10" style={{ backgroundImage: 'url(https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/bgggg.PNG)' }}>
      <div className="text-center z-10">
        <div>
          <h1 className="text-5xl font-bold text-[#fff] font-['passero-one']">Explore New Language with</h1>
          <h2 className="text-8xl mt-2 font-extrabold text-[#FFE58A] font-['passero-one']">LingoTown!</h2>
        </div>
      </div>
      <div className="z-10 mt-7">
        <img 
          className="h-10 rounded cursor-pointer" 
          src='https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/kakaobtn.png' onClick={() => { kakaoLogin() }}/>
        <img 
          className="h-10 rounded mt-4 cursor-pointer" 
          src='https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/googlebtn.png' onClick={() => { googleLogin() }}/>
        <img 
          className="h-10 rounded mt-4 cursor-pointer" 
          src='https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/exp.png' onClick={() => { navigate("/restaurant") }}/>
      </div>
    </div>
  </>
  )
}


export default LoginPage;
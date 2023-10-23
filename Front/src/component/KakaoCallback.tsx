import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { kakaoLogin } from '../api/Login';
import { userAtom } from '../atom/UserAtom';
import { useSetRecoilState } from 'recoil';
import { userType } from '../type/UserType';

function GetAuthCodeAndSendToSpring() {

  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAtom);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code')
    doKakaoLogin(code)
  }, [])

  const doKakaoLogin = async (code:string | null) => {

    const json = { 
      code: code,
      redirect: import.meta.env.VITE_KAKAO_CALLBACK, 
    }

    await kakaoLogin(json, async ({data}) => {
      const result = data.data as userType;
      const tempUser = {...result};
      setUser(tempUser);
      navigate("/main");
    }, (error) => {
      console.log(error)
      navigate("/");
    });

  }

  return(
    <>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center z-10" style={{ backgroundImage: 'url(https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/bgggg.PNG)' }}>    </div>
    </>
  )
}

export default GetAuthCodeAndSendToSpring;
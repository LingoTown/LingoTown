import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { googleLogin } from '../api/Login';
import { userAtom } from '../atom/UserAtom';
import { useSetRecoilState } from 'recoil';
import { userType } from '../type/UserType';

function GetAuthCodeAndSendToSpring() {

  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAtom);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code')
    doGoogleLogin(code)
  }, [])

  const doGoogleLogin = async (code:string | null) => {

    const json = { 
      code: code,
      redirect: import.meta.env.VITE_GOOGLE_CALLBACK, 
    }

    await googleLogin(json, ({data}) => {
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
      <h1>로딩바 표시하기</h1>
    </>
  )
}

export default GetAuthCodeAndSendToSpring;
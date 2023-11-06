import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { googleLogin } from '../../api/User';
import { userAtom } from '../../atom/UserAtom';
import { useSetRecoilState } from 'recoil';
import { userType } from '../../type/UserType';
import LoadingPage from '../../pages/LoadingPage';

const GoogleCallbackComp = () => {

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
      setUser(tempUser); //유저 정보를 유저아톰에 저장
      navigate("/departurePage");
    }, (error) => {
      console.log(error)
      navigate("/");
    });

  }
  
  return(
    <>
      <LoadingPage/>
    </>
  )
}


export default GoogleCallbackComp;
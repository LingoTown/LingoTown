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
      setUser({...result});
      navigate("/departure");
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
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { kakaoLogin } from '../../api/User';
import { userAtom } from '../../atom/UserAtom';
import { useSetRecoilState } from 'recoil';
import { userType } from '../../type/UserType';
import LoadingPage from '../../pages/LoadingPage';

const KakaoCallbackComp = () => {

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

export default KakaoCallbackComp;
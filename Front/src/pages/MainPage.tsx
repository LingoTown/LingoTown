import { useNavigate } from 'react-router-dom';
import { userAtom } from '../atom/UserAtom';
import { useRecoilValue } from 'recoil';

function MainPage() {
  
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);

  return(
    <>
      <h1>ㅎ2</h1>
      <button onClick={() => {
        navigate("/")
      }}>로그인 페이지로 이동</button>
      <div>{user.gender}</div>
      <div>{user.social}</div>
      <div>{user.accessToken}</div>
      <div>{user.email}</div>
      <div>{user.nickname}</div>
      <img src={user.profileImg}/>
    </>
  )
}


export default MainPage;
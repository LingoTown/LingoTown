import { useNavigate } from 'react-router-dom';
import { userAtom } from '../atom/UserAtom';
import { useRecoilValue } from 'recoil';

function MainPage() {
  
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);

  return(
<>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-5 py-10">
      <h1 className="text-4xl font-bold text-blue-500">ㅎ2</h1>
      <button onClick={() => navigate("/")} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
        로그인 페이지로 이동
      </button>
      <div className="bg-white p-6 w-96 rounded-xl shadow-lg space-y-3">
        <div className="flex items-center space-x-3">
          <span className="font-medium">Gender:</span>
          <span>{user.gender}</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="font-medium">Social:</span>
          <span>{user.social}</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="font-medium">Email:</span>
          <span>{user.email}</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="font-medium">Nickname:</span>
          <span>{user.nickname}</span>
        </div>
        <div className="flex items-center justify-center">
          <img src={user.profileImg} alt="User Profile" className="w-32 h-32 rounded-full border-2 border-blue-400 object-cover"/>
        </div>
      </div>
    </div>
</>
  )
}


export default MainPage;
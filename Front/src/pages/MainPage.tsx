import { useNavigate } from 'react-router-dom';
import { userAtom } from '../atom/UserAtom';
import { useRecoilValue } from 'recoil';

function MainPage() {
  
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);

  return(
    
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-cover" style={{ backgroundImage: 'url(https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/bgggg.PNG)' }}>    
        <div className="w-full flex justify-between text-5xl font-bold text-white font-['passero-one']">
          <div className="ml-8 cursor-pointer" onClick={() => {
            alert("구현중 입니다.")
          }}>GO TO MAIN</div>
          <div className="mr-8 cursor-pointer" onClick={() => {
            navigate("/");
          }}>Close</div>
        </div>
        <div className='mt-5'>
          <div className='z-10'>
            <div className='w-[70rem] h-[37rem] bg-slate-950/[.88] rounded-md flex flex-row pt-5'>
            <div className='font-bold text-white flex-1 border-r border-white border-opacity-50 flex justify-center'>
              <div>
                <img className="w-40 h-40 rounded-full object-cover mt-10" alt="User Profile" src={user.profileImg}/>
                <div className='pt-10'>Name : {user.nickname}</div>
                <div>Acount : {user.email}</div>
              </div>
            </div>
              <div className='font-bold text-white flex-1 pl-3'>
                assdas
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default MainPage;
import {useState} from "react"
import { useNavigate } from 'react-router-dom';
import { userAtom } from '../atom/UserAtom';
import { useRecoilValue } from 'recoil';
import { HttpJson } from '../api/Http';
import { useSetRecoilState } from "recoil";

const MainPage = () => {
  const [nickEditMode, setNickMode] = useState(false);
  const [nick, setNick] = useState('');
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);
  const setUser = useSetRecoilState(userAtom);
  const logout = () =>{
    localStorage.removeItem("userAtom");
    alert("로그아웃 되었습니다.")
    navigate("/")
  }

  const deleteAccount = () => {
    if(confirm("탈퇴하시겠습니까?")){
      HttpJson.delete("/api/member/leave")
      .then((res)=>{
        localStorage.removeItem("userAtom");
        navigate("/");
      })
      .catch(console.log)
    }
  }

  const editNickname = () => {
    setNickMode(true);
  }

  const saveNickname = async() => {
    const data = {
      nickname : nick
    }
    await HttpJson.put("/api/member/nickname", data)
      .then(()=>{
        setUser(prevUser => ({ 
          ...prevUser, 
          nickname: nick 
      }));
        setNickMode(false);

      })
      .catch(console.log)
    console.log(nick);
  }


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
        <div className=''>
            <div className='mt-10 w-[70rem] h-[37rem] bg-slate-950/[.88] border-[#fff] border-[2px] rounded-xl flex flex-row p-5'>
            {/* 왼쪽 부분 */}
            <div className='font-bold font-[30] text-[1.4rem] text-white flex-1 border-r border-white border-opacity-50 flex flex-col'>
                <img className="w-40 h-40 rounded-full object-cover mt-5 self-center " alt="User Profile" src={user.profileImg}/>
                <div className='flex-1 mt-10 ml-20' >
                  {
                    nickEditMode?
                    <div>Name : &nbsp;
                      <input onChange={(e) => setNick(e.target.value)} className="bg-transparent border-b outline-none" type="text" placeholder={user.nickname}/>
                      &nbsp;&nbsp;
                      <span onClick={saveNickname} class="material-icons">check</span>
                    </div>
                    :
                    <div>Name : {user.nickname} &nbsp; <span onClick={editNickname} class="material-icons">edit</span></div>

                  }
                  <div>Account : {user.social}</div>
                  <div>({user.email})</div>
                </div>
                <div className="flex-1 mt-10 ml-20 font-['passero-one'] text-[1.8rem] cursor-pointer" >
                  <div onClick={logout}>Logout</div>
                  <div onClick={deleteAccount}>Delete Account</div>
                </div>
        
            </div>
            {/* 오른쪽 부분 */}
              <div className='font-bold text-white flex-1 pl-3'>
                <div className="m-5 font-['passero-one'] font-[30] underline text-[2rem] ">Conversations</div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}


export default MainPage;
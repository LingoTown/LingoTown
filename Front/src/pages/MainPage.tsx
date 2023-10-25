import {useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import { userAtom } from '../atom/UserAtom';
import { useRecoilValue } from 'recoil';
import { HttpJson } from '../api/Http';
import { HttpForm } from "../api/Http";
import { useSetRecoilState } from "recoil";
import Country from "../component/Country";

const MainPage = () => {
  const [nickEditMode, setNickMode] = useState(false);
  const [nick, setNick] = useState('');
  const [showBoxes, setShowBoxes] = useState("box1"); // 'box1', 'box2', or null

  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);
  const setUser = useSetRecoilState(userAtom);
  const logout = () =>{
    localStorage.removeItem("userAtom");
    alert("로그아웃 되었습니다.")
    navigate("/")
  }
  useEffect(()=> {
    HttpJson.get("/api/talk/list")
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log("NPC 정보를 불러올 수 없습니다.")
      })
  })

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

  const editPic = () => {
    document.getElementById("myInput")?.click();
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

  const handleProfileImg = (e:any) => {
    console.log(e.target.files[0]);
    let data = new FormData();
    data.append("profile", e.target.files[0]);
    console.log(data);
    HttpForm.put("/api/member/profile", data)
      .then((res)=>{
        console.log("success!")
        HttpJson.get("/api/member")
          .then((res)=>{
            const newImg = res.data.data.profileImg
            console.log(newImg);
            setUser(prevUser => ({ 
              ...prevUser, 
              profileImg: newImg
          }))
          // location.reload();
          })
        
      })
      .catch(console.log);
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
                <div className="relative w-40 h-40 mt-5 self-center">
                  <input className="hidden" onChange={(e)=>{handleProfileImg(e)}} type="file" id="myInput"/>
                  <img className="w-full h-full rounded-full object-cover mt-5 self-center " alt="User Profile" src={user.profileImg}/>
                  <span className="rounded-full bg-[#ddd]"></span>
                  <span onClick={editPic} className="bg-[#ababab] rounded-full p-1 absolute -bottom-2 -right-0 material-icons cursor-pointer">edit</span>
                </div>
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
              <div className='font-bold text-white flex-1 pl-7'>
                <div className="m-5 font-['passero-one'] font-[30] underline text-[2rem] ">Conversations</div>
                {/* 나라별로 모아서 토글만들기 */}
                <Country country={"france"} npc={"npc"}></Country>
                {/* <div className="flex space-x-4 mb-4">
                  <div className="cursor-pointer w-6 h-6 bg-[#ddd] "
                    onClick={() => setShowBoxes(showBoxes === 'box1' ? null : 'box1')}>
                  </div>
                  <div className="cursor-pointer w-6 h-6 bg-transparent border-t-6 border-l-3 border-r-3 border-transparent border-b-6 border-red-500"
                    onClick={() => setShowBoxes(showBoxes === 'box2' ? null : 'box2')}>
                  </div>
                </div> */}

              </div>
            </div>
          </div>
      </div>
    </>
  )
}


export default MainPage;
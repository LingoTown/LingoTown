import {useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import { userAtom } from '../atom/UserAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { HttpJson } from '../api/Http';
import { HttpForm } from "../api/Http";
import { useSetRecoilState } from "recoil";
import { myPageNPCListType } from "../component/Country";
import Country from "../component/Country";
import { useCustomAlert, useCustomConfirm } from "../component/util/ModalUtil";
import { talkListType } from "../type/TalkListType";
import { npcStateAtom } from "../atom/ScriptAtom";
import { talkIdAtom } from "../atom/ScriptAtom";
import ScriptDetail from "../component/script/ScriptDetail";

const MainPage = () => {
  const customAlert = useCustomAlert();
  const [nickEditMode, setNickMode] = useState(false);
  const [nick, setNick] = useState('');
  const [myList, setMyList] = useState<myPageNPCListType>({});
  const [scriptVer, setScriptVer] = useState(false);
  const [detailVer, setDetailVer] = useState(false);
  const [talkList, setTalkList] = useState<talkListType[]>()
  const [npcNum, setNpcNum] = useRecoilState(npcStateAtom);
  const [talkId, setTalkId] = useRecoilState(talkIdAtom);
  scriptVer;
  const customConfirm = useCustomConfirm();
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);
  const setUser = useSetRecoilState(userAtom);
  const logout = async() =>{
    localStorage.removeItem("userAtom");
    await customAlert("", "로그아웃 되었습니다.")
    navigate("/")
  }
  //list 국가별로 바꾸기 - npcid, talkcount
  const groupByCountry = (arr:any) => {
    return arr.reduce((arr:any, obj:any) => {
      const language = obj.language;
      if (!arr[language]) {
        arr[language] = [];
    }
      arr[language].push(obj);
      return arr;
    },[])
  }

  useEffect(()=>{
    console.log(scriptVer);
  }, [scriptVer])

  useEffect(()=> {
    HttpJson.get("/api/talk/list")
      .then((res) => {
        const arr = res.data.data;
        console.log(groupByCountry(arr));
        setMyList(groupByCountry(arr));     
      })
      .catch((err) => {
        console.log(err);
        console.log("NPC 정보를 불러올 수 없습니다.")
      })
  }, [])

  const deleteAccount = async() => {
    const flag = await customConfirm("Notice", "회원 탈퇴하시겠습니까?")
    if(flag){
      HttpJson.delete("/api/member/leave")
      .then((res)=>{
        res;
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
    if(nick == ""){
      console.log("there's no nickname");
      setNickMode(false);
      return;
    }
    if(nick.length >= 15){
      customAlert("Notice", "15자 이하의 닉네임을 설정해주세요.");
      return;
    }
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
        res;
        console.log("success!")
        HttpJson.get("/api/member")
          .then((res)=>{
            const newImg = res.data.data.profileImg
            console.log(newImg);
            setUser(prevUser => ({ 
              ...prevUser, 
              profileImg: newImg
          }))
          })
        
      })
      .catch(console.log);
  }
  const getTalkList = (npcId:number | undefined) => {
    console.log(npcId);
    HttpJson.get(`/api/talk/list/${npcId}`)
    .then((res) => {
      setTalkList(res.data.data);
      console.log(res.data.data);
    })
    .catch(console.log);
  }
  const deleteTalk = async(talkId:number) => {
    const flag = await customConfirm("Notice", "대화를 삭제하시겠습니까?");
    if(flag){
      HttpJson.delete(`/api/talk/${talkId}`)
      .then(()=>{
        getTalkList(npcNum);
      })
      .catch(console.log)
    }
  }

  return(
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-cover" style={{ backgroundImage: 'url(https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/bgggg.PNG)' }}>    
        <div className="w-full flex justify-end text-5xl font-bold text-white font-['passero-one']">
          <div className="mr-8 cursor-pointer" onClick={() => {
            navigate("/departurePage");
          }}>Close</div>
        </div>
        <div className=''>
            <div className='mt-10 w-[80rem] h-[40rem] bg-slate-950/[.88] border-[#fff] border-[2px] rounded-xl flex flex-row p-5'>
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
                      <span onClick={saveNickname} className="material-icons">check</span>
                    </div>
                    :
                    <div>Name : {user.nickname} &nbsp; <span onClick={editNickname} className="material-icons">edit</span></div>
                  }
                  <div>Account : {user.social}</div>
                  {
                    user.email? 
                    <div>({user.email})</div>
                    :
                    <></>
                  }
                  
                </div>
                <div className="flex-1 mt-10 ml-20 font-['passero-one'] text-[1.8rem] cursor-pointer " >
                  <div className="hover:text-[2rem]" onClick={logout}>Logout</div>
                  <div className="hover:text-[2rem]" onClick={deleteAccount}>Delete Account</div>
                </div>
        
            </div>
            {/* 오른쪽 부분 */}
              <div className='font-bold h-full overflow-y-scroll flex-1 pl-7'>
                {/* 나라별로 모아서 토글만들기 */}
                {
                  scriptVer && !detailVer && //talk list 나타나는 부분 
                  <>
                  <div className="m-5 font-['passero-one'] font-[30] text-white underline text-[2rem] ">My Talk Script</div>
                  {
                    talkList?.map((arr, i)=>(
                      <div onClick={()=>{setDetailVer(true); setTalkId(arr.talkId)}} key={i} className="group font-['passero-one'] text-[1.2rem] font-[30] flex mx-5 mb-2 cursor-pointer hover:bg-[#fff]/60 rounded-lg">
                      <div className="w-full px-5 py-2 bg-[#fff]/70 rounded-lg flex flex-row items-center justify-between">
                        
                        <div className="flex flex-row">
                          <div className="text-[1.3rem] text-[#2E8BA8]">#{i+1} &nbsp;&nbsp;</div>
                          <div className="">Date : {arr.talkDate.slice(0,10)} &nbsp;|&nbsp; </div>
                          <div>&nbsp; Time : {arr.talkDate.slice(11, )}</div>
                        </div>
                        
                        <div onClick={()=>{
                            deleteTalk(arr.talkId);
                          }} className="hover:text-[1.7rem] align-end material-icons opacity-0 group-hover:opacity-80 text-red-700 text-[1.5rem] transform transition duration-300 ease-in-out">delete</div>
                      
                      </div>
                      </div>
                    ))
                  }
                  </>
                  }
                  {
                    detailVer && 
                    <ScriptDetail/>
                  }
                  {
                    !scriptVer && //npc list 나타나는 부분 
                    <>
                      <div className="m-5 text-white font-['passero-one'] font-[30] underline text-[2rem] ">Conversations</div>
                      <Country 
                        myList={myList} 
                        onBoxClick={()=>{setScriptVer(true)}} 
                        getTalkList={(npcId:number)=>{
                          getTalkList(npcId); 
                          setNpcNum(npcId);
                          console.log("current : " + npcId);
                        }}
                        />
                    </>

                  }
                
              </div>
            </div>
          </div>
      </div>
    </>
  )
}


export default MainPage;
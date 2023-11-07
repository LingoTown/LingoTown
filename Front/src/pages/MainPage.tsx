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
import { npcStateName } from "../atom/ScriptAtom";
import { talkIdAtom } from "../atom/ScriptAtom";
import { detailVerAtom } from "../atom/ScriptAtom";
import ScriptDetail from "../component/script/ScriptDetail";

const MainPage = () => {
  const customAlert = useCustomAlert();
  const [nickEditMode, setNickMode] = useState(false);
  const [nick, setNick] = useState('');
  const [myList, setMyList] = useState<myPageNPCListType>({});
  const [scriptVer, setScriptVer] = useState(false);
  const [detailVer, setDetailVer] = useRecoilState(detailVerAtom);
  const [talkList, setTalkList] = useState<talkListType[]>()
  const [npcNum, setNpcNum] = useRecoilState(npcStateAtom);
  const [npcName,setNpcName] = useRecoilState(npcStateName);
  const [talkId, setTalkId] = useRecoilState(talkIdAtom);
  talkId;
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
  }

  const handleProfileImg = (e:any) => {
    let data = new FormData();
    data.append("profile", e.target.files[0]);
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
    console.log(npcName);
    HttpJson.get(`/api/talk/list/${npcId}`)
    .then((res) => {
      setTalkList(res.data.data);
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
      <div 
      className="h-screen flex flex-col items-center justify-center bg-cover" 
      style={{ backgroundImage: 'url(https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/bgggg.PNG)',
               cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_small.png'), auto`}}>    
        {/* <div className="w-full flex justify-end text-5xl font-bold text-white font-['passero-one']">
          <div className="mr-8 hover:text-[2.9rem] h-[30px]" onClick={() => {
            navigate("/departurePage");
          }}
          style={{ cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_hover_small.png'), auto` }}
          >Close</div>
        </div> */}
        <div className=''>
            <div className='w-[80rem] h-[43rem] bg-slate-950/[.88] border-[#fff] border-[2px] rounded-xl flex flex-row p-5'>
            {/* 왼쪽 부분 */}
            {
              !detailVer &&
              <div className='font-bold font-[30] text-[1.4rem] text-white flex-1 border-r border-white border-opacity-50 flex flex-col'>
                <div className="relative w-40 h-40 mt-5 self-center">
                  <input className="hidden" onChange={(e)=>{handleProfileImg(e)}} type="file" id="myInput"/>
                  <img className="w-full h-full rounded-full object-cover mt-5 self-center " alt="User Profile" src={user.profileImg}/>
                  <span className="rounded-full bg-[#ddd]">

                  </span>
                  <span onClick={editPic} 
                    style={{ cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_hover_small.png'), auto` }}
                    className="bg-[#ababab] rounded-full p-1 absolute -bottom-2 -right-0 material-icons"
                    >edit</span>
                </div>
                <div className='mt-10 ml-20 font-[30] text-[1.3rem] border-white border-[1px] rounded-lg w-[70%] p-5' >
                  {
                    nickEditMode?
                    <div>Name : &nbsp;
                      <input onChange={(e) => setNick(e.target.value)} className="bg-transparent border-b outline-none" type="text" placeholder={user.nickname}/>
                      &nbsp;&nbsp;
                      <span 
                        onClick={saveNickname} 
                        className="material-icons"
                        style={{ cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_hover_small.png'), auto` }}
                      >check</span>
                    </div>
                    :
                    <div>Name : {user.nickname} &nbsp; 
                      <span onClick={editNickname} 
                        className="material-icons align-middle"
                        style={{ cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_hover_small.png'), auto` }}
                      >
                        edit
                      </span>
                    </div>
                  }
                  <div>Account : {user.social}</div>
                  {
                    user.email? 
                    <div>({user.email})</div>
                    :
                    <></>
                  }
                  
                </div>
                <div 
                style={{ cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_hover_small.png'), auto` }}
                className="flex-1 mt-10 ml-20 font-['passero-one'] text-[1.8rem]" >
                  <div className="hover:text-[2rem]  h-[45px]" onClick={logout}>Logout</div>
                  <div className="hover:text-[2rem]  h-[45px]" 
                  style={{ cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_hover_small.png'), auto` }}
                   onClick={deleteAccount}>Delete Account</div>
                </div>
        
            </div>
            }
            
            {/* 오른쪽 부분 */}
              <div className='font-bold h-full overflow-y-auto flex-1 pl-7'>
                {/* 나라별로 모아서 토글만들기 */}
                {
                  scriptVer && !detailVer && //talk list 나타나는 부분 
                  <>
                  <div className="flex flex-row justify-between">
                  <div className="m-5 font-['passero-one'] font-[30] text-white underline text-[2rem] ">My Talk Script</div>
                  <div 
                    onClick={()=>{setScriptVer(false)}} 
                    className="hover:text-[1.2rem] cursor-pointer m-5 align-center font-['passero-one'] font-[30] text-white text-[1.3rem]"
                    style={{ cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_hover_small.png'), auto` }} 
                    > {"<--  "}go back</div>
                  </div>
                  {
                    talkList?.map((arr, i)=>(
                      <div 
                        onClick={()=>{setDetailVer(true); setTalkId(arr.talkId)}} key={i} 
                        className="group font-['passero-one'] text-[1.2rem] font-[30] flex mx-5 mb-2 cursor-pointer hover:bg-[#fff]/60 rounded-lg"
                        style={{ cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_hover_small.png'), auto` }}
                      >
                      <div className="w-full px-5 py-2 bg-[#fff]/70 rounded-lg flex flex-row items-center justify-between">
                        
                        <div className="flex flex-row">
                          <div className="text-[1.3rem] text-[#2E8BA8]">#{i+1} &nbsp;&nbsp;</div>
                          <div className="">Date : {arr.talkDate.slice(0,10)} &nbsp;|&nbsp; </div>
                          <div>&nbsp; Time : {arr.talkDate.slice(11, )}</div>
                        </div>
                        
                        <div onClick={(e)=>{
                            e.stopPropagation();
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
                    <div className="flex flex-row justify-between">
                      <div className="m-5 text-white font-['passero-one'] font-[30] underline text-[2rem] ">Conversations</div>
                      <div onClick={() => {
                        navigate("/departurePage");
                        }} 
                        style={{ cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_hover_small.png'), auto` }}
                        className="hover:text-[1.8rem] m-5 text-white font-['passero-one'] font-[30] text-[2rem] ">X
                      </div>
                    </div>
                      <Country 
                        myList={myList} 
                        onBoxClick={()=>{
                          setScriptVer(true);
                        }} 
                        getTalkList={(npcId:number, npcName:string)=>{
                          getTalkList(npcId); 
                          setNpcNum(npcId);
                          setNpcName(npcName);
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
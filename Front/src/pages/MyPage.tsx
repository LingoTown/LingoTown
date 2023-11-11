import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { userAtom, initialUser } from '../atom/UserAtom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { myPageNPCListType, CountryComp } from "../component/mypage/CountryComp";
import { useCustomAlert, useCustomConfirm } from "../component/util/ModalUtil";
import { talkListType } from "../type/TalkListType";
import { npcStateAtom, npcStateName, talkIdAtom, detailVerAtom } from "../atom/ScriptAtom";
import ScriptDetailComp from "../component/mypage/ScriptDetailComp";
import toast, { Toaster } from 'react-hot-toast';
import { loadingAtom } from "../atom/LoadingAtom";
import { callMyList, deleteAccount, saveNickname, updateProfile, getInfo, getTalkList, deleteTalk } from "../api/Mypage";
import { myPageNPCType, userInfo } from "../type/MyPageNpcType";
import { tutorialAtom } from "../atom/TutorialAtom";
import Tutorial from "../component/tutorial/Tutorial";

const MyPage = () => {

  // hook
  const navigate = useNavigate();
  const customConfirm = useCustomConfirm();
  const customAlert = useCustomAlert();

  // state
  const [nickEditMode, setNickMode] = useState(false);
  const [nick, setNick] = useState('');
  const [myList, setMyList] = useState<myPageNPCListType>({});
  const [scriptVer, setScriptVer] = useState(false);
  const [talkList, setTalkList] = useState<talkListType[]>()

  // global state
  const [detailVer, setDetailVer] = useRecoilState(detailVerAtom);
  const [npcNum, setNpcNum] = useRecoilState(npcStateAtom);
  const setNpcName = useSetRecoilState(npcStateName);
  const setTalkId = useSetRecoilState(talkIdAtom);
  const setLoading = useSetRecoilState(loadingAtom);
  const [user, setUser] = useRecoilState(userAtom);
  const [visit, setVisit] = useRecoilState(tutorialAtom);
  
  const logout = async() =>{
    setUser(initialUser)
    navigate("/")
    await customAlert("", "로그아웃 되었습니다.")
  }

  useEffect(()=> {
    doCallMyList();
  }, [])
  
  // list 국가별로 바꾸기 - npcid, talkcount
  const groupByCountry = (arr:myPageNPCType[]) => {
    return arr.reduce((arr:any, obj:any) => {
      const language = obj.language;
      if (!arr[language]) {
        arr[language] = [];
    }
      arr[language].push(obj);
      return arr;
    }, [])
  }

  const doCallMyList = async() => {
    await callMyList(({data}) => {
      const result = data.data as myPageNPCType[];
      setMyList(groupByCountry(result)); 
    }, (err) => {
      console.log(err);
    })
  }

  const doDeleteAccount = async() => {
    const flag = await customConfirm("Notice", "회원 탈퇴하시겠습니까?")
    if (flag) {
      await deleteAccount(({}) => {
        localStorage.removeItem("userAtom");
        navigate("/");
      }, (err) => {
        console.log(err);
      })
    }
  }

  const editNickname = () => { setNickMode(true) }
  const editPic = () => { document.getElementById("myInput")?.click() }

  const doSaveNickname = async() => {
    if(nick == ""){
      setNickMode(false);
      return;
    }

    if(nick.length >= 15){
      customAlert("Notice", "15자 이하의 닉네임을 설정해주세요.");
      return;
    }
    
    const json = { nickname : nick }
    
    await saveNickname(json, ({}) => {
      setUser(prevUser => ({ ...prevUser,  nickname: nick }));
      setNickMode(false);
      showToaster("닉네임이 변경 되었습니다.", "✏️");
    }, (err) => {
      console.log(err);
    })
  }

  const handleProfileImg = (e:any) => {
    const form = new FormData();
    form.append("profile", e.target.files[0]);
    updateProfile(form, ({}) => {
      getInfo(({data}) => {
        const newInfo = data.data as userInfo;
        setUser(prevUser => ({ ...prevUser, profileImg: newInfo.profileImg }))
        showToaster("프로필 사진이 변경 되었습니다.", "📷");
      }, (err) => {
        console.log(err)
      })
    }, (err) => {
      console.log(err)
    })
  }

  const doGetTalkList = (npcId:number) => {
    getTalkList(npcId, ({data}) => {
      const result = data.data as talkListType[]
      setTalkList(result)
    }, (err) => {
      console.log(err)
    });
  }

  const doDeleteTalk = async(talkId:number) => {
    const flag = await customConfirm("Notice", "대화를 삭제하시겠습니까?");
    if (flag) {
      deleteTalk(talkId, ({}) => {
        doGetTalkList(npcNum);
        doCallMyList();
      }, (err) => {
        console.log(err);
      })
    }
  }

  const showToaster = (sentence:string, emoji:string) => {
    toast(sentence, {
      duration: 2000,
      icon: emoji,
      style: { fontSize: "15px" },
      iconTheme: { primary: '#000', secondary: '#fff' },
      ariaProps: { role: 'status', 'aria-live': 'polite' },
    });
  }

  return(
    <>
      <Toaster position="top-center" />
      {!visit.visit?<Tutorial/>:null}
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-cover" 
        style={{ backgroundImage: `url('${import.meta.env.VITE_S3_URL}Introduce/bgggg.png')`,
                 cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_small.png'), auto`}}>    
        <div>
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
                  style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
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
                      onClick={doSaveNickname} 
                      className="material-icons"
                      style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
                    >check</span>
                  </div>
                  :
                  <div>Name : {user.nickname} &nbsp; 
                    <span onClick={editNickname} 
                      className="material-icons align-middle"
                      style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
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
              <div className="flex-1 mt-10 ml-20 font-['passero-one'] text-[1.8rem]" >
                
                <div className="h-[45px]">
                  <span className='hover:text-[1.9rem]' onClick={()=>{setVisit({visit: false})}}
                    style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}>
                    📖 Guide
                  </span>
                </div>
                
                <div className="h-[45px] mt-10">
                  <span className='hover:text-[1.9rem]' onClick={logout}
                    style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}>
                    Logout
                  </span>
                </div>
                <div className="h-[45px]">
                  <span className='hover:text-[1.9rem]'
                    onClick={ doDeleteAccount }
                    style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}>
                    Delete Account
                  </span>
                </div>
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
                  style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }} 
                  > {"<--  "}go back</div>
                </div>
                {
                  talkList?.map((arr, i)=>(
                    <div 
                      onClick={()=>{setDetailVer(true); setTalkId(arr.talkId)}} key={i} 
                      className="group font-['passero-one'] text-[1.2rem] font-[30] flex mx-5 mb-2 cursor-pointer hover:bg-[#fff]/60 rounded-lg"
                      style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
                    >
                    <div className="w-full px-5 py-2 bg-[#fff]/70 rounded-lg flex flex-row items-center justify-between">
                      
                      <div className="flex flex-row">
                        <div className="text-[1.3rem] text-[#2E8BA8]">#{i+1} &nbsp;&nbsp;</div>
                        <div className="">Date : {arr.talkDate.slice(0,10)} &nbsp;|&nbsp; </div>
                        <div>&nbsp; Time : {arr.talkDate.slice(11, )}</div>
                      </div>
                      
                      <div onClick={(e)=>{
                          e.stopPropagation();
                          doDeleteTalk(arr.talkId);
                        }} className="hover:text-[1.7rem] align-end material-icons opacity-0 group-hover:opacity-80 text-red-700 text-[1.5rem] transform transition duration-300 ease-in-out">delete</div>
                    
                    </div>
                    </div>
                  ))
                }
                </>
                }
                {
                  detailVer && 
                  <ScriptDetailComp/>
                }
                {
                  !scriptVer && //npc list 나타나는 부분 
                  <>
                  <div className="flex flex-row justify-between">
                    <div className="m-5 text-white font-['passero-one'] font-[30] underline text-[2rem] ">Conversations</div>
                    {/* X 닫기 버튼 */}
                    <div onClick={() => {
                      setLoading({loading:true});
                      navigate(-1);
                      }} 
                      style={{ cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_hover_small.png'), auto` }}
                      className="hover:text-[1.8rem] m-5 text-red-500 font-['passero-one'] font-[30] text-[2rem] ">X
                    </div>
                  </div>
                    <CountryComp 
                      myList={myList} 
                      onBoxClick={()=>{ setScriptVer(true) }} 
                      getTalkList={(npcId:number, npcName:string)=>{
                        doGetTalkList(npcId); 
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


export default MyPage;
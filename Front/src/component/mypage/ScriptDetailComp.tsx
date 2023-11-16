import { useEffect, useState, useRef } from 'react'
import { useRecoilValue, useSetRecoilState } from "recoil";
import { talkIdAtom, detailVerAtom, npcStateName } from "../../atom/ScriptAtom";
import { talkDetailType } from '../../type/TalkType';
import { grammarCheckType } from '../../type/TalkListType';
import { getTalkList, getTalkDetailScore } from '../../api/Script';

const ScriptDetailComp = () => {

  // state
  const [detailList, setDetailList] = useState<talkDetailType[]>([]);
  const [showCorr, setShowCorr] = useState<boolean[]>([]);
  const [savedata, setData] = useState<grammarCheckType[]>([]);
  const audioRefs = useRef<Array<HTMLAudioElement | null>>([]);
  const [triangleStates, setTriangleStates] = useState<boolean[]>([]);

  // global state
  const talkId = useRecoilValue(talkIdAtom);
  const setDetailVerAtom = useSetRecoilState(detailVerAtom);
  const npcName = useRecoilValue(npcStateName);

  const doGetTalkList = () => {
    getTalkList(talkId, ({data})=> {
      const result = data.data as talkDetailType[];
      const arr = new Array(result.length).fill(false);
      //dataList의 길이만큼 문법체크가 이루어지니까, 그 길이만큼 배열을 만든다.
      setData(new Array(result.length).fill({}));
      setShowCorr(arr); 
      setDetailList(result);
      audioRefs.current = result.map(() => null);
    }, (err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    doGetTalkList();
  }, []);

  useEffect(() => {
    setTriangleStates(new Array(detailList.length).fill(false));
  }, [detailList]);

  const toggleTriangle = (index: number) => {
    const newStates = [...triangleStates];
    newStates[index] = !newStates[index];
    setTriangleStates(newStates);
  };

  //showCorr 배열 조정
  const handleCorrMode = async(talkDetailId:number, index:number) => {
    // 여기서 요청 하고 펼치기
    await getTalkDetailScore(talkDetailId, ({data}) => {
      const result = data.data as grammarCheckType;
      const temp = [...savedata];
      temp[index] = result;
      setData(temp);
      // 펼치기
      const arr = [...showCorr];
      arr[index] = !arr[index];
      setShowCorr(arr);
    }, (err) => {
      console.log(err)
    })
  }

  const playAudio = (audioIndex: number) => {
    const audioEl = audioRefs.current[audioIndex];
    if (audioEl) {
      audioEl.play();
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="m-5 my-0 text-white font-['passero-one'] font-[30] text-[1.8rem] ">
          <div style={{fontSize: "50px"}}>
            My Talk Script &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <span style={{ fontFamily: 'Arial', fontSize: "16px"}}>
            아래 &nbsp;
          </span>
          <span style={{fontFamily: 'Arial', fontSize: "16px", color: "yellow", fontWeight: "bold"}}>
            클릭 &nbsp;
          </span>
          <span style={{fontFamily: 'Arial', fontSize: "16px"}}>
            버튼과 &nbsp;
          </span>
          <span style={{fontFamily: 'Arial', fontSize: "16px", color: "red", fontWeight: "bold"}}>
            마이크 &nbsp;
          </span>
          <span style={{fontFamily: 'Arial', fontSize: "16px"}}>
            버튼을 클릭해보세요! 
          </span>
          <span style={{ fontFamily: 'Arial', fontSize: "16px"}}>
            &nbsp;&nbsp;&nbsp; 나의 &nbsp;
          </span>
          <span style={{fontFamily: 'Arial', fontSize: "16px", color: "yellow", fontWeight: "bold"}}>
            스피킹 점수 
          </span>
          <span style={{fontFamily: 'Arial', fontSize: "16px"}}>
            와 &nbsp;
          </span>
          <span style={{fontFamily: 'Arial', fontSize: "16px", color: "red", fontWeight: "bold"}}>
            음성
          </span>
          <span style={{fontFamily: 'Arial', fontSize: "16px"}}>
            을 알 수 있어요!
          </span>
          </div>
        </div>
        <div 
          className="hover:text-[1.2rem] align-center font-['passero-one'] font-[30] text-white text-[1.3rem] mr-5" 
          style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
          onClick={() => { setDetailVerAtom(false) }} 
        >{"<--  "}go back</div>
      </div>
      <div className="w-full border-t border-gray-400 border-t-[1.5px] rounded-sm p-5">
        {
          detailList?.map((value, index) => {
            return(
              <div key={index}>
                <>
                <div  className='flex flex-row'>
                  <div style={{width: "40px", display: "flex", alignItems: "center"}}>
                    {value.member ? (
                      <img 
                        src={(triangleStates[index] || showCorr[index]) ? `${import.meta.env.VITE_S3_URL}Button/back.png` : `${import.meta.env.VITE_S3_URL}Button/click2.png`}
                        width={"40"}
                        onClick={() => {toggleTriangle(index), handleCorrMode(value.talkDetailId, index)}}
                      />
                    ) : (
                      <div style={{width: "40px", height: "40px"}}></div> // 투명한 플레이스홀더
                    )}
                  </div>
                  {/* 마이크 아이콘 */}
                  <audio ref={(el) => audioRefs.current[index] = el} src={value.talkFile} preload="none" />
                  <span 
                    className="hover:text-red-200 m-2 mt-3 material-icons text-red-400 text-[2rem] cursor-pointer"
                    style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
                    onClick={() => {playAudio(index)}}
                  >mic</span>
                  {/* 문장 하나씩 */}
                  {
                    value.member?
                    <div className='m-1 mt-2 text-white font-[30] hover:text-blue-200'
                      style={{ fontSize: "25px", cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_hover_small.png'), auto` }}
                      onClick={()=>{ toggleTriangle(index), handleCorrMode(value.talkDetailId, index) }}
                    >
                      <span style={{color: "pink", fontWeight: "bold"}}>Me : </span>{value.content}
                    </div>
                    :
                    <div className='m-1 mt-2 text-white font-[30]'
                        style={{fontSize: "25px"}}>
                      <span style={{color: "yellow", fontWeight: "bold"}}>{npcName} : </span>{value.content}
                    </div>
                  }
                </div>
                {/* 문법 검사 내용 */}
                {
                  showCorr[index]?
                  <div >
                    <div style={{marginLeft: "100px"}} className='flex flex-col font-[30] ml-5 text-blue-100 p-1 px-3 border-[1px] border-blue-100 rounded-[7px]' >
                      <div  className=' flex flex-row text-blue-200 mb-2'>
                        <span>총점 : {savedata[index]?.overallScore !== null && savedata[index]?.overallScore !== undefined ? `${savedata[index]?.overallScore}점` : '  0점'}</span>&nbsp;&nbsp;|
                        <span>&nbsp;&nbsp;유창성 : {savedata[index]?.fluencyScore !== null && savedata[index]?.fluencyScore !== undefined ? `${savedata[index]?.fluencyScore}점` : '  0점'}</span>&nbsp;&nbsp;|
                        <span>&nbsp;&nbsp;정확도 : {savedata[index]?.integrityScore !== null && savedata[index]?.integrityScore !== undefined ? `${savedata[index]?.integrityScore}점` : '  0점'}</span>&nbsp;&nbsp;|
                        <span>&nbsp;&nbsp;발음 : {savedata[index]?.pronunciationScore !== null && savedata[index]?.pronunciationScore !== undefined ? `${savedata[index]?.pronunciationScore}점` : '  0점'}</span>&nbsp;&nbsp;|
                        <span>&nbsp;&nbsp;강세 : {savedata[index]?.rhythmScore !== null && savedata[index]?.rhythmScore !== undefined ? `${savedata[index]?.rhythmScore}점` : '  0점'}</span>
                      </div>
                      <div>[단어별 발음 평가] &nbsp; : &nbsp;빨간 단어는 점수가 낮은 단어입니다!</div>
                      <div className='flex flex-row mt-1'>
                        {
                          savedata[index]?.overallScore !== undefined ? (
                            <div className='flex flex-row justify-between text-blue-200 mb-2'>
                              {/* Existing score display code */}
                            </div>
                          ) : (
                            <div>발음 평가에 문제가 발생하였습니다.  더욱 조용한 공간에서 명확하게 말씀해주세요!</div>
                          )
                        }
                        {
                          savedata[index]?.wordScoreList?.map((item, index) => (
                            <div key={index}>
                              {
                                item.score >= 80?
                                <div>{item.word}&nbsp;</div>
                                :
                                <div className='text-red-300'>{item.word}&nbsp;</div>
                              }
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                  :
                  null
                }
                </>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}


export default ScriptDetailComp
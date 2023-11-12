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
          My Talk Script &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                {/* 마이크 아이콘 */}
                <div  className='flex flex-row'>
                  <audio ref={(el) => audioRefs.current[index] = el} src={value.talkFile} preload="none" />
                  <span 
                    className="hover:text-red-200 m-2 mt-3 material-icons text-red-400 text-[1.2rem] cursor-pointer"
                    style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
                    onClick={() => {playAudio(index)}}
                  >mic</span>
                  {/* 문장 하나씩 */}
                  {
                    value.member?
                    <div className='m-1 mt-2 text-white font-[30] hover:text-blue-200'
                      style={{ cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_hover_small.png'), auto` }}
                      onClick={()=>{ handleCorrMode(value.talkDetailId, index) }}
                    >
                      <span>Me : </span>{value.content}
                    </div>
                    :
                    <div className='m-1 mt-2 text-white font-[30]'>
                      <span>{npcName} : </span>{value.content}
                    </div>
                  }
                </div>
                {/* 문법 검사 내용 */}
                {
                  showCorr[index]?
                  <div className='flex flex-col font-[30] ml-5 text-blue-100 p-1 px-3 border-[1px] border-blue-100 rounded-[7px]' >
                    <div className='w-1/2 flex flex-row justify-between text-blue-200 mb-2'>
                      <div>총점 : {savedata[index].overallScore}점</div>|
                      <div>유창성 : {savedata[index].fluencyScore}점</div>|
                      <div>정확도 : {savedata[index].integrityScore}점</div>|
                      <div>발음 : {savedata[index].pronunciationScore}점</div>|
                      <div>강세 : {savedata[index].rhythmScore}점</div>
                    </div>
                    <div>[단어별 발음 평가] &nbsp;</div>
                    <div className='flex flex-row '>
                      {
                        savedata[index].wordScoreList?.map((item, index) => (
                          <div key={index}>
                            {
                              item.score >= 90?
                              <div>{item.word}&nbsp;</div>
                              :
                              <div className='text-red-300'>{item.word}&nbsp;</div>
                            }
                          </div>
                        ))
                      }
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
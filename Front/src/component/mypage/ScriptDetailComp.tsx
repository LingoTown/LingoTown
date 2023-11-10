import { useEffect, useState, useRef } from 'react'
import { useRecoilValue, useSetRecoilState } from "recoil";
import { talkIdAtom, detailVerAtom, npcStateName } from "../../atom/ScriptAtom";
import { HttpJson } from '../../api/common/Http';
import { talkDetailType } from '../../type/TalkType';
import { grammarCheckType } from '../../type/TalkListType';

export const ScriptDetailComp = () => {
  
  // state
  const [detailList, setDetailList] = useState<talkDetailType[]>([]);
  const [showCorr, setShowCorr] = useState<boolean[]>([]);
  const [savedata, setData] = useState<grammarCheckType[]>([])
  const audioRefs = useRef<Array<HTMLAudioElement | null>>([]);

  // global state
  const talkId = useRecoilValue(talkIdAtom);
  const setDetailVerAtom = useSetRecoilState(detailVerAtom);
  const npcName = useRecoilValue(npcStateName);

  useEffect(() => {
    HttpJson.get(`/api/talk/${talkId}`)
      .then((res) => {
        const reversedData = [...res.data.data];
        const arr = new Array(reversedData.length).fill(false);
        //dataList의 길이만큼 문법체크가 이루어지니까, 그 길이만큼 배열을 만든다.
        setData(new Array(reversedData.length).fill({}));
        setShowCorr(arr); 
          setDetailList(reversedData);
          audioRefs.current = reversedData.map(() => null);
      })
      .catch(console.log);
  }, []);

  //showCorr 배열 조정
  const handleCorrMode = (i:number) => {
    const arr = [...showCorr];
    arr[i] = !arr[i];
    setShowCorr(arr);
  }

  useEffect(() => {
    detailList.forEach((arr, i) => {
      if (showCorr[i]) {
        handleGrammar(arr.talkDetailId, i);
      }
    });
  }, [showCorr, detailList]);

  const handleGrammar = (talkDetailId:number, index:number) => {
      HttpJson.get(`/api/talk/detail/score/${talkDetailId}`)
      .then((res)=>{
        // console.log(res.data.data);
        const temp = [...savedata];
        temp[index] = res.data.data;
        setData(temp);
      })
      .catch(console.log)
      return(
        <>
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
              savedata[index].wordScoreList?.map((item, i) => (
                <div key={i} className=''>
                  {
                    item.score >= 70?
                    <div>
                      {item.word}&nbsp;
                    </div>
                    :
                    <div className='text-red-300'>
                      {item.word}&nbsp;
                    </div>
                  }
                </div>
              ))
            }
          </div>
        </div>
        </>
      )
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
              {/* <span 
                
                className='hover:text-[1.15rem] text-[1.2rem] text-red-300'
                style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
              >View correction
              <span className='material-icons text-[1.1rem]'>&nbsp;visibility</span>
              </span> */}
            </div>
            <div onClick={()=>{setDetailVerAtom(false)}} 
            className="hover:text-[1.2rem] align-center font-['passero-one'] font-[30] text-white text-[1.3rem] mr-5" 
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
            > {"<--  "}go back</div>
          </div>
            <div className="w-full border-t border-gray-400 border-t-[1.5px] rounded-sm p-5">
                {
                  detailList?.map((arr, i) => {
                    return(
                      <>
                      {/* 마이크 아이콘 */}
                      <div key={i} className='flex flex-row'>
                        <audio ref={(el) => audioRefs.current[i] = el} src={arr.talkFile} preload="none" />
                        <span 
                          onClick={() => {playAudio(i)}}
                          style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
                          className="hover:text-red-200 m-2 mt-3 material-icons text-red-400 text-[1.2rem] cursor-pointer"
                        >
                          mic
                        </span>
                        {/* 문장 하나씩 */}
                        <div 
                          onClick={()=>{
                            handleCorrMode(i)
                          }}
                          className='m-1 mt-2 text-white font-[30] hover:text-blue-200'>
                          {
                            arr.member == false?
                            <span>{npcName} : </span>
                            :
                            <span>Me : </span>
                          }
                          
                            {arr.content}
                          
                        </div>
                      </div>
                      {/* 문법 검사 내용 */}
                      {
                        showCorr[i] &&
                        handleGrammar(arr.talkDetailId, i)
                      }
                      </>
                    );
                  })
                }
            </div>
        </div>
    );
}
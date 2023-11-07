import {useEffect, useState, useRef} from 'react'
import { useRecoilState } from "recoil";
import { talkIdAtom } from "../../atom/ScriptAtom";
import { HttpJson } from '../../api/common/Http';
import { talkDetailType } from '../../type/TalkType';
import { detailVerAtom } from '../../atom/ScriptAtom';
import { npcStateName } from '../../atom/ScriptAtom';
function ScriptDetail() {
    const [talkId, ] = useRecoilState(talkIdAtom);
    const [detailList, setDetailList] = useState<talkDetailType[]>([]);
    const [, setDetailVerAtom] = useRecoilState(detailVerAtom);
    const [npcName, ] = useRecoilState(npcStateName);
    const [corrMode, setCorrMode] = useState(false);
    const audioRefs = useRef<Array<HTMLAudioElement | null>>([]);
    useEffect(() => {
      console.log(npcName);
      HttpJson.get(`/api/talk/${talkId}`)
          .then((res) => {
            console.log(res.data.data);
              const reversedData = [...res.data.data];
              setDetailList(reversedData);
              // Reset the refs array to match the number of detailList items
              audioRefs.current = reversedData.map(() => null);
          })
          .catch(console.log);
  }, [talkId]);

    //mp3 재생 로직
    const playAudio = (audioIndex: number) => {
      const audioEl = audioRefs.current[audioIndex];
      console.log(audioEl)
      if (audioEl) {
          audioEl.play();
      }
  };

    return (
        <div>
          <div className="flex flex-row justify-between">
            <div className="m-5 my-0 text-white font-['passero-one'] font-[30] text-[1.8rem] ">
              My Talk Script &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span 
                onClick={()=>{setCorrMode(!corrMode)}}
                className='hover:text-[1.15rem] text-[1.2rem] text-red-300'
                style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
              >View correction</span>
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
                      <div key={i} className='flex flex-row'>
                        <audio ref={(el) => audioRefs.current[i] = el} src={arr.talkFile} preload="none" />
                        <span 
                          onClick={() => {playAudio(i)}}
                          style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
                          className="hover:text-[1.23rem] m-2 mt-3 material-icons text-red-400 text-[1.2rem] cursor-pointer"
                        >
                          mic
                        </span>
                        <div className='m-1 mt-2 text-white font-[30]'>
                          {
                            arr.member == false?
                            <span>{npcName} : </span>
                            :
                            <span>Me : </span>
                          }
                          {arr.content}
                          </div>
                      </div>
                      {
                        corrMode && 
                        <div className='text-white -mt-1 ml-10'>test</div>
                      }
                      </>
                    );
                  })
                }
            </div>
        </div>
    );
}

export default ScriptDetail;
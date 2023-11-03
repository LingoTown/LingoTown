import {useEffect, useState} from 'react'
import { useRecoilState } from "recoil";
import { talkIdAtom } from "../../atom/ScriptAtom";
import { HttpJson } from '../../api/Http';
import { talkDetailType } from '../../type/TalkType';
function ScriptDetail() {
    const [talkId, setTalkId] = useRecoilState(talkIdAtom);
    setTalkId;
    const [detailList, setDetailList] = useState<talkDetailType[]>();

    useEffect(()=>{
        HttpJson.get(`/api/talk/${talkId}`)
            .then((res)=>{
                console.log(res.data.data);
                setDetailList(res.data.data);
            })
            .catch(console.log)
    }, [])
    return (
        <div>
          <div className="flex flex-row justify-between">
            <div className="m-5 my-0 text-white font-['passero-one'] font-[30] text-[1.8rem] ">My Talk Script</div>
            <div onClick={()=>{}} className="cursor-pointer align-center font-['passero-one'] font-[30] text-white text-[1.3rem] mr-5" > {"<--  "}go back</div>
          </div>
            <div className="w-full border-t border-gray-400 border-t-[2px] rounded-sm p-5">
                {
                  detailList?.map((arr)=>(
                    <>
                    <div className='flex flex-row'>
                    <span className="m-2 material-icons text-red-400 text-[1.2rem] cursor-pointer">mic</span>
                    <div className='m-1 mb-2 text-white font-[30]'>{arr.content}</div>
                    </div>
            
                    </>
                  ))
                }


            </div>
        </div>
    );
}

export default ScriptDetail;
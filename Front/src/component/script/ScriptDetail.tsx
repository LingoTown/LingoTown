import {useEffect} from 'react'
import { useRecoilState } from "recoil";
import { talkIdAtom } from "../../atom/ScriptAtom";
import { HttpJson } from '../../api/Http';

function ScriptDetail() {
    const [talkId, setTalkId] = useRecoilState(talkIdAtom);

    useEffect(()=>{
        HttpJson.get(`/api/talk/${talkId}`)
            .then((res)=>{
                console.log(res.data)
            })
            .catch(console.log)
    }, [])
    return (
        <div>
            <div className="m-5 text-white font-['passero-one'] font-[30] underline text-[2rem] ">Talk Script</div>
            testtesttest
        </div>
    );
}

export default ScriptDetail;
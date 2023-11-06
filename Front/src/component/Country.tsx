import {useState} from "react"
import { myPageNPCType } from "../type/MyPageNpcType";
import { npcStateAtom } from "../atom/ScriptAtom";
import { useRecoilState } from "recoil";
export type myPageNPCListType = {
    [key:string]: myPageNPCType[];
}
interface myListProps {
    myList : myPageNPCListType;
}

function Country(props:myListProps & {onBoxClick : ()=>void} & {getTalkList : (npcId:number, npcName:string) => void}) {
    const [npcNum, setNpcNum] = useRecoilState(npcStateAtom);
    npcNum
    const {myList} = props
    const [openToggle, setToggle] = useState(Array(Object.keys(myList).length).fill(false));
    const [openBox, setBox] = useState(Array(Object.keys(myList).length).fill(false));
  
    const getIntimacy = (intimacy : number):string => {
        if(intimacy >= 100){
            return import.meta.env.VITE_S3_URL + "Icon/GoldBar.png"
        } else if (intimacy >= 50){
            return import.meta.env.VITE_S3_URL + "Icon/SilverBar.png"
        } else {
            return import.meta.env.VITE_S3_URL + "Icon/BronzeBar.png"
        }
    }

    return (
        Object.entries(props.myList).map(([key, val], i:number) => (
        <div key={i}>
            {/* 토글, 나라이름 */}
            {
                openToggle[i]?
                <span onClick={()=>{
                    const update = [...openToggle];
                    update[i] = !update[i];
                    setToggle(update); 
                    setBox(update);
                }} className="text-white cursor-pointer rotate-90 material-icons text-[1.8rem]"
                style={{ cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_hover_small.png'), auto` }}
                >play_arrow</span> 
                :
                <span onClick={()=>{
                    const update = [...openToggle];
                    update[i] = !update[i];
                    setToggle(update);
                    setBox(update);
                }} className="text-white cursor-pointer material-icons text-[1.8rem]"
                style={{ cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_hover_small.png'), auto` }}
                >play_arrow</span>
            } 
            &nbsp;
           <span className="text-white font-['passero-one'] font-[30] text-[2rem]">{key}</span>
            {/* NPC 리스트 */}
            {
                openBox[i]?
                val.map((arr, i)=>(
                  <>
                    <div key={i} onClick={()=>{
                      setNpcNum(arr.npcId);
											props.getTalkList(arr.npcId, arr.npcName);
											props.onBoxClick();
											}} 
                      className="flex mx-5 mb-2 hover:bg-[#fff]/40 rounded-lg"
                      style={{ cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_hover_small.png'), auto` }}
                      >
                    <div className="w-full px-5 py-3 bg-[#ddd]/70 rounded-lg flex flex-row place-content-between items-center">
                        <div className="flex items-center">
													<img className="mr-3 w-[3.3rem] h-[3.3rem] rounded-full" src={arr.npcImage} alt="" />
													<div className="flex-col text-[#111] text-[0.8rem]">
														<div className="text-[1rem] font-bolder">{arr.npcName}</div>
															<div>{arr.talkCount}개의 대화</div>
															<div>마지막 대화일시 : {arr.lastVisited.split("T")[0]} | {arr.lastVisited.split("T")[1]}</div>
													</div>
                        </div>
                        <img className="w-[2rem] h-[2rem]" src={getIntimacy(arr.intimacy)} alt="" />
                    </div>
                    </div>
                </>
                ))
                 :
                ""
            }
           
        </div>
        ))
    );
}

export default Country;
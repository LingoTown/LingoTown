import {useState} from "react"
import { myPageNPCType } from "../../type/MyPageNpcType";
import { npcStateAtom } from "../../atom/ScriptAtom";
import { useSetRecoilState } from "recoil";

export type myPageNPCListType = {
  [key:string]: myPageNPCType[];
}

interface MyListProps {
  myList : myPageNPCListType;
}

export const CountryComp = (props:MyListProps & {onBoxClick : ()=>void} & {getTalkList : (npcId:number, npcName:string) => void}) => {
  const setNpcNum = useSetRecoilState(npcStateAtom);
  const {myList} = props
  const [openToggle, setToggle] = useState(Array(Object.keys(myList).length).fill(false));
  const [openBox, setBox] = useState(Array(Object.keys(myList).length).fill(false));

  const getIntimacy = (intimacy : number):string => {
    if(intimacy >= 100){
      return import.meta.env.VITE_S3_URL + "Intimacy/level_3.png"
    } else if (intimacy >= 50){
      return import.meta.env.VITE_S3_URL + "Intimacy/level_2.png"
    } else {
      return import.meta.env.VITE_S3_URL + "Intimacy/level_1.png"
    }
  }

  const clickCountryName = (index:number) => {
    const update = [...openToggle];
    update[index] = !update[index];
    setToggle(update); 
    setBox(update);
  }

  return (
    Object.entries(props.myList).map(([key, val], i:number) => (
    <div key={key}>
      {/* 토글, 나라이름 */}
      {
        openToggle[i]?
        <span
          className="text-white cursor-pointer rotate-90 material-icons text-[1.8rem]" 
          style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
          onClick={() => {
            clickCountryName(i);
          }}
        >play_arrow</span> 
        :
        <span 
          className="text-white cursor-pointer material-icons text-[1.8rem]"
          style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }}
          onClick={()=>{
            clickCountryName(i);
          }} 
        >play_arrow</span>
      } 
      &nbsp;
      <span className="text-white font-['passero-one'] font-[30] text-[2rem]">{key}</span>
      {/* NPC 리스트 */}
      {
        openBox[i]?
        val.map((arr)=>(
          <div 
            className="flex mx-5 mb-2 hover:bg-[#fff]/40 rounded-lg"
            style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }} 
            key={arr.npcId} 
            onClick={() => {
              setNpcNum(arr.npcId);
              props.getTalkList(arr.npcId, arr.npcName);
              props.onBoxClick();
            }} 
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
        ))
        :
        null
      }
    </div>
    ))
  );
}
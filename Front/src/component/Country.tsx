import {useState, useEffect} from "react"
import { myPageNPCType } from "../type/MyPageNpcType";
export type myPageNPCListType = {
    [key:string]: myPageNPCType[];
}
interface myListProps {
    myList : myPageNPCListType;
}

function Country(props:myListProps) {
    const {myList} = props
    const [openToggle, setToggle] = useState(Array(Object.keys(myList).length).fill(false));
    const [openBox, setBox] = useState(Array(Object.keys(myList).length).fill(false));
    useEffect(()=>{
        console.log(myList); 
    }, [])
    const getIntimacy = (intimacy : number):string => {
        if(intimacy >= 100){
            return "https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/Bar+gold.png"
        } else if (intimacy >= 50){
            return "https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/Bar+silver.png"
        } else {
            return "https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/Bar+bronze.png"
        }
    }
    return (
        Object.entries(props.myList).map(([key, val], i:number) => (
        <div >
            {/* 토글, 나라이름 */}
            {
                openToggle[i]?
                <span onClick={()=>{
                    const update = [...openToggle];
                    update[i] = !update[i];
                    setToggle(update); 
                    setBox(update);
                }} className="rotate-90 material-icons text-[1.8rem]">play_arrow</span> 
                :
                <span onClick={()=>{
                    const update = [...openToggle];
                    update[i] = !update[i];
                    setToggle(update);
                    setBox(update);
                }} className="material-icons text-[1.8rem]">play_arrow</span>
            } 
            &nbsp;
           <span className="font-['passero-one'] font-[30] text-[2rem]">{key}</span>
            {/* NPC 리스트 */}
            {
                openBox[i]?
                val.map((arr)=>(
                    <div className="flex mx-5 mb-2 hover:bg-[#fff]/40 rounded-lg">
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
                    ""
            }
           
        </div>
        ))
    );
}

export default Country;
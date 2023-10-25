import {useState} from "react"
// https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/Bar+bronze.png
// https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/Bar+silver.png
function Country(props:{country:string, npc:string}) {
    const [openToggle, setToggle] = useState(false);
    const [openBox, setBox] = useState(false);
    return (
        <div >
            {/* 토글, 나라이름 */}
            {
                openToggle?
                <span onClick={()=>{setToggle(false); setBox(false)}} className="cursor-pointer rotate-90 material-icons text-[1.8rem]">play_arrow</span> 
                :
                <span onClick={()=>{setToggle(true); setBox(true)}} className="cursor-pointer material-icons text-[1.8rem]">play_arrow</span>
            } 
            &nbsp;
           <span className="font-['passero-one'] text-[2rem]">{props.country}</span>
            {/* NPC 리스트 */}
            {
                openBox?
                <div className="flex mx-5">
                <div className="w-full p-5 bg-[#ddd]/70 rounded-lg">
                    <img width={"30px"} src="https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/Bar+gold.png" alt="" />
                </div>
                </div>
                :
                ""
            }
           
        </div>
    );
}

export default Country;
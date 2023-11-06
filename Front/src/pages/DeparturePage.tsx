
import { useNavigate } from "react-router-dom";
import { departures } from "../api/Departures";
import { DepartureType } from "../type/DepartureType";
import { useCustomAlert } from "../component/util/ModalUtil";
const Rows = () => {
    const navigate = useNavigate();
    const dep : DepartureType[] = departures;
    const sortTheme = (language : string) => {
        if(language === "English"){
            navigate("/themePage?language=0");
        } else if(language === "French"){
            navigate("/themePage?language=1");
        }
    }
    return (
        dep.map((el, i)=>(
            <div key={i} 
            onClick={()=>{sortTheme(el.language)}} 
            className="hover:bg-[#ddd]/40 text-[1.1rem] flex flex-row bg-[#222] p-3 rounded-lg mb-1"
            style={{ cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_hover_small.png'), auto` }}
            >
                <div className="flex w-1/6 text-yellow-300">{el.time}</div>
                <div className="flex w-2/6 font-bold text-[1.3rem]">{el.destination}</div>
                <div className="flex w-1/6">{el.Flight}</div>
                <div className="flex w-1/6">{el.Gate}</div>
                <div className={`flex w-1/6 ${el.Status === "Cancelled"? "text-red-400" : "text-blue-300"}`}>{el.Status}</div>
            </div>
        ))
    )
}
const DeparturePage = () => {
    const navigate = useNavigate();
    const customAlert = useCustomAlert();
    return (
        <>
        <div className="min-h-screen flex flex-col items-center justify-center bg-cover" style={{ backgroundImage: 'url(https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/bgggg.PNG)' }}>    
        
        <div className="w-full px-5 flex justify-between text-5xl font-bold text-white font-['passero-one']">
          <div className="hover:text-[2.8rem] ml-8 drop-shadow-lg" onClick={async() => {
            localStorage.removeItem("userAtom");
            await customAlert("Notice", "로그아웃 되었습니다.")
            navigate("/")
          }}
          style={{ cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_hover_small.png'), auto` }}
          >Logout</div>
          <div className="hover:text-[2.8rem] mr-8 drop-shadow-lg" onClick={() => {
            navigate("/Main");
          }}
          style={{ cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_hover_small.png'), auto` }}
          >MyPage</div>
        </div>
        {/* Departure board */}
        <div className="flex flex-col  w-4/5 mt-10 rounded-lg">
          <div className="p-2 px-10 text-[3rem] font-bold w-full font-['passero-one'] bg-[#F5E4A0]/90 rounded-t-lg ">Departures &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="material-icons text-[3rem] align-middle">flight_takeoff</span></div>
          <div className="p-4 py-10 bg-[#333]/90 rounded-b-lg flex justify-center">
            {/* table starts */}
          <div className=" w-5/6 text-[#fff]">
            <div className="px-5 text-[1.3rem] text-[#ccc] font-bold flex flex-row justify-between mb-2">
                <div className="w-1/6">Time</div>
                <div className="w-2/6">Destination</div>
                <div className="w-1/6">Flight</div>
                <div className="w-1/6">Gate</div>
                <div className="w-1/6">Status</div>
            </div>
            <Rows></Rows>
            </div>
          </div>
          
        </div>

        </div>
        </>
    );
}

export default DeparturePage;
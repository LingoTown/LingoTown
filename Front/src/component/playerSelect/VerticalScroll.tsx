import { PlayerSelectAtom } from "../../atom/PlayerSelectAtom";
import { useRecoilState } from 'recoil';

const VerticalScroll = () => {
  
  /* User Info */
  const [selPlayer, setSelPlayer] = useRecoilState(PlayerSelectAtom); //이전 캐릭터 선택 기록이 있다면 캐릭터 index번호 : 아니면 -1
  const PlayerImgList = ["/selectPlayer/m1Img.png", "/selectPlayer/f11Img.png", "/selectPlayer/m31Img.png", "/selectPlayer/f20Img.png", "/selectPlayer/m11Img.png", "/selectPlayer/f12Img.png", "/selectPlayer/m14Img.png", "/selectPlayer/f14Img.png", "/selectPlayer/m29Img.png", "/selectPlayer/f21Img.png", "/selectPlayer/m28Img.png", "/selectPlayer/f22Img.png"];

  return (
    <div className="absolute z-30 w-[16%] h-[100%] flex items-center justify-center ml-3">
      <div
        style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_small.png'), auto` }}  
        className="w-[100%] h-[90%] rounded-xl overflow-y-auto flex justify-center select-none">
        <div className="flex flex-col max-w-[300px] h-[90%]">
          {PlayerImgList.map((img, index)=>{
            return(
              <div key={index}
                style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }} 
                className={selPlayer === index ? "rounded-xl mb-6 shadow-md bg-[#BDA4D5] h-[160px]" : "rounded-xl mb-6 shadow-md bg-white h-[160px]"}
                onClick={() => setSelPlayer(index)}> {/**1부터 시작하는 id */}
                <img className="rounded-xl w-[100%] h-[100%]" src={img} />
              </div>
            )
          })}       
        </div>
      </div>
    </div>
  );
};

export default VerticalScroll;
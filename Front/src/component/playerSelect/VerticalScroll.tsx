import { PlayerSelectAtom } from "../../atom/PlayerSelectAtom";
import { useRecoilState } from 'recoil';

const VerticalScroll = () => {
  
  /* User Info */
  const [selPlayer, setSelPlayer] = useRecoilState(PlayerSelectAtom); //이전 캐릭터 선택 기록이 있다면 캐릭터 index번호 : 아니면 -1
  const PlayerImgList = ["/selectPlayer/m1Img.png", "/selectPlayer/f11Img.png", "/selectPlayer/m31Img.png", "/selectPlayer/f20Img.png", "/selectPlayer/m11Img.png", "/selectPlayer/f12Img.png", "/selectPlayer/m14Img.png", "/selectPlayer/f14Img.png", "/selectPlayer/m29Img.png", "/selectPlayer/f21Img.png", "/selectPlayer/m28Img.png", "/selectPlayer/f22Img.png"];

  return (
    // Add a max height and overflow-y-auto to allow vertical scrolling
    <div className="absolute z-30 left-6 w-[13%] h-[100%] overflow-y-auto flex items-center select-none">
      <div className="flex flex-col overflow-y-auto h-[90%]">
        {PlayerImgList.map((img, index)=>{
          return(
            <div key={index}
              className={selPlayer === index ? "rounded-xl mb-5 shadow-md bg-[#BDA4D5] h-[160px]" : "rounded-xl mb-5 shadow-md bg-white h-[160px]"}
              onClick={() => setSelPlayer(index)}> {/**1부터 시작하는 id */}
              <img className="rounded-xl w-[100%] h-[100%]" src={img} />
            </div>
          )
        })}       
      </div>
    </div>
  );
};

export default VerticalScroll;
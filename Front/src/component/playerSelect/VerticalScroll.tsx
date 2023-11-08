import { PlayerSelectAtom } from "../../atom/PlayerSelectAtom";
import { useRecoilState } from 'recoil';

const VerticalScroll = () => {
  
  /* User Info */
  const [selPlayer, setSelPlayer] = useRecoilState(PlayerSelectAtom);
  const PlayerImgList = ["/selectPlayer/m1Img.png", "/selectPlayer/f11Img.png", "/selectPlayer/m31Img.png", "/selectPlayer/f20Img.png", "/selectPlayer/m11Img.png", "/selectPlayer/f12Img.png", "/selectPlayer/m14Img.png", "/selectPlayer/f14Img.png", "/selectPlayer/m29Img.png", "/selectPlayer/f21Img.png", "/selectPlayer/m28Img.png", "/selectPlayer/f22Img.png"];

  return (
    // Add a max height and overflow-y-auto to allow vertical scrolling
    <div className="absolute z-30 left-6 w-[12%] h-[90%] overflow-y-auto bg-black">
      <div className="overflow-y-auto">
        {PlayerImgList.map((img, index)=>{
          return(
            <div key={index}
              className={selPlayer === index ? "rounded-xl mt-3 shadow-md bg-[#BDA4D5] h-[160px]" : "rounded-xl mt-2 shadow-md bg-white h-[160px] opacity-60"}
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
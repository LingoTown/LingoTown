import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { userAtom } from '../../atom/UserAtom';
import { PlayerSelectAtom } from "../../atom/PlayerSelectAtom";
import { useRecoilState, useRecoilValue } from 'recoil';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from "@react-three/drei";
import { showToaster } from "../../pages/PlayerSelectPage";

const VerticalScroll = () => {
  
  /* User Info */
  const user = useRecoilValue(userAtom);
  const [selPlayer, setSelPlayer] = useRecoilState(PlayerSelectAtom); //이전 캐릭터 선택 기록이 있다면 캐릭터 index번호 : 아니면 -1
  const PlayerImgList = ["/selectPlayer/m1Img.png", "/selectPlayer/f11Img.png", "/selectPlayer/m31Img.png", "/selectPlayer/f20Img.png", "/selectPlayer/m11Img.png", "/selectPlayer/f12Img.png", "/selectPlayer/m14Img.png", "/selectPlayer/f14Img.png", "/selectPlayer/m29Img.png", "/selectPlayer/f21Img.png", "/selectPlayer/m28Img.png", "/selectPlayer/f22Img.png"];

  /* 미획득 플레이어 체크 후 설정 */
  const settingPlayer = (index:number) => {
    if(!user.lockList[index].islocked) setSelPlayer(index);
  }

  

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
                className={selPlayer === index ? "rounded-xl mb-6 shadow-md bg-[#BDA4D5] h-[160px]" : "rounded-xl mb-6 shadow-md bg-white h-[160px] hover:bg-[#BDA4D5]"}
                onClick={() => {settingPlayer(index)}}
              > {/**1부터 시작하는 id */}
                <img className="rounded-xl w-[100%] h-[100%]" src={img} alt={`Player ${index}`}/>

                { 
                  user.lockList[index].islocked?
                
                  <div onClick={()=>showToaster("미션을 해결하고 캐릭터를 얻어보세요!", "❌")} className="relative z-40 top-[-160px] bg-black/90 rounded-xl max-w-[200px] h-full">
                    <Canvas>
                      <Suspense fallback={null}>
                        <Environment preset="sunset" />
                        <Lock
                          isLocked={user.lockList[index].islocked}
                          position={[3, -3, 0]}
                        />
                      </Suspense>
                    </Canvas>
                  </div>
                  :
                  null
                }
              </div>
            )
          })}       
        </div>
      </div>
    </div>
  );
};

/* 3D 자물쇠 */
const Lock = ({ isLocked, position, onClick }: any) => {
  const lock = useGLTF(import.meta.env.VITE_S3_URL + "Objects/Lock1/scene.gltf");
  const lockRef = useRef<THREE.Mesh>(null);
  useFrame(() => {
    const time = Date.now() * 0.005;
    if (lockRef.current) lockRef.current.rotation.y = Math.sin(time) * 0.2;
  });

  return isLocked ? (
    <mesh onClick={onClick} position={position} ref={lockRef}>
      <primitive object={lock.scene.clone()} scale={0.3} />
    </mesh>
  ) : null;
};

export default VerticalScroll;
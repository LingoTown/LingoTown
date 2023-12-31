import { Suspense, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { userAtom } from '../../atom/UserAtom';
import { PlayerSelectAtom } from "../../atom/PlayerSelectAtom";
import { useRecoilState, useRecoilValue } from 'recoil';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from "@react-three/drei";
import { showToaster } from "../../pages/PlayerSelectPage";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { loadingAtom } from '../../atom/LoadingAtom';

const VerticalScroll = () => {

  /* loading */
  const loading = useRecoilValue(loadingAtom);
  
  /* User Info */
  const user = useRecoilValue(userAtom);
  const [selPlayer, setSelPlayer] = useRecoilState(PlayerSelectAtom); //이전 캐릭터 선택 기록이 있다면 캐릭터 index번호 : 아니면 -1
  const PlayerImgList = ["Player/2D/m1Img.png", "Player/2D/f11Img.png", "Player/2D/m27Img.png", "Player/2D/m14Img.png", "Player/2D/f14Img.png", "Player/2D/m28Img.png", "Player/2D/f22Img.png", "Player/2D/m29Img.png", "Player/2D/f21Img.png", "Player/2D/m11Img.png", "Player/2D/f12Img.png", "Player/2D/m31Img.png", "Player/2D/f20Img.png"];

  /* 미획득 플레이어 체크 후 설정 */
  const settingPlayer = (index:number) => {
    if(!user.lockList[index].islocked) setSelPlayer({index:index, change:false});
  }

  const playerDescriptions = [
    "기본 캐릭터",
    "기본 캐릭터",
    "1차 배포 기간에 회원가입 ",
    "퀘스트를 한 번 이상 성공하기",
    "NPC와 대화를 한 번 이상 완료하기",
    "퀘스트를 다섯 개 이상 성공하기",
    "퀘스트를 열 개 이상 성공하기",
    "특정 NPC와 친밀도 100% 쌓기",
    "모든 NPC와 한 번씩 대화 해보기",
    "EventHall 맵에서 영상을 한 번 이상 틀어보기",
    "영어 퀘스트를 50% 이상 완료하기",
    "프랑스 퀘스트를 50% 이상 완료하기",
    "2차 배포 기간에 회원가입 하신 분들을 위한 캐릭터 (언젠가...)"
  ];

  useEffect(()=>{
    // 이전 캐릭터 불러오기
    setSelPlayer({
      index:user.characterId-1,
      change:false
    });
  },[])

  return (
    <div className={loading.loading?"h-[0.1px]":"absolute z-30 w-[16%] h-[100%] flex items-center justify-center ml-3"}>
      <div
        style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_small.png'), auto` }}  
        className="w-[100%] h-[90%] rounded-xl overflow-y-auto flex justify-center select-none">
        <div className="flex flex-col max-w-[300px] h-[90%]">
        {PlayerImgList.map((img, index) => {
          return (
            <div key={index}
              style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }} 
              className={selPlayer.index === index ? "rounded-xl mb-6 shadow-md bg-[#BDA4D5] h-[160px]" : "rounded-xl mb-6 shadow-md bg-white h-[160px] hover:bg-[#BDA4D5]"}
              onClick={() => { settingPlayer(index) }}
            >
              <img className="rounded-xl w-[100%] h-[100%]" src={`${import.meta.env.VITE_S3_URL}`+img} alt={`Player${index}`}/>
              { 
                user.lockList[index].islocked ?
                <>
                  <Tooltip id={`tooltip-${index}`} />

                    <div data-tooltip-id={`tooltip-${index}`} data-tooltip-content={playerDescriptions[index]} data-tooltip-place="right" onClick={() => showToaster("미션을 해결하고 캐릭터를 얻어보세요!", "❌")} className="relative z-40 top-[-160px] bg-black/90 rounded-xl max-w-[200px] h-full">
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
                  </>
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
type LockProps = {
  isLocked: boolean;
  position: [number, number, number];
  onClick?: () => void;
};

const Lock = ({ isLocked, position, onClick }: LockProps) => {
  /* loading */
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
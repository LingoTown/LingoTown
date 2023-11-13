import { useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import VerticalScroll from "../component/playerSelect/VerticalScroll";
import { SelectButtonComp } from "../component/playerSelect/SelectButtonComp";
import { CancelButtonComp } from '../component/playerSelect/CancelButtonComp';
import toast, { Toaster } from 'react-hot-toast';
import LoadingPage from "./LoadingPage";
import { loadingAtom } from "../atom/LoadingAtom";
import { useRecoilState, useRecoilValue } from "recoil"
import { userAtom } from '../atom/UserAtom';
import { CharacterLockInfo } from '../type/CharacterType';
import { getCharacterLockInfo } from '../api/Character'
import { lockOffCharacter } from '../api/Character';
import { intimacyAtom } from '../atom/IntimacyAtom';
import { useCustomAlert } from '../component/util/ModalUtil';


interface playerSelectPage {
  theme: JSX.Element;
}

/* 알림 */
export const showToaster = (sentence:string, emoji:string) => {
  toast(sentence, {
    duration: 2000,
    icon: emoji,
    style: { fontSize: "20px", fontFamily:"GabiaSolmee" },
    iconTheme: { primary: '#000', secondary: '#fff' },
    ariaProps: { role: 'status', 'aria-live': 'polite' },
  });
}

export const PlayerSelectPage: React.FC<playerSelectPage> = (props: playerSelectPage): JSX.Element => {

  const [user, setUser] = useRecoilState(userAtom);
  const [intimacy] = useRecoilState(intimacyAtom);
  const customAlert = useCustomAlert();

  /* 캐릭터 잠금정보 불러오기 */
  const getCharacterLock = async () => {

    await getCharacterLockInfo(({data}: any) => {
        const result = data.data as CharacterLockInfo[];

        setUser(prev => ({
            ...prev, 
            lockList: result,
        }))
    }, 
    (error) => {
      console.log(error);
    });
  };

  /* 캐릭터 잠금 해제 */
  const characterLockOff = async(id: number) => {
    const quizId = id;

    await lockOffCharacter(quizId, ({data}) => {
      console.log(data.message);
    },
    error => {
      console.log(error);
    })
  }

  useEffect(() => {
    getCharacterLock();
  }, [])

  const loading = useRecoilValue(loadingAtom);

  const textureLoader = new THREE.TextureLoader();
  const worldbackgroundTexture = textureLoader.load(import.meta.env.VITE_S3_URL + 'BackGround/stage.png');

  useEffect(()=>{
    document.body.style.cursor = `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_small.png'), auto`;
  },[]);

  useEffect(() => {
    if(intimacy.npcList.some(npc => npc.intimacy > 0) && user.lockList[4].islocked) {
      setUser({
        ...user,
        lockList: user.lockList.map((item, index) => 
          index === 4 ? {...item, islocked: false} : item
        )
      })

      characterLockOff(5);
      customAlert("Notice", "NPC와 대화를 최초 완료하셨습니다! 5번 캐릭터가 잠금 해제 됩니다!");
    }

    if(intimacy.npcList.every(npc => npc.intimacy > 0) && user.lockList[8] && !user.lockList[4].islocked) {
      setUser({
        ...user,
        lockList: user.lockList.map((item, index) => 
          index === 8 ? {...item, islocked: false} : item
        )
      })

      customAlert("Notice", "모든 NPC와 대화를 완료하셨습니다! 9번 캐릭터가 잠금 해제 됩니다!");
    }

    if(intimacy.npcList.some(npc => npc.intimacy === 100) && user.lockList[7] && !user.lockList[4].islocked) {
      setUser({
        ...user,
        lockList: user.lockList.map((item, index) => 
          index === 7 ? {...item, islocked: false} : item
        )
      })

      customAlert("Notice", "특정 NPC와 최대 친밀도를 달성했습니다! 8번 캐릭터가 잠금 해제 됩니다!");
    }
  }, []);

  return(
    <>
      {
        loading.loading? <LoadingPage/> : null
      }

      {
        !loading.loading?<Toaster position="top-center" /> : null
      }

      <VerticalScroll/>
      

      <Canvas shadows style={{ height:loading.loading?"0.01vh":"100vh"}} camera={{ position: [0, 0, 10], fov: 30 }}>
        {props.theme}
        <primitive object={worldbackgroundTexture} attach="background" />
      </Canvas>

      {/* 선택 완료 버튼 */}
      {
        !loading.loading? <SelectButtonComp/> : null
      }
      {
        !loading.loading? <CancelButtonComp/> : null
      }
    </>
  )
}

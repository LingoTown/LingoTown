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

interface playerSelectPage {
  theme: JSX.Element;
}

/* 알림 */
export const showToaster = (sentence:string, emoji:string) => {
  toast(sentence, {
    duration: 2000,
    icon: emoji,
    style: { fontSize: "15px" },
    iconTheme: { primary: '#000', secondary: '#fff' },
    ariaProps: { role: 'status', 'aria-live': 'polite' },
  });
}

export const PlayerSelectPage: React.FC<playerSelectPage> = (props: playerSelectPage): JSX.Element => {

  const [user, setUser] = useRecoilState(userAtom);

  /* 캐릭터 잠금정보 불러오기 */
  const getCharacterLock = async () => {

    await getCharacterLockInfo(({data}: any) => {
        const result = data.data as CharacterLockInfo[];
        console.log(result)
        setUser(prev => ({
            ...prev, 
            lockList: result,
        }))
    }, 
    (error) => {
      console.log(error);
    });
  };

useEffect(() => {
  getCharacterLock();
}, [])

  const loading = useRecoilValue(loadingAtom);

  const textureLoader = new THREE.TextureLoader();
  const worldbackgroundTexture = textureLoader.load(import.meta.env.VITE_S3_URL + 'BackGround/stage.png');

  useEffect(()=>{
    document.body.style.cursor = `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_small.png'), auto`;
  },[]);


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

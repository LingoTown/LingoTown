import {
  Environment,
  MeshPortalMaterial,
  PortalMaterialType,
  RoundedBox,
  useGLTF,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Dispatch, SetStateAction, Suspense, lazy, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import * as THREE from "three";
import background from "../../../public/background/background.png";
import { userAtom } from "../../atom/UserAtom";
import { useCustomAlert } from '../util/ModalUtil';
import { BorderedRoundedBox } from "./BorderRoundBox";
import Loading from './util/Loading';
import { TextUtil } from './util/TextUtil';

type CategoryComp = {
  children: React.ReactNode;
  texture: number;
  name: string;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  setHovered: Dispatch<SetStateAction<string>>;
  enabled: boolean;
  setEnabled: Dispatch<SetStateAction<boolean>>;
  language: number;
}

const Park = lazy(() => import('../../../public/smallmap/Park').then(module => {
  return { default: module.Park }
}));
const EventHall = lazy(() => import('../../../public/smallmap/EventHall').then(module => {
  return { default: module.EventHall }
}));
const Restaurant = lazy(() => import('../../../public/smallmap/Restaurant').then(module => {
  return { default: module.Restaurant }
}));
const Gallery = lazy(() => import('../../../public/smallmap/Gallery').then(module => {
  return { default: module.Gallery }
}));

export const CategoryComp: React.FC<CategoryComp> = ({
  children, texture, name, active, setActive, setHovered, enabled, setEnabled, language, ...props
}) => {

  const params = new URLSearchParams(window.location.search);

  const languageParam: string | null = params.get("language");

  let lockMessage = "\n        프랑스로 출국하시면 \n         이용하실 수 있어요!";

  if(languageParam == "1")
    lockMessage = "\n                     미국이나 영국으로 \n           출국하시면 들어가실 수 있어요!"


  const text = useState(["클릭하시면 맵을 미리 볼 수 있어요!", lockMessage])[0];

  const [isLoading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  const textureLoader = new THREE.TextureLoader();
  textureLoader.crossOrigin = 'anonymous';

  const backgroundTexture = textureLoader.load(background);

  const portalMaterial = useRef<PortalMaterialType>(null);

  useFrame((_state, delta) => {
    if (portalMaterial.current !== null) {
      const worldOpen = active === name;
      easing.damp(portalMaterial.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
    }
  })

  const lock = useGLTF(import.meta.env.VITE_S3_URL + "Objects/Lock1/scene.gltf")

  const lockRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const time = Date.now() * 0.005;

    if (lockRef.current) lockRef.current.rotation.y = Math.sin(time) * 0.2;
  });

  const user = useRecoilValue(userAtom);
  const customAlert = useCustomAlert();

  return (
    <group {...props}>
      <BorderedRoundedBox />
      <RoundedBox
        name={name}
        args={[3, 1.75, 1]}
        scale={[1, 1, 1]}
        onClick={() => {
          if (!enabled && active !== name) {
            if (((language === 0 || language === 2) && name !== "아트 갤러리") || (language === 1 && name === "아트 갤러리")) {
              setActive(name);
              setEnabled(true);
            } else if (((language === 0 || language === 2) && name === "아트 갤러리") || (language === 1 && name !== "아트 갤러리")) {
              customAlert(user.nickname + "님", "해당 테마는 미국 또는 영국으로 출국하시면 이용하실 수 있습니다.");
            }
          }
        }}
        onPointerEnter={() => {
          if (!enabled && active !== name) {
            setHovered(name);
          }
        }}
        onPointerLeave={() => {
          if (!enabled && active !== name) {
            setHovered("");
          }
        }}
      >
        <MeshPortalMaterial
          side={THREE.BackSide}
          ref={portalMaterial}
        >
          <ambientLight intensity={0.5} />
          <Environment preset="dawn" />

          {children}

          <Suspense fallback={<Loading backgroundTexture={backgroundTexture}/>}>
            {texture === 1 && <Park position={[-2, -1, -3]} rotation={[Math.PI / 50, 270 * Math.PI / 180, 0]} onLoaded={() => handleLoad()} />}
            {texture === 2 && <EventHall position={[1.4, -2, 9]} rotation={[Math.PI / 80, Math.PI/2.5, 0]} onLoaded={() => handleLoad()} />}
            {texture === 3 && <Restaurant position={[2, -2.1, 1]} rotation={[-15*Math.PI/360, 0, 0]} onLoaded={() => handleLoad()} />}
            {texture === 4 && <Gallery position={[-1, -4, 0]} rotation={[-10*Math.PI/360, Math.PI / 2, 0]} onLoaded={() => handleLoad()} />}
          </Suspense>
        </MeshPortalMaterial>

        {texture === 2 && !isLoading ? <TextUtil x={0} y={0} z={0} size={0.2} color="white" name={text[0]} /> : <></>}
        {(texture === 1 || texture === 3 || texture === 4) && !isLoading ? <TextUtil x={0} y={0} z={0} size={0.2} color="black" name={text[0]} /> : <></>}
        {(texture === 0) ? (
          <>
            <TextUtil x={(language === 0 || language === 2) ? -0.15 : -0.2} y={0} z={0} size={0.2} color="black" name={text[1]} />
            <primitive
              ref={lockRef}
              scale={0.05}
              position-x={0}
              position-y={0.2}
              object={lock.scene.clone()}
            />
          </>
          ) : <></>
        }
      </RoundedBox>
    </group>
  )
}

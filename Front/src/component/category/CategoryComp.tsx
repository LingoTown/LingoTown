import {
  Environment,
  MeshPortalMaterial,
  PortalMaterialType,
  RoundedBox,
  useGLTF,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense, lazy, useRef, useState } from "react";
import * as THREE from "three";
import background from "../../../public/background/background.png";
import { useCustomAlert } from '../util/ModalUtil';
import { BorderedRoundedBox } from "./BorderRoundBox";
import { TextUtil } from './util/TextUtil';

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

export const CategoryComp: React.FC<{
  children: React.ReactNode;
  texture: number;
  name: string;
  active: string | null;
  setActive: (name: string | null) => void;
  setHovered: (name: string | null) => void;
  enabled: boolean | false;
  setEnabled: (name: boolean | false) => void;
  language: number;
}> = ({
  children, texture, name, active, setActive, setHovered, enabled, setEnabled, language, ...props
}) => {
  const text = useState(["미리보기", "잠금"])[0];

  const [isLoading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  const Loading: React.FC = () => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = 'anonymous';

    const backgroundTexture = textureLoader.load(background);


    return (
      <group>
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[3.5, 2.5, 1]} />
          <meshBasicMaterial map={backgroundTexture} />
        </mesh>
        <TextUtil x={0} y={0} z={0} size={0.2} color="white" name="Loading" />
      </group>
    )
  };

  const portalMaterial = useRef<PortalMaterialType | null>(null);

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
              customAlert("Notice", "해당 테마는 아직 사용하실 수 없습니다.");
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
            setHovered(null);
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

          <Suspense fallback={<Loading />}>
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
              position-x={0.2}
              position-y={-0.1}
              object={lock.scene.clone()}
            />
          </>
          ) : <></>
        }
      </RoundedBox>
    </group>
  )
}
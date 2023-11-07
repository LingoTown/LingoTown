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
import { TextUtil } from './util/TextUtil';
import { BorderedRoundedBox } from "./BorderRoundBox";

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
  const text = useState([["Preview", "Avant-première"],["Locked", "Verrouillé"]])[0];

  const [isLoading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  const Loading: React.FC = () => {
    const textureLoader = new THREE.TextureLoader();
    const backgroundTexture = textureLoader.load(import.meta.env.VITE_S3_URL + "Introduce/background.png");


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

  return (
    <group {...props}>
      <BorderedRoundedBox />
      <RoundedBox
        name={name}
        args={[3, 1.75, 1]}
        scale={[1, 1, 1]}
        onClick={() => {
          if (!enabled && active !== name) {
            if ((language === 0 && name !== "gallery") || (language === 1 && name === "galerie")) {
              setActive(name);
              setEnabled(true);
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
            {texture === 1 && <Park position={[0, -1, 0]} rotation={[0, 270 * Math.PI / 180, 0]} onLoaded={() => handleLoad()} />}
            {texture === 2 && <EventHall position={[0, -2, 0]} rotation={[0 * Math.PI / 180, 0, 0]} onLoaded={() => handleLoad()} />}
            {texture === 3 && <Restaurant position={[3, -2, 0]} rotation={[0, 0 * Math.PI / 180, 0]} onLoaded={() => handleLoad()} />}
            {texture === 4 && <Gallery position={[3, 1, 2]} rotation={[0, 10 * Math.PI / 180, 0]} onLoaded={() => handleLoad()} />}
          </Suspense>
        </MeshPortalMaterial>

        {texture === 2 && !isLoading ? <TextUtil x={0} y={0} z={0} size={0.2} color="white" name={text[0][language]} /> : <></>}
        {(texture === 1 || texture === 3 || texture === 4) && !isLoading ? <TextUtil x={0} y={0} z={0} size={0.2} color="black" name={text[0][language]} /> : <></>}
        {texture === 0 ? (
          <>
            <TextUtil x={language === 0 ? -0.15 : -0.2} y={0} z={0} size={0.2} color="black" name={text[1][language]} />
            <primitive
              ref={lockRef}
              scale={0.05}
              position-x={language === 0 ? 0.35 : 0.4}
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
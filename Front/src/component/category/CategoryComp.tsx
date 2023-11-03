import {
  Environment,
  MeshPortalMaterial,
  PortalMaterialType,
  RoundedBox,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense, lazy, useRef, useState } from "react";
import * as THREE from "three";
import { TextUtil } from './util/TextUtil';

const Park = lazy(() => import('../../../public/map/park/Park').then(module => {
  return { default: module.Park }
}));
const EventHall = lazy(() => import('../../../public/map/eventHall/EventHall').then(module => {
  return { default: module.EventHall }
}));
const Restaurant = lazy(() => import('../../../public/map/restaurant/Restaurant').then(module => {
  return { default: module.Restaurant }
}));
const House = lazy(() => import('../../../public/map/house/House').then(module => {
  return { default: module.House }
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
  const text = useState(["Preview", "Avant-première"])[0];

  const [isLoading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  const Loading: React.FC = () => {
    const textureLoader = new THREE.TextureLoader();
    const backgroundTexture = textureLoader.load('../map/introduce/bgggg.png');

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

  return (
    <group {...props}>
      <RoundedBox
        name={name}
        args={[3, 1.75, 1]}
        scale={[1, 1, 1]}
        onClick={() => {
          if (!enabled && active !== name) {
            setActive(name);
            setEnabled(true);
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
            {texture === 3 && <Restaurant position={[3, -2, 0]} rotation={[0, 10 * Math.PI / 180, 0]} onLoaded={() => handleLoad()} />}
            {texture === 4 && <House position={[-3, 1, 3]} rotation={[0, -50 * Math.PI / 180, 0]} onLoaded={() => handleLoad()} />}
          </Suspense>
        </MeshPortalMaterial>

        {texture === 4 && !isLoading ? <TextUtil x={0} y={0} z={0} size={0.2} color="white" name={text[language]} /> : <></>}
        {(texture === 1 || texture === 2 || texture === 3) && !isLoading ? <TextUtil x={0} y={0} z={0} size={0.2} color="black" name={text[language]} /> : <></>}
      </RoundedBox>
    </group>
  )
}
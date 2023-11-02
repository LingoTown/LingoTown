import {
  Environment,
  MeshPortalMaterial,
  PortalMaterialType,
  RoundedBox,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef, useState } from "react";
import * as THREE from "three";
import { EventHall } from '../../../public/map/eventHall/EventHall';
import { House } from '../../../public/map/house/House';
import { Park } from '../../../public/map/park/Park';
import { Restaurant } from '../../../public/map/restaurant/Restaurant';
import { TextUtil } from './util/TextUtil';

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
          <Environment preset="sunset" />

          {children}

          {
            texture === 1 ? <Park /> :
            texture === 2 ? <EventHall /> :
            texture === 3 ? <Restaurant /> :
            texture === 4 ? <House /> :
            null
          }
        </MeshPortalMaterial>
        <TextUtil x={0} y={0} z={0} size={0.2} color="white" name={text[language]} />
      </RoundedBox>
    </group>
  )
}
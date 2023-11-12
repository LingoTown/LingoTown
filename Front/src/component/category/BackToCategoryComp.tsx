import { useState } from 'react';
import { TextUtil } from "./util/TextUtil";
import { Earth } from "../../../public/smallmap/Earth";

export const BackToCategoryComp: React.FC<{
  x: number;
  y: number;
  z: number;
  name: string;
  color: string;
  active: string | null;
  setActive: (name: string | null) => void;
  setHovered: (name: string | null) => void;
  enabled: boolean | false;
  setEnabled: (name: boolean | false) => void;
  isDisplayed: boolean | false;
}> = ({
  x, y, z, name, color, active, setActive, setHovered, enabled, setEnabled, isDisplayed
}) => {
  const text = useState(["뒤로 가기"])[0];

  return (
    <group position={[x, y, z]}>
      <mesh
        visible={isDisplayed ? true : false}
        onClick={() => {
          if (enabled && active === name) {
            setActive(null);
            setEnabled(false);
          }
        }}
        onPointerEnter={() => {
          if (enabled && active === name) {
            setHovered(name);
          }
        }}
        onPointerLeave={() => {
          if (enabled && active === name) {
            setHovered(null);
          }
        }}
      >
        <Earth />
      </mesh>
      <mesh position={[0, 2, 0]}>
        <TextUtil x={0} y={0} z={0} color={color} size={0.5} name={text[0]} />
        <meshStandardMaterial
          transparent={active !== name}
          color={color}
        />
      </mesh>
    </group>
  );
}
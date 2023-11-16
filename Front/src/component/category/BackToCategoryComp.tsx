import { Dispatch, SetStateAction, useState } from 'react';
import { Earth } from "../../../public/smallmap/Earth";
import { TextUtil } from "./util/TextUtil";

type BackToCategoryCompProps = {
  x: number;
  y: number;
  z: number;
  name: string;
  color: string;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  setHovered: Dispatch<SetStateAction<string>>;
  enabled: boolean;
  setEnabled: Dispatch<SetStateAction<boolean>>;
  isDisplayed: boolean;
}

export const BackToCategoryComp: React.FC<BackToCategoryCompProps> = ({
  x, y, z, name, color, active, setActive, setHovered, enabled, setEnabled, isDisplayed
}) => {
  const text = useState(["뒤로 가기"])[0];

  return (
    <group position={[x, y, z]}>
      <mesh
        visible={isDisplayed}
        onClick={() => {
          if (enabled && active === name) {
            setActive("");
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
            setHovered("");
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
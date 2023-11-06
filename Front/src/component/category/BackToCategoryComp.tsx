import { useState } from 'react';
import { TextUtil } from "./util/TextUtil";
import { MeshReflectorMaterial } from '@react-three/drei';

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
  language: number;
}> = ({
  x, y, z, name, color, active, setActive, setHovered, enabled, setEnabled, language
}) => {
  const text = useState(["Click to go back", "Cliquez pour retourner"])[0];

  return (
    <group position={[x, y, z]}>
      <mesh
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
        <octahedronGeometry />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={30}
          roughness={0}
          depthScale={.5}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="gray"
          metalness={1}
          mirror={0.5}
        />
      </mesh>
      <mesh position={[0, 2, 0]}>
        <TextUtil x={0} y={0} z={0} color={color} size={0.5} name={text[language]} />
        <meshStandardMaterial
          transparent={active !== name}
          color={color}
        />
      </mesh>
    </group>
  );
}
import { TextUtil } from '../category/util/TextUtil'; 
import { RoundedBox } from '@react-three/drei';

export const SelectButtonComp: React.FC<{ x: number; y: number; z: number; }> = ({ x, y, z }) => {

  return (
    <mesh
      position={[x, y, z]}
    >
      <RoundedBox
        args={[0.8, 0.25, 0.1]}
      >
        <meshStandardMaterial attach="material" color={"#deb887"} />
        <TextUtil
          x={0} y={0} z={0.051} color="black" size={0.15} name={""}
        />
      </RoundedBox>
    </mesh>
  );
}
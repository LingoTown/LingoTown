import React from 'react';
import { useBox } from '@react-three/cannon';

type ContainerWallProps = {
  size: [number, number, number];
  position: [number, number, number];
  color: string;
  name: string;
  mass: number; // mass 속성 추가
};

const ContainerWall: React.FC<ContainerWallProps> = ({
  size,
  position,
  color,
  name,
  mass,
}) => {
  const [ref]:any = useBox(() => ({
    args: size,
    position,
    mass,
    friction: 1,    // Adjust the value as needed
    restitution: 0  // Set to 0 to avoid bouncing
  }));

  return (
    <mesh ref={ref} name={name}>
      <boxGeometry args={size}/>
      <meshStandardMaterial color={color} transparent opacity={1} />
    </mesh>
  );
};

export default ContainerWall;
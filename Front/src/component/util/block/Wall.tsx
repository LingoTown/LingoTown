import React from 'react';
import { useBox } from '@react-three/cannon';
import { wallType } from '../../../type/WallType';

export const Wall: React.FC<wallType> = ({
  size,
  position,
  name,
  mass,
}) => {
  const [ref]:any = useBox(() => ({
    args: size,
    position,
    mass,
    friction: 1,    // Adjust the value as needed
    restitution: 0,  // Set to 0 to avoid bouncing
  }));

  return (
    <mesh ref={ref} name={name}>
      <boxGeometry args={size}/>
      <meshStandardMaterial transparent opacity={0}/>
    </mesh>
  );
};
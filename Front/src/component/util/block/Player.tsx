import { useSphere } from '@react-three/cannon';
import { useRef } from 'react';


export const Player = () => {
  const [ref]:any = useSphere(() => ({
    args: [.25],
    position: [.5, 4, 0],
    mass: 1
}), useRef(null));

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[.25]}/>
      <meshStandardMaterial />
    </mesh>
  )
}
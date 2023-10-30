import React from 'react';
// useCannon physics hooks
import { useBox, useHingeConstraint } from '@react-three/cannon';
// react
import { useRef, useEffect } from 'react';

type PaddleProps = {
    position: [number, number, number];
    speed: number,
    color: string;
};

export const Paddle: React.FC<PaddleProps> = ({position,speed,color}) => { 
  // const [doorFrameRef]:any = useBox(() => ({
  //   args: [.25, 2, .25],
  //   position
  // }), useRef(null));

  const [doorRef]:any = useBox(() => ({
    args: [1.75, 2, .25],
    position: [position[0] + 1.25, position[1], position[2]],
    mass: 1
  }), useRef(null));

  // const [, , hingeApi] = useHingeConstraint(doorRef, doorFrameRef, {
  //   collideConnected: false,
  //   axisA: [0, 1, 0],
  //   axisB: [0, 1, 0],
  //   pivotA: [-1.05, 0, 0],
  //   pivotB: [0, 0, 0]
  // });

  // useEffect(() => {
  //   hingeApi.enableMotor()
  // }, []);

  // useEffect(() => {
  //   // positive speed is counter-clockwise
  //   hingeApi.setMotorSpeed(speed)
  // }, [speed]);

  return (
    <>
      {/* <mesh ref={doorFrameRef}>
        <boxBufferGeometry args={[.25, 2, .25]} />
        <meshStandardMaterial color={color} transparent opacity={0.7} />
      </mesh> */}
      <mesh ref={doorRef}>
        {/* <boxBufferGeometry args={[1.75, 2, .25]} /> */}
        <meshStandardMaterial color={color} transparent opacity={0.9} />
      </mesh>
    </>
  )
}
import React, { useRef } from 'react';
import { FrontSide, LineSegments, Mesh } from 'three';
import { RoundedBox } from '@react-three/drei';

export const BorderedRoundedBox: React.FC = ({
  ...props
}) => {
  const meshRef = useRef<Mesh>(null);
  const lineRef = useRef<LineSegments>(null);

  return (
    <group {...props}>
      <RoundedBox
        ref={meshRef}
        args={[3, 1.75, 1]}
        visible={false}
      />
      {meshRef.current && (
        <lineSegments ref={lineRef}>
          <edgesGeometry args={[meshRef.current.geometry]} />
          <lineBasicMaterial side={FrontSide} color={"white"} linewidth={0.1} />
        </lineSegments>
      )}
    </group>
  );
};
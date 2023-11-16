import React from 'react';
import { TextUtil } from './TextUtil';
import * as THREE from 'three';

interface LoadingProps {
  backgroundTexture: THREE.Texture;
}

const Loading: React.FC<LoadingProps> = ({ backgroundTexture }) => {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[3.5, 2.5, 1]} />
        <meshBasicMaterial map={backgroundTexture} />
      </mesh>
      <TextUtil x={0} y={0} z={0} size={0.2} color="white" name="Loading" />
    </group>
  );
};

export default Loading;
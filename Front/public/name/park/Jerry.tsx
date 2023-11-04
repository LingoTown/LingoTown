import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"
import React from 'react';

export function Jerry() {
  const { nodes, materials } = useGLTF('./name/Alphabat.gltf') as any

  const J = useRef<THREE.Mesh>(null);
  const E = useRef<THREE.Mesh>(null);
  const R1 = useRef<THREE.Mesh>(null);
  const R2 = useRef<THREE.Mesh>(null);
  const Y = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const time = Date.now() * 0.005;
    if (J.current) J.current.rotation.y = Math.sin(time) * 0.2;
    if (E.current) E.current.rotation.y = Math.sin(time) * 0.2;
    if (R1.current) R1.current.rotation.y = Math.sin(time) * 0.2;
    if (R2.current) R2.current.rotation.y = Math.sin(time) * 0.2;
    if (Y.current) Y.current.rotation.y = Math.sin(time) * 0.2;
  });

  return (
    <group dispose={null}>
      <group scale={0.01} rotation={[0, 600, 0]} position={[-30, 1.1, 7.4]}>
        <mesh ref={J} geometry={nodes.AJ_text_0.geometry} material={materials.text} position={[-10, -70, 1]} />
        <mesh ref={E} geometry={nodes.AE_text_0.geometry} material={materials.text} position={[90, 15, 1]} />
        <mesh ref={R1} geometry={nodes.AR_text_0.geometry} material={materials.text} position={[120, -25, 1]} />
        <mesh ref={R2} geometry={nodes.AR_text_0.geometry} material={materials.text} position={[150, -25, 1]} />
        <mesh ref={Y} geometry={nodes.AY_text_0.geometry} material={materials.text} position={[80, 100, 1]} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

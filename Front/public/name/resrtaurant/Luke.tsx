import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Luke() {
  const { nodes, materials } = useGLTF('./name/Alphabat.gltf') as any;

  const L = useRef<THREE.Mesh>(null);
  const U = useRef<THREE.Mesh>(null);
  const K = useRef<THREE.Mesh>(null);
  const E = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const time = Date.now() * 0.005;
    if (L.current) L.current.rotation.y = Math.sin(time) * 0.2;
    if (U.current) U.current.rotation.y = Math.sin(time) * 0.2;
    if (K.current) K.current.rotation.y = Math.sin(time) * 0.2;
    if (E.current) E.current.rotation.y = Math.sin(time) * 0.2;
  });

  return (
    <group dispose={null}>
      <group scale={0.01} rotation={[0, 0, 0]} position={[-2.8, 0, -8]}>
        <mesh ref={L} geometry={nodes.AL_text_0.geometry} material={materials.text} position={[-155, -85, 1]} />
        <mesh ref={U} geometry={nodes.AU_text_0.geometry} material={materials.text} position={[35, -37, 1]} />
        <mesh ref={K} geometry={nodes.AK_text_0.geometry} material={materials.text} position={[-5, -37, 1]} />
        <mesh ref={E} geometry={nodes.AE_text_0.geometry} material={materials.text} position={[64, 0, 1]} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

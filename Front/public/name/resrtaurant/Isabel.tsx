import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Isabel() {
  const { nodes, materials } = useGLTF('./name/Alphabat.gltf') as any

  const I = useRef<THREE.Mesh>(null);
  const S = useRef<THREE.Mesh>(null);
  const A = useRef<THREE.Mesh>(null);
  const B = useRef<THREE.Mesh>(null);
  const E = useRef<THREE.Mesh>(null);
  const L = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const time = Date.now() * 0.005;
    if (I.current) I.current.rotation.y = Math.sin(time) * 0.2;
    if (S.current) S.current.rotation.y = Math.sin(time) * 0.2;
    if (A.current) A.current.rotation.y = Math.sin(time) * 0.2;
    if (B.current) B.current.rotation.y = Math.sin(time) * 0.2;
    if (E.current) E.current.rotation.y = Math.sin(time) * 0.2;
    if (L.current) L.current.rotation.y = Math.sin(time) * 0.2;
  });

  return (
    <group dispose={null}>
      <group scale={0.01} rotation={[0, 0, 0]} position={[-6, 0.3, -3]}>
        <mesh ref={I} geometry={nodes.AI_text_0.geometry} material={materials.text} position={[20, 60, 1]} />
        <mesh ref={S} geometry={nodes.AS_text_0.geometry} material={materials.text} position={[-20, -105, 1]} />
        <mesh ref={A} geometry={nodes.AA_text_0.geometry} material={materials.text} position={[95, -25, 1]} />
        <mesh ref={B} geometry={nodes.AB_text_0.geometry} material={materials.text} position={[-30, -25, 1]} />
        <mesh ref={E} geometry={nodes.AE_text_0.geometry} material={materials.text} position={[110, -25, 1]} />
        <mesh ref={L} geometry={nodes.AL_text_0.geometry} material={materials.text} position={[30, -110, 1]} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

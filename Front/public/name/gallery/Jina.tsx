import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export function Jina() {
  const { nodes, materials } = useGLTF('./name/Alphabat.gltf') as any

  const J = useRef<THREE.Mesh>(null);
  const I = useRef<THREE.Mesh>(null);
  const N = useRef<THREE.Mesh>(null);
  const A = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const time = Date.now() * 0.005;
    if (J.current) J.current.rotation.y = Math.sin(time) * 0.2;
    if (I.current) I.current.rotation.y = Math.sin(time) * 0.2;
    if (N.current) N.current.rotation.y = Math.sin(time) * 0.2;
    if (A.current) A.current.rotation.y = Math.sin(time) * 0.2;
  });

  return (
    <group dispose={null}>
      <group scale={0.01} rotation={[0, 600, 0]} position={[-9.6, 0.3, -6]}>
        <mesh ref={J} geometry={nodes.AJ_text_0.geometry} material={materials.text} position={[-155, -85, 1]} />
        <mesh ref={I} geometry={nodes.AI_text_0.geometry} material={materials.text} position={[-22, 82, 1]} />
        <mesh ref={N} geometry={nodes.AN_text_0.geometry} material={materials.text} position={[-130, 40, 1]} />
        <mesh ref={A} geometry={nodes.AA_text_0.geometry} material={materials.text} position={[64, 0, 1]} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

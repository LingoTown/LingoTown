import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"

export function Jimmy() {
  const { nodes, materials } = useGLTF('./name/Alphabat.gltf') as any;

  const J = useRef<THREE.Mesh>(null);
  const I = useRef<THREE.Mesh>(null);
  const M1 = useRef<THREE.Mesh>(null);
  const M2 = useRef<THREE.Mesh>(null);
  const Y = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const time = Date.now() * 0.005;
    if (J.current) J.current.rotation.y = Math.sin(time) * 0.2;
    if (I.current) I.current.rotation.y = Math.sin(time) * 0.2;
    if (M1.current) M1.current.rotation.y = Math.sin(time) * 0.2;
    if (M2.current) M2.current.rotation.y = Math.sin(time) * 0.2;
    if (Y.current) Y.current.rotation.y = Math.sin(time) * 0.2;
  });

  return (
    <group dispose={null}>
      <group scale={0.01} rotation={[0, 300, 0]} position={[7, 0, -0.6]}>
        <mesh ref={J} geometry={nodes.AJ_text_0.geometry} material={materials.text} position={[-155, -85, 1]} />
        <mesh ref={I} geometry={nodes.AI_text_0.geometry} material={materials.text} position={[-22, 82, 1]} />
        <mesh ref={M2} geometry={nodes.AM_text_0.geometry} material={materials.text} position={[-50, 40, 1]} />
        <mesh ref={M1} geometry={nodes.AM_text_0.geometry} material={materials.text} position={[-3, 40, 1]} />
        <mesh ref={Y} geometry={nodes.AY_text_0.geometry} material={materials.text} position={[-40, 82, 1]} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

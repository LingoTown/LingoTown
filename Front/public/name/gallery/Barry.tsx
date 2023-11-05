import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Barry() {
  const { nodes, materials } = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Font/Name/Alphabat.gltf') as any;

  const B = useRef<THREE.Mesh>(null);
  const A = useRef<THREE.Mesh>(null);
  const R1 = useRef<THREE.Mesh>(null);
  const R2 = useRef<THREE.Mesh>(null);
  const Y = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const time = Date.now() * 0.005;
    if (B.current) B.current.rotation.y = Math.sin(time) * 0.2;
    if (A.current) A.current.rotation.y = Math.sin(time) * 0.2;
    if (R1.current) R1.current.rotation.y = Math.sin(time) * 0.2;
    if (R2.current) R2.current.rotation.y = Math.sin(time) * 0.2;
    if (Y.current) Y.current.rotation.y = Math.sin(time) * 0.2;
  });

  return (
    <group dispose={null}>
      <group scale={0.01} rotation={[0, 300, 0]} position={[-2, 0, 2]}>
        <mesh ref={B} geometry={nodes.AB_text_0.geometry} material={materials.text} position={[-155, 25, 1]} />
        <mesh ref={A} geometry={nodes.AA_text_0.geometry} material={materials.text} position={[40, 25, 1]} />
        <mesh ref={R1} geometry={nodes.AR_text_0.geometry} material={materials.text} position={[25, -13, 1]} />
        <mesh ref={R2} geometry={nodes.AR_text_0.geometry} material={materials.text} position={[57, -13, 1]} />
        <mesh ref={Y} geometry={nodes.AY_text_0.geometry} material={materials.text} position={[-12, 110, 1]} />
      </group>
    </group>
  )
}

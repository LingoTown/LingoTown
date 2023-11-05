import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Olivia() {
  const { nodes, materials } = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Font/Name/Alphabat.gltf') as any

  const O = useRef<THREE.Mesh>(null);
  const L = useRef<THREE.Mesh>(null);
  const I1 = useRef<THREE.Mesh>(null);
  const V = useRef<THREE.Mesh>(null);
  const I2 = useRef<THREE.Mesh>(null);
  const A = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const time = Date.now() * 0.005;
    if (O.current) O.current.rotation.y = Math.sin(time) * 0.2;
    if (L.current) L.current.rotation.y = Math.sin(time) * 0.2;
    if (I1.current) I1.current.rotation.y = Math.sin(time) * 0.2;
    if (V.current) V.current.rotation.y = Math.sin(time) * 0.2;
    if (I2.current) I2.current.rotation.y = Math.sin(time) * 0.2;
    if (A.current) A.current.rotation.y = Math.sin(time) * 0.2;
  });

  return (
    <group dispose={null}>
      <group scale={0.01} rotation={[0, -300, 0]} position={[-7.4, 0.7, 0.42]}>
        <mesh ref={O} geometry={nodes.AO_text_0.geometry} material={materials.text} position={[-155, 0, 1]} />
        <mesh ref={L} geometry={nodes.AL_text_0.geometry} material={materials.text} position={[-282, -130, 1]} />
        <mesh ref={I1} geometry={nodes.AI_text_0.geometry} material={materials.text} position={[-110, 40, 1]} />
        <mesh ref={V} geometry={nodes.AV_text_0.geometry} material={materials.text} position={[-180, 0, 1]} />
        <mesh ref={I2} geometry={nodes.AI_text_0.geometry} material={materials.text} position={[-40, 40, 1]} />
        <mesh ref={A} geometry={nodes.AA_text_0.geometry} material={materials.text} position={[5, -45, 1]} />
      </group>
    </group>
  )
}

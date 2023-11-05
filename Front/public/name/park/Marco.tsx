import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Marco() {
  const { nodes, materials } = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Font/Name/Alphabat.gltf') as any

  const M = useRef<THREE.Mesh>(null);
  const A = useRef<THREE.Mesh>(null);
  const R = useRef<THREE.Mesh>(null);
  const C = useRef<THREE.Mesh>(null);
  const O = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const time = Date.now() * 0.005;
    if (M.current) M.current.rotation.y = Math.sin(time) * 0.2;
    if (A.current) A.current.rotation.y = Math.sin(time) * 0.2;
    if (R.current) R.current.rotation.y = Math.sin(time) * 0.2;
    if (C.current) C.current.rotation.y = Math.sin(time) * 0.2;
    if (O.current) O.current.rotation.y = Math.sin(time) * 0.2;
  });

  return (
    <group dispose={null}>
      <group scale={0.01} rotation={[0, 600, 0]} position={[-10, 0.3, 8]}>
        <mesh ref={M} geometry={nodes.AM_text_0.geometry} material={materials.text} position={[-70, 20, 1]} />
        <mesh ref={A} geometry={nodes.AA_text_0.geometry} material={materials.text} position={[50, -24, 1]} />
        <mesh ref={R} geometry={nodes.AR_text_0.geometry} material={materials.text} position={[35, -60, 1]} />
        <mesh ref={C} geometry={nodes.AC_text_0.geometry} material={materials.text} position={[130, 60, 1]} />
        <mesh ref={O} geometry={nodes.AO_text_0.geometry} material={materials.text} position={[150, 23, 1]} />
      </group>
    </group>
  )
}

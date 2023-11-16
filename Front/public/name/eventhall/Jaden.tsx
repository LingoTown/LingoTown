import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function JadenName() {
  const { nodes, materials } = useGLTF(import.meta.env.VITE_S3_URL + 'Font/Name/Alphabat.gltf') as any

  // 각 mesh에 대한 참조를 생성합니다.
  const J = useRef<THREE.Mesh>(null);
  const A = useRef<THREE.Mesh>(null);
  const D = useRef<THREE.Mesh>(null);
  const N = useRef<THREE.Mesh>(null);
  const E = useRef<THREE.Mesh>(null);

  // 매 프레임마다 실행될 콜백 함수입니다.
  useFrame(() => {
    // 시간에 따라 다르게 회전하도록 합니다.
    const time = Date.now() * 0.005; // 현재 시간을 초 단위로 가져옵니다.

    // 각 mesh의 회전을 업데이트합니다.
    if (J.current) J.current.rotation.y = Math.sin(time) * 0.2;
    if (A.current) A.current.rotation.y = Math.sin(time) * 0.2;
    if (D.current) D.current.rotation.y = Math.sin(time) * 0.2;
    if (E.current) E.current.rotation.y = Math.sin(time) * 0.2;
    if (N.current) N.current.rotation.y = Math.sin(time) * 0.2;
  });

  return (
    <group dispose={null}>
      <group scale={0.01} rotation={[0, 600, 0]} position={[-10.4, 0, 21.4]}>
        <mesh ref={J} geometry={nodes.AJ_text_0.geometry} material={materials.text} position={[-155, -82, 1]} />
        <mesh ref={A} geometry={nodes.AA_text_0.geometry} material={materials.text} position={[1, 1, 1]} />
        <mesh ref={D} geometry={nodes.AD_text_0.geometry} material={materials.text} position={[-5, 85, 1]} />
        <mesh ref={E} geometry={nodes.AN_text_0.geometry} material={materials.text} position={[-56, 40, 1]} />
        <mesh ref={N} geometry={nodes.AE_text_0.geometry} material={materials.text} position={[18, 3, 1]} />
      </group>
    </group>
  )
}


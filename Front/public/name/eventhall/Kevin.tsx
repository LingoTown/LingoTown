import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function KevinName() {
  const { nodes, materials } = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Font/Name/Alphabat.gltf') as any

  // 각 mesh에 대한 참조를 생성합니다.
  const K = useRef<THREE.Mesh>(null);
  const E = useRef<THREE.Mesh>(null);
  const V = useRef<THREE.Mesh>(null);
  const I = useRef<THREE.Mesh>(null);
  const N = useRef<THREE.Mesh>(null);

  // 매 프레임마다 실행될 콜백 함수입니다.
  useFrame(() => {
    // 시간에 따라 다르게 회전하도록 합니다.
    const time = Date.now() * 0.005; // 현재 시간을 초 단위로 가져옵니다.

    // 각 mesh의 회전을 업데이트합니다.
    if (K.current) K.current.rotation.y = Math.sin(time) * 0.2;
    if (E.current) E.current.rotation.y = Math.sin(time) * 0.2;
    if (V.current) V.current.rotation.y = Math.sin(time) * 0.2;
    if (I.current) I.current.rotation.y = Math.sin(time) * 0.2;
    if (N.current) N.current.rotation.y = Math.sin(time) * 0.2;
  });

  return (
    <group dispose={null}>
      <group scale={0.01} rotation={[0, 0, 0]} position={[17, 1, -2.5]}>
        <mesh ref={K} geometry={nodes.AK_text_0.geometry} material={materials.text} position={[-67, -40, 1]} />
        <mesh ref={E} geometry={nodes.AE_text_0.geometry} material={materials.text} position={[1, 1, 1]} />
        <mesh ref={V} geometry={nodes.AV_text_0.geometry} material={materials.text} position={[-31, 42, 1]} />
        <mesh ref={I} geometry={nodes.AI_text_0.geometry} material={materials.text} position={[104, 82, 1]} />
        <mesh ref={N} geometry={nodes.AN_text_0.geometry} material={materials.text} position={[-10, 37, 1]} />
      </group>
    </group>
  )
}

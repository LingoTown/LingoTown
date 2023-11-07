import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Bonnie(props:any) {
  const { nodes, materials } = useGLTF(import.meta.env.VITE_S3_URL + "Font/Name/Alphabat.gltf") as any;

  // 각 mesh에 대한 참조를 생성합니다.
  const B = useRef<THREE.Mesh>(null);
  const O = useRef<THREE.Mesh>(null);
  const N1 = useRef<THREE.Mesh>(null);
  const N2 = useRef<THREE.Mesh>(null);
  const I = useRef<THREE.Mesh>(null);
  const E = useRef<THREE.Mesh>(null);
  // const refAE = useRef();

  // 매 프레임마다 실행될 콜백 함수입니다.
  useFrame(() => {
    // 시간에 따라 다르게 회전하도록 합니다.
    const time = Date.now() * 0.005; // 현재 시간을 초 단위로 가져옵니다.

    // 각 mesh의 회전을 업데이트합니다.
    if (B.current) B.current.rotation.y = Math.sin(time) * 0.2;
    if (O.current) O.current.rotation.y = Math.sin(time) * 0.2;
    if (N1.current) N1.current.rotation.y = Math.sin(time) * 0.2;
    if (N2.current) N2.current.rotation.y = Math.sin(time) * 0.2;
    if (I.current) I.current.rotation.y = Math.sin(time) * 0.2;
    if (E.current) E.current.rotation.y = Math.sin(time) * 0.2;
  });

  return (
    <group {...props} dispose={null}>
      <group scale={0.01} rotation={[0, 300, 0]} position={[7, 0, -0.6]}>
        <mesh ref={B} geometry={nodes.AB_text_0.geometry} material={materials.text} position={[-190, 0, 1]}/>
        <mesh ref={O} geometry={nodes.AO_text_0.geometry} material={materials.text} position={[1, 50, 1]} />
        <mesh ref={N1} geometry={nodes.AN_text_0.geometry} material={materials.text} position={[-120, 40, 1]} />
        <mesh ref={N2} geometry={nodes.AN_text_0.geometry} material={materials.text} position={[-80, 40, 1]} />
        <mesh ref={I} geometry={nodes.AI_text_0.geometry} material={materials.text} position={[100, 80, 1]} />
        <mesh ref={E} geometry={nodes.AE_text_0.geometry} material={materials.text} position={[90, 0, 1]} />
      </group>
    </group>
  )
}

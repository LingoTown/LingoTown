import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"

export function Olivia(props) {
  const { nodes, materials } = useGLTF('./name/Alphabat.gltf')

  const O = useRef();
  const L = useRef();
  const I1 = useRef();
  const V = useRef();
  const I2 = useRef();
  const A = useRef();

  useFrame(() => {
    const time = Date.now() * 0.005;
    O.current.rotation.y = Math.sin(time) * 0.2;
    L.current.rotation.y = Math.sin(time) * 0.2;
    I1.current.rotation.y = Math.sin(time) * 0.2;
    V.current.rotation.y = Math.sin(time) * 0.2;
    I2.current.rotation.y = Math.sin(time) * 0.2;
    A.current.rotation.y = Math.sin(time) * 0.2;
  });

  return (
    <group {...props} dispose={null}>
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

useGLTF.preload('/scene.gltf')

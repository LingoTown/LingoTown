import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"

export function Jina(props) {
  const { nodes, materials } = useGLTF('./name/Alphabat.gltf')

  const J = useRef();
  const I = useRef();
  const N = useRef();
  const A = useRef();

  useFrame(() => {
    const time = Date.now() * 0.005;
    J.current.rotation.y = Math.sin(time) * 0.2;
    I.current.rotation.y = Math.sin(time) * 0.2;
    N.current.rotation.y = Math.sin(time) * 0.2;
    A.current.rotation.y = Math.sin(time) * 0.2;
  });

  return (
    <group {...props} dispose={null}>
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

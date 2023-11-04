import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"

export function Jimmy(props) {
  const { nodes, materials } = useGLTF('./name/Alphabat.gltf')

  const J = useRef();
  const I = useRef();
  const M1 = useRef();
  const M2 = useRef();
  const Y = useRef();

  useFrame(() => {
    const time = Date.now() * 0.005;
    J.current.rotation.y = Math.sin(time) * 0.2;
    I.current.rotation.y = Math.sin(time) * 0.2;
    M1.current.rotation.y = Math.sin(time) * 0.2;
    M2.current.rotation.y = Math.sin(time) * 0.2;
    Y.current.rotation.y = Math.sin(time) * 0.2;
  });

  return (
    <group {...props} dispose={null}>
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

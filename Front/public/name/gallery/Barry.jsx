import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"

export function Barry(props) {
  const { nodes, materials } = useGLTF('./name/Alphabat.gltf')

  const B = useRef();
  const A = useRef();
  const R1 = useRef();
  const R2 = useRef();
  const Y = useRef();

  useFrame(() => {
    const time = Date.now() * 0.005;
    B.current.rotation.y = Math.sin(time) * 0.2;
    A.current.rotation.y = Math.sin(time) * 0.2;
    R1.current.rotation.y = Math.sin(time) * 0.2;
    R2.current.rotation.y = Math.sin(time) * 0.2;
    Y.current.rotation.y = Math.sin(time) * 0.2;
  });

  return (
    <group {...props} dispose={null}>
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

useGLTF.preload('/scene.gltf')

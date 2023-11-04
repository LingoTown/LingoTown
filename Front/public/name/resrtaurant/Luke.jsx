import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"

export function Luke(props) {
  const { nodes, materials } = useGLTF('./name/Alphabat.gltf')

  const L = useRef();
  const U = useRef();
  const K = useRef();
  const E = useRef();

  useFrame(() => {
    const time = Date.now() * 0.005;
    L.current.rotation.y = Math.sin(time) * 0.2;
    U.current.rotation.y = Math.sin(time) * 0.2;
    K.current.rotation.y = Math.sin(time) * 0.2;
    E.current.rotation.y = Math.sin(time) * 0.2;
  });

  return (
    <group {...props} dispose={null}>
      <group scale={0.01} rotation={[0, 0, 0]} position={[-2.8, 0, -8]}>
        <mesh ref={L} geometry={nodes.AL_text_0.geometry} material={materials.text} position={[-155, -85, 1]} />
        <mesh ref={U} geometry={nodes.AU_text_0.geometry} material={materials.text} position={[35, -37, 1]} />
        <mesh ref={K} geometry={nodes.AK_text_0.geometry} material={materials.text} position={[-5, -37, 1]} />
        <mesh ref={E} geometry={nodes.AE_text_0.geometry} material={materials.text} position={[64, 0, 1]} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

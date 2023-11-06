import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function Restaurant(props) {
  const { nodes, materials } = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Map/Restaurant/scene.gltf')

  useEffect(() => {
    if (props.onLoaded) {
      props.onLoaded();
    }
  }, [props, props.onLoaded]);

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-234.51, 0, -968.42]}>
          <mesh geometry={nodes.pCube47_silla1_0_4.geometry} material={materials.silla1} position={[-863.667, 0, -223.273]} rotation={[0, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.pCube26_silla1_0_4.geometry} material={materials.silla1} position={[-8.673, 0, 0]} />
          <mesh geometry={nodes.pCylinder1_mesa1_0_4.geometry} material={materials.mesa1} position={[-318.077, 0, 91.261]} rotation={[0, -Math.PI / 6, 0]} />
          <mesh geometry={nodes.pCylinder2_sombrilla1_0_4.geometry} material={materials.sombrilla1} />
          <mesh geometry={nodes.pCube45_silla1_0_4.geometry} material={materials.silla1} position={[199.534, 0, -868.82]} rotation={[0, Math.PI / 2, 0]} />
          <mesh geometry={nodes.pCube46_silla1_0_4.geometry} material={materials.silla1} position={[-658.889, 0, -1065.572]} rotation={[-Math.PI, 0, -Math.PI]} />
        </group>
        <mesh geometry={nodes.pCube34_esquina_restaurante_hava1_0.geometry} material={materials.esquina_restaurante_hava1} />
        <mesh geometry={nodes.pCube35_edificio_izq1_0.geometry} material={materials.edificio_izq1} position={[-22.682, 0, 0]} />
        <mesh geometry={nodes.pCube37_restaurante2_0.geometry} material={materials.restaurante2} />
        <mesh geometry={nodes.pCube39_restaurante_hava_0.geometry} material={materials.restaurante_hava} />
        <mesh geometry={nodes.pCube40_restaurante_lado_hava_0.geometry} material={materials.restaurante_lado_hava} />
        <mesh geometry={nodes.pPlane1_suelo1_0.geometry} material={materials.suelo1} scale={1}/>
        {/*  */}
      </group>
      <group scale={0.01}>
        <mesh geometry={nodes.poste_aiStandardSurface11_0.geometry} material={materials.aiStandardSurface11} position={[0, 0, -119.669]} />
        <mesh geometry={nodes.poste_aiStandardSurface11_0_1.geometry} material={materials.aiStandardSurface11} position={[0, 0, -675.521]} />
        <mesh geometry={nodes.poste1_aiStandardSurface11_0.geometry} material={materials.aiStandardSurface11} position={[0, 0, -1375.743]} />
        <mesh geometry={nodes.poste2_aiStandardSurface11_0.geometry} material={materials.aiStandardSurface11} position={[0, 0, 1215.692]} />
        <mesh geometry={nodes.poste3_aiStandardSurface11_0.geometry} material={materials.aiStandardSurface11} position={[0, 0, 484.228]} />
        <mesh geometry={nodes.poste6_aiStandardSurface11_0.geometry} material={materials.aiStandardSurface11} position={[621.208, 0.423, -300.53]} />
        <mesh geometry={nodes.poste7_aiStandardSurface11_0.geometry} material={materials.aiStandardSurface11} position={[621.208, 0.423, -1148.913]} />
        <mesh geometry={nodes.poste8_aiStandardSurface11_0.geometry} material={materials.aiStandardSurface11} position={[621.208, 0.423, -1698.113]} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

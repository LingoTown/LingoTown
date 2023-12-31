/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene.gltf 
Author: Aurélien Martel (https://sketchfab.com/aurelien_martel)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/old-church-modeling-interior-scene-eb6cf543aa7d45e3acee49887ae3135c
Title: Old church modeling - Interior Scene
*/

import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function Church(props) {
  const { nodes, materials } = useGLTF(import.meta.env.VITE_S3_URL + 'Map/Church/scene.gltf')

  useEffect(() => {
    if (props.onLoaded) {
      props.onLoaded();
    }
  }, [props, props.onLoaded]);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.444}>
        <group scale={0.581}>
          <mesh geometry={nodes.Plane001_0.geometry} material={materials.banc} />
          <mesh geometry={nodes.Plane001_0_1.geometry} material={materials.banc} />
          <mesh geometry={nodes.Plane001_0_2.geometry} material={materials.banc} />
        </group>
        <group position={[-0.037, -0.016, 4.17]}>
          <mesh geometry={nodes.Cylinder004_0.geometry} material={materials.colonne} />
          <mesh geometry={nodes.Cylinder004_0_1.geometry} material={materials.colonne} />
        </group>
        <group position={[7.784, -0.022, -1.149]}>
          <mesh geometry={nodes.Circle020_0.geometry} material={materials['colonne-ext']} />
          <mesh geometry={nodes.Circle020_0_1.geometry} material={materials['colonne-ext']} />
        </group>
        <group position={[12.278, -0.022, -33.267]}>
          <mesh geometry={nodes.Plane000_0.geometry} material={materials['estrade-contour']} />
          <mesh geometry={nodes.Plane000_1.geometry} material={materials['estrade-centre']} />
        </group>
        <group position={[12.212, -0.022, -33.267]} scale={[0.138, 0.138, 0.115]}>
          <mesh geometry={nodes.Circle016_0.geometry} material={materials['pied-autel']} />
          <mesh geometry={nodes.Circle016_1.geometry} material={materials.material} />
        </group>
        <mesh geometry={nodes.ampoules008_0.geometry} material={materials.ampoule} position={[-31.271, -0.024, -4.028]} rotation={[0, 0, 0.318]} />
        <mesh geometry={nodes.Circle055_0.geometry} material={materials['arche.002']} position={[28.836, -0.049, -25.538]} />
        <mesh geometry={nodes.Cylinder002_0.geometry} material={materials['pied-colonne']} position={[-0.037, -0.016, 4.17]} />
        <mesh geometry={nodes.Circle006_0.geometry} material={materials['mur-bas']} position={[7.784, -0.022, -1.149]} />
        <mesh geometry={nodes.Circle019_0.geometry} material={materials.arche} position={[7.784, -0.022, -1.149]} />
        <mesh geometry={nodes.Circle050_0.geometry} material={materials['mur-bas-ext']} position={[18.32, -18.269, -25.538]} />
        <mesh geometry={nodes.Circle051_0.geometry} material={materials.material_24} position={[7.784, -0.022, -1.149]} />
        <mesh geometry={nodes.Circle000_0.geometry} material={materials['arche.001']} position={[7.784, -0.022, -1.149]} />
        <mesh geometry={nodes.Circle013_0.geometry} material={materials['arche.005']} position={[13.141, 9.256, -1.149]} />
        <mesh geometry={nodes.Circle001_0.geometry} material={materials['mur-haut']} position={[19.224, -0.022, 0.561]} />
        <mesh geometry={nodes.Cube000_0.geometry} material={materials['debord-mur']} position={[-5.121, -0.029, -0.531]} />
        <mesh geometry={nodes.TexturesCom_WindowStainedGlass0098_1_M000_0.geometry} material={materials['vitrail-droite']} position={[0.031, -13.304, -5.49]} rotation={[Math.PI / 2, 0, 0]} scale={16.36} />
        <mesh geometry={nodes.TexturesCom_WindowStainedGlass0098_2_M000_0.geometry} material={materials['vitrail-gauche']} position={[-0.114, 13.273, -5.428]} rotation={[Math.PI / 2, 0, 0]} scale={[17.273, 16.189, 16.359]} />
        <mesh geometry={nodes['vitrail-fond000_0'].geometry} material={materials['vitrail-fond']} position={[19.346, 0, -4.897]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={18.142} />
        <mesh geometry={nodes['vitrail-fond001_0'].geometry} material={materials['vitrail-fond.001']} position={[13.613, -10.092, -5.726]} rotation={[Math.PI / 2, Math.PI / 6, 0]} scale={16.419} />
        <mesh geometry={nodes['vitrail-fond002_0'].geometry} material={materials['vitrail-fond.002']} position={[13.603, 10.093, -5.726]} rotation={[-Math.PI / 2, Math.PI / 6, -Math.PI]} scale={16.419} />
        <mesh geometry={nodes['vitrail-fond003_0'].geometry} material={materials['vitrail-fond.003']} position={[18.751, 18.918, -26.209]} rotation={[Math.PI / 2, -Math.PI / 6, 0]} scale={11.845} />
        <mesh geometry={nodes['vitrail-fond004_0'].geometry} material={materials['vitrail-fond.004']} position={[29.705, -0.049, -26.035]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={11.984} />
        <mesh geometry={nodes['vitrail-fond005_0'].geometry} material={materials['vitrail-fond.005']} position={[18.755, -19.022, -26.04]} rotation={[-Math.PI / 2, -Math.PI / 6, -Math.PI]} scale={[11.626, 11.92, 11.626]} />
        <mesh geometry={nodes.TexturesCom_WindowStainedGlass0084_1_M000_0.geometry} material={materials['vitrail-bas']} position={[-0.027, -0.022, 8.041]} />
        <mesh geometry={nodes.TexturesCom_PersianCarpets0012_1_alphamasked_S_0.geometry} material={materials.drap} position={[12.212, -0.022, -29.317]} />
        <mesh geometry={nodes.Plane004_0.geometry} material={materials.autel} position={[12.212, -0.022, -33.267]} />
        <mesh geometry={nodes.Doors_Old_Wooden_1003_0.geometry} material={materials.Doors_Old_Wooden_1} position={[-55.236, -0.029, -27.538]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={13.047} />
        <mesh geometry={nodes.Cube003_0.geometry} material={materials['mur-bas.002']} position={[-5.121, -0.029, -0.531]} />
        <mesh geometry={nodes.ampoules009_0.geometry} material={materials.ampoule} position={[-0.034, -0.022, -2.878]} rotation={[0, 0, 0.318]} />
        <mesh geometry={nodes.chain005_0.geometry} material={materials.chain} position={[-0.038, -0.017, 7.345]} />
        <mesh geometry={nodes.ampoules010_0.geometry} material={materials.ampoule} position={[-31.276, -0.022, -2.878]} rotation={[0, 0, 0.319]} />
        <mesh geometry={nodes.ampoules011_0.geometry} material={materials.ampoule} position={[-0.034, -0.022, -4.028]} rotation={[0, 0, 0.318]} />
        <mesh geometry={nodes.chain004_0.geometry} material={materials.chain} position={[-31.277, -0.017, 7.345]} />
        <mesh geometry={nodes.Circle_0.geometry} material={materials['verre-or']} position={[12.521, -1.832, -31.458]} />
      </group>
    </group>
  )
}
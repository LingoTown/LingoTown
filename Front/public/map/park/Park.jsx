/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene.gltf 
Author: Shin Xiba 3D (https://sketchfab.com/Xiba3D)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/playground-childrens-park-3d-4b41db7cde994ab1a17ad16794ccc7d1
Title: Playground - Children's park - 3D
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Park(props) {
  const { nodes, materials } = useGLTF('./map/park/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={8.873}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Base_cancha_Base_cancha_pista_0.geometry} material={materials.Base_cancha_pista} />
            <mesh geometry={nodes.Base_cancha_Bae_Parque_0.geometry} material={materials.Bae_Parque} />
            <mesh geometry={nodes.Base_cancha_Base_Cancha_0.geometry} material={materials.Base_Cancha} />
            <mesh geometry={nodes.Base_cancha_Lineas_0.geometry} material={materials.Lineas} />
            <mesh geometry={nodes.Base_cancha__Base_Cancha_Area_0.geometry} material={materials.Base_Cancha_Area} />
          </group>
          <group position={[-3.668, 29.858, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[240.058, 142.164, 32.934]}>
            <mesh geometry={nodes.Cube002__0.geometry} material={materials['Cube.002__0']} />
            <mesh geometry={nodes.Cube002__0_1.geometry} material={materials['Cube.002__0']} />
          </group>
          <group position={[-509.463, 89.377, 164.441]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 81.854, 100]}>
            <mesh geometry={nodes.Sphere_Luminaria001_0.geometry} material={materials['Luminaria.001']} />
            <mesh geometry={nodes.Sphere_Luminaria_0.geometry} material={materials.Luminaria} />
          </group>
          <group position={[-507.397, 0, 90.73]} rotation={[-Math.PI / 2, 0, 0]} scale={10.344}>
            <mesh geometry={nodes.tree_Madera001_0.geometry} material={materials['Madera.001']} />
            <mesh geometry={nodes.leaves_Hojas_0.geometry} material={materials.Hojas} />
          </group>
          <group position={[-288.348, 16.075, -94.966]} rotation={[-Math.PI / 2, 0, 0]} scale={17.304}>
            <mesh geometry={nodes.BezierCurve002_Tobogan1005_0.geometry} material={materials['Tobogan1.005']} />
            <mesh geometry={nodes.BezierCurve002_Tobogan_0.geometry} material={materials.Tobogan} />
            <mesh geometry={nodes.BezierCurve002_Base_0.geometry} material={materials.Base} />
            <mesh geometry={nodes.BezierCurve002_Tobogan_techo_0.geometry} material={materials.Tobogan_techo} />
            <mesh geometry={nodes.BezierCurve002_Tobogan1002_0.geometry} material={materials['Tobogan1.002']} />
            <mesh geometry={nodes.BezierCurve002_Tobogan1001_0.geometry} material={materials['Tobogan1.001']} />
            <mesh geometry={nodes.BezierCurve002_Tobogan1004_0.geometry} material={materials['Tobogan1.004']} />
            <mesh geometry={nodes.BezierCurve002_Tobogan1_0.geometry} material={materials.Tobogan1} />
            <mesh geometry={nodes.BezierCurve002_Tobogan1003_0.geometry} material={materials['Tobogan1.003']} />
          </group>
          <group position={[-293.015, 14.482, 60.822]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube003_Resbaladilla002_0.geometry} material={materials['Resbaladilla.002']} />
            <mesh geometry={nodes.Cube003_Base_0.geometry} material={materials.Base} />
          </group>
          <group position={[-293.015, 14.482, 84.618]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube004_Resbaladilla_0.geometry} material={materials.Resbaladilla} />
            <mesh geometry={nodes.Cube004_Base_0.geometry} material={materials.Base} />
          </group>
          <group position={[-422.033, 10.304, -146.544]} rotation={[-Math.PI / 2, 0, 0]} scale={12.783}>
            <mesh geometry={nodes.Cube005_Madera_0.geometry} material={materials.Madera} />
            <mesh geometry={nodes.Cube005_Base_0.geometry} material={materials.Base} />
            <mesh geometry={nodes.Cube005_Pasillo_0.geometry} material={materials.Pasillo} />
          </group>
          <group position={[-524.84, 25.035, -156.881]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[48.175, 25.097, 22.818]}>
            <mesh geometry={nodes.Cube006_Material001_0.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Cube006_Madera_0.geometry} material={materials.Madera} />
            <mesh geometry={nodes.Cube006_glass_0.geometry} material={materials.glass} />
            <mesh geometry={nodes.Cube006_Madera001_0.geometry} material={materials['Madera.001']} />
          </group>
          <group position={[-290.069, 40.899, -152.022]} rotation={[-Math.PI / 2, 0, 0]} scale={[8.668, 8.668, 1.959]}>
            <mesh geometry={nodes.Cube007_Base_0.geometry} material={materials.Base} />
            <mesh geometry={nodes.Cube007_Tobogan_techo_0.geometry} material={materials.Tobogan_techo} />
            <mesh geometry={nodes.Cube007_Tobogan_0.geometry} material={materials.Tobogan} />
            <mesh geometry={nodes.Cube007_Tobogan1002_0.geometry} material={materials['Tobogan1.002']} />
            <mesh geometry={nodes.Cube007_Tobogan1001_0.geometry} material={materials['Tobogan1.001']} />
            <mesh geometry={nodes.Cube007_Tobogan1004_0.geometry} material={materials['Tobogan1.004']} />
            <mesh geometry={nodes.Cube007_Tobogan1_0.geometry} material={materials.Tobogan1} />
            <mesh geometry={nodes.Cube007_Tobogan1003_0.geometry} material={materials['Tobogan1.003']} />
          </group>
          <group position={[-547.49, 5.012, -41.879]} rotation={[-0.328, 0, 0]} scale={[13.582, 16.228, 12.559]}>
            <mesh geometry={nodes.Cube009_Madera_0.geometry} material={materials.Madera} />
            <mesh geometry={nodes.Cube009_Madera001_0.geometry} material={materials['Madera.001']} />
          </group>
          <group position={[220.47, 17.924, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 103.274, 107.006]}>
            <mesh geometry={nodes.Cube010_Base_Cancha_0.geometry} material={materials.Base_Cancha} />
            <mesh geometry={nodes.Cube010_Material001_0.geometry} material={materials['Material.001']} />
          </group>
          <group position={[-508.211, 18.658, 90.449]} rotation={[-Math.PI / 2, 0, 0]} scale={[88.713, 88.713, 97.68]}>
            <mesh geometry={nodes.Cylinder001_Material001_0.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Cylinder001_Cupula_0.geometry} material={materials.Cupula} />
            <mesh geometry={nodes.Cylinder001_Luminaria001_0.geometry} material={materials['Luminaria.001']} />
          </group>
          <group position={[-575.596, 25.068, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cylinder003_Luminaria_0.geometry} material={materials.Luminaria} />
            <mesh geometry={nodes.Cylinder003_Luminaria001_0.geometry} material={materials['Luminaria.001']} />
          </group>
          <group position={[-468.808, 5.571, -148.326]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[3.746, 3.746, 5.576]}>
            <mesh geometry={nodes.Cylinder004_Tacho1_0.geometry} material={materials.Tacho1} />
            <mesh geometry={nodes.Cylinder004_Tacho2_0.geometry} material={materials.Tacho2} />
            <mesh geometry={nodes.Cylinder004_Tacho3_0.geometry} material={materials.Tacho3} />
          </group>
          <group position={[-422.631, 11.64, -92.032]} rotation={[-Math.PI / 2, 0, 0]} scale={127.505}>
            <mesh geometry={nodes.Cylinder008_Base_0.geometry} material={materials.Base} />
            <mesh geometry={nodes.Cylinder008_Pasillo_0.geometry} material={materials.Pasillo} />
            <mesh geometry={nodes.Cylinder008_Tobogan_0.geometry} material={materials.Tobogan} />
          </group>
          <mesh geometry={nodes.Base_cancha001_Material002_0.geometry} material={materials['Material.002']} position={[-260.447, 0, -11.51]} rotation={[-Math.PI / 2, 0, 0]} scale={[98.484, 100, 100]} />
          <mesh geometry={nodes.Base_cancha002_Adoquines_0.geometry} material={materials.Adoquines} position={[-46.902, -0.272, 181.555]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.Cube011_Pasillo_0.geometry} material={materials.Pasillo} position={[-415.241, 0.389, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.Cube012_Luminaria_0.geometry} material={materials.Luminaria} position={[-3.668, -30.036, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[240.058, 142.164, 32.934]} />
          <mesh geometry={nodes.Cube_Lineas_0.geometry} material={materials.Lineas} position={[226.284, 13.288, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.Cube001_Material001_0.geometry} material={materials['Material.001']} position={[120.687, 15.724, -171.819]} rotation={[-Math.PI / 2, 0, 0]} scale={[96.097, 100, 100]} />
          <mesh geometry={nodes.Cylinder002_pasamanos_0.geometry} material={materials.pasamanos} position={[-291.343, 14.263, 119.944]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[55.994, 53.551, 45.808]} />
          <mesh geometry={nodes.Cylinder006_Luminaria_0.geometry} material={materials.Luminaria} position={[-243.63, 31.277, 142.081]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.Cylinder007_Luminaria_0.geometry} material={materials.Luminaria} position={[-243.63, 31.277, 51.575]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.Plane_Luminaria_0.geometry} material={materials.Luminaria} position={[121.23, 42.941, -171.631]} rotation={[-Math.PI / 2, 0, 0]} scale={[99.82, 16.235, 16.235]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
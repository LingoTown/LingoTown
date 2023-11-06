import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function Park(props) {
  const { nodes, materials } = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Map/Park/scene.gltf')

  useEffect(() => {
    if (props.onLoaded) {
      props.onLoaded();
    }
  }, [props, props.onLoaded]);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={8.873}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>

          {/* 바닥 */}

          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Base_cancha_Base_cancha_pista_0.geometry} material={materials.Base_cancha_pista} />
            <mesh geometry={nodes.Base_cancha_Bae_Parque_0.geometry} material={materials.Bae_Parque} />
            <mesh geometry={nodes.Base_cancha_Base_Cancha_0.geometry} material={materials.Base_Cancha} />
            <mesh geometry={nodes.Base_cancha_Lineas_0.geometry} material={materials.Lineas} />
            <mesh geometry={nodes.Base_cancha__Base_Cancha_Area_0.geometry} material={materials.Base_Cancha_Area} />
          </group>

          {/* 망 */}

          <group position={[-3.668, 29.858, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[240.058, 142.164, 32.934]}>
            <mesh geometry={nodes.Cube002__0.geometry} material={materials['Cube.002__0']} />
            <mesh geometry={nodes.Cube002__0_1.geometry} material={materials['Cube.002__0']} />
          </group>

          {/* 큰 미끄럼틀 */}

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

          {/* 애기 미끄럼틀 */}

          <group position={[-293.015, 14.482, 60.822]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube003_Resbaladilla002_0.geometry} material={materials['Resbaladilla.002']} />
            <mesh geometry={nodes.Cube003_Base_0.geometry} material={materials.Base} />
          </group>
          <group position={[-293.015, 14.482, 84.618]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube004_Resbaladilla_0.geometry} material={materials.Resbaladilla} />
            <mesh geometry={nodes.Cube004_Base_0.geometry} material={materials.Base} />
          </group>

          {/* 십자가 돌리기 */}

          <group position={[-422.033, 10.304, -146.544]} rotation={[-Math.PI / 2, 0, 0]} scale={12.783}>
            <mesh geometry={nodes.Cube005_Madera_0.geometry} material={materials.Madera} />
            <mesh geometry={nodes.Cube005_Base_0.geometry} material={materials.Base} />
            <mesh geometry={nodes.Cube005_Pasillo_0.geometry} material={materials.Pasillo} />
          </group>

          {/* 골대 */}

          <group position={[220.47, 17.924, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 103.274, 107.006]}>
            <mesh geometry={nodes.Cube010_Base_Cancha_0.geometry} material={materials.Base_Cancha} />
            <mesh geometry={nodes.Cube010_Material001_0.geometry} material={materials['Material.001']} />
          </group>

          {/* 동그란 돌리기 */}

          <group position={[-422.631, 11.64, -92.032]} rotation={[-Math.PI / 2, 0, 0]} scale={127.505}>
            <mesh geometry={nodes.Cylinder008_Base_0.geometry} material={materials.Base} />
            <mesh geometry={nodes.Cylinder008_Pasillo_0.geometry} material={materials.Pasillo} />
            <mesh geometry={nodes.Cylinder008_Tobogan_0.geometry} material={materials.Tobogan} />
          </group>

          <mesh geometry={nodes.Cube011_Pasillo_0.geometry} material={materials.Pasillo} position={[-415.241, 0.389, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.Cube_Lineas_0.geometry} material={materials.Lineas} position={[226.284, 13.288, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.Cylinder002_pasamanos_0.geometry} material={materials.pasamanos} position={[-291.343, 14.263, 119.944]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[55.994, 53.551, 45.808]} />
          <mesh geometry={nodes.Cylinder006_Luminaria_0.geometry} material={materials.Luminaria} position={[-243.63, 31.277, 142.081]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

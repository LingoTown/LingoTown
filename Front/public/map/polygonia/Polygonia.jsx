import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Polygonia(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Map/Polygonia/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.05}>
          <group name="72927af2b7604ad1b8c1030ff9e4f094fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                
                <group name="Landscape" position={[-1470.939, 25.067, -3470.666]}>
                  <group name="Mount" position={[-3798.572, 772.171, 6556.35]} rotation={[Math.PI, -1.179, Math.PI]}>
                    <mesh name="Mount_World_ap_0" geometry={nodes.Mount_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Mount_2" position={[-5978.496, 244.055, 6707.37]} rotation={[0, -0.826, 0]}>
                    <mesh name="Mount_2_World_ap_0" geometry={nodes.Mount_2_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Road_3_4" position={[668.573, -424.53, -16.11]} rotation={[Math.PI, 0, Math.PI]}>
                    <mesh name="Road_3_4_World_ap_0" geometry={nodes.Road_3_4_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Ships" position={[1547.866, -143.64, -4880.716]}>
                    <group name="Ship_2" position={[-2817.141, -5.449, 520.082]} rotation={[0.482, -1.46, 0.489]}>
                      <mesh name="Ship_2_World_ap_0" geometry={nodes.Ship_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Containers_Ship_1" position={[-6357.03, 79.559, -295.692]} rotation={[-0.131, 0.005, 0.024]}>
                      <mesh name="Containers_Ship_1_World_ap_0" geometry={nodes.Containers_Ship_1_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Ship" position={[2499.693, -4.481, 337.818]} rotation={[1.41, 1.539, -1.414]}>
                      <mesh name="Ship_World_ap_0" geometry={nodes.Ship_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Ship_1" position={[1554.176, -27.242, 196.764]} rotation={[-0.015, 1.363, 0.02]}>
                      <mesh name="Ship_1_World_ap_0" geometry={nodes.Ship_1_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Containers_Ship" position={[-2200.664, 75.624, -927.945]} rotation={[3.094, -0.103, 3.112]}>
                      <mesh name="Containers_Ship_World_ap_0" geometry={nodes.Containers_Ship_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Containers_Ship_2" position={[-3463.017, 79.559, -2680.653]} rotation={[-0.131, 0.005, 0.024]}>
                      <mesh name="Containers_Ship_2_World_ap_0" geometry={nodes.Containers_Ship_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Ship_3" position={[3768.031, -5.449, -2737.405]} rotation={[0.482, -1.46, 0.489]}>
                      <mesh name="Ship_3_World_ap_0" geometry={nodes.Ship_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                  </group>
                  <group name="Landscape_1" position={[-3032.206, 647.114, 5887.756]}>
                    <mesh name="Landscape_1_World_ap_0" geometry={nodes.Landscape_1_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Landscape_2" position={[-1727.034, 308.095, 5085.586]}>
                    <mesh name="Landscape_2_World_ap_0" geometry={nodes.Landscape_2_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Sea" position={[1047.624, -153.092, -5248.476]} rotation={[0, Math.PI / 2, 0]}>
                    <mesh name="Sea_World_ap_0" geometry={nodes.Sea_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Plane" position={[1047.624, -149.173, 1903.229]} rotation={[0, Math.PI / 2, 0]}>
                    <mesh name="Plane_World_ap164_0" geometry={nodes.Plane_World_ap164_0.geometry} material={materials['World_ap.164']} />
                  </group>
                </group>
                <group name="Trafficlight" position={[-1252.499, 0, -2185.59]}>
                  <group name="Trafficlight_4" position={[242.326, 0, 1189.069]}>
                    <group name="traffic_light_0" position={[-174.835, 0, 171.542]}>
                      <mesh name="traffic_light_0_World_ap_0" geometry={nodes.traffic_light_0_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="traffic_light_1" position={[174.835, 0, 171.542]}>
                      <mesh name="traffic_light_1_World_ap_0" geometry={nodes.traffic_light_1_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="traffic_light_2" position={[-174.835, 0, -171.542]}>
                      <mesh name="traffic_light_2_World_ap_0" geometry={nodes.traffic_light_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="traffic_light_3" position={[174.835, 0, -171.542]}>
                      <mesh name="traffic_light_3_World_ap_0" geometry={nodes.traffic_light_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                  </group>
                  <group name="Trafficlight_3" position={[-3298.207, 0, 1189.069]}>
                    <group name="traffic_light_0_2" position={[-174.835, 0, 171.542]}>
                      <mesh name="traffic_light_0_2_World_ap_0" geometry={nodes.traffic_light_0_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="traffic_light_1_2" position={[174.835, 0, 171.542]}>
                      <mesh name="traffic_light_1_2_World_ap_0" geometry={nodes.traffic_light_1_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="traffic_light_2_2" position={[-174.835, 0, -171.542]}>
                      <mesh name="traffic_light_2_2_World_ap_0" geometry={nodes.traffic_light_2_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="traffic_light_3_2" position={[174.835, 0, -171.542]}>
                      <mesh name="traffic_light_3_2_World_ap_0" geometry={nodes.traffic_light_3_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                  </group>
                  <group name="Trafficlight_2" position={[-3300.251, 0, -1776.299]}>
                    <group name="traffic_light_0_3" position={[-174.835, 0, 171.542]}>
                      <mesh name="traffic_light_0_3_World_ap_0" geometry={nodes.traffic_light_0_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="traffic_light_1_3" position={[174.835, 0, 171.542]}>
                      <mesh name="traffic_light_1_3_World_ap_0" geometry={nodes.traffic_light_1_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="traffic_light_2_3" position={[-174.835, 0, -171.542]}>
                      <mesh name="traffic_light_2_3_World_ap_0" geometry={nodes.traffic_light_2_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="traffic_light_3_3" position={[174.835, 0, -171.542]}>
                      <mesh name="traffic_light_3_3_World_ap_0" geometry={nodes.traffic_light_3_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                  </group>
                  <group name="Trafficlight_1" position={[3178.066, 0, -1772.539]}>
                    <group name="traffic_light_0_4" position={[-174.835, 0, 171.542]}>
                      <mesh name="traffic_light_0_4_World_ap_0" geometry={nodes.traffic_light_0_4_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="traffic_light_1_4" position={[174.835, 0, 171.542]}>
                      <mesh name="traffic_light_1_4_World_ap_0" geometry={nodes.traffic_light_1_4_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="traffic_light_2_4" position={[-174.835, 0, -171.542]}>
                      <mesh name="traffic_light_2_4_World_ap_0" geometry={nodes.traffic_light_2_4_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="traffic_light_3_4" position={[174.835, 0, -171.542]}>
                      <mesh name="traffic_light_3_4_World_ap_0" geometry={nodes.traffic_light_3_4_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                  </group>
                  <group name="Trafficlight_2_2" position={[3178.066, 0, 1170.701]}>
                    <group name="traffic_light_0_5" position={[-174.835, 0, 171.542]}>
                      <mesh name="traffic_light_0_5_World_ap_0" geometry={nodes.traffic_light_0_5_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="traffic_light_1_5" position={[174.835, 0, 171.542]}>
                      <mesh name="traffic_light_1_5_World_ap_0" geometry={nodes.traffic_light_1_5_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="traffic_light_2_5" position={[-174.835, 0, -171.542]}>
                      <mesh name="traffic_light_2_5_World_ap_0" geometry={nodes.traffic_light_2_5_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="traffic_light_3_5" position={[174.835, 0, -171.542]}>
                      <mesh name="traffic_light_3_5_World_ap_0" geometry={nodes.traffic_light_3_5_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                  </group>
                </group>

                <group name="Cars" position={[-5064.697, -90.704, -79.199]} rotation={[Math.PI, 0, -Math.PI]}>
                  <group name="CAR_03_1" position={[-569.461, 15.534, 3745.604]} rotation={[-Math.PI, 0.732, Math.PI]} scale={1.5}>
                    <mesh name="CAR_03_1_World_ap_0" geometry={nodes.CAR_03_1_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="CAR_03" position={[1042.365, 14.663, 3767.502]} rotation={[Math.PI, 1.544, -Math.PI]} scale={1.5}>
                    <mesh name="CAR_03_World_ap_0" geometry={nodes.CAR_03_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_04" position={[-5614.168, 21.45, 3760.024]} rotation={[0, 1.57, 0]} scale={1.5}>
                    <mesh name="Car_04_World_ap_0" geometry={nodes.Car_04_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="CAR_03_2" position={[-523.72, 14.663, 1463.236]} rotation={[Math.PI, 0.114, -Math.PI]} scale={1.5}>
                    <mesh name="CAR_03_2_World_ap_0" geometry={nodes.CAR_03_2_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_04_1" position={[-4418.912, 21.45, 943.039]} rotation={[0, 1.57, 0]} scale={1.5}>
                    <mesh name="Car_04_1_World_ap_0" geometry={nodes.Car_04_1_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_04_2" position={[-564.707, 23.053, 2448.018]} rotation={[Math.PI, -0.007, Math.PI]} scale={1.5}>
                    <mesh name="Car_04_2_World_ap_0" geometry={nodes.Car_04_2_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_04_3" position={[-6801.161, -27.098, 959.673]} rotation={[Math.PI, -1.57, Math.PI]} scale={1.5}>
                    <mesh name="Car_04_3_World_ap_0" geometry={nodes.Car_04_3_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_04_4" position={[-3924.898, 21.45, -35.692]} rotation={[Math.PI, 0.001, -Math.PI]} scale={1.5}>
                    <mesh name="Car_04_4_World_ap_0" geometry={nodes.Car_04_4_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_08_4" position={[-7025.82, -18.351, 1610.511]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.5}>
                    <mesh name="Car_08_4_World_ap1023_0" geometry={nodes.Car_08_4_World_ap1023_0.geometry} material={materials['World_ap.1023']} />
                  </group>
                  <group name="Car_08_3" position={[-1328.488, -18.366, 841.957]} rotation={[Math.PI / 2, 0, 3.105]} scale={1.5}>
                    <mesh name="Car_08_3_World_ap1024_0" geometry={nodes.Car_08_3_World_ap1024_0.geometry} material={materials['World_ap.1024']} />
                  </group>
                  <group name="Car_04_1_2" position={[-5037.385, 21.45, -2148.717]} rotation={[0, 1.546, 0]} scale={1.5}>
                    <mesh name="Car_04_1_2_World_ap_0" geometry={nodes.Car_04_1_2_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_08_2" position={[-3140.911, -14.732, 965.191]} rotation={[Math.PI / 2, 0, -0.009]} scale={1.5}>
                    <mesh name="Car_08_2_World_ap1026_0" geometry={nodes.Car_08_2_World_ap1026_0.geometry} material={materials['World_ap.1026']} />
                  </group>
                  <group name="CAR_03_1_2" position={[-8709.479, 14.663, 839.113]} rotation={[-Math.PI, 1.558, Math.PI]} scale={1.5}>
                    <mesh name="CAR_03_1_2_World_ap_0" geometry={nodes.CAR_03_1_2_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="CAR_03_2_2" position={[-6222.732, 15.549, 3898.298]} rotation={[0, -1.503, 0]} scale={1.5}>
                    <mesh name="CAR_03_2_2_World_ap_0" geometry={nodes.CAR_03_2_2_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_04_2_2" position={[-1763.04, 26.531, 3780.609]} rotation={[Math.PI, 1.355, -Math.PI]} scale={1.5}>
                    <mesh name="Car_04_2_2_World_ap_0" geometry={nodes.Car_04_2_2_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_08_1" position={[-2424.846, -14.732, 3761.353]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={1.5}>
                    <mesh name="Car_08_1_World_ap1030_0" geometry={nodes.Car_08_1_World_ap1030_0.geometry} material={materials['World_ap.1030']} />
                  </group>
                  <group name="Car_08" position={[-414.685, -19.039, 1878.325]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.5}>
                    <mesh name="Car_08_World_ap1031_0" geometry={nodes.Car_08_World_ap1031_0.geometry} material={materials['World_ap.1031']} />
                  </group>
                  <group name="Car_08_5" position={[2004.669, -18.273, 3903.76]} rotation={[Math.PI / 2, 0, -0.037]} scale={1.5}>
                    <mesh name="Car_08_5_World_ap1032_0" geometry={nodes.Car_08_5_World_ap1032_0.geometry} material={materials['World_ap.1032']} />
                  </group>
                  <group name="CAR_03_2_3" position={[-7053.386, 24.408, 375.289]} rotation={[-Math.PI, 0.02, Math.PI]} scale={1.5}>
                    <mesh name="CAR_03_2_3_World_ap_0" geometry={nodes.CAR_03_2_3_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_08_6" position={[-5235.278, -19.063, 2573.717]} rotation={[Math.PI / 2, 0, 1.56]} scale={1.5}>
                    <mesh name="Car_08_6_World_ap1034_0" geometry={nodes.Car_08_6_World_ap1034_0.geometry} material={materials['World_ap.1034']} />
                  </group>
                  <group name="CAR_03_3" position={[-3963.369, 15.305, 3414.917]} rotation={[0, 0.098, 0]} scale={1.5}>
                    <mesh name="CAR_03_3_World_ap_0" geometry={nodes.CAR_03_3_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_04_5" position={[-6870.895, 21.45, 2249.598]} rotation={[Math.PI, 0.001, -Math.PI]} scale={1.5}>
                    <mesh name="Car_04_5_World_ap_0" geometry={nodes.Car_04_5_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_08_7" position={[-8237.864, -18.09, 3770.838]} rotation={[Math.PI / 2, 0, 3.105]} scale={1.5}>
                    <mesh name="Car_08_7_World_ap1037_0" geometry={nodes.Car_08_7_World_ap1037_0.geometry} material={materials['World_ap.1037']} />
                  </group>
                  <group name="CAR_03_4" position={[-6890.985, 24.408, 4718.212]} rotation={[0, -0.156, 0]} scale={1.5}>
                    <mesh name="CAR_03_4_World_ap_0" geometry={nodes.CAR_03_4_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_04_6" position={[-4624.714, 21.45, 4287.248]} rotation={[Math.PI, -1.546, Math.PI]} scale={1.5}>
                    <mesh name="Car_04_6_World_ap_0" geometry={nodes.Car_04_6_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_04_7" position={[-4073.813, 21.45, 4962.907]} rotation={[Math.PI, 0.14, -Math.PI]} scale={1.5}>
                    <mesh name="Car_04_7_World_ap_0" geometry={nodes.Car_04_7_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_04_8" position={[-6881.226, 21.45, 4124.822]} rotation={[0, 0.035, 0]} scale={1.5}>
                    <mesh name="Car_04_8_World_ap_0" geometry={nodes.Car_04_8_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_04_9" position={[-8857.737, 21.45, 3948.251]} rotation={[Math.PI, -1.57, Math.PI]} scale={1.5}>
                    <mesh name="Car_04_9_World_ap_0" geometry={nodes.Car_04_9_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_04_10" position={[-4108.685, -28.67, 4138.3]} rotation={[Math.PI, -1.537, Math.PI]} scale={1.5}>
                    <mesh name="Car_04_10_World_ap_0" geometry={nodes.Car_04_10_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_04_11" position={[-6289.937, 21.45, 3496.372]} rotation={[Math.PI, -0.119, Math.PI]} scale={1.5}>
                    <mesh name="Car_04_11_World_ap_0" geometry={nodes.Car_04_11_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_08_9" position={[-4524.048, -19.132, 3339.479]} rotation={[Math.PI / 2, 0, -1.631]} scale={1.5}>
                    <mesh name="Car_08_9_World_ap1045_0" geometry={nodes.Car_08_9_World_ap1045_0.geometry} material={materials['World_ap.1045']} />
                  </group>
                  <group name="Car_08_10" position={[-4048.589, -19.063, 3004.756]} rotation={[Math.PI / 2, 0, 1.58]} scale={1.5}>
                    <mesh name="Car_08_10_World_ap1046_0" geometry={nodes.Car_08_10_World_ap1046_0.geometry} material={materials['World_ap.1046']} />
                  </group>
                  <group name="Car_04_12" position={[-6232.779, 21.45, 808.587]} rotation={[0, 1.566, 0]} scale={1.5}>
                    <mesh name="Car_04_12_World_ap_0" geometry={nodes.Car_04_12_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_08_11" position={[-5692.658, -18.09, 813.816]} rotation={[Math.PI / 2, 0, 3.105]} scale={1.5}>
                    <mesh name="Car_08_11_World_ap1048_0" geometry={nodes.Car_08_11_World_ap1048_0.geometry} material={materials['World_ap.1048']} />
                  </group>
                  <group name="Car_08_8" position={[-2651.654, -14.732, 965.191]} rotation={[Math.PI / 2, 0, -0.009]} scale={1.5}>
                    <mesh name="Car_08_8_World_ap1049_0" geometry={nodes.Car_08_8_World_ap1049_0.geometry} material={materials['World_ap.1049']} />
                  </group>
                  <group name="Car_04_13" position={[-6249.314, 26.531, 4897.74]} rotation={[0, 1.562, 0]} scale={1.5}>
                    <mesh name="Car_04_13_World_ap_0" geometry={nodes.Car_04_13_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_Polce" position={[-4666.145, -27.098, 3923.015]} rotation={[Math.PI, -1.57, Math.PI]} scale={1.5}>
                    <mesh name="Car_Polce_World_ap_0" geometry={nodes.Car_Polce_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_Polce_2" position={[-3513.844, -27.098, -589.332]} rotation={[Math.PI, 0.001, -Math.PI]} scale={1.5}>
                    <mesh name="Car_Polce_2_World_ap_0" geometry={nodes.Car_Polce_2_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_Polce_1" position={[-561.699, -27.098, 3300.292]} rotation={[Math.PI, 0.001, -Math.PI]} scale={1.5}>
                    <mesh name="Car_Polce_1_World_ap_0" geometry={nodes.Car_Polce_1_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="CAR_03_5" position={[-2092.367, 14.663, 834.865]} rotation={[Math.PI, 1.544, -Math.PI]} scale={1.5}>
                    <mesh name="CAR_03_5_World_ap_0" geometry={nodes.CAR_03_5_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_08_12" position={[2397.608, -18.273, 3903.76]} rotation={[Math.PI / 2, 0, -0.037]} scale={1.5}>
                    <mesh name="Car_08_12_World_ap1055_0" geometry={nodes.Car_08_12_World_ap1055_0.geometry} material={materials['World_ap.1055']} />
                  </group>
                  <group name="CAR_03_6" position={[-129.895, 24.408, 986.883]} rotation={[-Math.PI, -1.551, -Math.PI]} scale={1.5}>
                    <mesh name="CAR_03_6_World_ap_0" geometry={nodes.CAR_03_6_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_04_14" position={[2670.296, 21.45, 832.19]} rotation={[0, 1.566, 0]} scale={1.5}>
                    <mesh name="Car_04_14_World_ap_0" geometry={nodes.Car_04_14_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_08_13" position={[880.612, -18.273, 969.843]} rotation={[Math.PI / 2, 0, -0.037]} scale={1.5}>
                    <mesh name="Car_08_13_World_ap1058_0" geometry={nodes.Car_08_13_World_ap1058_0.geometry} material={materials['World_ap.1058']} />
                  </group>
                  <group name="Car_04_15" position={[-6868.311, 21.45, 2973.355]} rotation={[0, 0.035, 0]} scale={1.5}>
                    <mesh name="Car_04_15_World_ap_0" geometry={nodes.Car_04_15_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_04_16" position={[-3928.869, 21.45, 2274.515]} rotation={[0, 0.035, 0]} scale={1.5}>
                    <mesh name="Car_04_16_World_ap_0" geometry={nodes.Car_04_16_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_04_17" position={[-6861.929, 21.45, -579.984]} rotation={[0, 0.035, 0]} scale={1.5}>
                    <mesh name="Car_04_17_World_ap_0" geometry={nodes.Car_04_17_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="Car_04_18" position={[-7419.021, 21.45, -1996.121]} rotation={[-Math.PI, -1.431, -Math.PI]} scale={1.5}>
                    <mesh name="Car_04_18_World_ap_0" geometry={nodes.Car_04_18_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="CAR_03_7" position={[-3946.712, 15.305, -3251.853]} rotation={[0, 0.008, 0]} scale={1.5}>
                    <mesh name="CAR_03_7_World_ap_0" geometry={nodes.CAR_03_7_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                  <group name="CAR_03_8" position={[1507.682, 15.305, 1815.649]} rotation={[Math.PI, 0.021, -Math.PI]} scale={1.5}>
                    <mesh name="CAR_03_8_World_ap_0" geometry={nodes.CAR_03_8_World_ap_0.geometry} material={materials.World_ap} />
                  </group>
                </group>
                <group name="City" position={[-5007.126, -110.787, -466.586]} rotation={[Math.PI, 0, -Math.PI]}>
                  <group name="PArking" position={[-4303.046, 57.009, 4025.647]} rotation={[-Math.PI, 0, Math.PI]}>
                    <group name="Car_08_8_2" position={[-306.131, -47.199, 10.672]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={1.5}>
                      <mesh name="Car_08_8_2_World_ap1065_0" geometry={nodes.Car_08_8_2_World_ap1065_0.geometry} material={materials['World_ap.1065']} />
                    </group>
                    <group name="Base_1" position={[1.901, -22.362, -8.743]}>
                      <group name="Muff_1" position={[263.18, 10.601, -277.155]} rotation={[Math.PI, 0, Math.PI]}>
                        <mesh name="Muff_1_World_ap_0" geometry={nodes.Muff_1_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Floor" position={[-29.379, 2.843, 7.091]}>
                        <mesh name="Floor_World_ap_0" geometry={nodes.Floor_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Car_08_2_2" position={[5300.646, -47.199, 3400.718]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={1.5}>
                      <mesh name="Car_08_2_2_World_ap1068_0" geometry={nodes.Car_08_2_2_World_ap1068_0.geometry} material={materials['World_ap.1068']} />
                    </group>
                    <group name="Car_08_1_2" position={[3368.815, -47.199, 6472.992]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={1.5}>
                      <mesh name="Car_08_1_2_World_ap1069_0" geometry={nodes.Car_08_1_2_World_ap1069_0.geometry} material={materials['World_ap.1069']} />
                    </group>
                  </group>
                  <group name="Tower" position={[-982.797, 475.726, -3141.178]} rotation={[Math.PI, 0, -Math.PI]}>
                    <group name="Cloner_1" position={[1013.205, -285.161, -1153.902]}>
                      <mesh name="Cloner_1_World_ap_0" geometry={nodes.Cloner_1_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                  </group>
                  <group name="Stadium" position={[-1582.765, 1.097, 3964.94]} rotation={[Math.PI, 0, Math.PI]}>
                    <group name="Floor_1" position={[-7.701, 96.678, -820.29]} rotation={[Math.PI, 0, Math.PI]}>
                      <mesh name="Floor_1_World_ap_0" geometry={nodes.Floor_1_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Bushes_2" position={[-462.32, 21.297, 203.511]} rotation={[0, -Math.PI / 2, 0]}>
                      <group name="Tree_3_1" position={[-56.452, -42.957, -1023.939]} rotation={[-0.805, 1.335, 2.129]}>
                        <group name="Bush_1" position={[-180.684, 571.96, 319.826]} rotation={[1.538, 0.399, -0.054]}>
                          <group name="bUSH_3" position={[7.899, -279.916, 333.255]}>
                            <mesh name="bUSH_3_World_ap_0" geometry={nodes.bUSH_3_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH" position={[-51.952, -345.844, 620.648]} rotation={[-3.111, 0.34, -0.471]}>
                            <mesh name="bUSH_World_ap_0" geometry={nodes.bUSH_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_1" position={[-43.165, -302.71, 423.139]} rotation={[0.767, 0.215, 0.056]}>
                            <mesh name="bUSH_1_World_ap_0" geometry={nodes.bUSH_1_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Tree_3" position={[10.452, 30.379, -1.19]} rotation={[-0.002, -0.001, 0]}>
                          <mesh name="Tree_3_World_ap_0" geometry={nodes.Tree_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_2" position={[-38.004, 199.801, 46.066]} rotation={[-0.002, -0.001, 0]}>
                          <mesh name="Tree_3_1_2_World_ap_0" geometry={nodes.Tree_3_1_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2" position={[171.25, -179.029, -634.796]} rotation={[-0.002, -0.001, 0]}>
                          <mesh name="Tree_3_2_World_ap_0" geometry={nodes.Tree_3_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3" position={[197.584, -97.942, -858.304]} rotation={[-0.002, -0.001, 0]}>
                          <mesh name="Tree_3_3_World_ap_0" geometry={nodes.Tree_3_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_2" position={[17.815, -76.279, 27.948]} rotation={[0.094, -0.001, 0]}>
                          <mesh name="Tree_3_4_2_World_ap_0" geometry={nodes.Tree_3_4_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5" position={[47.134, -211.182, -20.238]} rotation={[0.094, -0.001, 0]}>
                          <mesh name="Tree_3_5_World_ap_0" geometry={nodes.Tree_3_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Tree_3_2_2" position={[-56.452, -42.957, 27.365]} rotation={[-0.805, 1.335, 2.129]}>
                        <group name="Bush_1_2" position={[-180.684, 571.96, 319.826]} rotation={[1.538, 0.399, -0.054]}>
                          <group name="bUSH_3_2" position={[7.899, -279.916, 333.255]}>
                            <mesh name="bUSH_3_2_World_ap_0" geometry={nodes.bUSH_3_2_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_2" position={[-51.952, -345.844, 620.648]} rotation={[-3.111, 0.34, -0.471]}>
                            <mesh name="bUSH_2_World_ap_0" geometry={nodes.bUSH_2_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_1_2" position={[-43.165, -302.71, 423.139]} rotation={[0.767, 0.215, 0.056]}>
                            <mesh name="bUSH_1_2_World_ap_0" geometry={nodes.bUSH_1_2_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Tree_3_11_6" position={[-67.792, 244.546, 82.373]} rotation={[-0.002, -0.001, 0]}>
                          <mesh name="Tree_3_11_6_World_ap_0" geometry={nodes.Tree_3_11_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3_2" position={[-46.14, 319.833, -69.769]} rotation={[-0.002, -0.001, 0]}>
                          <mesh name="Tree_3_3_2_World_ap_0" geometry={nodes.Tree_3_3_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_3" position={[-38.004, 199.801, 46.066]} rotation={[-0.002, -0.001, 0]}>
                          <mesh name="Tree_3_1_3_World_ap_0" geometry={nodes.Tree_3_1_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_3" position={[-17.504, 125.827, 29.178]} rotation={[-0.002, -0.001, 0]}>
                          <mesh name="Tree_3_2_3_World_ap_0" geometry={nodes.Tree_3_2_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3_3" position={[35.175, 388.809, -590.315]} rotation={[-0.002, -0.001, 0]}>
                          <mesh name="Tree_3_3_3_World_ap_0" geometry={nodes.Tree_3_3_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_3" position={[17.815, -76.279, 27.948]} rotation={[0.094, -0.001, 0]}>
                          <mesh name="Tree_3_4_3_World_ap_0" geometry={nodes.Tree_3_4_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5_2" position={[55.936, 448.932, -962.496]} rotation={[0.094, -0.001, 0]}>
                          <mesh name="Tree_3_5_2_World_ap_0" geometry={nodes.Tree_3_5_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Tree_3_2_4" position={[-56.452, -42.957, -498.266]} rotation={[-0.805, 1.335, 2.129]}>
                        <group name="Bush_1_3" position={[-180.684, 571.96, 319.826]} rotation={[1.538, 0.399, -0.054]}>
                          <group name="bUSH_3_3" position={[-16.853, -320.17, 528.746]}>
                            <mesh name="bUSH_3_3_World_ap_0" geometry={nodes.bUSH_3_3_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_1_3" position={[-43.165, -302.71, 423.139]} rotation={[0.767, 0.215, 0.056]}>
                            <mesh name="bUSH_1_3_World_ap_0" geometry={nodes.bUSH_1_3_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Tree_3_11_7_2" position={[-152.266, 896.532, -317.2]} rotation={[-0.002, -0.001, 0]}>
                          <mesh name="Tree_3_11_7_2_World_ap_0" geometry={nodes.Tree_3_11_7_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_4" position={[240.663, -703.253, -322.036]} rotation={[-0.002, -0.001, 0]}>
                          <mesh name="Tree_3_4_4_World_ap_0" geometry={nodes.Tree_3_4_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_4" position={[-33.636, 183.431, 43.289]} rotation={[-0.002, -0.001, 0]}>
                          <mesh name="Tree_3_1_4_World_ap_0" geometry={nodes.Tree_3_1_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_5" position={[-17.504, 125.827, 29.178]} rotation={[-0.002, -0.001, 0]}>
                          <mesh name="Tree_3_2_5_World_ap_0" geometry={nodes.Tree_3_2_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                    </group>
                    <group name="Field_1" position={[1.76, -7.444, -605.03]}>
                      <mesh name="Field_1_World_ap_0" geometry={nodes.Field_1_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Chairs" position={[-5.892, 9.771, -6.763]}>
                      <group name="Platform" position={[-17.677, -25.723, -89.488]}>
                        <mesh name="Platform_World_ap_0" geometry={nodes.Platform_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Chaairs" position={[5.892, 9.657, -75.472]}>
                        <mesh name="Chaairs_World_ap_0" geometry={nodes.Chaairs_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Chaairs_3" position={[5.892, 25.837, -25.583]}>
                        <mesh name="Chaairs_3_World_ap_0" geometry={nodes.Chaairs_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Chaairs_1" position={[5.892, -9.771, -126.003]}>
                        <mesh name="Chaairs_1_World_ap_0" geometry={nodes.Chaairs_1_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                  </group>
                  <group name="Block_8_Gas_Station" position={[-3258.333, 23.362, -1793.193]} rotation={[0, Math.PI / 2, 0]}>
                    <group name="Road_1_5" position={[-225.034, -38.578, 58.216]} rotation={[0, -Math.PI / 2, 0]}>
                      <mesh name="Road_1_5_World_ap_0" geometry={nodes.Road_1_5_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_4" position={[363.022, -38.578, 58.216]} rotation={[0, -Math.PI / 2, 0]}>
                      <mesh name="Road_1_4_World_ap_0" geometry={nodes.Road_1_4_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_6" position={[-813.098, -38.578, 58.216]} rotation={[0, -Math.PI / 2, 0]}>
                      <mesh name="Road_1_6_World_ap_0" geometry={nodes.Road_1_6_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Behcnh" position={[3.139, -27.69, -14.281]} rotation={[Math.PI / 2, 0, Math.PI]}>
                      <group name="TAble" position={[-158.845, -340.013, 0]} rotation={[0, 0, -Math.PI / 2]}>
                        <group name="Bench_9" position={[-34.991, 0, 1.887]}>
                          <mesh name="Bench_9_World_ap_0" geometry={nodes.Bench_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_10" position={[34.823, 0, 1.887]}>
                          <mesh name="Bench_10_World_ap_0" geometry={nodes.Bench_10_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_11" position={[0.168, 0, -3.773]}>
                          <mesh name="Bench_11_World_ap_0" geometry={nodes.Bench_11_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="TAble_1" position={[-158.845, -201.019, 0]} rotation={[0, 0, -Math.PI / 2]}>
                        <group name="Bench_9_2" position={[-34.991, 0, 1.887]}>
                          <mesh name="Bench_9_2_World_ap_0" geometry={nodes.Bench_9_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_10_2" position={[34.823, 0, 1.887]}>
                          <mesh name="Bench_10_2_World_ap_0" geometry={nodes.Bench_10_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_11_2" position={[0.168, 0, -3.773]}>
                          <mesh name="Bench_11_2_World_ap_0" geometry={nodes.Bench_11_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="TAble_2" position={[-158.845, -67.429, 0]} rotation={[0, 0, -Math.PI / 2]}>
                        <group name="Bench_9_3" position={[-34.991, 0, 1.887]}>
                          <mesh name="Bench_9_3_World_ap_0" geometry={nodes.Bench_9_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_10_3" position={[34.823, 0, 1.887]}>
                          <mesh name="Bench_10_3_World_ap_0" geometry={nodes.Bench_10_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_11_3" position={[0.168, 0, -3.773]}>
                          <mesh name="Bench_11_3_World_ap_0" geometry={nodes.Bench_11_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="TAble_3" position={[35.787, -340.013, 0]} rotation={[0, 0, -Math.PI / 2]}>
                        <group name="Bench_9_4" position={[-34.991, 0, 1.887]}>
                          <mesh name="Bench_9_4_World_ap_0" geometry={nodes.Bench_9_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_10_4" position={[34.823, 0, 1.887]}>
                          <mesh name="Bench_10_4_World_ap_0" geometry={nodes.Bench_10_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_11_4" position={[0.168, 0, -3.773]}>
                          <mesh name="Bench_11_4_World_ap_0" geometry={nodes.Bench_11_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                    </group>
                    <group name="Trees_1_5" position={[-740.017, -42.143, 184.036]} rotation={[-Math.PI, 0, -Math.PI]}>
                      <group name="Firtree_47" position={[-7.178, -13.825, 196.861]}>
                        <mesh name="Firtree_47_World_ap_0" geometry={nodes.Firtree_47_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_3" position={[6.925, 7.184, 86.344]}>
                        <mesh name="Firtree_3_World_ap_0" geometry={nodes.Firtree_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_2" position={[3.307, 0.834, 24.334]}>
                        <mesh name="Firtree_2_World_ap_0" geometry={nodes.Firtree_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_1" position={[-7.403, -8.659, -34.685]}>
                        <mesh name="Firtree_1_World_ap_0" geometry={nodes.Firtree_1_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree" position={[-2.345, -9.209, -108.512]}>
                        <mesh name="Firtree_World_ap_0" geometry={nodes.Firtree_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Cube_7" position={[-14.552, 10.777, 8.305]}>
                        <mesh name="Cube_7_World_ap_0" geometry={nodes.Cube_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_4" position={[-9.925, -0.602, -198.132]} rotation={[0, 0.815, 0]}>
                        <mesh name="Firtree_4_World_ap_0" geometry={nodes.Firtree_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_5" position={[3.307, 0.834, 134.08]} rotation={[0, 0.947, 0]}>
                        <mesh name="Firtree_5_World_ap_0" geometry={nodes.Firtree_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Trees_6_2" position={[314.375, -42.143, 184.036]} rotation={[Math.PI, 0, -Math.PI]}>
                      <group name="Firtree_47_2" position={[-7.178, -13.825, 196.861]}>
                        <mesh name="Firtree_47_2_World_ap_0" geometry={nodes.Firtree_47_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_3_2" position={[6.925, 7.184, 86.344]}>
                        <mesh name="Firtree_3_2_World_ap_0" geometry={nodes.Firtree_3_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_2_2" position={[3.307, 0.834, 24.334]}>
                        <mesh name="Firtree_2_2_World_ap_0" geometry={nodes.Firtree_2_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_1_2" position={[-7.403, -8.659, -34.685]}>
                        <mesh name="Firtree_1_2_World_ap_0" geometry={nodes.Firtree_1_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_2_3" position={[-2.345, -9.209, -108.512]}>
                        <mesh name="Firtree_2_3_World_ap_0" geometry={nodes.Firtree_2_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Cube_7_2" position={[-14.552, 10.777, 8.305]}>
                        <mesh name="Cube_7_2_World_ap_0" geometry={nodes.Cube_7_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_4_2" position={[-9.925, -0.602, -198.132]} rotation={[0, 0.815, 0]}>
                        <mesh name="Firtree_4_2_World_ap_0" geometry={nodes.Firtree_4_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_5_2" position={[3.307, 0.834, 134.08]} rotation={[0, 0.947, 0]}>
                        <mesh name="Firtree_5_2_World_ap_0" geometry={nodes.Firtree_5_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Gas_Building" position={[-484.712, 24.073, 115.652]} rotation={[-Math.PI, 0, -Math.PI]}>
                      <mesh name="Gas_Building_World_ap_0" geometry={nodes.Gas_Building_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="gas" position={[-287.959, 15.326, -155.696]} rotation={[-Math.PI, 0, -Math.PI]}>
                      <group name="GAs" position={[-91.834, -16.505, 173.963]}>
                        <mesh name="GAs_World_ap_0" geometry={nodes.GAs_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Roof_1" position={[-2.416, 52.055, 83.912]}>
                        <mesh name="Roof_1_World_ap_0" geometry={nodes.Roof_1_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="GAs_1" position={[-91.834, -16.505, -3.896]}>
                        <mesh name="GAs_1_World_ap_0" geometry={nodes.GAs_1_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="GAs_2" position={[95.044, -16.505, 173.963]}>
                        <mesh name="GAs_2_World_ap_0" geometry={nodes.GAs_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="GAs_3" position={[95.044, -16.505, -3.896]}>
                        <mesh name="GAs_3_World_ap_0" geometry={nodes.GAs_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Trees_2_5" position={[-441.669, -42.143, 342.137]} rotation={[0, -1.571, 0]}>
                      <group name="Firtree_47_3" position={[-7.178, -13.825, 196.861]}>
                        <mesh name="Firtree_47_3_World_ap_0" geometry={nodes.Firtree_47_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_3_3" position={[6.925, 7.184, 86.344]}>
                        <mesh name="Firtree_3_3_World_ap_0" geometry={nodes.Firtree_3_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_2_4" position={[3.307, 0.834, 24.334]}>
                        <mesh name="Firtree_2_4_World_ap_0" geometry={nodes.Firtree_2_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_1_3" position={[-7.403, -8.659, -34.685]}>
                        <mesh name="Firtree_1_3_World_ap_0" geometry={nodes.Firtree_1_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_3_4" position={[-2.345, -9.209, -108.512]}>
                        <mesh name="Firtree_3_4_World_ap_0" geometry={nodes.Firtree_3_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Cube_7_3" position={[-14.552, 10.777, 8.305]}>
                        <mesh name="Cube_7_3_World_ap_0" geometry={nodes.Cube_7_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_4_3" position={[-9.925, -0.602, -198.132]} rotation={[0, 0.815, 0]}>
                        <mesh name="Firtree_4_3_World_ap_0" geometry={nodes.Firtree_4_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_5_3" position={[3.307, 0.834, 134.08]} rotation={[0, 0.947, 0]}>
                        <mesh name="Firtree_5_3_World_ap_0" geometry={nodes.Firtree_5_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                  </group>
                  <group name="Block_4" position={[-9157.129, 22.146, 2891.929]}>
                    <group name="Trash" position={[141.544, -24.783, -275.586]} rotation={[1.556, 0.012, 1.656]}>
                      <mesh name="Trash_World_ap_0" geometry={nodes.Trash_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Shop" position={[-0.493, -36.633, -216.586]} rotation={[Math.PI / 2, 0, 0]}>
                      <mesh name="Shop_World_ap_0" geometry={nodes.Shop_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Trash_2" position={[95.765, -22.368, -35.001]} rotation={[-Math.PI, 0, 0]}>
                      <mesh name="Trash_2_World_ap_0" geometry={nodes.Trash_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Trash_3" position={[-17.313, -22.368, -35.001]} rotation={[-Math.PI, 0, 0]}>
                      <mesh name="Trash_3_World_ap_0" geometry={nodes.Trash_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Base" position={[-1.319, 12.501, 5.27]}>
                      <group name="Floor_4" position={[-16.377, 5.03, -26.238]}>
                        <mesh name="Floor_4_World_ap_0" geometry={nodes.Floor_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Floor_2" position={[69.813, 3.391, 277.502]}>
                        <mesh name="Floor_2_World_ap_0" geometry={nodes.Floor_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Bushes_1" position={[-316.775, -14.546, -113.046]} rotation={[Math.PI, 0, Math.PI]}>
                      <group name="Bed" position={[2.856, -15.812, -38.212]} rotation={[-Math.PI, 0, Math.PI]}>
                        <mesh name="Bed_World_ap_0" geometry={nodes.Bed_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bushes_15" position={[-0.952, 5.271, 177.883]} rotation={[-1.382, -1.399, -0.042]}>
                        <mesh name="Bushes_15_World_ap_0" geometry={nodes.Bushes_15_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bushes_2_2" position={[-0.952, 5.271, -52.62]} rotation={[-1.382, -1.399, -0.042]}>
                        <mesh name="Bushes_2_2_World_ap_0" geometry={nodes.Bushes_2_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bushes" position={[-0.952, 5.271, 49.297]} rotation={[-1.382, -1.399, -0.042]}>
                        <mesh name="Bushes_World_ap_0" geometry={nodes.Bushes_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_1" position={[-20.425, -28.776, -82.21]} rotation={[-2.971, -0.123, -1.782]}>
                        <mesh name="Tree_1_World_ap_0" geometry={nodes.Tree_1_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_2" position={[-26.521, -46.038, 12.043]} rotation={[-1.382, -1.399, -0.042]}>
                        <mesh name="Tree_2_World_ap_0" geometry={nodes.Tree_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_5_3" position={[-39.243, -27.908, 158.025]} rotation={[-0.171, -0.162, 1.31]}>
                        <mesh name="Tree_3_5_3_World_ap_0" geometry={nodes.Tree_3_5_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Bushes_2_3" position={[245.774, -14.546, -113.046]} rotation={[Math.PI, 0, Math.PI]}>
                      <group name="Bed_2" position={[2.856, -15.812, -38.212]} rotation={[-Math.PI, 0, Math.PI]}>
                        <mesh name="Bed_2_World_ap_0" geometry={nodes.Bed_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bushes_15_2" position={[-0.952, 5.271, 177.883]} rotation={[-1.382, -1.399, -0.042]}>
                        <mesh name="Bushes_15_2_World_ap_0" geometry={nodes.Bushes_15_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bushes_2_4" position={[-0.952, 5.271, -52.62]} rotation={[-1.382, -1.399, -0.042]}>
                        <mesh name="Bushes_2_4_World_ap_0" geometry={nodes.Bushes_2_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bushes_3" position={[-0.952, 5.271, 49.297]} rotation={[-1.382, -1.399, -0.042]}>
                        <mesh name="Bushes_3_World_ap_0" geometry={nodes.Bushes_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_1_2" position={[-20.425, -28.776, -82.21]} rotation={[-1.382, -1.399, -0.042]}>
                        <mesh name="Tree_1_2_World_ap_0" geometry={nodes.Tree_1_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_2_2" position={[-34.946, -27.908, 12.043]} rotation={[-1.382, -1.399, -0.042]}>
                        <mesh name="Tree_2_2_World_ap_0" geometry={nodes.Tree_2_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_6_3" position={[-29.61, -27.908, 158.025]} rotation={[-0.171, -0.162, 1.31]}>
                        <mesh name="Tree_3_6_3_World_ap_0" geometry={nodes.Tree_3_6_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                  </group>
                  <group name="Roads_Block_1" position={[-4830.86, -15.216, 4914.232]}>
                    <group name="Road_1_10" position={[-2055.75, 0, -374.478]}>
                      <mesh name="Road_1_10_World_ap_0" geometry={nodes.Road_1_10_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_11" position={[-2055.963, 0, -880.705]}>
                      <mesh name="Road_1_11_World_ap_0" geometry={nodes.Road_1_11_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_2" position={[-2053.633, 0, -2053.372]}>
                      <mesh name="Road_2_World_ap_0" geometry={nodes.Road_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1" position={[-2053.636, 0, -2651.151]}>
                      <mesh name="Road_1_World_ap_0" geometry={nodes.Road_1_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_3" position={[-2053.849, 0, -3249.668]}>
                      <mesh name="Road_1_3_World_ap_0" geometry={nodes.Road_1_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_4_2" position={[-2053.849, 0, -3823.187]}>
                      <mesh name="Road_1_4_2_World_ap_0" geometry={nodes.Road_1_4_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_1" position={[-73.001, 0, -316.351]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_1_World_ap_0" geometry={nodes.Road_1_1_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_2" position={[2066.476, 0, -880.705]}>
                      <mesh name="Road_1_2_World_ap_0" geometry={nodes.Road_1_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_5_2" position={[6326.867, 1, -3184.351]}>
                      <mesh name="Road_1_5_2_World_ap_0" geometry={nodes.Road_1_5_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                  </group>
                  <group name="Roads_Block_1_2" position={[-1885.282, -15.216, -1564.425]}>
                    <group name="Roa_Small" position={[-7337.083, -0.323, 286.193]} rotation={[Math.PI, 0, Math.PI]}>
                      <mesh name="Roa_Small_World_ap_0" geometry={nodes.Roa_Small_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_9" position={[-2061.332, 0, 884.945]}>
                      <mesh name="Road_1_9_World_ap_0" geometry={nodes.Road_1_9_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_10_2" position={[-2061.335, 0, -292.641]}>
                      <mesh name="Road_1_10_2_World_ap_0" geometry={nodes.Road_1_10_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Roa_Small_1" position={[-6360.301, -0.323, 286.193]} rotation={[Math.PI, 0, -Math.PI]}>
                      <mesh name="Roa_Small_1_World_ap_0" geometry={nodes.Roa_Small_1_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Roa_Small_2" position={[-6360.301, -0.323, -893.51]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Roa_Small_2_World_ap_0" geometry={nodes.Roa_Small_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                  </group>
                  <group name="Road_Line_3" position={[-6888.956, -15.216, -4121.549]}>
                    <group name="Road_1_1_2" position={[0, 0, 2144.861]}>
                      <mesh name="Road_1_1_2_World_ap_0" geometry={nodes.Road_1_1_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_2_2" position={[0, 0, 2644.153]}>
                      <mesh name="Road_1_2_2_World_ap_0" geometry={nodes.Road_1_2_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_3_2" position={[0, 0, 3232.212]}>
                      <mesh name="Road_1_3_2_World_ap_0" geometry={nodes.Road_1_3_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_2_3" position={[0, 0, 3811.65]}>
                      <mesh name="Road_1_2_3_World_ap_0" geometry={nodes.Road_1_2_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_4_3" position={[0, 0, 4161.276]}>
                      <mesh name="Road_1_4_3_World_ap_0" geometry={nodes.Road_1_4_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                  </group>
                  <group name="Road_Line_2" position={[-3951.88, -15.216, -6219.165]}>
                    <group name="Road_1_4_4" position={[0, 0, 1599.661]}>
                      <mesh name="Road_1_4_4_World_ap_0" geometry={nodes.Road_1_4_4_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_5_3" position={[0, 0, 1182.356]}>
                      <mesh name="Road_1_5_3_World_ap_0" geometry={nodes.Road_1_5_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_3_3" position={[0, 0, 2435.243]}>
                      <mesh name="Road_1_3_3_World_ap_0" geometry={nodes.Road_1_3_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_1_3" position={[0, 0, 2017.937]}>
                      <mesh name="Road_1_1_3_World_ap_0" geometry={nodes.Road_1_1_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_2_4" position={[0, 0, 3271.36]}>
                      <mesh name="Road_1_2_4_World_ap_0" geometry={nodes.Road_1_2_4_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_3_4" position={[0, 0, 2854.055]}>
                      <mesh name="Road_1_3_4_World_ap_0" geometry={nodes.Road_1_3_4_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_6_2" position={[0, 0, 761.536]}>
                      <mesh name="Road_1_6_2_World_ap_0" geometry={nodes.Road_1_6_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                  </group>
                  <group name="Road_Line_1" position={[-10703.004, -15.216, 3448.661]} rotation={[0, Math.PI / 2, 0]}>
                    <group name="Road_1_4_5" position={[0, 0, -884.206]}>
                      <mesh name="Road_1_4_5_World_ap_0" geometry={nodes.Road_1_4_5_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_5_4" position={[0, 0, -296.15]}>
                      <mesh name="Road_1_5_4_World_ap_0" geometry={nodes.Road_1_5_4_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_6_3" position={[0, 0, 291.914]}>
                      <mesh name="Road_1_6_3_World_ap_0" geometry={nodes.Road_1_6_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_8" position={[0, 0, 879.974]}>
                      <mesh name="Road_1_8_World_ap_0" geometry={nodes.Road_1_8_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_4_6" position={[0, 0, 1468.033]}>
                      <mesh name="Road_1_4_6_World_ap_0" geometry={nodes.Road_1_4_6_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_1_4" position={[0, 0, 2056.089]}>
                      <mesh name="Road_1_1_4_World_ap_0" geometry={nodes.Road_1_1_4_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_2_5" position={[0, 0, 2644.153]}>
                      <mesh name="Road_1_2_5_World_ap_0" geometry={nodes.Road_1_2_5_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_3_5" position={[0, 0, 3232.212]}>
                      <mesh name="Road_1_3_5_World_ap_0" geometry={nodes.Road_1_3_5_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_7" position={[0, 0, -1500.969]}>
                      <mesh name="Road_1_7_World_ap_0" geometry={nodes.Road_1_7_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                  </group>
                  <group name="Road_Line" position={[1052.145, -15.216, 3448.661]} rotation={[0, Math.PI / 2, 0]}>
                    <group name="Road_1_8_2" position={[0, 0, 879.974]}>
                      <mesh name="Road_1_8_2_World_ap_0" geometry={nodes.Road_1_8_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_5_5" position={[0, 0, 1466.007]}>
                      <mesh name="Road_1_5_5_World_ap_0" geometry={nodes.Road_1_5_5_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_1_5" position={[0, 0, -291.249]}>
                      <mesh name="Road_1_1_5_World_ap_0" geometry={nodes.Road_1_1_5_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_2_6" position={[0, 0, 296.777]}>
                      <mesh name="Road_1_2_6_World_ap_0" geometry={nodes.Road_1_2_6_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_3_6" position={[0, 0, -880.887]}>
                      <mesh name="Road_1_3_6_World_ap_0" geometry={nodes.Road_1_3_6_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_4_7" position={[-588.008, 0, -1464.099]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_4_7_World_ap_0" geometry={nodes.Road_1_4_7_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_5_6" position={[-1170.248, 0, -1464.099]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_5_6_World_ap_0" geometry={nodes.Road_1_5_6_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_6_4" position={[3522.449, 0, -2464.661]} rotation={[0, -Math.PI / 2, 0]}>
                      <mesh name="Road_1_6_4_World_ap_0" geometry={nodes.Road_1_6_4_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_7_2" position={[0, 0, 2041.548]}>
                      <mesh name="Road_1_7_2_World_ap_0" geometry={nodes.Road_1_7_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_9_2" position={[0, 0, 2594.064]}>
                      <mesh name="Road_1_9_2_World_ap_0" geometry={nodes.Road_1_9_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_10_3" position={[0, 0, 2947.59]}>
                      <mesh name="Road_1_10_3_World_ap_0" geometry={nodes.Road_1_10_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                  </group>
                  <group name="Block_8_1" position={[-1022.83, 47.233, 2906.784]}>
                    <group name="Bench_1" position={[110.334, -48.47, -0.104]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                      <mesh name="Bench_1_World_ap_0" geometry={nodes.Bench_1_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Bench" position={[84.959, -48.47, -0.769]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                      <mesh name="Bench_World_ap_0" geometry={nodes.Bench_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Muff_2" position={[261.171, -35.744, -218.493]}>
                      <mesh name="Muff_2_World_ap_0" geometry={nodes.Muff_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="House" position={[-84.486, 146.723, -139.616]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                      <mesh name="House_World_ap_0" geometry={nodes.House_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Base_1_2" position={[1.901, -22.362, -74.237]}>
                      <group name="Floor_4_2" position={[-17.945, -2.843, -58.886]}>
                        <mesh name="Floor_4_2_World_ap_0" geometry={nodes.Floor_4_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Tree" position={[209.127, -78.544, -51.862]}>
                      <group name="Tree_3_7_6_9" position={[46.131, -0.041, 36.661]} rotation={[-2.97, 0.162, -1.832]}>
                        <mesh name="Tree_3_7_6_9_World_ap_0" geometry={nodes.Tree_3_7_6_9_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bed_2_2" position={[58.904, 20.083, 4.528]} rotation={[-Math.PI, 0, -Math.PI]}>
                        <mesh name="Bed_2_2_World_ap_0" geometry={nodes.Bed_2_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_1_5_4" position={[36.662, -20.041, -41.189]} rotation={[-1.004, 1.37, 2.333]}>
                        <mesh name="Tree_3_1_5_4_World_ap_0" geometry={nodes.Tree_3_1_5_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Bushes_1_2" position={[42.514, -41.068, -333.806]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Bushes_4" position={[9.376, -4.549, -93.478]}>
                        <group name="Bed_3" position={[-1.538, -12.844, 51.445]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_3_World_ap_0" geometry={nodes.Bed_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_3_2" position={[1.538, 12.844, -51.445]} rotation={[-1.382, -1.399, -0.042]}>
                          <mesh name="Bushes_3_2_World_ap_0" geometry={nodes.Bushes_3_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bed_1" position={[-419.522, -17.393, -113.207]} rotation={[0, -Math.PI / 2, 0]}>
                        <mesh name="Bed_1_World_ap_0" geometry={nodes.Bed_1_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bed_2_3" position={[-484.988, -17.393, -217.044]} rotation={[-Math.PI, 0, Math.PI]}>
                        <mesh name="Bed_2_3_World_ap_0" geometry={nodes.Bed_2_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bushes_5" position={[-464.453, -2.008, -164.865]} rotation={[-1.382, -1.399, -0.042]}>
                        <mesh name="Bushes_5_World_ap_0" geometry={nodes.Bushes_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Muff" position={[225.232, -14.81, 157.261]} rotation={[0, -Math.PI / 2, 0]}>
                      <mesh name="Muff_World_ap_0" geometry={nodes.Muff_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Tree_1_3" position={[-294.037, -78.544, 109.45]}>
                      <group name="Tree_3_8_2" position={[-122.115, -0.041, -67.073]} rotation={[-2.97, 0.162, -1.832]}>
                        <mesh name="Tree_3_8_2_World_ap_0" geometry={nodes.Tree_3_8_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bed_2_4" position={[-30.669, 20.083, -13.998]} rotation={[-Math.PI, 0, -Math.PI]}>
                        <mesh name="Bed_2_4_World_ap_0" geometry={nodes.Bed_2_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_1_6" position={[-49.966, -20.041, -2.522]} rotation={[-1.004, 1.37, 2.333]}>
                        <mesh name="Tree_3_1_6_World_ap_0" geometry={nodes.Tree_3_1_6_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_2_6" position={[-161.231, -20.041, 15.516]} rotation={[-2.919, 0.702, -1.949]}>
                        <mesh name="Tree_3_2_6_World_ap_0" geometry={nodes.Tree_3_2_6_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_3_4" position={[-51.08, -25.524, -187.432]} rotation={[-1.004, 1.37, 2.333]}>
                        <mesh name="Tree_3_3_4_World_ap_0" geometry={nodes.Tree_3_3_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_4_5" position={[-156.14, -0.041, -283.054]} rotation={[-2.798, 1.047, -2.104]}>
                        <mesh name="Tree_3_4_5_World_ap_0" geometry={nodes.Tree_3_4_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_5_4" position={[-155.625, -0.041, -138.14]} rotation={[-0.412, 1.138, 1.716]}>
                        <mesh name="Tree_3_5_4_World_ap_0" geometry={nodes.Tree_3_5_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_6_4" position={[-131.476, -0.041, -239.19]} rotation={[-0.231, 0.744, 1.496]}>
                        <mesh name="Tree_3_6_4_World_ap_0" geometry={nodes.Tree_3_6_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_7_7_2" position={[-165.841, -25.524, -51.399]} rotation={[-1.004, 1.37, 2.333]}>
                        <mesh name="Tree_3_7_7_2_World_ap_0" geometry={nodes.Tree_3_7_7_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_8_3" position={[-68.116, -25.524, -250.172]} rotation={[-0.169, -0.053, 1.329]}>
                        <mesh name="Tree_3_8_3_World_ap_0" geometry={nodes.Tree_3_8_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Bench_2" position={[-208.487, -40.94, 21.292]} rotation={[Math.PI / 2, 0, 0]}>
                      <mesh name="Bench_2_World_ap_0" geometry={nodes.Bench_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Bench_3" position={[-208.487, -40.94, 82.248]} rotation={[Math.PI / 2, 0, 0]}>
                      <mesh name="Bench_3_World_ap_0" geometry={nodes.Bench_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                  </group>
                  <group name="Block_8" position={[-2244.561, 47.233, 1980.961]}>
                    <group name="Bench_1_2" position={[110.334, -48.47, -0.104]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                      <mesh name="Bench_1_2_World_ap_0" geometry={nodes.Bench_1_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Bench_2_2" position={[84.959, -48.47, -0.769]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                      <mesh name="Bench_2_2_World_ap_0" geometry={nodes.Bench_2_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Muff_2_2" position={[261.171, -35.744, -218.493]}>
                      <mesh name="Muff_2_2_World_ap_0" geometry={nodes.Muff_2_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="House_2" position={[-84.486, 146.723, -139.616]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                      <mesh name="House_2_World_ap_0" geometry={nodes.House_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Base_1_3" position={[1.901, -22.362, -74.237]}>
                      <group name="Floor_4_3" position={[-17.945, -2.843, -58.886]}>
                        <mesh name="Floor_4_3_World_ap_0" geometry={nodes.Floor_4_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Tree_2_3" position={[209.127, -78.544, -51.862]}>
                      <group name="Tree_3_9" position={[46.131, -0.041, 36.661]} rotation={[-2.97, 0.162, -1.832]}>
                        <mesh name="Tree_3_9_World_ap_0" geometry={nodes.Tree_3_9_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bed_2_5" position={[58.904, 20.083, 4.528]} rotation={[-Math.PI, 0, -Math.PI]}>
                        <mesh name="Bed_2_5_World_ap_0" geometry={nodes.Bed_2_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_1_7" position={[36.662, -20.041, -41.189]} rotation={[-1.004, 1.37, 2.333]}>
                        <mesh name="Tree_3_1_7_World_ap_0" geometry={nodes.Tree_3_1_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Bushes_1_3" position={[42.514, -41.068, -333.806]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Bushes_6" position={[9.376, -4.549, -93.478]}>
                        <group name="Bed_4" position={[-1.538, -12.844, 51.445]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_4_World_ap_0" geometry={nodes.Bed_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_3_3" position={[1.538, 12.844, -51.445]} rotation={[-1.382, -1.399, -0.042]}>
                          <mesh name="Bushes_3_3_World_ap_0" geometry={nodes.Bushes_3_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bed_1_2" position={[-419.522, -17.393, -113.207]} rotation={[0, -Math.PI / 2, 0]}>
                        <mesh name="Bed_1_2_World_ap_0" geometry={nodes.Bed_1_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bed_2_6" position={[-484.988, -17.393, -217.044]} rotation={[-Math.PI, 0, Math.PI]}>
                        <mesh name="Bed_2_6_World_ap_0" geometry={nodes.Bed_2_6_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bushes_7" position={[-464.453, -2.008, -164.865]} rotation={[-1.382, -1.399, -0.042]}>
                        <mesh name="Bushes_7_World_ap_0" geometry={nodes.Bushes_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Muff_2_3" position={[206.069, -14.81, 144.493]} rotation={[0, -Math.PI / 2, 0]}>
                      <mesh name="Muff_2_3_World_ap_0" geometry={nodes.Muff_2_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Tree_1_4" position={[-201.343, -78.544, 109.45]}>
                      <group name="Tree_3_10" position={[-59.903, -0.041, -67.073]} rotation={[-2.97, 0.162, -1.832]}>
                        <mesh name="Tree_3_10_World_ap_0" geometry={nodes.Tree_3_10_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bed_2_7" position={[-30.669, 20.083, -13.998]} rotation={[-Math.PI, 0, -Math.PI]}>
                        <mesh name="Bed_2_7_World_ap_0" geometry={nodes.Bed_2_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_1_8" position={[-49.966, -20.041, -2.522]} rotation={[-1.004, 1.37, 2.333]}>
                        <mesh name="Tree_3_1_8_World_ap_0" geometry={nodes.Tree_3_1_8_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_2_7" position={[-46.055, -20.041, 63.397]} rotation={[-2.919, 0.702, -1.949]}>
                        <mesh name="Tree_3_2_7_World_ap_0" geometry={nodes.Tree_3_2_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_3_5" position={[-51.08, -25.524, -187.432]} rotation={[-1.004, 1.37, 2.333]}>
                        <mesh name="Tree_3_3_5_World_ap_0" geometry={nodes.Tree_3_3_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_4_6" position={[-45.861, -0.041, -283.054]} rotation={[-2.798, 1.047, -2.104]}>
                        <mesh name="Tree_3_4_6_World_ap_0" geometry={nodes.Tree_3_4_6_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_5_5" position={[-42.498, -0.041, -138.14]} rotation={[-0.412, 1.138, 1.716]}>
                        <mesh name="Tree_3_5_5_World_ap_0" geometry={nodes.Tree_3_5_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_6_5" position={[-54.672, -0.041, -239.19]} rotation={[-0.231, 0.744, 1.496]}>
                        <mesh name="Tree_3_6_5_World_ap_0" geometry={nodes.Tree_3_6_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Bench_2_3" position={[-208.487, -40.94, 21.292]} rotation={[Math.PI / 2, 0, 0]}>
                      <mesh name="Bench_2_3_World_ap_0" geometry={nodes.Bench_2_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Bench_3_2" position={[-208.487, -40.94, 82.248]} rotation={[Math.PI / 2, 0, 0]}>
                      <mesh name="Bench_3_2_World_ap_0" geometry={nodes.Bench_3_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                  </group>
                  <group name="Block_Business" position={[-5782.245, 36.956, 1689.884]}>
                    <group name="House_3" position={[4622.333, 389.005, 252.533]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Tree_1_5" position={[-178.75, -457.272, 334.68]}>
                        <group name="Tree_3_11_8_10" position={[-59.903, -0.041, -67.073]} rotation={[-2.97, 0.162, -1.832]}>
                          <mesh name="Tree_3_11_8_10_World_ap_0" geometry={nodes.Tree_3_11_8_10_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bed_2_8" position={[-30.669, 20.083, -13.998]} rotation={[-Math.PI, 0, -Math.PI]}>
                          <mesh name="Bed_2_8_World_ap_0" geometry={nodes.Bed_2_8_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_9_4" position={[-49.966, -20.041, -2.522]} rotation={[-1.004, 1.37, 2.333]}>
                          <mesh name="Tree_3_1_9_4_World_ap_0" geometry={nodes.Tree_3_1_9_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3_6" position={[-51.08, -25.524, -187.432]} rotation={[-1.004, 1.37, 2.333]}>
                          <mesh name="Tree_3_3_6_World_ap_0" geometry={nodes.Tree_3_3_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_7" position={[-45.861, -0.041, -283.054]} rotation={[-2.798, 1.047, -2.104]}>
                          <mesh name="Tree_3_4_7_World_ap_0" geometry={nodes.Tree_3_4_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5_6" position={[-42.498, -0.041, -138.14]} rotation={[-0.412, 1.138, 1.716]}>
                          <mesh name="Tree_3_5_6_World_ap_0" geometry={nodes.Tree_3_5_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_6_6" position={[-54.672, -0.041, -239.19]} rotation={[-0.231, 0.744, 1.496]}>
                          <mesh name="Tree_3_6_6_World_ap_0" geometry={nodes.Tree_3_6_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_8" position={[-51.08, -25.524, -353.902]} rotation={[-1.004, 1.37, 2.333]}>
                          <mesh name="Tree_3_2_8_World_ap_0" geometry={nodes.Tree_3_2_8_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_7_8" position={[-51.08, -25.524, -425.855]} rotation={[-1.004, 1.37, 2.333]}>
                          <mesh name="Tree_3_7_8_World_ap_0" geometry={nodes.Tree_3_7_8_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_8_4" position={[-45.861, -0.041, -480.59]} rotation={[-2.798, 1.047, -2.104]}>
                          <mesh name="Tree_3_8_4_World_ap_0" geometry={nodes.Tree_3_8_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_9_2" position={[-61.349, -0.041, -557.208]} rotation={[-2.798, 1.047, -2.104]}>
                          <mesh name="Tree_3_9_2_World_ap_0" geometry={nodes.Tree_3_9_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_10_2_2" position={[-51.03, -0.041, 54.878]} rotation={[-2.798, 1.047, -2.104]}>
                          <mesh name="Tree_3_10_2_2_World_ap_0" geometry={nodes.Tree_3_10_2_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Tree_3_12_2" position={[-80.264, -441.314, -428.063]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Tree_3_13" position={[2.188, -42.52, 89.245]} rotation={[-2.916, 0.721, -1.954]}>
                          <mesh name="Tree_3_13_World_ap_0" geometry={nodes.Tree_3_13_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bed_2_9" position={[17.277, 5.473, 30.081]} rotation={[-Math.PI, 0, -Math.PI]}>
                          <mesh name="Bed_2_9_World_ap_0" geometry={nodes.Bed_2_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_10" position={[-12.187, -38.125, -29.293]} rotation={[-2.336, -1.335, -1.012]}>
                          <mesh name="Tree_3_1_10_World_ap_0" geometry={nodes.Tree_3_1_10_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_9" position={[6.599, -42.52, -96.914]} rotation={[-0.24, 0.783, 1.509]}>
                          <mesh name="Tree_3_2_9_World_ap_0" geometry={nodes.Tree_3_2_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3_7" position={[2.188, -42.52, 16.719]} rotation={[-2.916, 0.721, -1.954]}>
                          <mesh name="Tree_3_3_7_World_ap_0" geometry={nodes.Tree_3_3_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_8" position={[-7.587, -42.52, -150.715]} rotation={[-0.24, 0.783, 1.509]}>
                          <mesh name="Tree_3_4_8_World_ap_0" geometry={nodes.Tree_3_4_8_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Antenne_2" position={[248.216, -15.215, 223.986]} rotation={[-0.955, -0.281, 2.55]}>
                        <mesh name="Antenne_2_World_ap_0" geometry={nodes.Antenne_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Antenne_1" position={[-106.349, 150.097, 108.929]} rotation={[-2.011, -0.522, 0.596]}>
                        <mesh name="Antenne_1_World_ap_0" geometry={nodes.Antenne_1_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Antenne" position={[-80.62, 96.249, -71.327]} rotation={[-1.969, -0.522, 0.596]}>
                        <mesh name="Antenne_World_ap_0" geometry={nodes.Antenne_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="House_4" position={[80.985, -249.372, 233.909]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="House_4_World_ap_0" geometry={nodes.House_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Round_Building" position={[180.838, -76.838, 236.385]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Bushes_8" position={[3221.98, 55.822, -261.545]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bed_5" position={[3.979, -22.129, 55.292]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_5_World_ap_0" geometry={nodes.Bed_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_3_4" position={[7.863, -8.758, -2.615]} rotation={[-0.169, 0.032, 1.343]}>
                          <mesh name="Bushes_3_4_World_ap_0" geometry={nodes.Bushes_3_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Round_Building_2" position={[35.862, -27.256, -79.315]} rotation={[-Math.PI, -1.571, 0]}>
                        <group name="H" position={[-6.546, -1058.811, -4.923]} rotation={[Math.PI, Math.PI / 2, 0]}>
                          <mesh name="H_World_ap_0" geometry={nodes.H_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <mesh name="Round_Building_2_World_ap_0" geometry={nodes.Round_Building_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bushes_1_4" position={[3221.98, 55.822, 198.116]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bed_6" position={[-6.35, -22.129, 55.292]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_6_World_ap_0" geometry={nodes.Bed_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_3_5" position={[-3.773, -8.758, -0.243]} rotation={[-0.169, 0.032, 1.343]}>
                          <mesh name="Bushes_3_5_World_ap_0" geometry={nodes.Bushes_3_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                    </group>
                    <group name="Tree_4" position={[-710.721, -55.213, 1059.25]}>
                      <group name="Tree_3_14_6" position={[-5.005, -42.52, 280.132]} rotation={[-2.956, -0.423, -1.727]}>
                        <mesh name="Tree_3_14_6_World_ap_0" geometry={nodes.Tree_3_14_6_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bed_2_10" position={[68.239, 5.473, -238.958]} rotation={[-Math.PI, 0, -Math.PI]}>
                        <mesh name="Bed_2_10_World_ap_0" geometry={nodes.Bed_2_10_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_1_11" position={[63.037, -34.651, 357.772]} rotation={[-1.004, 1.37, 2.333]}>
                        <mesh name="Tree_3_1_11_World_ap_0" geometry={nodes.Tree_3_1_11_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_2_10" position={[-67.035, -14.651, 192.955]} rotation={[-2.97, 0.162, -1.832]}>
                        <mesh name="Tree_3_2_10_World_ap_0" geometry={nodes.Tree_3_2_10_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_4_9" position={[31.249, -12.844, 129.575]} rotation={[-2.903, 0.777, -1.972]}>
                        <mesh name="Tree_3_4_9_World_ap_0" geometry={nodes.Tree_3_4_9_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_5_7" position={[47.252, -39.987, -4.913]} rotation={[-2.796, 1.051, -2.107]}>
                        <mesh name="Tree_3_5_7_World_ap_0" geometry={nodes.Tree_3_5_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_6_7" position={[-70.423, -42.52, 41.682]} rotation={[-2.565, -1.257, -1.25]}>
                        <mesh name="Tree_3_6_7_World_ap_0" geometry={nodes.Tree_3_6_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_7_9_5" position={[-66.419, -41.321, 331.262]} rotation={[-1.004, 1.37, 2.333]}>
                        <mesh name="Tree_3_7_9_5_World_ap_0" geometry={nodes.Tree_3_7_9_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_8_5" position={[24.624, -5.918, -72.589]} rotation={[-2.212, -1.359, -0.884]}>
                        <mesh name="Tree_3_8_5_World_ap_0" geometry={nodes.Tree_3_8_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Tree_1_6" position={[397.441, -55.213, 182.88]}>
                      <group name="Tree_3_15" position={[13.228, -42.52, 280.132]} rotation={[-2.956, -0.423, -1.727]}>
                        <mesh name="Tree_3_15_World_ap_0" geometry={nodes.Tree_3_15_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bed_2_11" position={[30.803, 5.473, -152.9]} rotation={[-Math.PI, 0, -Math.PI]}>
                        <mesh name="Bed_2_11_World_ap_0" geometry={nodes.Bed_2_11_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_1_12_4" position={[-10.428, -34.651, -107.879]} rotation={[-1.004, 1.37, 2.333]}>
                        <mesh name="Tree_3_1_12_4_World_ap_0" geometry={nodes.Tree_3_1_12_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_2_11" position={[-0.959, -14.651, 192.955]} rotation={[-2.97, 0.162, -1.832]}>
                        <mesh name="Tree_3_2_11_World_ap_0" geometry={nodes.Tree_3_2_11_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_4_10" position={[-17.105, -12.844, 113.236]} rotation={[-2.903, 0.777, -1.972]}>
                        <mesh name="Tree_3_4_10_World_ap_0" geometry={nodes.Tree_3_4_10_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_5_8" position={[-10.428, -34.651, -33.402]} rotation={[-2.796, 1.051, -2.107]}>
                        <mesh name="Tree_3_5_8_World_ap_0" geometry={nodes.Tree_3_5_8_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_6_8" position={[-3.274, -42.52, 41.682]} rotation={[-2.565, -1.257, -1.25]}>
                        <mesh name="Tree_3_6_8_World_ap_0" geometry={nodes.Tree_3_6_8_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_7_10_7" position={[-1.116, -34.651, -173.874]} rotation={[-1.004, 1.37, 2.333]}>
                        <mesh name="Tree_3_7_10_7_World_ap_0" geometry={nodes.Tree_3_7_10_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_3_8_6" position={[24.624, -5.918, -72.589]} rotation={[-2.212, -1.359, -0.884]}>
                        <mesh name="Tree_3_8_6_World_ap_0" geometry={nodes.Tree_3_8_6_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Cafe" position={[1122.511, 20.052, 1106.883]}>
                      <group name="Behcnh_2" position={[-247.974, -57.274, 148.769]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <group name="Bench_6" position={[-21.151, 1.739, 2.695]}>
                          <mesh name="Bench_6_World_ap_0" geometry={nodes.Bench_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_3_3" position={[78.584, -0.348, 2.695]}>
                          <mesh name="Bench_3_3_World_ap_0" geometry={nodes.Bench_3_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_1_3" position={[29.076, -0.348, -5.391]}>
                          <mesh name="Bench_1_3_World_ap_0" geometry={nodes.Bench_1_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_2_4" position={[-489.284, -503.463, 2.695]}>
                          <mesh name="Bench_2_4_World_ap_0" geometry={nodes.Bench_2_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_3_4" position={[-389.548, -503.463, 2.695]}>
                          <mesh name="Bench_3_4_World_ap_0" geometry={nodes.Bench_3_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_4" position={[-439.056, -503.463, -5.391]}>
                          <mesh name="Bench_4_World_ap_0" geometry={nodes.Bench_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_5" position={[-297.612, -503.463, 2.695]}>
                          <mesh name="Bench_5_World_ap_0" geometry={nodes.Bench_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_7" position={[-197.876, -503.463, 2.695]}>
                          <mesh name="Bench_7_World_ap_0" geometry={nodes.Bench_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_8" position={[-247.384, -503.463, -5.391]}>
                          <mesh name="Bench_8_World_ap_0" geometry={nodes.Bench_8_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_9_5" position={[-111.677, -503.463, 2.695]}>
                          <mesh name="Bench_9_5_World_ap_0" geometry={nodes.Bench_9_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_10_5" position={[-11.942, -503.463, 2.695]}>
                          <mesh name="Bench_10_5_World_ap_0" geometry={nodes.Bench_10_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_11_5" position={[-61.449, -503.463, -5.391]}>
                          <mesh name="Bench_11_5_World_ap_0" geometry={nodes.Bench_11_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_5" position={[-197.793, -41.068, -385.514]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Tree_3_16_2" position={[-7.27, -37.517, 401.123]} rotation={[-0.805, 1.335, 2.129]}>
                          <group name="Bush_1_4" position={[-18.453, 5.095, 153.163]} rotation={[1.538, 0.399, -0.054]}>
                            <group name="bUSH_3_4" position={[6.899, -244.468, 291.052]}>
                              <mesh name="bUSH_3_4_World_ap_0" geometry={nodes.bUSH_3_4_World_ap_0.geometry} material={materials.World_ap} />
                            </group>
                            <group name="bUSH_3_5" position={[-35.277, -257.304, 424.034]} rotation={[-3.111, 0.34, -0.471]}>
                              <mesh name="bUSH_3_5_World_ap_0" geometry={nodes.bUSH_3_5_World_ap_0.geometry} material={materials.World_ap} />
                            </group>
                            <group name="bUSH_1_4" position={[-37.699, -264.375, 369.553]} rotation={[0.767, 0.215, 0.056]}>
                              <mesh name="bUSH_1_4_World_ap_0" geometry={nodes.bUSH_1_4_World_ap_0.geometry} material={materials.World_ap} />
                            </group>
                          </group>
                          <group name="Bed_2_12" position={[103.024, -317.589, -99.318]} rotation={[-1.403, -0.257, -1.699]}>
                            <mesh name="Bed_2_12_World_ap_0" geometry={nodes.Bed_2_12_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_11_9" position={[80.143, -280.856, -54.219]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_11_9_World_ap_0" geometry={nodes.Tree_3_11_9_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_17" position={[152.191, -492.882, -114.606]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_17_World_ap_0" geometry={nodes.Tree_3_17_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_1_13" position={[109.738, -333.348, -88.204]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_1_13_World_ap_0" geometry={nodes.Tree_3_1_13_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_2_12" position={[124.063, -384.541, -100.678]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_2_12_World_ap_0" geometry={nodes.Tree_3_2_12_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_3_8" position={[142.656, -438.368, -133.922]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_3_8_World_ap_0" geometry={nodes.Tree_3_3_8_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                      </group>
                      <group name="Bushes_9" position={[326.06, -45.617, -124.147]}>
                        <group name="Bed_7" position={[89.607, -20.6, 63.399]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_7_World_ap_0" geometry={nodes.Bed_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_3_6" position={[90.427, 5.087, -185.609]} rotation={[-1.382, -1.399, -0.042]}>
                          <mesh name="Bushes_3_6_World_ap_0" geometry={nodes.Bushes_3_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bed_1_3" position={[-135.837, -20.6, 470.727]} rotation={[0, Math.PI / 2, 0]}>
                          <mesh name="Bed_1_3_World_ap_0" geometry={nodes.Bed_1_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_10" position={[-122.082, -8.041, 467.681]} rotation={[-2.972, -0.032, -1.798]}>
                          <mesh name="Bushes_10_World_ap_0" geometry={nodes.Bushes_10_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bed_2_13" position={[-628.681, -20.6, 470.516]} rotation={[0, Math.PI / 2, 0]}>
                          <mesh name="Bed_2_13_World_ap_0" geometry={nodes.Bed_2_13_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_1_6" position={[-614.925, -8.041, 467.892]} rotation={[-2.972, -0.032, -1.798]}>
                          <mesh name="Bushes_1_6_World_ap_0" geometry={nodes.Bushes_1_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Shop_2" position={[-196.615, -57.058, -126.379]} rotation={[1.722, 0.087, -1.844]}>
                        <mesh name="Shop_2_World_ap_0" geometry={nodes.Shop_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Fence" position={[129.068, -57.394, 83.973]} rotation={[Math.PI, 0, Math.PI]}>
                        <group name="Garden_1" position={[-230.299, 0, -173.208]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                          <mesh name="Garden_1_World_ap_0" geometry={nodes.Garden_1_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2" position={[-191.989, 0, -208.79]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                          <mesh name="Garden_2_World_ap_0" geometry={nodes.Garden_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden" position={[-191.189, 0, 519.85]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                          <mesh name="Garden_World_ap_0" geometry={nodes.Garden_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3" position={[502.866, 0, -173.208]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                          <mesh name="Garden_3_World_ap_0" geometry={nodes.Garden_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_2_5" position={[157.475, -41.068, 200.796]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Tree_3_18" position={[-7.27, -37.517, 401.123]} rotation={[-0.805, 1.335, 2.129]}>
                          <group name="Bush_1_5" position={[-18.453, 5.095, 153.163]} rotation={[1.538, 0.399, -0.054]}>
                            <group name="bUSH_3_6" position={[6.899, -244.468, 291.052]}>
                              <mesh name="bUSH_3_6_World_ap_0" geometry={nodes.bUSH_3_6_World_ap_0.geometry} material={materials.World_ap} />
                            </group>
                            <group name="bUSH_4" position={[-45.373, -302.047, 542.05]} rotation={[-3.111, 0.34, -0.471]}>
                              <mesh name="bUSH_4_World_ap_0" geometry={nodes.bUSH_4_World_ap_0.geometry} material={materials.World_ap} />
                            </group>
                            <group name="bUSH_1_5" position={[-37.699, -264.375, 369.553]} rotation={[0.767, 0.215, 0.056]}>
                              <mesh name="bUSH_1_5_World_ap_0" geometry={nodes.bUSH_1_5_World_ap_0.geometry} material={materials.World_ap} />
                            </group>
                          </group>
                          <group name="Bed_2_14" position={[105.78, -324.055, -106.288]} rotation={[-1.403, -0.257, -1.699]}>
                            <mesh name="Bed_2_14_World_ap_0" geometry={nodes.Bed_2_14_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_11_10" position={[80.143, -280.856, -54.219]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_11_10_World_ap_0" geometry={nodes.Tree_3_11_10_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_19" position={[148.478, -467.902, -127.2]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_19_World_ap_0" geometry={nodes.Tree_3_19_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_1_14" position={[106.159, -319.934, -85.928]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_1_14_World_ap_0" geometry={nodes.Tree_3_1_14_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_2_13" position={[124.063, -384.541, -100.678]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_2_13_World_ap_0" geometry={nodes.Tree_3_2_13_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_3_9" position={[143.671, -460.542, -78.137]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_3_9_World_ap_0" geometry={nodes.Tree_3_3_9_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                      </group>
                    </group>
                    <group name="Block_8_2" position={[-568.691, 10.276, 169.822]} rotation={[0, -Math.PI / 2, 0]}>
                      <group name="Bench_1_4" position={[110.334, -48.47, -0.104]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_1_4_World_ap_0" geometry={nodes.Bench_1_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_4_2" position={[84.959, -48.47, -0.769]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_4_2_World_ap_0" geometry={nodes.Bench_4_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Muff_2_4" position={[233.401, -12.463, -214.004]}>
                        <mesh name="Muff_2_4_World_ap_0" geometry={nodes.Muff_2_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="House_5" position={[-84.486, 146.723, -139.616]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="House_5_World_ap_0" geometry={nodes.House_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_4" position={[1.901, -22.362, -74.237]}>
                        <group name="Floor_4_4" position={[-17.945, -0.286, -58.886]}>
                          <mesh name="Floor_4_4_World_ap_0" geometry={nodes.Floor_4_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Tree_5" position={[262.629, -78.544, 128.842]}>
                        <group name="Tree_3_20_7" position={[46.131, -0.041, 36.661]} rotation={[-2.97, 0.162, -1.832]}>
                          <mesh name="Tree_3_20_7_World_ap_0" geometry={nodes.Tree_3_20_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bed_2_15" position={[58.904, 20.083, 4.528]} rotation={[-Math.PI, 0, -Math.PI]}>
                          <mesh name="Bed_2_15_World_ap_0" geometry={nodes.Bed_2_15_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_15_4" position={[36.662, -20.041, -41.189]} rotation={[-1.004, 1.37, 2.333]}>
                          <mesh name="Tree_3_1_15_4_World_ap_0" geometry={nodes.Tree_3_1_15_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_7" position={[42.514, -41.068, -333.806]} rotation={[0, 1.571, 0]}>
                        <group name="Bushes_11" position={[9.376, -4.549, -93.478]}>
                          <group name="Bed_8" position={[55.847, -12.844, 51.445]} rotation={[-Math.PI, 0, Math.PI]}>
                            <mesh name="Bed_8_World_ap_0" geometry={nodes.Bed_8_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Bushes_3_7" position={[58.922, 12.844, -51.445]} rotation={[-1.382, -1.399, -0.042]}>
                            <mesh name="Bushes_3_7_World_ap_0" geometry={nodes.Bushes_3_7_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Bed_1_4" position={[-419.522, -17.393, -113.207]} rotation={[0, -1.571, 0]}>
                          <mesh name="Bed_1_4_World_ap_0" geometry={nodes.Bed_1_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bed_2_16" position={[-499.169, -17.393, -165.976]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_2_16_World_ap_0" geometry={nodes.Bed_2_16_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_12" position={[-478.634, -2.008, -113.797]} rotation={[-1.382, -1.399, -0.042]}>
                          <mesh name="Bushes_12_World_ap_0" geometry={nodes.Bushes_12_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Muff_3" position={[494.072, -14.81, 163.348]} rotation={[0, -Math.PI / 2, 0]}>
                        <mesh name="Muff_3_World_ap_0" geometry={nodes.Muff_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_1_7" position={[-239.566, -78.544, 64.1]}>
                        <group name="Tree_3_21" position={[-59.903, -0.041, -67.073]} rotation={[-2.97, 0.162, -1.832]}>
                          <mesh name="Tree_3_21_World_ap_0" geometry={nodes.Tree_3_21_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bed_2_17" position={[-30.669, 20.083, -13.998]} rotation={[-Math.PI, 0, -Math.PI]}>
                          <mesh name="Bed_2_17_World_ap_0" geometry={nodes.Bed_2_17_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_16" position={[-49.966, -20.041, -2.522]} rotation={[-1.004, 1.37, 2.333]}>
                          <mesh name="Tree_3_1_16_World_ap_0" geometry={nodes.Tree_3_1_16_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3_10" position={[-51.08, -25.524, -187.432]} rotation={[-1.004, 1.37, 2.333]}>
                          <mesh name="Tree_3_3_10_World_ap_0" geometry={nodes.Tree_3_3_10_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_11" position={[-45.861, -0.041, -283.054]} rotation={[-2.798, 1.047, -2.104]}>
                          <mesh name="Tree_3_4_11_World_ap_0" geometry={nodes.Tree_3_4_11_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5_9" position={[-42.498, -0.041, -138.14]} rotation={[-0.412, 1.138, 1.716]}>
                          <mesh name="Tree_3_5_9_World_ap_0" geometry={nodes.Tree_3_5_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_6_9" position={[-54.672, -0.041, -239.19]} rotation={[-0.231, 0.744, 1.496]}>
                          <mesh name="Tree_3_6_9_World_ap_0" geometry={nodes.Tree_3_6_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_2_5" position={[-208.487, -40.94, 43.002]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_2_5_World_ap_0" geometry={nodes.Bench_2_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_3_5" position={[-208.487, -40.94, 103.959]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_3_5_World_ap_0" geometry={nodes.Bench_3_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Muff_1_2" position={[690.665, -14.81, 163.348]} rotation={[0, -Math.PI / 2, 0]}>
                        <mesh name="Muff_1_2_World_ap_0" geometry={nodes.Muff_1_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_7" position={[69.433, 20.052, -1448.731]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Skyscraper" position={[-971.93, -240.749, -0.032]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Skyscraper_World_ap_0" geometry={nodes.Skyscraper_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_5" position={[1.901, -22.362, -13.853]}>
                        <group name="Floor_4_5" position={[99.427, -85.235, 22.545]}>
                          <mesh name="Floor_4_5_World_ap_0" geometry={nodes.Floor_4_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Floor_3" position={[-897.359, 0.018, 8.924]}>
                          <mesh name="Floor_3_World_ap_0" geometry={nodes.Floor_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_13" position={[-845.395, -41.068, 291.593]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bed_9" position={[-12.777, -24.018, -42.033]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_9_World_ap_0" geometry={nodes.Bed_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_3_8" position={[-16.966, 5.798, -183.504]} rotation={[-1.382, -1.399, -0.042]}>
                          <mesh name="Bushes_3_8_World_ap_0" geometry={nodes.Bushes_3_8_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                    </group>
                    <group name="Block_5" position={[1117.914, 20.052, -643.831]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Tree_4_2" position={[-91.638, -75.266, -343.026]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Tree_3_22" position={[17.997, -42.52, 295.974]} rotation={[-2.956, -0.423, -1.727]}>
                          <mesh name="Tree_3_22_World_ap_0" geometry={nodes.Tree_3_22_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bed_2_18" position={[30.803, 5.473, -161.011]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_2_18_World_ap_0" geometry={nodes.Bed_2_18_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_17" position={[-10.428, -34.651, -107.879]} rotation={[-1.004, 1.37, 2.333]}>
                          <mesh name="Tree_3_1_17_World_ap_0" geometry={nodes.Tree_3_1_17_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_14" position={[-0.959, -14.651, 192.955]} rotation={[-2.97, 0.162, -1.832]}>
                          <mesh name="Tree_3_2_14_World_ap_0" geometry={nodes.Tree_3_2_14_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_12" position={[-17.105, -12.844, 113.236]} rotation={[-2.903, 0.777, -1.972]}>
                          <mesh name="Tree_3_4_12_World_ap_0" geometry={nodes.Tree_3_4_12_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5_10" position={[-10.428, -34.651, -33.402]} rotation={[-2.796, 1.051, -2.107]}>
                          <mesh name="Tree_3_5_10_World_ap_0" geometry={nodes.Tree_3_5_10_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_6_10" position={[-3.274, -42.52, 41.682]} rotation={[-2.565, -1.257, -1.25]}>
                          <mesh name="Tree_3_6_10_World_ap_0" geometry={nodes.Tree_3_6_10_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_7_11_2" position={[-10.428, -34.651, -194.05]} rotation={[-1.004, 1.37, 2.333]}>
                          <mesh name="Tree_3_7_11_2_World_ap_0" geometry={nodes.Tree_3_7_11_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_8_7" position={[24.624, -5.918, -72.589]} rotation={[-2.212, -1.359, -0.884]}>
                          <mesh name="Tree_3_8_7_World_ap_0" geometry={nodes.Tree_3_8_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Trash_4" position={[219.447, -61.148, -277.394]} rotation={[Math.PI / 2, 0, 2.986]}>
                        <mesh name="Trash_4_World_ap_0" geometry={nodes.Trash_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_2_6" position={[-215.34, -49.069, -157.536]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_2_6_World_ap_0" geometry={nodes.Bench_2_6_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="House_6" position={[-8.105, 321.723, -4.033]} rotation={[0, Math.PI / 2, 0]}>
                        <mesh name="House_6_World_ap_0" geometry={nodes.House_6_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_6" position={[1.901, -22.362, -5.802]}>
                        <group name="Floor_4_6" position={[-25.528, -14.143, 0]}>
                          <mesh name="Floor_4_6_World_ap_0" geometry={nodes.Floor_4_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_14" position={[-403.542, -38.381, 264.223]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bed_10" position={[-11.815, -26.555, 24.874]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_10_World_ap_0" geometry={nodes.Bed_10_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_3_9" position={[-8.722, -17.25, -31.713]} rotation={[-0.169, 0.032, 1.343]}>
                          <mesh name="Bushes_3_9_World_ap_0" geometry={nodes.Bushes_3_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_8" position={[-403.542, -38.381, -310.68]} rotation={[0, Math.PI / 2, 0]} />
                      <group name="Trash_1" position={[159.842, -60.267, -264.742]} rotation={[Math.PI / 2, 0, 0.038]}>
                        <mesh name="Trash_1_World_ap_0" geometry={nodes.Trash_1_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_2_4" position={[-91.638, -75.266, 357.671]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Tree_3_23_6" position={[-5.005, -42.52, 287.892]} rotation={[-2.956, -0.423, -1.727]}>
                          <mesh name="Tree_3_23_6_World_ap_0" geometry={nodes.Tree_3_23_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bed_2_19" position={[30.803, 5.473, -161.011]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_2_19_World_ap_0" geometry={nodes.Bed_2_19_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_18" position={[-10.428, -34.651, -107.879]} rotation={[-1.004, 1.37, 2.333]}>
                          <mesh name="Tree_3_1_18_World_ap_0" geometry={nodes.Tree_3_1_18_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_15" position={[-0.959, -14.651, 192.955]} rotation={[-2.97, 0.162, -1.832]}>
                          <mesh name="Tree_3_2_15_World_ap_0" geometry={nodes.Tree_3_2_15_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_13" position={[-17.105, -12.844, 113.236]} rotation={[-2.903, 0.777, -1.972]}>
                          <mesh name="Tree_3_4_13_World_ap_0" geometry={nodes.Tree_3_4_13_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5_11" position={[-10.428, -34.651, -33.402]} rotation={[-2.796, 1.051, -2.107]}>
                          <mesh name="Tree_3_5_11_World_ap_0" geometry={nodes.Tree_3_5_11_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_6_11" position={[-3.274, -42.52, 41.682]} rotation={[-2.565, -1.257, -1.25]}>
                          <mesh name="Tree_3_6_11_World_ap_0" geometry={nodes.Tree_3_6_11_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_7_12_4" position={[-10.428, -34.651, -194.05]} rotation={[-1.004, 1.37, 2.333]}>
                          <mesh name="Tree_3_7_12_4_World_ap_0" geometry={nodes.Tree_3_7_12_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_8_8" position={[24.624, -5.918, -72.589]} rotation={[-2.212, -1.359, -0.884]}>
                          <mesh name="Tree_3_8_8_World_ap_0" geometry={nodes.Tree_3_8_8_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                    </group>
                    <group name="Block_3_1" position={[3577.156, 9.16, 1096.878]} rotation={[0, -Math.PI / 2, 0]}>
                      <group name="Tree_11" position={[328.853, -61.468, 192.236]} rotation={[-Math.PI, 0, Math.PI]}>
                        <group name="Tree_3_24_7" position={[2.188, -42.52, 62.991]} rotation={[-2.916, 0.721, -1.954]}>
                          <mesh name="Tree_3_24_7_World_ap_0" geometry={nodes.Tree_3_24_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bed_2_20" position={[17.277, 5.473, 30.081]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_2_20_World_ap_0" geometry={nodes.Bed_2_20_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_19" position={[-12.187, -38.125, -42.101]} rotation={[-2.336, -1.335, -1.012]}>
                          <mesh name="Tree_3_1_19_World_ap_0" geometry={nodes.Tree_3_1_19_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_16" position={[6.599, -42.52, -96.914]} rotation={[-0.24, 0.783, 1.509]}>
                          <mesh name="Tree_3_2_16_World_ap_0" geometry={nodes.Tree_3_2_16_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3_11" position={[2.188, -42.52, 6.802]} rotation={[-2.916, 0.721, -1.954]}>
                          <mesh name="Tree_3_3_11_World_ap_0" geometry={nodes.Tree_3_3_11_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Base_1_7" position={[1.901, -22.362, -29.956]} />
                      <group name="Bushes_15_3" position={[34.471, -41.068, 181.977]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bed_11" position={[-69.291, -16.233, -49.107]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_11_World_ap_0" geometry={nodes.Bed_11_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_3_10" position={[-73.061, 4.638, -176.431]} rotation={[-1.382, -1.399, -0.042]}>
                          <mesh name="Bushes_3_10_World_ap_0" geometry={nodes.Bushes_3_10_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_9" position={[34.471, -41.068, -417.467]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bed_12" position={[71.628, -16.233, -42.378]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_12_World_ap_0" geometry={nodes.Bed_12_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_3_11" position={[67.858, 4.638, -169.702]} rotation={[-1.382, -1.399, -0.042]}>
                          <mesh name="Bushes_3_11_World_ap_0" geometry={nodes.Bushes_3_11_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="House_7" position={[-1.631, 124.58, 105.624]} rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Antenne_2_2" position={[30.459, -360.42, -350.953]} rotation={[2.582, 1.086, -0.955]}>
                          <mesh name="Antenne_2_2_World_ap_0" geometry={nodes.Antenne_2_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Antenne_1_2" position={[21.122, -290.6, -321.607]} rotation={[-2.221, 0.86, -2.619]}>
                          <mesh name="Antenne_1_2_World_ap_0" geometry={nodes.Antenne_1_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <mesh name="House_7_World_ap_0" geometry={nodes.House_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_6" position={[319.717, -61.468, -299.592]} rotation={[-Math.PI, 0, Math.PI]}>
                        <group name="Tree_3_25" position={[2.188, -42.52, 62.991]} rotation={[-2.916, 0.721, -1.954]}>
                          <mesh name="Tree_3_25_World_ap_0" geometry={nodes.Tree_3_25_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bed_2_21" position={[17.277, 5.473, 30.081]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_2_21_World_ap_0" geometry={nodes.Bed_2_21_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_20" position={[-12.187, -38.125, -42.101]} rotation={[-2.336, -1.335, -1.012]}>
                          <mesh name="Tree_3_1_20_World_ap_0" geometry={nodes.Tree_3_1_20_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_17" position={[6.599, -42.52, -96.914]} rotation={[-0.24, 0.783, 1.509]}>
                          <mesh name="Tree_3_2_17_World_ap_0" geometry={nodes.Tree_3_2_17_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3_12" position={[2.188, -42.52, 6.802]} rotation={[-2.916, 0.721, -1.954]}>
                          <mesh name="Tree_3_3_12_World_ap_0" geometry={nodes.Tree_3_3_12_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_2_6" position={[379.743, -141.942, -661.867]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bed_13" position={[71.628, -16.233, -42.378]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_13_World_ap_0" geometry={nodes.Bed_13_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_3_12" position={[67.858, 4.638, -169.702]} rotation={[-1.382, -1.399, -0.042]}>
                          <mesh name="Bushes_3_12_World_ap_0" geometry={nodes.Bushes_3_12_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                    </group>
                    <group name="Block_3" position={[4690.68, 9.16, -514.239]} rotation={[Math.PI, 0, Math.PI]}>
                      <group name="Tree_11_2" position={[328.853, -61.468, 192.236]} rotation={[-Math.PI, 0, Math.PI]}>
                        <group name="Tree_3_26" position={[2.188, -42.52, 62.991]} rotation={[-2.916, 0.721, -1.954]}>
                          <mesh name="Tree_3_26_World_ap_0" geometry={nodes.Tree_3_26_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bed_2_22" position={[17.277, 5.473, 30.081]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_2_22_World_ap_0" geometry={nodes.Bed_2_22_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_21" position={[-12.187, -38.125, -42.101]} rotation={[-2.336, -1.335, -1.012]}>
                          <mesh name="Tree_3_1_21_World_ap_0" geometry={nodes.Tree_3_1_21_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_18" position={[6.599, -42.52, -96.914]} rotation={[-0.24, 0.783, 1.509]}>
                          <mesh name="Tree_3_2_18_World_ap_0" geometry={nodes.Tree_3_2_18_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3_13" position={[2.188, -42.52, 6.802]} rotation={[-2.916, 0.721, -1.954]}>
                          <mesh name="Tree_3_3_13_World_ap_0" geometry={nodes.Tree_3_3_13_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Base_1_8" position={[1.901, -22.362, -29.956]} />
                      <group name="Bushes_16" position={[34.471, -41.068, 181.977]} rotation={[0, 1.571, 0]}>
                        <group name="Bed_14" position={[-69.291, -16.233, -49.107]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_14_World_ap_0" geometry={nodes.Bed_14_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_3_13" position={[-73.061, 4.638, -176.431]} rotation={[-1.382, -1.399, -0.042]}>
                          <mesh name="Bushes_3_13_World_ap_0" geometry={nodes.Bushes_3_13_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_10" position={[34.471, -41.068, -275.368]} rotation={[0, 1.571, 0]}>
                        <group name="Bed_15" position={[71.628, -16.233, -42.378]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_15_World_ap_0" geometry={nodes.Bed_15_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_3_14" position={[67.858, 4.638, -169.702]} rotation={[-1.382, -1.399, -0.042]}>
                          <mesh name="Bushes_3_14_World_ap_0" geometry={nodes.Bushes_3_14_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="House_8" position={[162.703, 124.58, -37.383]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <group name="Antenne_3" position={[30.459, -360.42, -350.953]} rotation={[2.582, 1.086, -0.955]}>
                          <mesh name="Antenne_3_World_ap_0" geometry={nodes.Antenne_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Antenne_1_3" position={[21.122, -290.6, -321.607]} rotation={[-2.221, 0.86, -2.619]}>
                          <mesh name="Antenne_1_3_World_ap_0" geometry={nodes.Antenne_1_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <mesh name="House_8_World_ap_0" geometry={nodes.House_8_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_1_8" position={[-335.773, -61.468, -782.496]} rotation={[-Math.PI, 0, Math.PI]}>
                        <group name="Tree_3_27_3" position={[2.188, -42.52, 62.991]} rotation={[-2.916, 0.721, -1.954]}>
                          <mesh name="Tree_3_27_3_World_ap_0" geometry={nodes.Tree_3_27_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bed_2_23" position={[17.277, 5.473, 30.081]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_2_23_World_ap_0" geometry={nodes.Bed_2_23_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_22_4" position={[-12.187, -38.125, -42.101]} rotation={[-2.336, -1.335, -1.012]}>
                          <mesh name="Tree_3_1_22_4_World_ap_0" geometry={nodes.Tree_3_1_22_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_19" position={[6.599, -42.52, -96.914]} rotation={[-0.24, 0.783, 1.509]}>
                          <mesh name="Tree_3_2_19_World_ap_0" geometry={nodes.Tree_3_2_19_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3_14" position={[2.188, -42.52, 6.802]} rotation={[-2.916, 0.721, -1.954]}>
                          <mesh name="Tree_3_3_14_World_ap_0" geometry={nodes.Tree_3_3_14_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                    </group>
                    <group name="Block_2" position={[207.984, -14.811, 1153.515]}>
                      <group name="Trees_7_2" position={[-501.202, -43.058, -27.125]}>
                        <group name="Firtree_47_4" position={[-10.255, -19.751, 313.834]}>
                          <mesh name="Firtree_47_4_World_ap_0" geometry={nodes.Firtree_47_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_3_5" position={[9.893, 10.262, 123.349]}>
                          <mesh name="Firtree_3_5_World_ap_0" geometry={nodes.Firtree_3_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_2_5" position={[4.725, 1.192, 34.764]}>
                          <mesh name="Firtree_2_5_World_ap_0" geometry={nodes.Firtree_2_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_1_4" position={[-10.575, -12.37, -49.55]}>
                          <mesh name="Firtree_1_4_World_ap_0" geometry={nodes.Firtree_1_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_4_4" position={[-3.35, -13.156, -155.018]}>
                          <mesh name="Firtree_4_4_World_ap_0" geometry={nodes.Firtree_4_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Cube_7_4" position={[-20.789, 15.395, 11.864]}>
                          <mesh name="Cube_7_4_World_ap_0" geometry={nodes.Cube_7_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_4_5" position={[-14.179, -0.86, -283.046]} rotation={[0, 0.815, 0]}>
                          <mesh name="Firtree_4_5_World_ap_0" geometry={nodes.Firtree_4_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_5_4" position={[4.725, 1.192, 191.543]} rotation={[0, 0.947, 0]}>
                          <mesh name="Firtree_5_4_World_ap_0" geometry={nodes.Firtree_5_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Behcnh_3" position={[666.552, -22.411, 102.138]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <group name="Bench_6_2" position={[-21.151, 1.739, 2.695]}>
                          <mesh name="Bench_6_2_World_ap_0" geometry={nodes.Bench_6_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_5_2" position={[78.584, -0.348, 2.695]}>
                          <mesh name="Bench_5_2_World_ap_0" geometry={nodes.Bench_5_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_1_5" position={[29.076, -0.348, -5.391]}>
                          <mesh name="Bench_1_5_World_ap_0" geometry={nodes.Bench_1_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_2_7" position={[-489.284, -503.463, 2.695]}>
                          <mesh name="Bench_2_7_World_ap_0" geometry={nodes.Bench_2_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_3_6" position={[-389.548, -503.463, 2.695]}>
                          <mesh name="Bench_3_6_World_ap_0" geometry={nodes.Bench_3_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_4_3" position={[-439.056, -503.463, -5.391]}>
                          <mesh name="Bench_4_3_World_ap_0" geometry={nodes.Bench_4_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_5_3" position={[-297.612, -503.463, 2.695]}>
                          <mesh name="Bench_5_3_World_ap_0" geometry={nodes.Bench_5_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_7_2" position={[-197.876, -503.463, 2.695]}>
                          <mesh name="Bench_7_2_World_ap_0" geometry={nodes.Bench_7_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_8_2" position={[-247.384, -503.463, -5.391]}>
                          <mesh name="Bench_8_2_World_ap_0" geometry={nodes.Bench_8_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_9_6" position={[-111.677, -503.463, 2.695]}>
                          <mesh name="Bench_9_6_World_ap_0" geometry={nodes.Bench_9_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_10_6" position={[-11.942, -503.463, 2.695]}>
                          <mesh name="Bench_10_6_World_ap_0" geometry={nodes.Bench_10_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bench_11_6" position={[-61.449, -503.463, -5.391]}>
                          <mesh name="Bench_11_6_World_ap_0" geometry={nodes.Bench_11_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Trash_1_2" position={[-285.114, -15.83, 162.047]} rotation={[Math.PI / 2, 0, -0.231]}>
                        <mesh name="Trash_1_2_World_ap_0" geometry={nodes.Trash_1_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Muff_1_3" position={[417, 20.053, 218.37]} rotation={[0, -Math.PI / 2, 0]}>
                        <mesh name="Muff_1_3_World_ap_0" geometry={nodes.Muff_1_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Muff_4" position={[302.676, 20.053, 218.37]} rotation={[0, -Math.PI / 2, 0]}>
                        <mesh name="Muff_4_World_ap_0" geometry={nodes.Muff_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_2" position={[-66.162, 12.501, 7.296]} />
                      <group name="Trees_1_6" position={[133.315, -43.058, -27.125]}>
                        <group name="Firtree_47_5" position={[-10.255, -19.751, 313.834]}>
                          <mesh name="Firtree_47_5_World_ap_0" geometry={nodes.Firtree_47_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_3_6" position={[9.893, 10.262, 123.349]}>
                          <mesh name="Firtree_3_6_World_ap_0" geometry={nodes.Firtree_3_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_2_6" position={[4.725, 1.192, 34.764]}>
                          <mesh name="Firtree_2_6_World_ap_0" geometry={nodes.Firtree_2_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_1_5" position={[-10.575, -12.37, -49.55]}>
                          <mesh name="Firtree_1_5_World_ap_0" geometry={nodes.Firtree_1_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_5_5" position={[-3.35, -13.156, -155.018]}>
                          <mesh name="Firtree_5_5_World_ap_0" geometry={nodes.Firtree_5_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Cube_7_5" position={[-20.789, 15.395, 11.864]}>
                          <mesh name="Cube_7_5_World_ap_0" geometry={nodes.Cube_7_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_4_6" position={[-14.179, -0.86, -283.046]} rotation={[0, 0.815, 0]}>
                          <mesh name="Firtree_4_6_World_ap_0" geometry={nodes.Firtree_4_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_5_6" position={[4.725, 1.192, 191.543]} rotation={[0, 0.947, 0]}>
                          <mesh name="Firtree_5_6_World_ap_0" geometry={nodes.Firtree_5_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_6_3" position={[-257.622, -19.652, -230.343]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_6_3_World_ap_0" geometry={nodes.Bench_6_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Behch" position={[-257.622, -19.652, -152.012]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Behch_World_ap_0" geometry={nodes.Behch_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="House_9" position={[-72.975, 9.191, -8.26]} rotation={[Math.PI, 0, -Math.PI]}>
                        <mesh name="House_9_World_ap_0" geometry={nodes.House_9_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_1_2" position={[2464.768, -14.811, -1987.235]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Trash_5" position={[210.329, -15.83, -41.101]} rotation={[Math.PI / 2, 0, 0.127]}>
                        <mesh name="Trash_5_World_ap_0" geometry={nodes.Trash_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Antenne_4" position={[-185.57, 469.806, 126.572]} rotation={[-2.198, -0.25, 0.11]}>
                        <mesh name="Antenne_4_World_ap_0" geometry={nodes.Antenne_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_6" position={[153.885, -19.652, 19.72]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_1_6_World_ap_0" geometry={nodes.Bench_1_6_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_3" position={[-50.406, 12.501, 7.296]}>
                        <group name="Floor_4_7" position={[-25.677, 7.453, 177.269]}>
                          <mesh name="Floor_4_7_World_ap_0" geometry={nodes.Floor_4_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Trees_8" position={[-60.589, -36.012, -239.49]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Firtree_47_6" position={[-9.322, -17.955, 195.551]}>
                          <mesh name="Firtree_47_6_World_ap_0" geometry={nodes.Firtree_47_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_3_7" position={[8.994, 9.329, 112.135]}>
                          <mesh name="Firtree_3_7_World_ap_0" geometry={nodes.Firtree_3_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_2_7" position={[4.295, 1.084, 31.603]}>
                          <mesh name="Firtree_2_7_World_ap_0" geometry={nodes.Firtree_2_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_1_6" position={[-9.614, -11.245, -45.045]}>
                          <mesh name="Firtree_1_6_World_ap_0" geometry={nodes.Firtree_1_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_6" position={[-3.046, -11.96, -133.056]}>
                          <mesh name="Firtree_6_World_ap_0" geometry={nodes.Firtree_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Cube_7_6" position={[-19.841, 13.996, -8.476]}>
                          <mesh name="Cube_7_6_World_ap_0" geometry={nodes.Cube_7_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_4_7" position={[8.208, -0.782, -227.081]} rotation={[0, 0.815, 0]}>
                          <mesh name="Firtree_4_7_World_ap_0" geometry={nodes.Firtree_4_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_7_3" position={[153.885, -19.652, -109.696]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_7_3_World_ap_0" geometry={nodes.Bench_7_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Antenne_1_4" position={[-78.582, 453.47, 128.852]} rotation={[-2.187, 0.281, -0.592]}>
                        <mesh name="Antenne_1_4_World_ap_0" geometry={nodes.Antenne_1_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Muff_1_4" position={[2996.399, -7.197, -1588.737]} rotation={[0, -Math.PI / 2, 0]}>
                      <mesh name="Muff_1_4_World_ap_0" geometry={nodes.Muff_1_4_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Muff_5" position={[2882.074, -7.197, -1588.737]} rotation={[0, -Math.PI / 2, 0]}>
                      <mesh name="Muff_5_World_ap_0" geometry={nodes.Muff_5_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="House_10" position={[2499.195, -62.772, -1681.238]} rotation={[Math.PI, 0, -Math.PI]}>
                      <mesh name="House_10_World_ap_0" geometry={nodes.House_10_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Block_1" position={[2641.897, -14.811, 1095.507]}>
                      <group name="Trash_6" position={[210.329, -15.83, -196.346]} rotation={[Math.PI / 2, 0, 0.127]}>
                        <mesh name="Trash_6_World_ap_0" geometry={nodes.Trash_6_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Antenne_5" position={[-185.57, 469.806, -28.674]} rotation={[-2.198, -0.25, 0.11]}>
                        <mesh name="Antenne_5_World_ap_0" geometry={nodes.Antenne_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_7" position={[153.885, -19.652, -135.525]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_1_7_World_ap_0" geometry={nodes.Bench_1_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="House_11" position={[-305.997, -47.962, -120.818]} rotation={[0, Math.PI / 2, 0]}>
                        <mesh name="House_11_World_ap_0" geometry={nodes.House_11_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_4" position={[-50.406, 12.501, 7.296]}>
                        <group name="Floor_4_8" position={[-55.609, 7.453, 0]}>
                          <mesh name="Floor_4_8_World_ap_0" geometry={nodes.Floor_4_8_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Trees_9" position={[-60.589, -36.012, 242.22]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Firtree_47_7" position={[-9.322, -17.955, 195.551]}>
                          <mesh name="Firtree_47_7_World_ap_0" geometry={nodes.Firtree_47_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_3_8" position={[8.994, 9.329, 112.135]}>
                          <mesh name="Firtree_3_8_World_ap_0" geometry={nodes.Firtree_3_8_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_2_8" position={[4.295, 1.084, 31.603]}>
                          <mesh name="Firtree_2_8_World_ap_0" geometry={nodes.Firtree_2_8_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_1_7" position={[-9.614, -11.245, -45.045]}>
                          <mesh name="Firtree_1_7_World_ap_0" geometry={nodes.Firtree_1_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_7" position={[-3.046, -11.96, -133.056]}>
                          <mesh name="Firtree_7_World_ap_0" geometry={nodes.Firtree_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Cube_7_7" position={[-6.637, 13.996, 13.232]}>
                          <mesh name="Cube_7_7_World_ap_0" geometry={nodes.Cube_7_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_4_8" position={[8.208, -0.782, -227.081]} rotation={[0, 0.815, 0]}>
                          <mesh name="Firtree_4_8_World_ap_0" geometry={nodes.Firtree_4_8_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_5_7" position={[-9.322, -17.955, 301.582]}>
                          <mesh name="Firtree_5_7_World_ap_0" geometry={nodes.Firtree_5_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_8_3" position={[153.885, -19.652, -109.696]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_8_3_World_ap_0" geometry={nodes.Bench_8_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Antenne_1_5" position={[-78.582, 453.47, 128.852]} rotation={[-2.187, 0.281, -0.592]}>
                        <mesh name="Antenne_1_5_World_ap_0" geometry={nodes.Antenne_1_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_7_2" position={[2472.227, 20.052, 323.527]} rotation={[Math.PI, 0, -Math.PI]}>
                      <group name="Tree_4_3" position={[-402.354, -75.266, 18.094]} rotation={[-Math.PI, 0, Math.PI]}>
                        <group name="Tree_3_28_7" position={[-5.005, -42.52, 287.892]} rotation={[-2.956, -0.423, -1.727]}>
                          <mesh name="Tree_3_28_7_World_ap_0" geometry={nodes.Tree_3_28_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bed_2_24" position={[30.803, 5.473, -161.011]} rotation={[-Math.PI, 0, -Math.PI]}>
                          <mesh name="Bed_2_24_World_ap_0" geometry={nodes.Bed_2_24_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_23" position={[-10.428, -34.651, -107.879]} rotation={[-1.004, 1.37, 2.333]}>
                          <mesh name="Tree_3_1_23_World_ap_0" geometry={nodes.Tree_3_1_23_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_20" position={[-0.959, -14.651, 192.955]} rotation={[-2.97, 0.162, -1.832]}>
                          <mesh name="Tree_3_2_20_World_ap_0" geometry={nodes.Tree_3_2_20_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_14" position={[-17.105, -12.844, 113.236]} rotation={[-2.903, 0.777, -1.972]}>
                          <mesh name="Tree_3_4_14_World_ap_0" geometry={nodes.Tree_3_4_14_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5_12" position={[-10.428, -34.651, -33.402]} rotation={[-2.796, 1.051, -2.107]}>
                          <mesh name="Tree_3_5_12_World_ap_0" geometry={nodes.Tree_3_5_12_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_6_12" position={[-3.274, -42.52, 41.682]} rotation={[-2.565, -1.257, -1.25]}>
                          <mesh name="Tree_3_6_12_World_ap_0" geometry={nodes.Tree_3_6_12_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_7_13_2" position={[-10.428, -34.651, -194.05]} rotation={[-1.004, 1.37, 2.333]}>
                          <mesh name="Tree_3_7_13_2_World_ap_0" geometry={nodes.Tree_3_7_13_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_8_9" position={[24.624, -5.918, -72.589]} rotation={[-2.212, -1.359, -0.884]}>
                          <mesh name="Tree_3_8_9_World_ap_0" geometry={nodes.Tree_3_8_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Skyscraper_2" position={[-81.327, -219.543, 0.143]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Skyscraper_2_World_ap_0" geometry={nodes.Skyscraper_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_9" position={[1.901, -22.362, -13.853]}>
                        <group name="Floor_4_9" position={[0, -2.843, 15.919]}>
                          <mesh name="Floor_4_9_World_ap_0" geometry={nodes.Floor_4_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_17" position={[42.514, -41.068, 275.767]} rotation={[0, 1.571, 0]}>
                        <group name="Bed_16" position={[-12.777, -24.018, -42.033]} rotation={[-Math.PI, 0, -Math.PI]}>
                          <mesh name="Bed_16_World_ap_0" geometry={nodes.Bed_16_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_3_15" position={[-16.966, 5.798, -183.504]} rotation={[-1.382, -1.399, -0.042]}>
                          <mesh name="Bushes_3_15_World_ap_0" geometry={nodes.Bushes_3_15_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_11" position={[45.101, -41.068, -348.86]} rotation={[0, 1.571, 0]}>
                        <group name="Bed_17" position={[-12.777, -24.018, -42.033]} rotation={[-Math.PI, 0, -Math.PI]}>
                          <mesh name="Bed_17_World_ap_0" geometry={nodes.Bed_17_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_3_16" position={[-16.966, 5.798, -183.504]} rotation={[-1.382, -1.399, -0.042]}>
                          <mesh name="Bushes_3_16_World_ap_0" geometry={nodes.Bushes_3_16_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                    </group>
                    <group name="Block_7_1" position={[1218.775, 20.052, 194.027]}>
                      <group name="Tree_4_4" position={[-402.354, -75.266, 18.094]} rotation={[-Math.PI, 0, Math.PI]}>
                        <group name="Tree_3_29" position={[-5.005, -42.52, 287.892]} rotation={[-2.956, -0.423, -1.727]}>
                          <mesh name="Tree_3_29_World_ap_0" geometry={nodes.Tree_3_29_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bed_2_25" position={[30.803, 5.473, -161.011]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_2_25_World_ap_0" geometry={nodes.Bed_2_25_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_24" position={[-10.428, -34.651, -107.879]} rotation={[-1.004, 1.37, 2.333]}>
                          <mesh name="Tree_3_1_24_World_ap_0" geometry={nodes.Tree_3_1_24_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_21" position={[-0.959, -14.651, 192.955]} rotation={[-2.97, 0.162, -1.832]}>
                          <mesh name="Tree_3_2_21_World_ap_0" geometry={nodes.Tree_3_2_21_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_15" position={[-17.105, -12.844, 113.236]} rotation={[-2.903, 0.777, -1.972]}>
                          <mesh name="Tree_3_4_15_World_ap_0" geometry={nodes.Tree_3_4_15_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5_13" position={[-10.428, -34.651, -33.402]} rotation={[-2.796, 1.051, -2.107]}>
                          <mesh name="Tree_3_5_13_World_ap_0" geometry={nodes.Tree_3_5_13_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_6_13" position={[-3.274, -42.52, 41.682]} rotation={[-2.565, -1.257, -1.25]}>
                          <mesh name="Tree_3_6_13_World_ap_0" geometry={nodes.Tree_3_6_13_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_7_14_2" position={[-10.428, -34.651, -194.05]} rotation={[-1.004, 1.37, 2.333]}>
                          <mesh name="Tree_3_7_14_2_World_ap_0" geometry={nodes.Tree_3_7_14_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_8_10" position={[24.624, -5.918, -72.589]} rotation={[-2.212, -1.359, -0.884]}>
                          <mesh name="Tree_3_8_10_World_ap_0" geometry={nodes.Tree_3_8_10_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Skyscraper_3" position={[-81.327, -261.207, 0.143]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Skyscraper_3_World_ap_0" geometry={nodes.Skyscraper_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_10" position={[1.901, -22.362, -13.853]}>
                        <group name="Floor_4_10" position={[0, -2.843, 15.919]}>
                          <mesh name="Floor_4_10_World_ap_0" geometry={nodes.Floor_4_10_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_18" position={[42.514, -41.068, 275.767]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bed_18" position={[-12.777, -24.018, -42.033]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_18_World_ap_0" geometry={nodes.Bed_18_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_3_17" position={[-16.966, 5.798, -183.504]} rotation={[-1.382, -1.399, -0.042]}>
                          <mesh name="Bushes_3_17_World_ap_0" geometry={nodes.Bushes_3_17_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_12" position={[45.101, -41.068, -348.86]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bed_19" position={[-12.777, -24.018, -42.033]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_19_World_ap_0" geometry={nodes.Bed_19_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_3_18" position={[-16.966, 5.798, -183.504]} rotation={[-1.382, -1.399, -0.042]}>
                          <mesh name="Bushes_3_18_World_ap_0" geometry={nodes.Bushes_3_18_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                    </group>
                    <group name="Block_1_1" position={[3578.591, -14.811, -593.679]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Trash_7" position={[210.329, -15.83, -41.101]} rotation={[Math.PI / 2, 0, 0.127]}>
                        <mesh name="Trash_7_World_ap_0" geometry={nodes.Trash_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_8" position={[153.885, -19.652, 19.72]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_1_8_World_ap_0" geometry={nodes.Bench_1_8_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="House_12" position={[-305.997, -47.962, 34.427]} rotation={[0, Math.PI / 2, 0]}>
                        <mesh name="House_12_World_ap_0" geometry={nodes.House_12_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_5" position={[-50.406, 12.501, 7.296]}>
                        <group name="Floor_4_11" position={[-55.609, 7.453, 0]}>
                          <mesh name="Floor_4_11_World_ap_0" geometry={nodes.Floor_4_11_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Trees_10" position={[-60.589, -36.012, -239.49]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Firtree_47_8" position={[-9.322, -17.955, 195.551]}>
                          <mesh name="Firtree_47_8_World_ap_0" geometry={nodes.Firtree_47_8_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_3_9" position={[8.994, 9.329, 112.135]}>
                          <mesh name="Firtree_3_9_World_ap_0" geometry={nodes.Firtree_3_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_2_9" position={[4.295, 1.084, 31.603]}>
                          <mesh name="Firtree_2_9_World_ap_0" geometry={nodes.Firtree_2_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_1_8" position={[-9.614, -11.245, -34.793]}>
                          <mesh name="Firtree_1_8_World_ap_0" geometry={nodes.Firtree_1_8_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_8" position={[-3.046, -11.96, -133.056]}>
                          <mesh name="Firtree_8_World_ap_0" geometry={nodes.Firtree_8_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Cube_7_8" position={[-19.841, 13.996, -8.476]}>
                          <mesh name="Cube_7_8_World_ap_0" geometry={nodes.Cube_7_8_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_4_9" position={[8.208, -0.782, -227.081]} rotation={[0, 0.815, 0]}>
                          <mesh name="Firtree_4_9_World_ap_0" geometry={nodes.Firtree_4_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_9_7" position={[153.885, -19.652, -109.696]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_9_7_World_ap_0" geometry={nodes.Bench_9_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Antenne_1_6" position={[-182.912, 453.47, 166.908]} rotation={[-2.187, 0.281, -0.592]}>
                        <mesh name="Antenne_1_6_World_ap_0" geometry={nodes.Antenne_1_6_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_5_1" position={[2514.818, 20.052, -643.831]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Tree_4_5" position={[-91.638, -75.266, -343.026]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Tree_3_30_6" position={[17.997, -42.52, 295.974]} rotation={[-2.956, -0.423, -1.727]}>
                          <mesh name="Tree_3_30_6_World_ap_0" geometry={nodes.Tree_3_30_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bed_2_26" position={[30.803, 5.473, -161.011]} rotation={[-Math.PI, 0, -Math.PI]}>
                          <mesh name="Bed_2_26_World_ap_0" geometry={nodes.Bed_2_26_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_25" position={[-10.428, -34.651, -107.879]} rotation={[-1.004, 1.37, 2.333]}>
                          <mesh name="Tree_3_1_25_World_ap_0" geometry={nodes.Tree_3_1_25_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_22" position={[-0.959, -14.651, 192.955]} rotation={[-2.97, 0.162, -1.832]}>
                          <mesh name="Tree_3_2_22_World_ap_0" geometry={nodes.Tree_3_2_22_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_16" position={[-17.105, -12.844, 113.236]} rotation={[-2.903, 0.777, -1.972]}>
                          <mesh name="Tree_3_4_16_World_ap_0" geometry={nodes.Tree_3_4_16_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5_14" position={[-10.428, -34.651, -33.402]} rotation={[-2.796, 1.051, -2.107]}>
                          <mesh name="Tree_3_5_14_World_ap_0" geometry={nodes.Tree_3_5_14_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_6_14" position={[-3.274, -42.52, 41.682]} rotation={[-2.565, -1.257, -1.25]}>
                          <mesh name="Tree_3_6_14_World_ap_0" geometry={nodes.Tree_3_6_14_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_7_15_4" position={[-10.428, -34.651, -194.05]} rotation={[-1.004, 1.37, 2.333]}>
                          <mesh name="Tree_3_7_15_4_World_ap_0" geometry={nodes.Tree_3_7_15_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_8_11" position={[24.624, -5.918, -72.589]} rotation={[-2.212, -1.359, -0.884]}>
                          <mesh name="Tree_3_8_11_World_ap_0" geometry={nodes.Tree_3_8_11_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Trash_8" position={[219.447, -61.148, -277.394]} rotation={[Math.PI / 2, 0, 2.986]}>
                        <mesh name="Trash_8_World_ap_0" geometry={nodes.Trash_8_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_2_8" position={[-215.34, -49.069, -157.536]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_2_8_World_ap_0" geometry={nodes.Bench_2_8_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="House_13" position={[-8.105, 321.723, -4.033]} rotation={[0, Math.PI / 2, 0]}>
                        <mesh name="House_13_World_ap_0" geometry={nodes.House_13_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_11" position={[1.901, -22.362, -5.802]}>
                        <group name="Floor_4_12" position={[-25.528, -14.143, 0]}>
                          <mesh name="Floor_4_12_World_ap_0" geometry={nodes.Floor_4_12_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_19" position={[-403.542, -38.381, 264.223]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bed_20" position={[-11.815, -26.555, 24.874]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_20_World_ap_0" geometry={nodes.Bed_20_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_3_19" position={[-8.722, -17.25, -31.713]} rotation={[-0.169, 0.032, 1.343]}>
                          <mesh name="Bushes_3_19_World_ap_0" geometry={nodes.Bushes_3_19_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_13" position={[-403.542, -38.381, -310.68]} rotation={[0, Math.PI / 2, 0]} />
                      <group name="Trash_1_3" position={[159.842, -60.267, -264.742]} rotation={[Math.PI / 2, 0, 0.038]}>
                        <mesh name="Trash_1_3_World_ap_0" geometry={nodes.Trash_1_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Tree_2_5" position={[-91.638, -75.266, 357.671]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Tree_3_31" position={[-5.005, -42.52, 287.892]} rotation={[-2.956, -0.423, -1.727]}>
                          <mesh name="Tree_3_31_World_ap_0" geometry={nodes.Tree_3_31_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bed_2_27" position={[30.803, 5.473, -161.011]} rotation={[-Math.PI, 0, -Math.PI]}>
                          <mesh name="Bed_2_27_World_ap_0" geometry={nodes.Bed_2_27_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_26_4" position={[-10.428, -34.651, -107.879]} rotation={[-1.004, 1.37, 2.333]}>
                          <mesh name="Tree_3_1_26_4_World_ap_0" geometry={nodes.Tree_3_1_26_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_23" position={[-0.959, -14.651, 192.955]} rotation={[-2.97, 0.162, -1.832]}>
                          <mesh name="Tree_3_2_23_World_ap_0" geometry={nodes.Tree_3_2_23_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_17" position={[-17.105, -12.844, 113.236]} rotation={[-2.903, 0.777, -1.972]}>
                          <mesh name="Tree_3_4_17_World_ap_0" geometry={nodes.Tree_3_4_17_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5_15" position={[-10.428, -34.651, -33.402]} rotation={[-2.796, 1.051, -2.107]}>
                          <mesh name="Tree_3_5_15_World_ap_0" geometry={nodes.Tree_3_5_15_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_6_15" position={[-3.274, -42.52, 41.682]} rotation={[-2.565, -1.257, -1.25]}>
                          <mesh name="Tree_3_6_15_World_ap_0" geometry={nodes.Tree_3_6_15_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_7_16_3" position={[-10.428, -34.651, -194.05]} rotation={[-1.004, 1.37, 2.333]}>
                          <mesh name="Tree_3_7_16_3_World_ap_0" geometry={nodes.Tree_3_7_16_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_8_12" position={[24.624, -5.918, -72.589]} rotation={[-2.212, -1.359, -0.884]}>
                          <mesh name="Tree_3_8_12_World_ap_0" geometry={nodes.Tree_3_8_12_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                    </group>
                    <group name="Block_1_3" position={[4702.606, -14.811, -1834.072]}>
                      <group name="Trash_9" position={[162.445, -15.83, -164.059]} rotation={[Math.PI / 2, 0, 0.127]}>
                        <mesh name="Trash_9_World_ap_0" geometry={nodes.Trash_9_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Antenne_6" position={[-233.454, 469.806, 3.613]} rotation={[-2.198, -0.25, 0.11]}>
                        <mesh name="Antenne_6_World_ap_0" geometry={nodes.Antenne_6_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_9" position={[106.002, -19.652, -103.239]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_1_9_World_ap_0" geometry={nodes.Bench_1_9_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="House_14" position={[-353.881, -47.962, -88.531]} rotation={[0, Math.PI / 2, 0]}>
                        <mesh name="House_14_World_ap_0" geometry={nodes.House_14_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_6" position={[-50.406, 12.501, 7.296]}>
                        <group name="Floor_4_13" position={[-10.462, 7.453, -0.421]}>
                          <mesh name="Floor_4_13_World_ap_0" geometry={nodes.Floor_4_13_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Trees_11" position={[-60.589, -36.012, 235.596]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Firtree_47_9" position={[-9.322, -17.955, 195.551]}>
                          <mesh name="Firtree_47_9_World_ap_0" geometry={nodes.Firtree_47_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_3_10" position={[8.994, 9.329, 112.135]}>
                          <mesh name="Firtree_3_10_World_ap_0" geometry={nodes.Firtree_3_10_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_2_10" position={[4.295, 1.084, 31.603]}>
                          <mesh name="Firtree_2_10_World_ap_0" geometry={nodes.Firtree_2_10_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_1_9" position={[-9.614, -11.245, -45.045]}>
                          <mesh name="Firtree_1_9_World_ap_0" geometry={nodes.Firtree_1_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_9" position={[-3.046, -11.96, -133.056]}>
                          <mesh name="Firtree_9_World_ap_0" geometry={nodes.Firtree_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Cube_7_9" position={[-19.841, 13.996, -8.476]}>
                          <mesh name="Cube_7_9_World_ap_0" geometry={nodes.Cube_7_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Firtree_4_10" position={[8.208, -0.782, -227.081]} rotation={[0, 0.815, 0]}>
                          <mesh name="Firtree_4_10_World_ap_0" geometry={nodes.Firtree_4_10_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_10_7" position={[153.885, -19.652, -109.696]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_10_7_World_ap_0" geometry={nodes.Bench_10_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Antenne_1_7" position={[-78.582, 453.47, 128.852]} rotation={[-2.187, 0.281, -0.592]}>
                        <mesh name="Antenne_1_7_World_ap_0" geometry={nodes.Antenne_1_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_8_1_2" position={[-468.369, 10.276, -585.6]} rotation={[Math.PI, 0, -Math.PI]}>
                      <group name="Bench_1_10" position={[110.334, -48.47, -0.104]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_1_10_World_ap_0" geometry={nodes.Bench_1_10_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_11_7" position={[84.959, -48.47, -0.769]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_11_7_World_ap_0" geometry={nodes.Bench_11_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Muff_2_5" position={[233.401, -12.463, -214.004]}>
                        <mesh name="Muff_2_5_World_ap_0" geometry={nodes.Muff_2_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="House_15" position={[-84.486, 146.723, -139.616]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="House_15_World_ap_0" geometry={nodes.House_15_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_12" position={[1.901, -22.362, -74.237]}>
                        <group name="Floor_4_14" position={[-17.945, -0.286, -58.886]}>
                          <mesh name="Floor_4_14_World_ap_0" geometry={nodes.Floor_4_14_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Tree_7" position={[262.629, -78.544, 128.842]}>
                        <group name="Tree_3_32_2" position={[46.131, -0.041, 36.661]} rotation={[-2.97, 0.162, -1.832]}>
                          <mesh name="Tree_3_32_2_World_ap_0" geometry={nodes.Tree_3_32_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bed_2_28" position={[58.904, 20.083, 4.528]} rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh name="Bed_2_28_World_ap_0" geometry={nodes.Bed_2_28_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_27" position={[36.662, -20.041, -41.189]} rotation={[-1.004, 1.37, 2.333]}>
                          <mesh name="Tree_3_1_27_World_ap_0" geometry={nodes.Tree_3_1_27_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_14" position={[42.514, -41.068, -333.806]} rotation={[0, 1.571, 0]}>
                        <group name="Bushes_20" position={[9.376, -4.549, -93.478]}>
                          <group name="Bed_21" position={[55.847, -12.844, 51.445]} rotation={[-Math.PI, 0, -Math.PI]}>
                            <mesh name="Bed_21_World_ap_0" geometry={nodes.Bed_21_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Bushes_3_20" position={[58.922, 12.844, -51.445]} rotation={[-1.382, -1.399, -0.042]}>
                            <mesh name="Bushes_3_20_World_ap_0" geometry={nodes.Bushes_3_20_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Bed_1_5" position={[-419.522, -17.393, -113.207]} rotation={[0, -1.571, 0]}>
                          <mesh name="Bed_1_5_World_ap_0" geometry={nodes.Bed_1_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bed_2_29" position={[-499.169, -17.393, -165.976]} rotation={[-Math.PI, 0, -Math.PI]}>
                          <mesh name="Bed_2_29_World_ap_0" geometry={nodes.Bed_2_29_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Bushes_21" position={[-478.634, -2.008, -113.797]} rotation={[-1.382, -1.399, -0.042]}>
                          <mesh name="Bushes_21_World_ap_0" geometry={nodes.Bushes_21_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_2_9" position={[-208.487, -40.94, 43.002]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_2_9_World_ap_0" geometry={nodes.Bench_2_9_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_3_7" position={[-208.487, -40.94, 103.959]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_3_7_World_ap_0" geometry={nodes.Bench_3_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                  </group>
                  <group name="Block_Suburbs_2" position={[889.205, 51.195, 2489.32]} rotation={[0, Math.PI / 2, 0]}>
                    <group name="Block_10" position={[-261.719, 5.814, 86.838]} rotation={[Math.PI, 0, -Math.PI]}>
                      <group name="Hosuse" position={[-78.292, -78.692, 11.438]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Hosuse_World_ap_0" geometry={nodes.Hosuse_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_13" position={[1.901, -22.362, -74.237]} />
                      <group name="Bushes_22" position={[214.366, -41.068, 103.379]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Bed_2_30" position={[-175.31, -26.444, 44.851]} rotation={[0, Math.PI / 2, 0]}>
                          <mesh name="Bed_2_30_World_ap_0" geometry={nodes.Bed_2_30_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_15" position={[-217.925, -41.068, 146.021]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bush_1_6" position={[392.869, -31.114, 78.018]} rotation={[-2.97, 0.165, -1.832]}>
                          <group name="bUSH_5" position={[-33.501, 119.687, 29.221]}>
                            <mesh name="bUSH_5_World_ap_0" geometry={nodes.bUSH_5_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_7" position={[-3.801, 146.472, -176.274]}>
                            <mesh name="bUSH_3_7_World_ap_0" geometry={nodes.bUSH_3_7_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_2" position={[-46.114, 101.988, 125.039]} rotation={[0.277, 0.072, 0.039]}>
                            <mesh name="bUSH_4_2_World_ap_0" geometry={nodes.bUSH_4_2_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_6" position={[73.464, -397.04, 127.464]} rotation={[1.871, 0.441, -0.138]}>
                            <mesh name="bUSH_6_World_ap_0" geometry={nodes.bUSH_6_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_1_6" position={[-47.758, 56.531, 205.513]} rotation={[1.871, 0.441, -0.138]}>
                            <mesh name="bUSH_1_6_World_ap_0" geometry={nodes.bUSH_1_6_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Bush" position={[148.332, -31.114, 428.707]} rotation={[-0.798, 1.334, 2.122]}>
                          <group name="bUSH_1_7" position={[-60.81, 88.526, 195.025]}>
                            <mesh name="bUSH_1_7_World_ap_0" geometry={nodes.bUSH_1_7_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_6_2" position={[-25.117, 118.737, 0.552]} rotation={[0.05, 0.012, 0.009]}>
                            <mesh name="bUSH_6_2_World_ap_0" geometry={nodes.bUSH_6_2_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_2_2" position={[-68.863, 72.342, 272.007]}>
                            <mesh name="bUSH_2_2_World_ap_0" geometry={nodes.bUSH_2_2_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_8" position={[-10.585, 140.242, -129.184]}>
                            <mesh name="bUSH_3_8_World_ap_0" geometry={nodes.bUSH_3_8_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_3" position={[-39.674, 105.014, 102.073]} rotation={[0.05, 0.012, 0.009]}>
                            <mesh name="bUSH_4_3_World_ap_0" geometry={nodes.bUSH_4_3_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Tree_3_33" position={[-51.075, -41.268, -15.919]} rotation={[-0.805, 1.335, 2.129]}>
                          <group name="Tree_3_7_17_4" position={[32.176, -95.347, -4.849]} rotation={[0.025, -0.106, -0.017]}>
                            <mesh name="Tree_3_7_17_4_World_ap_0" geometry={nodes.Tree_3_7_17_4_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_6_16" position={[-214.491, 412.771, 664.851]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_6_16_World_ap_0" geometry={nodes.Tree_3_6_16_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_9_3" position={[-96.536, 29.175, 536.239]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_9_3_World_ap_0" geometry={nodes.Tree_3_9_3_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_10_3_5" position={[-115.676, 76.089, 581.944]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_10_3_5_World_ap_0" geometry={nodes.Tree_3_10_3_5_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_11_11_5" position={[-122.34, 122.894, 556.678]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_11_11_5_World_ap_0" geometry={nodes.Tree_3_11_11_5_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_12_3" position={[-23.022, -171.076, 404.639]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_12_3_World_ap_0" geometry={nodes.Tree_3_12_3_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_13_2" position={[-76.309, -82.173, 571.416]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_13_2_World_ap_0" geometry={nodes.Tree_3_13_2_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                      </group>
                      <group name="Garden_2_2" position={[-147.715, -46.994, -195.261]}>
                        <group name="Garden_3_2" position={[-225.432, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_2_World_ap_0" geometry={nodes.Garden_3_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_2" position={[-179.278, 0, 418.979]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_2_World_ap_0" geometry={nodes.Garden_1_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_3" position={[-175.052, 0, -215.348]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_3_World_ap_0" geometry={nodes.Garden_2_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_3" position={[527.086, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_3_World_ap_0" geometry={nodes.Garden_3_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_3_8" position={[-201.68, -48.053, -195.225]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_3_8_World_ap_0" geometry={nodes.Bench_3_8_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_12" position={[178.534, -47.056, 21.165]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_12_World_ap_0" geometry={nodes.Bench_12_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_11" position={[-45.422, -39.575, -82.374]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_1_11_World_ap_0" geometry={nodes.Bench_1_11_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_2_10" position={[-196.994, -48.053, -245.611]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_2_10_World_ap_0" geometry={nodes.Bench_2_10_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_4_4" position={[-201.68, -48.053, -292.553]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_4_4_World_ap_0" geometry={nodes.Bench_4_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_9_2" position={[568.149, -4.586, 1319.593]}>
                      <group name="Hosuse_2" position={[35.154, -70.746, 32.59]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Hosuse_2_World_ap_0" geometry={nodes.Hosuse_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Sand" position={[-272.394, -59.999, 12.82]} rotation={[-Math.PI, 0, Math.PI]}>
                        <mesh name="Sand_World_ap_0" geometry={nodes.Sand_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_14" position={[1.901, -22.362, -74.237]} />
                      <group name="Bushes_23" position={[214.366, -41.068, 103.379]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Bed_2_31" position={[-197.057, -15.674, 109.234]} rotation={[0, Math.PI / 2, 0]}>
                          <mesh name="Bed_2_31_World_ap_0" geometry={nodes.Bed_2_31_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_16" position={[-200.293, -41.068, 98.764]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bush_1_7" position={[357.153, -28.285, 70.925]} rotation={[-2.97, 0.165, -1.832]}>
                          <group name="bUSH_7" position={[46.117, -114.564, -108.061]} rotation={[-3.022, 0.319, -0.485]}>
                            <mesh name="bUSH_7_World_ap_0" geometry={nodes.bUSH_7_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_7_2" position={[-24.85, 87.834, 22.956]}>
                            <mesh name="bUSH_7_2_World_ap_0" geometry={nodes.bUSH_7_2_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_9" position={[-1.661, 87.344, -108.569]}>
                            <mesh name="bUSH_3_9_World_ap_0" geometry={nodes.bUSH_3_9_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_4" position={[-36.141, 71.087, 109.95]} rotation={[0.277, 0.072, 0.039]}>
                            <mesh name="bUSH_4_4_World_ap_0" geometry={nodes.bUSH_4_4_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_6_3" position={[-13.457, -129.048, 251.107]} rotation={[1.54, 0.399, -0.054]}>
                            <mesh name="bUSH_6_3_World_ap_0" geometry={nodes.bUSH_6_3_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_1_8" position={[-46.696, 33.209, 221.305]} rotation={[1.54, 0.399, -0.054]}>
                            <mesh name="bUSH_1_8_World_ap_0" geometry={nodes.bUSH_1_8_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Bush_2" position={[134.848, -28.285, 389.733]} rotation={[-0.798, 1.334, 2.122]}>
                          <group name="bUSH_1_9" position={[-46.012, -15.705, 283.506]}>
                            <mesh name="bUSH_1_9_World_ap_0" geometry={nodes.bUSH_1_9_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_8" position={[-18.908, 65.601, 19.13]}>
                            <mesh name="bUSH_8_World_ap_0" geometry={nodes.bUSH_8_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_10" position={[5.903, 59.042, -113.439]}>
                            <mesh name="bUSH_3_10_World_ap_0" geometry={nodes.bUSH_3_10_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_5" position={[-15.019, 26.852, 49.325]}>
                            <mesh name="bUSH_4_5_World_ap_0" geometry={nodes.bUSH_4_5_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Tree_3_34" position={[-46.431, -37.517, -14.472]} rotation={[-0.805, 1.335, 2.129]}>
                          <group name="Tree_3_35" position={[43.68, -162.805, -28.976]}>
                            <mesh name="Tree_3_35_World_ap_0" geometry={nodes.Tree_3_35_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_1_28" position={[27.285, -85.495, -39.997]} rotation={[2.058, 0.453, -0.19]}>
                            <mesh name="Tree_3_1_28_World_ap_0" geometry={nodes.Tree_3_1_28_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_2_24" position={[24.209, -204.937, 257.815]} rotation={[2.058, 0.453, -0.19]}>
                            <mesh name="Tree_3_2_24_World_ap_0" geometry={nodes.Tree_3_2_24_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_3_15" position={[-142.393, 536.971, 86.022]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_3_15_World_ap_0" geometry={nodes.Tree_3_3_15_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_4_18" position={[-168.094, 504.935, 246.745]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_4_18_World_ap_0" geometry={nodes.Tree_3_4_18_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_5_16" position={[-139.242, 460.306, 171.663]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_5_16_World_ap_0" geometry={nodes.Tree_3_5_16_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_7_18_5" position={[-17.84, -263.58, 457.896]} rotation={[0.019, -0.081, -0.013]}>
                            <mesh name="Tree_3_7_18_5_World_ap_0" geometry={nodes.Tree_3_7_18_5_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_8_13" position={[-180.676, 482.431, 377.956]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_8_13_World_ap_0" geometry={nodes.Tree_3_8_13_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_6_17" position={[-202.439, 455.556, 538.329]} rotation={[1.099, 0.306, 0.027]}>
                            <mesh name="Tree_3_6_17_World_ap_0" geometry={nodes.Tree_3_6_17_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_9_4" position={[-92.854, 31.711, 509.515]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_9_4_World_ap_0" geometry={nodes.Tree_3_9_4_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_10_4_11" position={[-103.71, 71.493, 517.635]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_10_4_11_World_ap_0" geometry={nodes.Tree_3_10_4_11_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_12_4" position={[0.405, -246.818, 354.312]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_12_4_World_ap_0" geometry={nodes.Tree_3_12_4_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_14_7" position={[-65.417, -73.198, 494.888]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_14_7_World_ap_0" geometry={nodes.Tree_3_14_7_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_15_2" position={[0.954, -258.641, 392.219]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_15_2_World_ap_0" geometry={nodes.Tree_3_15_2_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                      </group>
                      <group name="Jump_desk" position={[-277.434, -29.688, -104.164]} rotation={[Math.PI / 2, 0, Math.PI]}>
                        <mesh name="Jump_desk_World_ap_0" geometry={nodes.Jump_desk_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Garden_4" position={[-191.805, -46.994, -214.715]}>
                        <group name="Garden_5" position={[578.355, 0, -141.136]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_5_World_ap_0" geometry={nodes.Garden_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_5_2" position={[-230.362, 0, -141.137]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_5_2_World_ap_0" geometry={nodes.Garden_5_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_3" position={[-173.997, 0, 456.683]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_3_World_ap_0" geometry={nodes.Garden_1_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_4" position={[-173.997, 0, -174.41]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_4_World_ap_0" geometry={nodes.Garden_2_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_3_9" position={[229.937, -49.672, -173.026]} rotation={[Math.PI / 2, 0, Math.PI]}>
                        <mesh name="Bench_3_9_World_ap_0" geometry={nodes.Bench_3_9_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_13" position={[98.944, -36.309, -12.976]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_13_World_ap_0" geometry={nodes.Bench_13_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_12" position={[-208.426, -47.787, -257.165]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_1_12_World_ap_0" geometry={nodes.Bench_1_12_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_2_11" position={[-208.426, -57.775, -304.781]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_2_11_World_ap_0" geometry={nodes.Bench_2_11_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_4_5" position={[-208.426, -57.775, -209.305]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_4_5_World_ap_0" geometry={nodes.Bench_4_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_9" position={[-244.963, -4.586, -588.749]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Hosuse_3" position={[35.154, -70.746, 32.59]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Hosuse_3_World_ap_0" geometry={nodes.Hosuse_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Sand_2" position={[-272.394, -59.999, 12.82]} rotation={[-Math.PI, 0, -Math.PI]}>
                        <mesh name="Sand_2_World_ap_0" geometry={nodes.Sand_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_15" position={[1.901, -22.362, -74.237]} />
                      <group name="Bushes_24" position={[214.366, -41.068, 103.379]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Bed_2_32" position={[-197.057, -15.674, 109.234]} rotation={[0, Math.PI / 2, 0]}>
                          <mesh name="Bed_2_32_World_ap_0" geometry={nodes.Bed_2_32_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_17" position={[-200.293, -41.068, 98.764]} rotation={[0, 1.571, 0]}>
                        <group name="Bush_1_8" position={[357.153, -28.285, 70.925]} rotation={[-2.97, 0.165, -1.832]}>
                          <group name="bUSH_7_3" position={[46.117, -114.564, -108.061]} rotation={[-3.022, 0.319, -0.485]}>
                            <mesh name="bUSH_7_3_World_ap_0" geometry={nodes.bUSH_7_3_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_9" position={[-24.85, 87.834, 22.956]}>
                            <mesh name="bUSH_9_World_ap_0" geometry={nodes.bUSH_9_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_11" position={[-1.661, 87.344, -108.569]}>
                            <mesh name="bUSH_3_11_World_ap_0" geometry={nodes.bUSH_3_11_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_6" position={[-36.141, 71.087, 109.95]} rotation={[0.277, 0.072, 0.039]}>
                            <mesh name="bUSH_4_6_World_ap_0" geometry={nodes.bUSH_4_6_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_6_4" position={[-13.457, -129.048, 251.107]} rotation={[1.54, 0.399, -0.054]}>
                            <mesh name="bUSH_6_4_World_ap_0" geometry={nodes.bUSH_6_4_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_1_10" position={[-46.696, 33.209, 221.305]} rotation={[1.54, 0.399, -0.054]}>
                            <mesh name="bUSH_1_10_World_ap_0" geometry={nodes.bUSH_1_10_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Bush_3" position={[134.848, -28.285, 389.733]} rotation={[-0.798, 1.334, 2.122]}>
                          <group name="bUSH_1_11" position={[-46.012, -15.705, 283.506]}>
                            <mesh name="bUSH_1_11_World_ap_0" geometry={nodes.bUSH_1_11_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_10" position={[-18.908, 65.601, 19.13]}>
                            <mesh name="bUSH_10_World_ap_0" geometry={nodes.bUSH_10_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_2_3" position={[-49.615, -29.413, 322.572]}>
                            <mesh name="bUSH_2_3_World_ap_0" geometry={nodes.bUSH_2_3_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_12" position={[5.903, 59.042, -113.439]}>
                            <mesh name="bUSH_3_12_World_ap_0" geometry={nodes.bUSH_3_12_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_7" position={[-15.019, 26.852, 49.325]}>
                            <mesh name="bUSH_4_7_World_ap_0" geometry={nodes.bUSH_4_7_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Tree_3_36_2" position={[-46.431, -37.517, -14.472]} rotation={[-0.805, 1.335, 2.129]}>
                          <group name="Tree_3_37" position={[43.68, -162.805, -28.976]}>
                            <mesh name="Tree_3_37_World_ap_0" geometry={nodes.Tree_3_37_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_1_29" position={[27.285, -85.495, -39.997]} rotation={[2.058, 0.453, -0.19]}>
                            <mesh name="Tree_3_1_29_World_ap_0" geometry={nodes.Tree_3_1_29_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_2_25" position={[24.209, -204.937, 257.815]} rotation={[2.058, 0.453, -0.19]}>
                            <mesh name="Tree_3_2_25_World_ap_0" geometry={nodes.Tree_3_2_25_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_3_16" position={[-142.393, 536.971, 86.022]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_3_16_World_ap_0" geometry={nodes.Tree_3_3_16_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_4_19" position={[-168.094, 504.935, 246.745]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_4_19_World_ap_0" geometry={nodes.Tree_3_4_19_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_5_17" position={[-139.242, 460.306, 171.663]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_5_17_World_ap_0" geometry={nodes.Tree_3_5_17_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_7_19_6" position={[-17.84, -263.58, 457.896]} rotation={[0.019, -0.081, -0.013]}>
                            <mesh name="Tree_3_7_19_6_World_ap_0" geometry={nodes.Tree_3_7_19_6_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_8_14" position={[-180.676, 482.431, 377.956]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_8_14_World_ap_0" geometry={nodes.Tree_3_8_14_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_6_18" position={[-202.439, 455.556, 538.329]} rotation={[1.099, 0.306, 0.027]}>
                            <mesh name="Tree_3_6_18_World_ap_0" geometry={nodes.Tree_3_6_18_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_9_5" position={[-92.854, 31.711, 509.515]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_9_5_World_ap_0" geometry={nodes.Tree_3_9_5_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_10_5_4" position={[-103.71, 71.493, 517.635]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_10_5_4_World_ap_0" geometry={nodes.Tree_3_10_5_4_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_11_12" position={[-120.269, 132.682, 529.335]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_11_12_World_ap_0" geometry={nodes.Tree_3_11_12_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_12_5" position={[0.405, -246.818, 354.312]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_12_5_World_ap_0" geometry={nodes.Tree_3_12_5_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_14_8" position={[-65.417, -73.198, 494.888]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_14_8_World_ap_0" geometry={nodes.Tree_3_14_8_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_13_3" position={[-2.563, 30.377, -26.443]}>
                            <mesh name="Tree_3_13_3_World_ap_0" geometry={nodes.Tree_3_13_3_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_15_3" position={[0.954, -258.641, 392.219]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_15_3_World_ap_0" geometry={nodes.Tree_3_15_3_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                      </group>
                      <group name="Jump_desk_2" position={[-277.434, -29.688, -104.164]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                        <mesh name="Jump_desk_2_World_ap_0" geometry={nodes.Jump_desk_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Garden_6" position={[-191.805, -46.994, -214.715]}>
                        <group name="Garden_5_3" position={[578.355, 0, -141.136]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_5_3_World_ap_0" geometry={nodes.Garden_5_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_7" position={[-230.362, 0, -141.137]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_7_World_ap_0" geometry={nodes.Garden_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_4" position={[-173.997, 0, 456.683]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_4_World_ap_0" geometry={nodes.Garden_1_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_5" position={[-173.997, 0, -174.41]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_5_World_ap_0" geometry={nodes.Garden_2_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_3_10" position={[229.937, -49.672, -173.026]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                        <mesh name="Bench_3_10_World_ap_0" geometry={nodes.Bench_3_10_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_14" position={[98.944, -36.309, -12.976]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_14_World_ap_0" geometry={nodes.Bench_14_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_13" position={[-208.426, -47.787, -257.165]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_1_13_World_ap_0" geometry={nodes.Bench_1_13_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_2_12" position={[-208.426, -57.775, -304.781]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_2_12_World_ap_0" geometry={nodes.Bench_2_12_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_4_6" position={[-208.426, -57.775, -209.305]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_4_6_World_ap_0" geometry={nodes.Bench_4_6_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_6" position={[-253.762, -2.068, 1271.482]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Garden_8" position={[117.257, -39.112, -164.258]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Garden_9" position={[-203.317, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_9_World_ap_0" geometry={nodes.Garden_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_5" position={[-161.691, 0, 418.979]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_5_World_ap_0" geometry={nodes.Garden_1_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_6" position={[-157.879, 0, -215.348]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_6_World_ap_0" geometry={nodes.Garden_2_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_4" position={[490.754, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_4_World_ap_0" geometry={nodes.Garden_3_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="House_1" position={[-126.394, -55.638, -26.544]} rotation={[Math.PI / 2, 0, Math.PI]}>
                        <mesh name="House_1_World_ap_0" geometry={nodes.House_1_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_14" position={[-204.624, -48.47, -291.364]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_1_14_World_ap_0" geometry={nodes.Bench_1_14_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Sand_3" position={[104.681, -58.461, -182.862]} rotation={[0, 1.571, 0]}>
                        <mesh name="Sand_3_World_ap_0" geometry={nodes.Sand_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_16" position={[1.901, -22.362, -8.821]} />
                      <group name="Bushes_25" position={[158.255, -41.068, 202.169]}>
                        <group name="Tree_3_38" position={[53.508, -37.517, 47.264]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_38_World_ap_0" geometry={nodes.Tree_3_38_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_30" position={[131.358, -57.517, 47.264]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_30_World_ap_0" geometry={nodes.Tree_3_1_30_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_2_7" position={[222.077, -41.068, -189.38]} rotation={[0, 1.571, 0]}>
                        <group name="Tree_3_39" position={[57.139, -37.517, 70.5]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_39_World_ap_0" geometry={nodes.Tree_3_39_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_31_4" position={[136.946, -57.517, 62.398]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_31_4_World_ap_0" geometry={nodes.Tree_3_1_31_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_26" position={[137.424, -37.517, -29.565]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_2_26_World_ap_0" geometry={nodes.Tree_3_2_26_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3_17" position={[-440.551, -37.517, -271.188]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_3_17_World_ap_0" geometry={nodes.Tree_3_3_17_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_20" position={[-77.929, -37.517, 70.5]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_4_20_World_ap_0" geometry={nodes.Tree_3_4_20_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5_18" position={[140.045, -57.517, -472.571]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_5_18_World_ap_0" geometry={nodes.Tree_3_5_18_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_6_19" position={[145.691, -57.517, -116.13]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_6_19_World_ap_0" geometry={nodes.Tree_3_6_19_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_8_15" position={[-22.134, -57.517, -492.912]} rotation={[-2.973, -0.005, -1.803]}>
                          <mesh name="Tree_3_8_15_World_ap_0" geometry={nodes.Tree_3_8_15_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_18" position={[-160.479, -41.068, 213.515]}>
                        <group name="Tree_3_40_2" position={[-46.431, -37.517, 47.184]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_40_2_World_ap_0" geometry={nodes.Tree_3_40_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_32" position={[31.419, -57.517, 47.184]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_32_World_ap_0" geometry={nodes.Tree_3_1_32_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_15" position={[-205.874, -48.47, -211.119]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_15_World_ap_0" geometry={nodes.Bench_15_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_6_6" position={[2624.856, -2.068, 179.517]} rotation={[-Math.PI, 0, -Math.PI]}>
                      <group name="Garden_10" position={[117.257, -39.112, -164.258]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Garden_11" position={[-203.317, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_11_World_ap_0" geometry={nodes.Garden_11_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_6" position={[-161.691, 0, 418.979]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_6_World_ap_0" geometry={nodes.Garden_1_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_7" position={[-157.879, 0, -215.348]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_7_World_ap_0" geometry={nodes.Garden_2_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_5" position={[490.754, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_5_World_ap_0" geometry={nodes.Garden_3_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="House_1_2" position={[-126.394, -55.638, -26.544]} rotation={[Math.PI / 2, 0, Math.PI]}>
                        <mesh name="House_1_2_World_ap_0" geometry={nodes.House_1_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_15" position={[-204.624, -48.47, -291.364]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_1_15_World_ap_0" geometry={nodes.Bench_1_15_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Sand_4" position={[104.681, -58.461, -182.862]} rotation={[0, Math.PI / 2, 0]}>
                        <mesh name="Sand_4_World_ap_0" geometry={nodes.Sand_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_17" position={[1.901, -22.362, -8.821]} />
                      <group name="Bushes_26" position={[158.255, -41.068, 202.169]}>
                        <group name="Tree_3_41" position={[53.508, -37.517, 47.264]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_41_World_ap_0" geometry={nodes.Tree_3_41_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_33_4" position={[131.358, -57.517, 47.264]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_33_4_World_ap_0" geometry={nodes.Tree_3_1_33_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_2_8" position={[222.077, -41.068, -189.38]} rotation={[0, 1.571, 0]}>
                        <group name="Tree_3_42" position={[57.139, -37.517, 70.5]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_42_World_ap_0" geometry={nodes.Tree_3_42_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_34_4" position={[136.946, -57.517, 62.398]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_34_4_World_ap_0" geometry={nodes.Tree_3_1_34_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_27" position={[137.424, -37.517, -29.565]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_2_27_World_ap_0" geometry={nodes.Tree_3_2_27_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3_18" position={[-440.551, -37.517, -271.188]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_3_18_World_ap_0" geometry={nodes.Tree_3_3_18_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_21" position={[-77.929, -37.517, 70.5]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_4_21_World_ap_0" geometry={nodes.Tree_3_4_21_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5_19" position={[140.045, -57.517, -472.571]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_5_19_World_ap_0" geometry={nodes.Tree_3_5_19_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_6_20" position={[145.691, -57.517, -116.13]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_6_20_World_ap_0" geometry={nodes.Tree_3_6_20_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_7_20_2" position={[-11.9, -37.517, 70.5]} rotation={[-2.958, 0.398, -1.875]}>
                          <mesh name="Tree_3_7_20_2_World_ap_0" geometry={nodes.Tree_3_7_20_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_8_16" position={[-22.134, -57.517, -492.912]} rotation={[-2.973, -0.005, -1.803]}>
                          <mesh name="Tree_3_8_16_World_ap_0" geometry={nodes.Tree_3_8_16_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_19" position={[-160.479, -41.068, 213.515]}>
                        <group name="Tree_3_43" position={[-46.431, -37.517, 47.184]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_43_World_ap_0" geometry={nodes.Tree_3_43_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_16" position={[-205.874, -48.47, -211.119]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_16_World_ap_0" geometry={nodes.Bench_16_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_6_4" position={[1295.696, -2.068, 134.476]}>
                      <group name="Garden_12" position={[117.257, -39.112, -164.258]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Garden_13" position={[-203.317, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_13_World_ap_0" geometry={nodes.Garden_13_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_7" position={[-161.691, 0, 418.979]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_7_World_ap_0" geometry={nodes.Garden_1_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_8" position={[-157.879, 0, -215.348]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_8_World_ap_0" geometry={nodes.Garden_2_8_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_6" position={[490.754, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_6_World_ap_0" geometry={nodes.Garden_3_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="House_1_3" position={[-126.394, -55.638, -26.544]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                        <mesh name="House_1_3_World_ap_0" geometry={nodes.House_1_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_16" position={[-204.624, -48.47, -291.364]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_1_16_World_ap_0" geometry={nodes.Bench_1_16_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Sand_5" position={[104.681, -58.461, -182.862]} rotation={[0, Math.PI / 2, 0]}>
                        <mesh name="Sand_5_World_ap_0" geometry={nodes.Sand_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_18" position={[1.901, -22.362, -8.821]} />
                      <group name="Bushes_27" position={[158.255, -41.068, 202.169]}>
                        <group name="Tree_3_44_6" position={[53.508, -37.517, 47.264]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_44_6_World_ap_0" geometry={nodes.Tree_3_44_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_35" position={[131.358, -57.517, 47.264]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_35_World_ap_0" geometry={nodes.Tree_3_1_35_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_2_9" position={[222.077, -41.068, -189.38]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Tree_3_45" position={[57.139, -37.517, 70.5]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_45_World_ap_0" geometry={nodes.Tree_3_45_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_36_4" position={[136.946, -57.517, 62.398]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_36_4_World_ap_0" geometry={nodes.Tree_3_1_36_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_28" position={[137.424, -37.517, -29.565]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_2_28_World_ap_0" geometry={nodes.Tree_3_2_28_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3_19" position={[-440.551, -37.517, -271.188]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_3_19_World_ap_0" geometry={nodes.Tree_3_3_19_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_22" position={[-77.929, -37.517, 70.5]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_4_22_World_ap_0" geometry={nodes.Tree_3_4_22_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5_20" position={[140.045, -57.517, -472.571]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_5_20_World_ap_0" geometry={nodes.Tree_3_5_20_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_6_21" position={[145.691, -57.517, -116.13]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_6_21_World_ap_0" geometry={nodes.Tree_3_6_21_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_7_21_3" position={[-11.9, -37.517, 70.5]} rotation={[-2.958, 0.398, -1.875]}>
                          <mesh name="Tree_3_7_21_3_World_ap_0" geometry={nodes.Tree_3_7_21_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_8_17" position={[-22.134, -57.517, -492.912]} rotation={[-2.973, -0.005, -1.803]}>
                          <mesh name="Tree_3_8_17_World_ap_0" geometry={nodes.Tree_3_8_17_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_20" position={[-160.479, -41.068, 213.515]}>
                        <group name="Tree_3_46" position={[-46.431, -37.517, 47.184]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_46_World_ap_0" geometry={nodes.Tree_3_46_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_37_4" position={[31.419, -57.517, 47.184]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_37_4_World_ap_0" geometry={nodes.Tree_3_1_37_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_17" position={[-205.874, -48.47, -211.119]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_17_World_ap_0" geometry={nodes.Bench_17_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_6_3" position={[-1762.402, -2.068, -558.114]}>
                      <group name="Garden_14" position={[79.625, -39.112, -164.258]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Garden_15" position={[-203.317, 0, -225.092]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_15_World_ap_0" geometry={nodes.Garden_15_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_8" position={[-161.691, 0, 391.026]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_8_World_ap_0" geometry={nodes.Garden_1_8_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_9" position={[-157.879, 0, -366.697]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_9_World_ap_0" geometry={nodes.Garden_2_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_7" position={[490.754, 0, -225.092]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_7_World_ap_0" geometry={nodes.Garden_3_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="House_1_4" position={[-126.394, -55.638, -26.544]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                        <mesh name="House_1_4_World_ap_0" geometry={nodes.House_1_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_17" position={[-204.624, -48.47, -291.364]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_1_17_World_ap_0" geometry={nodes.Bench_1_17_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Sand_6" position={[104.681, -58.461, -182.862]} rotation={[0, Math.PI / 2, 0]}>
                        <mesh name="Sand_6_World_ap_0" geometry={nodes.Sand_6_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_19" position={[1.901, -22.362, -8.821]} />
                      <group name="Bushes_28" position={[158.255, -41.068, 202.169]}>
                        <group name="Tree_3_47" position={[53.508, -37.517, 47.264]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_47_World_ap_0" geometry={nodes.Tree_3_47_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_38_4" position={[131.358, -57.517, 47.264]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_38_4_World_ap_0" geometry={nodes.Tree_3_1_38_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_2_10" position={[222.077, -41.068, -189.38]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Tree_3_48" position={[57.139, -37.517, 185.37]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_48_World_ap_0" geometry={nodes.Tree_3_48_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_39_4" position={[-448.398, -57.517, 171.643]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_39_4_World_ap_0" geometry={nodes.Tree_3_1_39_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_29" position={[-497.808, -24.167, -114.508]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_2_29_World_ap_0" geometry={nodes.Tree_3_2_29_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3_20" position={[-440.551, -37.517, -271.188]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_3_20_World_ap_0" geometry={nodes.Tree_3_3_20_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_23" position={[-77.929, -37.517, 165.972]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_4_23_World_ap_0" geometry={nodes.Tree_3_4_23_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5_21" position={[140.045, -57.517, -472.571]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_5_21_World_ap_0" geometry={nodes.Tree_3_5_21_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_6_22" position={[145.691, -57.517, -116.13]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_6_22_World_ap_0" geometry={nodes.Tree_3_6_22_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_7_22" position={[-11.9, -37.517, 110.443]} rotation={[-2.958, 0.398, -1.875]}>
                          <mesh name="Tree_3_7_22_World_ap_0" geometry={nodes.Tree_3_7_22_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_8_18" position={[-22.134, -57.517, -492.912]} rotation={[-2.973, -0.005, -1.803]}>
                          <mesh name="Tree_3_8_18_World_ap_0" geometry={nodes.Tree_3_8_18_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_21" position={[-160.479, -41.068, 213.515]}>
                        <group name="Tree_3_49" position={[-46.431, -37.517, 47.184]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_49_World_ap_0" geometry={nodes.Tree_3_49_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_40" position={[31.419, -57.517, 47.184]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_40_World_ap_0" geometry={nodes.Tree_3_1_40_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_18" position={[-205.874, -48.47, -211.119]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_18_World_ap_0" geometry={nodes.Bench_18_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_6_1" position={[431.432, -2.068, -710.879]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Garden_16" position={[25.211, -39.112, -164.258]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Garden_17" position={[-199.722, 0, -96.27]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_17_World_ap_0" geometry={nodes.Garden_17_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_9" position={[-158.832, 0, 416.871]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_9_World_ap_0" geometry={nodes.Garden_1_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_10" position={[-155.088, 0, -214.265]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_10_World_ap_0" geometry={nodes.Garden_2_10_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_8" position={[466.975, 0, -96.27]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_8_World_ap_0" geometry={nodes.Garden_3_8_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="House_1_5" position={[-198.273, -55.638, -60.152]} rotation={[Math.PI / 2, 0, Math.PI]}>
                        <mesh name="House_1_5_World_ap_0" geometry={nodes.House_1_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_18" position={[-43.339, -51.816, -63.397]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_1_18_World_ap_0" geometry={nodes.Bench_1_18_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_20" position={[1.901, -22.362, -8.821]} />
                      <group name="Bushes_29" position={[158.255, -41.068, 202.169]}>
                        <group name="Tree_3_50" position={[53.508, -37.517, 47.264]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_50_World_ap_0" geometry={nodes.Tree_3_50_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_41" position={[-44.177, -57.517, 47.264]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_41_World_ap_0" geometry={nodes.Tree_3_1_41_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_30" position={[-548.284, -60.749, -409.786]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_2_30_World_ap_0" geometry={nodes.Tree_3_2_30_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_2_11" position={[222.077, -41.068, -189.38]} rotation={[0, 1.571, 0]}>
                        <group name="Tree_3_51" position={[20.883, -37.517, -30.542]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_51_World_ap_0" geometry={nodes.Tree_3_51_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_42" position={[94.456, -57.517, -38.643]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_42_World_ap_0" geometry={nodes.Tree_3_1_42_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_31" position={[-387.151, -37.517, -62.121]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_2_31_World_ap_0" geometry={nodes.Tree_3_2_31_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3_21" position={[-440.551, -37.517, -271.188]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_3_21_World_ap_0" geometry={nodes.Tree_3_3_21_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_24" position={[-109.672, -50.222, -30.542]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_4_24_World_ap_0" geometry={nodes.Tree_3_4_24_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5_22" position={[100.85, -63.329, -366.857]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_5_22_World_ap_0" geometry={nodes.Tree_3_5_22_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_6_23" position={[135.838, -57.517, -116.13]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_6_23_World_ap_0" geometry={nodes.Tree_3_6_23_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_7_23_2" position={[127.26, -63.329, -553.006]} rotation={[-0.185, -0.414, 1.263]}>
                          <mesh name="Tree_3_7_23_2_World_ap_0" geometry={nodes.Tree_3_7_23_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_22" position={[-160.479, -41.068, 213.515]}>
                        <group name="Tree_3_52" position={[-46.431, -64.743, 47.184]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_52_World_ap_0" geometry={nodes.Tree_3_52_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_43" position={[31.419, -57.517, 47.184]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_43_World_ap_0" geometry={nodes.Tree_3_1_43_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_32" position={[-200.95, -37.517, 47.184]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_2_32_World_ap_0" geometry={nodes.Tree_3_2_32_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_19" position={[-43.339, -51.816, -149.14]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_19_World_ap_0" geometry={nodes.Bench_19_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_6_2" position={[-1646.886, -2.068, 159.561]}>
                      <group name="Garden_18" position={[77.798, -39.112, -164.258]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Garden_19" position={[-215.872, 0, -116.108]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_19_World_ap_0" geometry={nodes.Garden_19_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_10" position={[-171.676, 0, 502.775]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_10_World_ap_0" geometry={nodes.Garden_1_10_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_11" position={[-167.629, 0, -258.418]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_11_World_ap_0" geometry={nodes.Garden_2_11_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_9" position={[504.734, 0, -116.108]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_9_World_ap_0" geometry={nodes.Garden_3_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="House_1_6" position={[-220.584, -55.638, -8.457]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                        <mesh name="House_1_6_World_ap_0" geometry={nodes.House_1_6_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_19" position={[-43.339, -51.816, -63.397]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_1_19_World_ap_0" geometry={nodes.Bench_1_19_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_21" position={[1.901, -22.362, -8.821]} />
                      <group name="Bushes_30" position={[158.255, -41.068, 202.169]}>
                        <group name="Tree_3_53" position={[53.508, -37.517, 47.264]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_53_World_ap_0" geometry={nodes.Tree_3_53_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_44" position={[131.358, -57.517, 47.264]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_44_World_ap_0" geometry={nodes.Tree_3_1_44_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_33" position={[-531.657, -38.968, -447.577]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_2_33_World_ap_0" geometry={nodes.Tree_3_2_33_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_2_12" position={[222.077, -41.068, -189.38]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Tree_3_54_2" position={[20.883, -37.517, 70.5]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_54_2_World_ap_0" geometry={nodes.Tree_3_54_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_45" position={[94.456, -57.517, 62.398]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_45_World_ap_0" geometry={nodes.Tree_3_1_45_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_34" position={[-387.151, -37.517, 38.92]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_2_34_World_ap_0" geometry={nodes.Tree_3_2_34_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3_22" position={[-440.551, -37.517, -271.188]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_3_22_World_ap_0" geometry={nodes.Tree_3_3_22_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_25" position={[-109.672, -37.517, 70.5]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_4_25_World_ap_0" geometry={nodes.Tree_3_4_25_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5_23" position={[100.85, -63.329, -366.857]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_5_23_World_ap_0" geometry={nodes.Tree_3_5_23_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_6_24" position={[135.838, -57.517, -116.13]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_6_24_World_ap_0" geometry={nodes.Tree_3_6_24_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_7_24_3" position={[127.26, -63.329, -553.006]} rotation={[-0.185, -0.414, 1.263]}>
                          <mesh name="Tree_3_7_24_3_World_ap_0" geometry={nodes.Tree_3_7_24_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_23" position={[-160.479, -41.068, 213.515]}>
                        <group name="Tree_3_55" position={[-46.431, -37.517, 47.184]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_55_World_ap_0" geometry={nodes.Tree_3_55_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_46" position={[31.419, -57.517, 47.184]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_46_World_ap_0" geometry={nodes.Tree_3_1_46_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_35" position={[-200.95, -37.517, 47.184]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_2_35_World_ap_0" geometry={nodes.Tree_3_2_35_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_20" position={[-43.339, -51.816, -149.14]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_20_World_ap_0" geometry={nodes.Bench_20_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_10_2" position={[-1760.024, 5.814, 908.694]} rotation={[0, -Math.PI / 2, 0]}>
                      <group name="Hosuse_4" position={[122.969, -78.692, 11.438]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Hosuse_4_World_ap_0" geometry={nodes.Hosuse_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_22" position={[1.901, -22.362, -74.237]} />
                      <group name="Bushes_31" position={[214.366, -41.068, 103.379]} rotation={[0, -1.571, 0]} />
                      <group name="Bushes_1_24" position={[-217.925, -41.068, 146.021]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bush_1_9" position={[392.869, -31.114, 78.018]} rotation={[-2.97, 0.165, -1.832]}>
                          <group name="bUSH_11" position={[-25.744, 90.663, 24.227]}>
                            <mesh name="bUSH_11_World_ap_0" geometry={nodes.bUSH_11_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_13" position={[-3.801, 146.472, -176.274]}>
                            <mesh name="bUSH_3_13_World_ap_0" geometry={nodes.bUSH_3_13_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_8" position={[-65.522, 150.961, 132.666]} rotation={[0.277, 0.072, 0.039]}>
                            <mesh name="bUSH_4_8_World_ap_0" geometry={nodes.bUSH_4_8_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_6_5" position={[103.543, -435.736, -69.563]} rotation={[-0.009, -0.002, -0.002]}>
                            <mesh name="bUSH_6_5_World_ap_0" geometry={nodes.bUSH_6_5_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_1_12" position={[-47.758, 56.531, 205.513]} rotation={[1.871, 0.441, -0.138]}>
                            <mesh name="bUSH_1_12_World_ap_0" geometry={nodes.bUSH_1_12_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Bush_4" position={[148.332, -31.114, 428.707]} rotation={[-0.798, 1.334, 2.122]}>
                          <group name="bUSH_1_13" position={[-63.881, 57.21, 188.188]}>
                            <mesh name="bUSH_1_13_World_ap_0" geometry={nodes.bUSH_1_13_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_12" position={[-42.544, 114.605, -2.506]} rotation={[0.05, 0.012, 0.009]}>
                            <mesh name="bUSH_12_World_ap_0" geometry={nodes.bUSH_12_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_2_4" position={[-94.24, 32.902, 459.643]} rotation={[0.381, 0.101, 0.049]}>
                            <mesh name="bUSH_2_4_World_ap_0" geometry={nodes.bUSH_2_4_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_14" position={[-10.585, 140.242, -129.184]}>
                            <mesh name="bUSH_3_14_World_ap_0" geometry={nodes.bUSH_3_14_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_9" position={[-39.674, 105.014, 102.073]} rotation={[0.05, 0.012, 0.009]}>
                            <mesh name="bUSH_4_9_World_ap_0" geometry={nodes.bUSH_4_9_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Tree_3_56_4" position={[-51.075, -41.268, -15.919]} rotation={[-0.805, 1.335, 2.129]}>
                          <group name="Tree_3_7_25_4" position={[31.947, -53.774, -59.727]} rotation={[0.025, -0.106, -0.017]}>
                            <mesh name="Tree_3_7_25_4_World_ap_0" geometry={nodes.Tree_3_7_25_4_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_6_25" position={[-218.774, 446.302, 643.951]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_6_25_World_ap_0" geometry={nodes.Tree_3_6_25_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_9_6" position={[-93.512, 390.062, 31.296]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_9_6_World_ap_0" geometry={nodes.Tree_3_9_6_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_10_6_2" position={[-117.654, 72.922, 597.499]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_10_6_2_World_ap_0" geometry={nodes.Tree_3_10_6_2_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_11_13" position={[-151.523, 170.179, 659.127]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_11_13_World_ap_0" geometry={nodes.Tree_3_11_13_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_12_6" position={[-37.729, -206.193, 395.62]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_12_6_World_ap_0" geometry={nodes.Tree_3_12_6_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_13_4" position={[-96.89, -26.46, 613.441]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_13_4_World_ap_0" geometry={nodes.Tree_3_13_4_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                      </group>
                      <group name="Garden_20" position={[-152.126, -46.994, -195.261]}>
                        <group name="Garden_21" position={[-237.459, 0, -127.81]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_21_World_ap_0" geometry={nodes.Garden_21_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_11" position={[-188.843, 0, 491.073]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_11_World_ap_0" geometry={nodes.Garden_1_11_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_12" position={[-184.391, 0, -270.12]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_12_World_ap_0" geometry={nodes.Garden_2_12_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_10" position={[555.207, 0, -130.89]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_10_World_ap_0" geometry={nodes.Garden_3_10_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_21" position={[-282.182, -47.056, 14.24]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_21_World_ap_0" geometry={nodes.Bench_21_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_20" position={[-45.421, -38.523, -46.605]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_1_20_World_ap_0" geometry={nodes.Bench_1_20_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_9_3" position={[2688.289, -4.586, 1021.787]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Hosuse_5" position={[35.154, -70.746, 32.59]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Hosuse_5_World_ap_0" geometry={nodes.Hosuse_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Sand_7" position={[-272.394, -59.999, 12.82]} rotation={[-Math.PI, 0, -Math.PI]}>
                        <mesh name="Sand_7_World_ap_0" geometry={nodes.Sand_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_23" position={[1.901, -22.362, -74.237]} />
                      <group name="Bushes_32" position={[214.366, -41.068, 103.379]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Bed_2_33" position={[-197.057, -15.674, 109.234]} rotation={[0, Math.PI / 2, 0]}>
                          <mesh name="Bed_2_33_World_ap_0" geometry={nodes.Bed_2_33_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_25" position={[-200.293, -41.068, 98.764]} rotation={[0, 1.571, 0]}>
                        <group name="Bush_1_10" position={[357.153, -28.285, 70.925]} rotation={[-2.97, 0.165, -1.832]}>
                          <group name="bUSH_7_4" position={[46.117, -114.564, -108.061]} rotation={[-3.022, 0.319, -0.485]}>
                            <mesh name="bUSH_7_4_World_ap_0" geometry={nodes.bUSH_7_4_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_15" position={[-1.661, 87.344, -108.569]}>
                            <mesh name="bUSH_3_15_World_ap_0" geometry={nodes.bUSH_3_15_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_10" position={[-36.141, 71.087, 109.95]} rotation={[0.277, 0.072, 0.039]}>
                            <mesh name="bUSH_4_10_World_ap_0" geometry={nodes.bUSH_4_10_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_6_6" position={[-13.457, -129.048, 251.107]} rotation={[1.54, 0.399, -0.054]}>
                            <mesh name="bUSH_6_6_World_ap_0" geometry={nodes.bUSH_6_6_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_1_14" position={[-46.696, 33.209, 221.305]} rotation={[1.54, 0.399, -0.054]}>
                            <mesh name="bUSH_1_14_World_ap_0" geometry={nodes.bUSH_1_14_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Bush_5" position={[134.848, -28.285, 389.733]} rotation={[-0.798, 1.334, 2.122]}>
                          <group name="bUSH_1_15" position={[-46.012, -15.705, 283.506]}>
                            <mesh name="bUSH_1_15_World_ap_0" geometry={nodes.bUSH_1_15_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_13" position={[-18.908, 65.601, 19.13]}>
                            <mesh name="bUSH_13_World_ap_0" geometry={nodes.bUSH_13_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_2_5" position={[-49.615, -29.413, 322.572]}>
                            <mesh name="bUSH_2_5_World_ap_0" geometry={nodes.bUSH_2_5_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_16" position={[5.903, 59.042, -113.439]}>
                            <mesh name="bUSH_3_16_World_ap_0" geometry={nodes.bUSH_3_16_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_11" position={[-15.019, 26.852, 49.325]}>
                            <mesh name="bUSH_4_11_World_ap_0" geometry={nodes.bUSH_4_11_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Tree_3_57" position={[-46.431, -37.517, -14.472]} rotation={[-0.805, 1.335, 2.129]}>
                          <group name="Tree_3_58" position={[43.68, -162.805, -28.976]}>
                            <mesh name="Tree_3_58_World_ap_0" geometry={nodes.Tree_3_58_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_1_47" position={[27.285, -85.495, -39.997]} rotation={[2.058, 0.453, -0.19]}>
                            <mesh name="Tree_3_1_47_World_ap_0" geometry={nodes.Tree_3_1_47_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_2_36" position={[24.209, -204.937, 257.815]} rotation={[2.058, 0.453, -0.19]}>
                            <mesh name="Tree_3_2_36_World_ap_0" geometry={nodes.Tree_3_2_36_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_3_23" position={[-142.393, 536.971, 86.022]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_3_23_World_ap_0" geometry={nodes.Tree_3_3_23_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_5_24" position={[-139.242, 460.306, 171.663]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_5_24_World_ap_0" geometry={nodes.Tree_3_5_24_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_7_26" position={[-17.84, -263.58, 457.896]} rotation={[0.019, -0.081, -0.013]}>
                            <mesh name="Tree_3_7_26_World_ap_0" geometry={nodes.Tree_3_7_26_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_8_19" position={[-180.676, 482.431, 377.956]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_8_19_World_ap_0" geometry={nodes.Tree_3_8_19_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_6_26" position={[-202.439, 455.556, 538.329]} rotation={[1.099, 0.306, 0.027]}>
                            <mesh name="Tree_3_6_26_World_ap_0" geometry={nodes.Tree_3_6_26_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_9_7" position={[-92.854, 31.711, 509.515]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_9_7_World_ap_0" geometry={nodes.Tree_3_9_7_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_10_7_5" position={[-103.71, 71.493, 517.635]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_10_7_5_World_ap_0" geometry={nodes.Tree_3_10_7_5_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_11_14_4" position={[-120.269, 132.682, 529.335]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_11_14_4_World_ap_0" geometry={nodes.Tree_3_11_14_4_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_12_7" position={[0.405, -246.818, 354.312]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_12_7_World_ap_0" geometry={nodes.Tree_3_12_7_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_14_9" position={[-65.417, -73.198, 494.888]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_14_9_World_ap_0" geometry={nodes.Tree_3_14_9_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_13_5" position={[-2.563, 30.377, -26.443]}>
                            <mesh name="Tree_3_13_5_World_ap_0" geometry={nodes.Tree_3_13_5_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_15_4" position={[0.954, -258.641, 392.219]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_15_4_World_ap_0" geometry={nodes.Tree_3_15_4_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                      </group>
                      <group name="Jump_desk_3" position={[-277.434, -29.688, -104.164]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                        <mesh name="Jump_desk_3_World_ap_0" geometry={nodes.Jump_desk_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Garden_22" position={[-191.805, -46.994, -214.715]}>
                        <group name="Garden_5_4" position={[578.355, 0, -141.136]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_5_4_World_ap_0" geometry={nodes.Garden_5_4_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_23" position={[-230.362, 0, -141.137]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_23_World_ap_0" geometry={nodes.Garden_23_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_12" position={[-173.997, 0, 456.683]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_12_World_ap_0" geometry={nodes.Garden_1_12_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_13" position={[-173.997, 0, -174.41]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_13_World_ap_0" geometry={nodes.Garden_2_13_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_3_11" position={[229.937, -49.672, -173.026]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                        <mesh name="Bench_3_11_World_ap_0" geometry={nodes.Bench_3_11_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_22" position={[98.944, -36.309, -12.976]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_22_World_ap_0" geometry={nodes.Bench_22_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_21" position={[-208.426, -47.787, -257.165]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_1_21_World_ap_0" geometry={nodes.Bench_1_21_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_2_13" position={[-208.426, -57.775, -304.781]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_2_13_World_ap_0" geometry={nodes.Bench_2_13_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_4_7" position={[-208.426, -57.775, -209.305]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_4_7_World_ap_0" geometry={nodes.Bench_4_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_9_1" position={[1253.553, -4.586, -563.857]}>
                      <group name="Hosuse_6" position={[35.154, -70.746, 32.59]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Hosuse_6_World_ap_0" geometry={nodes.Hosuse_6_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Sand_8" position={[-272.394, -59.999, 12.82]} rotation={[-Math.PI, 0, Math.PI]}>
                        <mesh name="Sand_8_World_ap_0" geometry={nodes.Sand_8_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_24" position={[1.901, -22.362, -74.237]} />
                      <group name="Bushes_33" position={[214.366, -41.068, 103.379]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Bed_2_34" position={[-197.057, -15.674, 109.234]} rotation={[0, Math.PI / 2, 0]}>
                          <mesh name="Bed_2_34_World_ap_0" geometry={nodes.Bed_2_34_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_26" position={[-200.293, -41.068, 98.764]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bush_1_11" position={[357.153, -28.285, 70.925]} rotation={[-2.97, 0.165, -1.832]}>
                          <group name="bUSH_7_5" position={[46.117, -114.564, -108.061]} rotation={[-3.022, 0.319, -0.485]}>
                            <mesh name="bUSH_7_5_World_ap_0" geometry={nodes.bUSH_7_5_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_14" position={[-24.85, 87.834, 22.956]}>
                            <mesh name="bUSH_14_World_ap_0" geometry={nodes.bUSH_14_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_17" position={[-1.661, 87.344, -108.569]}>
                            <mesh name="bUSH_3_17_World_ap_0" geometry={nodes.bUSH_3_17_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_12" position={[-36.141, 71.087, 109.95]} rotation={[0.277, 0.072, 0.039]}>
                            <mesh name="bUSH_4_12_World_ap_0" geometry={nodes.bUSH_4_12_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_6_7" position={[-13.457, -129.048, 251.107]} rotation={[1.54, 0.399, -0.054]}>
                            <mesh name="bUSH_6_7_World_ap_0" geometry={nodes.bUSH_6_7_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_1_16" position={[-46.696, 33.209, 221.305]} rotation={[1.54, 0.399, -0.054]}>
                            <mesh name="bUSH_1_16_World_ap_0" geometry={nodes.bUSH_1_16_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Bush_6" position={[134.848, -28.285, 389.733]} rotation={[-0.798, 1.334, 2.122]}>
                          <group name="bUSH_1_17" position={[-46.012, -15.705, 283.506]}>
                            <mesh name="bUSH_1_17_World_ap_0" geometry={nodes.bUSH_1_17_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_15" position={[-18.908, 65.601, 19.13]}>
                            <mesh name="bUSH_15_World_ap_0" geometry={nodes.bUSH_15_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_18" position={[5.903, 59.042, -113.439]}>
                            <mesh name="bUSH_3_18_World_ap_0" geometry={nodes.bUSH_3_18_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_13" position={[-15.019, 26.852, 49.325]}>
                            <mesh name="bUSH_4_13_World_ap_0" geometry={nodes.bUSH_4_13_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Tree_3_59" position={[-46.431, -37.517, -14.472]} rotation={[-0.805, 1.335, 2.129]}>
                          <group name="Tree_3_60" position={[43.68, -162.805, -28.976]}>
                            <mesh name="Tree_3_60_World_ap_0" geometry={nodes.Tree_3_60_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_1_48" position={[27.285, -85.495, -39.997]} rotation={[2.058, 0.453, -0.19]}>
                            <mesh name="Tree_3_1_48_World_ap_0" geometry={nodes.Tree_3_1_48_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_2_37" position={[24.209, -204.937, 257.815]} rotation={[2.058, 0.453, -0.19]}>
                            <mesh name="Tree_3_2_37_World_ap_0" geometry={nodes.Tree_3_2_37_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_3_24" position={[-142.393, 536.971, 86.022]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_3_24_World_ap_0" geometry={nodes.Tree_3_3_24_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_4_26" position={[-168.094, 504.935, 246.745]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_4_26_World_ap_0" geometry={nodes.Tree_3_4_26_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_5_25" position={[-139.242, 460.306, 171.663]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_5_25_World_ap_0" geometry={nodes.Tree_3_5_25_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_7_27_6" position={[-17.84, -263.58, 457.896]} rotation={[0.019, -0.081, -0.013]}>
                            <mesh name="Tree_3_7_27_6_World_ap_0" geometry={nodes.Tree_3_7_27_6_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_8_20" position={[-180.676, 482.431, 377.956]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_8_20_World_ap_0" geometry={nodes.Tree_3_8_20_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_6_27" position={[-202.439, 455.556, 538.329]} rotation={[1.099, 0.306, 0.027]}>
                            <mesh name="Tree_3_6_27_World_ap_0" geometry={nodes.Tree_3_6_27_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_9_8" position={[-92.854, 31.711, 509.515]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_9_8_World_ap_0" geometry={nodes.Tree_3_9_8_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_10_8" position={[-103.71, 71.493, 517.635]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_10_8_World_ap_0" geometry={nodes.Tree_3_10_8_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_11_15_3" position={[-120.269, 132.682, 529.335]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_11_15_3_World_ap_0" geometry={nodes.Tree_3_11_15_3_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_12_8" position={[0.405, -246.818, 354.312]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_12_8_World_ap_0" geometry={nodes.Tree_3_12_8_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_14_10" position={[-65.417, -73.198, 494.888]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_14_10_World_ap_0" geometry={nodes.Tree_3_14_10_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_13_6" position={[-2.563, 30.377, -26.443]}>
                            <mesh name="Tree_3_13_6_World_ap_0" geometry={nodes.Tree_3_13_6_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_15_5" position={[0.954, -258.641, 392.219]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_15_5_World_ap_0" geometry={nodes.Tree_3_15_5_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                      </group>
                      <group name="Jump_desk_4" position={[-277.434, -29.688, -104.164]} rotation={[Math.PI / 2, 0, Math.PI]}>
                        <mesh name="Jump_desk_4_World_ap_0" geometry={nodes.Jump_desk_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Garden_24" position={[-191.805, -46.994, -214.715]}>
                        <group name="Garden_5_5" position={[578.355, 0, -141.136]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_5_5_World_ap_0" geometry={nodes.Garden_5_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_25" position={[-230.362, 0, -141.137]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_25_World_ap_0" geometry={nodes.Garden_25_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_13" position={[-173.997, 0, 456.683]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_13_World_ap_0" geometry={nodes.Garden_1_13_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_14" position={[-173.997, 0, -174.41]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_14_World_ap_0" geometry={nodes.Garden_2_14_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_3_12" position={[229.937, -49.672, -173.026]} rotation={[Math.PI / 2, 0, Math.PI]}>
                        <mesh name="Bench_3_12_World_ap_0" geometry={nodes.Bench_3_12_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_23" position={[98.944, -36.309, -12.976]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_23_World_ap_0" geometry={nodes.Bench_23_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_22" position={[-208.426, -47.787, -257.165]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_1_22_World_ap_0" geometry={nodes.Bench_1_22_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_2_14" position={[-208.426, -57.775, -304.781]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_2_14_World_ap_0" geometry={nodes.Bench_2_14_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_4_8" position={[-208.426, -57.775, -209.305]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_4_8_World_ap_0" geometry={nodes.Bench_4_8_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_6_5" position={[1295.696, -2.068, 1292.653]}>
                      <group name="Garden_26" position={[117.257, -39.112, -164.258]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Garden_27" position={[-203.317, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_27_World_ap_0" geometry={nodes.Garden_27_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_14" position={[-161.691, 0, 418.979]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_14_World_ap_0" geometry={nodes.Garden_1_14_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_15" position={[-157.879, 0, -215.348]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_15_World_ap_0" geometry={nodes.Garden_2_15_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_11" position={[490.754, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_11_World_ap_0" geometry={nodes.Garden_3_11_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="House_1_7" position={[-126.394, -55.638, -26.544]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                        <mesh name="House_1_7_World_ap_0" geometry={nodes.House_1_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_23" position={[-204.624, -48.47, -291.364]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_1_23_World_ap_0" geometry={nodes.Bench_1_23_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Sand_9" position={[104.681, -58.461, -182.862]} rotation={[0, Math.PI / 2, 0]}>
                        <mesh name="Sand_9_World_ap_0" geometry={nodes.Sand_9_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_25" position={[1.901, -22.362, -8.821]} />
                      <group name="Bushes_34" position={[158.255, -41.068, 202.169]}>
                        <group name="Tree_3_61_2" position={[53.508, -37.517, 47.264]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_61_2_World_ap_0" geometry={nodes.Tree_3_61_2_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_49" position={[131.358, -57.517, 47.264]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_49_World_ap_0" geometry={nodes.Tree_3_1_49_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_2_13" position={[222.077, -41.068, -189.38]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Tree_3_62" position={[57.139, -37.517, 70.5]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_62_World_ap_0" geometry={nodes.Tree_3_62_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_50" position={[136.946, -57.517, 62.398]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_50_World_ap_0" geometry={nodes.Tree_3_1_50_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_38" position={[137.424, -37.517, -29.565]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_2_38_World_ap_0" geometry={nodes.Tree_3_2_38_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3_25" position={[-440.551, -37.517, -271.188]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_3_25_World_ap_0" geometry={nodes.Tree_3_3_25_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_27" position={[-77.929, -37.517, 70.5]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_4_27_World_ap_0" geometry={nodes.Tree_3_4_27_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5_26" position={[140.045, -57.517, -472.571]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_5_26_World_ap_0" geometry={nodes.Tree_3_5_26_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_6_28" position={[145.691, -57.517, -116.13]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_6_28_World_ap_0" geometry={nodes.Tree_3_6_28_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_8_21" position={[-22.134, -57.517, -492.912]} rotation={[-2.973, -0.005, -1.803]}>
                          <mesh name="Tree_3_8_21_World_ap_0" geometry={nodes.Tree_3_8_21_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_27" position={[-160.479, -41.068, 213.515]}>
                        <group name="Tree_3_63" position={[-46.431, -37.517, 47.184]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_63_World_ap_0" geometry={nodes.Tree_3_63_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_51" position={[31.419, -57.517, 47.184]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_51_World_ap_0" geometry={nodes.Tree_3_1_51_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_24" position={[-205.874, -48.47, -211.119]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_24_World_ap_0" geometry={nodes.Bench_24_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_10_3" position={[2693.393, 5.814, -580.769]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Hosuse_7" position={[-78.292, -78.692, 11.438]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Hosuse_7_World_ap_0" geometry={nodes.Hosuse_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_26" position={[1.901, -22.362, -74.237]} />
                      <group name="Bushes_35" position={[214.366, -41.068, 103.379]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Bed_2_35" position={[-175.31, -26.443, 44.851]} rotation={[0, Math.PI / 2, 0]}>
                          <mesh name="Bed_2_35_World_ap_0" geometry={nodes.Bed_2_35_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_28" position={[-217.925, -41.068, 146.021]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bush_1_12" position={[392.869, -31.114, 78.018]} rotation={[-2.97, 0.165, -1.832]}>
                          <group name="bUSH_16" position={[-33.501, 119.687, 29.221]}>
                            <mesh name="bUSH_16_World_ap_0" geometry={nodes.bUSH_16_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_19" position={[-3.801, 146.472, -176.274]}>
                            <mesh name="bUSH_3_19_World_ap_0" geometry={nodes.bUSH_3_19_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_14" position={[-46.114, 101.988, 125.039]} rotation={[0.277, 0.072, 0.039]}>
                            <mesh name="bUSH_4_14_World_ap_0" geometry={nodes.bUSH_4_14_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_6_8" position={[73.464, -397.04, 127.464]} rotation={[1.871, 0.441, -0.138]}>
                            <mesh name="bUSH_6_8_World_ap_0" geometry={nodes.bUSH_6_8_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_1_18" position={[-47.758, 56.531, 205.513]} rotation={[1.871, 0.441, -0.138]}>
                            <mesh name="bUSH_1_18_World_ap_0" geometry={nodes.bUSH_1_18_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Bush_7" position={[148.332, -31.114, 428.707]} rotation={[-0.798, 1.334, 2.122]}>
                          <group name="bUSH_1_19" position={[-60.81, 88.526, 195.025]}>
                            <mesh name="bUSH_1_19_World_ap_0" geometry={nodes.bUSH_1_19_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_17" position={[-25.117, 118.737, 0.552]} rotation={[0.05, 0.012, 0.009]}>
                            <mesh name="bUSH_17_World_ap_0" geometry={nodes.bUSH_17_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_2_6" position={[-68.863, 72.342, 272.007]}>
                            <mesh name="bUSH_2_6_World_ap_0" geometry={nodes.bUSH_2_6_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_20" position={[-10.585, 140.242, -129.184]}>
                            <mesh name="bUSH_3_20_World_ap_0" geometry={nodes.bUSH_3_20_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Tree_3_64" position={[-51.075, -41.268, -15.919]} rotation={[-0.805, 1.335, 2.129]}>
                          <group name="Tree_3_7_28_2" position={[32.176, -95.347, -4.849]} rotation={[0.025, -0.106, -0.017]}>
                            <mesh name="Tree_3_7_28_2_World_ap_0" geometry={nodes.Tree_3_7_28_2_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_6_29" position={[-214.491, 412.771, 664.851]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_6_29_World_ap_0" geometry={nodes.Tree_3_6_29_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_9_9" position={[-96.536, 29.175, 536.239]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_9_9_World_ap_0" geometry={nodes.Tree_3_9_9_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_10_9_4" position={[-115.676, 76.089, 581.944]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_10_9_4_World_ap_0" geometry={nodes.Tree_3_10_9_4_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_11_16" position={[-122.34, 122.894, 556.678]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_11_16_World_ap_0" geometry={nodes.Tree_3_11_16_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_12_9" position={[-23.022, -171.076, 404.639]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_12_9_World_ap_0" geometry={nodes.Tree_3_12_9_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_13_7" position={[-76.309, -82.173, 571.416]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_13_7_World_ap_0" geometry={nodes.Tree_3_13_7_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                      </group>
                      <group name="Garden_28" position={[-147.715, -46.994, -195.261]}>
                        <group name="Garden_29" position={[-225.432, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_29_World_ap_0" geometry={nodes.Garden_29_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_15" position={[-179.278, 0, 418.979]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_15_World_ap_0" geometry={nodes.Garden_1_15_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_16" position={[-175.052, 0, -215.348]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_16_World_ap_0" geometry={nodes.Garden_2_16_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_12" position={[527.086, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_12_World_ap_0" geometry={nodes.Garden_3_12_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_3_13" position={[-201.68, -48.053, -195.225]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_3_13_World_ap_0" geometry={nodes.Bench_3_13_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_25" position={[178.534, -47.056, 21.165]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_25_World_ap_0" geometry={nodes.Bench_25_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_24" position={[-45.421, -39.575, -82.374]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_1_24_World_ap_0" geometry={nodes.Bench_1_24_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_2_15" position={[-196.994, -48.053, -245.611]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_2_15_World_ap_0" geometry={nodes.Bench_2_15_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_4_9" position={[-201.68, -48.053, -292.553]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_4_9_World_ap_0" geometry={nodes.Bench_4_9_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_10_1" position={[558.714, 5.814, 86.838]} rotation={[Math.PI, 0, -Math.PI]}>
                      <group name="Hosuse_8" position={[-78.292, -78.692, 11.438]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Hosuse_8_World_ap_0" geometry={nodes.Hosuse_8_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_27" position={[1.901, -22.362, -74.237]} />
                      <group name="Bushes_36" position={[214.366, -41.068, 103.379]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Bed_2_36" position={[-175.31, -26.444, 44.851]} rotation={[0, Math.PI / 2, 0]}>
                          <mesh name="Bed_2_36_World_ap_0" geometry={nodes.Bed_2_36_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_29" position={[-217.925, -41.068, 146.021]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bush_1_13" position={[392.869, -31.114, 78.018]} rotation={[-2.97, 0.165, -1.832]}>
                          <group name="bUSH_18" position={[-33.501, 119.687, 29.221]}>
                            <mesh name="bUSH_18_World_ap_0" geometry={nodes.bUSH_18_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_21" position={[-3.801, 146.472, -176.274]}>
                            <mesh name="bUSH_3_21_World_ap_0" geometry={nodes.bUSH_3_21_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_15" position={[-46.114, 101.988, 125.039]} rotation={[0.277, 0.072, 0.039]}>
                            <mesh name="bUSH_4_15_World_ap_0" geometry={nodes.bUSH_4_15_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_6_9" position={[73.464, -397.04, 127.464]} rotation={[1.871, 0.441, -0.138]}>
                            <mesh name="bUSH_6_9_World_ap_0" geometry={nodes.bUSH_6_9_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Bush_8" position={[148.332, -31.114, 428.707]} rotation={[-0.798, 1.334, 2.122]}>
                          <group name="bUSH_1_20" position={[-60.81, 88.526, 195.025]}>
                            <mesh name="bUSH_1_20_World_ap_0" geometry={nodes.bUSH_1_20_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_19" position={[-25.117, 118.737, 0.552]} rotation={[0.05, 0.012, 0.009]}>
                            <mesh name="bUSH_19_World_ap_0" geometry={nodes.bUSH_19_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_2_7" position={[-68.863, 72.342, 272.007]}>
                            <mesh name="bUSH_2_7_World_ap_0" geometry={nodes.bUSH_2_7_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_22" position={[-10.585, 140.242, -129.184]}>
                            <mesh name="bUSH_3_22_World_ap_0" geometry={nodes.bUSH_3_22_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_16" position={[-39.674, 105.014, 102.073]} rotation={[0.05, 0.012, 0.009]}>
                            <mesh name="bUSH_4_16_World_ap_0" geometry={nodes.bUSH_4_16_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Tree_3_65_4" position={[-51.075, -41.268, -15.919]} rotation={[-0.805, 1.335, 2.129]}>
                          <group name="Tree_3_7_29_4" position={[32.176, -95.347, -4.849]} rotation={[0.025, -0.106, -0.017]}>
                            <mesh name="Tree_3_7_29_4_World_ap_0" geometry={nodes.Tree_3_7_29_4_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_6_30" position={[-214.491, 412.771, 664.851]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_6_30_World_ap_0" geometry={nodes.Tree_3_6_30_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_9_10" position={[-96.536, 29.175, 536.239]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_9_10_World_ap_0" geometry={nodes.Tree_3_9_10_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_10_10_5" position={[-115.676, 76.089, 581.944]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_10_10_5_World_ap_0" geometry={nodes.Tree_3_10_10_5_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_11_17_3" position={[-122.34, 122.894, 556.678]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_11_17_3_World_ap_0" geometry={nodes.Tree_3_11_17_3_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_12_10" position={[-23.022, -171.076, 404.639]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_12_10_World_ap_0" geometry={nodes.Tree_3_12_10_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_13_8" position={[-76.309, -82.173, 571.416]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_13_8_World_ap_0" geometry={nodes.Tree_3_13_8_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                      </group>
                      <group name="Garden_30" position={[-147.715, -46.994, -195.261]}>
                        <group name="Garden_31" position={[-225.432, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_31_World_ap_0" geometry={nodes.Garden_31_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_16" position={[-179.278, 0, 418.979]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_16_World_ap_0" geometry={nodes.Garden_1_16_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_17" position={[-175.052, 0, -215.348]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_17_World_ap_0" geometry={nodes.Garden_2_17_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_13" position={[527.086, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_13_World_ap_0" geometry={nodes.Garden_3_13_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_3_14" position={[-201.68, -48.053, -195.225]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_3_14_World_ap_0" geometry={nodes.Bench_3_14_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_26" position={[178.534, -47.056, 21.165]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_26_World_ap_0" geometry={nodes.Bench_26_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_25" position={[-45.422, -39.575, -82.374]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_1_25_World_ap_0" geometry={nodes.Bench_1_25_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_2_16" position={[-196.994, -48.053, -245.611]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_2_16_World_ap_0" geometry={nodes.Bench_2_16_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_4_10" position={[-201.68, -48.053, -292.553]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_4_10_World_ap_0" geometry={nodes.Bench_4_10_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                  </group>
                  <group name="Block_Suburbs_1" position={[-8526.167, 51.195, 2437.465]} rotation={[0, Math.PI / 2, 0]}>
                    <group name="Block_10_2_2" position={[-303.026, 5.814, 237.56]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Hosuse_9" position={[-78.292, -78.692, 11.438]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Hosuse_9_World_ap_0" geometry={nodes.Hosuse_9_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_28" position={[1.901, -22.362, -74.237]} />
                      <group name="Bushes_37" position={[214.366, -41.068, 103.379]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Bed_2_37" position={[-175.31, -26.443, 44.851]} rotation={[0, Math.PI / 2, 0]}>
                          <mesh name="Bed_2_37_World_ap_0" geometry={nodes.Bed_2_37_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_30" position={[-217.925, -41.068, 146.021]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bush_1_14" position={[392.869, -31.114, 78.018]} rotation={[-2.97, 0.165, -1.832]}>
                          <group name="bUSH_20" position={[-33.501, 119.687, 29.221]}>
                            <mesh name="bUSH_20_World_ap_0" geometry={nodes.bUSH_20_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_23" position={[-3.801, 146.472, -176.274]}>
                            <mesh name="bUSH_3_23_World_ap_0" geometry={nodes.bUSH_3_23_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_17" position={[-46.114, 101.988, 125.039]} rotation={[0.277, 0.072, 0.039]}>
                            <mesh name="bUSH_4_17_World_ap_0" geometry={nodes.bUSH_4_17_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_6_10" position={[73.464, -397.04, 127.464]} rotation={[1.871, 0.441, -0.138]}>
                            <mesh name="bUSH_6_10_World_ap_0" geometry={nodes.bUSH_6_10_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_1_21" position={[-47.758, 56.531, 205.513]} rotation={[1.871, 0.441, -0.138]}>
                            <mesh name="bUSH_1_21_World_ap_0" geometry={nodes.bUSH_1_21_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Bush_9" position={[148.332, -31.114, 428.707]} rotation={[-0.798, 1.334, 2.122]}>
                          <group name="bUSH_1_22" position={[-60.81, 88.526, 195.025]}>
                            <mesh name="bUSH_1_22_World_ap_0" geometry={nodes.bUSH_1_22_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_21" position={[-25.117, 118.737, 0.552]} rotation={[0.05, 0.012, 0.009]}>
                            <mesh name="bUSH_21_World_ap_0" geometry={nodes.bUSH_21_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_2_8" position={[-68.863, 72.342, 272.007]}>
                            <mesh name="bUSH_2_8_World_ap_0" geometry={nodes.bUSH_2_8_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_24" position={[-10.585, 140.242, -129.184]}>
                            <mesh name="bUSH_3_24_World_ap_0" geometry={nodes.bUSH_3_24_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_18" position={[-39.674, 105.014, 102.073]} rotation={[0.05, 0.012, 0.009]}>
                            <mesh name="bUSH_4_18_World_ap_0" geometry={nodes.bUSH_4_18_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Tree_3_66" position={[-51.075, -41.268, -15.919]} rotation={[-0.805, 1.335, 2.129]}>
                          <group name="Tree_3_7_30_3" position={[32.176, -95.347, -4.849]} rotation={[0.025, -0.106, -0.017]}>
                            <mesh name="Tree_3_7_30_3_World_ap_0" geometry={nodes.Tree_3_7_30_3_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_6_31" position={[-214.491, 412.771, 664.851]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_6_31_World_ap_0" geometry={nodes.Tree_3_6_31_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_9_11" position={[-96.536, 29.175, 536.239]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_9_11_World_ap_0" geometry={nodes.Tree_3_9_11_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_10_11" position={[-115.676, 76.089, 581.944]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_10_11_World_ap_0" geometry={nodes.Tree_3_10_11_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_11_18" position={[-122.34, 122.894, 556.678]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_11_18_World_ap_0" geometry={nodes.Tree_3_11_18_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_12_11" position={[-23.022, -171.076, 404.639]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_12_11_World_ap_0" geometry={nodes.Tree_3_12_11_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_13_9" position={[-76.309, -82.173, 571.416]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_13_9_World_ap_0" geometry={nodes.Tree_3_13_9_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                      </group>
                      <group name="Garden_32" position={[-147.715, -46.994, -195.261]}>
                        <group name="Garden_33" position={[-225.432, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_33_World_ap_0" geometry={nodes.Garden_33_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_17" position={[-179.278, 0, 418.979]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_17_World_ap_0" geometry={nodes.Garden_1_17_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_18" position={[-175.052, 0, -215.348]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_18_World_ap_0" geometry={nodes.Garden_2_18_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_14" position={[527.086, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_14_World_ap_0" geometry={nodes.Garden_3_14_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_3_15" position={[-201.68, -48.053, -195.225]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_3_15_World_ap_0" geometry={nodes.Bench_3_15_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_27" position={[178.534, -47.056, 21.165]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_27_World_ap_0" geometry={nodes.Bench_27_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_26" position={[-45.421, -39.575, -82.374]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_1_26_World_ap_0" geometry={nodes.Bench_1_26_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_2_17" position={[-196.994, -48.053, -245.611]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_2_17_World_ap_0" geometry={nodes.Bench_2_17_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_4_11" position={[-201.68, -48.053, -292.553]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_4_11_World_ap_0" geometry={nodes.Bench_4_11_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_6_2_2" position={[-381.03, -2.068, 955.576]} rotation={[-Math.PI, 0, -Math.PI]}>
                      <group name="Garden_34" position={[117.257, -39.112, -164.258]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Garden_35" position={[-203.317, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_35_World_ap_0" geometry={nodes.Garden_35_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_18" position={[-161.691, 0, 418.979]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_18_World_ap_0" geometry={nodes.Garden_1_18_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_19" position={[-157.879, 0, -215.348]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_19_World_ap_0" geometry={nodes.Garden_2_19_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_15" position={[490.754, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_15_World_ap_0" geometry={nodes.Garden_3_15_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="House_1_8" position={[-126.394, -55.638, -26.544]} rotation={[Math.PI / 2, 0, Math.PI]}>
                        <mesh name="House_1_8_World_ap_0" geometry={nodes.House_1_8_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_27" position={[-204.624, -48.47, -291.364]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_1_27_World_ap_0" geometry={nodes.Bench_1_27_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Sand_10" position={[104.681, -58.461, -182.862]} rotation={[0, Math.PI / 2, 0]}>
                        <mesh name="Sand_10_World_ap_0" geometry={nodes.Sand_10_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_29" position={[1.901, -22.362, -8.821]} />
                      <group name="Bushes_38" position={[158.255, -41.068, 202.169]}>
                        <group name="Tree_3_67" position={[53.508, -37.517, 47.264]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_67_World_ap_0" geometry={nodes.Tree_3_67_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_52" position={[131.358, -57.517, 47.264]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_52_World_ap_0" geometry={nodes.Tree_3_1_52_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_2_14" position={[222.077, -41.068, -189.38]} rotation={[0, 1.571, 0]}>
                        <group name="Tree_3_68" position={[57.139, -37.517, 70.5]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_68_World_ap_0" geometry={nodes.Tree_3_68_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_53" position={[136.946, -57.517, 62.398]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_53_World_ap_0" geometry={nodes.Tree_3_1_53_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_39" position={[137.424, -37.517, -29.565]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_2_39_World_ap_0" geometry={nodes.Tree_3_2_39_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3_26" position={[-440.551, -37.517, -271.188]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_3_26_World_ap_0" geometry={nodes.Tree_3_3_26_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_28" position={[-77.929, -37.517, 70.5]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_4_28_World_ap_0" geometry={nodes.Tree_3_4_28_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5_27" position={[140.045, -57.517, -472.571]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_5_27_World_ap_0" geometry={nodes.Tree_3_5_27_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_6_32" position={[145.691, -57.517, -116.13]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_6_32_World_ap_0" geometry={nodes.Tree_3_6_32_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_7_31" position={[-11.9, -37.517, 70.5]} rotation={[-2.958, 0.398, -1.875]}>
                          <mesh name="Tree_3_7_31_World_ap_0" geometry={nodes.Tree_3_7_31_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_8_22" position={[-22.134, -57.517, -492.912]} rotation={[-2.973, -0.005, -1.803]}>
                          <mesh name="Tree_3_8_22_World_ap_0" geometry={nodes.Tree_3_8_22_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_31" position={[-160.479, -41.068, 213.515]}>
                        <group name="Tree_3_69" position={[-46.431, -37.517, 47.184]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_69_World_ap_0" geometry={nodes.Tree_3_69_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_54" position={[31.419, -57.517, 47.184]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_54_World_ap_0" geometry={nodes.Tree_3_1_54_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_28" position={[-205.874, -48.47, -211.119]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_28_World_ap_0" geometry={nodes.Bench_28_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_6_3_2" position={[1115.307, -2.068, -558.113]}>
                      <group name="Garden_36" position={[79.625, -39.112, -164.258]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Garden_37" position={[-203.317, 0, -225.092]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_37_World_ap_0" geometry={nodes.Garden_37_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_19" position={[-161.691, 0, 391.026]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_19_World_ap_0" geometry={nodes.Garden_1_19_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_20" position={[-157.879, 0, -366.697]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_20_World_ap_0" geometry={nodes.Garden_2_20_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_16" position={[490.754, 0, -225.092]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_16_World_ap_0" geometry={nodes.Garden_3_16_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="House_1_9" position={[-126.394, -55.638, -26.544]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                        <mesh name="House_1_9_World_ap_0" geometry={nodes.House_1_9_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_28" position={[-204.624, -48.47, -291.364]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_1_28_World_ap_0" geometry={nodes.Bench_1_28_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Sand_11" position={[104.681, -58.461, -182.862]} rotation={[0, Math.PI / 2, 0]}>
                        <mesh name="Sand_11_World_ap_0" geometry={nodes.Sand_11_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_30" position={[1.901, -22.362, -8.821]} />
                      <group name="Bushes_39" position={[158.255, -41.068, 202.169]}>
                        <group name="Tree_3_70" position={[53.508, -37.517, 47.264]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_70_World_ap_0" geometry={nodes.Tree_3_70_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_55" position={[131.358, -57.517, 47.264]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_55_World_ap_0" geometry={nodes.Tree_3_1_55_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_2_15" position={[222.077, -41.068, -189.38]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Tree_3_71" position={[57.139, -37.517, 185.37]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_71_World_ap_0" geometry={nodes.Tree_3_71_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_56" position={[-448.398, -57.517, 171.643]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_56_World_ap_0" geometry={nodes.Tree_3_1_56_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_40" position={[-497.808, -24.167, -114.508]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_2_40_World_ap_0" geometry={nodes.Tree_3_2_40_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3_27" position={[-440.551, -37.517, -271.188]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_3_27_World_ap_0" geometry={nodes.Tree_3_3_27_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_29" position={[-77.929, -37.517, 165.972]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_4_29_World_ap_0" geometry={nodes.Tree_3_4_29_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5_28" position={[140.045, -57.517, -472.571]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_5_28_World_ap_0" geometry={nodes.Tree_3_5_28_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_6_33" position={[145.691, -57.517, -116.13]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_6_33_World_ap_0" geometry={nodes.Tree_3_6_33_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_7_32" position={[-11.9, -37.517, 110.443]} rotation={[-2.958, 0.398, -1.875]}>
                          <mesh name="Tree_3_7_32_World_ap_0" geometry={nodes.Tree_3_7_32_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_8_23" position={[-22.134, -57.517, -492.912]} rotation={[-2.973, -0.005, -1.803]}>
                          <mesh name="Tree_3_8_23_World_ap_0" geometry={nodes.Tree_3_8_23_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_32" position={[-160.479, -41.068, 213.515]}>
                        <group name="Tree_3_72_3" position={[-46.431, -37.517, 47.184]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_72_3_World_ap_0" geometry={nodes.Tree_3_72_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_57" position={[31.419, -57.517, 47.184]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_57_World_ap_0" geometry={nodes.Tree_3_1_57_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_29" position={[-205.874, -48.47, -211.119]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_29_World_ap_0" geometry={nodes.Bench_29_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_6_1_2" position={[-1732.668, -2.068, 2266.699]} rotation={[-Math.PI, 0, -Math.PI]}>
                      <group name="Garden_38" position={[25.211, -39.112, -164.258]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Garden_39" position={[-199.722, 0, -96.27]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_39_World_ap_0" geometry={nodes.Garden_39_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_20" position={[-158.832, 0, 416.871]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_20_World_ap_0" geometry={nodes.Garden_1_20_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_21" position={[-155.088, 0, -214.265]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_21_World_ap_0" geometry={nodes.Garden_2_21_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_17" position={[466.975, 0, -96.27]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_17_World_ap_0" geometry={nodes.Garden_3_17_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="House_1_10" position={[-198.273, -55.638, -60.152]} rotation={[Math.PI / 2, 0, Math.PI]}>
                        <mesh name="House_1_10_World_ap_0" geometry={nodes.House_1_10_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_29" position={[-43.339, -51.816, -63.397]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_1_29_World_ap_0" geometry={nodes.Bench_1_29_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_31" position={[1.901, -22.362, -8.821]} />
                      <group name="Bushes_40" position={[158.255, -41.068, 202.169]}>
                        <group name="Tree_3_73_3" position={[53.508, -37.517, 47.264]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_73_3_World_ap_0" geometry={nodes.Tree_3_73_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_58_3" position={[-44.177, -57.517, 47.264]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_58_3_World_ap_0" geometry={nodes.Tree_3_1_58_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_41" position={[-548.284, -60.749, -409.786]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_2_41_World_ap_0" geometry={nodes.Tree_3_2_41_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_2_16" position={[222.077, -41.068, -189.38]} rotation={[0, 1.571, 0]}>
                        <group name="Tree_3_74" position={[20.883, -37.517, -30.542]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_74_World_ap_0" geometry={nodes.Tree_3_74_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_59_3" position={[94.456, -57.517, -38.643]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_59_3_World_ap_0" geometry={nodes.Tree_3_1_59_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_42" position={[-387.151, -37.517, -62.121]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_2_42_World_ap_0" geometry={nodes.Tree_3_2_42_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3_28" position={[-440.551, -37.517, -271.188]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_3_28_World_ap_0" geometry={nodes.Tree_3_3_28_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_30" position={[-109.672, -50.222, -30.542]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_4_30_World_ap_0" geometry={nodes.Tree_3_4_30_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5_29" position={[100.85, -63.329, -366.857]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_5_29_World_ap_0" geometry={nodes.Tree_3_5_29_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_6_34" position={[135.838, -57.517, -116.13]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_6_34_World_ap_0" geometry={nodes.Tree_3_6_34_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_7_33_3" position={[127.26, -63.329, -553.006]} rotation={[-0.185, -0.414, 1.263]}>
                          <mesh name="Tree_3_7_33_3_World_ap_0" geometry={nodes.Tree_3_7_33_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_33" position={[-160.479, -41.068, 213.515]}>
                        <group name="Tree_3_75" position={[-46.431, -64.743, 47.184]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_75_World_ap_0" geometry={nodes.Tree_3_75_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_60" position={[31.419, -57.517, 47.184]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_60_World_ap_0" geometry={nodes.Tree_3_1_60_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_43" position={[-200.95, -37.517, 47.184]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_2_43_World_ap_0" geometry={nodes.Tree_3_2_43_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_30" position={[-43.34, -51.816, -149.14]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_30_World_ap_0" geometry={nodes.Bench_30_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_6_2_3" position={[1230.822, -2.068, 159.561]}>
                      <group name="Garden_40" position={[77.798, -39.112, -164.258]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Garden_41" position={[-215.872, 0, -116.108]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_41_World_ap_0" geometry={nodes.Garden_41_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_21" position={[-171.676, 0, 502.775]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_21_World_ap_0" geometry={nodes.Garden_1_21_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_22" position={[-167.629, 0, -258.418]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_22_World_ap_0" geometry={nodes.Garden_2_22_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_18" position={[504.734, 0, -116.108]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_18_World_ap_0" geometry={nodes.Garden_3_18_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="House_1_11" position={[-220.584, -55.638, -8.457]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                        <mesh name="House_1_11_World_ap_0" geometry={nodes.House_1_11_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_30" position={[-43.339, -51.816, -63.397]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_1_30_World_ap_0" geometry={nodes.Bench_1_30_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_32" position={[1.901, -22.362, -8.821]} />
                      <group name="Bushes_41" position={[158.255, -41.068, 202.169]}>
                        <group name="Tree_3_76" position={[53.508, -37.517, 47.264]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_76_World_ap_0" geometry={nodes.Tree_3_76_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_61" position={[131.358, -57.517, 47.264]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_61_World_ap_0" geometry={nodes.Tree_3_1_61_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_44" position={[-531.657, -38.968, -447.577]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_2_44_World_ap_0" geometry={nodes.Tree_3_2_44_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_2_17" position={[222.077, -41.068, -189.38]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Tree_3_77" position={[20.883, -37.517, 70.5]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_77_World_ap_0" geometry={nodes.Tree_3_77_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_62" position={[94.456, -57.517, 62.398]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_62_World_ap_0" geometry={nodes.Tree_3_1_62_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_45" position={[-387.151, -37.517, 38.92]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_2_45_World_ap_0" geometry={nodes.Tree_3_2_45_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_3_29" position={[-440.551, -37.517, -271.188]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_3_29_World_ap_0" geometry={nodes.Tree_3_3_29_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_4_31" position={[-109.672, -37.517, 70.5]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_4_31_World_ap_0" geometry={nodes.Tree_3_4_31_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_5_30" position={[100.85, -63.329, -366.857]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_5_30_World_ap_0" geometry={nodes.Tree_3_5_30_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_6_35" position={[135.838, -57.517, -116.13]} rotation={[-2.298, -1.344, -0.973]}>
                          <mesh name="Tree_3_6_35_World_ap_0" geometry={nodes.Tree_3_6_35_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_7_34" position={[127.26, -63.329, -553.006]} rotation={[-0.185, -0.414, 1.263]}>
                          <mesh name="Tree_3_7_34_World_ap_0" geometry={nodes.Tree_3_7_34_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_34" position={[-160.479, -41.068, 213.515]}>
                        <group name="Tree_3_78" position={[-46.431, -37.517, 47.184]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_78_World_ap_0" geometry={nodes.Tree_3_78_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_1_63_3" position={[31.419, -57.517, 47.184]} rotation={[-0.17, -0.107, 1.32]}>
                          <mesh name="Tree_3_1_63_3_World_ap_0" geometry={nodes.Tree_3_1_63_3_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Tree_3_2_46" position={[-200.95, -37.517, 47.184]} rotation={[-0.805, 1.335, 2.129]}>
                          <mesh name="Tree_3_2_46_World_ap_0" geometry={nodes.Tree_3_2_46_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_31" position={[-43.339, -51.816, -149.14]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_31_World_ap_0" geometry={nodes.Bench_31_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_10_1_2" position={[389.423, 5.814, 894.417]} rotation={[-Math.PI, 0, -Math.PI]}>
                      <group name="Hosuse_10" position={[122.969, -78.692, 11.438]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Hosuse_10_World_ap_0" geometry={nodes.Hosuse_10_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_33" position={[1.901, -22.362, -74.237]} />
                      <group name="Bushes_42" position={[214.366, -41.068, 103.379]} rotation={[0, -Math.PI / 2, 0]} />
                      <group name="Bushes_1_35" position={[-217.925, -41.068, 146.021]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bush_1_15" position={[392.869, -31.114, 78.018]} rotation={[-2.97, 0.165, -1.832]}>
                          <group name="bUSH_22" position={[-25.744, 90.663, 24.227]}>
                            <mesh name="bUSH_22_World_ap_0" geometry={nodes.bUSH_22_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_25" position={[-3.801, 146.472, -176.274]}>
                            <mesh name="bUSH_3_25_World_ap_0" geometry={nodes.bUSH_3_25_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_19" position={[-65.522, 150.961, 132.666]} rotation={[0.277, 0.072, 0.039]}>
                            <mesh name="bUSH_4_19_World_ap_0" geometry={nodes.bUSH_4_19_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_6_11" position={[103.543, -435.736, -69.563]} rotation={[-0.009, -0.002, -0.002]}>
                            <mesh name="bUSH_6_11_World_ap_0" geometry={nodes.bUSH_6_11_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_1_23" position={[-47.758, 56.531, 205.513]} rotation={[1.871, 0.441, -0.138]}>
                            <mesh name="bUSH_1_23_World_ap_0" geometry={nodes.bUSH_1_23_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Bush_10" position={[148.332, -31.114, 428.707]} rotation={[-0.798, 1.334, 2.122]}>
                          <group name="bUSH_1_24" position={[-63.881, 57.21, 188.188]}>
                            <mesh name="bUSH_1_24_World_ap_0" geometry={nodes.bUSH_1_24_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_23" position={[-42.544, 114.605, -2.506]} rotation={[0.05, 0.012, 0.009]}>
                            <mesh name="bUSH_23_World_ap_0" geometry={nodes.bUSH_23_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_2_9" position={[-94.24, 32.902, 459.643]} rotation={[0.381, 0.101, 0.049]}>
                            <mesh name="bUSH_2_9_World_ap_0" geometry={nodes.bUSH_2_9_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_26" position={[-10.585, 140.242, -129.184]}>
                            <mesh name="bUSH_3_26_World_ap_0" geometry={nodes.bUSH_3_26_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_20" position={[-39.674, 105.014, 102.073]} rotation={[0.05, 0.012, 0.009]}>
                            <mesh name="bUSH_4_20_World_ap_0" geometry={nodes.bUSH_4_20_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                      </group>
                      <group name="Garden_42" position={[-152.126, -46.994, -195.261]}>
                        <group name="Garden_43" position={[-237.459, 0, -127.81]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_43_World_ap_0" geometry={nodes.Garden_43_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_22" position={[-188.843, 0, 491.073]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_22_World_ap_0" geometry={nodes.Garden_1_22_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_23" position={[-184.391, 0, -270.12]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_23_World_ap_0" geometry={nodes.Garden_2_23_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_19" position={[555.207, 0, -130.89]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_19_World_ap_0" geometry={nodes.Garden_3_19_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_32" position={[-282.182, -47.056, 14.24]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_32_World_ap_0" geometry={nodes.Bench_32_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_31" position={[-45.422, -38.523, -46.605]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_1_31_World_ap_0" geometry={nodes.Bench_1_31_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_10_2_3" position={[1117.685, 5.814, 908.694]} rotation={[0, -Math.PI / 2, 0]}>
                      <group name="Hosuse_11" position={[122.969, -78.692, 11.438]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Hosuse_11_World_ap_0" geometry={nodes.Hosuse_11_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_34" position={[1.901, -22.362, -74.237]} />
                      <group name="Bushes_43" position={[214.366, -41.068, 103.379]} rotation={[0, -1.571, 0]} />
                      <group name="Bushes_1_36" position={[-217.925, -41.068, 146.021]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bush_1_16" position={[392.869, -31.114, 78.018]} rotation={[-2.97, 0.165, -1.832]}>
                          <group name="bUSH_24" position={[-25.744, 90.663, 24.227]}>
                            <mesh name="bUSH_24_World_ap_0" geometry={nodes.bUSH_24_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_27" position={[-3.801, 146.472, -176.274]}>
                            <mesh name="bUSH_3_27_World_ap_0" geometry={nodes.bUSH_3_27_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_21" position={[-65.522, 150.961, 132.666]} rotation={[0.277, 0.072, 0.039]}>
                            <mesh name="bUSH_4_21_World_ap_0" geometry={nodes.bUSH_4_21_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_6_12" position={[103.543, -435.736, -69.563]} rotation={[-0.009, -0.002, -0.002]}>
                            <mesh name="bUSH_6_12_World_ap_0" geometry={nodes.bUSH_6_12_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_1_25" position={[-47.758, 56.531, 205.513]} rotation={[1.871, 0.441, -0.138]}>
                            <mesh name="bUSH_1_25_World_ap_0" geometry={nodes.bUSH_1_25_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Bush_11" position={[148.332, -31.114, 428.707]} rotation={[-0.798, 1.334, 2.122]}>
                          <group name="bUSH_1_26" position={[-63.881, 57.21, 188.188]}>
                            <mesh name="bUSH_1_26_World_ap_0" geometry={nodes.bUSH_1_26_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_25" position={[-42.544, 114.605, -2.506]} rotation={[0.05, 0.012, 0.009]}>
                            <mesh name="bUSH_25_World_ap_0" geometry={nodes.bUSH_25_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_2_10" position={[-94.24, 32.902, 459.643]} rotation={[0.381, 0.101, 0.049]}>
                            <mesh name="bUSH_2_10_World_ap_0" geometry={nodes.bUSH_2_10_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_28" position={[-10.585, 140.242, -129.184]}>
                            <mesh name="bUSH_3_28_World_ap_0" geometry={nodes.bUSH_3_28_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_22" position={[-39.674, 105.014, 102.073]} rotation={[0.05, 0.012, 0.009]}>
                            <mesh name="bUSH_4_22_World_ap_0" geometry={nodes.bUSH_4_22_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                       
                      </group>
                      <group name="Garden_44" position={[-152.126, -46.994, -195.261]}>
                        <group name="Garden_45" position={[-237.459, 0, -127.81]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_45_World_ap_0" geometry={nodes.Garden_45_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_23" position={[-188.843, 0, 491.073]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_23_World_ap_0" geometry={nodes.Garden_1_23_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_24" position={[-184.391, 0, -270.12]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_24_World_ap_0" geometry={nodes.Garden_2_24_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_20" position={[555.207, 0, -130.89]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_20_World_ap_0" geometry={nodes.Garden_3_20_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_33" position={[-282.182, -47.056, 14.24]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_33_World_ap_0" geometry={nodes.Bench_33_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_32" position={[-45.421, -38.523, -46.605]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_1_32_World_ap_0" geometry={nodes.Bench_1_32_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                  </group>
                  <group name="Block_Suburbs" position={[-8699.021, 51.195, -938.126]}>
                    <group name="Block_10_3_2" position={[63.094, 5.814, 39.769]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Hosuse_12" position={[-78.292, -78.692, 11.438]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Hosuse_12_World_ap_0" geometry={nodes.Hosuse_12_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_35" position={[1.901, -22.362, -74.237]} />
                      <group name="Bushes_44" position={[214.366, -41.068, 103.379]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Bed_2_38" position={[-307.02, -25.092, 44.851]} rotation={[0, Math.PI / 2, 0]}>
                          <mesh name="Bed_2_38_World_ap_0" geometry={nodes.Bed_2_38_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_37" position={[-217.925, -41.068, 146.021]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bush_1_17" position={[392.869, -31.114, 78.018]} rotation={[-2.97, 0.165, -1.832]}>
                          <group name="bUSH_26" position={[-33.501, 119.687, 29.221]}>
                            <mesh name="bUSH_26_World_ap_0" geometry={nodes.bUSH_26_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_29" position={[-3.801, 146.472, -176.274]}>
                            <mesh name="bUSH_3_29_World_ap_0" geometry={nodes.bUSH_3_29_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_23" position={[-46.114, 101.988, 125.039]} rotation={[0.277, 0.072, 0.039]}>
                            <mesh name="bUSH_4_23_World_ap_0" geometry={nodes.bUSH_4_23_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_6_13" position={[73.464, -397.04, 127.464]} rotation={[1.871, 0.441, -0.138]}>
                            <mesh name="bUSH_6_13_World_ap_0" geometry={nodes.bUSH_6_13_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_1_27" position={[-47.758, 56.531, 205.513]} rotation={[1.871, 0.441, -0.138]}>
                            <mesh name="bUSH_1_27_World_ap_0" geometry={nodes.bUSH_1_27_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Bush_12" position={[148.332, -31.114, 428.707]} rotation={[-0.798, 1.334, 2.122]}>
                          <group name="bUSH_1_28" position={[-60.81, 88.526, 195.025]}>
                            <mesh name="bUSH_1_28_World_ap_0" geometry={nodes.bUSH_1_28_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_27" position={[-25.117, 118.737, 0.552]} rotation={[0.05, 0.012, 0.009]}>
                            <mesh name="bUSH_27_World_ap_0" geometry={nodes.bUSH_27_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_2_11" position={[-68.863, 72.342, 272.007]}>
                            <mesh name="bUSH_2_11_World_ap_0" geometry={nodes.bUSH_2_11_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_30" position={[-10.585, 140.242, -129.184]}>
                            <mesh name="bUSH_3_30_World_ap_0" geometry={nodes.bUSH_3_30_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_24" position={[-39.674, 105.014, 102.073]} rotation={[0.05, 0.012, 0.009]}>
                            <mesh name="bUSH_4_24_World_ap_0" geometry={nodes.bUSH_4_24_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        
                      </group>
                      <group name="Garden_46" position={[-147.715, -46.994, -195.261]}>
                        <group name="Garden_47" position={[-225.432, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_47_World_ap_0" geometry={nodes.Garden_47_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_24" position={[-179.278, 0, 418.979]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_24_World_ap_0" geometry={nodes.Garden_1_24_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_25" position={[-175.052, 0, -215.348]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_25_World_ap_0" geometry={nodes.Garden_2_25_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_21" position={[527.086, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_21_World_ap_0" geometry={nodes.Garden_3_21_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_3_16" position={[-201.68, -48.053, -195.225]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_3_16_World_ap_0" geometry={nodes.Bench_3_16_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_34" position={[178.534, -47.056, 21.165]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_34_World_ap_0" geometry={nodes.Bench_34_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_33" position={[-45.421, -39.575, -82.374]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_1_33_World_ap_0" geometry={nodes.Bench_1_33_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_2_18" position={[-196.994, -48.053, -245.611]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_2_18_World_ap_0" geometry={nodes.Bench_2_18_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_4_12" position={[-201.68, -48.053, -292.553]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_4_12_World_ap_0" geometry={nodes.Bench_4_12_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_9_2_2" position={[46.634, -4.586, -862.108]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Hosuse_13" position={[35.154, -70.746, 32.59]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Hosuse_13_World_ap_0" geometry={nodes.Hosuse_13_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Sand_12" position={[-272.394, -59.999, 12.82]} rotation={[-Math.PI, 0, Math.PI]}>
                        <mesh name="Sand_12_World_ap_0" geometry={nodes.Sand_12_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_36" position={[1.901, -22.362, -74.237]} />
                      <group name="Bushes_45" position={[214.366, -41.068, 103.379]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Bed_2_39" position={[-238.576, -15.624, 109.234]} rotation={[0, Math.PI / 2, 0]}>
                          <mesh name="Bed_2_39_World_ap_0" geometry={nodes.Bed_2_39_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_38" position={[-200.293, -41.068, 98.764]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bush_1_18" position={[357.153, -28.285, 70.925]} rotation={[-2.97, 0.165, -1.832]}>
                          <group name="bUSH_7_6" position={[46.117, -114.564, -108.061]} rotation={[-3.022, 0.319, -0.485]}>
                            <mesh name="bUSH_7_6_World_ap_0" geometry={nodes.bUSH_7_6_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_28" position={[-24.85, 87.834, 22.956]}>
                            <mesh name="bUSH_28_World_ap_0" geometry={nodes.bUSH_28_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_31" position={[-1.661, 87.344, -108.569]}>
                            <mesh name="bUSH_3_31_World_ap_0" geometry={nodes.bUSH_3_31_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_25" position={[-36.141, 71.087, 109.95]} rotation={[0.277, 0.072, 0.039]}>
                            <mesh name="bUSH_4_25_World_ap_0" geometry={nodes.bUSH_4_25_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_6_14" position={[-13.457, -129.048, 251.107]} rotation={[1.54, 0.399, -0.054]}>
                            <mesh name="bUSH_6_14_World_ap_0" geometry={nodes.bUSH_6_14_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_1_29" position={[-46.696, 33.209, 221.305]} rotation={[1.54, 0.399, -0.054]}>
                            <mesh name="bUSH_1_29_World_ap_0" geometry={nodes.bUSH_1_29_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Bush_13" position={[134.848, -28.285, 389.733]} rotation={[-0.798, 1.334, 2.122]}>
                          <group name="bUSH_1_30" position={[-46.012, -15.705, 283.506]}>
                            <mesh name="bUSH_1_30_World_ap_0" geometry={nodes.bUSH_1_30_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_29" position={[-18.908, 65.601, 19.13]}>
                            <mesh name="bUSH_29_World_ap_0" geometry={nodes.bUSH_29_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_2_12" position={[-49.615, -29.413, 322.572]}>
                            <mesh name="bUSH_2_12_World_ap_0" geometry={nodes.bUSH_2_12_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_32" position={[5.903, 59.042, -113.439]}>
                            <mesh name="bUSH_3_32_World_ap_0" geometry={nodes.bUSH_3_32_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_26" position={[-15.019, 26.852, 49.325]}>
                            <mesh name="bUSH_4_26_World_ap_0" geometry={nodes.bUSH_4_26_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                      </group>
                      <group name="Jump_desk_5" position={[-277.434, -29.688, -104.164]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                        <mesh name="Jump_desk_5_World_ap_0" geometry={nodes.Jump_desk_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Garden_48" position={[-191.805, -46.994, -214.715]}>
                        <group name="Garden_5_6" position={[578.355, 0, -141.136]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_5_6_World_ap_0" geometry={nodes.Garden_5_6_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_49" position={[-230.362, 0, -141.137]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_49_World_ap_0" geometry={nodes.Garden_49_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_25" position={[-173.997, 0, 456.683]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_25_World_ap_0" geometry={nodes.Garden_1_25_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_26" position={[-173.997, 0, -174.41]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_26_World_ap_0" geometry={nodes.Garden_2_26_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_3_17" position={[229.937, -49.672, -173.026]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                        <mesh name="Bench_3_17_World_ap_0" geometry={nodes.Bench_3_17_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_35" position={[98.944, -36.309, -12.976]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_35_World_ap_0" geometry={nodes.Bench_35_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_34" position={[-208.426, -47.787, -257.165]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_1_34_World_ap_0" geometry={nodes.Bench_1_34_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_2_19" position={[-208.426, -57.775, -304.781]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_2_19_World_ap_0" geometry={nodes.Bench_2_19_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_4_13" position={[-208.426, -57.775, -209.305]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_4_13_World_ap_0" geometry={nodes.Bench_4_13_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_6_3_3" position={[1114.54, -2.068, 757.785]} rotation={[Math.PI, 0, Math.PI]}>
                      <group name="Garden_50" position={[183.689, -39.112, -164.258]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Garden_51" position={[-203.317, 0, -120.709]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_51_World_ap_0" geometry={nodes.Garden_51_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_26" position={[-161.691, 0, 522.699]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_26_World_ap_0" geometry={nodes.Garden_1_26_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_27" position={[-157.879, 0, -268.659]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_27_World_ap_0" geometry={nodes.Garden_2_27_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_22" position={[490.754, 0, -120.709]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_22_World_ap_0" geometry={nodes.Garden_3_22_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="House_1_12" position={[-126.394, -55.638, -26.544]} rotation={[Math.PI / 2, 0, Math.PI]}>
                        <mesh name="House_1_12_World_ap_0" geometry={nodes.House_1_12_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_35" position={[-204.624, -48.47, -291.364]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_1_35_World_ap_0" geometry={nodes.Bench_1_35_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Sand_13" position={[104.681, -58.461, -182.862]} rotation={[0, Math.PI / 2, 0]}>
                        <mesh name="Sand_13_World_ap_0" geometry={nodes.Sand_13_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_37" position={[1.901, -22.362, -8.821]} />
                      <group name="Bench_36" position={[-205.874, -48.47, -211.119]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_36_World_ap_0" geometry={nodes.Bench_36_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_6_3_4" position={[-14.91, -2.068, 757.785]} rotation={[-Math.PI, 0, Math.PI]}>
                      <group name="Garden_52" position={[117.257, -39.112, -164.258]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Garden_53" position={[-203.317, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_53_World_ap_0" geometry={nodes.Garden_53_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_27" position={[-161.691, 0, 418.979]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_27_World_ap_0" geometry={nodes.Garden_1_27_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_28" position={[-157.879, 0, -215.348]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_28_World_ap_0" geometry={nodes.Garden_2_28_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_23" position={[490.754, 0, -96.757]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_23_World_ap_0" geometry={nodes.Garden_3_23_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="House_1_13" position={[-126.394, -55.638, -26.544]} rotation={[Math.PI / 2, 0, Math.PI]}>
                        <mesh name="House_1_13_World_ap_0" geometry={nodes.House_1_13_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_36" position={[-204.624, -48.47, -291.364]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_1_36_World_ap_0" geometry={nodes.Bench_1_36_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Sand_14" position={[104.681, -58.461, -182.862]} rotation={[0, Math.PI / 2, 0]}>
                        <mesh name="Sand_14_World_ap_0" geometry={nodes.Sand_14_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_38" position={[1.901, -22.362, -8.821]} />
                    
                      <group name="Bench_37" position={[-205.874, -48.47, -211.119]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_37_World_ap_0" geometry={nodes.Bench_37_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_6_2_4" position={[999.024, -2.068, 40.11]} rotation={[Math.PI, 0, -Math.PI]}>
                      <group name="Garden_54" position={[77.798, -39.112, -164.258]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Garden_55" position={[-215.872, 0, -116.108]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_55_World_ap_0" geometry={nodes.Garden_55_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_28" position={[-171.676, 0, 502.775]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_28_World_ap_0" geometry={nodes.Garden_1_28_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_29" position={[-167.628, 0, -258.418]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_29_World_ap_0" geometry={nodes.Garden_2_29_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_24" position={[504.734, 0, -116.108]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_24_World_ap_0" geometry={nodes.Garden_3_24_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="House_1_14" position={[-220.584, -55.638, 21.543]} rotation={[Math.PI / 2, 0, Math.PI]}>
                        <mesh name="House_1_14_World_ap_0" geometry={nodes.House_1_14_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_37" position={[-43.339, -51.816, -63.397]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_1_37_World_ap_0" geometry={nodes.Bench_1_37_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_39" position={[1.901, -22.362, -8.821]} />
                      
                      <group name="Bench_38" position={[-43.339, -51.816, -149.14]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Bench_38_World_ap_0" geometry={nodes.Bench_38_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_10_2_4" position={[1084.477, 5.814, -819.292]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Hosuse_14" position={[122.969, -78.692, 11.438]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Hosuse_14_World_ap_0" geometry={nodes.Hosuse_14_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_40" position={[1.901, -22.362, -74.237]} />
                      <group name="Bushes_49" position={[214.366, -41.068, 103.379]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Bed_2_40" position={[-307.02, -25.092, 40.385]} rotation={[0, Math.PI / 2, 0]}>
                          <mesh name="Bed_2_40_World_ap_0" geometry={nodes.Bed_2_40_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      
                      <group name="Garden_56" position={[-152.126, -46.994, -195.261]}>
                        <group name="Garden_57" position={[-237.459, 0, -127.81]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_57_World_ap_0" geometry={nodes.Garden_57_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_29" position={[-188.843, 0, 491.073]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_29_World_ap_0" geometry={nodes.Garden_1_29_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_30" position={[-184.391, 0, -270.12]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_30_World_ap_0" geometry={nodes.Garden_2_30_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_25" position={[555.207, 0, -130.89]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_25_World_ap_0" geometry={nodes.Garden_3_25_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_39" position={[-282.182, -47.056, 14.24]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_39_World_ap_0" geometry={nodes.Bench_39_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_38" position={[-45.421, -38.523, -46.605]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_1_38_World_ap_0" geometry={nodes.Bench_1_38_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                  </group>
                  <group name="Roads_Block_1_3" position={[-5414.577, -15.216, 1977.061]}>
                    <group name="Roa_Small_2_2" position={[-799.646, -0.323, -0.016]} rotation={[Math.PI, 0, Math.PI]}>
                      <mesh name="Roa_Small_2_2_World_ap_0" geometry={nodes.Roa_Small_2_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_BIG" position={[-16.351, -35.992, -9.517]}>
                      <mesh name="Road_BIG_World_ap_0" geometry={nodes.Road_BIG_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_6_5" position={[-887.299, 0, -1470.599]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_6_5_World_ap_0" geometry={nodes.Road_1_6_5_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_5_7" position={[-298.557, 0, -1470.593]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_5_7_World_ap_0" geometry={nodes.Road_1_5_7_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_2_2" position={[293.901, 0, -1470.593]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_2_2_World_ap_0" geometry={nodes.Road_2_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_4_8" position={[881.963, 0, -1470.577]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_4_8_World_ap_0" geometry={nodes.Road_1_4_8_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_3_1" position={[1467.31, 0, -1467.336]}>
                      <mesh name="Road_3_1_World_ap_0" geometry={nodes.Road_3_1_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_3_7" position={[881.329, 0, 1470.655]} rotation={[0, -Math.PI / 2, 0]}>
                      <mesh name="Road_1_3_7_World_ap_0" geometry={nodes.Road_1_3_7_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_2_1" position={[-294.068, 0, 1470.655]} rotation={[0, -Math.PI / 2, 0]}>
                      <mesh name="Road_2_1_World_ap_0" geometry={nodes.Road_2_1_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_1_6" position={[-882.163, 0, 1470.655]} rotation={[0, -Math.PI / 2, 0]}>
                      <mesh name="Road_1_1_6_World_ap_0" geometry={nodes.Road_1_1_6_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_3" position={[1469.394, 0, 1470.654]}>
                      <mesh name="Road_3_World_ap_0" geometry={nodes.Road_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_6_6" position={[1470.242, 0, 883.133]}>
                      <mesh name="Road_1_6_6_World_ap_0" geometry={nodes.Road_1_6_6_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_2_2_2" position={[1470.242, 0, 294.234]}>
                      <mesh name="Road_2_2_2_World_ap_0" geometry={nodes.Road_2_2_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_7_3" position={[1470.239, 0, -294.452]}>
                      <mesh name="Road_1_7_3_World_ap_0" geometry={nodes.Road_1_7_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_8_3" position={[1470.025, 0, -882.517]}>
                      <mesh name="Road_1_8_3_World_ap_0" geometry={nodes.Road_1_8_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_7_4" position={[-1469.428, 0, 1470.655]} rotation={[0, -Math.PI / 2, 0]}>
                      <mesh name="Road_1_7_4_World_ap_0" geometry={nodes.Road_1_7_4_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_2_7" position={[294.376, 0, 1470.655]} rotation={[0, -Math.PI / 2, 0]}>
                      <mesh name="Road_1_2_7_World_ap_0" geometry={nodes.Road_1_2_7_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Roa_Small_1_2" position={[228.807, -0.323, -0.016]} rotation={[Math.PI, 0, -Math.PI]}>
                      <mesh name="Roa_Small_1_2_World_ap_0" geometry={nodes.Roa_Small_1_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Roa_Small_2_3" position={[-134.72, -0.323, 393.149]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Roa_Small_2_3_World_ap_0" geometry={nodes.Roa_Small_2_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_9_3" position={[-2054.788, 0, -1470.599]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_9_3_World_ap_0" geometry={nodes.Road_1_9_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_10_4" position={[-2627.032, 0, -1470.599]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_10_4_World_ap_0" geometry={nodes.Road_1_10_4_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_11_2" position={[-3185.74, 0, -1470.599]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_11_2_World_ap_0" geometry={nodes.Road_1_11_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_12" position={[-3750.102, 0, -1470.599]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_12_World_ap_0" geometry={nodes.Road_1_12_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_13" position={[-4303.044, 0, -1470.599]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_13_World_ap_0" geometry={nodes.Road_1_13_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_14" position={[-4875.218, 0, -1470.599]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_14_World_ap_0" geometry={nodes.Road_1_14_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_15" position={[-5428.16, 0, -1470.599]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_15_World_ap_0" geometry={nodes.Road_1_15_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_16" position={[-5963.785, 0, -1470.599]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_16_World_ap_0" geometry={nodes.Road_1_16_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_17" position={[-6497.424, 0, -1470.599]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_17_World_ap_0" geometry={nodes.Road_1_17_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_18" position={[-6976.602, 0, -1470.599]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_18_World_ap_0" geometry={nodes.Road_1_18_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                  </group>
                  <group name="Roads_Block_1_1" position={[-1885.282, -15.216, 1977.061]}>
                    <group name="Roa_Small_3" position={[-799.646, -0.323, -0.016]} rotation={[Math.PI, 0, Math.PI]}>
                      <mesh name="Roa_Small_3_World_ap_0" geometry={nodes.Roa_Small_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_BIG_2" position={[9.454, -35.992, -9.517]}>
                      <mesh name="Road_BIG_2_World_ap_0" geometry={nodes.Road_BIG_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_6_7" position={[-881.722, 0, -1470.599]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_6_7_World_ap_0" geometry={nodes.Road_1_6_7_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_5_8" position={[-293.684, 0, -1470.593]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_5_8_World_ap_0" geometry={nodes.Road_1_5_8_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_2_2_3" position={[293.901, 0, -1470.593]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_2_2_3_World_ap_0" geometry={nodes.Road_2_2_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_4_9" position={[881.963, 0, -1470.577]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_4_9_World_ap_0" geometry={nodes.Road_1_4_9_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_3_1_2" position={[1470.023, 0, -1470.576]}>
                      <mesh name="Road_3_1_2_World_ap_0" geometry={nodes.Road_3_1_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_3_8" position={[881.329, 0, 1470.655]} rotation={[0, -Math.PI / 2, 0]}>
                      <mesh name="Road_1_3_8_World_ap_0" geometry={nodes.Road_1_3_8_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_2_1_2" position={[-294.068, 0, 1470.655]} rotation={[0, -Math.PI / 2, 0]}>
                      <mesh name="Road_2_1_2_World_ap_0" geometry={nodes.Road_2_1_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_1_7" position={[-882.163, 0, 1470.655]} rotation={[0, -Math.PI / 2, 0]}>
                      <mesh name="Road_1_1_7_World_ap_0" geometry={nodes.Road_1_1_7_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_3_2" position={[1469.394, 0, 1470.654]}>
                      <mesh name="Road_3_2_World_ap_0" geometry={nodes.Road_3_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_9_4" position={[1470.242, 0, 883.133]}>
                      <mesh name="Road_1_9_4_World_ap_0" geometry={nodes.Road_1_9_4_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_2_3" position={[1470.242, 0, 294.234]}>
                      <mesh name="Road_2_3_World_ap_0" geometry={nodes.Road_2_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_10_5" position={[1470.239, 0, -294.452]}>
                      <mesh name="Road_1_10_5_World_ap_0" geometry={nodes.Road_1_10_5_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_11_3" position={[1470.025, 0, -882.517]}>
                      <mesh name="Road_1_11_3_World_ap_0" geometry={nodes.Road_1_11_3_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_7_5" position={[-1471.441, 0, 1470.655]} rotation={[0, -Math.PI / 2, 0]}>
                      <mesh name="Road_1_7_5_World_ap_0" geometry={nodes.Road_1_7_5_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_2_8" position={[294.376, 0, 1470.655]} rotation={[0, -Math.PI / 2, 0]}>
                      <mesh name="Road_1_2_8_World_ap_0" geometry={nodes.Road_1_2_8_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Roa_Small_2_4" position={[-134.72, -0.323, 393.149]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Roa_Small_2_4_World_ap_0" geometry={nodes.Roa_Small_2_4_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_8_4" position={[-1468.493, 0, -1470.593]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_8_4_World_ap_0" geometry={nodes.Road_1_8_4_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_9_5" position={[2058.874, 0, -1470.577]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_9_5_World_ap_0" geometry={nodes.Road_1_9_5_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_10_6" position={[2634.344, 0, -1470.577]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_10_6_World_ap_0" geometry={nodes.Road_1_10_6_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_11_4" position={[3203.645, 0, -1470.577]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_11_4_World_ap_0" geometry={nodes.Road_1_11_4_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_12_2" position={[3780.98, 0, -1470.577]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_12_2_World_ap_0" geometry={nodes.Road_1_12_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_13_2" position={[4366.351, 0, -1470.577]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_13_2_World_ap_0" geometry={nodes.Road_1_13_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_14_2" position={[1470.025, 0, -2052.949]}>
                      <mesh name="Road_1_14_2_World_ap_0" geometry={nodes.Road_1_14_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_15_2" position={[4941.891, 0, -1470.577]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_15_2_World_ap_0" geometry={nodes.Road_1_15_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_16_2" position={[5494.407, 0, -1470.577]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_16_2_World_ap_0" geometry={nodes.Road_1_16_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Road_1_17_2" position={[5856.12, 0, -1470.577]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Road_1_17_2_World_ap_0" geometry={nodes.Road_1_17_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                  </group>
                  <group name="Block_Line" position={[-8389.968, 50.915, 4169.223]} rotation={[0, -Math.PI / 2, 0]}>
                    <group name="Block_10_4" position={[31.488, 6.094, 36.098]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Hosuse_15" position={[-78.292, -78.692, 11.438]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Hosuse_15_World_ap_0" geometry={nodes.Hosuse_15_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_41" position={[1.901, -22.362, -74.237]} />
                      <group name="Bushes_50" position={[214.366, -41.068, 103.379]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Bed_2_41" position={[-175.31, -26.443, 44.851]} rotation={[0, Math.PI / 2, 0]}>
                          <mesh name="Bed_2_41_World_ap_0" geometry={nodes.Bed_2_41_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_43" position={[-217.925, -41.068, 146.021]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bush_1_20" position={[392.869, -31.114, 78.018]} rotation={[-2.97, 0.165, -1.832]}>
                          <group name="bUSH_32" position={[-33.501, 119.687, 29.221]}>
                            <mesh name="bUSH_32_World_ap_0" geometry={nodes.bUSH_32_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_35" position={[-3.801, 146.472, -176.274]}>
                            <mesh name="bUSH_3_35_World_ap_0" geometry={nodes.bUSH_3_35_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_29" position={[-46.114, 101.988, 125.039]} rotation={[0.277, 0.072, 0.039]}>
                            <mesh name="bUSH_4_29_World_ap_0" geometry={nodes.bUSH_4_29_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_6_16" position={[73.464, -397.04, 127.464]} rotation={[1.871, 0.441, -0.138]}>
                            <mesh name="bUSH_6_16_World_ap_0" geometry={nodes.bUSH_6_16_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_1_33" position={[-47.758, 56.531, 205.513]} rotation={[1.871, 0.441, -0.138]}>
                            <mesh name="bUSH_1_33_World_ap_0" geometry={nodes.bUSH_1_33_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Bush_15" position={[148.332, -31.114, 428.707]} rotation={[-0.798, 1.334, 2.122]}>
                          <group name="bUSH_1_34" position={[-60.81, 88.526, 195.025]}>
                            <mesh name="bUSH_1_34_World_ap_0" geometry={nodes.bUSH_1_34_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_33" position={[-25.117, 118.737, 0.552]} rotation={[0.05, 0.012, 0.009]}>
                            <mesh name="bUSH_33_World_ap_0" geometry={nodes.bUSH_33_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_2_14" position={[-68.863, 72.342, 272.007]}>
                            <mesh name="bUSH_2_14_World_ap_0" geometry={nodes.bUSH_2_14_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_36" position={[-10.585, 140.242, -129.184]}>
                            <mesh name="bUSH_3_36_World_ap_0" geometry={nodes.bUSH_3_36_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_30" position={[-39.674, 105.014, 102.073]} rotation={[0.05, 0.012, 0.009]}>
                            <mesh name="bUSH_4_30_World_ap_0" geometry={nodes.bUSH_4_30_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Tree_3_94" position={[-51.075, -41.268, -15.919]} rotation={[-0.805, 1.335, 2.129]}>
                          <group name="Tree_3_7_43" position={[32.176, -95.347, -4.849]} rotation={[0.025, -0.106, -0.017]}>
                            <mesh name="Tree_3_7_43_World_ap_0" geometry={nodes.Tree_3_7_43_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_6_44" position={[-214.491, 412.771, 664.851]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_6_44_World_ap_0" geometry={nodes.Tree_3_6_44_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_9_17" position={[-96.536, 29.175, 536.239]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_9_17_World_ap_0" geometry={nodes.Tree_3_9_17_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_10_17_5" position={[-115.676, 76.089, 581.944]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_10_17_5_World_ap_0" geometry={nodes.Tree_3_10_17_5_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_11_24" position={[-122.34, 122.894, 556.678]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_11_24_World_ap_0" geometry={nodes.Tree_3_11_24_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_12_17" position={[-23.022, -171.076, 404.639]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_12_17_World_ap_0" geometry={nodes.Tree_3_12_17_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_13_15" position={[-76.309, -82.173, 571.416]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_13_15_World_ap_0" geometry={nodes.Tree_3_13_15_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                      </group>
                      <group name="Garden_58" position={[-147.715, -46.994, -189.354]}>
                        <group name="Garden_59" position={[-225.432, 0, -116.108]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_59_World_ap_0" geometry={nodes.Garden_59_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_30" position={[-179.278, 0, 502.775]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_30_World_ap_0" geometry={nodes.Garden_1_30_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_31" position={[-175.052, 0, -258.418]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_31_World_ap_0" geometry={nodes.Garden_2_31_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_3_26" position={[527.086, 0, -116.108]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_3_26_World_ap_0" geometry={nodes.Garden_3_26_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_3_18" position={[-201.68, -48.053, -195.225]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_3_18_World_ap_0" geometry={nodes.Bench_3_18_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_40" position={[178.534, -47.056, 21.165]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_40_World_ap_0" geometry={nodes.Bench_40_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_39" position={[-45.421, -39.575, -82.374]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_1_39_World_ap_0" geometry={nodes.Bench_1_39_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_2_20" position={[-196.994, -48.053, -245.611]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_2_20_World_ap_0" geometry={nodes.Bench_2_20_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_4_14" position={[-201.68, -48.053, -292.553]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_4_14_World_ap_0" geometry={nodes.Bench_4_14_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_9_3_2" position={[15.028, -4.306, -790.212]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Hosuse_16" position={[35.154, -70.746, 32.59]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Hosuse_16_World_ap_0" geometry={nodes.Hosuse_16_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Sand_15" position={[-272.394, -59.999, 12.82]} rotation={[-Math.PI, 0, -Math.PI]}>
                        <mesh name="Sand_15_World_ap_0" geometry={nodes.Sand_15_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_42" position={[1.901, -22.362, -74.237]} />
                      <group name="Bushes_51" position={[214.366, -41.068, 103.379]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Bed_2_42" position={[-197.057, -15.674, 109.234]} rotation={[0, Math.PI / 2, 0]}>
                          <mesh name="Bed_2_42_World_ap_0" geometry={nodes.Bed_2_42_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_44" position={[-200.293, -41.068, 98.764]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bush_1_21" position={[357.153, -28.285, 70.925]} rotation={[-2.97, 0.165, -1.832]}>
                          <group name="bUSH_7_7" position={[46.117, -114.564, -108.061]} rotation={[-3.022, 0.319, -0.485]}>
                            <mesh name="bUSH_7_7_World_ap_0" geometry={nodes.bUSH_7_7_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_34" position={[-24.85, 87.834, 22.956]}>
                            <mesh name="bUSH_34_World_ap_0" geometry={nodes.bUSH_34_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_37" position={[-1.661, 87.344, -108.569]}>
                            <mesh name="bUSH_3_37_World_ap_0" geometry={nodes.bUSH_3_37_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_31" position={[-36.141, 71.087, 109.95]} rotation={[0.277, 0.072, 0.039]}>
                            <mesh name="bUSH_4_31_World_ap_0" geometry={nodes.bUSH_4_31_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_6_17" position={[-13.457, -129.048, 251.107]} rotation={[1.54, 0.399, -0.054]}>
                            <mesh name="bUSH_6_17_World_ap_0" geometry={nodes.bUSH_6_17_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_1_35" position={[-46.696, 33.209, 221.305]} rotation={[1.54, 0.399, -0.054]}>
                            <mesh name="bUSH_1_35_World_ap_0" geometry={nodes.bUSH_1_35_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Bush_16" position={[134.848, -28.285, 389.733]} rotation={[-0.798, 1.334, 2.122]}>
                          <group name="bUSH_1_36" position={[-46.012, -15.705, 283.506]}>
                            <mesh name="bUSH_1_36_World_ap_0" geometry={nodes.bUSH_1_36_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_35" position={[-18.908, 65.601, 19.13]}>
                            <mesh name="bUSH_35_World_ap_0" geometry={nodes.bUSH_35_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_2_15" position={[-49.615, -29.413, 322.572]}>
                            <mesh name="bUSH_2_15_World_ap_0" geometry={nodes.bUSH_2_15_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_38" position={[5.903, 59.042, -113.439]}>
                            <mesh name="bUSH_3_38_World_ap_0" geometry={nodes.bUSH_3_38_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_32" position={[-15.019, 26.852, 49.325]}>
                            <mesh name="bUSH_4_32_World_ap_0" geometry={nodes.bUSH_4_32_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Tree_3_95" position={[-46.431, -37.517, -14.472]} rotation={[-0.805, 1.335, 2.129]}>
                          <group name="Tree_3_96" position={[43.68, -162.805, -28.976]}>
                            <mesh name="Tree_3_96_World_ap_0" geometry={nodes.Tree_3_96_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_1_74" position={[27.285, -85.495, -39.997]} rotation={[2.058, 0.453, -0.19]}>
                            <mesh name="Tree_3_1_74_World_ap_0" geometry={nodes.Tree_3_1_74_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_2_53" position={[24.209, -204.937, 257.815]} rotation={[2.058, 0.453, -0.19]}>
                            <mesh name="Tree_3_2_53_World_ap_0" geometry={nodes.Tree_3_2_53_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_3_34" position={[-142.393, 536.971, 86.022]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_3_34_World_ap_0" geometry={nodes.Tree_3_3_34_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_4_36" position={[-168.094, 504.935, 246.745]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_4_36_World_ap_0" geometry={nodes.Tree_3_4_36_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_5_35" position={[-139.242, 460.306, 171.663]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_5_35_World_ap_0" geometry={nodes.Tree_3_5_35_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_7_44_2" position={[-17.84, -263.58, 457.896]} rotation={[0.019, -0.081, -0.013]}>
                            <mesh name="Tree_3_7_44_2_World_ap_0" geometry={nodes.Tree_3_7_44_2_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_8_27" position={[-180.676, 482.431, 377.956]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_8_27_World_ap_0" geometry={nodes.Tree_3_8_27_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_6_45" position={[-202.439, 455.556, 538.329]} rotation={[1.099, 0.306, 0.027]}>
                            <mesh name="Tree_3_6_45_World_ap_0" geometry={nodes.Tree_3_6_45_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_9_18" position={[-92.854, 31.711, 509.515]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_9_18_World_ap_0" geometry={nodes.Tree_3_9_18_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_10_18_6" position={[-103.71, 71.493, 517.635]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_10_18_6_World_ap_0" geometry={nodes.Tree_3_10_18_6_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_11_25" position={[-120.269, 132.682, 529.335]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_11_25_World_ap_0" geometry={nodes.Tree_3_11_25_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_12_18" position={[0.405, -246.818, 354.312]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_12_18_World_ap_0" geometry={nodes.Tree_3_12_18_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_14_12" position={[-65.417, -73.198, 494.888]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_14_12_World_ap_0" geometry={nodes.Tree_3_14_12_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_13_16" position={[-2.563, 30.377, -26.443]}>
                            <mesh name="Tree_3_13_16_World_ap_0" geometry={nodes.Tree_3_13_16_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_15_7" position={[0.954, -258.641, 392.219]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_15_7_World_ap_0" geometry={nodes.Tree_3_15_7_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                      </group>
                      <group name="Jump_desk_6" position={[-277.434, -29.688, -104.164]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                        <mesh name="Jump_desk_6_World_ap_0" geometry={nodes.Jump_desk_6_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Garden_60" position={[-191.805, -46.994, -191.298]}>
                        <group name="Garden_5_7" position={[578.355, 0, -164.055]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_5_7_World_ap_0" geometry={nodes.Garden_5_7_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_61" position={[-230.362, 0, -164.055]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_61_World_ap_0" geometry={nodes.Garden_61_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_31" position={[-173.997, 0, 530.841]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_31_World_ap_0" geometry={nodes.Garden_1_31_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_32" position={[-173.997, 0, -202.731]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_32_World_ap_0" geometry={nodes.Garden_2_32_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_3_19" position={[229.937, -49.672, -173.026]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                        <mesh name="Bench_3_19_World_ap_0" geometry={nodes.Bench_3_19_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_41" position={[98.944, -36.309, -12.976]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_41_World_ap_0" geometry={nodes.Bench_41_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_40" position={[-208.426, -47.787, -257.165]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_1_40_World_ap_0" geometry={nodes.Bench_1_40_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_2_21" position={[-208.426, -57.775, -304.781]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_2_21_World_ap_0" geometry={nodes.Bench_2_21_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_4_15" position={[-208.426, -57.775, -209.305]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_4_15_World_ap_0" geometry={nodes.Bench_4_15_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_9_2_3" position={[-9.942, -4.306, -5080.2]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Hosuse_17" position={[35.154, -70.746, 32.59]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Hosuse_17_World_ap_0" geometry={nodes.Hosuse_17_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Sand_16" position={[-272.394, -59.999, 12.82]} rotation={[-Math.PI, 0, -Math.PI]}>
                        <mesh name="Sand_16_World_ap_0" geometry={nodes.Sand_16_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_43" position={[1.901, -22.362, -74.237]} />
                      <group name="Bushes_52" position={[214.366, -41.068, 103.379]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Bed_2_43" position={[-211.217, -15.674, 123.743]} rotation={[0, Math.PI / 2, 0]}>
                          <mesh name="Bed_2_43_World_ap_0" geometry={nodes.Bed_2_43_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bushes_1_45" position={[-200.293, -41.068, 98.764]} rotation={[0, Math.PI / 2, 0]}>
                        <group name="Bush_1_22" position={[357.153, -28.285, 70.925]} rotation={[-2.97, 0.165, -1.832]}>
                          <group name="bUSH_7_8" position={[46.117, -114.564, -108.061]} rotation={[-3.022, 0.319, -0.485]}>
                            <mesh name="bUSH_7_8_World_ap_0" geometry={nodes.bUSH_7_8_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_36" position={[-24.85, 87.834, 22.956]}>
                            <mesh name="bUSH_36_World_ap_0" geometry={nodes.bUSH_36_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_39" position={[-1.661, 87.344, -108.569]}>
                            <mesh name="bUSH_3_39_World_ap_0" geometry={nodes.bUSH_3_39_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_33" position={[-36.141, 71.087, 109.95]} rotation={[0.277, 0.072, 0.039]}>
                            <mesh name="bUSH_4_33_World_ap_0" geometry={nodes.bUSH_4_33_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_6_18" position={[-13.457, -129.048, 251.107]} rotation={[1.54, 0.399, -0.054]}>
                            <mesh name="bUSH_6_18_World_ap_0" geometry={nodes.bUSH_6_18_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_1_37" position={[-46.696, 33.209, 221.305]} rotation={[1.54, 0.399, -0.054]}>
                            <mesh name="bUSH_1_37_World_ap_0" geometry={nodes.bUSH_1_37_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Bush_17" position={[134.848, -28.285, 389.733]} rotation={[-0.798, 1.334, 2.122]}>
                          <group name="bUSH_1_38" position={[-46.012, -15.705, 283.506]}>
                            <mesh name="bUSH_1_38_World_ap_0" geometry={nodes.bUSH_1_38_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_37" position={[-18.908, 65.601, 19.13]}>
                            <mesh name="bUSH_37_World_ap_0" geometry={nodes.bUSH_37_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_2_16" position={[-60.086, 112.225, 190.849]}>
                            <mesh name="bUSH_2_16_World_ap_0" geometry={nodes.bUSH_2_16_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_3_40" position={[5.903, 59.042, -113.439]}>
                            <mesh name="bUSH_3_40_World_ap_0" geometry={nodes.bUSH_3_40_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="bUSH_4_34" position={[-15.019, 26.852, 49.325]}>
                            <mesh name="bUSH_4_34_World_ap_0" geometry={nodes.bUSH_4_34_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                        <group name="Tree_3_97" position={[-46.431, -37.517, -14.472]} rotation={[-0.805, 1.335, 2.129]}>
                          <group name="Tree_3_98_2" position={[56.888, -212.304, -37.373]}>
                            <mesh name="Tree_3_98_2_World_ap_0" geometry={nodes.Tree_3_98_2_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_1_75_2" position={[27.285, -85.495, -39.997]} rotation={[2.058, 0.453, -0.19]}>
                            <mesh name="Tree_3_1_75_2_World_ap_0" geometry={nodes.Tree_3_1_75_2_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_2_54" position={[24.209, -204.937, 257.815]} rotation={[2.058, 0.453, -0.19]}>
                            <mesh name="Tree_3_2_54_World_ap_0" geometry={nodes.Tree_3_2_54_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_3_35" position={[-128.926, 514.088, 40.177]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_3_35_World_ap_0" geometry={nodes.Tree_3_3_35_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_4_37" position={[-168.094, 504.935, 246.745]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_4_37_World_ap_0" geometry={nodes.Tree_3_4_37_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_5_36" position={[-139.242, 460.306, 171.663]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_5_36_World_ap_0" geometry={nodes.Tree_3_5_36_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_7_45_7" position={[-17.84, -263.58, 457.896]} rotation={[0.019, -0.081, -0.013]}>
                            <mesh name="Tree_3_7_45_7_World_ap_0" geometry={nodes.Tree_3_7_45_7_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_8_28" position={[-180.676, 482.431, 377.956]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_8_28_World_ap_0" geometry={nodes.Tree_3_8_28_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_6_46" position={[-202.439, 455.556, 538.329]} rotation={[1.099, 0.306, 0.027]}>
                            <mesh name="Tree_3_6_46_World_ap_0" geometry={nodes.Tree_3_6_46_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_9_19" position={[-92.854, 31.711, 509.515]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_9_19_World_ap_0" geometry={nodes.Tree_3_9_19_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_10_19_4" position={[-103.71, 71.493, 517.635]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_10_19_4_World_ap_0" geometry={nodes.Tree_3_10_19_4_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_11_26_3" position={[-120.269, 132.682, 529.335]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_11_26_3_World_ap_0" geometry={nodes.Tree_3_11_26_3_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_12_19" position={[0.405, -246.818, 354.312]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_12_19_World_ap_0" geometry={nodes.Tree_3_12_19_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_14_13" position={[-65.417, -73.198, 494.888]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_14_13_World_ap_0" geometry={nodes.Tree_3_14_13_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_13_17" position={[-2.563, 30.377, -26.443]}>
                            <mesh name="Tree_3_13_17_World_ap_0" geometry={nodes.Tree_3_13_17_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                          <group name="Tree_3_15_8" position={[0.954, -258.641, 392.219]} rotation={[-0.002, -0.001, 0]}>
                            <mesh name="Tree_3_15_8_World_ap_0" geometry={nodes.Tree_3_15_8_World_ap_0.geometry} material={materials.World_ap} />
                          </group>
                        </group>
                      </group>
                      <group name="Jump_desk_7" position={[-277.434, -29.688, -104.164]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                        <mesh name="Jump_desk_7_World_ap_0" geometry={nodes.Jump_desk_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Garden_62" position={[-265.252, -46.994, -199.805]}>
                        <group name="Garden_5_8" position={[646.186, 0, -143.422]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_5_8_World_ap_0" geometry={nodes.Garden_5_8_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_63" position={[-212.378, 0, -143.422]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_63_World_ap_0" geometry={nodes.Garden_63_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_32" position={[-160.413, 0, 464.079]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_32_World_ap_0" geometry={nodes.Garden_1_32_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_33" position={[-160.413, 0, -177.234]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_33_World_ap_0" geometry={nodes.Garden_2_33_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_3_20" position={[229.937, -49.672, -173.026]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                        <mesh name="Bench_3_20_World_ap_0" geometry={nodes.Bench_3_20_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_42" position={[98.944, -36.309, -12.976]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_42_World_ap_0" geometry={nodes.Bench_42_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_41" position={[-208.426, -47.787, -257.165]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_1_41_World_ap_0" geometry={nodes.Bench_1_41_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_2_22" position={[-208.426, -57.775, -304.781]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_2_22_World_ap_0" geometry={nodes.Bench_2_22_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_4_16" position={[-208.426, -57.775, -209.305]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_4_16_World_ap_0" geometry={nodes.Bench_4_16_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Block_9_1_2" position={[-9.942, -4.306, -3018.254]} rotation={[0, Math.PI / 2, 0]}>
                      <group name="Hosuse_18" position={[35.154, -70.746, 32.59]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh name="Hosuse_18_World_ap_0" geometry={nodes.Hosuse_18_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Sand_17" position={[-272.394, -59.999, 12.82]} rotation={[-Math.PI, 0, -Math.PI]}>
                        <mesh name="Sand_17_World_ap_0" geometry={nodes.Sand_17_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_1_44" position={[1.901, -22.362, -74.237]} />
                      <group name="Bushes_53" position={[214.366, -41.068, 103.379]} rotation={[0, -Math.PI / 2, 0]}>
                        <group name="Bed_2_44" position={[-211.217, -15.674, 123.743]} rotation={[0, Math.PI / 2, 0]}>
                          <mesh name="Bed_2_44_World_ap_0" geometry={nodes.Bed_2_44_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Jump_desk_8" position={[-277.434, -29.688, -104.164]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                        <mesh name="Jump_desk_8_World_ap_0" geometry={nodes.Jump_desk_8_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Garden_64" position={[-201.959, -46.994, -199.805]}>
                        <group name="Garden_5_9" position={[796.699, 0, -143.422]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_5_9_World_ap_0" geometry={nodes.Garden_5_9_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_65" position={[-261.847, 0, -143.422]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Garden_65_World_ap_0" geometry={nodes.Garden_65_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_1_33" position={[-197.778, 0, 464.079]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_1_33_World_ap_0" geometry={nodes.Garden_1_33_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                        <group name="Garden_2_34" position={[-197.778, 0, -177.234]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                          <mesh name="Garden_2_34_World_ap_0" geometry={nodes.Garden_2_34_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Bench_3_21" position={[229.937, -49.672, -173.026]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                        <mesh name="Bench_3_21_World_ap_0" geometry={nodes.Bench_3_21_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_43" position={[98.944, -36.309, -12.976]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Bench_43_World_ap_0" geometry={nodes.Bench_43_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_1_42" position={[-208.426, -47.787, -257.165]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_1_42_World_ap_0" geometry={nodes.Bench_1_42_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_2_23" position={[-208.426, -57.775, -304.781]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_2_23_World_ap_0" geometry={nodes.Bench_2_23_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Bench_4_17" position={[-208.426, -57.775, -209.305]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                        <mesh name="Bench_4_17_World_ap_0" geometry={nodes.Bench_4_17_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                  </group>
                  <group name="Block_2_2" position={[-1916.258, 22.146, -190.876]}>
                    <group name="House_16" position={[-72.975, 9.191, -8.26]} rotation={[-Math.PI, 0, Math.PI]}>
                      <mesh name="House_16_World_ap_0" geometry={nodes.House_16_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Floor_4_15" position={[-231.886, 16.329, 1.888]} rotation={[0, Math.PI / 2, 0]}>
                      <mesh name="Floor_4_15_World_ap_0" geometry={nodes.Floor_4_15_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Trees_12" position={[-501.202, -43.058, -27.125]}>
                      <group name="Firtree_47_10" position={[-10.255, -19.751, 313.834]}>
                        <mesh name="Firtree_47_10_World_ap_0" geometry={nodes.Firtree_47_10_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_3_11" position={[9.893, 10.262, 123.349]}>
                        <mesh name="Firtree_3_11_World_ap_0" geometry={nodes.Firtree_3_11_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_2_11" position={[4.725, 1.192, 34.764]}>
                        <mesh name="Firtree_2_11_World_ap_0" geometry={nodes.Firtree_2_11_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_1_10" position={[-10.575, -12.37, -49.55]}>
                        <mesh name="Firtree_1_10_World_ap_0" geometry={nodes.Firtree_1_10_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_10" position={[-3.35, -13.156, -155.018]}>
                        <mesh name="Firtree_10_World_ap_0" geometry={nodes.Firtree_10_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Cube_7_10" position={[-20.789, 15.395, 11.864]}>
                        <mesh name="Cube_7_10_World_ap_0" geometry={nodes.Cube_7_10_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_4_11" position={[-14.179, -0.86, -283.046]} rotation={[0, 0.815, 0]}>
                        <mesh name="Firtree_4_11_World_ap_0" geometry={nodes.Firtree_4_11_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_5_8" position={[4.725, 1.192, 191.543]} rotation={[0, 0.947, 0]}>
                        <mesh name="Firtree_5_8_World_ap_0" geometry={nodes.Firtree_5_8_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Trash_1_4" position={[-285.114, -15.83, 162.047]} rotation={[Math.PI / 2, 0, -0.231]}>
                      <mesh name="Trash_1_4_World_ap_0" geometry={nodes.Trash_1_4_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Base_7" position={[-66.162, 12.501, 7.296]} />
                    <group name="Trees_1_7" position={[133.315, -43.058, -27.125]}>
                      <group name="Firtree_47_11" position={[-10.255, -19.751, 313.834]}>
                        <mesh name="Firtree_47_11_World_ap_0" geometry={nodes.Firtree_47_11_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_3_12" position={[9.893, 10.262, 123.349]}>
                        <mesh name="Firtree_3_12_World_ap_0" geometry={nodes.Firtree_3_12_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_2_12" position={[4.725, 1.192, 34.764]}>
                        <mesh name="Firtree_2_12_World_ap_0" geometry={nodes.Firtree_2_12_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_1_11" position={[-10.575, -12.37, -49.55]}>
                        <mesh name="Firtree_1_11_World_ap_0" geometry={nodes.Firtree_1_11_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_11" position={[-3.35, -13.156, -155.018]}>
                        <mesh name="Firtree_11_World_ap_0" geometry={nodes.Firtree_11_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Cube_7_11" position={[-20.789, 15.395, 11.864]}>
                        <mesh name="Cube_7_11_World_ap_0" geometry={nodes.Cube_7_11_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_4_12" position={[-14.179, -0.86, -283.046]} rotation={[0, 0.815, 0]}>
                        <mesh name="Firtree_4_12_World_ap_0" geometry={nodes.Firtree_4_12_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Firtree_5_9" position={[4.725, 1.192, 191.543]} rotation={[0, 0.947, 0]}>
                        <mesh name="Firtree_5_9_World_ap_0" geometry={nodes.Firtree_5_9_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    <group name="Bench_44" position={[-257.622, -19.652, -230.343]} rotation={[Math.PI / 2, 0, 0]}>
                      <mesh name="Bench_44_World_ap_0" geometry={nodes.Bench_44_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="Behch_2" position={[-257.622, -19.652, -152.012]} rotation={[Math.PI / 2, 0, 0]}>
                      <mesh name="Behch_2_World_ap_0" geometry={nodes.Behch_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                  </group>
                  <group name="Block_1_2_2" position={[-4955.837, 151.11, -1315.949]}>
                    <group name="Shop_3" position={[431.585, -144.137, 999.584]}>
                      <group name="Trash_10" position={[-4.433, -11.277, -347.498]} rotation={[1.584, -0.001, -1.634]}>
                        <mesh name="Trash_10_World_ap_0" geometry={nodes.Trash_10_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Shop_4" position={[-3.214, -27.113, 17.897]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="Shop_4_World_ap_0" geometry={nodes.Shop_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Trash_11" position={[173.069, -14.978, -98.504]} rotation={[Math.PI, -Math.PI / 2, 0]}>
                        <mesh name="Trash_11_World_ap_0" geometry={nodes.Trash_11_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Base_8" position={[-174.496, 12.501, 200.578]}>
                        <group name="Floor_5" position={[129.97, -28.046, 218.332]}>
                          <mesh name="Floor_5_World_ap_0" geometry={nodes.Floor_5_World_ap_0.geometry} material={materials.World_ap} />
                        </group>
                      </group>
                      <group name="Trash_1_5" position={[-115.771, -11.938, -344.626]} rotation={[1.586, -0.011, -1.43]}>
                        <mesh name="Trash_1_5_World_ap_0" geometry={nodes.Trash_1_5_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Trash_2_2" position={[-229.839, -12.464, -338.094]} rotation={[1.586, -0.011, -1.428]}>
                        <mesh name="Trash_2_2_World_ap_0" geometry={nodes.Trash_2_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Trash_3_2" position={[173.069, -14.978, 49.042]} rotation={[Math.PI, -Math.PI / 2, 0]}>
                        <mesh name="Trash_3_2_World_ap_0" geometry={nodes.Trash_3_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Trash_4_2" position={[99.018, -11.29, -336.154]} rotation={[1.582, 0.013, -1.735]}>
                        <mesh name="Trash_4_2_World_ap_0" geometry={nodes.Trash_4_2_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Muff_2_6" position={[-1339.744, 36.119, -1780.604]}>
                        <mesh name="Muff_2_6_World_ap_0" geometry={nodes.Muff_2_6_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Muff_6" position={[-268.108, 34.905, -71.487]} rotation={[Math.PI, 0, Math.PI]}>
                        <mesh name="Muff_6_World_ap_0" geometry={nodes.Muff_6_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>
                    
                    <group name="House_4_2" position={[-1273.138, 274.851, 1051.574]}>
                      <group name="Antenne_2_3" position={[120.193, -15.215, 162.011]} rotation={[-0.955, -0.281, 2.55]}>
                        <mesh name="Antenne_2_3_World_ap_0" geometry={nodes.Antenne_2_3_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Antenne_1_8" position={[-95.737, 150.097, 114.584]} rotation={[-1.197, 0.686, -2.17]}>
                        <mesh name="Antenne_1_8_World_ap_0" geometry={nodes.Antenne_1_8_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Antenne_7" position={[-56.705, 94.963, -33.574]} rotation={[-1.523, 0.643, -1.925]}>
                        <mesh name="Antenne_7_World_ap_0" geometry={nodes.Antenne_7_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="House_17" position={[68.558, -249.143, 218.256]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="House_17_World_ap_0" geometry={nodes.House_17_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>

                    <group name="House_2_2" position={[-1266.172, 274.851, -439.923]} rotation={[Math.PI, 0, -Math.PI]}>
                      <group name="House_18" position={[-13.98, -248.374, 167.7]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="House_18_World_ap_0" geometry={nodes.House_18_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>

                    <group name="House_19" position={[379.233, 274.851, -402.765]} rotation={[Math.PI, 0, -Math.PI]}>
                      <group name="Antenne_2_4" position={[248.216, -15.215, 223.986]} rotation={[-0.955, -0.281, 2.55]}>
                        <mesh name="Antenne_2_4_World_ap_0" geometry={nodes.Antenne_2_4_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Antenne_1_9" position={[-106.349, 150.097, 108.929]} rotation={[-2.011, -0.522, 0.595]}>
                        <mesh name="Antenne_1_9_World_ap_0" geometry={nodes.Antenne_1_9_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Antenne_8" position={[-80.62, 96.249, -71.327]} rotation={[-1.969, -0.522, 0.596]}>
                        <mesh name="Antenne_8_World_ap_0" geometry={nodes.Antenne_8_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="House_20" position={[60.443, -249.372, 228.983]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh name="House_20_World_ap_0" geometry={nodes.House_20_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                    </group>

                    <group name="House_1_15" position={[-237.911, -0.113, -577.804]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                      <group name="Antenne_9" position={[27.47, -103.639, -316.52]} rotation={[2.582, 1.086, -0.955]}>
                        <mesh name="Antenne_9_World_ap_0" geometry={nodes.Antenne_9_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <group name="Antenne_1_10" position={[19.05, -40.668, -290.052]} rotation={[-2.221, 0.86, -2.619]}>
                        <mesh name="Antenne_1_10_World_ap_0" geometry={nodes.Antenne_1_10_World_ap_0.geometry} material={materials.World_ap} />
                      </group>
                      <mesh name="House_1_15_World_ap_0" geometry={nodes.House_1_15_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="House_3_2" position={[-1292.941, -169.881, 387.686]} rotation={[0, -Math.PI / 2, 0]}>
                      <mesh name="House_3_2_World_ap_0" geometry={nodes.House_3_2_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                    <group name="House_21" position={[427.846, 53.675, 181.097]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                      <mesh name="House_21_World_ap_0" geometry={nodes.House_21_World_ap_0.geometry} material={materials.World_ap} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

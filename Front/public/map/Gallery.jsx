import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Gallery(props) {
  const { nodes, materials } = useGLTF(
    "https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Map/Gallary/scene.gltf"
  );
  return (
    <group {...props} dispose={null}>
      <group scale={0.015}>
        <group
          position={[-1888.126, 343.228, 205.561]}
          rotation={[-Math.PI / 2, 0, Math.PI / 3]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_001_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[-1969.801, 184.435, 189.493]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_001_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[674.28, 0.034, -1382.976]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group position={[-259.086, -1508.604, -12.804]}>
            <mesh
              geometry={nodes.Door_metal2_0.geometry}
              material={materials.metal2}
            />
            <mesh
              geometry={nodes.Door_WOOD_0.geometry}
              material={materials.WOOD}
            />
          </group>
        </group>
        <group
          position={[192.268, 0.034, -57.196]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            geometry={nodes.Floor_FLOOR_0.geometry}
            material={materials.FLOOR}
            position={[222.993, -182.823, 0]}
          />
        </group>
        <group
          position={[-1969.801, 184.435, 189.493]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_001_Art001_0.geometry}
            material={materials.Art001}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[-1969.801, 184.435, -191.217]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_002_Art_002_0.geometry}
            material={materials.Art_002}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[-1969.801, 184.435, -191.217]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_002_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[-1969.801, 184.435, -555.019]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_003_Art_003_0.geometry}
            material={materials.Art_003}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[-1969.801, 184.435, -555.019]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_003_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[-1636.547, 184.435, -812.408]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_004_Art_004_0.geometry}
            material={materials.Art_004}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[-1636.547, 184.435, -812.408]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_004_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[-1289.734, 184.435, -804.033]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_005_Art_005_0.geometry}
            material={materials.Art_005}
            position={[21.043, -109.836, 5.478]}
          />
        </group>
        <group
          position={[-1289.734, 184.435, -812.408]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_005_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.042, -109.836, 5.478]}
          />
        </group>
        <group
          position={[-1124.431, 184.435, -804.033]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_006_Art_006_0.geometry}
            material={materials.Art_006}
            position={[21.043, -109.836, 5.478]}
          />
        </group>
        <group
          position={[-1124.431, 184.435, -812.408]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_006_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.042, -109.836, 5.478]}
          />
        </group>
        <group
          position={[-959.129, 184.435, -804.033]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_007_Art_007_0.geometry}
            material={materials.Art_007}
            position={[21.043, -109.836, 5.478]}
          />
        </group>
        <group
          position={[-959.129, 184.435, -812.408]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_007_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.042, -109.836, 5.478]}
          />
        </group>
        <group
          position={[-643.201, 184.435, -812.408]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_008_Art_008_0.geometry}
            material={materials.Art_008}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[-643.201, 184.435, -812.408]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_008_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[-275.3, 184.435, -804.033]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_009_Art_009_0.geometry}
            material={materials.Art_009}
            position={[21.043, -109.836, 5.478]}
          />
        </group>
        <group
          position={[-109.998, 184.435, -804.033]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_010_Art_010_0.geometry}
            material={materials.Art_010}
            position={[21.043, -109.836, 5.478]}
          />
        </group>
        <group
          position={[55.304, 184.435, -804.033]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_011_Art_011_0.geometry}
            material={materials.Art_011}
            position={[21.043, -109.836, 5.478]}
          />
        </group>
        <group
          position={[-275.3, 184.435, -812.408]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_009_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.042, -109.836, 5.478]}
          />
        </group>
        <group
          position={[-109.998, 184.435, -812.408]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_010_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.042, -109.836, 5.478]}
          />
        </group>
        <group
          position={[55.304, 184.435, -812.408]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_011_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.042, -109.836, 5.478]}
          />
        </group>
        <group
          position={[426.516, 184.435, -812.408]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_012_Art_012_0.geometry}
            material={materials.Art_012}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[426.516, 184.435, -812.408]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_012_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[989.381, 184.435, -1443.712]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_013_Art_013_0.geometry}
            material={materials.Art_013}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[989.381, 184.435, -1443.712]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_013_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[1308.559, 184.435, -1039.117]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_014_Art_014_0.geometry}
            material={materials.Art_014}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[1308.559, 184.435, -1039.117]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_014_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[1591.197, 184.435, -782.813]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_015_Art_015_0.geometry}
            material={materials.Art_015}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[1591.197, 184.435, -782.813]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_015_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[2032.794, 184.435, -782.813]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_016_Art_016_0.geometry}
            material={materials.Art_016}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[2032.794, 184.435, -782.813]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_016_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[2354.502, 184.435, -526.174]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_017_Art_017_0.geometry}
            material={materials.Art_017}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[2354.502, 184.435, -526.174]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_017_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[2354.502, 184.435, -145.189]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_018_Art_018_0.geometry}
            material={materials.Art_018}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[2354.502, 184.435, -145.189]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_018_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[2354.502, 184.435, 235.797]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_019_Art_019_0.geometry}
            material={materials.Art_019}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[2354.502, 184.435, 235.797]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_019_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[2002.866, 184.435, 442.32]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_020_Art_020_0.geometry}
            material={materials.Art_020}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[2002.866, 184.435, 442.32]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_020_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[1545.328, 184.435, 442.32]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_021_Art_021_0.geometry}
            material={materials.Art_021}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[1545.328, 184.435, 442.32]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_021_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[1326.003, 184.435, 724.845]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_022_Art_022_0.geometry}
            material={materials.Art_022}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[1326.003, 184.435, 724.845]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_022_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[1326.003, 184.435, 1065.074]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_023_Art_023_0.geometry}
            material={materials.Art_023}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[1326.003, 184.435, 1065.074]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_023_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[939.599, 184.435, 1290.321]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_024_Art_024_0.geometry}
            material={materials.Art_024}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[939.599, 184.435, 1290.321]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_024_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[617.029, 184.435, 1077.03]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_025_Art_025_0.geometry}
            material={materials.Art_025}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[617.029, 184.435, 1077.03]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_025_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[617.029, 184.435, 703.151]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_026_Art_026_0.geometry}
            material={materials.Art_026}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[617.029, 184.435, 703.151]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_026_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[410.693, 184.435, 472.55]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_027_Art_027_0.geometry}
            material={materials.Art_027}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[410.693, 184.435, 472.55]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_027_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[60.784, 184.435, 472.55]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_028_Art_028_0.geometry}
            material={materials.Art_028}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[60.784, 184.435, 472.55]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_028_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[-145.081, 184.435, 725.566]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_029_Art_029_0.geometry}
            material={materials.Art_029}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[-145.081, 184.435, 725.566]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_029_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[-145.081, 184.435, 1102.51]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_030_Art_030_0.geometry}
            material={materials.Art_030}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[-145.081, 184.435, 1102.51]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_030_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[-514.1, 184.435, 1328.228]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_031_Art_031_0.geometry}
            material={materials.Art_031}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[-514.1, 184.435, 1328.228]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_031_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[-853.113, 184.435, 1094.524]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_032_Art_032_0.geometry}
            material={materials.Art_032}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[-853.113, 184.435, 1094.524]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_032_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[-853.113, 184.435, 702.602]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_033_Art_033_0.geometry}
            material={materials.Art_033}
            position={[21.043, -17.072, 18.061]}
          />
        </group>
        <group
          position={[-853.113, 184.435, 702.602]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_033_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>
        <group
          position={[-1046.997, 184.435, 464.792]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_034_Art_034_0.geometry}
            material={materials.Art_034}
            position={[21.043, -109.836, 5.478]}
          />
        </group>
        <group
          position={[-1276.343, 184.435, 464.792]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_035_Art_035_0.geometry}
            material={materials.Art_035}
            position={[21.043, -109.836, 5.478]}
          />
        </group>
        <group
          position={[-1498.85, 184.435, 464.792]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_036_Art_036_0.geometry}
            material={materials.Art_036}
            position={[21.043, -109.836, 5.478]}
          />
        </group>
        <group
          position={[-1046.996, 184.435, 473.166]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_034_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.042, -109.836, 5.478]}
          />
        </group>
        <group
          position={[-1276.343, 184.435, 473.166]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_035_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.042, -109.836, 5.478]}
          />
        </group>
        <group
          position={[-1498.85, 184.435, 473.166]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_036_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.042, -109.836, 5.478]}
          />
        </group>
        <group
          position={[-1716.328, 184.435, 464.792]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_037_Art_037_0.geometry}
            material={materials.Art_037}
            position={[21.043, -109.836, 5.478]}
          />
        </group>
        <group
          position={[-1716.328, 184.435, 473.166]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_037_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.042, -109.836, 5.478]}
          />
        </group>
        <group
          position={[2300.65, 369.568, -730.147]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            geometry={nodes.Mesh_Light_Metal_01_0.geometry}
            material={materials.Metal_01}
            position={[0, 0, -24.41]}
          />
        </group>
        <group
          position={[-1888.126, 343.228, -207.758]}
          rotation={[-Math.PI / 2, 0, 1.745]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_002_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[-1888.126, 343.228, -579.662]}
          rotation={[-Math.PI / 2, 0, 1.745]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_003_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[-1638.458, 343.228, -733.198]}
          rotation={[-Math.PI / 2, 0, -0.262]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_004_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[-1267.979, 343.228, -733.198]}
          rotation={[-Math.PI / 2, 0, -0.262]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_005_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[-972.154, 343.228, -733.198]}
          rotation={[-Math.PI / 2, 0, -0.262]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_006_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[-633.504, 343.228, -733.198]}
          rotation={[-Math.PI / 2, 0, 0.175]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_007_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[-133.197, 343.228, -733.198]}
          rotation={[-1.486, -0.023, -0.086]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_008_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[432.701, 343.228, -733.198]}
          rotation={[-1.693, -0.131, 0.606]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_009_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[972.257, 343.228, -1384.041]}
          rotation={[-1.745, 0.039, -0.43]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_010_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[1256.067, 343.228, -1041.533]}
          rotation={[-1.578, 0.179, -1.742]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_011_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[1587.458, 343.228, -730.119]}
          rotation={[-1.746, -0.038, 0]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_012_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[2044.1, 343.228, -730.119]}
          rotation={[-1.741, 0.054, -0.516]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_013_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[2300.607, 343.228, -502.524]}
          rotation={[-1.578, 0.179, -1.742]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_014_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[2300.607, 343.228, -136.854]}
          rotation={[-1.578, 0.179, -1.742]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_015_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[2300.607, 343.228, 236.386]}
          rotation={[-1.68, 0.142, -1.124]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_016_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[2032.676, 343.228, 399.354]}
          rotation={[-1.396, 0.038, 3.141]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_017_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[1605.397, 343.228, 399.354]}
          rotation={[-1.4, -0.054, 2.626]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_018_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[1248.932, 343.918, 702.214]}
          rotation={[-1.609, 0.175, -1.564]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_019_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[1248.932, 343.918, 1057.616]}
          rotation={[-1.531, 0.174, -2.008]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_020_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[933.548, 343.918, 1214.162]}
          rotation={[-1.612, 0.12, -2.623]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_021_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[687.495, 342.44, 1055.381]}
          rotation={[-1.445, -0.013, 1.651]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_022_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[687.495, 342.44, 700.667]}
          rotation={[-1.457, -0.056, 1.305]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_023_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[437.678, 342.44, 398.267]}
          rotation={[-1.47, 0.126, -3.063]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_024_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[61.347, 343.218, 398.267]}
          rotation={[-1.47, 0.126, -3.063]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_025_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[-212.566, 343.218, 699.043]}
          rotation={[-1.732, 0.009, -0.874]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_026_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[-210.016, 343.218, 1104.866]}
          rotation={[-1.678, 0.12, -1.654]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_027_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[-485.818, 343.218, 1256.592]}
          rotation={[-1.411, 0.019, 2.44]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_028_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[-775.799, 343.218, 1031.828]}
          rotation={[-1.411, 0.019, 2.44]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_029_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[-775.799, 343.218, 683.548]}
          rotation={[-1.474, -0.129, 1.401]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_030_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[-1037.918, 343.218, 398.819]}
          rotation={[-1.506, 0.148, -2.799]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_031_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[-1233.319, 343.218, 398.819]}
          rotation={[-1.426, 0.072, 2.785]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_032_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[-1469.868, 343.218, 398.819]}
          rotation={[-1.421, 0.059, 2.699]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_033_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[-1698.636, 343.218, 398.819]}
          rotation={[-1.506, 0.148, -2.799]}
          scale={1.14}
        >
          <mesh
            geometry={nodes.Light_034_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[0, 0, -25.133]}
          />
        </group>
        <group
          position={[-1763.299, 390.278, -632.885]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.271}
        >
          <mesh
            geometry={nodes.Mesh_Metal_01_0.geometry}
            material={materials.Metal_01}
            position={[0, 0, -10.559]}
          />
        </group>
        <group
          position={[1382.73, 116.091, 379.9]}
          rotation={[Math.PI, 0, -Math.PI]}
        >
          <mesh
            geometry={nodes.rope_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group
          position={[1879.357, 116.091, 379.9]}
          rotation={[Math.PI, 0, -Math.PI]}
        >
          <mesh
            geometry={nodes.rope001_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group
          position={[2221.017, 116.091, 360.186]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            geometry={nodes.rope002_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group
          position={[2221.017, 116.091, 15.013]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            geometry={nodes.rope003_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group
          position={[2221.017, 116.091, -330.161]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            geometry={nodes.rope004_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group position={[2184.25, 116.091, -688.709]}>
          <mesh
            geometry={nodes.rope005_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group position={[1683.691, 116.091, -688.709]}>
          <mesh
            geometry={nodes.rope006_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group position={[1693.39, 114.314, -688.709]} rotation={[0, 0, 0.051]}>
          <mesh
            geometry={nodes.rope007_Rope_0.geometry}
            material={materials.Rope}
            position={[104.54, 11.206, 0]}
          />
        </group>
        <group position={[1679.665, 114.314, 380.791]} rotation={[0, 0, 0.051]}>
          <mesh
            geometry={nodes.rope008_Rope_0.geometry}
            material={materials.Rope}
            position={[104.54, 11.206, 0]}
          />
        </group>
        <group
          position={[1240.206, 116.091, -901.106]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            geometry={nodes.rope009_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group position={[1125.886, 116.091, -1368.51]}>
          <mesh
            geometry={nodes.rope010_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group position={[316.716, 116.091, -688.709]}>
          <mesh
            geometry={nodes.rope011_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group position={[12.416, 116.091, -688.709]}>
          <mesh
            geometry={nodes.rope012_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group position={[622.553, 116.091, -688.709]}>
          <mesh
            geometry={nodes.rope020_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group position={[-597.602, 116.091, -688.709]}>
          <mesh
            geometry={nodes.rope021_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group position={[-901.902, 116.091, -688.709]}>
          <mesh
            geometry={nodes.rope022_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group position={[-291.766, 116.091, -688.709]}>
          <mesh
            geometry={nodes.rope023_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group position={[-1508.925, 116.091, -688.709]}>
          <mesh
            geometry={nodes.rope024_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group position={[-1203.088, 116.091, -688.709]}>
          <mesh
            geometry={nodes.rope026_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group
          position={[-1854.46, 116.091, 360.186]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            geometry={nodes.rope027_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group
          position={[-1854.46, 116.091, 15.013]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            geometry={nodes.rope028_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group
          position={[-1854.46, 116.091, -330.161]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            geometry={nodes.rope029_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group position={[-901.902, 116.091, 419.445]}>
          <mesh
            geometry={nodes.rope030_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group position={[-1508.925, 116.091, 419.445]}>
          <mesh
            geometry={nodes.rope031_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group position={[-1203.088, 116.091, 419.445]}>
          <mesh
            geometry={nodes.rope032_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group
          position={[-770.32, 116.091, 889.821]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            geometry={nodes.rope033_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group
          position={[-770.32, 116.091, 1194.615]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            geometry={nodes.rope034_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group
          position={[-216.215, 116.091, 889.821]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            geometry={nodes.rope035_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group
          position={[-216.215, 116.091, 1194.615]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            geometry={nodes.rope036_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group position={[-328.058, 116.091, 1268.85]}>
          <mesh
            geometry={nodes.rope037_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group position={[533.697, 116.091, 419.445]}>
          <mesh
            geometry={nodes.rope038_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group position={[232.511, 116.091, 419.445]}>
          <mesh
            geometry={nodes.rope039_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group
          position={[688.7, 116.091, 850.462]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            geometry={nodes.rope040_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group
          position={[688.7, 116.091, 1155.255]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            geometry={nodes.rope041_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group position={[1112.827, 116.091, 1229.491]}>
          <mesh
            geometry={nodes.rope042_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group
          position={[1254.625, 116.091, 850.462]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            geometry={nodes.rope043_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <group
          position={[1254.625, 116.091, 1155.255]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            geometry={nodes.rope044_Rope_0.geometry}
            material={materials.Rope}
            position={[-146.226, -20.066, 0]}
          />
        </group>
        <mesh
          geometry={nodes["Walls_WALLS&ROOF_0"].geometry}
          material={materials.WALLSROOF}
          position={[415.194, -12.771, 125.628]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["Roof_WALLS&ROOF_0"].geometry}
          material={materials.WALLSROOF}
          position={[415.259, 390.034, 120.63]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Handle_metal2_0.geometry}
          material={materials.metal2}
          position={[672.364, 97.881, -1288.444]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          geometry={nodes.base_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[1378.595, 0, 381.654]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.base001_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[1682.088, 0, 381.654]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.base002_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[1875.222, 0, 381.654]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.base003_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[2178.714, 0, 381.654]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.base004_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[2222.771, 0, 364.321]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base005_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[2222.771, 0, 60.829]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base006_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[2222.771, 0, 19.148]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base007_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[2222.771, 0, -284.345]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base008_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[2222.771, 0, -326.026]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base009_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[2222.771, 0, -629.519]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base010_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[2188.385, 0, -690.464]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base011_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[1884.893, 0, -690.464]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base012_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[1687.826, 0, -690.464]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base013_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[1384.333, 0, -690.464]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base014_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[1241.961, 0, -896.971]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base015_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[1241.961, 0, -1200.464]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base016_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[1130.021, 0, -1370.264]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base017_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[826.528, 0, -1370.264]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base018_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[627.152, 0, -690.464]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base019_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[323.659, 0, -690.464]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base020_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[16.551, 0, -690.464]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base021_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-286.941, 0, -690.464]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base030_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-590.659, 0, -690.464]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base031_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-897.767, 0, -690.464]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base032_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-1201.26, 0, -690.464]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base033_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-1501.981, 0, -690.464]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base034_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-1809.089, 0, -690.464]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base035_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-1852.705, 0, 364.321]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base036_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-1852.705, 0, 60.829]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base037_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-1852.705, 0, 19.148]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base038_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-1852.705, 0, -284.345]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base039_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-1852.705, 0, -326.026]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base040_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-1852.705, 0, -629.519]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base041_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-897.767, 0, 417.69]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base042_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-1201.26, 0, 417.69]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base043_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-1501.981, 0, 417.69]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base044_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-1809.089, 0, 417.69]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base045_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-768.565, 0, 893.956]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base046_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-768.565, 0, 590.463]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base047_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-768.565, 0, 1198.75]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base048_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-214.46, 0, 893.956]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base049_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-214.46, 0, 590.463]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base050_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-214.46, 0, 1198.75]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base051_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-628.717, 0, 1267.095]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base052_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-323.923, 0, 1267.095]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base053_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[537.832, 0, 417.69]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base054_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[234.339, 0, 417.69]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base055_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[-66.382, 0, 417.69]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base056_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[690.455, 0, 854.597]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base057_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[690.455, 0, 551.104]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base058_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[690.455, 0, 1159.391]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base059_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[812.168, 0, 1227.736]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base060_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[1116.962, 0, 1227.736]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.base061_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[1256.38, 0, 854.597]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base062_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[1256.38, 0, 551.104]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.base063_Metal_02_0.geometry}
          material={materials.Metal_02}
          position={[1256.38, 0, 1159.391]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");

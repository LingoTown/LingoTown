import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export function Gallery(props) {
  const { nodes, materials } = useGLTF(
    import.meta.env.VITE_S3_URL + "Map/Gallery/scene.gltf"
  );

  useEffect(
    () => {
      if (props.onLoaded) {
        props.onLoaded();
      }
    },
    [props, props.onLoaded]
  );

  return (
    <group {...props} dispose={null}>
      <group scale={0.015}>
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

        {/* 1011B */}

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

        {/* 1012A */}

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

        {/* 1012B */}

        <group
          position={[-1325.734, 184.435, -812.408]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_004_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.042, -109.836, 5.478]}
          />
        </group>

        {/* 1013A */}

        <group
          position={[-1030.129, 184.435, -812.408]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_004_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.042, -109.836, 5.478]}
          />
        </group>

        {/* 1016A */}

        <group
          position={[-633.201, 184.435, -812.408]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_008_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.043, -17.072, 5.478]}
          />
        </group>

        {/* 1017A */}

        <group
          position={[-189.998, 184.435, -812.408]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.666}
        >
          <mesh
            geometry={nodes.Art_Work_Frame_004_Metal_02_0.geometry}
            material={materials.Metal_02}
            position={[21.042, -109.836, 5.478]}
          />
        </group>

        {/* 1018A */}

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

        {/* 1018B */}

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

        {/* 1018C */}

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

        {/*  */}

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

        {/* 1019B */}

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

        {/* 1020A */}

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

        {/* 1023A */}

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

        {/* 1024A */}

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

        {/* 1025A */}

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

        {/* 1026A */}

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

        {/* 1026B */}

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

        {/* 1027A */}

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

        {/* 1030A */}

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

        {/* 1031A */}

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

        {/* 1101A */}

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

        {/* 1102A */}

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

        {/* 1103A */}

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

        {/*  */}

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

        {/*  */}

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

        {/*  */}

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

        {/*  */}

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

        {/*  */}

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

        {/*  */}

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
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");

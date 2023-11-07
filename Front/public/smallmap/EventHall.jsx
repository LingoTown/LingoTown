import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export function EventHall(props) {
  /* Map */
  const { nodes, materials } = useGLTF(
    import.meta.env.VITE_S3_URL + "Map/EventHall/scene.gltf"
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
      <group scale={0.01}>
        <group
          position={[0, 40.763, -322.971]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[2087.827, 713.238, 41.23]}
        >
          <mesh
            geometry={nodes.stage_stage1_0.geometry}
            material={materials.stage1}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.dec_dec1_0.geometry}
            material={materials.dec1}
          />
        </group>
        <group
          position={[-139.669, 22.472, 916.236]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            geometry={nodes.seat_seat_0_2.geometry}
            material={materials.seat}
          />
        </group>
        <mesh
          geometry={nodes.house_house_0.geometry}
          material={materials.house}
          position={[0, 535.806, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[3699.588, 2374.425, 536.399]}
        />
      </group>
    </group>
  );
}

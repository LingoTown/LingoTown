import React, { useEffect } from "react";
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from 'three';

export const PlayerSelect: React.FC = () => {
    const book = useGLTF("https://b305finalproject.s3.ap-northeast-2.amazonaws.com/PlayerSelect/Medieval_Fantasy/scene.gltf");
    // Characters
    const ManA = useGLTF("https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Player/m_1.glb");
    const WomanA = useGLTF("https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Player/f_1.glb");
    const WomanB = useGLTF("https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Player/f_2.glb");

    /* useEffect */

    // book 투명도 
    useEffect(() => {
        if (book.scene) {
            book.scene.traverse((child: THREE.Object3D) => {
                if ((child as THREE.Mesh).isMesh) {
                    const mesh = child as THREE.Mesh;

                    if (mesh.material && 'opacity' in mesh.material && 'transparent' in mesh.material) {

                        (mesh.material as THREE.Material).transparent = true;
                        (mesh.material as THREE.Material).opacity = 0.7;
                    }
                }
            });
        }
    }, [book]);

    return(
        <>
            {/* <ambientLight intensity={0.5} /> */}
            <Environment preset="sunset" />
            {/* <primitive scale={0.08} position={[0.5, 0.4, 0]} rotation={[THREE.MathUtils.degToRad(20), 0, 0]} object={book.scene} /> */}

            <primitive scale={1} position={[-4, 0, 0]} rotation={[0, 0, 0]} object={ManA.scene}/>
            <primitive scale={1} position={[-2, 0, 0]} rotation={[0, 0, 0]} object={WomanA.scene}/>
            <primitive scale={1} position={[0, 0, 0]} rotation={[0, 0, 0]} object={WomanB.scene}/>
        </>
    );
} 
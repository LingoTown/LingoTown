import React, { useEffect, useState } from "react";
import { useGLTF, Environment, Text } from "@react-three/drei";
import * as THREE from 'three';
import { userAtom } from "../../atom/UserAtom";
import { useRecoilState } from 'recoil';

export const PlayerSelect: React.FC = () => {

    /* User Info */

    const [user, setUser] = useRecoilState(userAtom);
    

    /* 소품 */

    // const book = useGLTF(import.meta.env.VITE_S3_URL + "PlayerSelect/Medieval_Fantasy/scene.gltf");
    const aurora = useGLTF(import.meta.env.VITE_S3_URL + "Effect/Starliner/scene.gltf")
    const lock = useGLTF(import.meta.env.VITE_S3_URL + "Objects/Lock1/scene.gltf")


    /* Characters */
    
    const ManA = useGLTF(import.meta.env.VITE_S3_URL + "Player/m_1.glb");
    const WomanA = useGLTF(import.meta.env.VITE_S3_URL + "Player/f_1.glb");
    const WomanB = useGLTF(import.meta.env.VITE_S3_URL + "Player/f_2.glb");

    const characterPositions: { [key: number]: [number, number, number] } = {
        1: [-4, -0.5, 0],
        2: [-2, -0.5, 0],
        3: [0, -0.5, 0],
    };

    const characterNames: { [key: number]: String } = {
        1: "A",
        2: "B",
        3: "C"
    }

    const textOffsetY = -0.8;
    
    const auroraPositions: { [key: number]: [number, number, number] } = {
        1: [-4, -0.5, 0],
        2: [-2, -0.5, 0],
        3: [0, -0.5, 0]
    }

    // 글자 색 
    const getColorForName = (id: number) => user.characterId === id ? "red" : "black";
    
                          
    return (
        <>
        <Environment preset="sunset" />

        <primitive
            scale={0.5}
            position={auroraPositions[user.characterId]} 
            rotation={[THREE.MathUtils.degToRad(30), 0, THREE.MathUtils.degToRad(-1)]}
            object={aurora.scene}
        />

        <primitive scale={0.1} position={[0, 1.5, 0]} object={lock.scene}/>

        <primitive scale={1} position={characterPositions[1]} object={ManA.scene} />
        <primitive scale={1} position={characterPositions[2]} object={WomanA.scene} />
        <primitive scale={1} position={characterPositions[3]} object={WomanB.scene} />

        {/* 캐릭터 이름 텍스트 */}
        {Object.entries(characterPositions).map(([key, position]) => {
            const id = Number(key); 
            return (
                <Text
                    key={key} // key as string is okay for React key prop
                    position={[position[0], position[1] + textOffsetY, position[2]]}
                    fontSize={0.5}
                    color={getColorForName(id)} // Pass id as number
                >
                    {characterNames[id]} 
                </Text>
            );
        })}
        </>
    );
};
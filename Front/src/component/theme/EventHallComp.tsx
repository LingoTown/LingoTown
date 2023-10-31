import * as THREE from 'three';
import { useControls } from 'leva';
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, useAnimations, Circle } from "@react-three/drei";
import { talkBalloonAtom } from "../../atom/TalkBalloonAtom";
import { useRecoilState } from "recoil";
import { startTalk } from "../../api/Talk";
import { startTalkType } from "../../type/TalkType";
import { KeyPressed, AnimationAction, NpcInfo, CurrentNpc, NPCData } from "./ThemeType";
import { STTAndRecord } from '../talk/SttAndRecordComp';
import { Restaurant } from "../../../public/map/restaurant/Restaurant";
import { HandleKeyDown, HandleKeyUp } from "./util/KeyboardUtil";
import { SetAction } from "./util/PlayerMoveUtil";
import { CircleCheck } from "./util/CircleCheckUtil";
import { useCustomConfirm } from "../util/ModalUtil";
import { PlayerMove } from './util/MSPlayerUtil';
import NPCS from './NpcData/npc.json'

export const EventHallComp: React.FC = () => {

    // Player
    const playerFile = useGLTF("./player/m_1.glb");
    const playerRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);

    // Camera Action

    // 카메라 오프셋 저장
    const cameraOffset = useRef<THREE.Vector3>(new THREE.Vector3(0, 3, -4));
    // 키보드의 화살표 키 상태 저장
    const keysPressed = useRef<KeyPressed>({ ArrowUp: false, ArrowLeft: false, ArrowRight: false, ArrowDown: false });
    // 현재 활성화된 애니메이션 액션을 저장
    const activeAction = useRef<AnimationAction>();
    // 주어진 애니메이션과 씬을 이용하여 애니메이션 액션들을 반환
    const { actions } = useAnimations(playerFile.animations, playerFile.scene);
    // 반환된 객체에서 camera를 구조 분해 할당하여 사용
    const { camera } = useThree();
    // 선형 보간 (lerp) 계산에 사용되는 상수
    const lerpFactor = 0.04;

    function useNPC({id, name, path, position, rotation, scale}: NPCData) {
        const npc = useGLTF(path);
        const npcId = id;
        const npcName = name;
        const npcScale = scale;
        const npcPosition = new THREE.Vector3(...position);
        const npcRotation = new THREE.Vector3(...rotation.map(deg => THREE.MathUtils.degToRad(deg)));
        const npcCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null); 
    
        return { npc, npcId, npcName, npcScale, npcPosition, npcRotation, npcCircleRef };
    }   

    return(
        <>
            <Environment blur={1} background preset="sunset" />

            <primitive scale={0.6} position={[-3.4, 0.42, 0]} rotation={[0, 0, 0]} object={fox.scene}/>
            <primitive scale={0.6} position={[-3.4, 0.42, 0]} rotation={[0, 0, 0]} object={rabbit.scene}/>
        </>
    )
}
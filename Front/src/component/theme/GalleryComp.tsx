import * as THREE from 'three';
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, useAnimations, Circle } from "@react-three/drei";
import { talkBalloonAtom } from "../../atom/TalkBalloonAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { startTalk } from "../../api/Talk";
import { startTalkType } from "../../type/TalkType";
import { KeyPressed, AnimationAction, NpcInfo, CurrentNpc } from "./ThemeType";
import { STTAndRecord } from '../talk/SttAndRecordComp';
import { Gallery } from "../../../public/map/Gallery.jsx";
import { HandleKeyDown, HandleKeyUp } from "./util/KeyboardUtil";
import { SetAction, PlayerMove } from "./util/PlayerMoveUtil";
import { CircleCheck } from "./util/CircleCheckUtil";
import { useCustomConfirm } from "../util/ModalUtil";
import { talkStateAtom } from '../../atom/TalkStateAtom';
import { Wall } from '../util/block/Wall';
import { useCylinder } from '@react-three/cannon'
import { Barry } from '../../../public/name/gallery/Barry.tsx'
import { Jimmy } from '../../../public/name/gallery/Jimmy.tsx'
import { Jina } from '../../../public/name/gallery/Jina.tsx'

export const GalleryComp: React.FC = () => {
  //wall
  const container = [
    { size: [3, 10, 35], position: [35, 5, 0], wallKey: 'RW1',  name: 'wall', mass:0}, 
    { size: [3, 10, 40], position: [-29, 5, 3], wallKey: 'LW1', name: 'wall', mass:0}, 

    { size: [15, 10, 3], position: [27, 5, 7], wallKey: 'FW1', name: 'wall', mass:0},
    { size: [12, 10, 3], position: [3, 5, 7], wallKey: 'FW1', name: 'wall', mass:0},
    { size: [16, 10, 3], position: [-21, 5, 7], wallKey: 'FW1', name: 'wall', mass:0},
    { size: [70, 10, 3], position: [-1, 5, 20], wallKey: 'FW1', name: 'wall', mass:0},
    { size: [3, 10, 12], position: [20, 5, 13], wallKey: 'RW1', name: 'wall', mass:0},
    { size: [3, 10, 12], position: [9, 5, 13], wallKey: 'LW1', name: 'wall', mass:0},
    { size: [3, 10, 12], position: [-1, 5, 13], wallKey: 'RW1', name: 'wall', mass:0},
    { size: [3, 10, 12], position: [-13, 5, 13], wallKey: 'LW1', name: 'wall', mass:0},

    { size: [15, 10, 3], position: [27, 5, -12], wallKey: 'BW1', name: 'wall', mass:0},
    { size: [44, 10, 3], position: [-11, 5, -12], wallKey: 'BW1', name: 'wall', mass:0},
    { size: [70, 10, 3], position: [-1, 5, -20], wallKey: 'BW1', name: 'wall', mass:0},
    { size: [3, 10, 12], position: [20, 5, -17], wallKey: 'RW1', name: 'wall', mass:0},
    { size: [3, 10, 12], position: [9, 5, -17], wallKey: 'LW1', name: 'wall', mass:0}, 
  ];

  // player
  const playerFile = useGLTF(import.meta.env.VITE_S3_URL + "NPC/m_1.glb");
  const [playerPosition, setPlayerPosition] = useState([-20, 0, 0]);
  const [playerRotation, setPlayerRotation]= useState([0,1.56,0]);
  const [playerRef, playerApi] = useCylinder(() => ({
    position: [playerPosition[0], playerPosition[1], playerPosition[2]], 
    rotation:[playerRotation[0], playerRotation[1], playerRotation[2]], 
    args:[0.5,0,0.1], friction: 1, restitution: 0, allowSleep:true, mass: 0, 
  }));

  // camera action
  const cameraOffset = useRef<THREE.Vector3>(new THREE.Vector3(0, 3, -5.5));
  const keysPressed = useRef<KeyPressed>({ ArrowUp: false, ArrowLeft: false, ArrowRight: false, ArrowDown: false });
  const activeAction = useRef<AnimationAction>();
  const { actions } = useAnimations(playerFile.animations, playerFile.scene);
  const { camera } = useThree();
  const lerpFactor = 0.04;

  // NPC
  const jinaFile = useGLTF(import.meta.env.VITE_S3_URL + "NPC/f_10.glb");
  const jinaPosition = new THREE.Vector3(-9, 0.1, -6);
  const jinaCameraPosition = new THREE.Vector3(-8.8, 1, -9);
  const jinaCameraRotation = new THREE.Vector3(0, -3.3, 0);
  const jinaCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const jinaAction = useRef<AnimationAction>();
  const jinaActions = useAnimations(jinaFile.animations, jinaFile.scene).actions;

  const jimmyFile = useGLTF(import.meta.env.VITE_S3_URL + "NPC/m_16.glb");
  const jimmyPosition = new THREE.Vector3(7, 0.1, -1);
  const jimmyCameraPosition = new THREE.Vector3(4, 1, -0.9);
  const jimmyCameraRotation = new THREE.Vector3(0, -1.5, 0);
  const jimmyCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const jimmyAction = useRef<AnimationAction>();
  const jimmyActions = useAnimations(jimmyFile.animations, jimmyFile.scene).actions;
  
  const barryFile = useGLTF(import.meta.env.VITE_S3_URL + "NPC/m_19.glb");
  const barryPosition = new THREE.Vector3(-15, 0.1, 2);
  const barryCameraPosition = new THREE.Vector3(-18, 1, 2);
  const barryCameraRotation = new THREE.Vector3(0, -1.5, 0);
  const barryCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const barryAction = useRef<AnimationAction>();
  const barryActions = useAnimations(barryFile.animations, barryFile.scene).actions;

  const currentNpc = useRef<CurrentNpc>({ id: 0, img: null, name: null, targetPosition:null, targetRotation:null });
  const npcInfoList: NpcInfo[] = [
    { id: 20, name: "Jina", targetPosition: jinaCameraPosition, targetRotation:jinaCameraRotation, ref: jinaCircleRef },
    { id: 32, name: "Jimmy", targetPosition: jimmyCameraPosition, targetRotation:jimmyCameraRotation, ref: jimmyCircleRef },
    { id: 38, name: "barry", targetPosition: barryCameraPosition, targetRotation:barryCameraRotation, ref: barryCircleRef },
  ];

  // state
  const [isInsideCircle, setIsInsideCircle] = useState<boolean>(false);
  const [talkBalloon, setTalkBalloon] = useRecoilState(talkBalloonAtom);
  const setTalkState = useSetRecoilState(talkStateAtom);
  const isMove = useRef(true);

  // value
  const CIRCLE_RADIUS = 3;
  const LANGUAGE = "en-US";
  const SENTENCE = "Would you like to start a conversation with ";

  // function
  const customConfirm = useCustomConfirm();
  const handleKeyDown = HandleKeyDown(SetAction, keysPressed, activeAction, actions, isMove, playerRef);
  const handleKeyUp = HandleKeyUp(SetAction, keysPressed, activeAction, actions, isMove, playerRef);
  const animate = () => {
    requestAnimationFrame(animate);
    camera.position.lerp(currentNpc.current.targetPosition, lerpFactor);
    camera.rotation.x += (currentNpc.current.targetRotation.x - camera.rotation.x) * lerpFactor;
    camera.rotation.y += (currentNpc.current.targetRotation.y - camera.rotation.y) * lerpFactor;
    camera.rotation.z += (currentNpc.current.targetRotation.z - camera.rotation.z) * lerpFactor;
  }

  useFrame((_state, deltaTime) => {
    PlayerMove(playerRef, playerApi, keysPressed, camera, cameraOffset, container, setPlayerPosition, playerRotation, setPlayerRotation, isMove, deltaTime, activeAction, actions);
    CircleCheck(playerRef, npcInfoList, currentNpc, CIRCLE_RADIUS, isInsideCircle, setIsInsideCircle);
  });

  useEffect(() => {
    // 유저 NPC 기본 포즈 설정
    SetAction('Defeat', activeAction, actions, playerRef);
    SetAction('Idle', jinaAction, jinaActions, null);
    SetAction('Idle', jimmyAction, jimmyActions, null);
    SetAction('Idle', barryAction, barryActions, null);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const doStartTalk = async(npcId: number) => {
    await startTalk(npcId, ({data}) => {
      const result = data.data as startTalkType;
      setTalkState(prevState => ({ ...prevState, talkId: result.talkId }));      
      setTalkBalloon(prev => ({ ...prev, topicList: result.topicList }));
    }, (error) => {
      console.log(error);
    }); 
  }

  useEffect(() => {
    const handleKeyDown = async(event: KeyboardEvent) => {
      if (event.code === 'Space' && isInsideCircle) {
        isMove.current = false;
        const npc = currentNpc.current?.name;
        if (npc != null) {
          const flag = await customConfirm(npc + "", SENTENCE + npc + "?");
          if (flag) {
            animate();
            setTalkBalloon(prev => ({ ...prev, isShow: true }));
            await doStartTalk(currentNpc.current.id);
            return
          }
        }
        isMove.current = true;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isInsideCircle]);

  useEffect(() => {
    isMove.current = !talkBalloon.isShow;
  }, [talkBalloon.isShow])

  useEffect(() => {
    isMove.current = talkBalloon.isMove;
  }, [talkBalloon.isMove])

  return(
    <>
      {/* 벽 */}
      <group>
        { container.map((props, index) => <Wall key={index} {...props}/> ) }
      </group>

      {/* STT */}
      { talkBalloon.isShow? <STTAndRecord lang={LANGUAGE} /> : null }
      
      {/* NPC 이름 */}
      <Jina />
      <Jimmy />
      <Barry />
      
      {/* 배경, 조명 */}
      <Gallery />
      <Environment blur={1} background preset="forest" />

      {/* Player */}
      <primitive visible={!talkBalloon.isShow} scale={1} ref={playerRef} rotation={[0, Math.PI, 0]} object={playerFile.scene}/>

      {/* NPC */}
      <Circle ref={jinaCircleRef} args={[CIRCLE_RADIUS]} position={jinaPosition} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="pink" emissive="#ff69b4" emissiveIntensity={5} side={THREE.DoubleSide} transparent={true} opacity={1} />
      </Circle>
      <primitive scale={1} position={jinaPosition} rotation={[0, -3, 0]} object={jinaFile.scene} />
      
      <Circle ref={jimmyCircleRef} args={[CIRCLE_RADIUS]} position={jimmyPosition} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="wheat" emissive="wheat" emissiveIntensity={1} side={THREE.DoubleSide} transparent={true} opacity={1} />
      </Circle>
      <primitive scale={1} position={jimmyPosition} rotation={[0, -1.6, 0]} object={jimmyFile.scene} />
    
      <Circle ref={barryCircleRef} args={[CIRCLE_RADIUS]} position={barryPosition} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="wheat" emissive="wheat" emissiveIntensity={1} side={THREE.DoubleSide} transparent={true} opacity={1} />
      </Circle>
      <primitive scale={1} position={barryPosition} rotation={[0, -1.6, 0]} object={barryFile.scene} />
    </>
  )
} 

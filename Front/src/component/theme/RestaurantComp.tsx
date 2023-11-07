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
import { Restaurant } from "../../../public/map/Restaurant";
import { HandleKeyDown, HandleKeyUp } from "./util/KeyboardUtil";
import { CircleCheck } from "./util/CircleCheckUtil";
import { useCustomConfirm } from "../util/ModalUtil";
import { talkStateAtom } from '../../atom/TalkStateAtom';
import { PlayerMove, SetAction } from './util/MSPlayerUtil';
import { Wall } from '../util/block/Wall';
import { useCylinder } from '@react-three/cannon'
import { Isabel } from '../../../public/name/resrtaurant/Isabel.tsx'
import { Luke } from '../../../public/name/resrtaurant/Luke.tsx'
import { Olivia } from '../../../public/name/resrtaurant/Olivia.tsx'
import { loadingAtom } from '../../atom/LoadingAtom.ts';

export const RestaurantComp: React.FC = () => {
  
  //wall
  const container = [
    { size: [15, 2, 38], position: [-5, -1.1, -5], wallKey: 'BF1', name: 'floor', mass:0},
    { size: [15, 10, 3], position: [-5, 5, -20], wallKey: 'BW1', name: 'wall', mass:0},
    { size: [3, 10, 35], position: [4, 5, -3], wallKey: 'RW1',  name: 'wall', mass:0},
    { size: [15, 10, 3], position: [-4, 5, 15], wallKey: 'FW1', name: 'wall', mass:0},
    { size: [3, 10, 40], position: [-10, 5, 0], wallKey: 'LW1', name: 'wall', mass:0},
    // 추가벽
    { size: [3, 7, 15], position: [-0.4, 2, 6], wallKey: 'RW1',  name: 'wall', mass:0},
    { size: [3, 7, 20], position: [1, 2, -10], wallKey: 'RW1',  name: 'wall', mass:0},
  ];

  // player
  const playerFile = useGLTF(import.meta.env.VITE_S3_URL + "NPC/m_1.glb");
  const [playerPosition, setPlayerPosition] = useState([-5.5, 0, 12]);
  const [playerRotation, setPlayerRotation]= useState([0,3,0]);
  const [playerRef, playerApi] = useCylinder(() => ({ 
    position: [playerPosition[0], playerPosition[1], playerPosition[2]], 
    rotation:[playerRotation[0], playerRotation[1], playerRotation[2]], 
    args:[0.5,0,0.1], friction: 1, restitution: 0, allowSleep:true, mass: 0, 
  }));

  // camera action
  const cameraOffset = useRef<THREE.Vector3>(new THREE.Vector3(0, 3, -4));
  const keysPressed = useRef<KeyPressed>({ ArrowUp: false, ArrowLeft: false, ArrowRight: false, ArrowDown: false });
  const activeAction = useRef<AnimationAction>();
  const { actions } = useAnimations(playerFile.animations, playerFile.scene);
  const { camera } = useThree();
  const lerpFactor = 0.04;

  // NPC
  const oliviaFile = useGLTF(import.meta.env.VITE_S3_URL + "NPC/f_17.glb");
  const oliviaPosition = new THREE.Vector3(-7.5, 0.1, 2);
  const oliviaCameraPosition = new THREE.Vector3(-5, 1, 2.0);
  const oliviaCameraRotation = new THREE.Vector3(0, THREE.MathUtils.degToRad(90), 0);
  const oliviaCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const oliviaAction = useRef<AnimationAction>();
  const oliviaActions = useAnimations(oliviaFile.animations, oliviaFile.scene).actions;

  const lukeFile = useGLTF(import.meta.env.VITE_S3_URL + "NPC/m_2.glb");
  const lukePosition = new THREE.Vector3(-3, 0.1, -8);
  const lukeCameraPosition = new THREE.Vector3(-3, 2, -5);
  const lukeCameraRotation = new THREE.Vector3(THREE.MathUtils.degToRad(-30.34), 0, 0);
  const lukeCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const lukeAction = useRef<AnimationAction>();
  const lukeActions = useAnimations(lukeFile.animations, lukeFile.scene).actions;

  const isabelFile = useGLTF(import.meta.env.VITE_S3_URL + "NPC/f_13.glb");
  const isabelPosition = new THREE.Vector3(-5, 0.1, 9);
  const isabelCameraPosition = new THREE.Vector3(-5, 2, 12);
  const isabelCameraRotation = new THREE.Vector3(THREE.MathUtils.degToRad(-30.34), 0, 0);
  const isabelCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const isabelAction = useRef<AnimationAction>();
  const isabelActions = useAnimations(isabelFile.animations, isabelFile.scene).actions;

  const currentNpc = useRef<CurrentNpc>({ id: 0, img: null, name: null, targetPosition:null, targetRotation:null });
  const npcInfoList: NpcInfo[] = [
    { id: 4, name: "Luke", targetPosition: lukeCameraPosition, targetRotation:lukeCameraRotation, ref: lukeCircleRef },
    { id: 33, name: "Olivia", targetPosition: oliviaCameraPosition, targetRotation:oliviaCameraRotation, ref: oliviaCircleRef },
    { id: 26, name: "Isabel", targetPosition: isabelCameraPosition, targetRotation:isabelCameraRotation, ref: isabelCircleRef}
  ];

  // state
  const [isInsideCircle, setIsInsideCircle] = useState<boolean>(false);
  const [talkBalloon, setTalkBalloon] = useRecoilState(talkBalloonAtom);
  const setTalkState = useSetRecoilState(talkStateAtom);
  const isMove = useRef(true);
  const isModal = useRef(false);
  const [loading, setLoading] = useRecoilState(loadingAtom);

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
    PlayerMove(playerRef, playerApi, keysPressed, camera, cameraOffset, container, setPlayerPosition, playerRotation, setPlayerRotation, isMove, deltaTime, activeAction, actions, isModal);
    CircleCheck(playerRef, npcInfoList, currentNpc, CIRCLE_RADIUS, isInsideCircle, setIsInsideCircle);
  });

  useEffect(() => {
    // 유저 NPC 기본 포즈 설정
    SetAction('Defeat', activeAction, actions, playerRef);
    SetAction('Idle', oliviaAction, oliviaActions, null);
    SetAction('Idle', lukeAction, lukeActions, null);
    SetAction('Idle', isabelAction, isabelActions, null);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    if(loading) setLoading(() => ({loading:false}));

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

  useEffect(() => {
    isModal.current = talkBalloon.isModal;
  }, [talkBalloon.isModal])

  return(
    <>
      {/* 벽 */}
      <group>
        { container.map((props, index) => <Wall key={index} {...props}/> ) }
      </group>

      {/* STT */}
      { talkBalloon.isShow? <STTAndRecord lang={LANGUAGE} /> : null }

      {/* NPC 이름 */}
      <Isabel />
      <Luke />
      <Olivia />

      {/* 배경, 조명 */}
      <Restaurant/>
      <Environment blur={1} background preset="sunset" />

      {/* Player */}
      <primitive visible={!talkBalloon.isShow} scale={1} ref={playerRef} position={[-6.5, 0.1, 11]} rotation={[0, Math.PI, 0]} object={playerFile.scene}/>

      {/* NPC */}
      <Circle ref={oliviaCircleRef} args={[CIRCLE_RADIUS]} position={oliviaPosition} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="pink" emissive="#ff69b4" emissiveIntensity={5}  side={THREE.DoubleSide} transparent={true} opacity={0.3} />
      </Circle>
      <primitive scale={1} position={oliviaPosition} rotation={[0, 1.5, 0]} object={oliviaFile.scene}/>

      <Circle ref={lukeCircleRef} args={[CIRCLE_RADIUS]} position={lukePosition} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="wheat" emissive="wheat" emissiveIntensity={1}  side={THREE.DoubleSide} transparent={true} opacity={0.3} />
      </Circle>
      <primitive scale={1} position={lukePosition} rotation={[0, 0, 0]} object={lukeFile.scene} />

      <Circle ref={isabelCircleRef} args={[CIRCLE_RADIUS]} position={isabelPosition} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="wheat" emissive="wheat" emissiveIntensity={1}  side={THREE.DoubleSide} transparent={true} opacity={0.3} />
      </Circle>
      <primitive scale={1} position={isabelPosition} rotation={[0, 0, 0]} object={isabelFile.scene} />
    </>
  )
} 

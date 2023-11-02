import * as THREE from 'three';
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, useAnimations, Circle } from "@react-three/drei";
import { talkBalloonAtom } from "../../atom/TalkBalloonAtom";
import { useSetRecoilState } from "recoil";
import { startTalk } from "../../api/Talk";
import { startTalkType } from "../../type/TalkType";
import { KeyPressed, AnimationAction, NpcInfo, CurrentNpc } from "./ThemeType";
import { STTAndRecord } from '../talk/SttAndRecordComp';
import {Park} from '../../../public/map/park/Park';
import { HandleKeyDown, HandleKeyUp } from "./util/KeyboardUtil";
import { PlayerMove, SetAction } from "./util/PlayerMoveUtil";
import { CircleCheck } from "./util/CircleCheckUtil";
import { useCustomConfirm } from "../util/ModalUtil";
import { Wall } from '../util/block/Wall';
import { useCylinder } from '@react-three/cannon'
import { talkStateAtom } from '../../atom/TalkStateAtom';

export const ParkComp: React.FC = () => {

  //wall
  const container = [
    { size: [80, 2, 40], position: [-15, -1.5, 0], wallKey: 'C01', name: 'floor', mass:0}, // bottom
    { size: [75, 27, 3], position: [-15, 10, -19], wallKey: 'C02', name: 'wall', mass:0}, // back wall
    { size: [3, 27, 40], position: [23, 10, 0], wallKey: 'C03',  name: 'wall', mass:0}, // right wall
    { size: [75, 27, 3], position: [-15, 10, 19], wallKey: 'C04', name: 'wall', mass:0}, // front wall,
    { size: [3, 27, 40], position: [-52, 10, 0], wallKey: 'C05', name: 'wall', mass:0}, // left wall
  ];

  // player
  const playerFile = useGLTF("./player/m_1.glb");
  // const playerRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  
  //Player cannon
  const [playerPosition, setPlayerPosition] = useState([0, 0, 0]);
  const [playerRotation, setPlayerRotation]= useState([0, 0, 0]);
  const [playerRef, playerApi] = useCylinder(() => ({ 
    mass: 0, 
    position: [playerPosition[0], playerPosition[1], playerPosition[2]], 
    rotation:[playerRotation[0], playerRotation[1], playerRotation[2]], 
    args:[0.5,0,0.1],
    friction: 1,     // Adjust the value as needed
    restitution: 0,   // Set to 0 to avoid bouncing
    allowSleep:true,
  }));

  // camera action
  const cameraOffset = useRef<THREE.Vector3>(new THREE.Vector3(0, 3, -4));
  const keysPressed = useRef<KeyPressed>({ ArrowUp: false, ArrowLeft: false, ArrowRight: false, ArrowDown: false });
  const activeAction = useRef<AnimationAction>();
  const { actions } = useAnimations(playerFile.animations, playerFile.scene);
  const { camera } = useThree();

  // NPC
  const fox = useGLTF("./npc/fox.glb");
  const rabbit = useGLTF("./npc/rabbit.glb");
  const foxCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const rabbitCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const currentNpc = useRef<CurrentNpc>({ id: 0, img: null, name: null, targetPosition:null, targetRotation:null });
  const foxPosition = new THREE.Vector3(-3.44, 1.8, 2.33);
  const foxRotation = new THREE.Vector3(THREE.MathUtils.degToRad(-30.34), 0, 0);
  const rabbitPosition = new THREE.Vector3(-6.4, 1.8, 8.51);
  const rabbitRotation = new THREE.Vector3(THREE.MathUtils.degToRad(-30.34), 0, 0);
  const npcInfoList: NpcInfo[] = [
    { id: 1, name: "Rabbit", targetPosition: rabbitPosition, targetRotation:rabbitRotation, ref: rabbitCircleRef },
    { id: 2, name: "Fox", targetPosition: foxPosition, targetRotation:foxRotation, ref: foxCircleRef },
  ];

  // state
  const [isInsideCircle, setIsInsideCircle] = useState<boolean>(false);
  const setTalkBalloon = useSetRecoilState(talkBalloonAtom);
  const isMove = useRef(true);
  const setTalkState = useSetRecoilState(talkStateAtom);

  // value
  const CIRCLE_RADIUS = 3;
  const LANGUAGE = "ja";

  // function
  const customConfirm = useCustomConfirm();
  const handleKeyDown = HandleKeyDown(SetAction, keysPressed, activeAction, actions, isMove);
  const handleKeyUp = HandleKeyUp(SetAction, keysPressed, activeAction, actions, isMove);

  useFrame(() => {
    PlayerMove(playerRef, playerApi, keysPressed, camera, cameraOffset, container, setPlayerPosition, playerRotation, setPlayerRotation, isMove);
    CircleCheck(playerRef, npcInfoList, currentNpc, CIRCLE_RADIUS, isInsideCircle, setIsInsideCircle);
  });

  useEffect(() => {
    SetAction('Idle', activeAction, actions);
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
      if (event.code === 'Space') {
        if (isInsideCircle) {
          isMove.current = false;
          const npc = currentNpc.current?.name;
          if (npc != null) {
            const flag = await customConfirm(npc + "", "Would you like to start a conversation with " + npc + "?")
            if (flag) {
              setTalkBalloon(prev => ({ ...prev, isShow: true, profileImg: currentNpc.current.img }));
              doStartTalk(currentNpc.current.id);
            }
          }
          isMove.current = true;
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isInsideCircle]);


  return(
    <>
      {/* wall */}
      <group>
        { container.map((props, index) => <Wall key={index} {...props}/> ) }
      </group>

      <STTAndRecord lang={LANGUAGE} />
      <primitive scale={1}  ref={playerRef} position={[-6.5, 0.1, 11]} rotation={[0, Math.PI, 0]} object={playerFile.scene}/>
      <Park/>
      <Environment blur={1} background preset="sunset" />
      <Circle ref={foxCircleRef} args={[3, 32]} position={[-3.4, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="pink" emissive="#ff69b4" emissiveIntensity={5}  side={THREE.DoubleSide} transparent={true} opacity={0.2} />
      </Circle>
      <primitive scale={0.6} position={[-3.4, 0.42, 0]} rotation={[0, 0, 0]} object={fox.scene}/>
      <Circle ref={rabbitCircleRef} args={[3, 32]} position={[-6.4, 0.03, 7]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="wheat" emissive="wheat" emissiveIntensity={1}  side={THREE.DoubleSide} transparent={true} opacity={0.2} />
      </Circle>
      <primitive scale={0.6} position={[-6.4, 0.56, 7]} rotation={[0, 0, 0]} object={rabbit.scene} />
    </>
  )
} 

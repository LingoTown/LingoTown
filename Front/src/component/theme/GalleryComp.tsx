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
import { loadingAtom } from '../../atom/LoadingAtom.ts';

export const GalleryComp: React.FC = () => {

  //wall
  const container = [
    { size: [70, 10, 3], position: [0, 5, 9], wallKey: 'FW1', name: 'wall', mass:0}, // 
    { size: [3, 10, 35], position: [30, 5, 0], wallKey: 'RW1',  name: 'wall', mass:0}, // Right
    { size: [70, 10, 3], position: [-1, 5, -14], wallKey: 'BW1', name: 'wall', mass:0}, // Back
    { size: [3, 10, 40], position: [-25, 5, 3], wallKey: 'LW1', name: 'wall', mass:0}, // 
  ];

  // player
  const playerFile = useGLTF("https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_1.glb");
  const [playerPosition, setPlayerPosition] = useState([-20, 0, 0]);
  const [playerRotation, setPlayerRotation]= useState([0,1.56,0]);
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
  const cameraOffset = useRef<THREE.Vector3>(new THREE.Vector3(0, 3, -5.5));
  const keysPressed = useRef<KeyPressed>({ ArrowUp: false, ArrowLeft: false, ArrowRight: false, ArrowDown: false });
  const activeAction = useRef<AnimationAction>();
  const { actions } = useAnimations(playerFile.animations, playerFile.scene);
  const { camera } = useThree();
  const lerpFactor = 0.04;

  // NPC
  const chefFile = useGLTF("https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/f_17.glb");
  const chefPosition = new THREE.Vector3(-8.8, 1, -9);
  const chefRotation = new THREE.Vector3(0, -3.3, 0);
  const chefCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const chefAction = useRef<AnimationAction>();
  const chefActions = useAnimations(chefFile.animations, chefFile.scene).actions;

  const customerFile = useGLTF("https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_2.glb");
  const customerPosition = new THREE.Vector3(4, 1, -0.9);
  const customerRotation = new THREE.Vector3(0, -1.5, 0);
  const customerCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const customerAction = useRef<AnimationAction>();
  const customerActions = useAnimations(customerFile.animations, customerFile.scene).actions;
  
  const currentNpc = useRef<CurrentNpc>({ id: 0, img: null, name: null, targetPosition:null, targetRotation:null });
  const npcInfoList: NpcInfo[] = [
    { id: 6, name: "Luke", targetPosition: customerPosition, targetRotation:customerRotation, ref: customerCircleRef },
    { id: 33, name: "Olivia", targetPosition: chefPosition, targetRotation:chefRotation, ref: chefCircleRef },
  ];

  // state
  const [isInsideCircle, setIsInsideCircle] = useState<boolean>(false);
  const [talkBalloon, setTalkBalloon] = useRecoilState(talkBalloonAtom);
  const setTalkState = useSetRecoilState(talkStateAtom);
  const isMove = useRef(true);
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
    PlayerMove(playerRef, playerApi, keysPressed, camera, cameraOffset, container, setPlayerPosition, playerRotation, setPlayerRotation, isMove, deltaTime, activeAction, actions);
    CircleCheck(playerRef, npcInfoList, currentNpc, CIRCLE_RADIUS, isInsideCircle, setIsInsideCircle);
  });

  useEffect(() => {
    // 유저 NPC 기본 포즈 설정
    SetAction('Defeat', activeAction, actions, playerRef);
    SetAction('Idle', chefAction, chefActions, null);
    SetAction('Idle', customerAction, customerActions, null);

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

  return(
    <>
      <group>
        { container.map((props, index) => <Wall key={index} {...props}/> ) }
      </group>
      { talkBalloon.isShow? <STTAndRecord lang={LANGUAGE} /> : null }
      <primitive visible={!talkBalloon.isShow} scale={1} ref={playerRef} rotation={[0, Math.PI, 0]} object={playerFile.scene}/>
      <Gallery />
      <Jina />
      <Jimmy />
      <Barry />
      <Environment blur={1} background preset="forest" />

      <Circle ref={chefCircleRef} args={[3, 32]} position={[-9, 0, -6]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="pink" emissive="#ff69b4" emissiveIntensity={5}  side={THREE.DoubleSide} transparent={true} opacity={0} />
      </Circle>
      <primitive scale={1} position={[-9, 0, -6]} rotation={[0, -3, 0]} object={chefFile.scene}/>
      
      <Circle ref={customerCircleRef} args={[3, 32]} position={[7, 0, -1]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="wheat" emissive="wheat" emissiveIntensity={1}  side={THREE.DoubleSide} transparent={true} opacity={0} />
      </Circle>
      <primitive scale={1} position={[7, 0, -1]} rotation={[0, -1.6, 0]} object={customerFile.scene} />
    </>
  )
} 

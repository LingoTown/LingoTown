import * as THREE from 'three';
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, useAnimations, Circle } from "@react-three/drei";
import { KeyPressed, AnimationAction, NpcInfo, CurrentNpc } from "../theme/ThemeType.ts";
import { Restaurant } from "../../../public/map/Restaurant.jsx";
import { HandleKeyDown, HandleKeyUp } from "../theme/util/KeyboardUtil.ts";
import { CircleCheck } from "../theme/util/CircleCheckUtil.ts";
import { useCustomConfirm } from "../util/ModalUtil.ts";
import { PlayerMove, SetAction } from '../theme/util/PlayerMoveUtil.ts';
import { Wall } from '../util/block/Wall.tsx';
import { useCylinder } from '@react-three/cannon'
import { Luke } from '../../../public/name/restaurant/Luke.tsx'
import { Olivia } from '../../../public/name/restaurant/Olivia.tsx'
import { talkBalloonAtom } from "../../atom/TalkBalloonAtom";
import { useRecoilValue } from "recoil";

export const ExploreComp: React.FC = () => {
  //wall
  const container = [
    { size: [15, 2, 38], position: [-5, -1.1, -5], wallKey: 'BF1', name: 'floor', mass:0}, // bottom
    { size: [15, 10, 3], position: [-5, 5, -20], wallKey: 'BW1', name: 'wall', mass:0}, // back wall
    { size: [3, 10, 35], position: [4, 5, -3], wallKey: 'RW1',  name: 'wall', mass:0}, // right wall
    { size: [15, 10, 3], position: [-4, 5, 15], wallKey: 'FW1', name: 'wall', mass:0}, // front wall,
    { size: [3, 10, 40], position: [-10, 5, 0], wallKey: 'LW1', name: 'wall', mass:0}, // left wall

    // 추가벽
    { size: [3, 7, 15], position: [-0.4, 2, 6], wallKey: 'RW1',  name: 'wall', mass:0},
    { size: [3, 7, 20], position: [1, 2, -10], wallKey: 'RW1',  name: 'wall', mass:0},
  ];

  // player
  const playerFile = useGLTF(import.meta.env.VITE_S3_URL + "NPC/m_1.glb");
  const [playerPosition, setPlayerPosition] = useState([-5.5, 0, 12]);
  const [playerRotation, setPlayerRotation]= useState([0,3,0]);
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
  const lerpFactor = 0.04;

  // NPC
  const chefFile = useGLTF(import.meta.env.VITE_S3_URL + "NPC/f_17.glb");
  const chefPosition = new THREE.Vector3(-5, 1, 2.0);
  const chefRotation = new THREE.Vector3(0, THREE.MathUtils.degToRad(90), 0);
  const chefCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const chefAction = useRef<AnimationAction>();
  const chefActions = useAnimations(chefFile.animations, chefFile.scene).actions;

  const customerFile = useGLTF(import.meta.env.VITE_S3_URL + "NPC/m_2.glb");
  const customerPosition = new THREE.Vector3(-3, 2, -5);
  const customerRotation = new THREE.Vector3(THREE.MathUtils.degToRad(-30.34), 0, 0);
  const customerCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const customerAction = useRef<AnimationAction>();
  const customerActions = useAnimations(customerFile.animations, customerFile.scene).actions;

  const talkBalloon = useRecoilValue(talkBalloonAtom);
  
  const currentNpc = useRef<CurrentNpc>({ id: 0, img: null, name: null, targetPosition:null, targetRotation:null });
  const npcInfoList: NpcInfo[] = [
    { id: 6, name: "Luke", targetPosition: customerPosition, targetRotation:customerRotation, ref: customerCircleRef },
    { id: 33, name: "Olivia", targetPosition: chefPosition, targetRotation:chefRotation, ref: chefCircleRef },
  ];

  // state
  const [isInsideCircle, setIsInsideCircle] = useState<boolean>(false);
  const isMove = useRef(true);

  // value
  const CIRCLE_RADIUS = 3;
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
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = async(event: KeyboardEvent) => {
      if (event.code === 'Space' && isInsideCircle) {
        isMove.current = false;
        const npc = currentNpc.current?.name;
        if (npc != null) {
          const flag = await customConfirm(npc + "", SENTENCE + npc + "?");
          if (flag) {
            animate();
            alert("로그인후 사용 가능합니다.")
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
    isMove.current = talkBalloon.isMove;
  }, [talkBalloon.isMove])

  return(
    <>
      <group>
        { container.map((props, index) => <Wall key={index} {...props}/> ) }
      </group>
      <Luke />
      <Olivia />
      <primitive scale={1} ref={playerRef} position={[-6.5, 0.1, 11]} rotation={[0, Math.PI, 0]} object={playerFile.scene}/>
      <Restaurant/>
      <Environment blur={1} background preset="sunset" />

      {/* chef */}
      <Circle ref={chefCircleRef} args={[3, 32]} position={[-7.5, 0.1, 2]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="pink" emissive="#ff69b4" emissiveIntensity={5}  side={THREE.DoubleSide} transparent={true} opacity={0} />
      </Circle>
      <primitive scale={1} position={[-7.5, 0.1, 2]} rotation={[0, 1.5, 0]} object={chefFile.scene}/>
      
      {/* customer:olivia */}
      <Circle ref={customerCircleRef} args={[3, 32]} position={[-3, 0.1, -8]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="wheat" emissive="wheat" emissiveIntensity={1}  side={THREE.DoubleSide} transparent={true} opacity={0} />
      </Circle>
      <primitive scale={1} position={[-3, 0.1, -8]} rotation={[0, 0, 0]} object={customerFile.scene} />
    </>
  )
} 

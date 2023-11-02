import * as THREE from 'three';
// import { useControls } from 'leva';
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, useAnimations, Circle } from "@react-three/drei";
import { talkBalloonAtom } from "../../atom/TalkBalloonAtom";
import { useSetRecoilState, useRecoilState } from "recoil";
import { startTalk } from "../../api/Talk";
import { startTalkType } from "../../type/TalkType";
import { KeyPressed, AnimationAction, NpcInfo, CurrentNpc } from "./ThemeType";
import { STTAndRecord } from '../talk/SttAndRecordComp';
import { Park } from '../../../public/map/park/Park';
import { HandleKeyDown, HandleKeyUp } from "./util/KeyboardUtil";
import { CircleCheck } from "./util/CircleCheckUtil";
import { useCustomConfirm } from "../util/ModalUtil";
import { PlayerMove, SetAction } from './util/PlayerMoveUtil';
import { Wall } from '../util/block/Wall';
import { useCylinder, useSphere } from '@react-three/cannon'
import { talkStateAtom } from '../../atom/TalkStateAtom';

export const ParkComp: React.FC = () => {

  //wall
  const container = [
    { size: [80, 2, 40], position: [-15, -1.1, 0], wallKey: 'BF1', name: 'floor', mass:0}, // bottom floor
    { size: [75, 27, 3], position: [-15, 10, -19], wallKey: 'BW1', name: 'wall', mass:0}, // back wall 
    { size: [3, 27, 40], position: [23, 10, 0], wallKey: 'RW1',  name: 'wall', mass:0}, // right wall
    { size: [75, 27, 3], position: [-15, 10, 19], wallKey: 'FW1', name: 'wall', mass:0}, // front wall,
    { size: [3, 27, 40], position: [-52, 10, 0], wallKey: 'LW1', name: 'wall', mass:0}, // left wall
  ];

  // player
  const playerFile = useGLTF("./player/m_1.glb");
  //Player cannon
  const [playerPosition, setPlayerPosition] = useState([-45, 0, -5]);
  const [playerRotation, setPlayerRotation]= useState([0, 1, 0]);
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
  const jerryFile = useGLTF("https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_14.glb");
  const jerryPosition = new THREE.Vector3(-31, 2.5, 6);
  const jerryRotation = new THREE.Vector3(0, THREE.MathUtils.degToRad(-180), 0);
  const jerryCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const jerryAction = useRef<AnimationAction>();
  const jerryActions = useAnimations(jerryFile.animations, jerryFile.scene).actions;

  const sanhaFile = useGLTF("https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/f_18.glb");
  const sanhaPosition = new THREE.Vector3(-27, 1, -2);
  const sanhaRotation = new THREE.Vector3(0, THREE.MathUtils.degToRad(-90), 0);
  const sanhaCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const sanhaAction = useRef<AnimationAction>();
  const sanhaActions = useAnimations(sanhaFile.animations, sanhaFile.scene).actions;
  const sanhaRef = useRef<THREE.Object3D | undefined>();

  const marcoFile = useGLTF("https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_32.glb");
  const marcoPosition = new THREE.Vector3(-10, 1, 6);
  const marcoRotation = new THREE.Vector3(0, THREE.MathUtils.degToRad(-180), 0);
  const marcoCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const marcoAction = useRef<AnimationAction>();
  const marcoActions = useAnimations(marcoFile.animations, marcoFile.scene).actions;

  const liaFile = useGLTF("https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/f_8.glb");
  const liaPosition = new THREE.Vector3(-43, 1, 2);
  const liaRotation = new THREE.Vector3(0, THREE.MathUtils.degToRad(90), 0);
  const liaCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const liaAction = useRef<AnimationAction>();
  const liaActions = useAnimations(liaFile.animations, liaFile.scene).actions;

  const soccerBallFile = useGLTF("../../public/objects/soccerBall/scene.gltf");
  const [soccerBallRef] = useSphere(() => ({
    mass: 9, // Adjust the mass as needed
    position: [-10, 0, 5],
    rotation: [0, 0, 0],
    args: [0.3], // Adjust the size of the cylinder as needed
    friction: 0.5, // Adjust the friction as needed
    restitution: 0.7, // Adjust the restitution (bounciness) as needed
  }));

  const currentNpc = useRef<CurrentNpc>({ id: 0, img: null, name: null, targetPosition:null, targetRotation:null });
  const npcInfoList: NpcInfo[] = [
    { id: 14, name: "jerry", targetPosition: jerryPosition, targetRotation:jerryRotation, ref: jerryCircleRef },
    { id: 35, name: "sanha", targetPosition: sanhaPosition, targetRotation:sanhaRotation, ref: sanhaCircleRef },
    { id: 53, name: "marco", targetPosition: marcoPosition, targetRotation:marcoRotation, ref: marcoCircleRef },
    { id: 16, name: "lia", targetPosition: liaPosition, targetRotation:liaRotation, ref: liaCircleRef },
  ];

  // state
  const [isInsideCircle, setIsInsideCircle] = useState<boolean>(false);
  const [talkBalloon, setTalkBalloon] = useRecoilState(talkBalloonAtom);
  const isMove = useRef(true);
  const setTalkState = useSetRecoilState(talkStateAtom);

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
    SetAction('Victory', jerryAction, jerryActions, null);
    SetAction('Run', sanhaAction, sanhaActions, null);
    SetAction('Run', marcoAction, marcoActions, null);
    SetAction('Walk', liaAction, liaActions, null);

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

  //sanha run movement
  useFrame((state) => {
    let newX = -50;
    if (sanhaRef.current && sanhaCircleRef.current) {
      newX += state.clock.elapsedTime * 5;
  
      if (newX >= -25) {
        sanhaRef.current.position.x = -25;
        sanhaCircleRef.current.position.x = -25;
  
        // Smooth rotation transition
        const rotationProgress = (newX + 25) / 25; // Value between 0 and 1
        const rotationY = 1.5 + rotationProgress * 3; // Adjust the factor for rotation speed
        sanhaRef.current.rotation.y = rotationY;
  
        // Stop rotating when reaching the desired rotation
        if (rotationProgress >= 1) {
          sanhaRef.current.rotation.y = -1.5;
        }else if(sanhaRef.current.rotation.y == -1.5){
          sanhaRef.current.position.x = newX;
          sanhaCircleRef.current.position.x = newX;
        }
      } else {
        sanhaRef.current.position.x = newX;
        sanhaCircleRef.current.position.x = newX;
      }
    }
  });
  


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

      {/* sanha */}
      <Circle ref={sanhaCircleRef} args={[3, 32]} position={[-50, 0, -2]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="pink" emissive="#ff69b4" emissiveIntensity={5}  side={THREE.DoubleSide} transparent={true} opacity={0.2} />
      </Circle>
      <primitive ref={sanhaRef} scale={1} position={[-50, 0.1, -2]} rotation={[0, 1.5, 0]} object={sanhaFile.scene}/>
      
      {/* jerry */}
      <Circle ref={jerryCircleRef} args={[3, 32]} position={[-31, 0, 8]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="wheat" emissive="wheat" emissiveIntensity={1}  side={THREE.DoubleSide} transparent={true} opacity={0.2} />
      </Circle>
      <primitive scale={1} position={[-31, 1.82, 8]} rotation={[0, 3, 0]} object={jerryFile.scene} />

      {/* marco */}
      <Circle ref={marcoCircleRef} args={[3, 32]} position={[-10, 0, 8]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="wheat" emissive="wheat" emissiveIntensity={1}  side={THREE.DoubleSide} transparent={true} opacity={0.2} />
      </Circle>
      <primitive scale={1} position={[-10, 0, 8]} rotation={[0, 3, 0]} object={marcoFile.scene} />
    
      {/* lia */}
      <Circle ref={liaCircleRef} args={[3, 32]} position={[-45, 0, 2]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="wheat" emissive="wheat" emissiveIntensity={1}  side={THREE.DoubleSide} transparent={true} opacity={0.2} />
      </Circle>
      <primitive scale={1} position={[-45, 0, 2]} rotation={[0, 1.5, 0]} object={liaFile.scene}/>
      
      {/* soccerBall */}
      <primitive ref={soccerBallRef} scale={0.3} position={[-10, 0, 5]} rotation={[0, 0, 0]} object={soccerBallFile.scene} />
    </>
  )
} 

import * as THREE from 'three';
// import { useControls } from 'leva';
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, useAnimations, Circle } from "@react-three/drei";
import { talkBalloonAtom } from "../../atom/TalkBalloonAtom";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import { startTalk } from "../../api/Talk";
import { startTalkType } from "../../type/TalkType";
import { KeyPressed, AnimationAction, NpcInfo, CurrentNpc } from "./ThemeType";
import { STTAndRecord } from '../talk/SttAndRecordComp';
import { Park } from '../../../public/map/Park';
import { HandleKeyDown, HandleKeyUp } from "./util/KeyboardUtil";
import { CircleCheck } from "./util/CircleCheckUtil";
import { useCustomConfirm } from "../util/ModalUtil";
import { PlayerMove, SetAction } from './util/PlayerMoveUtil';
import { Wall } from '../util/block/Wall';
import { useCylinder, useSphere } from '@react-three/cannon'
import { talkStateAtom } from '../../atom/TalkStateAtom';
import { Sanha } from '../../../public/name/park/Sanha.tsx';
import { Bonnie } from '../../../public/name/park/Bonnie.tsx';
import { Jerry } from '../../../public/name/park/Jerry.tsx';
import { Marco } from '../../../public/name/park/Marco.tsx';
import { loadingAtom } from '../../atom/LoadingAtom.ts';
import { userAtom } from '../../atom/UserAtom.ts';
 
export const ParkComp: React.FC = () => {

  //wall
  const container = [
    { size: [81, 2, 40], position: [-15, -1.1, 0], wallKey: 'BF1', name: 'floor', mass:0}, // bottom floor
    { size: [75, 27, 3], position: [-15, 10, -19], wallKey: 'BW1', name: 'wall', mass:0}, // back wall 
    { size: [3, 27, 40], position: [22, 10, 0], wallKey: 'RW1',  name: 'wall', mass:0}, // right wall
    { size: [75, 27, 3], position: [-15, 10, 19], wallKey: 'FW1', name: 'wall', mass:0}, // front wall,
    { size: [3, 27, 50], position: [-52, 10, 0], wallKey: 'LW1', name: 'wall', mass:0}, // left wall

    // 축구장 벽
    { size: [40, 10, 0.1], position: [2, 1, -12.5], wallKey: 'BW2', name: 'wall', mass:0}, // back wall 
    { size: [40, 10, 0.1], position: [2, 1, -12.7], wallKey: 'FW3', name: 'wall', mass:0}, // back wall 
    { size: [45, 10, 0.5], position: [1, 1, 12.5], wallKey: 'FW2', name: 'wall', mass:0}, // front wall
    { size: [0.5, 10, 25], position: [-22, 1, 0.5], wallKey: 'RW2',  name: 'wall', mass:0}, //right wall
    { size: [0.5, 10, 25], position: [-21.5, 1, 0.5], wallKey: 'LW2',  name: 'wall', mass:0}, //left wall
  ];

  // player
  const user = useRecoilValue(userAtom);
  const playerFile = useGLTF(user.characterLink);
  //Player cannon
  const [playerPosition, setPlayerPosition] = useState([-45, 0, -5]);    
  const [playerRotation, setPlayerRotation]= useState([0, 1, 0]);
  const [playerRef, playerApi] = useCylinder(() => ({ 
    mass: 0, 
    position: [playerPosition[0], playerPosition[1], playerPosition[2]], 
    rotation:[playerRotation[0], playerRotation[1], playerRotation[2]], 
    args:[0.5,0,3.1],
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
  const jerryFile = useGLTF(import.meta.env.VITE_S3_URL + "NPC/m_14.glb");
  const jerryPosition = new THREE.Vector3(-31, 2.5, 6);
  const jerryRotation = new THREE.Vector3(0, THREE.MathUtils.degToRad(-180), 0);
  const jerryCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const jerryAction = useRef<AnimationAction>();
  const jerryActions = useAnimations(jerryFile.animations, jerryFile.scene).actions;

  const sanhaFile = useGLTF(import.meta.env.VITE_S3_URL + "NPC/f_18.glb");
  const sanhaRef = useRef<THREE.Object3D | undefined>();
  const sanhaPosition = new THREE.Vector3(sanhaRef.current?.position.x===undefined?-50:sanhaRef.current?.position.x-2, 1, sanhaRef.current?.position.z);
  const sanhaRotation = new THREE.Vector3(0, THREE.MathUtils.degToRad(-90), 0);
  const sanhaCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const sanhaAction = useRef<AnimationAction>();
  const sanhaActions = useAnimations(sanhaFile.animations, sanhaFile.scene).actions;
  const [sanhaTalk, setSanhaTalk] = useState(false); //산하가 말하냐 마냐에 따라 움직임 여부를 결정

  const marcoFile = useGLTF(import.meta.env.VITE_S3_URL + "NPC/m_32.glb");
  const marcoPosition = new THREE.Vector3(-10, 1, 6);
  const marcoRotation = new THREE.Vector3(0, THREE.MathUtils.degToRad(-180), 0);
  const marcoCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const marcoAction = useRef<AnimationAction>();
  const marcoActions = useAnimations(marcoFile.animations, marcoFile.scene).actions;

  const bonnieFile = useGLTF(import.meta.env.VITE_S3_URL + "NPC/f_8.glb");
  const bonniePosition = new THREE.Vector3(-43, 1, 2);
  const bonnieRotation = new THREE.Vector3(0, THREE.MathUtils.degToRad(90), 0);
  const bonnieCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const bonnieAction = useRef<AnimationAction>();
  const bonnieActions = useAnimations(bonnieFile.animations, bonnieFile.scene).actions;

  const soccerBallFile = useGLTF(import.meta.env.VITE_S3_URL + "Objects/SoccerBall/scene.gltf");
  const [soccerBallRef] = useSphere(() => ({
    mass: 9,
    position: [-10, 1, 5],
    rotation: [0, 0, 0],
    args: [0.5],
    friction: 0.5,
    restitution: 0.7,
  }));

  const currentNpc = useRef<CurrentNpc>({ id: 0, img: null, gender: "", name: null, targetPosition:null, targetRotation:null });
  const npcInfoList: NpcInfo[] = [
    { id: 14, gender:"Man", name: "jerry", targetPosition: jerryPosition, targetRotation:jerryRotation, ref: jerryCircleRef },
    { id: 35, gender:"Woman", name: "sanha", targetPosition: sanhaPosition, targetRotation:sanhaRotation, ref: sanhaCircleRef },
    { id: 53, gender:"Man", name: "marco", targetPosition: marcoPosition, targetRotation:marcoRotation, ref: marcoCircleRef },
    { id: 16, gender:"Woman", name: "bonnie", targetPosition: bonniePosition, targetRotation:bonnieRotation, ref: bonnieCircleRef },
  ];

  // state
  const [isInsideCircle, setIsInsideCircle] = useState<boolean>(false);
  const [talkBalloon, setTalkBalloon] = useRecoilState(talkBalloonAtom);
  const isMove = useRef(true);
  const isModal = useRef(false);
  const setTalkState = useSetRecoilState(talkStateAtom);
  const [loading, setLoading] = useRecoilState(loadingAtom);

  // value
  const CIRCLE_RADIUS = 3;
  const LANGUAGE = "en-US";
  const SENTENCE = "와(과) 이야기를 시작하시겠습니까";

  // function
  const customConfirm = useCustomConfirm();
  const handleKeyDown = HandleKeyDown(SetAction, keysPressed, activeAction, actions, isMove, playerRef, isModal);
  const handleKeyUp = HandleKeyUp(SetAction, keysPressed, activeAction, actions, isMove, playerRef);
  const animate = () => {
    if (!isModal.current) {
      requestAnimationFrame(animate);
    }
    camera.position.lerp(currentNpc.current.targetPosition, lerpFactor);
    camera.rotation.x += (currentNpc.current.targetRotation.x - camera.rotation.x) * lerpFactor;
    camera.rotation.y += (currentNpc.current.targetRotation.y - camera.rotation.y) * lerpFactor;
    camera.rotation.z += (currentNpc.current.targetRotation.z - camera.rotation.z) * lerpFactor;
  }

  const reRunSanha = () => {
    console.log(sanhaTalk);
    if(sanhaTalk && isMove.current == true || !sanhaTalk && isMove.current == true){ //다시 산하가 뛰게하기
      setSanhaTalk(false);
      if(sanhaRef.current && sanhaRef.current?.rotation.y < -1) {
        sanhaRef.current.rotation.y = 1.5;
      }
    }
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
    SetAction('Walk', bonnieAction, bonnieActions, null);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    if(loading.loading) setLoading(() => ({loading:false}));

    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const doStartTalk = async(npcId: number) => {
    await startTalk(npcId, ({data}) => {
      const result = data.data as startTalkType;
      setTalkState(prevState => ({ ...prevState, talkId: result.talkId, gender: currentNpc.current.gender }));   
      setTalkBalloon(prev => ({ ...prev, topicList: result.topicList }));
    }, (error) => {
      console.log(error);
    }); 
  }

  useEffect(() => {
    const handleKeyDown = async(event: KeyboardEvent) => {
      if (talkBalloon.isModal || talkBalloon.isShow)
        return
      if ((event.key === 'a' || event.key === 'A') && isInsideCircle) {
        isMove.current = false;
        const npc = currentNpc.current?.name;
        if (npc != null) {
          if(npc == "sanha"){ //산하랑 말하면 산하 행동 멈추기
            if(sanhaRef.current?.rotation.y == 1.5)sanhaRef.current?.rotateY(3);
            setSanhaTalk(true);
          }
          const flag = await customConfirm(npc + "", npc + SENTENCE + "?");
          if (flag) {
            animate();
            setTalkState(prevState => ({ ...prevState, finish: false, isToast: false }));
            setTalkBalloon(prev => ({ ...prev, isShow: true }));
            await doStartTalk(currentNpc.current.id);
            return
          }
        }
        isMove.current = true;
        reRunSanha();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isInsideCircle]);

  useEffect(() => {
    isMove.current = !talkBalloon.isShow;
    reRunSanha();
  }, [talkBalloon.isShow])

  useEffect(() => {
    isMove.current = talkBalloon.isMove;
  }, [talkBalloon.isMove])

  useEffect(() => {
    isModal.current = talkBalloon.isModal;
  }, [talkBalloon.isModal])

  //sanha run movement
  useFrame(() => {
    if (sanhaTalk == false && sanhaRef.current && sanhaCircleRef.current) {
      if(sanhaRef.current.position.x >= -25) {//목표 지점 도달
        
        // Smooth rotation transition
        const rotationY = 1.5 + 0.1 * 3; // Adjust the factor for rotation speed

        // Stop rotating when reaching the desired rotation
        if (sanhaRef.current.rotation.y >= 1) { //1.5로 달리다가 -1.5가 됨
          sanhaRef.current.rotation.y = -1.5;
        }else if(sanhaRef.current.rotation.y == -1.5){ //여기도 있어야함
          sanhaRef.current.position.x -= 0.03; //달리기 속도 조절
          sanhaCircleRef.current.position.x = sanhaRef.current.position.x;
        }else{       
          sanhaRef.current.rotation.y = rotationY;
        }
          
      }
      else if(sanhaRef.current.position.x < -25 && sanhaRef.current.rotation.y == 1.5){
        sanhaRef.current.position.x += 0.03; //달리기 속도 조절
        sanhaCircleRef.current.position.x = sanhaRef.current.position.x;
      }else if(sanhaRef.current.rotation.y == -1.5){//돌았을 때, sanhaRef.current.rotation.y == -1.5 일 때
        if(sanhaRef.current.position.x <= -50){
          sanhaRef.current.rotation.y = 1.5;
        }
        sanhaRef.current.position.x -= 0.03; //달리기 속도 조절
        sanhaCircleRef.current.position.x = sanhaRef.current.position.x;
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
      <primitive scale={1} visible={!talkBalloon.isShow} ref={playerRef} position={[-6.5, 0.1, 11]} rotation={[0, Math.PI, 0]} object={playerFile.scene}/>
      <Park/>
      <Environment blur={1} background preset="sunset" />

      {/* sanha */}
      <Circle ref={sanhaCircleRef} args={[3, 32]} position={[-50, 0.1, -2]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="pink" emissive="#ff69b4" emissiveIntensity={5}  side={THREE.DoubleSide} transparent={true} opacity={0.2} />
        <Sanha position={[-7, -1, 0]} rotation={[Math.PI / 2, Math.PI/180, 0]}/>
      </Circle>
      <primitive ref={sanhaRef} scale={1} position={[-50, 0.1, -2]} rotation={[0, 1.5, 0]} object={sanhaFile.scene}/>
      
      {/* jerry */}
      <Jerry />
      <Circle ref={jerryCircleRef} args={[3, 32]} position={[-31, 0.1, 8]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="wheat" emissive="wheat" emissiveIntensity={1}  side={THREE.DoubleSide} transparent={true} opacity={0.2} />
      </Circle>
      <primitive scale={1} position={[-31, 1.82, 8]} rotation={[0, 3, 0]} object={jerryFile.scene} />

      {/* marco */}
      <Marco />
      <Circle ref={marcoCircleRef} args={[3, 32]} position={[-10, 0.1, 8]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="wheat" emissive="wheat" emissiveIntensity={1}  side={THREE.DoubleSide} transparent={true} opacity={0.2} />
      </Circle>
      <primitive scale={1} position={[-10, 0, 8]} rotation={[0, 3, 0]} object={marcoFile.scene} />
    
      {/* bonnie */}
      <Circle ref={bonnieCircleRef} args={[3, 32]} position={[-45, 0.1, 2]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="wheat" emissive="wheat" emissiveIntensity={1}  side={THREE.DoubleSide} transparent={true} opacity={0.2} />
        <Bonnie position={[7, 0.7, 0]} rotation={[Math.PI / 2, Math.PI, 0]} />
      </Circle>
      <primitive scale={1} position={[-45, 0, 2]} rotation={[0, 1.5, 0]} object={bonnieFile.scene}/>
      
      {/* soccerBall */}
      <primitive ref={soccerBallRef} scale={0.3} rotation={[0, 0, 0]} object={soccerBallFile.scene} />
    </>
  )
} 

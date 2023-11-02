import * as THREE from 'three';
// import { useControls } from 'leva';
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, useAnimations, Circle } from "@react-three/drei";
import { talkBalloonAtom } from "../../atom/TalkBalloonAtom";
import { useRecoilState } from "recoil";
import { startTalk } from "../../api/Talk";
import { startTalkType } from "../../type/TalkType";
import { KeyPressed, AnimationAction, NpcInfo, CurrentNpc } from "./ThemeType";
import { STTAndRecord } from '../talk/SttAndRecordComp';
import { Restaurant } from "../../../public/map/restaurant/Restaurant";
import { HandleKeyDown, HandleKeyUp } from "./util/KeyboardUtil";
import { SetAction } from "./util/PlayerMoveUtil";
import { CircleCheck } from "./util/CircleCheckUtil";
import { useCustomConfirm } from "../util/ModalUtil";
import { PlayerMove } from './util/MSPlayerUtil';

export const RestaurantComp: React.FC = () => {
  // player
  const playerFile = useGLTF("https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_1.glb");
  const playerRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);

  // camera action
  const cameraOffset = useRef<THREE.Vector3>(new THREE.Vector3(0, 3, -4));
  const keysPressed = useRef<KeyPressed>({ ArrowUp: false, ArrowLeft: false, ArrowRight: false, ArrowDown: false });
  const activeAction = useRef<AnimationAction>();
  const { actions } = useAnimations(playerFile.animations, playerFile.scene);
  const { camera } = useThree();
  const lerpFactor = 0.04;

  // NPC
  const fox = useGLTF("https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/fox.glb");
  const foxPosition = new THREE.Vector3(-3.44, 1.8, 2.33);
  const foxRotation = new THREE.Vector3(THREE.MathUtils.degToRad(-30.34), 0, 0);
  const foxCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  
  const rabbit = useGLTF("https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/rabbit.glb");
  const rabbitPosition = new THREE.Vector3(-6.4, 1.8, 8.51);
  const rabbitRotation = new THREE.Vector3(THREE.MathUtils.degToRad(-30.34), 0, 0);
  const rabbitCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  
  const currentNpc = useRef<CurrentNpc>({ id: 0, img: null, name: null, targetPosition:null, targetRotation:null });
  const npcInfoList: NpcInfo[] = [
    { id: 6, name: "Rabbit", targetPosition: rabbitPosition, targetRotation:rabbitRotation, ref: rabbitCircleRef },
    { id: 14, name: "Fox", targetPosition: foxPosition, targetRotation:foxRotation, ref: foxCircleRef },
  ];

  // state
  const [isInsideCircle, setIsInsideCircle] = useState<boolean>(false);
  const [talkId, setTalkId] = useState<number>(0);
  const [talkBalloon, setTalkBalloon] = useRecoilState(talkBalloonAtom);
  const isMove = useRef(true);

  // value
  const CIRCLE_RADIUS = 3;
  const LANGUAGE = "en-US";
  const SENTENCE = "Would you like to start a conversation with ";

  // function
  const customConfirm = useCustomConfirm();
  const handleKeyDown = HandleKeyDown(SetAction, keysPressed, activeAction, actions, isMove);
  const handleKeyUp = HandleKeyUp(SetAction, keysPressed, activeAction, actions, isMove);
  const animate = () => {
    requestAnimationFrame(animate);
    camera.position.lerp(currentNpc.current.targetPosition, lerpFactor);
    camera.rotation.x += (currentNpc.current.targetRotation.x - camera.rotation.x) * lerpFactor;
    camera.rotation.y += (currentNpc.current.targetRotation.y - camera.rotation.y) * lerpFactor;
    camera.rotation.z += (currentNpc.current.targetRotation.z - camera.rotation.z) * lerpFactor;
  }

  useFrame(() => {
    PlayerMove(playerRef, keysPressed, camera, cameraOffset, isMove);
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
      setTalkId(result.talkId)
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
      { talkBalloon.isShow? <STTAndRecord lang={LANGUAGE} talkId={talkId} /> : null }
      <primitive visible={!talkBalloon.isShow} scale={1} ref={playerRef} position={[-6.5, 0.1, 11]} rotation={[0, Math.PI, 0]} object={playerFile.scene}/>
      <Restaurant/>
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
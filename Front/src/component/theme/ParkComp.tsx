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


export const ParkComp: React.FC = () => {
  // player
  const playerFile = useGLTF("./player/m_1.glb");
  const playerRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);

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
  const currentNpc = useRef<CurrentNpc>({ id: 0, img: null, name: null });
  const npcInfoList: NpcInfo[] = [
    { id: 1, name: "Rabbit", img:"https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/rabbit1.PNG", ref: rabbitCircleRef },
    { id: 2, name: "Fox", img:"https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/rabbit1.PNG", ref: foxCircleRef },
  ];

  // state
  const [isInsideCircle, setIsInsideCircle] = useState<boolean>(false);
  const [talkId, setTalkId] = useState<number>(0);
  const setTalkBalloon = useSetRecoilState(talkBalloonAtom);
  const isMove = useRef(true);

  // value
  const CIRCLE_RADIUS = 3;
  const LANGUAGE = "en-US";

  // function
  const customConfirm = useCustomConfirm();
  const handleKeyDown = HandleKeyDown(SetAction, keysPressed, activeAction, actions, isMove);
  const handleKeyUp = HandleKeyUp(SetAction, keysPressed, activeAction, actions, isMove);

  useFrame(() => {
    PlayerMove(playerRef, keysPressed, camera, cameraOffset);
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
      <STTAndRecord lang={LANGUAGE} talkId={talkId} currentNpc={currentNpc}/>
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

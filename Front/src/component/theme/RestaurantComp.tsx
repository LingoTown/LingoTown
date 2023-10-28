import * as THREE from 'three';
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, useAnimations, Circle } from "@react-three/drei";
import { talkBalloonAtom } from "../../atom/TalkBalloonAtom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { startTalk } from "../../api/Talk";
import { startTalkType } from "../../type/TalkType";
import { userAtom } from "../../atom/UserAtom";
import { KeyPressed, AnimationAction } from "./ThemeType";
import { STTAndRecord } from '../talk/SttAndRecordComp';
import { Restaurant } from "../../../public/map/restaurant/Restaurant";
import { HandleKeyDown, HandleKeyUp } from "./util/KeyboardUtil";
import { PlayerMove, SetAction } from "./util/PlayerMoveUtil";
import { CircleCheck } from "./util/CircleCheckUtil";
import { useCustomConfirm } from "../util/ModalUtil";

export const RestaurantComp: React.FC = () => {
  // player
  const playerFile = useGLTF("./player/m_1.glb");
  const playerRef = useRef<THREE.Object3D>();

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

  // state
  const [isInsideCircle, setIsInsideCircle] = useState<boolean>(false);
  const [npc, setNpc] = useState<string>("");
  const [talkId, setTalkId] = useState<number>(0);
  const setTalkBalloon = useSetRecoilState(talkBalloonAtom);
  const isMove = useRef(true);

  // value
  const USER = useRecoilValue(userAtom);
  const CIRCLE_RADIUS = 3;
  const LANGUAGE = "en-US";

  // function
  const customConfirm = useCustomConfirm();
  const handleKeyDown = HandleKeyDown(SetAction, keysPressed, activeAction, actions, isMove);
  const handleKeyUp = HandleKeyUp(SetAction, keysPressed, activeAction, actions, isMove);

  useFrame(() => {
    PlayerMove(playerRef, keysPressed, camera, cameraOffset);
    CircleCheck(playerRef, 
      { fox: foxCircleRef, rabbit: rabbitCircleRef },
      CIRCLE_RADIUS, isInsideCircle, setIsInsideCircle, setNpc);
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
          const flag = await customConfirm(npc, npc + "와 대화를 시작하시겠습니까?")
          isMove.current = true;
          if (flag) {
            setTalkBalloon(prev => ({ ...prev, isShow: true, profileImg: USER.profileImg }));
            doStartTalk(1);
          }
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
      <STTAndRecord lang={LANGUAGE} talkId={talkId}/>
      <primitive scale={1}  ref={playerRef} position={[-6.5, 0.1, 11]} rotation={[0, Math.PI, 0]} object={playerFile.scene}/>
      <Restaurant/>
      <Environment blur={1} background preset="sunset" />
      
      <Circle ref={foxCircleRef} args={[3, 32]} position={[-3.4, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="pink" side={THREE.DoubleSide} />
      </Circle>
      <primitive scale={0.5} position={[-3.4, 0.1, 0]} rotation={[0, 0, 0]} object={fox.scene}/>
      <Circle ref={rabbitCircleRef} args={[3, 32]} position={[-6.4, 0.03, 7]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="wheat" side={THREE.DoubleSide} />
      </Circle>
      <primitive scale={0.5} position={[-6.4, 0.1, 7]} rotation={[0, 0, 0]} object={rabbit.scene} />
      
    </>
  )
} 

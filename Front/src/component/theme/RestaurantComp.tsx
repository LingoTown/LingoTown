import * as THREE from 'three';
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, useAnimations, Circle } from "@react-three/drei";
import { talkBalloonAtom } from "../../atom/TalkBalloonAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { startTalk} from "../../api/Talk";
import { startTalkType } from "../../type/TalkType";
import { userAtom } from "../../atom/UserAtom";
import { talkStateAtom } from "../../atom/TalkStateAtom";
import { KeyPressed, AnimationAction } from "./ThemeType";
// import { STTAndRecord } from "../town/SttAndRecordComp";
import { Restaurant } from "../../../public/map/restaurant/Restaurant";
import { HandleKeyDown, HandleKeyUp } from "./util/KeyboardUtil";
import { PlayerMove, SetAction } from "./util/PlayerMoveUtil";
import { CircleCheck } from "./util/CircleCheckUtil";
import { useCustomConfirm } from "../util/ModalUtil";

export const RestaurantComp: React.FC = () => {
  const playerFile = useGLTF("./player/m_1.glb");
  const playerRef = useRef<THREE.Object3D>();

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

  const [isInsideCircle, setIsInsideCircle] = useState<boolean>(false);
  const [npc, setNpc] = useState<string>("");
  const [talkBalloon, setTalkBalloon] = useRecoilState(talkBalloonAtom);
  const [talkState, setTalkState] = useRecoilState(talkStateAtom);

  const user = useRecoilValue(userAtom);
  const circleRadius = 3;

  const customConfirm = useCustomConfirm();
  const handleKeyDown = HandleKeyDown(SetAction, keysPressed, activeAction, actions);
  const handleKeyUp = HandleKeyUp(SetAction, keysPressed, activeAction, actions);

  useFrame(() => {
    PlayerMove(playerRef, keysPressed, camera, cameraOffset);
    CircleCheck(playerRef, { fox: foxCircleRef, rabbit: rabbitCircleRef }, circleRadius, isInsideCircle, setIsInsideCircle, setNpc);
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
      console.log(result)
    }, (error) => {
      console.log(error);
    }); 
  }

  useEffect(() => {
    const handleKeyDown = async(event: KeyboardEvent) => {
      if (event.code === 'Space') {
        if (isInsideCircle) {
          const flag = await customConfirm(npc, npc + "와 대화를 시작하시겠습니까?")
          console.log("asdas" + flag)
          if (flag) {
            const copy = {...talkBalloon};
            copy.isShow = true;
            copy.profileImg = user.profileImg;
            setTalkBalloon(copy);
            doStartTalk(1);
            const copy2 = {...talkState};
            copy2.onRec = !talkState.onRec;
            setTalkState(copy2);
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
      {/* <STTAndRecord /> */}
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

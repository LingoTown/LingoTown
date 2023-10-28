import { useEffect, useRef, useState, useContext } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, useAnimations, Circle } from "@react-three/drei";
import { Polygonia } from "../../../public/map/polygonia/Polygonia";
import { talkBalloonAtom } from "../../atom/TalkBalloonAtom";
import { useRecoilState } from "recoil";
import { startTalk} from "../../api/Talk";
import { startTalkType } from "../../type/TalkType";
import * as THREE from 'three';
// import { userAtom } from "../../atom/UserAtom";
import { KeyPressed, AnimationAction } from "./ThemeType";
// import { STTAndRecord } from "../town/SttAndRecordComp";
import ConfirmContext from "../util/confirm/ConfirmContext";


export const PolyginiaComp: React.FC = () => {
  const player = useGLTF("./player/m_1.glb");
  const cameraOffset = useRef<THREE.Vector3>(new THREE.Vector3(0, 3, -4));
  const keysPressed = useRef<KeyPressed>({ ArrowUp: false, ArrowLeft: false, ArrowRight: false, ArrowDown: false });
  const playerRef = useRef<THREE.Object3D | undefined>();
  const activeAction = useRef<AnimationAction>();

  const { actions } = useAnimations(player.animations, player.scene);
  const { camera } = useThree();

  const fox = useGLTF("./npc/fox.glb");
  const rabbit = useGLTF("./npc/rabbit.glb");

  const foxCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const rabbitCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);

  const [isInsideCircle, setIsInsideCircle] = useState<boolean>(false);
  const [npc, setNpc] = useState<string>("");
  const [talkBalloon, setTalkBalloon] = useRecoilState(talkBalloonAtom);

  const { confirm: confirmComp } = useContext(ConfirmContext);

  const circleRadius = 3;

  const customConfirm = async(title:string, message:string) => {
    const result = await confirmComp(title, message);
    return result
  }
  
  const setAction = (actionName: string): void => {
    if (activeAction.current && activeAction.current === actions[actionName])
      return;

    if (activeAction.current)
      activeAction.current.fadeOut(0.1);

    const action = actions[actionName];
    if (action) {
      action.reset().fadeIn(0.1).play();
      activeAction.current = action;
    }
  };

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (['ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      keysPressed.current[event.key as 'ArrowUp' | 'ArrowLeft' | 'ArrowRight'] = true;
      setAction('Run');
    }
    if (['ArrowDown'].includes(event.key)) {
      keysPressed.current[event.key as 'ArrowDown'] = true;
      setAction('Walk');
    }
  };

  const handleKeyUp = (event: KeyboardEvent): void => {
    if (['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown'].includes(event.key)) {
      keysPressed.current[event.key as 'ArrowUp' | 'ArrowLeft' | 'ArrowRight' | 'ArrowDown'] = false;
      if (Object.values(keysPressed.current).every(key => !key)) {
        setAction('Defeat');
      }
    }
  };

  useFrame(() => {
    if (playerRef.current) {
      
      const speed = 0.2;
      const rotationSpeed = 0.01;
      const moveForward = new THREE.Vector3();
  
      if (keysPressed.current.ArrowUp) {
        playerRef.current.getWorldDirection(moveForward);
        moveForward.multiplyScalar(speed);
        playerRef.current.position.add(moveForward);
      }

      if (keysPressed.current.ArrowDown) {
        playerRef.current.getWorldDirection(moveForward);
        moveForward.multiplyScalar(-speed * 0.3);
        playerRef.current.position.add(moveForward);
      }

      if (keysPressed.current.ArrowLeft || keysPressed.current.ArrowRight) {
        let deltaRotation = 1;
        if (keysPressed.current.ArrowDown) {
          deltaRotation = keysPressed.current.ArrowLeft ? -rotationSpeed : rotationSpeed;
        } else {
          deltaRotation = keysPressed.current.ArrowLeft ? rotationSpeed : -rotationSpeed;
        }
        playerRef.current.rotateY(deltaRotation);
      }
  
      const currentPos = playerRef.current.position.clone();
      const offset = cameraOffset.current.clone().applyQuaternion(playerRef.current.quaternion);
      const desiredCameraPosition = currentPos.add(offset);
  
      camera.position.lerp(desiredCameraPosition, 1);
      camera.lookAt(playerRef.current.position);
    }
  });

  useFrame(() => {
    if (playerRef.current && foxCircleRef.current) {
      const playerPosition = new THREE.Vector3();
      const circlePosition = new THREE.Vector3();
      playerRef.current.getWorldPosition(playerPosition);
      foxCircleRef.current.getWorldPosition(circlePosition);
      const distance = playerPosition.distanceTo(circlePosition);

      if (distance <= circleRadius) {
        if (!isInsideCircle) {
          setIsInsideCircle(true);
          setNpc("여우");
        }
      } else {
        if (isInsideCircle) {
          setIsInsideCircle(false);
          setNpc("")
        }
      }
    }

    if (playerRef.current && rabbitCircleRef.current) {

      const playerPosition = new THREE.Vector3();
      const circlePosition = new THREE.Vector3();

      playerRef.current.getWorldPosition(playerPosition);
      rabbitCircleRef.current.getWorldPosition(circlePosition);
      const distance = playerPosition.distanceTo(circlePosition);

      if (distance <= circleRadius) {
        if (!isInsideCircle) {
          setIsInsideCircle(true);
          setNpc("토끼")
        }
      } else {
        if (isInsideCircle) {
          setIsInsideCircle(false);
          setNpc("")
        }
      }
    }
  });

  useEffect(() => {
    setAction('Idle');
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
            // copy.profileImg = user.profileImg;
            setTalkBalloon(copy);
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
      {/* <STTAndRecord /> */}
      <primitive scale={1}  ref={playerRef} position={[-6.5, 0.1, 11]} rotation={[0, Math.PI, 0]} object={player.scene}/>
      <Polygonia position={[0, 6, 4]}/>
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

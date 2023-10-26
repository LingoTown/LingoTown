import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, useAnimations, Circle } from "@react-three/drei";
import { Restaurant } from "../../../public/map/restaurant/Restaurant";
import { talkBalloonAtom } from "../../atom/TalkBalloonAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { startTalk} from "../../api/Talk";
import { startTalkType } from "../../type/TalkType";
import * as THREE from 'three';
import { userAtom } from "../../atom/UserAtom";
import { talkStateAtom } from "../../atom/TalkStateAtom";
import { STTAndRecord } from "../town/SttAndRecordComp";


interface KeyPressed {
  ArrowUp: boolean;
  ArrowLeft: boolean;
  ArrowRight: boolean;
  ArrowDown: boolean;
}

type AnimationAction = {
  reset: () => AnimationAction;
  fadeIn: (duration: number) => AnimationAction;
  play: () => AnimationAction;
  fadeOut: (duration: number) => void;
};


export const RestaurantTheme: React.FC = () => {
  const human = useGLTF("./player/model.glb");
  const fox = useGLTF("./npc/fox.glb");
  const rabbit = useGLTF("./npc/rabbit.glb");

  const cameraOffset = useRef<THREE.Vector3>(new THREE.Vector3(0, 3, -4));
  const keysPressed = useRef<KeyPressed>({ ArrowUp: false, ArrowLeft: false, ArrowRight: false, ArrowDown: false });
  const humanRef = useRef<THREE.Object3D | undefined>();
  const activeAction = useRef<AnimationAction>(); 
  const foxCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const rabbitCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);

  const { actions } = useAnimations(human.animations, human.scene);
  const { camera } = useThree();

  const [isInsideCircle, setIsInsideCircle] = useState<boolean>(false);
  const [npc, setNpc] = useState<string>("");

  const [talkBalloon, setTalkBalloon] = useRecoilState(talkBalloonAtom);
  const [talkState, setTalkState] = useRecoilState(talkStateAtom);
  const user = useRecoilValue(userAtom);

  const circleRadius = 3;
  
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
    if (['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown'].includes(event.key)) {
      keysPressed.current[event.key as 'ArrowUp' | 'ArrowLeft' | 'ArrowRight' | 'ArrowDown'] = true;
      setAction('Walk');
    }
  };

  const handleKeyUp = (event: KeyboardEvent): void => {
    if (['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown'].includes(event.key)) {
      keysPressed.current[event.key as 'ArrowUp' | 'ArrowLeft' | 'ArrowRight' | 'ArrowDown'] = false;
      if (Object.values(keysPressed.current).every(key => !key)) {
        setAction('Idle');
      }
    }
  };

  useFrame(() => {
    if (humanRef.current) {
      
      const speed = 0.15;
      const rotationSpeed = 0.04;
      const moveForward = new THREE.Vector3();
  
      if (keysPressed.current.ArrowUp) {
        humanRef.current.getWorldDirection(moveForward);
        moveForward.multiplyScalar(speed);
        humanRef.current.position.add(moveForward);
      }

      if (keysPressed.current.ArrowDown) {
        humanRef.current.getWorldDirection(moveForward);
        moveForward.multiplyScalar(-speed * 0.5);
        humanRef.current.position.add(moveForward);
      }

      if (keysPressed.current.ArrowLeft || keysPressed.current.ArrowRight) {
        let deltaRotation = 1;
        if (keysPressed.current.ArrowDown) {
          deltaRotation = keysPressed.current.ArrowLeft ? -rotationSpeed : rotationSpeed;
        } else {
          deltaRotation = keysPressed.current.ArrowLeft ? rotationSpeed : -rotationSpeed;
        }
        humanRef.current.rotateY(deltaRotation);
      }
  
      const currentPos = humanRef.current.position.clone();
      const offset = cameraOffset.current.clone().applyQuaternion(humanRef.current.quaternion);
      const desiredCameraPosition = currentPos.add(offset);
  
      camera.position.lerp(desiredCameraPosition, 0.1);
      camera.lookAt(humanRef.current.position);
    }
  });

  useFrame(() => {
    if (humanRef.current && foxCircleRef.current) {
      const humanPosition = new THREE.Vector3();
      const circlePosition = new THREE.Vector3();
      humanRef.current.getWorldPosition(humanPosition);
      foxCircleRef.current.getWorldPosition(circlePosition);
      const distance = humanPosition.distanceTo(circlePosition);

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

    if (humanRef.current && rabbitCircleRef.current) {

      const humanPosition = new THREE.Vector3();
      const circlePosition = new THREE.Vector3();

      humanRef.current.getWorldPosition(humanPosition);
      rabbitCircleRef.current.getWorldPosition(circlePosition);
      const distance = humanPosition.distanceTo(circlePosition);

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
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        if (isInsideCircle) {
          const flag = confirm(npc + "와 대화를 시작하시겠습니까?")
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
      <STTAndRecord />
      <Restaurant />
      <Environment blur={1} background preset="sunset" />
      <Circle ref={foxCircleRef} args={[3, 32]} position={[-3.4, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="pink" side={THREE.DoubleSide} />
      </Circle>
      <Circle ref={rabbitCircleRef} args={[3, 32]} position={[-6.4, 0.03, 7]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="wheat" side={THREE.DoubleSide} />
      </Circle>
      <primitive scale={0.5} position={[-3.4, 0.53, 0]} rotation={[0, 0, 0]} object={fox.scene}/>
      <primitive ref={humanRef} scale={1} position={[-5.4, 0.1, 11]} rotation={[0, Math.PI, 0]} object={human.scene}/>
      <primitive scale={0.5} position={[-6.4, 0.53, 7]} rotation={[0, 0, 0]} object={rabbit.scene} />
    </>
  )
} 

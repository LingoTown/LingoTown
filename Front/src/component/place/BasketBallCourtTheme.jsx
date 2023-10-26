import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, useAnimations, Circle } from "@react-three/drei";
import { BasketBall_court } from "../../../public/map/basketBall_court/BasketBall_court"
import * as THREE from 'three';

export const BasketBallCourtTheme = () => {

  const human = useGLTF("../../../public/player/model.glb");
  const fox = useGLTF("../../../public/npc/fox.glb");
  const rabbit = useGLTF("../../../public/npc/rabbit.glb");

  const cameraOffset = useRef(new THREE.Vector3(0, 3, -4));
  const keysPressed = useRef({ ArrowUp: false, ArrowLeft: false, ArrowRight: false });
  const isJumping = useRef(false);//점프 ref
  const humanRef = useRef();
  const activeAction = useRef();
  const foxCircleRef = useRef();
  const rabbitCircleRef = useRef();
  
  const { actions } = useAnimations(human.animations, human.scene);
  const { camera } = useThree();

  const [isInsideCircle, setIsInsideCircle] = useState(false);
  const [npc, setNpc] = useState("");
  
  const circleRadius = 3;
  
  const setAction = (actionName) => {
    if (activeAction.current && activeAction.current === actions[actionName])
      return;

    if (activeAction.current)
      activeAction.current.fadeOut(0.1);

    const action = actions[actionName];
    action.reset().fadeIn(0.1).play();
    activeAction.current = action;
  };

  const handleKeyDown = (event) => {
    if (['ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      keysPressed.current[event.key] = true;
      setAction('Run');
    } else if (event.key === ' ') {
      isJumping.current = !isJumping.current;
      if (isJumping.current) {
        setAction('Jump');
      }
    }
  };

  const handleKeyUp = (event) => {
    if (['ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      keysPressed.current[event.key] = false;
      if (Object.values(keysPressed.current).every(key => !key)) {
        setAction('Idle');
      }
    }
  };

  useFrame(() => {
    if (humanRef.current) {
      
      const speed = 0.1;
      const rotationSpeed = 0.03;
      const moveForward = new THREE.Vector3();
  
      if (keysPressed.current.ArrowUp) {
        humanRef.current.getWorldDirection(moveForward);
        moveForward.multiplyScalar(speed);
        humanRef.current.position.add(moveForward);
      }
  
      if (keysPressed.current.ArrowLeft || keysPressed.current.ArrowRight) {
        const deltaRotation = keysPressed.current.ArrowLeft ? rotationSpeed : -rotationSpeed;
        humanRef.current.rotateY(deltaRotation);
      }

      // 점프 중인 경우 Y 방향으로 이동
      if (isJumping.current) {
        humanRef.current.position.y += 0.1;
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        if (isInsideCircle) {
          confirm(npc + "와 대화를 시작하시겠습니까?")
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
      <BasketBall_court />
      <Environment blur={1} background preset="sunset" />
      <Circle ref={foxCircleRef} args={[3, 32]} position={[-3.4, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="pink" side={THREE.DoubleSide} />
      </Circle>
      <Circle ref={rabbitCircleRef} args={[3, 32]} position={[-6.4, 0.03, 7]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="wheat" side={THREE.DoubleSide} />
      </Circle>
      <primitive ref={humanRef} scale={1} position={[5, 10, 2]} rotation={[0, Math.PI, 0]} object={human.scene}/>
      <primitive scale={0.5} position={[-3.4, 0.53, 0]} rotation={[0, 0, 0]} object={fox.scene}/>
      <primitive scale={0.5} position={[-6.4, 0.53, 7]} rotation={[0, 0, 0]} object={rabbit.scene} />
    </>
  )
} 

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, useAnimations, Circle } from "@react-three/drei";
import {Park} from "../../../public/map/park/Park"
import * as THREE from 'three';

export const ParkTheme = () => {

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
  
  let action = actions["Idle"];
  const setAction = (actionName) => {

    if (!actions[actionName]) {
      return;
    }

    if (activeAction.current && activeAction.current === actions[actionName])
      return;

    if (activeAction.current)
      activeAction.current.fadeOut(0.1);

    action = actions[actionName];
    action.reset().fadeIn(0.1).play();
    activeAction.current = action;
  };

  const handleKeyDown = (event) => {
    if (event.code === 'Space' && !isJumping.current) {
      isJumping.current = true;
      setAction('Armature|mixamo.com|Layer0');
    }
  
    if (['ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      keysPressed.current[event.key] = true;
      setAction('Run');
    }
  };
  
  const handleKeyUp = (event) => {
    if (['ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      keysPressed.current[event.key] = false;
      if (Object.values(keysPressed.current).every(key => !key)) {
        setAction('Idle');
        console.log(human.animations)
      }
    }
  
    if (event.code === 'Space') {
      keysPressed.current[event.key] = false;
      isJumping.current = false;
      setAction("Idle");
    }
  };

  // jumpTime을 useRef로 정의
  const jumpTime = useRef(0);
  let jumpDown = false;

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

    // Jumping logic
  if (isJumping.current) {
    const jumpHeight = 2.0;
    const jumpSpeed = 0.1;
    const maxJumpTime = 1.5; // Adjust this value to control the jump height and duration

    // Increment jump time
    jumpTime.current += 0.01;

    // Calculate jump position based on elapsed time
    const jumpPosition = jumpSpeed * jumpTime.current - 0.5 * 9.8 * jumpTime.current * jumpTime.current;

    // Set the Y position of the character
    humanRef.current.position.y = Math.max(0, jumpPosition) + jumpHeight;

    // Check if the jump is complete
    if (jumpTime.current >= maxJumpTime) {
      isJumping.current = false;
      jumpTime.current = 0;
    }
  } 
  else if (humanRef.current.position.y > 0) {
      // Simulate a gradual descent when not jumping
      humanRef.current.position.y -= 0.1;
  }


    // Rest of the code remains unchanged
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
    console.log(action);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [action]);

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
      <Park />
      <Environment blur={1} background preset="sunset" />
      <Circle ref={foxCircleRef} args={[3, 32]} position={[-3.4, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="pink" side={THREE.DoubleSide} />
      </Circle>
      <Circle ref={rabbitCircleRef} args={[3, 32]} position={[-6.4, 0.03, 7]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="wheat" side={THREE.DoubleSide} />
      </Circle>
      <primitive ref={humanRef} scale={1} position={[-5.4, 0.1, 11]} rotation={[0, Math.PI, 0]} object={human.scene}/>
      <primitive scale={0.5} position={[-3.4, 0.53, 0]} rotation={[0, 0, 0]} object={fox.scene}/>
      <primitive scale={0.5} position={[-6.4, 0.53, 7]} rotation={[0, 0, 0]} object={rabbit.scene} />
    </>
  )
} 

import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree, useStore } from "@react-three/fiber";
import { useGLTF, Environment, useAnimations, Circle } from "@react-three/drei";
import {Bar} from "../../../public/map/bar/Bar";
import * as THREE from 'three';
import { Physics, usePlane, useBox, useCylinder, useHingeConstraint, useSphere, useConvexPolyhedron } from '@react-three/cannon'
import { Wall } from "../util/block/Wall";

const container = [
  { size: [50, 2, 35], position: [10, -1.5, 10], color: 0xbb00bb, key: 'C01', name: 'floor', mass:0}, // bottom
  { size: [40, 27, 3], position: [7, 10, -2.5], color: 0x590055, key: 'C02', name: 'wall', mass:0}, // back wall
  { size: [3, 27, 30], position: [26, 10, 12], color: 0xffff00, key: 'C03',  name: 'wall', mass:0}, // right wall
  { size: [40, 27, 3], position: [7, 10, 27], color: 0xaa0000, key: 'C04', name: 'wall', mass:0}, // front wall,
  { size: [3, 27, 30], position: [-12.5, 10, 12], color: 0x00aaaa, key: 'C05', name: 'wall', mass:0}, // left wall
];



export const BarTheme = () => {

  const human = useGLTF("../../../public/player/model.glb");
  const fox = useGLTF("../../../public/npc/fox.glb");
  const rabbit = useGLTF("../../../public/npc/rabbit.glb");

  const rabbit_standing = useGLTF("../../../public/npc/rabbit.glb");

  const cameraOffset = useRef(new THREE.Vector3(0, 3, -4));
  const keysPressed = useRef({ ArrowUp: false, ArrowLeft: false, ArrowRight: false });
  const activeAction = useRef();
  const foxCircleRef = useRef();
  const rabbitCircleRef = useRef();
  
  const { actions } = useAnimations(human.animations, human.scene);
  const { camera } = useThree();
  
  const [isInsideCircle, setIsInsideCircle] = useState(false);
  const [npc, setNpc] = useState("");
  
  
  //캐릭터 물리엔진
  let [playerPosition, setPlayerPosition] = useState([0, 0, 0]);
  let [playerRotation, setPlayerRotation]= useState([0, 0, 0]);
  const [humanRef, api] = useCylinder(() => ({ 
    mass: 0, 
    position: [20, 0, 20], 
    rotation:[0,0,0], 
    args:[0.1,0,0.1],
    friction: 1,     // Adjust the value as needed
    restitution: 0,   // Set to 0 to avoid bouncing
    allowSleep:true,
    // onCollide:(contact)=>{
    //   console.log("wall");
    //   if(contact.body.__r3f.memoizedProps.name=="wall"){
    //     api.position.set(playerPosition[0] - 1, 1, playerPosition[2]);
    //     humanRef.current.position.add(api.position);
    //     setPlayerPosition(prevPos => [
    //       prevPos[0] - 1,
    //       1,
    //       prevPos[2]
    //     ]);

    //   }
    // }
  }));

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
      const speed = 0.05;
      const rotationSpeed = 0.03;
      const moveForward = new THREE.Vector3();

      if(humanRef.current.position.x === NaN || humanRef.current.position.y === NaN || humanRef.current.position.z === NaN){
        humanRef.current.position.add(playerPosition);
      }

      if (keysPressed.current.ArrowUp) {
        humanRef.current.getWorldDirection(moveForward);
        moveForward.multiplyScalar(speed);

        const newPosition = humanRef.current.position.clone().add(moveForward);
        
        // 벽에 부딪히는지 확인하기 위해 container의 모든 벽을 순회합니다.
        let collidesWithWall = false;
        for (const wall of container) {
          if (wall.name === "wall") {
            const wallBox = new THREE.Box3().setFromCenterAndSize(
              new THREE.Vector3(...wall.position),
              new THREE.Vector3(...wall.size)
            );
            
            const playerBox = new THREE.Box3().setFromObject(humanRef.current);
            playerBox.expandByVector(moveForward); // 캐릭터의 이동을 고려한 바운딩 박스 계산

            if (wallBox.intersectsBox(playerBox)) {
              collidesWithWall = true;
              break;
            }
          }
        }

        // 충돌이 발생하지 않았다면, 캐릭터의 위치를 업데이트합니다.
        if (!collidesWithWall) {
          api.position.set(newPosition.x, newPosition.y, newPosition.z);
          humanRef.current.position.add(moveForward);
          setPlayerPosition(prevPos => [
            prevPos[0] + moveForward.x,
            0,
            prevPos[2] + moveForward.z
          ]);
        }
        
        
        // 실시간으로 물리 몸의 위치 업데이트
        // api.position.set(playerPosition[0] + moveForward.x, 0, playerPosition[2] + moveForward.z);
        // humanRef.current.position.add(moveForward);
        // setPlayerPosition(prevPos => [
        //   prevPos[0] + moveForward.x,
        //   0,
        //   prevPos[2] + moveForward.z
        // ]);
      }
  
      if (keysPressed.current.ArrowLeft || keysPressed.current.ArrowRight) {
        const deltaRotation = keysPressed.current.ArrowLeft ? -rotationSpeed : rotationSpeed;
        
        // 실시간으로 물리 몸의 회전 업데이트
        setPlayerRotation([playerRotation[0], playerRotation[1]+deltaRotation, playerRotation[2]]);
        api.rotation.set(playerRotation[0], playerRotation[1] + deltaRotation, playerRotation[2]);
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
      <group>
        {container.map(props => <ContainerWall {...props}/> )}
      </group>

      <Bar />
      <primitive ref={humanRef} scale={1} object={human.scene}/>

     <Environment blur={1} background preset="sunset" />
      {/* <Circle ref={foxCircleRef} args={[3, 32]} position={[1, 0.04, 3.3]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="pink" side={THREE.DoubleSide} />
      </Circle>
      <Circle ref={rabbitCircleRef} args={[2, 32]} position={[-5.3, 0.1, 11]} rotation={[-Math.PI / 2, 0, 0]} >
        <meshStandardMaterial attach="material" color="wheat" side={THREE.DoubleSide} />
      </Circle> */}

      {/* <primitive scale={0.2} position={[1, 1.6, 3.3]} rotation={[0, 0, 0]} object={fox.scene}/>
      <primitive scale={0.2} position={[-5.3, 0.63, 11]} rotation={[0, 2, 0]} object={rabbit.scene} /> */}

    </>
  )
} 
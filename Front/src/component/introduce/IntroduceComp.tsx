import {
  CameraControls,
  Environment,
  Text,
  useAnimations,
  useCursor,
  useGLTF
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { NPCStage } from "./NPCStage";

export const IntroduceComp: React.FC = () => {
  const cityW = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/f_4.glb');
  const restaurantM = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_25.glb');
  const restaurantW = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/f_17.glb');
  const parkBasketballM = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_32.glb');
  const parkRunnerW = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/f_18.glb');
  const parkSoccerM = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_9.glb');
  const parkKidM = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_14.glb');

  const cityWRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const restaurantMRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const restaurantWRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const parkBasketballMRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const parkRunnerWRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const parkSoccerMRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const parkKidMRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);

  const { actions : cityWActions } = useAnimations(cityW.animations, cityW.scene);
  const { actions : restaurantMActions } = useAnimations(restaurantM.animations, restaurantM.scene);
  const { actions: restaurantWActions } = useAnimations(restaurantW.animations, restaurantW.scene);
  const { actions: parkBasketballMActions } = useAnimations(parkBasketballM.animations, parkBasketballM.scene);
  const { actions: parkRunnerWActions } = useAnimations(parkRunnerW.animations, parkRunnerW.scene);
  const { actions: parkSoccerMActions } = useAnimations(parkSoccerM.animations, parkSoccerM.scene);
  const { actions: parkKidMActions } = useAnimations(parkKidM.animations, parkKidM.scene);

  const [active, setActive] = useState<string | null>(null);
  const [enabled, setEnabled] = useState<boolean | undefined>(false);

  const [cityWHovered, setCityWHovered] = useState<string | null>(null);
  const [restaurantMHovered, setRestaurantMHovered] = useState<string | null>(null);
  const [restaurantWHovered, setRestaurantWHovered] = useState<string | null>(null);
  const [parkBasketballMHovered, setParkBasketballMHovered] = useState<string | null>(null);
  const [parkRunnerWHovered, setParkRunnerWHovered] = useState<string | null>(null);
  const [parkSoccerMHovered, setParkSoccerMHovered] = useState<string | null>(null);
  const [parkKidMHovered, setParkKidMHovered] = useState<string | null>(null);

  useCursor(cityWHovered);
  useCursor(restaurantMHovered);
  useCursor(restaurantWHovered);
  useCursor(parkBasketballMHovered);
  useCursor(parkRunnerWHovered);
  useCursor(parkSoccerMHovered);
  useCursor(parkKidMHovered);

  const controlsRef = useRef<CameraControls>();

  const sceneInstance = useThree(state => state.scene);

  useEffect(() => {
    if (active) {
      const targetPosition = new THREE.Vector3();
      sceneInstance.getObjectByName(active!)?.getWorldPosition(targetPosition);

      controlsRef.current?.setLookAt(targetPosition.x + 2, targetPosition.y, targetPosition.z + 5, targetPosition.x + 2, targetPosition.y, targetPosition.z, true);
      setEnabled(true);
    } else {
      controlsRef.current?.setLookAt(0, 0, 10, 0, 0, 0, true);

      setTimeout(() => {
        setEnabled(false);
      }, 1000)
    }
  }, [active, sceneInstance]);

  useEffect(() => {
    const anim = cityWHovered ? 'Victory' : 'Idle';
    cityWActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => cityWActions[anim]?.fadeOut(0.5);
  }, [cityWHovered, cityWActions]);

  useEffect(() => {
    const anim = restaurantMHovered ? 'Victory' : 'Idle';
    restaurantMActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => restaurantMActions[anim]?.fadeOut(0.5);
  }, [restaurantMHovered, restaurantMActions]);

  useEffect(() => {
    const anim = restaurantWHovered ? 'Victory' : 'Idle';
    restaurantWActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => restaurantWActions[anim]?.fadeOut(0.5);
  }, [restaurantWHovered, restaurantWActions]);

  useEffect(() => {
    const anim = parkBasketballMHovered ? 'Victory' : 'Idle';
    parkBasketballMActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => parkBasketballMActions[anim]?.fadeOut(0.5);
  }, [parkBasketballMHovered, parkBasketballMActions]);
  
  useEffect(() => {
    const anim = parkRunnerWHovered ? 'Victory' : 'Idle';
    parkRunnerWActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => parkRunnerWActions[anim]?.fadeOut(0.5);
  }, [parkRunnerWHovered, parkRunnerWActions]);

  useEffect(() => {
    const anim = parkSoccerMHovered ? 'Victory' : 'Idle';
    parkSoccerMActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => parkSoccerMActions[anim]?.fadeOut(0.5);
  }, [parkSoccerMHovered, parkSoccerMActions]);

  useEffect(() => {
    const anim = parkKidMHovered ? 'Victory' : 'Idle';
    parkKidMActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => parkKidMActions[anim]?.fadeOut(0.5);
  }, [parkKidMHovered, parkKidMActions]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />

      <CameraControls ref={controlsRef} enabled={enabled} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />

      <Text
        font="../font/PasseroOne-Regular.ttf"
        fontSize={0.2}
        color="black"
        position={[0, -0.2, 0.051]}
        anchorY={"bottom"}
      >
        City
      </Text>

      <Text
        font="../font/PasseroOne-Regular.ttf"
        fontSize={0.2}
        color="black"
        position={[-4.5, -0.2, 0.051]}
        anchorY={"bottom"}
      >
        Restaurant
      </Text>

      <Text
        font="../font/PasseroOne-Regular.ttf"
        fontSize={0.2}
        color="black"
        position={[-4.5, 1.8, 0.051]}
        anchorY={"bottom"}
      >
        Park
      </Text>

      <NPCStage
        texture="../map/introduce/park.jpg"
        name="Jerry"
        age="8"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        hovered={parkKidMHovered}
        setHovered={setParkKidMHovered}
        position={[-4.5, 1, 0]}
      >
        <primitive scale={1} ref={parkKidMRef} position-y={-0.75} rotation={[0, 0, 0]} object={parkKidM.scene} />
      </NPCStage>

      <NPCStage
        texture="../map/introduce/park.jpg"
        name="Sanha"
        age="20"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        hovered={parkRunnerWHovered}
        setHovered={setParkRunnerWHovered}
        position={[-3, 1, 0]}
      >
        <primitive scale={1} ref={parkRunnerWRef} position-y={-0.75} rotation={[0, 0, 0]} object={parkRunnerW.scene} />
      </NPCStage>

      <NPCStage
        texture="../map/introduce/park.jpg"
        name="Marco"
        age="18"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        hovered={parkBasketballMHovered}
        setHovered={setParkBasketballMHovered}
        position={[-1.5, 1, 0]}
      >
        <primitive scale={1} ref={parkBasketballMRef} position-y={-0.75} rotation={[0, 0, 0]} object={parkBasketballM.scene} />
      </NPCStage>

      <NPCStage
        texture="../map/introduce/park.jpg"
        name="Jerome"
        age="30"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        hovered={parkSoccerMHovered}
        setHovered={setParkSoccerMHovered}
        position={[0, 1, 0]}
      >
        <primitive scale={1} ref={parkSoccerMRef} position-y={-0.75} rotation={[0, 0, 0]} object={parkSoccerM.scene} />
      </NPCStage>

      <NPCStage
        texture="../map/introduce/city.jpg"
        name="Noah"
        age="20"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        hovered={cityWHovered}
        setHovered={setCityWHovered}
        position={[0, -1, 0]}
      >
        <primitive scale={1} ref={cityWRef} position-y={-0.75} rotation={[0, 0, 0]} object={cityW.scene} />
      </NPCStage>

      <NPCStage
        texture="../map/introduce/cafeteria.jpg"
        name="Luke"
        age="20"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        hovered={restaurantMHovered}
        setHovered={setRestaurantMHovered}
        position={[-4.5, -1, 0]}
      >
        <primitive scale={1} ref={restaurantMRef} position-y={-0.75} rotation={[0, 0, 0]} object={restaurantM.scene} />
      </NPCStage>

      <NPCStage
        texture="../map/introduce/cafeteria.jpg"
        name="Olivia"
        age="20"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        hovered={restaurantWHovered}
        setHovered={setRestaurantWHovered}
        position={[-3, -1, 0]}
      >
        <primitive scale={1} ref={restaurantWRef} position-y={-0.75} rotation={[0, 0, 0]} object={restaurantW.scene} />
      </NPCStage>
    </>
  );
};
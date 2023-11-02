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
  const companyM1 = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_3.glb');
  const companyM2 = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_8.glb');
  const restaurantM = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_25.glb');
  const restaurantW = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/f_17.glb');
  const parkBasketballM = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_32.glb');
  const parkRunnerW = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/f_18.glb');
  const parkSoccerM = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_9.glb');
  const parkKidM = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_14.glb');

  const companyM1Ref = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const companyM2Ref = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const restaurantMRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const restaurantWRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const parkBasketballMRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const parkRunnerWRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const parkSoccerMRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const parkKidMRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);

  const { actions: companyM1Actions } = useAnimations(companyM1.animations, companyM1.scene);
  const { actions : companyM2Actions } = useAnimations(companyM2.animations, companyM2.scene);
  const { actions : restaurantMActions } = useAnimations(restaurantM.animations, restaurantM.scene);
  const { actions: restaurantWActions } = useAnimations(restaurantW.animations, restaurantW.scene);
  const { actions: parkBasketballMActions } = useAnimations(parkBasketballM.animations, parkBasketballM.scene);
  const { actions: parkRunnerWActions } = useAnimations(parkRunnerW.animations, parkRunnerW.scene);
  const { actions: parkSoccerMActions } = useAnimations(parkSoccerM.animations, parkSoccerM.scene);
  const { actions: parkKidMActions } = useAnimations(parkKidM.animations, parkKidM.scene);

  const [active, setActive] = useState<string | null>(null);
  const [enabled, setEnabled] = useState<boolean | undefined>(false);

  const [companyM1Hovered, setCompanyM1Hovered] = useState<string | null>(null);
  const [companyM2Hovered, setCompanyM2Hovered] = useState<string | null>(null);
  const [restaurantMHovered, setRestaurantMHovered] = useState<string | null>(null);
  const [restaurantWHovered, setRestaurantWHovered] = useState<string | null>(null);
  const [parkBasketballMHovered, setParkBasketballMHovered] = useState<string | null>(null);
  const [parkRunnerWHovered, setParkRunnerWHovered] = useState<string | null>(null);
  const [parkSoccerMHovered, setParkSoccerMHovered] = useState<string | null>(null);
  const [parkKidMHovered, setParkKidMHovered] = useState<string | null>(null);

  useCursor(companyM1Hovered == "Jayden");
  useCursor(companyM2Hovered == "Kevin");
  useCursor(restaurantMHovered == "Luke");
  useCursor(restaurantWHovered == "Olivia");
  useCursor(parkBasketballMHovered == "Marco");
  useCursor(parkRunnerWHovered == "Sanha");
  useCursor(parkSoccerMHovered == "Jerome");
  useCursor(parkKidMHovered == "Jerry");

  const controlsRef = useRef<CameraControls | null>(null);

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
    const anim = companyM1Hovered ? 'Victory' : 'Idle';
    companyM1Actions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      companyM1Actions[anim]?.fadeOut(0.5);
    }
  }, [companyM1Hovered, companyM1Actions]);

  useEffect(() => {
    const anim = companyM2Hovered ? 'Victory' : 'Idle';
    companyM2Actions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      companyM2Actions[anim]?.fadeOut(0.5);
    }
  }, [companyM2Hovered, companyM2Actions]);

  useEffect(() => {
    const anim = restaurantMHovered ? 'Victory' : 'Idle';
    restaurantMActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      restaurantMActions[anim]?.fadeOut(0.5);
    }
  }, [restaurantMHovered, restaurantMActions]);

  useEffect(() => {
    const anim = restaurantWHovered ? 'Victory' : 'Idle';
    restaurantWActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      restaurantWActions[anim]?.fadeOut(0.5);
    }
  }, [restaurantWHovered, restaurantWActions]);

  useEffect(() => {
    const anim = parkBasketballMHovered ? 'Victory' : 'Idle';
    parkBasketballMActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      parkBasketballMActions[anim]?.fadeOut(0.5);
    }
  }, [parkBasketballMHovered, parkBasketballMActions]);
  
  useEffect(() => {
    const anim = parkRunnerWHovered ? 'Victory' : 'Idle';
    parkRunnerWActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      parkRunnerWActions[anim]?.fadeOut(0.5);
    }
  }, [parkRunnerWHovered, parkRunnerWActions]);

  useEffect(() => {
    const anim = parkSoccerMHovered ? 'Victory' : 'Idle';
    parkSoccerMActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      parkSoccerMActions[anim]?.fadeOut(0.5);
    }
  }, [parkSoccerMHovered, parkSoccerMActions]);

  useEffect(() => {
    const anim = parkKidMHovered ? 'Victory' : 'Idle';
    parkKidMActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      parkKidMActions[anim]?.fadeOut(0.5);
    }
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
        position={[-4.5, 1.8, 0.051]}
        anchorY={"bottom"}
      >
        Park
      </Text>

      <Text
        font="../font/PasseroOne-Regular.ttf"
        fontSize={0.2}
        color="black"
        position={[1.5, 1.8, 0.051]}
        anchorY={"bottom"}
      >
        Company
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
        position={[1.5, -0.2, 0.051]}
        anchorY={"bottom"}
      >
        Hotel
      </Text>

      <NPCStage
        texture="../map/introduce/park.jpg"
        name="Jerry"
        age="8"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        setHovered={setParkKidMHovered}
        position-x={-4.5}
        position-y={1}
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
        setHovered={setParkRunnerWHovered}
        position-x={-3}
        position-y={1}
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
        setHovered={setParkBasketballMHovered}
        position-x={-1.5}
        position-y={1}
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
        setHovered={setParkSoccerMHovered}
        position-y={1}
      >
        <primitive scale={1} ref={parkSoccerMRef} position-y={-0.75} rotation={[0, 0, 0]} object={parkSoccerM.scene} />
      </NPCStage>

      <NPCStage
        texture="../map/introduce/city.jpg"
        name="Jayden"
        age="30"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        setHovered={setCompanyM1Hovered}
        position-x={1.5}
        position-y={1}
      >
        <primitive scale={1} ref={companyM1Ref} position-y={-0.75} rotation={[0, 0, 0]} object={companyM1.scene} />
      </NPCStage>

      <NPCStage
        texture="../map/introduce/city.jpg"
        name="Kevin"
        age="30"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        setHovered={setCompanyM2Hovered}
        position-x={3}
        position-y={1}
      >
        <primitive scale={1} ref={companyM2Ref} position-y={-0.75} rotation={[0, 0, 0]} object={companyM2.scene} />
      </NPCStage>

      <NPCStage
        texture="../map/introduce/cafeteria.jpg"
        name="Luke"
        age="20"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        setHovered={setRestaurantMHovered}
        position-x={-4.5}
        position-y={-1}
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
        setHovered={setRestaurantWHovered}
        position-x={-3}
        position-y={-1}
      >
        <primitive scale={1} ref={restaurantWRef} position-y={-0.75} rotation={[0, 0, 0]} object={restaurantW.scene} />
      </NPCStage>
    </>
  );
};
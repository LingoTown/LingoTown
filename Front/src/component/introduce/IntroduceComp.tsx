import {
  CameraControls,
  Environment,
  Text,
  useAnimations,
  useGLTF
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { NPCStage } from "./NPCStage";

export const IntroduceComp: React.FC = () => {
  const jerry = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_14.glb');
  const sanha = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/f_18.glb');
  const marco = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_32.glb');
  const bonnie = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/f_8.glb');
  const jaden = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_3.glb');
  const kevin = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_8.glb');
  const daen = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/f_16.glb');
  const olivia = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/f_17.glb');
  const luke = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_25.glb');
  const isabel = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/f_13.glb');
  const jina = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/f_10.glb');
  const jimmy = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_16.glb');
  const barry = useGLTF('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_19.glb');

  const jerryRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const sanhaRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const marcoRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const bonnieRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const jadenRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const kevinRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const daenRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const oliviaRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const lukeRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const isabelRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const jinaRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const jimmyRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
  const barryRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);

  const { actions: jerryActions } = useAnimations(jerry.animations, jerry.scene);
  const { actions: sanhaActions } = useAnimations(sanha.animations, sanha.scene);
  const { actions : marcoActions } = useAnimations(marco.animations, marco.scene);
  const { actions : bonnieActions } = useAnimations(bonnie.animations, bonnie.scene);
  const { actions: jadenActions } = useAnimations(jaden.animations, jaden.scene);
  const { actions: kevinActions } = useAnimations(kevin.animations, kevin.scene);
  const { actions: daenActions } = useAnimations(daen.animations, daen.scene);
  const { actions: oliviaActions } = useAnimations(olivia.animations, olivia.scene);
  const { actions: lukeActions } = useAnimations(luke.animations, luke.scene);
  const { actions: isabelActions } = useAnimations(isabel.animations, isabel.scene);
  const { actions: jinaActions } = useAnimations(jina.animations, jina.scene);
  const { actions: jimmyActions } = useAnimations(jimmy.animations, jimmy.scene);
  const { actions: barryActions } = useAnimations(barry.animations, barry.scene);

  const [active, setActive] = useState<string | null>(null);
  const [enabled, setEnabled] = useState<boolean | false>(false);
  const [cameraEnabled, setCameraEnabled] = useState<boolean | undefined>(false);

  const [jerryHovered, setJerryHovered] = useState<string | null>(null);
  const [sanhaHovered, setSanhaHovered] = useState<string | null>(null);
  const [marcoHovered, setMarcoHovered] = useState<string | null>(null);
  const [bonnieHovered, setBonnieHovered] = useState<string | null>(null);
  const [jadenHovered, setJadenHovered] = useState<string | null>(null);
  const [kevinHovered, setKevinHovered] = useState<string | null>(null);
  const [daenHovered, setDaenHovered] = useState<string | null>(null);
  const [oliviaHovered, setOliviaHovered] = useState<string | null>(null);
  const [lukeHovered, setLukeHovered] = useState<string | null>(null);
  const [isabelHovered, setIsabelHovered] = useState<string | null>(null);
  const [jinaHovered, setJinaHovered] = useState<string | null>(null);
  const [jimmyHovered, setJimmyHovered] = useState<string | null>(null);
  const [barryHovered, setBarryHovered] = useState<string | null>(null);

  useEffect(() => {
    const anyHovered =
      jerryHovered == "Jerry" ||
      sanhaHovered == "Sanha" ||
      marcoHovered == "Marco" ||
      bonnieHovered == "Bonnie" ||
      jadenHovered == "Jaden" ||
      kevinHovered == "Kevin" ||
      daenHovered == "Daen" ||
      oliviaHovered == "Olivia" ||
      lukeHovered == "Luke" ||
      isabelHovered == "Isabel" ||
      jinaHovered == "Jina" ||
      jimmyHovered == "Jimmy" ||
      barryHovered == "Barry";

    if (anyHovered) {
      document.body.style.cursor = `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_hover_small.png'), auto`;
    } else {
      document.body.style.cursor = `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_small.png'), auto`;
    }

    return () => {
      document.body.style.cursor = `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_small.png'), auto`;
    };
  }, [
    jerryHovered,
    sanhaHovered,
    marcoHovered,
    bonnieHovered,
    jadenHovered,
    kevinHovered,
    daenHovered,
    oliviaHovered,
    lukeHovered,
    isabelHovered,
    jinaHovered,
    jimmyHovered,
    barryHovered
  ]);

  const controlsRef = useRef<CameraControls | null>(null);

  const sceneInstance = useThree(state => state.scene);

  useEffect(() => {
    if (active) {
      const targetPosition = new THREE.Vector3();
      sceneInstance.getObjectByName(active!)?.getWorldPosition(targetPosition);

      controlsRef.current?.setLookAt(targetPosition.x + 2, targetPosition.y, targetPosition.z + 5, targetPosition.x + 2, targetPosition.y, targetPosition.z, true);
      setCameraEnabled(true);
    } else {
      controlsRef.current?.setLookAt(0, 0, 10, 0, 0, 0, true);

      setTimeout(() => {
        setCameraEnabled(false);
      }, 1000)
    }
  }, [active, sceneInstance]);

  useEffect(() => {
    const anim = jerryHovered ? 'Victory' : 'Idle';
    jerryActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      jerryActions[anim]?.fadeOut(0.5);
    }
  }, [jerryHovered, jerryActions]);

  useEffect(() => {
    const anim = sanhaHovered ? 'Victory' : 'Idle';
    sanhaActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      sanhaActions[anim]?.fadeOut(0.5);
    }
  }, [sanhaHovered, sanhaActions]);

  useEffect(() => {
    const anim = marcoHovered ? 'Victory' : 'Idle';
    marcoActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      marcoActions[anim]?.fadeOut(0.5);
    }
  }, [marcoHovered, marcoActions]);

  useEffect(() => {
    const anim = bonnieHovered ? 'Victory' : 'Idle';
    bonnieActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      bonnieActions[anim]?.fadeOut(0.5);
    }
  }, [bonnieHovered, bonnieActions]);

  useEffect(() => {
    const anim = jadenHovered ? 'Victory' : 'Idle';
    jadenActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      jadenActions[anim]?.fadeOut(0.5);
    }
  }, [jadenHovered, jadenActions]);

  useEffect(() => {
    const anim = kevinHovered ? 'Victory' : 'Idle';
    kevinActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      kevinActions[anim]?.fadeOut(0.5);
    }
  }, [kevinHovered, kevinActions]);
  
  useEffect(() => {
    const anim = daenHovered ? 'Victory' : 'Idle';
    daenActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      daenActions[anim]?.fadeOut(0.5);
    }
  }, [daenHovered, daenActions]);

  useEffect(() => {
    const anim = oliviaHovered ? 'Victory' : 'Idle';
    oliviaActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      oliviaActions[anim]?.fadeOut(0.5);
    }
  }, [oliviaHovered, oliviaActions]);

  useEffect(() => {
    const anim = lukeHovered ? 'Victory' : 'Idle';
    lukeActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      lukeActions[anim]?.fadeOut(0.5);
    }
  }, [lukeHovered, lukeActions]);

  useEffect(() => {
    const anim = isabelHovered ? 'Victory' : 'Idle';
    isabelActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      isabelActions[anim]?.fadeOut(0.5);
    }
  }, [isabelHovered, isabelActions]);

  useEffect(() => {
    const anim = jinaHovered ? 'Victory' : 'Idle';
    jinaActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      jinaActions[anim]?.fadeOut(0.5);
    }
  }, [jinaHovered, jinaActions]);

  useEffect(() => {
    const anim = jimmyHovered ? 'Victory' : 'Idle';
    jimmyActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      jimmyActions[anim]?.fadeOut(0.5);
    }
  }, [jimmyHovered, jimmyActions]);

  useEffect(() => {
    const anim = barryHovered ? 'Victory' : 'Idle';
    barryActions[anim]?.reset()?.fadeIn(0.5)?.play();
    return () => {
      barryActions[anim]?.fadeOut(0.5);
    }
  }, [barryHovered, barryActions]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />

      <CameraControls ref={controlsRef} enabled={cameraEnabled} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />

      <Text
        font="https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Font/PasseroOne-Regular.ttf"
        fontSize={0.2}
        color="black"
        position={[-4.5, 1.8, 0.051]}
        anchorY={"bottom"}
      >
        Park
      </Text>

      <Text
        font="https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Font/PasseroOne-Regular.ttf"
        fontSize={0.2}
        color="black"
        position={[1.5, 1.8, 0.051]}
        anchorY={"bottom"}
      >
        Company
      </Text>

      <Text
        font="https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Font/PasseroOne-Regular.ttf"
        fontSize={0.2}
        color="black"
        position={[-4.5, -0.2, 0.051]}
        anchorY={"bottom"}
      >
        Restaurant
      </Text>

      <Text
        font="https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Font/PasseroOne-Regular.ttf"
        fontSize={0.2}
        color="black"
        position={[1.5, -0.2, 0.051]}
        anchorY={"bottom"}
      >
        Museum
      </Text>

      <NPCStage
        texture="https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Introduce/park.jpg"
        name="Jerry"
        age="8"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        enabled={enabled}
        setEnabled={setEnabled}
        setHovered={setJerryHovered}
        position-x={-4.5}
        position-y={1}
      >
        <primitive scale={1} ref={jerryRef} position-y={-0.75} rotation={[0, 0, 0]} object={jerry.scene} />
      </NPCStage>

      <NPCStage
        texture="https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Introduce/park.jpg"
        name="Sanha"
        age="26"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        enabled={enabled}
        setEnabled={setEnabled}
        setHovered={setSanhaHovered}
        position-x={-3}
        position-y={1}
      >
        <primitive scale={1} ref={sanhaRef} position-y={-0.75} rotation={[0, 0, 0]} object={sanha.scene} />
      </NPCStage>

      <NPCStage
        texture="https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Introduce/park.jpg"
        name="Marco"
        age="26"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        enabled={enabled}
        setEnabled={setEnabled}
        setHovered={setMarcoHovered}
        position-x={-1.5}
        position-y={1}
      >
        <primitive scale={1} ref={marcoRef} position-y={-0.75} rotation={[0, 0, 0]} object={marco.scene} />
      </NPCStage>

      <NPCStage
        texture="https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Introduce/park.jpg"
        name="Bonnie"
        age="18"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        enabled={enabled}
        setEnabled={setEnabled}
        setHovered={setBonnieHovered}
        position-y={1}
      >
        <primitive scale={1} ref={bonnieRef} position-y={-0.75} rotation={[0, 0, 0]} object={bonnie.scene} />
      </NPCStage>

      <NPCStage
        texture="https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Introduce/city.jpg"
        name="Jaden"
        age="33"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        enabled={enabled}
        setEnabled={setEnabled}
        setHovered={setJadenHovered}
        position-x={1.5}
        position-y={1}
      >
        <primitive scale={1} ref={jadenRef} position-y={-0.75} rotation={[0, 0, 0]} object={jaden.scene} />
      </NPCStage>

      <NPCStage
        texture="https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Introduce/city.jpg"
        name="Kevin"
        age="33"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        enabled={enabled}
        setEnabled={setEnabled}
        setHovered={setKevinHovered}
        position-x={3}
        position-y={1}
      >
        <primitive scale={1} ref={kevinRef} position-y={-0.75} rotation={[0, 0, 0]} object={kevin.scene} />
      </NPCStage>

      <NPCStage
        texture="https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Introduce/city.jpg"
        name="Daen"
        age="27"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        enabled={enabled}
        setEnabled={setEnabled}
        setHovered={setDaenHovered}
        position-x={4.5}
        position-y={1}
      >
        <primitive scale={1} ref={daenRef} position-y={-0.75} rotation={[0, 0, 0]} object={daen.scene} />
      </NPCStage>

      <NPCStage
        texture="https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Introduce/cafeteria.jpg"
        name="Olivia"
        age="31"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        enabled={enabled}
        setEnabled={setEnabled}
        setHovered={setOliviaHovered}
        position-x={-4.5}
        position-y={-1}
      >
        <primitive scale={1} ref={oliviaRef} position-y={-0.75} rotation={[0, 0, 0]} object={olivia.scene} />
      </NPCStage>

      <NPCStage
        texture="https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Introduce/cafeteria.jpg"
        name="Luke"
        age="24"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        enabled={enabled}
        setEnabled={setEnabled}
        setHovered={setLukeHovered}
        position-x={-3}
        position-y={-1}
      >
        <primitive scale={1} ref={lukeRef} position-y={-0.75} rotation={[0, 0, 0]} object={luke.scene} />
      </NPCStage>

      <NPCStage
        texture="https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Introduce/cafeteria.jpg"
        name="Isabel"
        age="23"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        enabled={enabled}
        setEnabled={setEnabled}
        setHovered={setIsabelHovered}
        position-x={-1.5}
        position-y={-1}
      >
        <primitive scale={1} ref={isabelRef} position-y={-0.75} rotation={[0, 0, 0]} object={isabel.scene} />
      </NPCStage>

      <NPCStage
        texture="https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Introduce/cafeteria.jpg"
        name="Jina"
        age="18"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        enabled={enabled}
        setEnabled={setEnabled}
        setHovered={setJinaHovered}
        position-x={1.5}
        position-y={-1}
      >
        <primitive scale={1} ref={jinaRef} position-y={-0.75} rotation={[0, 0, 0]} object={jina.scene} />
      </NPCStage>

      <NPCStage
        texture="https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Introduce/cafeteria.jpg"
        name="Jimmy"
        age="29"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        enabled={enabled}
        setEnabled={setEnabled}
        setHovered={setJimmyHovered}
        position-x={3}
        position-y={-1}
      >
        <primitive scale={1} ref={jimmyRef} position-y={-0.75} rotation={[0, 0, 0]} object={jimmy.scene} />
      </NPCStage>

      <NPCStage
        texture="https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Introduce/cafeteria.jpg"
        name="Barry"
        age="27"
        color={new THREE.Color("black")}
        active={active}
        setActive={setActive}
        enabled={enabled}
        setEnabled={setEnabled}
        setHovered={setBarryHovered}
        position-x={4.5}
        position-y={-1}
      >
        <primitive scale={1} ref={barryRef} position-y={-0.75} rotation={[0, 0, 0]} object={barry.scene} />
      </NPCStage>
    </>
  );
};
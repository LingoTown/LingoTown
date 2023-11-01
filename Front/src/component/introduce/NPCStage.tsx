import {
  Environment,
  MeshPortalMaterial,
  PortalMaterialType,
  RoundedBox,
  Text,
  useTexture
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
import * as THREE from "three";

export const NPCStage: React.FC<{
  children: React.ReactNode;
  texture: string;
  name: string;
  age: string;
  color: THREE.Color;
  active: string | null;
  setActive: (name: string | null) => void;
  setHovered: (name: string | null) => void;
}> = ({
  children, texture, name, age, color, active, setActive, setHovered, ...props
}) => {
  const information = [
    { "Jerry": "little kid playing in the park" },
    { "Sanha": "runner" },
    { "Marco": "captain of the 'Daejeon \n Hana Citizen' team." },
    { "Jerome": "coach of the 'ojossi' \n soccer team" },
    { "Noah": "'Lingo Gelato' employee \n who sells gelato and \n various drinks." },
    { "Olivia": "‘LingoMongo’ restaurant chef" },
    { "Luke": "‘LingoMongo’ restaurant chef" }
  ];

  const map = useTexture(texture);
  const map2D = useTexture("../map/introduce/intro.jpg");
  const textureLoader = new THREE.TextureLoader();
  const backgroundTexture = textureLoader.load('../map/introduce/bgggg.png');

  const portalMaterial = useRef<PortalMaterialType | null>(null);

  useFrame((_state, delta) => {
    if (portalMaterial.current !== null) {
      const worldOpen = active === name;
      easing.damp(portalMaterial.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
    }
  })

  return (
    <group {...props}>
      <primitive object={backgroundTexture} attach="background" />
      <Text
        font="../font/PasseroOne-Regular.ttf"
        fontSize={0.2}
        color="white"
        position={[0, -0.7, 0.051]}
        anchorY={"bottom"}
      >
        {name}
        <meshBasicMaterial
          color={color}
          toneMapped={false}
        />
      </Text>
      
      <RoundedBox
        name={name}
        args={[2, 3, 1]}
        scale={[0.5, 0.5, 0.1]}
        onClick={() => setActive(active === name ? null : name)}
        onPointerEnter={() => setHovered(name)}
        onPointerLeave={() => setHovered(null)}
      >
        <MeshPortalMaterial
          side={THREE.DoubleSide}
          ref={portalMaterial}
        >
          <ambientLight intensity={0.5} />
          <Environment preset="sunset" />

          {children}

          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial
              map={map}
              side={THREE.BackSide}
            />
          </mesh>

          <mesh position={[5, 0, 0.05]}>
            <planeGeometry
              args={[5, 4]}
            />
            <meshBasicMaterial
              map={map2D}
              color="white"
            />
          </mesh>

          <Text
            font="../font/PasseroOne-Regular.ttf"
            fontSize={0.3}
            color="black"
            position={[5, 1, 0.051]}
          >
            Name : {name}
          </Text>

          <Text
            font="../font/PasseroOne-Regular.ttf"
            fontSize={0.3}
            color="black"
            position={[5, 0.5, 0.051]}
          >
            Age : {age}
          </Text>

          <Text
            font="../font/PasseroOne-Regular.ttf"
            fontSize={0.3}
            color="black"
            position={[5, -0.5, 0.051]}
            
          >
            {information
              .filter(item => Object.keys(item)[0] === name)
              .map(item => Object.values(item)[0])
            }
          </Text>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  )
}
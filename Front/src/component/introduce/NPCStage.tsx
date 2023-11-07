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
  enabled: boolean | false;
  setEnabled: (name: boolean | false) => void;
  setHovered: (name: string | null) => void;
}> = ({
  children, texture, name, age, color, active, setActive, enabled, setEnabled, setHovered, ...props
}) => {
  const information = [
    { "Jerry": "Little kid playing in the park." },
    { "Sanha": "Runner." },
    { "Marco": "Captain of the 'Daejeon \n Hana Citizen' team." },
    { "Bonnie": "'SSAFY' high school student \n and are classmates with user." },
    { "Jaden": "Head of the human resources \n department of the \n 'SAMSUNG' company." },
    { "Kevin": "The host of the new mobile project \n presentation at SAMSUNG." },
    { "Daen": "The presenter at SSAFY." },
    { "Olivia": "‘LingoMongo’ restaurant chef." },
    { "Luke": "Customer of ‘LingoMongo’ Restaurant." },
    { "Isabel": "Musician who sings on the street." },
    { "Jina": "'SSAFY' High School student, \n friend of user" },
    { "Jimmy": "Sheriff" },
    { "Barry": "Tourist" },
  ];

  const map = useTexture(texture);
  const map2D = useTexture(`${import.meta.env.VITE_S3_URL}Introduce/intro.jpg`);
  const textureLoader = new THREE.TextureLoader();
  const backgroundTexture = textureLoader.load(import.meta.env.VITE_S3_URL + "Introduce/bgggg.png");

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
        font={`${import.meta.env.VITE_S3_URL}Font/PasseroOne-Regular.ttf`}
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
        onClick={() => {
          if (!enabled && active !== name) {
            setActive(active === name ? null : name);
            setEnabled(true);
          }
        }}
        onPointerEnter={() => {
          if (!enabled && active !== name) {
            setHovered(name);
          }
        }}
        onPointerLeave={() => {
          if (!enabled && active !== name) {
            setHovered(null);
          }
        }}
      >
        <MeshPortalMaterial
          side={THREE.DoubleSide}
          ref={portalMaterial}
        >
          <ambientLight intensity={0.5} />
          <Environment preset="sunset" />

          {children}

          <mesh
            onClick={() => {
              if (enabled && active === name) {
                setActive(null);
                setEnabled(false);
              }
            }}
          >
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
            font={`${import.meta.env.VITE_S3_URL}Font/PasseroOne-Regular.ttf`}
            fontSize={0.3}
            color="black"
            position={[5, 1, 0.051]}
          >
            Name : {name}
          </Text>

          <Text
            font={`${import.meta.env.VITE_S3_URL}Font/PasseroOne-Regular.ttf`}
            fontSize={0.3}
            color="black"
            position={[5, 0.5, 0.051]}
          >
            Age : {age}
          </Text>

          <Text
            font={`${import.meta.env.VITE_S3_URL}Font/PasseroOne-Regular.ttf`}
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
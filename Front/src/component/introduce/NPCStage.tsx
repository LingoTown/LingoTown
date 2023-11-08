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
import background from "../../../public/background/background.png";

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
    { "Jerry": "공원에서 산책하고 있다.\n\n친구가 강아지를 데리고 화장실을 갔다.\n\n어제 초등학교 입학했다." },
    { "Sanha": "건강에 관심이 많다.\n\n런닝을 좋아하며, 스트레칭을 하는 습관이 있다.\n\n하얀색을 좋아하며, 하얀색 안경을 구매할까 생각중이다." },
    { "Marco": "축구 'Daejeon Hana Citizen' team의 주장\n\n오늘 'LingoTown' 유소년 축구대회 우승 파티가 있다.\n\n1년째 사귀고 있는 여자친구가 있다." },
    { "Bonnie": "'SSAFY' 고등학교 학생\n\n쇼핑을 좋아하며, 다이어트를 하고 있다.\n\n고등학교 졸업을 앞두고 있으며, Prom 파티를 준비하고 있다." },
    { "Jaden": "'SAMSUNG’의 인사 팀장\n\n이번 SAMSUNG 공채 일정 담당을 맡았다.\n\n판타지 소설을 좋아한다.\n\n비오는 날씨를 좋아한다." },
    { "Kevin": "'SAMSUNG' 의 모바일 프로젝트 발표회 사회자\n\n오늘 발표할 팀과 일정에 대한 정보를 가지고 있다.\n\n상금을 관리하고 있다.\n\n가족 중 쌍둥이가 있다." },
    { "Daen": "프로젝트 'Lingo'를 발표하는 발표자\n\n'SAMSUNG'의 신입사원\n\n외국어에 대한 관심이 많다.\n\n취업을 하고, 부모님 선물에 대해 고민하고 있다." },
    { "Olivia": "한국 전통 음식 레스토랑 'Lingo Mongo' 요리사.\n\n한국 사람이지만, 이 곳으로 이민 왔다.\n\n가장 자신있는 음식은 비빔밥이다." },
    { "Luke": "대학 방학이라 세계 여행하는 대학생\n\n부자라 봉사활동에 관심이 많다.\n\n한식을 좋아한다." },
    { "Isabel": "길거리에서 노래하는 뮤지션\n\n작곡을 배우고 있다.\n\n임영웅과 친구이며, kpop에 관심이 많다.\n\n지금 돈이 없어서 내 집 마련을 꿈꾸고 있는 중이다" },
    { "Jina": "'SSAFY' 고등학교 학생\n\n전공에 대해 고민하는 중\n\n오늘 아르바이트 중 진상 손님을 만나 힘든 하루다." },
    { "Jimmy": "전시회 보안관\n\n밥을 중요시 생각한다.\n\n디저트를 좋아해 오늘 퇴근 후 디저트 가게에 갈 예정이다.\n\n환경에 관심이 많다." },
    { "Barry": "파리 여행 관광객\n\n파리 문화에 관심이 많으며 27살 생일을 맞아 여행 중\n\n 친구들에게 생일 선물을 받았고, 파티에 먹을 음식 살 예정이다." },
  ];

  const map = useTexture(texture);
  const map2D = useTexture(`${import.meta.env.VITE_S3_URL}Introduce/intro.jpg`);
  const textureLoader = new THREE.TextureLoader();
  textureLoader.crossOrigin = 'anonymous';

  const backgroundTexture = textureLoader.load(background);

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

          <mesh position={[6, 0, 0.05]}>
            <planeGeometry
              args={[6, 4]}
            />
            <meshBasicMaterial
              map={map2D}
              color="white"
            />
          </mesh>

          <Text
            font={`${import.meta.env.VITE_S3_URL}Font/gabia_solmee.ttf`}
            fontSize={0.3}
            color="black"
            position={[5, 1, 0.051]}
          >
            이름 : {name}
          </Text>

          <Text
            font={`${import.meta.env.VITE_S3_URL}Font/gabia_solmee.ttf`}
            fontSize={0.3}
            color="black"
            position={[7, 1, 0.051]}
          >
            나이 : {age}
          </Text>

          <Text
            font={`${import.meta.env.VITE_S3_URL}Font/gabia_solmee.ttf`}
            fontSize={0.2}
            color="black"
            position={[6, -0.2, 0.051]}
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
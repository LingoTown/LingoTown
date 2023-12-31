import {
  CameraControls,
  Environment,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as THREE from "three";
import { loadingAtom } from '../../atom/LoadingAtom.ts';
import { BackToCategoryComp } from "./BackToCategoryComp";
import { CategoryComp } from "./CategoryComp";
import { MapEnterComp } from "./MapEnterComp";
import { TextUtil } from "./util/TextUtil";

type ThemeCompProps = {
  setWorking: Dispatch<SetStateAction<boolean>>;
};

export const ThemeComp: React.FC<ThemeCompProps> = ({ setWorking }) => {
const text: string[] = useState(["공원", "이벤트 홀", "식당", "아트 갤러리"])[0];

const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const languageParam = queryParams.get('language');
const language = languageParam ? parseInt(languageParam) : 0;

const [active, setActive] = useState<string>("");
const [enabled, setEnabled] = useState<boolean>(false);

const [eventhallPreviewHovered] = useState<string>("");
const [parkPreviewHovered] = useState<string>("");
const [restaurantPreviewHovered, setRestaurantPreviewHovered] = useState<string>("");
const [galleryPreviewHovered, setGalleryPreviewHovered] = useState<string>("");

const [parkEnterHovered, setParkEnterHovered] = useState<string>("");
const [eventhallEnterHovered, setEventhallEnterHovered] = useState<string>("");
const [restaurantEnterHovered, setRestaurantEnterHovered] = useState<string>("");
const [galleryEnterHovered, setGalleryEnterHovered] = useState<string>("");

const [loading, setLoading] = useRecoilState(loadingAtom);

  useEffect(() => {
    const anyHovered =
      parkPreviewHovered === text[0] ||
      eventhallPreviewHovered === text[1] ||
      restaurantPreviewHovered === text[2] ||
      galleryPreviewHovered === text[3] ||
      parkEnterHovered === text[0] ||
      eventhallEnterHovered === text[1] ||
      restaurantEnterHovered === text[2] ||
      galleryEnterHovered === text[3];

  if (anyHovered) {
    document.body.style.cursor = `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto`;
  } else {
    document.body.style.cursor = `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_small.png'), auto`;
  }

  return () => {
    document.body.style.cursor = `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_small.png'), auto`;
  };
}, [
  parkPreviewHovered,
  eventhallPreviewHovered,
  restaurantPreviewHovered,
  galleryPreviewHovered,
  parkEnterHovered,
  eventhallEnterHovered,
  restaurantEnterHovered,
  galleryEnterHovered,
  text,
  language
]);

const controlsRef = useRef<CameraControls>(null);

const sceneInstance = useThree(state => state.scene);

useEffect(() => {
  if (active) {
    const targetPosition = new THREE.Vector3();
    sceneInstance.getObjectByName(active)?.getWorldPosition(targetPosition);

    controlsRef.current?.setLookAt(targetPosition.x - 5, targetPosition.y + 5, targetPosition.z + 20, targetPosition.x - 5, targetPosition.y, targetPosition.z, true);
    setWorking(true);
  } else {
    controlsRef.current?.setLookAt(0, 0, 10, 0, 0, 0, true);
    setWorking(false);
  }

  if(loading.loading) setLoading(() => ({loading:false}));

}, [active, loading, setLoading, sceneInstance]);

return (
  <>
    <ambientLight intensity={0.5} />
    <Environment preset="park" />

    <CameraControls ref={controlsRef} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 6} />

      <TextUtil x={-2} y={1.8} z={-2} color="black" size={0.25} name={text[0]} />
      <TextUtil x={2} y={1.8} z={-2} color="black" size={0.25} name={text[1]} />
      <TextUtil x={-2} y={-0.7} z={-2} color="black" size={0.25} name={text[2]} />
      <TextUtil x={2} y={-0.7} z={-2} color="black" size={0.25} name={text[3]} />

      <MapEnterComp x={-1} y={1.8} z={-2} path={`park?language=${language}&world=1`} name={text[0]} active={active} enabled={enabled} setHovered={setParkEnterHovered} language={language} />
      <MapEnterComp x={language === 1 ? 3.3 : 3} y={1.8} z={-2} path={`eventhall?language=${language}&world=2`} name={text[1]} active={active} enabled={enabled} setHovered={setEventhallEnterHovered} language={language} />
      <MapEnterComp x={-1} y={-0.7} z={-2} path={`restaurant?language=${language}&world=3`} name={text[2]} active={active} enabled={enabled} setHovered={setRestaurantEnterHovered} language={language} />
      <MapEnterComp x={3} y={-0.7} z={-2} path={`gallery?language=${language}&world=8`} name={text[3]} active={active} enabled={enabled} setHovered={setGalleryEnterHovered} language={language} />

      <CategoryComp
        texture={language === 1 ? 0 : 1}
        name={text[0]}
        active={active}
        setActive={setActive}
        setHovered={setParkEnterHovered}
        enabled={enabled}
        setEnabled={setEnabled}
        language={language}
        position-x={-2}
        position-y={0.5}
        position-z={-2}
      >
        <BackToCategoryComp
          x={0}
          y={2}
          z={0}
          name={text[0]}
          color="black"
          active={active}
          setActive={setActive}
          setHovered={setParkEnterHovered}
          enabled={enabled}
          setEnabled={setEnabled}
          isDisplayed={language !== 1}
        />
      </CategoryComp>

      <CategoryComp
        texture={language === 1 ? 0 : 2}
        name={text[1]}
        active={active}
        setActive={setActive}
        setHovered={setEventhallEnterHovered}
        enabled={enabled}
        setEnabled={setEnabled}
        language={language}
        position-x={2}
        position-y={0.5}
        position-z={-2}
      >
        <BackToCategoryComp
          x={0}
          y={2}
          z={2}
          name={text[1]}
          color="white"
          active={active}
          setActive={setActive}
          setHovered={setEventhallEnterHovered}
          enabled={enabled}
          setEnabled={setEnabled}
          isDisplayed={language !== 1}
        />
      </CategoryComp>

      <CategoryComp
        texture={language === 1 ? 0 : 3}
        name={text[2]}
        active={active}
        setActive={setActive}
        setHovered={setRestaurantPreviewHovered}
        enabled={enabled}
        setEnabled={setEnabled}
        language={language}
        position-x={-2}
        position-y={-1.9}
        position-z={-2}
      >
        <BackToCategoryComp
          x={-2.5}
          y={0}
          z={1}
          name={text[2]}
          color="black"
          active={active}
          setActive={setActive}
          setHovered={setRestaurantPreviewHovered}
          enabled={enabled}
          setEnabled={setEnabled}
          isDisplayed={language !== 1}
        />
      </CategoryComp>

      <CategoryComp
        texture={language === 1 ? 4 : 0}
        name={text[3]}
        active={active}
        setActive={setActive}
        setHovered={setGalleryPreviewHovered}
        enabled={enabled}
        setEnabled={setEnabled}
        language={language}
        position-x={2}
        position-y={-1.9}
        position-z={-2}
      >
        <BackToCategoryComp
          x={-5}
          y={3.5}
          z={3}
          name={text[3]}
          color="black"
          active={active}
          setActive={setActive}
          setHovered={setGalleryPreviewHovered}
          enabled={enabled}
          setEnabled={setEnabled}
          isDisplayed={language === 1}
        />
      </CategoryComp>
    </>
  );
};
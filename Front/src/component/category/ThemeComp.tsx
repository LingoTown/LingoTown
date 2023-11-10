import {
CameraControls,
Environment,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import * as THREE from "three";
import { BackToCategoryComp } from "./BackToCategoryComp";
import { CategoryComp } from "./CategoryComp";
import { MapEnterComp } from "./MapEnterComp";
import { TextUtil } from "./util/TextUtil";
import { loadingAtom } from '../../atom/LoadingAtom.ts';
import { useRecoilState } from "recoil";

export const ThemeComp: React.FC = () => {
const text: string[][] = useState([["Park", "Event Hall", "Restaurant", "Gallery"], ["Parc", "Salle des événements", "Restaurant", "Galerie"]])[0];

const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const languageParam = queryParams.get('language');
const language = languageParam ? parseInt(languageParam) : 0;

const [active, setActive] = useState<string | null>(null);
const [enabled, setEnabled] = useState<boolean | false>(false);

const [eventhallPreviewHovered, setEventhallPreviewHovered] = useState<string | null>(null);
const [parkPreviewHovered, setParkPreviewHovered] = useState<string | null>(null);
const [restaurantPreviewHovered, setRestaurantPreviewHovered] = useState<string | null>(null);
const [galleryPreviewHovered, setGalleryPreviewHovered] = useState<string | null>(null);
setEventhallPreviewHovered;
setParkPreviewHovered;

const [parkEnterHovered, setParkEnterHovered] = useState<string | null>(null);
const [eventhallEnterHovered, setEventhallEnterHovered] = useState<string | null>(null);
const [restaurantEnterHovered, setRestaurantEnterHovered] = useState<string | null>(null);
const [galleryEnterHovered, setGalleryEnterHovered] = useState<string | null>(null);

const [loading, setLoading] = useRecoilState(loadingAtom);

  useEffect(() => {
    const anyHovered =
      parkPreviewHovered === text[language % 2][0] ||
      eventhallPreviewHovered === text[language % 2][1] ||
      restaurantPreviewHovered === text[language % 2][2] ||
      galleryPreviewHovered === text[language % 2][3] ||
      parkEnterHovered === text[language % 2][0] ||
      eventhallEnterHovered === text[language % 2][1] ||
      restaurantEnterHovered === text[language % 2][2] ||
      galleryEnterHovered === text[language % 2][3];

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

const controlsRef = useRef<CameraControls | null>(null);

const sceneInstance = useThree(state => state.scene);

useEffect(() => {
  if (active) {
    const targetPosition = new THREE.Vector3();
    sceneInstance.getObjectByName(active!)?.getWorldPosition(targetPosition);

    controlsRef.current?.setLookAt(targetPosition.x-5, targetPosition.y+5, targetPosition.z+20, targetPosition.x-5, targetPosition.y, targetPosition.z, true);
  } else {
    controlsRef.current?.setLookAt(0, 0, 10, 0, 0, 0, true);
  }

  if(loading.loading) setLoading(() => ({loading:false}));

}, [active, loading, setLoading, sceneInstance]);

return (
  <>
    <ambientLight intensity={0.5} />
    <Environment preset="park" />

    <CameraControls ref={controlsRef} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 6} />

      <TextUtil x={-2} y={1.85} z={0.051} color="black" size={0.2} name={text[language % 2][0]} />
      <TextUtil x={1.9} y={1.85} z={0.051} color="black" size={0.2} name={text[language % 2][1]} />
      <TextUtil x={-2} y={-0.4} z={0.051} color="black" size={0.2} name={text[language % 2][2]} />
      <TextUtil x={1.9} y={-0.4} z={0.051} color="black" size={0.2} name={text[language % 2][3]} />

      <MapEnterComp x={-1} y={1.85} z={0.051} path={`park?language=${language}&world=1`} name={text[language % 2][0]} active={active} enabled={enabled} setHovered={setParkEnterHovered} language={language} />
      <MapEnterComp x={language === 1 ? 3.3 : 2.9} y={1.85} z={0.051} path={`eventhall?language=${language}&world=2`} name={text[language % 2][1]} active={active} enabled={enabled} setHovered={setEventhallEnterHovered} language={language} />
      <MapEnterComp x={-1} y={-0.4} z={0.051} path={`restaurant?language=${language}&world=3`} name={text[language % 2][2]} active={active} enabled={enabled} setHovered={setRestaurantEnterHovered} language={language} />
      <MapEnterComp x={2.9} y={-0.4} z={0.051} path={`gallery?language=${language}&world=8`} name={text[language % 2][3]} active={active} enabled={enabled} setHovered={setGalleryEnterHovered} language={language} />

      <CategoryComp
        texture={language === 1 ? 0 : 1}
        name={text[language % 2][0]}
        active={active}
        setActive={setActive}
        setHovered={setParkEnterHovered}
        enabled={enabled}
        setEnabled={setEnabled}
        language={language}
        position-x={-2}
        position-y={0.8}
        position-z={-0.5}
      >
        <BackToCategoryComp
          x={0}
          y={2}
          z={0}
          name={text[language % 2][0]}
          color="black"
          active={active}
          setActive={setActive}
          setHovered={setParkEnterHovered}
          enabled={enabled}
          setEnabled={setEnabled}
          language={language}
          isDisplayed={language === 1 ? false : true}
        />
      </CategoryComp>

      <CategoryComp
        texture={language === 1 ? 0 : 2}
        name={text[language % 2][1]}
        active={active}
        setActive={setActive}
        setHovered={setEventhallEnterHovered}
        enabled={enabled}
        setEnabled={setEnabled}
        language={language}
        position-x={2}
        position-y={0.8}
        position-z={-0.5}
      >
        <BackToCategoryComp
          x={0}
          y={2}
          z={2}
          name={text[language % 2][1]}
          color="white"
          active={active}
          setActive={setActive}
          setHovered={setEventhallEnterHovered}
          enabled={enabled}
          setEnabled={setEnabled}
          language={language}
          isDisplayed={language === 1 ? false : true}
        />
      </CategoryComp>

      <CategoryComp
        texture={language === 1 ? 0 : 3}
        name={text[language % 2][2]}
        active={active}
        setActive={setActive}
        setHovered={setRestaurantPreviewHovered}
        enabled={enabled}
        setEnabled={setEnabled}
        language={language}
        position-x={-2}
        position-y={-1.5}
        position-z={-0.5}
      >
        <BackToCategoryComp
          x={-2.5}
          y={0}
          z={1}
          name={text[language % 2][2]}
          color="white"
          active={active}
          setActive={setActive}
          setHovered={setRestaurantPreviewHovered}
          enabled={enabled}
          setEnabled={setEnabled}
          language={language}
          isDisplayed={language === 1 ? false : true}
        />
      </CategoryComp>

      <CategoryComp
        texture={language === 1 ? 4 : 0}
        name={text[language % 2][3]}
        active={active}
        setActive={setActive}
        setHovered={setGalleryPreviewHovered}
        enabled={enabled}
        setEnabled={setEnabled}
        language={language}
        position-x={2}
        position-y={-1.5}
        position-z={-0.5}
      >
        <BackToCategoryComp
          x={-5}
          y={3.5}
          z={3}
          name={text[language % 2][3]}
          color="black"
          active={active}
          setActive={setActive}
          setHovered={setGalleryPreviewHovered}
          enabled={enabled}
          setEnabled={setEnabled}
          language={language}
          isDisplayed={language === 1 ? true : false}
        />
      </CategoryComp>
    </>
  );
};
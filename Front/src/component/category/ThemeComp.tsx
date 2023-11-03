import {
  CameraControls,
  Environment,
  useCursor,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import * as THREE from "three";
import { BackToCategoryComp } from "./BackToCategoryComp";
import { CategoryComp } from "./CategoryComp";
import { MapEnterComp } from "./MapEnterComp";
import { TextUtil } from "./util/TextUtil";

export const ThemeComp: React.FC = () => {
  const text: string[][] = useState([["park", "company", "restaurant", "hotel"], ["Parc", "entreprise", "restaurant", "hôtel"]])[0];

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const languageParam = queryParams.get('language');
  const language = languageParam ? parseInt(languageParam) : 0;

  const [active, setActive] = useState<string | null>(null);
  const [enabled, setEnabled] = useState<boolean | false>(false);

  const [companyPreviewHovered, setCompanyPreviewHovered] = useState<string | null>(null);
  const [parkPreviewHovered, setParkPreviewHovered] = useState<string | null>(null);
  const [restaurantPreviewHovered, setRestaurantPreviewHovered] = useState<string | null>(null);
  const [hotelPreviewHovered, setHotelPreviewHovered] = useState<string | null>(null);

  const [parkEnterHovered, setParkEnterHovered] = useState<string | null>(null);
  const [companyEnterHovered, setCompanyEnterHovered] = useState<string | null>(null);
  const [restaurantEnterHovered, setRestaurantEnterHovered] = useState<string | null>(null);
  const [hotelEnterHovered, setHotelEnterHovered] = useState<string | null>(null);

  useCursor(parkPreviewHovered == text[language][0]);
  useCursor(companyPreviewHovered == text[language][1]);
  useCursor(restaurantPreviewHovered == text[language][2]);
  useCursor(hotelPreviewHovered == text[language][3]);

  useCursor(parkEnterHovered == text[language][0]);
  useCursor(companyEnterHovered == text[language][1]);
  useCursor(restaurantEnterHovered == text[language][2]);
  useCursor(hotelEnterHovered == text[language][3]);

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
  }, [active, sceneInstance]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />

      <CameraControls ref={controlsRef} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 6} />

      <TextUtil x={-2} y={2.13} z={0.051} color="black" size={0.2} name={text[language][0]} />
      <TextUtil x={2} y={2.13} z={0.051} color="black" size={0.2} name={text[language][1]} />
      <TextUtil x={-2} y={-0.27} z={0.051} color="black" size={0.2} name={text[language][2]} />
      <TextUtil x={2} y={-0.27} z={0.051} color="black" size={0.2} name={text[language][3]} />

      <MapEnterComp x={-1} y={2.13} z={0.051} path="park" name={text[language][0]} active={active} enabled={enabled} setHovered={setParkEnterHovered} language={language} />
      <MapEnterComp x={3} y={2.13} z={0.051} path="company" name={text[language][1]} active={active} enabled={enabled} setHovered={setCompanyEnterHovered} language={language} />
      <MapEnterComp x={-1} y={-0.27} z={0.051} path="restaurant" name={text[language][2]} active={active} enabled={enabled} setHovered={setRestaurantEnterHovered} language={language} />
      <MapEnterComp x={3} y={-0.27} z={0.051} path="hotel" name={text[language][3]} active={active} enabled={enabled} setHovered={setHotelEnterHovered} language={language} />

      <CategoryComp
        texture={1}
        name={text[language][0]}
        active={active}
        setActive={setActive}
        setHovered={setParkPreviewHovered}
        enabled={enabled}
        setEnabled={setEnabled}
        language={language}
        position-x={-2}
        position-y={1}
      >
        <BackToCategoryComp
          x={0}
          y={2}
          z={0}
          name={text[language][0]}
          color="black"
          active={active}
          setActive={setActive}
          setHovered={setParkEnterHovered}
          enabled={enabled}
          setEnabled={setEnabled}
          language={language}
        />
      </CategoryComp>

      <CategoryComp
        texture={2}
        name={text[language][1]}
        active={active}
        setActive={setActive}
        setHovered={setCompanyPreviewHovered}
        enabled={enabled}
        setEnabled={setEnabled}
        language={language}
        position-x={2}
        position-y={1}
      >
        <BackToCategoryComp
          x={0}
          y={2}
          z={2}
          name={text[language][1]}
          color="black"
          active={active}
          setActive={setActive}
          setHovered={setCompanyEnterHovered}
          enabled={enabled}
          setEnabled={setEnabled}
          language={language}
        />
      </CategoryComp>

      <CategoryComp
        texture={3}
        name={text[language][2]}
        active={active}
        setActive={setActive}
        setHovered={setRestaurantPreviewHovered}
        enabled={enabled}
        setEnabled={setEnabled}
        language={language}
        position-x={-2}
        position-y={-1.35}
      >
        <BackToCategoryComp
          x={-2.5}
          y={0}
          z={1}
          name={text[language][2]}
          color="white"
          active={active}
          setActive={setActive}
          setHovered={setRestaurantPreviewHovered}
          enabled={enabled}
          setEnabled={setEnabled}
          language={language}
        />
      </CategoryComp>

      <CategoryComp
        texture={4}
        name={text[language][3]}
        active={active}
        setActive={setActive}
        setHovered={setHotelPreviewHovered}
        enabled={enabled}
        setEnabled={setEnabled}
        language={language}
        position-x={2}
        position-y={-1.35}
      >
        <BackToCategoryComp
          x={-5}
          y={2.5}
          z={3}
          name={text[language][3]}
          color="white"
          active={active}
          setActive={setActive}
          setHovered={setHotelEnterHovered}
          enabled={enabled}
          setEnabled={setEnabled}
          language={language}
        />
      </CategoryComp>
    </>
  );
};
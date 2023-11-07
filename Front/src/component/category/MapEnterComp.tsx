import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { TextUtil } from "./util/TextUtil";
import { RoundedBox } from '@react-three/drei';
import { loadingAtom } from '../../atom/LoadingAtom';
import { useRecoilState } from "recoil";

export const MapEnterComp: React.FC<{
  x: number;
  y: number;
  z: number;
  path: string | null;
  name: string | null;
  active: string | null;
  setHovered: (name: string | null) => void | null;
  enabled: boolean | false;
  language: number | null;
}> = ({
  x, y, z, path, name, active, setHovered, enabled, language
}) => {
  const navigate = useNavigate();

  const text = useState(["Enter", "Entrez"])[0];

  const [loading, setLoading] = useRecoilState(loadingAtom);

  return (
    <mesh
      name={name}
      position={[x, y, z]}
      onClick={() => {
        if (!enabled && active !== name) {
          if(!loading.loading) setLoading(() => ({loading:true}));
          navigate(`/${path}`)
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
      <RoundedBox
        args={[0.8, 0.25, 0.1]}
      >
        <meshStandardMaterial attach="material" color={"#deb887"} />
        <TextUtil
          x={0} y={0} z={0.051} color="black" size={0.15} name={text[language]}
        />
      </RoundedBox>
    </mesh>
  );
}
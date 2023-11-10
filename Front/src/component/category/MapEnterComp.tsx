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
  path: string;
  name: string;
  active: string | null;
  setHovered: (name: string | null) => void;
  enabled: boolean | false;
  language: number | 0;
}> = ({
  x, y, z, path, name, active, setHovered, enabled, language
}) => {
  const navigate = useNavigate();

  const text = useState(["입장", "잠금"])[0];

  const [loading, setLoading] = useRecoilState(loadingAtom);

  return (
    <mesh
      name={name}
      position={[x, y, z]}
      onClick={() => {
        if (!enabled && active !== name) {
          if (((language === 0 || language === 2) && name !== "아트 갤러리") || (language === 1 && name === "아트 갤러리")) {
            if(!loading.loading) setLoading(() => ({loading:true}));
            navigate(`/${path}`)
          }
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
        <meshStandardMaterial attach="material" color={((language === 0 || language === 2) && name !== "아트 갤러리") || (language === 1 && name === "아트 갤러리") ? "#5dc7f8" : "#d67777"} />
        {
          ((language === 0 || language === 2) && name !== "아트 갤러리") || (language === 1 && name === "아트 갤러리") ?
            <TextUtil x={0} y={0} z={0.051} color="black" size={0.15} name={text[0]} /> :
            <TextUtil x={0} y={0} z={0.051} color="black" size={0.15} name={text[1]} />
        }
      </RoundedBox>
    </mesh>
  );
}

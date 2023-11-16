import { RoundedBox } from '@react-three/drei';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { loadingAtom } from '../../atom/LoadingAtom';
import { useCustomAlert } from '../util/ModalUtil';
import { TextUtil } from "./util/TextUtil";
import { userAtom } from '../../atom/UserAtom';

export const MapEnterComp: React.FC<{
  x: number;
  y: number;
  z: number;
  path: string;
  name: string;
  active: string | null;
  setHovered: (name: string | null) => void;
  enabled: boolean;
  language: number;
}> = ({ x, y, z, path, name, active, setHovered, enabled, language }) => {

  const navigate = useNavigate();

  const text = useState(["입장", "잠금"])[0];
  const customAlert = useCustomAlert();
  const user = useRecoilValue(userAtom);

  const [loading, setLoading] = useRecoilState(loadingAtom);

  const isArtGallery = (name: string, language: number) => 
    ((language === 0 || language === 2) && name !== "아트 갤러리") || 
    (language === 1 && name === "아트 갤러리");

  const handleClick = () => {
    if (!enabled && active !== name) {
      if (isArtGallery(name, language)) {
        if (!loading.loading) setLoading(() => ({ loading: true }));
        
        navigate(`/${path}`);
      } 
      else 
        customAlert(`${user.nickname}님`, "해당 테마는 프랑스로 출국하시면 이용하실 수 있습니다.");
    }
  };

  // 포인터 이벤트 핸들러
  const handlePointerEnter = () => {
    if (!enabled && active !== name) setHovered(name);
  };

  const handlePointerLeave = () => {
    if (!enabled && active !== name) setHovered(null);
  };

  return (
    <mesh
      name={name}
      position={[x, y, z]}
      onClick={handleClick}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
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

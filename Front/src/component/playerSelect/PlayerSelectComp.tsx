import React, { useEffect, useRef } from "react";
import { useGLTF, Environment, Text, useAnimations } from "@react-three/drei";
import { PlayerSelectAtom } from "../../atom/PlayerSelectAtom";
import { useRecoilValue } from 'recoil';
import { AnimationAction } from "../theme/ThemeType"
import { SetAction } from '../theme/util/PlayerMoveUtil';

export const PlayerSelect: React.FC = () => {

  /* User Info */
  const selectPlayer = useRecoilValue(PlayerSelectAtom);

  /* Characters */
  const M1 = useGLTF(import.meta.env.VITE_S3_URL + "Player/m_1.glb");
  const F1 = useGLTF(import.meta.env.VITE_S3_URL + "NPC/f_11.glb");
  const M2 = useGLTF(import.meta.env.VITE_S3_URL + "NPC/m_31.glb");
  const F2 = useGLTF(import.meta.env.VITE_S3_URL + "NPC/f_20.glb");
  const M3 = useGLTF(import.meta.env.VITE_S3_URL + "NPC/m_11.glb");
  const F3 = useGLTF(import.meta.env.VITE_S3_URL + "NPC/f_12.glb");
  const M4 = useGLTF(import.meta.env.VITE_S3_URL + "NPC/m_14.glb");
  const F4 = useGLTF(import.meta.env.VITE_S3_URL + "NPC/f_14.glb");
  const M5 = useGLTF(import.meta.env.VITE_S3_URL + "NPC/m_29.glb");
  const F5 = useGLTF(import.meta.env.VITE_S3_URL + "NPC/f_21.glb");
  const M6 = useGLTF(import.meta.env.VITE_S3_URL + "NPC/m_28.glb");
  const F6 = useGLTF(import.meta.env.VITE_S3_URL + "NPC/f_22.glb");
  const userFileList = [M1, F1, M2, F2, M3, F3, M4, F4, M5, F5, M6, F6];

  // character motion
  const player = userFileList[selectPlayer];
  const playerAction = useRef<AnimationAction>();
  const playerActions = useAnimations(player.animations, player.scene).actions;

  useEffect(()=>{ //캐릭터 첫 등장, 이후 동작
    SetAction('Victory', playerAction, playerActions, null);
    setTimeout(()=>{SetAction('Idle', playerAction, playerActions, null);}, 700)
  },[selectPlayer])

  
  
  return (
    <>
      <Environment preset="sunset" />



      {/* 선택된 캐릭터 */}
      <primitive scale={1} position={[0, -1, 0]} object={userFileList[selectPlayer].scene} />
    

      <Text
          position={[0,0.5,-3]}
      >
        Choose your Player
      </Text>

    </>
  );
};
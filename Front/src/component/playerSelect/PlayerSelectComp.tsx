import React, { useEffect, useRef, useState } from "react";
import { useGLTF, Environment, Text, useAnimations } from "@react-three/drei";
import * as THREE from 'three';
import { userAtom } from "../../atom/UserAtom";
import { PlayerSelectAtom } from "../../atom/PlayerSelectAtom";
import { useRecoilState, useRecoilValue } from 'recoil';
import { updateCharacter } from "../../api/User"
import { UpdateSelectedCharacter } from "../../type/UserType";
import { CharacterResponseType } from "../../type/CharacterType";
import { SelectButtonComp } from "./SelectButtonComp";
import { KeyPressed, AnimationAction, NpcInfo, CurrentNpc } from "../theme/ThemeType"
import { SetAction } from '../theme/util/PlayerMoveUtil';

export const PlayerSelect: React.FC = () => {

  /* User Info */

  const [user, setUser] = useRecoilState(userAtom);
  const selectPlayer = useRecoilValue(PlayerSelectAtom);

  /* 대표 캐릭터 수정 */
  const handleCharacterSelect = async (clickedCharacterId: number) => {
      if (user.characterId === clickedCharacterId)  
          return;
      

      if (user.lockList[clickedCharacterId - 1].islocked === true) 
          return;
      
      const payload: UpdateSelectedCharacter = {
          previousId: user.characterId,
          nowId: clickedCharacterId
      };

      await updateCharacter(payload, ({data}) => {
          const result = data.data as CharacterResponseType;

          setUser(prev => ({
              ...prev, 
              characterId: result.characterId,
              characterGender: result.characterGender,
              characterLink: result.characterLink
          }))
      }, 
      (error) => {
          console.log(error);
      });
  };

  /* 소품 */
  const lock = useGLTF(import.meta.env.VITE_S3_URL + "Objects/Lock1/scene.gltf")


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

  const characterPositions: { [key: number]: [number, number, number] } = {
      1: [-4, -0.5, 0],
      2: [-2, -0.5, 0],
      3: [0, -0.5, 0],
      4: [2, -0.5, 0], 
      5: [4, -0.5, 0]
  };

  const textOffsetY = -0.8;
  

  const lockPositions: { [key: number]: [number, number, number] } = {
      1: [-4, 1.5, 0],
      2: [-2, 1.5, 0],
      3: [0, 1.5, 0],
      4: [2, 1.5, 0],
      5: [4, 1.5, 0]
  }

  const buttonPositions: { [key: number]: [number, number, number] } = {
      1: [-2.8, -1.2, 3],
      2: [-1.4, -1.2, 3],
      3: [0, -1.2, 3], 
      4: [1.4, -1.2, 3],
      5: [2.8, -1.2, 3]
  }

  // character motion
  const player = userFileList[selectPlayer];
  const playerAction = useRef<AnimationAction>();
  const playerActions = useAnimations(player.animations, player.scene).actions;

  useEffect(()=>{ //캐릭터 첫 등장, 이후 동작
    SetAction('Victory', playerAction, playerActions, null);
    setTimeout(()=>{SetAction('Idle', playerAction, playerActions, null);},1400)
  },[selectPlayer])

  // 글자 색 
  const getColorForName = (id: number) => user.characterId === id ? "red" : "black";
  
  
  return (
      <>
      <Environment preset="sunset" />


      {/* 조건부 자물쇠 렌더링 */}
      {/* {user.lockList.map((lockInfo, index) => {
          const characterId = index + 1; // 캐릭터 ID는 인덱스에 1을 더한 값입니다.

          // user.lockList에서 islocked가 true인 경우에 해당 캐릭터 위치에 자물쇠를 표시합니다.
          if (lockInfo.islocked) {

              return (
                  <primitive
                      key={`lock-${characterId}`} // 각 자물쇠에 고유한 key를 부여합니다.
                      scale={0.1}
                      position={lockPositions[characterId]} // lockPositions에서 characterId에 해당하는 위치를 가져옵니다.
                      object={lock.scene.clone()} // .clone()을 호출하여 각 자물쇠에 대해 별도의 인스턴스를 만듭니다.
                  />
              );
          }
          return null; // islocked가 false이면 null을 반환하여 렌더링하지 않습니다.
      })} */}

      {/* 선택된 캐릭터 */}
      {
        selectPlayer==-1? null :
        <primitive scale={1} position={[0, -1, 0]} object={userFileList[selectPlayer].scene} onClick={() => handleCharacterSelect(2)} />
      }

      {/* 캐릭터 이름 텍스트 및 선택 버튼 */}
      {Object.entries(characterPositions).map(([key, position]) => {
          const id = Number(key); 
          const buttonPosition = buttonPositions[id];

          return (
              <React.Fragment key={id}>

                  {/* <Text
                      key={`button-${key}`}
                      position={[position[0], position[1] + textOffsetY - 0.5, position[2]]}
                      fontSize={0.3}
                      color={getColorForName(id)}
                      onClick={() => handleCharacterSelect(id)}
                  >
                      Select
                  </Text> */}

                  {/* <SelectButtonComp
                      key={`select-button-${id}`} // 고유한 key 값을 추가합니다.
                      x={buttonPosition[0]}
                      y={buttonPosition[1]}
                      z={buttonPosition[2]}
                  /> */}

              </React.Fragment>
          );
      })}

          <Text
              position={[0,0.5,-3]}
          >
            Choose your Player
          </Text>

      </>
  );
};
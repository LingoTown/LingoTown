import React, { useEffect, useRef } from "react";
import { useGLTF, Environment, Text, useAnimations } from "@react-three/drei";
import { PlayerSelectAtom } from "../../atom/PlayerSelectAtom";
import { useRecoilValue, useRecoilState } from 'recoil';
import { AnimationAction } from "../theme/ThemeType"
import { SetAction } from '../theme/util/PlayerMoveUtil';
import { loadingAtom } from "../../atom/LoadingAtom";
import { characterAtom } from "../../atom/CharacterAtom";
import { CharacterList } from "../../type/CharacterType";

export const PlayerSelect: React.FC = () => {

  /* User Info */
  const selectPlayer = useRecoilValue(PlayerSelectAtom);
  const [loading, setLoading] = useRecoilState(loadingAtom);

  const characterList:CharacterList = useRecoilValue(characterAtom);

  // character motion
  const character = characterList.characterList[selectPlayer.index];
  const playerModelURL = character?.characterLink;
  const player = useGLTF(playerModelURL);
  const playerAction = useRef<AnimationAction>();
  const playerActions = useAnimations(player.animations, player.scene).actions;

  useEffect(()=>{ //캐릭터 첫 등장, 이후 동작
    SetAction('Victory', playerAction, playerActions, null);
    setTimeout(()=>{SetAction('Idle', playerAction, playerActions, null);}, 700);

    if(loading.loading) setLoading({loading:false});

  },[selectPlayer])

  
  
  return (
    <>
      <Environment preset="sunset" />



      {/* 선택된 캐릭터 */}
      <primitive scale={1} position={[0, -1, 0]} object={player.scene} />
    

      <Text
          position={[0,0.5,-3]}
      >
        Choose your Player
      </Text>

    </>
  );
};

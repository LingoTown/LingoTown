import * as THREE from 'three';
import { NpcInfo, CurrentNpc } from '../ThemeType';

type RefType = React.RefObject<THREE.Object3D>;
type SetStateFunction<T> = React.Dispatch<React.SetStateAction<T>>;
type npcRef = React.MutableRefObject<CurrentNpc | undefined>;

export const CircleCheck = (playerRef: RefType, npcInfoList: NpcInfo[], currentNpc:npcRef, circleRadius: number, isInsideCircle: boolean, setIsInsideCircle: SetStateFunction<boolean>) => {
  const checkCircle = (npcRef: NpcInfo) => {
    const playerPosition = new THREE.Vector3();
    const circlePosition = new THREE.Vector3();
    playerRef.current!.getWorldPosition(playerPosition);
    npcRef.ref.current!.getWorldPosition(circlePosition);
    const distance = playerPosition.distanceTo(circlePosition);

    if (distance <= circleRadius) {
      if (!isInsideCircle) {
        setIsInsideCircle(true);
        if (currentNpc.current) {
          currentNpc.current.name = npcRef.name;
          currentNpc.current.id = npcRef.id;
          currentNpc.current.gender = npcRef.gender;
          currentNpc.current.targetPosition = npcRef.targetPosition;
          currentNpc.current.targetRotation = npcRef.targetRotation;
        }
      }
    } else {
      if (isInsideCircle) {
        setIsInsideCircle(false);
      }
    }
  };

  npcInfoList.forEach(npcInfo => {
    if (playerRef.current && npcInfo.ref.current) {
      checkCircle(npcInfo);
    }
  });
};
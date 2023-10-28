import * as THREE from 'three';

type RefType = React.RefObject<THREE.Object3D>;
type SetStateFunction<T> = React.Dispatch<React.SetStateAction<T>>;

export const CircleCheck = (
  playerRef: any,
  circleRefs: { fox: RefType, rabbit: RefType },
  circleRadius: number,
  isInsideCircle: boolean,
  setIsInsideCircle: SetStateFunction<boolean>,
  setNpc: SetStateFunction<string>
) => {
  const checkCircle = (circleRef: RefType, npcName: string) => {
    const playerPosition = new THREE.Vector3();
    const circlePosition = new THREE.Vector3();
    playerRef.current!.getWorldPosition(playerPosition);
    circleRef.current!.getWorldPosition(circlePosition);
    const distance = playerPosition.distanceTo(circlePosition);

    if (distance <= circleRadius) {
      if (!isInsideCircle) {
        setIsInsideCircle(true);
        setNpc(npcName);
      }
    } else {
      if (isInsideCircle) {
        setIsInsideCircle(false);
        setNpc("");
      }
    }
  };

  if (playerRef.current && circleRefs.fox.current) {
    checkCircle(circleRefs.fox, "여우");
  }

  if (playerRef.current && circleRefs.rabbit.current) {
    checkCircle(circleRefs.rabbit, "토끼");
  }
};
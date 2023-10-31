import * as THREE from 'three';

export const PlayerMove = (playerRef: any, keysPressed: any, camera: THREE.Camera, cameraOffset: any, isMove:any) => {
  if (playerRef.current) {
    const speed = 0.2;
    const rotationSpeed = 0.03;
    const moveForward = new THREE.Vector3();

    if (keysPressed.current.ArrowUp) {
      playerRef.current.getWorldDirection(moveForward);
      moveForward.multiplyScalar(speed);
      playerRef.current.position.add(moveForward);
    }

    if (keysPressed.current.ArrowDown) {
      playerRef.current.getWorldDirection(moveForward);
      moveForward.multiplyScalar(-speed * 0.3);
      playerRef.current.position.add(moveForward);
    }

    if (keysPressed.current.ArrowLeft || keysPressed.current.ArrowRight) {
      let deltaRotation = 1;
      if (keysPressed.current.ArrowDown) {
        deltaRotation = keysPressed.current.ArrowLeft ? -rotationSpeed : rotationSpeed;
      } else {
        deltaRotation = keysPressed.current.ArrowLeft ? rotationSpeed : -rotationSpeed;
      }
      playerRef.current.rotateY(deltaRotation);
    }

    const currentPos = playerRef.current.position.clone();
    const offset = cameraOffset.current.clone().applyQuaternion(playerRef.current.quaternion);
    const desiredCameraPosition = currentPos.add(offset);

    if (isMove.current) {
      camera.position.lerp(desiredCameraPosition, 1);
      camera.lookAt(playerRef.current.position);
    }
  }
};


export const SetAction = (actionName: string, activeAction: any, actions: any): void => {
  if (activeAction.current && activeAction.current === actions[actionName]) {
    return;
  }
  if (activeAction.current) {
    activeAction.current.fadeOut(0.1);
  }
  const action = actions[actionName];
  if (action) {
    action.reset().fadeIn(0.1).play();
    activeAction.current = action;
  }
};

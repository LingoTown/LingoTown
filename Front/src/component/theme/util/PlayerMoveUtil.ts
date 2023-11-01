import * as THREE from 'three';


export const PlayerMove = (playerRef: any, playerApi: any, keysPressed: any, camera: THREE.Camera, cameraOffset: any, container: any, playerPosition: any, setPlayerPosition: any, playerRotation: any, setPlayerRotation: any, isMove:any) => {
  
  if (playerRef.current) {
    const speed = 0.1;
    const rotationSpeed = 0.03;
    const moveForward = new THREE.Vector3();
    let newPosition = playerRef.current.position;

    //전진
    if (keysPressed.current.ArrowUp) {
      playerRef.current.getWorldDirection(moveForward);
      moveForward.multiplyScalar(speed);
      newPosition = playerRef.current.position.clone().add(moveForward);
    } 

    // 뒤로이동
    if (keysPressed.current.ArrowDown) {
      playerRef.current.getWorldDirection(moveForward);
      moveForward.multiplyScalar(-speed * 0.3);
      newPosition = playerRef.current.position.clone().add(moveForward);
    }

    // 벽에 부딪히는지 확인하기 위해 container의 모든 벽을 순회합니다.
    let collidesWithWall = false;
    let collidesWallKey = null;
    for (const wall of container) {
      if (wall.name === "wall") {
        const wallBox = new THREE.Box3().setFromCenterAndSize(
          new THREE.Vector3(...wall.position),
          new THREE.Vector3(...wall.size)
        );
        
        const playerBox = new THREE.Box3().setFromObject(playerRef.current);
        playerBox.expandByVector(moveForward); // 캐릭터의 이동을 고려한 바운딩 박스 계산

        if (wallBox.intersectsBox(playerBox)) {
          collidesWithWall = true;
          collidesWallKey = wall.key;
          break;
        }
      }
    }

    // 충돌이 발생하지 않았다면, 캐릭터의 위치를 업데이트합니다.
    if (!collidesWithWall) {
      playerApi.position.set(newPosition.x, newPosition.y, newPosition.z);
      playerRef.current.position.add(moveForward);
      setPlayerPosition((prevPos: any) => [
        prevPos[0] + moveForward.x,
        0,
        prevPos[2] + moveForward.z
      ]);
    }else {
      // 벽에 부딪혔을 때의 처리
      const oppositePosition = playerRef.current.position.clone();
      if(collidesWallKey == "C02"){// back wall
        oppositePosition.z += 0.5;
      }else if(collidesWallKey == "C03"){// right wall
        oppositePosition.x -= 0.5;
      }else if(collidesWallKey == "C04"){// front wall
        oppositePosition.z -= 0.5;
      }else if(collidesWallKey == "C05"){// left wall
        oppositePosition.x += 0.5;
      }

      // oppositePosition.z += 1; // 이동하고 싶은 거리 조절
      playerApi.position.set(playerPosition[0], playerPosition[1], playerPosition[2]);
      playerRef.current.position.copy(oppositePosition);
      setPlayerPosition(() => [oppositePosition.x, 0, oppositePosition.z]);
    }

    //회전
    if (keysPressed.current.ArrowLeft || keysPressed.current.ArrowRight) {
      let deltaRotation = 1;
      if (keysPressed.current.ArrowDown) {
        deltaRotation = keysPressed.current.ArrowLeft ? -rotationSpeed : rotationSpeed;
      } else {
        deltaRotation = keysPressed.current.ArrowLeft ? rotationSpeed : -rotationSpeed;
      }
      playerRef.current.rotateY(deltaRotation);
      // playerRef.current.rotation();
      // 실시간으로 물리 몸의 회전 업데이트
      setPlayerRotation([playerRotation[0], playerRotation[1]+deltaRotation, playerRotation[2]]);
      playerApi.rotation.set(playerRotation[0], playerRotation[1] + deltaRotation, playerRotation[2]);
    }

    const currentPos = playerRef.current.position.clone();
    const offset = cameraOffset.current.clone().applyQuaternion(playerRef.current.quaternion);
    const desiredCameraPosition = currentPos.add(offset);

    /* 캐릭터 뒤통수 보는 카메라 */
    if (isMove.current) {
      camera.position.lerp(desiredCameraPosition, 1);
      camera.lookAt(playerRef.current.position);
    }
    camera.position.lerp(desiredCameraPosition, 1);
    camera.lookAt(playerRef.current.position.x, playerRef.current.position.y, playerRef.current.position.z);
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

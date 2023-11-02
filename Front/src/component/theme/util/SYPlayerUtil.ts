import * as THREE from 'three';

export const PlayerMove = (keysPressed: any, camera: THREE.Camera, cameraOffset: any, isMove:any, 
                            deltaTime: number, playerRef: any, activeAction: any, actions: any) => {
    
    if (playerRef.current) {
  
      // 처음 속도가 설정되지 않았다면 정의한다.
      if (playerRef.current.velocity === undefined) 
          playerRef.current.velocity = { y: 0 };
      
      // 처음 점프 플래그가 설정되지 않았다면 정의한다.
      if (playerRef.current.isJumping === undefined) 
          playerRef.current.isJumping = false;
  
      const speed = 0.2;
      const rotationSpeed = 0.03;
      const moveForward = new THREE.Vector3();
  
      // 앞으로 및 뒤로 이동하는 로직
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
  
      // 회전 로직
      if (keysPressed.current.ArrowLeft || keysPressed.current.ArrowRight) {
        let deltaRotation = keysPressed.current.ArrowLeft ? rotationSpeed : -rotationSpeed;
        playerRef.current.rotateY(deltaRotation);
      }
  
      // 플레이어가 공중에 있는 경우 중력을 적용한다.
      if (playerRef.current.isJumping || playerRef.current.position.y > 0) {
        
        // 점프 중력 효과
        playerRef.current.velocity.y -= 15.81 * deltaTime;

        // 위치 업데이트
        playerRef.current.position.y += playerRef.current.velocity.y * deltaTime;

        // 플레이어가 착지했는지 확인한다.
        if (playerRef.current.position.y <= 0) {
                
            // 땅에 위치를 리셋한다.
            playerRef.current.position.y = 0; 

            // 점프 플래그를 리셋한다.
            playerRef.current.isJumping = false;
            
            // 속도를 리셋한다.
            playerRef.current.velocity.y = 0; 
            

            // 만약 앞이나 옆으로 이동 중이라면 Run 애니메이션으로 전환
            if (keysPressed.current.ArrowUp || keysPressed.current.ArrowLeft || keysPressed.current.ArrowRight ) {
                SetAction('Run', activeAction, actions, playerRef);
            }

            // 만약 뒤로 이동중이라면 Walk 애니메이션으로 전환
            else if(keysPressed.current.ArrowDown) {
                SetAction('Walk', activeAction, actions, playerRef)  
            } 
            
            // 아무 움직임이 없다면 Idle 애니메이션으로 전환한다.
            else {
                SetAction('Idle', activeAction, actions, playerRef);
            }
        }
    }
  
    /* 카메라 따라가기 로직 */
    
    const currentPos = playerRef.current.position.clone();
    const offset = cameraOffset.current.clone().applyQuaternion(playerRef.current.quaternion);
    const desiredCameraPosition = currentPos.add(offset);

    if (isMove.current) {
        camera.position.lerp(desiredCameraPosition, 1);
        camera.lookAt(playerRef.current.position);
    }
}
  };
  


export const SetAction = (actionName: string, activeAction: any, actions: any, playerRef: any, timeScale = 1): void => {
    if (activeAction.current && activeAction.current === actions[actionName]) 
        return;
    
    if (activeAction.current) 
        activeAction.current.fadeOut(0.1);
    
    const action = actions[actionName];

    if (action) {

        // timeScale 만큼 배속
        action.reset().setEffectiveTimeScale(timeScale).fadeIn(0.1).play();
        
        activeAction.current = action;
    }
  
    /* Jump Action Setting */
    if(actionName === 'Victory' && playerRef && playerRef.current) {

        // 초기 velocity 값이 설정되었는지 확인하고 설정한다.
        if (playerRef.current.velocity === undefined) 
            playerRef.current.velocity = { y: 0 };

        // 초기 isJumping 값이 설정되었는지 확인
        if (playerRef.current.isJumping === undefined) 
            playerRef.current.isJumping = false;
    
        // 점프 상태를 설정하지만 애니메이션은 PlayerMove에서 처리
        if (!playerRef.current.isJumping) {
            playerRef.current.isJumping = true;
            playerRef.current.velocity.y = 7;
        }
    }
  }; 
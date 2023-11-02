import * as THREE from 'three';

export const PlayerMove = (keysPressed: any, camera: THREE.Camera, cameraOffset: any, isMove:any, 
                            // Jump Logic에 필요
                            deltaTime: number, playerRef: any, activeAction: any, actions: any,
                            // 물리(벽)에 필요
                            container: any ) => {
    
    if (playerRef.current) {
  
        const speed = 0.2;
        const rotationSpeed = 0.03;
        const moveForward = new THREE.Vector3();

        let newPosition = playerRef.current.position;

        // 처음 속도가 설정되지 않았다면 정의한다.
        if (playerRef.current.velocity === undefined) 
            playerRef.current.velocity = { y: 0 };
        
        // 처음 점프 플래그가 설정되지 않았다면 정의한다.
        if (playerRef.current.isJumping === undefined) 
            playerRef.current.isJumping = false;
    
        // 앞으로 및 뒤로 이동하는 로직
        if (keysPressed.current.ArrowUp) {
            playerRef.current.getWorldDirection(moveForward);
            moveForward.multiplyScalar(speed);
            // playerRef.current.position.add(moveForward);
            newPosition = playerRef.current.position.clone().add(moveForward);
        }
    
        if (keysPressed.current.ArrowDown) {
            playerRef.current.getWorldDirection(moveForward);
            moveForward.multiplyScalar(-speed * 0.3);
            // playerRef.current.position.add(moveForward);
            newPosition = playerRef.current.position.clone().add(moveForward);
        }
    
        // 회전 로직
        if (keysPressed.current.ArrowLeft || keysPressed.current.ArrowRight) {
            // let deltaRotation = keysPressed.current.ArrowLeft ? rotationSpeed : -rotationSpeed;

            let deltaRotation = 1;

            // 뒤를 가는 도중에 방향을 회전하면, 기존의 방향과 반대 방향으로 회전해야 자연스럽다.
            if (keysPressed.current.ArrowDown)
                deltaRotation = keysPressed.current.ArrowLeft ? -rotationSpeed : rotationSpeed;
            else 
                deltaRotation = keysPressed.current.ArrowLeft ? rotationSpeed : -rotationSpeed;
            
            // 실시간으로 물리 몸의 회전 업데이트 : 캐릭터의 회전 상태를 다른 시스템이나 상태 관리 시스템에도 동기화시키기 위한 것
            // setPlayerRotation([playerRotation[0], playerRotation[1]+deltaRotation, playerRotation[2]]);
            // playerApi.rotation.set(playerRotation[0], playerRotation[1] + deltaRotation, playerRotation[2]);

            playerRef.current.rotateY(deltaRotation);
        }

        /* 점프 */

        // 플레이어가 공중에 있는 경우 중력을 적용한다.
        if (playerRef.current.isJumping || playerRef.current.position.y > 0) {
        
            // 점프 중력 효과
            playerRef.current.velocity.y -= 9.81 * deltaTime;

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
        
        // 벽에 부딪히는지 확인하기 위해 container의 모든 벽을 순회합니다.
        let collidesWithWall = false;
        let collidesWallKey = null;

        for (const wall of container) {    
            if (wall.name === "wall") {
                
                // 벽 박스
                const wallBox = new THREE.Box3().setFromCenterAndSize(
                    new THREE.Vector3(...wall.position),
                    new THREE.Vector3(...wall.size)
                );
                
                // 캐릭터 박스
                const playerBox = new THREE.Box3().setFromObject(playerRef.current);
                // 캐릭터의 이동을 고려한 바운딩 박스 계산
                playerBox.expandByVector(moveForward); 

                // 충돌 감지
                if (wallBox.intersectsBox(playerBox)) {
                    collidesWithWall = true;
                    collidesWallKey = wall.wallKey;

                    break;
                }
            }
        }

        // 충돌이 발생하지 않았다면, 캐릭터의 위치를 업데이트합니다.
        if (!collidesWithWall) {

            // playerApi.position.set(newPosition.x, newPosition.y, newPosition.z);
            playerRef.current.position.add(moveForward);
            
            // 이거 점프때 이렇게 해도 되는건가 .. 흠..
            // setPlayerPosition((prevPos: any) => [
            //     prevPos[0] + moveForward.x,
            //     0,
            //     prevPos[2] + moveForward.z
            // ]);

        }
        
        else {

            // 벽에 부딪혔을 때의 처리
            const oppositePosition = playerRef.current.position.clone();
            
            // 알파벳 문자에 해당하는 부분을 찾음
            const match = collidesWallKey.match(/^[A-Za-z]+/);

            // 컨테이너 Id 분리
            let direction = "";
            let type = "";

            if(match) {
                direction = match[0].slice(0, 1);
                type = match[0].slice(1, 2);
            }
            else
                console.log("해당 컨테이너 Id를 분리할 수 없습니다.");


            // 벽일때
            if(type == "W") {

                // Back Wall
                if(direction == "B")
                    oppositePosition.z += 0.5;
                // Right Wall
                else if(direction == "R")
                    oppositePosition.x -= 0.5;
                // Front Wall
                else if(direction == "F")
                    oppositePosition.z -= 0.5;  
                // Left Wall
                else if(direction == "L")
                    oppositePosition.x += 0.5;
            }

            // playerApi.position.set(oppositePosition.x, oppositePosition.y, oppositePosition.z);
            playerRef.current.position.copy(oppositePosition);
            // setPlayerPosition(() => [oppositePosition.x, oppositePosition.y, oppositePosition.z]);
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
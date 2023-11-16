import * as THREE from 'three';
import { wallType } from '../../../type/WallType';

export const PlayerMove = (keysPressed: any, camera: THREE.Camera, cameraOffset: any, isMove:any, 
                            // Jump Logic에 필요
                            deltaTime: number, playerRef: any, activeAction: any, actions: any,
                            // 물리(벽)에 필요
                            container: any ) => {
    
    if (playerRef.current) {
  
        const speed = 0.2;
        const rotationSpeed = 0.03;
        const moveForward = new THREE.Vector3();

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
            playerRef.current.position.clone().add(moveForward);
        }
    
        if (keysPressed.current.ArrowDown) {
            playerRef.current.getWorldDirection(moveForward);
            moveForward.multiplyScalar(-speed * 0.3);
            playerRef.current.position.clone().add(moveForward);
        }
    
        // 회전 로직
        if (keysPressed.current.ArrowLeft || keysPressed.current.ArrowRight) {

            let deltaRotation = 1;

            // 뒤를 가는 도중에 방향을 회전하면, 기존의 방향과 반대 방향으로 회전해야 자연스럽다.
            if (keysPressed.current.ArrowDown)
                deltaRotation = keysPressed.current.ArrowLeft ? -rotationSpeed : rotationSpeed;
            else 
                deltaRotation = keysPressed.current.ArrowLeft ? rotationSpeed : -rotationSpeed;

            playerRef.current.rotateY(deltaRotation);
        }

        /* 점프 */

        // 플레이어가 공중에 있는 경우 중력을 적용한다.
        if (playerRef.current.isJumping || playerRef.current.position.y > 0) {
        
            // 점프 중력 효과
            playerRef.current.velocity.y -= 15.81 * deltaTime;

            // 위치 업데이트
            playerRef.current.position.y += playerRef.current.velocity.y * deltaTime;

            // 플레이어가 착지했는지 확인한다.
            if (playerRef.current.position.y <= 0) {
                    
                playerRef.current.position.y = getCurrentFloorHeight(playerRef.current.position, container)

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

            else {
                const floorHighestY = wall.position[1] + (wall.size[1] / 2);

                // floor의 AABB 설정
                const floorBox = new THREE.Box3(
                    new THREE.Vector3(
                        wall.position[0] - wall.size[0] / 2, // minX
                        wall.position[1] - wall.size[1] / 2, // minY
                        wall.position[2] - wall.size[2] / 2  // minZ
                    ),
                    new THREE.Vector3(
                        wall.position[0] + wall.size[0] / 2, // maxX
                        wall.position[1] + wall.size[1] / 2, // maxY
                        wall.position[2] + wall.size[2] / 2  // maxZ
                    )
                );

                // playerBox를 현재 플레이어 위치로 업데이트
                const playerBox = new THREE.Box3().setFromObject(playerRef.current);

                // playerBox의 bottom edge
                const playerBottomY = playerRef.current.position.y - playerRef.current.scale.y * 0.5;

                // 바닥의 충돌 박스와 플레이어 박스가 교차하면서, 바닥의 가장 높은 Y 좌표보다 플레이어의 bottom edge가 낮은 경우
                if (floorBox.intersectsBox(playerBox) && playerBottomY < floorHighestY) {
                    // 점프 중이 아니고, 바닥에 닿았으면
                    if (!playerRef.current.isJumping || playerRef.current.velocity.y <= 0) {
                        // 플레이어의 Y 위치를 바닥의 가장 높은 Y 좌표로 설정
                        playerRef.current.position.y = floorHighestY;
                        // Y 방향 속도를 0으로 설정
                        playerRef.current.velocity.y = 0;
                        // 점프 상태 해제
                        playerRef.current.isJumping = false;
                    }
                }
            }
        }

        // 충돌이 발생하지 않았다면, 캐릭터의 위치를 업데이트합니다.
        if (!collidesWithWall) 
            playerRef.current.position.add(moveForward);
        
        else {
            const newPosition = handleCollision(playerRef, collidesWallKey, 0.5, container)
        
            playerRef.current.position.copy(newPosition);
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


export const getCurrentFloorHeight = (playerPosition: THREE.Vector3, container: any): number => {

    let highestFloorY = 0;

    for(const floor of container) {
        if(floor.name == "floor") {

            const floorTopY = floor.position[1] + (floor.size[1] / 2);

            if(playerPosition.y <= floorTopY && floorTopY > highestFloorY)
                highestFloorY = floorTopY;
        }
    }

    return highestFloorY;
}

export const handleCollision = (playerRef: any, collidesWallKey: string, bounceBackAmount: number, container: wallType[]): THREE.Vector3 => {
    // 현재 플레이어 위치를 복제한다.
    const oppositePosition = playerRef.current.position.clone();

    // 컨테이너 내에서 충돌한 벽의 회전 정보를 가져온다.
    const wall = container.find(w => w.wallKey === collidesWallKey);
    
    // wall.rotation이 존재하면 Euler로 변환, 그렇지 않다면 기본 Euler 생성
    const wallRotation = wall?.rotation
    ? new THREE.Euler().setFromQuaternion(new THREE.Quaternion().setFromEuler(new THREE.Euler(wall.rotation.x, wall.rotation.y, wall.rotation.z)))
    : new THREE.Euler();

    // 벽의 종류와 방향을 결정한다.
    let direction = "";
    let type = "";

    if (collidesWallKey) {
        direction = collidesWallKey.slice(0, 1);
        type = collidesWallKey.slice(1, 2);
    } else {
        console.error("해당 컨테이너 Id를 분리할 수 없습니다.");
        return oppositePosition;
    }

    // 벽의 종류에 따라 반대 방향으로 위치를 조정한다.
    // 플레이어 회전을 적용하기 전에 벽의 회전을 먼저 적용한다.
    if (type === "W") {
        switch (direction) {
            case "F":
                oppositePosition.add(new THREE.Vector3(0, 0, bounceBackAmount).applyEuler(wallRotation));
                break;
            case "R":
                oppositePosition.add(new THREE.Vector3(bounceBackAmount, 0, 0).applyEuler(wallRotation));
                break;
            case "B":
                oppositePosition.add(new THREE.Vector3(0, 0, -bounceBackAmount).applyEuler(wallRotation));
                break;
            case "L":
                oppositePosition.add(new THREE.Vector3(-bounceBackAmount, 0, 0).applyEuler(wallRotation));
                break;
        }
    }

    return oppositePosition;
}
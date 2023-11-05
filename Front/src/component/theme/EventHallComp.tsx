import { EventHall } from "../../../public/map/EventHall";
import * as THREE from 'three';
// import { useControls } from 'leva';
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, useAnimations, Circle } from "@react-three/drei";
import { talkBalloonAtom } from "../../atom/TalkBalloonAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { startTalk } from "../../api/Talk";
import { startTalkType } from "../../type/TalkType";
import { KeyPressed, AnimationAction, NpcInfo, CurrentNpc, NPCData } from "./ThemeType";
import { STTAndRecord } from '../talk/SttAndRecordComp';
import { HandleKeyDown, HandleKeyUp } from "./util/SYKeyboardUtil";
import { PlayerMove, SetAction } from "./util/SYPlayerUtil";
import { CircleCheck } from "./util/CircleCheckUtil";
import { useCustomConfirm } from "../util/ModalUtil";
import { talkStateAtom } from '../../atom/TalkStateAtom';
import { Wall } from '../util/block/Wall';
import { DaenName } from '../../../public/name/eventhall/Daen.tsx'
import { JadenName } from '../../../public/name/eventhall/Jaden.tsx'
import { KevinName } from '../../../public/name/eventhall/Kevin.tsx'

/* 
    EventHall의 특징 : 
    기본 높이: 0, 무대 높이: 0.9
    Jayden : 관계자
    Kevin : 사회자
    추후 발표자 추가 예정 및 화면에 UCC 표시 예정
*/

export const EventHallComp: React.FC = () => {

    /* NPC Data */    
    const JaydenData: NPCData = {
        id: 1,
        name: "Jayden",
        path: "https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_3.glb",
        position: [-10.0, 0.0, 21.5],
        rotation: [0, 180, 0],
        scale: 1,
        cameraPosition: [-10.0, 1.0, 20.0],
        cameraRotation: [0.00, THREE.MathUtils.degToRad(179.00), 0.00],
        circleArgs: [3, 32],
        circlePosition: [-10.0, 0.05, 21.5],
        circleRotation: [90, 0, 0],
        circleAttach: "material",
        circleColor: "pink",
        circleEmissive: "#ff69b4",
        circleEmissiveIntensity: 5,
        circleSide: THREE.DoubleSide,
        circleTransparent: true,
        circleOpacity: 0.2
    };

    const KevinData: NPCData = {
        id: 3,
        name: "Kevin",
        path: "https://b305finalproject.s3.ap-northeast-2.amazonaws.com/NPC/m_8.glb",
        position: [17.00, 1, -2.5],
        rotation: [0, 0, 0],
        scale: 1,
        cameraPosition: [17.00, 1.90, -1.40],
        cameraRotation: [THREE.MathUtils.degToRad(0.2), 0, 0],
        circleArgs: [3, 32],
        circlePosition: [17.0, 1.05, -2.5],
        circleRotation: [90, 0, 0],
        circleAttach: "material",
        circleColor: "red",
        circleEmissive: "red",
        circleEmissiveIntensity: 5,
        circleSide: THREE.DoubleSide,
        circleTransparent: true,
        circleOpacity: 1
    }

    /* NPC */

    const Jayden = useNPC(JaydenData);
    const Kevin = useNPC(KevinData);

    function useNPC({id, name, path, position, rotation, scale, cameraPosition, cameraRotation, 
                    circleArgs, circlePosition, circleRotation, 
                    circleAttach, circleColor, circleEmissive, circleEmissiveIntensity, 
                    circleSide, circleTransparent, circleOpacity}: NPCData) {

        const npcId = id;
        const npcName = name;
        const npcModel = useGLTF(path);
        // const npcPosition = new THREE.Vector3(...position);
        const npcPosition = position;
        const npcRotation = rotation.map(deg => THREE.MathUtils.degToRad(deg));
        const npcScale = scale;
        const npcCameraPosition = cameraPosition;
        const npcCameraRotation = cameraRotation;
        const npcCircleRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
        const npcCircleArgs = circleArgs;
        const npcCirclePosition = circlePosition;
        const npcCircleRotation = new THREE.Euler(...circleRotation.map(deg => THREE.MathUtils.degToRad(deg)));
        const npcCircleAttach = circleAttach;
        const npcCircleColor = circleColor;
        const npcCircleEmissive = circleEmissive;
        const npcCircleEmissiveIntensity = circleEmissiveIntensity;
        const npcCircleSide = circleSide;
        const npcCircleTransparent = circleTransparent;
        const npcCircleOpacity = circleOpacity;
    
        return { npcId, npcName, npcModel, npcPosition, npcRotation, npcScale, npcCameraPosition, npcCameraRotation,
                npcCircleRef, npcCircleArgs, npcCirclePosition, npcCircleRotation,
                npcCircleAttach, npcCircleColor, npcCircleEmissive, npcCircleEmissiveIntensity,
                npcCircleSide, npcCircleTransparent, npcCircleOpacity };
    }


    /* Wall */

    // wall : 튕김
    // floor : 안튕김
    const container = [

        /* Container Convention : 
            첫번째 자리 : Bottom : B, Back : B, Right : R, Front : F, Left : L
            두번째 자리 : Floor : F, Wall : W         (F : 안튕겨짐, W : 튕겨짐)
            세번째 자리 : 숫자 (1 2 3 ...)position
        */

        /* 바닥 */

        // 전체 바닥
        { size: [200, 2, 200], position: [0, -1, 30], wallKey: 'BF1', name: 'floor', mass:0},
        // 무대 바닥 메인
        { size: [42, 2, 6], position: [0, 0, -1.5], wallKey: 'BF2', name: 'floor', mass:0},
        // 무대 바닥 뒷부분
        { size: [24, 2, 6], position: [0, 0, -7.5], wallKey: 'BF3', name: 'floor', mass:0},
        // 무대 바닥 좌측 대각
        { size: [13, 2, 8], position: [-14, 0, -5.5], rotation: [0, THREE.MathUtils.degToRad(20), 0], wallKey: 'BF4', name: 'floor', mass:0},
        // 무대 바닥 우측 대각
        { size: [13, 2, 8], position: [14, 0, -5.5], rotation: [0, THREE.MathUtils.degToRad(20), 0], wallKey: 'BF5', name: 'floor', mass:0},

        // 무대 계단 2층
        { size: [22, 0.66, 1], position: [0, 0.33, 2], wallKey: 'BF6', name: 'floor', mass:0},
        // 무대 계단 1층
        { size: [22, 0.33, 1], position: [0, 0.165, 3], wallKey: 'BF7', name: 'floor', mass:0},
        // 무대 바닥 왼쪽 계단 레이어
        { size: [10, 2, 3], position: [-16, 0, 3], wallKey: 'BF8', name: 'floor', mass:0},
        // 무대 바닥 오른쪽 계단 레이어
        { size: [10, 2, 3], position: [16, 0, 3], wallKey: 'BF9', name: 'floor', mass:0},

        /* 벽 */

        // 무대 뒤 앞벽 메인
        { size: [26, 10, 0.3], position: [0, 1, -10.65], wallKey: 'FW1', name: 'wall', mass:0}, 
        // 무대 뒤 뒷벽 메인
        { size: [26, 10, 0.3], position: [0, 1, -10.95], wallKey: 'BW1', name: 'wall', mass:0}, 
        // 무대 뒤 앞벽 대각선 왼쪽
        { size: [17.5, 10, 0.8], position: [-15, 1, -9.4], rotation: [0, THREE.MathUtils.degToRad(32), 0], wallKey: 'FW2', name: 'wall', mass:0}, 
        // 무대 뒤 뒷벽 대각선 왼쪽
        { size: [17.5, 10, 0.8], position: [-15, 1, -9.9], rotation: [0, THREE.MathUtils.degToRad(32), 0], wallKey: 'BW2', name: 'wall', mass:0}, 
        // 무대 뒤 옆벽 대각선 왼쪽
        { size: [1, 10, 1.6], position: [-22.25, 1, -4.9], rotation: [0, THREE.MathUtils.degToRad(32), 0], wallKey: 'LW1', name: 'wall', mass:0}, 
        // 무대 뒤 앞벽 대각선 오른쪽
        { size: [17.5, 10, 0.8], position: [15, 1, -9.4], rotation: [0, THREE.MathUtils.degToRad(-32), 0], wallKey: 'FW3', name: 'wall', mass:0}, 
        // 무대 뒤 뒷벽 대각선 오른쪽
        { size: [17.5, 10, 0.8], position: [15, 1, -9.9], rotation: [0, THREE.MathUtils.degToRad(-32), 0], wallKey: 'BW3', name: 'wall', mass:0}, 
        // 무대 뒤 옆벽 대각선 오른쪽
        { size: [1, 10, 1.6], position: [22.25, 1, -4.9], rotation: [0, THREE.MathUtils.degToRad(-32), 0], wallKey: 'LW2', name: 'wall', mass:0}, 
        
        // 전체 맵 뒷벽
        { size: [75, 20, 1], position: [0, 0, -20], wallKey: 'FW4', name: 'wall', mass:0}, 
        // 전체 맵 왼벽
        { size: [1, 20, 65], position: [-37.5, 0, 8.25], wallKey: 'RW1', name: 'wall', mass:0}, 
        // 전체 맵 오른벽
        { size: [1, 20, 65], position: [37.5, 0, 8.25], wallKey: 'LW3', name: 'wall', mass:0}, 
        // 전체 맵 앞벽
        { size: [75, 20, 1], position: [0, 0, 36.5], wallKey: 'BW4', name: 'wall', mass:0},
    ];
    
    /* Value */
    const playerPosition = [0.25, 0, 28];
    const playerRotation = [0, 3.15, 0];

    // 캐릭터 불러오기
    const playerFile = useGLTF("https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Player/m_1.glb");
    // 캐릭터 크기
    const playerScale = 1;
    
    // 카메라 각도 정보
    const mapCameraAngle = [0, 2.5, -5]
    // 원 반지름
    const CIRCLE_RADIUS = 3;
    // 언어
    const LANGUAGE = "en-US"
    // 문장
    const SENTENCE = "Would you like to start a conversation with "

    /* useRef */
    const playerRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | null>(null);
    // 움직이는지 : 컴포넌트의 렌더링 사이에서도 값이 유지된다. 초기 값 : true => 움직임이 가능한 상태
    const isMove = useRef(true);

    /* Camera Action */

    // 카메라 오프셋 저장 (카메라 각도)
    const cameraOffset = useRef<THREE.Vector3>(new THREE.Vector3(mapCameraAngle[0], mapCameraAngle[1], mapCameraAngle[2]));
    // 키보드의 화살표 키 상태 mapCameraAngle
    const keysPressed = useRef<KeyPressed>({ ArrowUp: false, ArrowLeft: false, ArrowRight: false, ArrowDown: false });
    // 현재 활성화된 애니메이션 액션을 저장
    const activeAction = useRef<AnimationAction>();
    // 주어진 애니메이션과 씬을 이용하여 애니메이션 액션들을 반환
    const { actions } = useAnimations(playerFile.animations, playerFile.scene);
    // 반환된 객체에서 camera를 구조 분해 할당하여 사용
    const { camera } = useThree();
    // 카메라 이동 시 속도, 부드러움
    const lerpFactor = 0.04;

    // 현재 상호작용하는 NPC
    const currentNpc = useRef<CurrentNpc>({ id: 0, img: null, name: null, targetPosition:null, targetRotation:null });

    // 이 맵의 NPC 리스트
    const npcInfoList: NpcInfo[] = [
        { id: Jayden.npcId, name: Jayden.npcName, targetPosition: Jayden.npcCameraPosition, targetRotation: Jayden.npcCameraRotation, ref: Jayden.npcCircleRef },
        { id: Kevin.npcId, name: Kevin.npcName, targetPosition: Kevin.npcCameraPosition, targetRotation: Kevin.npcCameraRotation, ref: Kevin.npcCircleRef },
    ]; 
    
    /* useState */
    const setTalkState = useSetRecoilState(talkStateAtom);
    // 대화창
    const [talkBalloon, setTalkBalloon] = useRecoilState(talkBalloonAtom);
    // 원 내부에 있는지
    const [isInsideCircle, setIsInsideCircle] = useState<boolean>(false);

    /* Function */

    const customConfirm = useCustomConfirm();
    // 키가 눌러졌을 때
    const handleKeyDown = HandleKeyDown(SetAction, keysPressed, activeAction, actions, isMove, playerRef);
    // 키가 떼졌을 때
    const handleKeyUp = HandleKeyUp(SetAction, keysPressed, activeAction, actions, isMove, playerRef);

    useEffect(() => {
        // animate 함수를 시작하는 부분
        const requestId = requestAnimationFrame(animate);
      
        return () => {
          cancelAnimationFrame(requestId); // 컴포넌트 언마운트시 애니메이션 프레임을 취소
        };
    }, []);

    const animate = () => {
        requestAnimationFrame(animate);
      
        if (currentNpc.current.targetPosition && currentNpc.current.targetRotation) {
            // Lerp(선형 보간)을 사용하여 부드럽게 위치를 변경
            camera.position.lerp(new THREE.Vector3(...currentNpc.current.targetPosition), lerpFactor);
            
            // Quaternion을 사용하여 부드럽게 회전을 변경
            const targetEuler = new THREE.Euler(...currentNpc.current.targetRotation);
            const targetQuaternion = new THREE.Quaternion().setFromEuler(targetEuler);
            camera.quaternion.slerp(targetQuaternion, lerpFactor);
        }
    }

    // 대화 시작
    const doStartTalk = async(npcId: number) => {
        await startTalk(npcId, ({data}) => {
            const result = data.data as startTalkType;
            setTalkState(prevState => ({ ...prevState, talkId: result.talkId }));      
            setTalkBalloon(prev => ({ ...prev, topicList: result.topicList }));
        }, (error) => {
            console.log(error);
        }); 
    }

    /* useEffect */

    // 아무것도 안하고 있는 상태
    useEffect(() => {
        // 기본 상태
        SetAction('Idle', activeAction, actions, playerRef);

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    // NPC와 대화
    useEffect(() => {
        const handleKeyDown = async(event: KeyboardEvent) => {
            
            // NPC의 원형 대화 범위 내에서 스페이스 바를 눌렀을 때
            if (event.code === 'Space' && isInsideCircle) {
                
                // Player 움직임 불가능
                isMove.current = false;

                // 현재 대화하는 NPC
                const npc = currentNpc.current?.name;
                
                if (npc != null) {
                    const flag = await customConfirm(npc + "", SENTENCE + npc + "?");
                
                    if (flag) {
                        // 카메라 애니메이션
                        animate();

                        // 대화창 Open
                        setTalkBalloon(prev => ({ ...prev, isShow: true, profileImg: currentNpc.current.img }));

                        // 대화 시작
                        await doStartTalk(currentNpc.current.id);
                        
                        return
                    }
                }

                // Player 움직임 가능
                isMove.current = true;
            }
        };

        // 대화 이벤트 등록
        window.addEventListener('keydown', handleKeyDown);
        
        // 대화 종료 시 이벤트리스너 제거
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };

    // NPC 원형에 들어가 있을 때 
    }, [isInsideCircle]);


    // 대화창이 활성화되면 움직임을 비활성화
    // 대화창이 비활성화되면 움직임을 활성화
    useEffect(() => {
        isMove.current = !talkBalloon.isShow;
    }, [talkBalloon.isShow])

    // ??
    useEffect(() => {
        isMove.current = talkBalloon.isMove;
    }, [talkBalloon.isMove])

    useFrame((_state, deltaTime) => {

        // 플레이어 움직임
        PlayerMove(keysPressed, camera, cameraOffset, isMove, deltaTime, playerRef, activeAction, actions, 
                container);
        // 원 안인지 체크
        CircleCheck(playerRef, npcInfoList, currentNpc, CIRCLE_RADIUS, isInsideCircle, setIsInsideCircle);
    });

    return(
        <>
            {/* 맵 */}
            <EventHall />

            {/* 조명 */}
            <Environment blur={1} background preset="sunset" />

            {/* 캐리터 */}
            <primitive visible={!talkBalloon.isShow} scale={playerScale} ref={playerRef} position={playerPosition} rotation={playerRotation} object={playerFile.scene}/>
            
            {/* NPC */}
            <primitive scale={Jayden.npcScale} position={Jayden.npcPosition} rotation={Jayden.npcRotation} object={Jayden.npcModel.scene}/>
            <primitive scale={Kevin.npcScale} position={Kevin.npcPosition} rotation={Kevin.npcRotation} object={Kevin.npcModel.scene}/>
        
            {/* 대화 범위 원 */}
            <Circle ref={Jayden.npcCircleRef} args={Jayden.npcCircleArgs} position={Jayden.npcCirclePosition} rotation={Jayden.npcCircleRotation} >
                <meshStandardMaterial attach={Jayden.npcCircleAttach} color={Jayden.npcCircleColor} emissive={Jayden.npcCircleEmissive} emissiveIntensity={Jayden.npcCircleEmissiveIntensity} side={Jayden.npcCircleSide} transparent={Jayden.npcCircleTransparent} opacity={Jayden.npcCircleOpacity} />
            </Circle>
            <Circle ref={Kevin.npcCircleRef} args={Kevin.npcCircleArgs} position={Kevin.npcCirclePosition} rotation={Kevin.npcCircleRotation} >
                <meshStandardMaterial attach={Kevin.npcCircleAttach} color={Kevin.npcCircleColor} emissive={Kevin.npcCircleEmissive} emissiveIntensity={Kevin.npcCircleEmissiveIntensity} side={Kevin.npcCircleSide} transparent={Kevin.npcCircleTransparent} opacity={Kevin.npcCircleOpacity} />
            </Circle>

            {/* 말풍선 */}
            { talkBalloon.isShow? <STTAndRecord lang={ LANGUAGE } /> : null }

            {/* 이름 */}
            <DaenName />
            <JadenName />
            <KevinName />

            {/* 벽 / 바닥 */}
            <group>
                { 
                    container.map((props, index) => 
                        <Wall 
                            key={index} 
                            {...props}                        
                        /> ) 
                }
            </group>
            
            {/* <axesHelper scale={100} /> */}
        </>
    )
}

/* useControls 사용법
    const KevinControls = useControls('Kevin', {
        position: [17.0, 0.8, -2.5],
        rotation: [0, 0, 0],
        scale: 1
    });

    <primitive 
        scale={KevinControls.scale} 
        position={KevinControls.position} 
        rotation={KevinControls.rotation.map(deg => THREE.MathUtils.degToRad(deg))}
        object={Kevin.npcModel.scene}
    />

    const KevinControls = useControls('Kevin', {
        cameraPosition: {
            value: [-3.44, 1.8, 2.33], // 배열로 전달
            step: 0.1, // 이러한 추가 옵션을 제공할 수 있습니다
        },
        cameraRotation: {
            value: [
            THREE.MathUtils.degToRad(-30.34),
            0,
            0,
            ], // 배열로 전달
            step: THREE.MathUtils.degToRad(1),
        },
    });
*/

import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"

export function Bonnie(props) {
  const { nodes, materials } = useGLTF('./name/Alphabat.gltf')

  // 각 mesh에 대한 참조를 생성합니다.
  const B = useRef();
  const O = useRef();
  const N1 = useRef();
  const N2 = useRef();
  const I = useRef();
  const E = useRef();
  // const refAE = useRef();

  // 매 프레임마다 실행될 콜백 함수입니다.
  useFrame(() => {
    // 시간에 따라 다르게 회전하도록 합니다.
    const time = Date.now() * 0.005; // 현재 시간을 초 단위로 가져옵니다.

    // 각 mesh의 회전을 업데이트합니다.
    B.current.rotation.y = Math.sin(time) * 0.2;
    O.current.rotation.y = Math.sin(time) * 0.2;
    N1.current.rotation.y = Math.sin(time) * 0.2;
    N2.current.rotation.y = Math.sin(time) * 0.2;
    I.current.rotation.y = Math.sin(time) * 0.2;
    E.current.rotation.y = Math.sin(time) * 0.2;
  });

  return (
    <group {...props} dispose={null}>
      <group scale={0.01} rotation={[0, 300, 0]} position={[7, 0, -0.6]}>
        <mesh ref={B} geometry={nodes.AB_text_0.geometry} material={materials.text} position={[-190, 0, 1]}/>
        <mesh ref={O} geometry={nodes.AO_text_0.geometry} material={materials.text} position={[1, 50, 1]} />
        <mesh ref={N1} geometry={nodes.AN_text_0.geometry} material={materials.text} position={[-120, 40, 1]} />
        <mesh ref={N2} geometry={nodes.AN_text_0.geometry} material={materials.text} position={[-80, 40, 1]} />
        <mesh ref={I} geometry={nodes.AI_text_0.geometry} material={materials.text} position={[100, 80, 1]} />
        <mesh  ref={E} geometry={nodes.AE_text_0.geometry} material={materials.text} position={[90, 0, 1]} />
        {/* <mesh ref={H} geometry={nodes.AH_text_0.geometry} material={materials.text} position={[40, 40, 1]}/> */}
        {/* <mesh ref={A} geometry={nodes.AA_text_0.geometry} material={materials.text} position={[1, 1, 1]} /> */}
        {/* <mesh ref={A2} geometry={nodes.AA_text_0.geometry} material={materials.text} position={[110, 1, 1]} /> */}
        {/* <mesh ref={S} geometry={nodes.AS_text_0.geometry} material={materials.text} position={[-120, -82, 1]}/> */}
        {/* <mesh ref={refAD} geometry={nodes.AD_text_0.geometry} material={materials.text} position={[-5, 85, 1]} /> */}
        {/* <mesh ref={refAJ} geometry={nodes.AJ_text_0.geometry} material={materials.text} position={[-155, -82, 1]} /> */}
        {/* <mesh geometry={nodes.AMesh_numbers_0.geometry} material={materials.numbers} /> */}
        {/* <mesh geometry={nodes.AC_text_0.geometry} material={materials.text} /> */}
        {/* <mesh geometry={nodes.AF_text_0.geometry} material={materials.text} /> */}
        {/* <mesh geometry={nodes.AG_text_0.geometry} material={materials.text} /> */}
        {/* <mesh geometry={nodes.AQ_text_0.geometry} material={materials.text} /> */}
        {/* <mesh geometry={nodes.AL_text_0.geometry} material={materials.text} /> */}
        {/* <mesh geometry={nodes.AK_text_0.geometry} material={materials.text} /> */}
        {/* <mesh geometry={nodes.AM_text_0.geometry} material={materials.text} /> */}
        {/* <mesh geometry={nodes.AP_text_0.geometry} material={materials.text} /> */}
        {/* <mesh geometry={nodes.AR_text_0.geometry} material={materials.text} /> */}
        {/* <mesh geometry={nodes.AV_text_0.geometry} material={materials.text} /> */}
        {/* <mesh geometry={nodes.AX_text_0.geometry} material={materials.text} /> */}
        {/* <mesh geometry={nodes.AY_text_0.geometry} material={materials.text} /> */}
        {/* <mesh geometry={nodes.AT_text_0.geometry} material={materials.text} /> */}
        {/* <mesh geometry={nodes.AU_text_0.geometry} material={materials.text} /> */}
        {/* <mesh geometry={nodes.AW_text_0.geometry} material={materials.text} /> */}
        {/* <mesh geometry={nodes.AZ_text_0.geometry} material={materials.text} /> */}
        {/* <mesh geometry={nodes.AMesh1_numbers_0.geometry} material={materials.numbers} /> */}
        {/* <mesh geometry={nodes.AMesh2_numbers_0.geometry} material={materials.numbers} /> */}
        {/* <mesh geometry={nodes.AMesh3_numbers_0.geometry} material={materials.numbers} /> */}
        {/* <mesh geometry={nodes.AMesh4_numbers_0.geometry} material={materials.numbers} /> */}
        {/* <mesh geometry={nodes.AMesh5_numbers_0.geometry} material={materials.numbers} /> */}
        {/* <mesh geometry={nodes.AMesh6_numbers_0.geometry} material={materials.numbers} /> */}
        {/* <mesh geometry={nodes.AMesh7_numbers_0.geometry} material={materials.numbers} /> */}
        {/* <mesh geometry={nodes.AMesh8_numbers_0.geometry} material={materials.numbers} /> */}
        {/* <mesh geometry={nodes.AMesh9_numbers_0.geometry} material={materials.numbers} /> */}
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

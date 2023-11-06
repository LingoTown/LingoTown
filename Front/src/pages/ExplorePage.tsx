import { Canvas } from "@react-three/fiber";
import { ExploreBtn } from "../component/explore/ExploreBtn";
import { Physics } from '@react-three/cannon';

interface ExplorePage {
  theme: JSX.Element;
}

export const ExplorePage: React.FC<ExplorePage> = (props: ExplorePage): JSX.Element => {
  return(
    <>
      <ExploreBtn />
      <Canvas style={{ height:"100vh" }}>
        <Physics defaultContactMaterial={{ friction: 0, restitution: 1 }} gravity={[0, -9.81, 0]}>
          {props.theme}
        </Physics>
      </Canvas>
    </>
  )
}

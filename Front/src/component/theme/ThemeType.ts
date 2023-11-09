export type KeyPressed = {
  ArrowUp: boolean;
  ArrowLeft: boolean;
  ArrowRight: boolean;
  ArrowDown: boolean;
}

export type AnimationAction = {
  reset: () => AnimationAction;
  fadeIn: (duration: number) => AnimationAction;
  play: () => AnimationAction;
  fadeOut: (duration: number) => void;
}

export type NpcInfo = {
  id: number;
  name: string;
  gender: string;
  targetPosition: any;
  targetRotation: any;
  ref: React.RefObject<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>;
};

export type CurrentNpc = {
  id: number;
  name: string | null;
  gender: string;
  img: any;
  targetPosition: any;
  targetRotation: any;
}

export type NPCData = {
  id: number;
  name: string;
  path: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  cameraPosition: [number, number, number];
  cameraRotation: [number, number, number];
  circleArgs: [number, number];
  circlePosition: [number, number, number];
  circleRotation: [number, number, number];
  circleAttach: string;
  circleColor: string;
  circleEmissive: string;
  circleEmissiveIntensity: number;
  circleSide: THREE.Side;
  circleTransparent: boolean;
  circleOpacity: number;
};
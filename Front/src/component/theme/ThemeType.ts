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
  img: string;
  ref: React.RefObject<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>;
};

export type CurrentNpc = {
  id: number;
  name: string | null;
  img: any;
}
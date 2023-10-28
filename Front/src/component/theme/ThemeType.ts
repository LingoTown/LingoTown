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

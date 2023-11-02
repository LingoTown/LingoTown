export const HandleKeyDown = (SetAction: (actionName: string, activeAction: any, actions: any) => void, keysPressed: any, activeAction: any, actions: any, isMove: React.RefObject<boolean>) => {
  return (event: KeyboardEvent): void => {
    if (isMove.current) {
      if (['ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        keysPressed.current[event.key as 'ArrowUp' | 'ArrowLeft' | 'ArrowRight'] = true;
        SetAction('Run', activeAction, actions);
      }
      if (['ArrowDown'].includes(event.key)) {
        keysPressed.current[event.key as 'ArrowDown'] = true;
        SetAction('Walk', activeAction, actions);
      }
    }
  };
};


export const HandleKeyUp = (SetAction: (actionName: string, activeAction: any, actions: any) => void, keysPressed: any, activeAction: any, actions: any, isMove: React.RefObject<boolean>) => {
  return (event: KeyboardEvent): void => {
    if (isMove.current) {
      if (['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown'].includes(event.key)) {
        keysPressed.current[event.key as 'ArrowUp' | 'ArrowLeft' | 'ArrowRight' | 'ArrowDown'] = false;
        if (Object.values(keysPressed.current).every(key => !key)) {
          SetAction('Idle', activeAction, actions);
        }
      }
    }
  };
};



export const HandleKeyDown = (SetAction: (actionName: string, activeAction: any, actions: any, playerRef: any) => void, keysPressed: any, activeAction: any, actions: any, isMove: React.RefObject<boolean>, playerRef: any) => {
  return (event: KeyboardEvent): void => {
    if (isMove.current) {
      if (['ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        keysPressed.current[event.key as 'ArrowUp' | 'ArrowLeft' | 'ArrowRight'] = true;
        SetAction('Run', activeAction, actions, playerRef);
      }
      if (['ArrowDown'].includes(event.key)) {
        keysPressed.current[event.key as 'ArrowDown'] = true;
        SetAction('Walk', activeAction, actions, playerRef);
      }

      /* 사용자가 J 키를 눌렀을 때 */
      if(event.key === 'j' || event.key === 'J') {

        // State Setting
        keysPressed.current['Victory'] = true;
        
        // Jump Trigger
        SetAction('Victory', activeAction, actions, playerRef);
      }


    }
  };
};


export const HandleKeyUp = (SetAction: (actionName: string, activeAction: any, actions: any, playerRef: any) => void, keysPressed: any, activeAction: any, actions: any, isMove: React.RefObject<boolean>, playerRef: any) => {
  return (event: KeyboardEvent): void => {
    if (isMove.current) {
      if (['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown'].includes(event.key)) {
        keysPressed.current[event.key as 'ArrowUp' | 'ArrowLeft' | 'ArrowRight' | 'ArrowDown'] = false;
        if (Object.values(keysPressed.current).every(key => !key)) {
          SetAction('Idle', activeAction, actions, playerRef);
        }
      }

      /* 사용자가 J 키를 해제 했을 때 */
      if(event.key === 'j' || event.key === 'J') {
            
        // State Setting
        keysPressed.current['Victory'] = false;
      }

    }
  };
};



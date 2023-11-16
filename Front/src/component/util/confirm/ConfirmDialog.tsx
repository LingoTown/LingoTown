import { useState, useMemo } from 'react';
import CustomConfirm from './CustomConfirm';
import ConfirmContext from './ConfirmContext';
import { ConfirmType } from './ConfirmType';

const ConfirmDialog = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<ConfirmType>();

  const confirm = (title? : string, message?: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setState({
        title: title ?? "Confirm",
        message: message ?? '',
        onClickOK: () => {
          setState(undefined);
          resolve(true);
        },
        onClickCancel: () => {
          setState(undefined);
          resolve(false);
        },
      });
    });
  };

  const contextValue = useMemo(() => ({ confirm }), []); // confirm 함수는 변경되지 않으므로 의존성 배열이 비어있습니다.

  return (
    <ConfirmContext.Provider value={contextValue}>
      {children}
      {state && (
        <CustomConfirm
          title={state.title}
          message={state.message}
          onClickOK={state.onClickOK}
          onClickCancel={state.onClickCancel}
        />
      )}
    </ConfirmContext.Provider>
  );
};

export default ConfirmDialog;

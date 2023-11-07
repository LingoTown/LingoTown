import { useState } from 'react';
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

  return (
    <ConfirmContext.Provider value={{ confirm }}>
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

import React, { useState, useMemo } from 'react';
import AlertContext from './AlertContext';
import CustomAlert from './CustomAlert';
import { AlertType } from './AlertType';

const AlertDialog = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<AlertType>();

  const alert = (title?: string, message?: string): Promise<undefined> => {
    return new Promise((resolve) => {
      setState({
        title: title ?? "LingoTown",
        message: message !== undefined ? `${message}` : '',
        onClose: () => {
          setState(undefined);
          resolve(undefined);
        },
      });
    });
  };

  const contextValue = useMemo(() => ({ alert }), []); // alert 함수는 변경되지 않으므로 의존성 배열이 비어있습니다.

  return (
    <AlertContext.Provider value={contextValue}>
      {children}
      {state && <CustomAlert title={state.title} message={state.message} onClose={state.onClose} />}
    </AlertContext.Provider>
  );
};

export default AlertDialog;

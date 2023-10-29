import { useState } from 'react';
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

  return (
    <AlertContext.Provider value={{ alert }}>
      {children}
      {state && <CustomAlert title={state.title} message={state.message} onClose={state.onClose} />}
    </AlertContext.Provider>
  );
};

export default AlertDialog;

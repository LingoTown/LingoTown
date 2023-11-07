import { useState } from 'react';
import PromptContext from './PromptContext';
import CustomPrompt from './CustomPrompt';
import { PromptType } from './PromptType';

const PromptDialog = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<PromptType>();
  const prompt = (
    title?: string,
    message?: string,
    _default?: string
  ): Promise<string | null> => {
    return new Promise((resolve) => {
      setState({
        title: title ?? '',
        message: message ?? '',
        _default: _default ?? '',
        onClickOK: (result: string) => {
          setState(undefined);
          resolve(result);
        },
        onClickCancel: () => {
          setState(undefined);
          resolve(null);
        },
      });
    });
  };

  return (
    <PromptContext.Provider value={{ prompt }}>
      {children}
      {state && (
        <CustomPrompt
          title={state.title}
          message={state.message}
          _default={state._default}
          onClickOK={state.onClickOK}
          onClickCancel={state.onClickCancel}
        />
      )}
    </PromptContext.Provider>
  );
};

export default PromptDialog;

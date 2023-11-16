import { useState, useMemo } from 'react';
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

  const contextValue = useMemo(() => ({ prompt }), []); // prompt 함수는 변경되지 않으므로 의존성 배열이 비어있습니다.

  return (
    <PromptContext.Provider value={contextValue}>
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

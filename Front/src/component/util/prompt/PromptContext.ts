import { createContext } from 'react';

type Type = {
  prompt: (title? : string, message?: string, _default?: string) => Promise<string | null>;
};

const PromptContext = createContext<Type>({
  prompt: () => new Promise((_, reject) => reject(new Error('Prompt Context function not implemented'))),
});

export default PromptContext;

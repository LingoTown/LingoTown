import { createContext } from 'react';

type Type = {
  confirm: (title?: string, message?: string) => Promise<boolean>;
};

const ConfirmContext = createContext<Type>({
  confirm: () => new Promise((_, reject) => reject(new Error('Confirm function not implemented'))),
});

export default ConfirmContext;

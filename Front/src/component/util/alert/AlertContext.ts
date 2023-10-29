import { createContext } from 'react';

type Type = {
  alert: (title?: string, message?: string) => Promise<undefined>;
};

const AlertContext = createContext<Type>({
  alert: () => new Promise((_, reject) => reject()),
});

export default AlertContext;

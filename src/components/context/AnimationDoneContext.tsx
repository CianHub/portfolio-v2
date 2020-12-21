import { createContext } from 'react';

export const AnimationDoneContext = createContext<{
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}>({ state: false, setState: () => {} });

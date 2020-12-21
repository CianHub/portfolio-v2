import React, { useState } from 'react';
import { AnimationDoneContext } from './AnimationDoneContext';

export const AnimationDoneContextProvider: React.FC = ({ children }) => {
  const [animationFinished, setAnimationFinished] = useState(false);

  const contextValue = {
    state: animationFinished,
    setState: setAnimationFinished,
  };

  return (
    <AnimationDoneContext.Provider value={contextValue}>
      {children}
    </AnimationDoneContext.Provider>
  );
};

import React from 'react';
import { StyledBoxContainer } from '../../styles/StyledBoxContainer/StyledBoxContainer';
import Theme from '../../styles/theme';

export const BoxContainer: React.FC = ({ children }) => {
  return <StyledBoxContainer theme={Theme}>{children}</StyledBoxContainer>;
};

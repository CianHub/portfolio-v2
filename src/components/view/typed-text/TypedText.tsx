import React, { useEffect } from 'react';
import { StyledTypedText } from '../../styles/StyledTypedText/StyledTypedText';

interface Props {
  textToType: string;
  textToDisplay: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  textTyped: boolean;
  setTextTyped: React.Dispatch<React.SetStateAction<boolean>>;
  firstLine?: boolean;
  fontColor?: string;
}

export const TypedText: React.FC<Props> = ({
  textToType,
  textToDisplay,
  setText,
  setTextTyped,
  textTyped,
  firstLine,
  fontColor,
}) => {
  let textIndex = 0;
  let currentText = '';

  useEffect(() => {
    !textTyped && type();
  }, []);

  const type = (): void => {
    if (currentText?.length === textToType?.length) {
      textIndex = 0;
      setTextTyped(true);
      return;
    }

    currentText = textToType?.slice(0, ++textIndex);

    setText(currentText);
    setTimeout(() => type(), 50);
  };

  return (
    <StyledTypedText
      showBlinker={!textTyped}
      firstLine={firstLine}
      fontColor={fontColor}
    >
      {textToDisplay}
    </StyledTypedText>
  );
};

import React, { useEffect } from 'react';
import { StyledTypedText } from '../../styles/StyledTypedText/StyledTypedText';
import { Fade } from 'react-awesome-reveal';

interface Props {
  index: number;
  textToType: string;
  textToDisplay: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  textTyped: boolean;
  setTextTyped: React.Dispatch<React.SetStateAction<boolean>>;
  firstLine?: boolean;
  fontColor?: string;
  animationFinished: boolean;
}

export const TypedText: React.FC<Props> = ({
  textToType,
  textToDisplay,
  setText,
  setTextTyped,
  textTyped,
  firstLine,
  fontColor,
  animationFinished,
}) => {
  let textIndex = 0;
  let currentText = '';

  useEffect(() => {
    const timedType = () => setTimeout(() => type(), 50);

    let timerId: number;

    const type = (): void => {
      if (currentText?.length === textToType?.length) {
        textIndex = 0;
        setTextTyped(true);
        return;
      }

      currentText = textToType?.slice(0, ++textIndex);

      setText(currentText);
      timerId = timedType();
    };

    !textTyped && type();

    return () => {
      timerId && clearTimeout(timerId);
    };
  }, []);

  return (
    <Fade>
      <StyledTypedText
        role={'presentation'}
        showBlinker={!textTyped}
        firstLine={firstLine}
        fontColor={fontColor}
      >
        {animationFinished ? textToType : textToDisplay}
      </StyledTypedText>
    </Fade>
  );
};

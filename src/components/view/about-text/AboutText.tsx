import React, { useState } from 'react';
import Theme from '../../styles/theme';
import { TypedText } from '../typed-text/TypedText';

const aboutText: string[] = [
  'Hello World, ',
  'my name is Cian and I’m a full-stack developer.',
  'I love to make stuff with JavaScript/TypeScript, React, Node, Python and pretty much any other modern web technology.',

  ' (I also ❤️ Muay Thai and pugs.)',
];

export const AboutText: React.FC = () => {
  const [textLine, setTextLine] = useState<string>('');
  const [textLineDone, setTextLineDone] = useState<boolean>(false);

  const [textLine1, setTextLine1] = useState<string>('');
  const [textLine1Done, setTextLine1Done] = useState<boolean>(false);

  const [textLine2, setTextLine2] = useState<string>('');
  const [textLine2Done, setTextLine2Done] = useState<boolean>(false);

  const [textLine3, setTextLine3] = useState<string>('');
  const [textLine3Done, setTextLine3Done] = useState<boolean>(false);

  const typedText = [
    <TypedText
      key="text-line"
      textToDisplay={textLine}
      textToType={aboutText[0]}
      setText={setTextLine}
      setTextTyped={setTextLineDone}
      textTyped={textLineDone}
      firstLine={true}
      fontColor={Theme.colors.green}
    />,
    <TypedText
      key="text-line1"
      textToDisplay={textLine1}
      textToType={aboutText[1]}
      setText={setTextLine1}
      setTextTyped={setTextLine1Done}
      textTyped={textLine1Done}
      firstLine={true}
    />,
    <TypedText
      key="text-line2"
      textToDisplay={textLine2}
      textToType={aboutText[2]}
      setText={setTextLine2}
      setTextTyped={setTextLine2Done}
      textTyped={textLine2Done}
    />,
    <TypedText
      key="text-line3"
      textToDisplay={textLine3}
      textToType={aboutText[3]}
      setText={setTextLine3}
      setTextTyped={setTextLine3Done}
      textTyped={textLine3Done}
    />,
  ];

  const typeText = () => {
    const textTypedLines = [typedText[0]];

    if (textLineDone) textTypedLines.push(typedText[1]);
    if (textLine1Done) textTypedLines.push(typedText[2]);
    if (textLine2Done) textTypedLines.push(typedText[3]);

    return textTypedLines;
  };

  return <div>{typeText()}</div>;
};

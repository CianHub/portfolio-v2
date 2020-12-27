import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimationDoneContext } from '../../context/AnimationDoneContext';
import { StyledLink } from '../../styles/StyledLink/StyledLink';
import Theme from '../../styles/theme';
import { TypedText } from '../typed-text/TypedText';
import { Fade } from 'react-awesome-reveal';

const aboutText: string[] = [
  'Hello World, ',
  'my name is Cian and I’m a software engineer.',
  'I love to make stuff with JavaScript/TypeScript, React, Node, Python and pretty much any other modern web technology.',

  ' (I also ❤️  Muay Thai and pugs.)',
];

export const AboutText: React.FC = () => {
  const { state, setState } = useContext(AnimationDoneContext);

  const [textLine, setTextLine] = useState<string>('');
  const [textLineDone, setTextLineDone] = useState<boolean>(state);

  const [textLine1, setTextLine1] = useState<string>('');
  const [textLine1Done, setTextLine1Done] = useState<boolean>(state);

  const [textLine2, setTextLine2] = useState<string>('');
  const [textLine2Done, setTextLine2Done] = useState<boolean>(state);

  const [textLine3, setTextLine3] = useState<string>('');
  const [textLine3Done, setTextLine3Done] = useState<boolean>(state);

  useEffect(() => {
    if (textLine3Done && !state) setState(true);
    return () => {
      !state && setState(true);
    };
  }, []);

  const typedText = [
    <TypedText
      animationFinished={state}
      index={0}
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
      animationFinished={state}
      index={1}
      key="text-line1"
      textToDisplay={textLine1}
      textToType={aboutText[1]}
      setText={setTextLine1}
      setTextTyped={setTextLine1Done}
      textTyped={textLine1Done}
      firstLine={true}
    />,
    <TypedText
      animationFinished={state}
      index={2}
      key="text-line2"
      textToDisplay={textLine2}
      textToType={aboutText[2]}
      setText={setTextLine2}
      setTextTyped={setTextLine2Done}
      textTyped={textLine2Done}
    />,
    <TypedText
      animationFinished={state}
      index={3}
      key="text-line3"
      textToDisplay={textLine3}
      textToType={aboutText[3]}
      setText={setTextLine3}
      setTextTyped={setTextLine3Done}
      textTyped={textLine3Done}
    />,
  ];

  const typeText = (): JSX.Element[] => {
    const textTypedLines = [typedText[0]];

    if (textLineDone) textTypedLines.push(typedText[1]);
    if (textLine1Done) textTypedLines.push(typedText[2]);
    if (textLine2Done) textTypedLines.push(typedText[3]);

    return state ? typedText : textTypedLines;
  };

  const showLink = () =>
    textLine3Done && (
      <Fade>
        <div role="link">
          <StyledLink theme={Theme}>
            <Link to="/projects">View Projects &gt;</Link>
          </StyledLink>
        </div>
      </Fade>
    );

  return (
    <div role="article">
      {typeText()}
      {showLink()}
    </div>
  );
};

import styled from 'styled-components';

interface StyledTypedTextProps {
  showBlinker: boolean;
  firstLine?: boolean;
  fontColor?: string;
}

export const StyledTypedText = styled.div<StyledTypedTextProps>`
  font-size: ${(props) => (props.firstLine ? '2rem' : '1.2rem')};
  margin-top: ${(props) => (props.firstLine ? '0' : '1rem')};
  margin-bottom: ${(props) => (props.firstLine ? '1rem' : '0')};
  display: ${(props) => (props.firstLine ? 'inline' : 'default')};
  color: ${(props) => (props.fontColor ? props.fontColor : 'default')};
  transition: all 0.4s ease-in-out;

  &:after {
    content: '';
    border-right: ${(props) =>
      props.showBlinker ? '2px solid white' : 'none'};
    animation: blink 0.5s infinite ease;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (min-width: 1024px) {
    font-size: ${(props) => (props.firstLine ? '2rem' : '1.2rem')};
  }
`;

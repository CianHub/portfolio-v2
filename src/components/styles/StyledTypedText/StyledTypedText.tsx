import styled from 'styled-components';

interface StyledTypedTextProps {
  showBlinker: boolean;
  firstLine?: boolean;
  fontColor?: string;
}

export const StyledTypedText = styled.div<StyledTypedTextProps>`
  font-size: ${(props) => (props.firstLine ? '1.5rem' : '1rem')};
  margin-top: ${(props) => (props.firstLine ? '0' : '1rem')};
  display: ${(props) => (props.firstLine ? 'inline' : 'default')};
  color: ${(props) => (props.fontColor ? props.fontColor : 'default')};

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
`;

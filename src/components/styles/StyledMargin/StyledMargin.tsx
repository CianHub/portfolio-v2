import styled from 'styled-components';

interface StyledMarginProps {
  readonly fontColor?: string;
}

export const StyledMargin = styled.div<StyledMarginProps>`
  color: ${(props) =>
    props?.fontColor ? props?.fontColor : props.theme.colors.white};
  padding: 1rem;
  padding-top: 0.3rem;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.monaco};
  height: 100%;
`;

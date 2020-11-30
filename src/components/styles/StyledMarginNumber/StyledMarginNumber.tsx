import styled from 'styled-components';

interface StyledMarginNumberProps {
  readonly fontColor?: string;
}

export const StyledMarginNumber = styled.section<StyledMarginNumberProps>`
  color: ${(props) =>
    props?.fontColor ? props?.fontColor : props.theme.colors.white};
  padding-bottom: 0.3rem;
  font-family: ${(props) => props.theme.fonts.monaco};
`;

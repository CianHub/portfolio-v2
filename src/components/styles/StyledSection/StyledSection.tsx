import styled from 'styled-components';

interface StyledSectionProps {
  readonly backgroundColor?: string;
  readonly fontColor?: string;
}

export const StyledSection = styled.section<StyledSectionProps>`
  background-color: ${(props) =>
    props?.backgroundColor ? props?.backgroundColor : props.theme.colors.black};
  color: ${(props) =>
    props?.fontColor ? props?.fontColor : props.theme.colors.white};
  padding: 1rem;
  display: flex;
  font-family: ${(props) => props.theme.fonts.monaco};
  min-height: 100vh;
  height: 100%;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

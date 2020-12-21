import styled from 'styled-components';

interface StyledSectionProps {
  readonly backgroundColor?: string;
  readonly fontColor?: string;
  readonly vertical?: boolean;
}

export const StyledSection = styled.section<StyledSectionProps>`
  background-color: ${(props) =>
    props?.backgroundColor ? props?.backgroundColor : props.theme.colors.black};
  color: ${(props) =>
    props?.fontColor ? props?.fontColor : props.theme.colors.white};
  padding: 1rem;
  display: flex;
  flex-direction: ${(props) => (props?.vertical ? 'column' : 'row')};
  font-family: ${(props) => props.theme.fonts.monaco};
  align-items: center;
  min-height: 85vh;
  justify-content: center;

  @media (min-width: 1024px) {
    min-height: 80vh;
    justify-content: center;
    margin-left: 2.5rem;
  }
`;

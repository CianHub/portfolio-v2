import styled from 'styled-components';

interface StyledNavbarProps {
  readonly backgroundColor?: string;
  readonly fontColor?: string;
}

export const StyledNavbar = styled.nav<StyledNavbarProps>`
  background-color: ${(props) =>
    props?.backgroundColor ? props?.backgroundColor : props.theme.colors.black};
  color: ${(props) =>
    props?.fontColor ? props?.fontColor : props.theme.colors.white};
  padding: 1rem;
  padding-left: 0;
  display: flex;
  font-family: ${(props) => props.theme.fonts.monaco};
  justify-content: flex-start;

  @media (min-width: 1024px) {
    justify-content: flex-start;
    padding-left: 1rem;
  }
`;

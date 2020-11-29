import styled from 'styled-components';

interface StyledNavLinkProps {
  readonly fontColor?: string;
  readonly isActive?: boolean;
}

export const StyledNavLink = styled.div<StyledNavLinkProps>`
  a {
    color: ${(props) =>
      props.fontColor && props.isActive
        ? props.fontColor
        : props.theme.colors.white};
    display: flex;
    font-family: ${(props) => props.theme.fonts.monaco};
    text-decoration: none;
    transition: 200ms ease-in-out;
    margin-left: 0;
  }
  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    margin-left: 2.5rem;
  }
`;

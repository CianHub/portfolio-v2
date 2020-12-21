import styled from 'styled-components';

interface StyledLinkProps {
  readonly fontColor?: string;
}

export const StyledLink = styled.div<StyledLinkProps>`
  a {
    color: ${(props) =>
      props.fontColor ? props.fontColor : props.theme.colors.white};
    display: flex;
    font-family: ${(props) => props.theme.fonts.monaco};
    text-decoration: none;
    transition: 200ms ease-in-out;
    margin-top: 2rem;
    border: 2px white solid;
    width: 150px;
    padding: 0.5rem;
  }

  a:hover {
    color: ${(props) => props.theme.colors.black};
    background-color: white;
    cursor: pointer;
  }
`;

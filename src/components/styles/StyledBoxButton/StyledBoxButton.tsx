import styled from 'styled-components';

export const StyledBoxButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colors.black};
  width: auto;
  padding: 0.5rem;
  font-family: ${(props) => props.theme.fonts.monaco};
  border: 1px solid ${(props) => props.theme.colors.black};
  align-self: flex-start;
  font-size: 1rem;
  transition: 200ms ease-in-out;
  margin-bottom: 1rem;
  outline: 0;

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
  }
`;

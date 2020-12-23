import styled from 'styled-components';

export const StyledCheckBoxContainer = styled.label`
  display: flex;
  position: relative;
  cursor: pointer;
  font-size: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  align-items: center;

  input {
    margin-left: 0.5rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

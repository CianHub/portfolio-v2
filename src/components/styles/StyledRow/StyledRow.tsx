import styled from 'styled-components';

export const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: self-end;
  justify-content: center;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    width: auto;
  }
`;

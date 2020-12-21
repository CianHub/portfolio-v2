import styled from 'styled-components';

export const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

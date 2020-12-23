import styled from 'styled-components';

export const StyledProjectFilter = styled.div`
  align-self: flex-start;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

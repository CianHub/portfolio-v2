import styled from 'styled-components';

export const StyledSortingSelect = styled.select`
  padding: 0.3rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  width: 50%;
  font-family: ${(props) => props.theme.fonts.monaco};

  @media (min-width: 1024px) {
    width: 25%;
  }
`;

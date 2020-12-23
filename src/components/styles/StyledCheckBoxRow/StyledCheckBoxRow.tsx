import styled from 'styled-components';

export const StyledCheckBoxRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.26rem;
  justify-self: flex-end;
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 0;

  @media (min-width: 1024px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
  }
`;

import styled from 'styled-components';

export const StyledBoxContainer = styled.div`
  flex: 1 1 100%;
  margin-right: 0;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  border-radius: 1px;
  padding: 1rem;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s;

  @media (min-width: 1024px) {
    margin-right: 1rem;
    flex: 1 1 25%;
    width: 30%;
  }
`;

import styled from 'styled-components';

export const AlertModalContentContainer = styled.div`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  background-color: ${({ theme }) => theme.colors.white};
`;

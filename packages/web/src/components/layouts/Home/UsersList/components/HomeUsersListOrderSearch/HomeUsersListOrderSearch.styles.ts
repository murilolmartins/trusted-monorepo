import styled from 'styled-components';

export const HomeUsersListOrderSearchContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.gaps.xsmall};
  flex-wrap: wrap;
  justify-content: center;
`;

export const HomeUsersListOrderSearchText = styled.label`
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

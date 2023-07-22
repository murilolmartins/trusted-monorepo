import styled from 'styled-components';

export const HomeRegisterUsersListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const HomeRegisterUsersListTitle = styled.h3``;

export const HomeRegisterUsersListItemsContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  max-width: 400px;
  flex-wrap: wrap;
`;

export const HomeRegisterUsersListItem = styled.div``;

export const HomeRegisterUsersListItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: fit-content;
  padding: 8px;
  border-radius: 15px;
`;

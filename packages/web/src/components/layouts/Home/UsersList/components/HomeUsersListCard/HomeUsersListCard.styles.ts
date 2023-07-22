import Image from 'next/image';

import styled from 'styled-components';

export const HomeUsersListCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  gap: 10px;
  box-shadow: 0 0 30px 5px rgba(28, 43, 76, 0.1);
  border: none;
  border-radius: 15px;
  cursor: pointer;
  :hover {
    transform: scale(1.03);
    .hidden_play {
      display: initial;
    }
    .text_primary_color {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  max-width: 450px;
`;

export const HomeUsersListCardImageContainer = styled.div`
  width: 150px;
  height: 150px;
`;

export const HomeUsersListCardImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 15px 15px 0 0;
`;

export const HomeUsersListCardInfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0 0 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const HomeUsersListCardTitle = styled.h3``;

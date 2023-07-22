import type { ReactNode } from 'react';

import * as S from './HomeUsersListHeader.styles';

interface HomeUsersListHeaderProps {
  children: ReactNode;
}

export const HomeUsersListHeader = ({ children }: HomeUsersListHeaderProps) => {
  return (
    <S.HomeUsersListHeaderContainer>{children}</S.HomeUsersListHeaderContainer>
  );
};

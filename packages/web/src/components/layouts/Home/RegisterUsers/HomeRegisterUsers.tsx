import { PageSection } from '@components-common';

import { HomeRegisterUsersForm } from './components/HomeRegisterUsersForm/HomeRegisterUsersForm';
import { HomeRegisterUsersList } from './components/HomeRegisterUsersList/HomeRegisterUsersList';
import * as S from './HomeRegisterUsers.styles';

const HomeRegisterUsers = () => {
  return (
    <PageSection>
      <S.HomeRegisterUsersContainer>
        <S.HomeRegisterUsersTitle>Adicionar usuários</S.HomeRegisterUsersTitle>
        <S.HomeRegisterUsersDescription>
          Digite o login do github do usuário que deseja adicionar
        </S.HomeRegisterUsersDescription>
        <HomeRegisterUsersForm />
        <HomeRegisterUsersList />
      </S.HomeRegisterUsersContainer>
    </PageSection>
  );
};

export { HomeRegisterUsers };

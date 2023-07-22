import { Button } from '@components-common';
import { useRegisterUsers } from '@hooks';

import * as S from './HomeRegisterUsersList.styles';

import { CloseCircleOutlined } from '@ant-design/icons';
import { useUsersLogin } from 'hooks/useUsersLogin';

const HomeRegisterUsersList = () => {
  const { mutation } = useRegisterUsers();
  const { usersLoginList, handleRemoveUserLogin } = useUsersLogin();

  if (usersLoginList.length === 0) return null;

  return (
    <S.HomeRegisterUsersListContainer>
      <S.HomeRegisterUsersListTitle>
        Lista de usuários para envio
      </S.HomeRegisterUsersListTitle>
      <S.HomeRegisterUsersListItemsContainer>
        {usersLoginList.map((userLogin) => (
          <S.HomeRegisterUsersListItemContainer key={userLogin}>
            <S.HomeRegisterUsersListItem>
              {userLogin}
            </S.HomeRegisterUsersListItem>
            <CloseCircleOutlined
              onClick={() => handleRemoveUserLogin(userLogin)}
            />
          </S.HomeRegisterUsersListItemContainer>
        ))}
      </S.HomeRegisterUsersListItemsContainer>
      <Button onClick={() => mutation.mutate(usersLoginList)}>Enviar</Button>
    </S.HomeRegisterUsersListContainer>
  );
};

export { HomeRegisterUsersList };

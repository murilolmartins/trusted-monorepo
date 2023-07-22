import { useState } from 'react';

import { Button, PageSection } from '@components-common';
import { useRegisterUsers } from '@hooks';

import * as S from './HomeAddUsers.styles';

import { Input } from 'antd';

const HomeAddUsers = () => {
  const { mutation } = useRegisterUsers();
  const [input, setInput] = useState('');
  return (
    <PageSection>
      <S.HomeAddUsersContainer>
        <S.HomeAddUsersTitle>Adicionar usuários</S.HomeAddUsersTitle>
        <S.HomeAddUsersDescription>
          Digite o login do github do usuário que deseja adicionar
        </S.HomeAddUsersDescription>
        <Input
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <Button onClick={() => mutation.mutate([input])} />
      </S.HomeAddUsersContainer>
    </PageSection>
  );
};

export { HomeAddUsers };

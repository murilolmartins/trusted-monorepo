import { memo } from 'react';

import * as S from './HomeUsersListOrderSearch.styles';

import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

interface HomeUsersListOrderSearchProps {
  handleOrderSearchUsers: (searchInput: string) => void;
}

const HomeUsersListOrderSearch = ({
  handleOrderSearchUsers
}: HomeUsersListOrderSearchProps) => {
  return (
    <S.HomeUsersListOrderSearchContainer>
      <S.HomeUsersListOrderSearchText>
        Pesquisar por id ou login:
      </S.HomeUsersListOrderSearchText>
      <Input
        addonBefore={<SearchOutlined />}
        style={{ width: 180 }}
        onChange={(e) => handleOrderSearchUsers(e.target.value)}
      />
    </S.HomeUsersListOrderSearchContainer>
  );
};

export default memo(HomeUsersListOrderSearch);
